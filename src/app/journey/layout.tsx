import type { Metadata } from "next";
import { createPageMetadata } from "@/data/seo";

export const metadata: Metadata = createPageMetadata(
  "Career and Learning Journey",
  "Follow Ayesha Mughal's career, education, hackathon achievements, and professional experience in AI development and technical writing.",
  "/journey"
);

export default function JourneyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
