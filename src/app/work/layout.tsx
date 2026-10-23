import type { Metadata } from "next";
import { createPageMetadata } from "@/data/seo";

export const metadata: Metadata = createPageMetadata(
  "AI and Full-Stack Projects",
  "Explore Ayesha Mughal's shipped AI agent, automation, fintech, education, and full-stack web projects, with technologies and source links.",
  "/work"
);

export default function WorkLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
