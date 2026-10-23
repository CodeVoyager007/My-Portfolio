import { NextResponse } from "next/server";
import { config } from "@/data/config";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort per-IP limit. Serverless instances don't share memory, so this only slows down bursts.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const MAX_TRACKED_IPS = 10_000;
const MAX_BODY_BYTES = 16 * 1024;
const hits = new Map<string, number[]>();
let requestsSinceCleanup = 0;

function isRateLimited(ip: string) {
  const now = Date.now();
  requestsSinceCleanup += 1;
  if (requestsSinceCleanup >= 100) {
    for (const [trackedIp, timestamps] of hits) {
      const recent = timestamps.filter((timestamp) => now - timestamp < RATE_WINDOW_MS);
      if (recent.length === 0) hits.delete(trackedIp);
      else hits.set(trackedIp, recent);
    }
    requestsSinceCleanup = 0;
  }

  if (!hits.has(ip) && hits.size >= MAX_TRACKED_IPS) return true;
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

async function readJsonBody(request: Request): Promise<unknown> {
  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    throw new RangeError("Request body too large.");
  }

  if (!request.body) throw new SyntaxError("Request body is missing.");
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    totalBytes += value.byteLength;
    if (totalBytes > MAX_BODY_BYTES) {
      await reader.cancel();
      throw new RangeError("Request body too large.");
    }
    chunks.push(value);
  }

  const bytes = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return JSON.parse(new TextDecoder().decode(bytes));
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) {
    return NextResponse.json({ error: "Content-Type must be application/json." }, { status: 415 });
  }

  let parsedBody: unknown;
  try {
    parsedBody = await readJsonBody(request);
  } catch (error) {
    if (error instanceof RangeError) {
      return NextResponse.json({ error: "Request body is too large." }, { status: 413 });
    }
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!parsedBody || typeof parsedBody !== "object" || Array.isArray(parsedBody)) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const body = parsedBody as Record<string, unknown>;
  const name = typeof body.name === "string" ? body.name.trim().replace(/[\r\n]+/g, " ") : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const honeypot = typeof body.company === "string" ? body.company : "";

  // Bots fill the hidden field; pretend success so they don't retry.
  if (honeypot) return NextResponse.json({ ok: true });

  if (!name || name.length > 100) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || email.length > 200) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (message.length < 10 || message.length > 5000) {
    return NextResponse.json(
      { error: "Your message should be between 10 and 5000 characters." },
      { status: 400 }
    );
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = request.headers.get("x-real-ip")?.trim() || forwardedFor?.split(",").at(-1)?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages. Please try again in a few minutes." },
      { status: 429 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set.");
    return NextResponse.json(
      { error: "The contact form is not configured yet." },
      { status: 500 }
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || config.contact.email;
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

  let res: Response;
  try {
    res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        html: `<p><strong>Name:</strong> ${escapeHtml(name)}<br/><strong>Email:</strong> ${escapeHtml(email)}</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
      }),
      signal: AbortSignal.timeout(10_000),
    });
  } catch (error) {
    console.error("Contact form: Resend request failed.", error);
    return NextResponse.json(
      { error: "Your message couldn't be sent. Please email me directly." },
      { status: 502 }
    );
  }

  if (!res.ok) {
    console.error("Contact form: Resend returned", res.status, await res.text());
    return NextResponse.json(
      { error: "Your message couldn't be sent. Please email me directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
