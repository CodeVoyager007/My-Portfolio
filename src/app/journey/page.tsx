"use client";

import Navbar from "@/components/Navbar";
import SocialIcons from "@/components/SocialIcons";
import Cursor from "@/components/Cursor";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward, MdTimeline } from "react-icons/md";
import "@/app/journey/journey.css";

const milestones = [
  {
    date: "October 11, 2026",
    title: "Women Tech Quest 2026: Build with AI",
    category: "AI hackathon",
    description: "Took part in the Women Tech Quest 2026 Build with AI track with Bill Decoder, an AI-assisted analysis workspace for uploaded data and documents. The prototype explores how model-generated answers can be presented with tables, charts, and sources people can inspect.",
    tags: ["Women Tech Quest", "Bill Decoder", "Python", "FastAPI", "Gemini"],
    visual: "/certificates/wtq-2026-certificate-preview.webp",
    visualAlt: "Women Tech Quest 2026 Build with AI participation certificate awarded to Ayesha Mughal",
    links: [
      { label: "View certificate", href: "/certificates/wtq-2026-certificate-ayesha-mughal.pdf" },
      { label: "LinkedIn posts about my work", href: "https://www.linkedin.com/in/ayeshaintech/recent-activity/all/", external: true },
    ],
  },
  {
    date: "October 3, 2026",
    title: "Alibaba Cloud AI Hackathon Pakistan 2026",
    category: "AI hackathon",
    description: "Presented SpeakUp Coach at the Karachi Regional Technical Evaluation at NASTP Karachi. The project offers AI-powered interview preparation and coaching, and the event brought together builders working on practical AI products.",
    tags: ["Alibaba Cloud", "SpeakUp Coach", "AI", "Karachi"],
    visual: "/certificates/ai-hackathon-karachi-2026-speakup-coach.webp",
    visualAlt: "Alibaba Cloud AI Hackathon Pakistan 2026 participation certificate for SpeakUp Coach",
    links: [
      { label: "Verify certificate", href: "https://aihackathon.cognix-pk.com/certificate/Z553-NWSD-ZTMN", external: true },
      { label: "View certificate", href: "/certificates/ai-hackathon-karachi-2026-speakup-coach.webp" },
    ],
  },
  {
    date: "June 2026",
    title: "Stanford Code in Place 2026 Graduation",
    category: "Education",
    description: "Completed the Stanford CS106A curriculum in the Experienced Student track, building interactive software applications in Python.",
    tags: ["Python", "Stanford CS106A", "Software engineering", "Algorithms"],
  },
  {
    date: "June 2026",
    title: "Google Cloud and Generative AI Badges",
    category: "Cloud and AI",
    description: "Earned more than 1,060 points and verified credentials across AI agents, Google ADK, Cloud Run, LLMs, and Generative AI on Google Cloud Skills Boost.",
    tags: ["Google Cloud", "Generative AI", "LLMs", "AI agents", "Google ADK"],
  },
  {
    date: "May 2026",
    title: "National AI Competition",
    category: "Hackathon",
    description: "Built an AI heritage and history application, deployed on Google Cloud Run with Gemini API, Google ADK, and a vector RAG pipeline.",
    tags: ["Gemini API", "Google ADK", "RAG", "Google Cloud Run", "Next.js"],
  },
  {
    date: "April 2026",
    title: "Stanford Code in Place 2026 Acceptance",
    category: "Education",
    description: "Accepted into Stanford Code in Place and placed directly into the Experienced Student track.",
    tags: ["Python", "Stanford", "Algorithms"],
  },
  {
    date: "April 2026",
    title: "1.4M+ Cumulative Views on Medium",
    category: "Technical writing",
    description: "Reached more than 1.4 million cumulative Medium views, publishing articles on AI development for In Plain English.",
    tags: ["Technical writing", "Medium", "AI", "Python"],
  },
  {
    date: "March 2026",
    title: "Ramadan Prompting Nights: Top 5 of 317",
    category: "Competition",
    description: "Placed in the top five among 317 participants for multi-step agentic prompt design and LLM benchmark accuracy.",
    tags: ["Prompt engineering", "LLMs", "Agentic workflows"],
  },
  {
    date: "April 2025 – Present",
    title: "Technical Writer at In Plain English",
    category: "Publication",
    description: "Joined Artificial Intelligence in Plain English on Medium as a regular technical writer, creating practical guides for a global developer audience.",
    tags: ["Writing", "Python", "JavaScript", "AI agents"],
  },
];

export default function JourneyPage() {
  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />

      <main className="journey-page">
        <header className="journey-heading">
          <span className="journey-eyebrow"><MdTimeline aria-hidden="true" /> Career, learning, and milestones</span>
          <h1>My <span>journey</span></h1>
          <p>A timeline of the projects, opportunities, and lessons that have shaped my work in AI and software engineering.</p>
        </header>

        <ol className="journey-timeline" aria-label="Career and learning milestones">
          {milestones.map((milestone) => (
            <li className="journey-item" key={milestone.title}>
              <span className="journey-marker" aria-hidden="true" />
              <article className="journey-card">
                <div className="journey-meta">
                  <time>{milestone.date}</time>
                  <span className="journey-category">{milestone.category}</span>
                </div>
                <h2>{milestone.title}</h2>
                <p className="journey-description">{milestone.description}</p>
                {milestone.visual && (
                  <a className="journey-evidence" href={milestone.visual} target="_blank" rel="noopener noreferrer" aria-label={`Open certificate image for ${milestone.title}`}>
                    <Image src={milestone.visual} alt={milestone.visualAlt} width={1400} height={990} sizes="(max-width: 640px) 100vw, 500px" />
                    <span>Certificate preview <MdArrowOutward aria-hidden="true" /></span>
                  </a>
                )}
                <ul className="journey-tags" aria-label="Skills and topics">
                  {milestone.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                {milestone.links && (
                  <div className="journey-links">
                    {milestone.links.map((link) => (
                      <a key={link.label} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined}>
                        {link.label}{link.external && <MdArrowOutward aria-hidden="true" />}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            </li>
          ))}
        </ol>

        <div className="journey-footer">
          <Link href="/">Return to home</Link>
        </div>
      </main>
    </div>
  );
}
