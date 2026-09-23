import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LoadingProvider } from "@/context/LoadingProvider";
import { config } from "@/data/config";

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
  metadataBase: new URL("https://ayesha-mughals-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${config.developer.name} | ${config.developer.tagline}`,
    description: config.developer.description,
    url: "https://ayesha-mughals-portfolio.vercel.app",
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
    card: "summary",
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
  url: "https://ayesha-mughals-portfolio.vercel.app",
  image: "https://ayesha-mughals-portfolio.vercel.app/images/about-portrait.png",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
      </head>
      <body>
        <LoadingProvider>{children}</LoadingProvider>
      </body>
    </html>
  );
}
