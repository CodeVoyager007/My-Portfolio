import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { LoadingProvider } from "@/context/LoadingProvider";
import { config } from "@/data/config";
import { SITE_URL } from "@/data/seo";

export const metadata: Metadata = {
  title: {
    default: `${config.developer.name} | ${config.developer.title}`,
    template: `%s | ${config.developer.name}`,
  },
  description: config.developer.description,
  keywords: ["Ayesha Mughal", "AI Agent Builder", "Full-Stack Developer", "Technical Writer", "Karachi, Pakistan", "AI projects"],
  authors: [{ name: config.developer.name, url: SITE_URL }],
  creator: config.developer.name,
  publisher: config.developer.name,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${config.developer.name} | AI Agent Builder in Karachi`,
    description: config.developer.description,
    url: SITE_URL,
    siteName: "Ayesha Mughal Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/ayesha-mughal-social.jpg",
        width: 1200,
        height: 630,
        alt: "Ayesha Mughal, AI agent builder and full-stack developer in Karachi, Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${config.developer.name} | AI Agent Builder in Karachi`,
    description: config.developer.description,
    creator: "@Ayesha_Mughal21",
    images: ["/images/ayesha-mughal-social.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0b080c",
  width: "device-width",
  initialScale: 1,
};

const personId = `${SITE_URL}/#person`;
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Ayesha Mughal | AI Agent Builder in Karachi",
      description: config.developer.description,
      inLanguage: "en-PK",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: "Ayesha Mughal | AI Agent Builder and Full-Stack Developer in Karachi",
      mainEntity: { "@id": personId },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: config.developer.fullName,
      url: SITE_URL,
      image: `${SITE_URL}/images/about-portrait.webp`,
      description: config.developer.description,
      jobTitle: config.developer.title,
      knowsAbout: ["AI agent development", "Full-stack software engineering", "Technical writing", "Python", "FastAPI", "Next.js", "Generative AI"],
      worksFor: {
        "@type": "Organization",
        name: "In Plain English",
      },
      sameAs: [
        config.social.github,
        config.social.linkedin,
        config.social.twitter,
        config.social.medium,
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Karachi",
        addressRegion: "Sindh",
        addressCountry: "PK",
      },
      email: `mailto:${config.contact.email}`,
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body>
        <LoadingProvider>{children}</LoadingProvider>
      </body>
    </html>
  );
}
