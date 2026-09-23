"use client";

import Navbar from "@/components/Navbar";
import SocialIcons from "@/components/SocialIcons";
import Cursor from "@/components/Cursor";
import { config } from "@/data/config";
import Link from "next/link";
import { MdTimeline, MdArrowOutward } from "react-icons/md";
import "@/components/styles/MyWorks.css";

const milestones = [
  {
    date: "June 2026",
    title: "Stanford Code in Place 2026 Graduation",
    category: "Academic & Engineering",
    description: "Built interactive software applications in Python. Completed full Stanford CS106A curriculum in the Experienced Student track with official completion certificate signed by Professor Christopher Piech.",
    tags: ["Python", "Stanford CS106A", "Software Engineering", "Algorithms"],
  },
  {
    date: "June 2026",
    title: "Google Cloud & Generative AI Badges",
    category: "Cloud & AI Architecture",
    description: "Earned 1,060+ points and verified credentials across AI Agents, Google ADK, Cloud Run, LLMs, and Generative AI on Google Cloud Skills Boost.",
    tags: ["Google Cloud", "Generative AI", "LLMs", "AI Agents", "Google ADK"],
  },
  {
    date: "May 2026",
    title: "National AI Competition Contender",
    category: "Hackathons",
    description: "Built AI heritage & historical application deployed on Google Cloud Run utilizing Gemini API, Google ADK, and Vector RAG pipelines.",
    tags: ["Gemini API", "Google ADK", "RAG", "Google Cloud Run", "Next.js"],
  },
  {
    date: "April 2026",
    title: "Stanford Code in Place 2026 Acceptance",
    category: "Academic Honor",
    description: "Accepted into Stanford Code in Place out of thousands of global applicants. Placed directly into the Experienced Student track.",
    tags: ["Python", "Stanford", "Algorithms"],
  },
  {
    date: "April 2026",
    title: "1.4M+ Cumulative Views on Medium",
    category: "Technical Publishing",
    description: "Reached 1.4M+ cumulative Medium views by April 2026. Published flagship articles 'Vibe Coding Is Dead' and 'I Didn't Pay a Single Dollar to Use Claude Code' in In Plain English.",
    tags: ["Technical Writing", "Medium", "AI Architecture", "Python"],
  },
  {
    date: "March 2026",
    title: "Ramadan Prompting Nights: Top 5 of 317",
    category: "AI Prompting Competition",
    description: "Won Top 5 out of 317 international prompt engineers for multi-step agentic prompt design and LLM benchmark accuracy.",
    tags: ["Prompt Engineering", "LLMs", "Agentic Workflows"],
  },
  {
    date: "April 2025 – Present",
    title: "Technical Writer at In Plain English",
    category: "Publication",
    description: "Joined Artificial Intelligence in Plain English on Medium as a regular technical writer, crafting guides for global developer audiences.",
    tags: ["Writing", "Python", "JavaScript", "AI Agents"],
  },
];

export default function JourneyPage() {
  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />

      <main className="section-container" style={{ paddingTop: "140px", paddingBottom: "100px", minHeight: "100vh" }}>
        {/* Header */}
        <div style={{ marginBottom: "60px", textAlign: "center" }}>
          <span style={{ font: "12px var(--font-mono, monospace)", color: "var(--accentColor)", letterSpacing: ".2em", textTransform: "uppercase" }}>
            ORIGIN STORY & MILESTONES
          </span>
          <h1 style={{ fontSize: "clamp(44px, 7vw, 84px)", font: "900 clamp(44px, 7vw, 84px) var(--font-title, sans-serif)", textTransform: "uppercase", margin: "12px 0 16px" }}>
            THE <span style={{ color: "var(--accentColor)" }}>JOURNEY</span>
          </h1>
          <p style={{ color: "#a09ea8", maxWidth: "680px", margin: "auto", fontSize: "16px", lineHeight: "1.6" }}>
            Key milestones from curiosity to code: every chapter that shaped the engineer.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px", maxWidth: "900px", margin: "auto" }}>
          {milestones.map((m, idx) => (
            <div
              key={idx}
              style={{
                background: "#0f0d14",
                border: "1px solid #221e2c",
                borderRadius: "8px",
                padding: "28px",
                position: "relative",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", marginBottom: "12px" }}>
                <span style={{ font: "12px var(--font-mono, monospace)", color: "var(--accentColor)", textTransform: "uppercase", letterSpacing: ".1em" }}>
                  {m.date}
                </span>
                <span style={{ font: "11px var(--font-mono, monospace)", background: "#1b1824", color: "#8a8798", padding: "3px 8px", borderRadius: "4px" }}>
                  {m.category}
                </span>
              </div>
              <h3 style={{ font: "700 22px var(--font-sans, sans-serif)", color: "#fff", margin: "0 0 10px 0" }}>{m.title}</h3>
              <p style={{ color: "#a5a2b2", fontSize: "14px", lineHeight: "1.6", marginBottom: "16px" }}>{m.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {m.tags.map((tag, tIdx) => (
                  <span key={tIdx} style={{ font: "11px var(--font-mono, monospace)", border: "1px solid #282433", color: "#7a7785", padding: "2px 8px", borderRadius: "4px" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Back Link */}
        <div style={{ marginTop: "80px", textAlign: "center" }}>
          <Link href="/" style={{ display: "inline-block", padding: "14px 28px", background: "var(--accentColor)", color: "#fff", fontWeight: "700", textTransform: "uppercase", borderRadius: "4px" }}>
            ← Return to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
