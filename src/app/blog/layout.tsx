import type { Metadata } from "next";
import { createPageMetadata } from "@/data/seo";

export const metadata: Metadata = createPageMetadata(
  "Technical Writing on AI and Software",
  "Read Ayesha Mughal's technical articles on AI agents, LLM evaluation, Python, FastAPI, and software engineering, published on Medium.",
  "/blog"
);

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
