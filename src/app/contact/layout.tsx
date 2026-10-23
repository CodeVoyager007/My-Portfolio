import type { Metadata } from "next";
import { createPageMetadata } from "@/data/seo";

export const metadata: Metadata = createPageMetadata(
  "Contact Ayesha Mughal",
  "Contact Ayesha Mughal in Karachi, Pakistan, about AI development, full-stack projects, technical writing, and collaboration opportunities.",
  "/contact"
);

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
