import type { Metadata } from "next";
import { createPageMetadata } from "@/data/seo";

export const metadata: Metadata = createPageMetadata(
  "Certificates and Credentials",
  "Browse Ayesha Mughal's certificates in AI, software engineering, cloud technology, and web development from Stanford, Harvard, Google Cloud, and other programs.",
  "/certifications"
);

export default function CertificationsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
