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
  keywords: [
    "Ayesha Mughal",
    "AI Agent Builder",
    "Technical Writer",
    "SpeakUp Coach",
    "ServeEase",
    "PSX Halal Tracker",
    "Vittles POS",
    "Next.js",
    "FastAPI",
    "Python AI",
    "In Plain English",
    "Karachi Developer",
  ],
  authors: [{ name: config.developer.name, url: "https://ayesha-mughals-portfolio.vercel.app" }],
  creator: config.developer.name,
  publisher: config.developer.name,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${config.developer.name} | ${config.developer.tagline}`,
    description: config.developer.description,
    url: SITE_URL,
    siteName: "Ayesha Mughal Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/about-portrait.png",
        width: 621,
        height: 1024,
        alt: `${config.developer.name} | ${config.developer.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${config.developer.name} | ${config.developer.title}`,
    description: config.developer.tagline,
    creator: "@Ayesha_Mughal21",
    images: ["/images/about-portrait.png"],
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

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: config.developer.fullName,
  url: SITE_URL,
  image: `${SITE_URL}/images/about-portrait.png`,
  jobTitle: config.developer.title,
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
    addressCountry: "Pakistan",
  },
  email: `mailto:${config.contact.email}`,
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson).replace(/</g, "\\u003c") }}
        />
      </head>
      <body>
        <LoadingProvider>{children}</LoadingProvider>
      </body>
    </html>
  );
}
