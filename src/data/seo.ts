import type { Metadata } from "next";

export const SITE_URL = "https://ayesha-mughals-portfolio.vercel.app";

export function createPageMetadata(title: string, description: string, path: string): Metadata {
  const url = new URL(path, SITE_URL);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${title} | Ayesha Mughal`,
      description,
      siteName: "Ayesha Mughal Portfolio",
      locale: "en_US",
      images: [{ url: "/images/about-portrait.png", alt: "Ayesha Mughal, AI Agent Builder and Technical Writer" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Ayesha Mughal`,
      description,
      images: ["/images/about-portrait.png"],
      creator: "@Ayesha_Mughal21",
    },
  };
}
