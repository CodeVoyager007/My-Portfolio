import { NextResponse } from 'next/server';
import { resend } from '@/lib/resend';

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, inquiryType, message } = await req.json();
    if (!name || !email || !subject || !inquiryType || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }
    const html = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
      <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
    `;
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['ayeshamughal2162@gmail.com'],
      subject: `Contact: ${subject} (${inquiryType}) from ${name}`,
      replyTo: email,
      html,
    });
    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
} 