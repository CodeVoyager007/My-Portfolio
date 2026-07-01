import '@once-ui-system/core/css/styles.css';
import '@once-ui-system/core/css/tokens.css';
import './globals.css';

import classNames from "classnames";

import { Background, Column, Flex, Meta, opacity, SpacingToken } from "@once-ui-system/core";
import { Footer, Header, Providers, Cinematic, Preloader } from '@/components';
import { baseURL, effects, fonts, style, dataStyle, home } from '@/resources';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export async function generateMetadata() {
  const meta = await Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });

  return {
    ...meta,
    icons: {
      icon: '/images/avatar.png',
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      fillWidth
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
    >
      <head>
        <meta name="google-site-verification" content="ZSB-njjy5eNVmjKen45MRBNpcgFzWS9ZhoDMwRh3rcQ" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ayesha Mughal",
              "url": "https://ayesha-mughals-portfolio.vercel.app",
              "image": "https://ayesha-mughals-portfolio.vercel.app/images/avatar.png",
              "jobTitle": "AI Developer & Technical Writer",
              "description": "Ayesha Mughal is a 16-year-old AI developer, technical writer, and student from Karachi, Pakistan. Building in public — Claude Code, agentic AI, ai automation, and full-stack development.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Karachi",
                "addressCountry": "PK"
              },
              "sameAs": [
                "https://medium.com/@ayeshamughal21",
                "https://www.linkedin.com/in/ayeshaintech/",
                "https://hashnode.com/@mughalsyntax",
                "https://github.com/CodeVoyager007",
                "https://x.com/Ayesha_Mughal21"
              ],
              "knowsAbout": [
                "Claude Code",
                "Agentic AI",
                "Full-Stack Web Development",
                "Technical Writing",
                "Python",
                "Next.js",
                "AI Automation"
              ]
            })
          }}
        />
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const root = document.documentElement;
                  const defaultTheme = 'system';
                  
                  // Set defaults from config
                  const config = ${JSON.stringify({
                    brand: style.brand,
                    accent: style.accent,
                    neutral: style.neutral,
                    solid: style.solid,
                    'solid-style': style.solidStyle,
                    border: style.border,
                    surface: style.surface,
                    transition: style.transition,
                    scaling: style.scaling,
                    'viz-style': dataStyle.variant,
                  })};
                  
                  // Apply default values
                  Object.entries(config).forEach(([key, value]) => {
                    root.setAttribute('data-' + key, value);
                  });
                  
                  // Resolve theme
                  const resolveTheme = (themeValue) => {
                    if (!themeValue || themeValue === 'system') {
                      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    }
                    return themeValue;
                  };
                  
                  // Apply saved theme
                  const savedTheme = localStorage.getItem('data-theme');
                  const resolvedTheme = resolveTheme(savedTheme);
                  root.setAttribute('data-theme', resolvedTheme);
                  
                  // Apply any saved style overrides
                  const styleKeys = Object.keys(config);
                  styleKeys.forEach(key => {
                    const value = localStorage.getItem('data-' + key);
                    if (value) {
                      root.setAttribute('data-' + key, value);
                    }
                  });
                } catch (e) {
                  console.error('Failed to initialize theme:', e);
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <Providers>
        <Preloader />
        <Column as="body" background="page" fillWidth style={{minHeight: "100vh", overflowX: 'visible'}} margin="0" padding="0" horizontal="center">
          <Cinematic />
          <Background
            position="fixed"
            mask={{
              x: effects.mask.x,
              y: effects.mask.y,
              radius: effects.mask.radius,
              cursor: effects.mask.cursor,
            }}
            gradient={{
              display: effects.gradient.display,
              opacity: effects.gradient.opacity as opacity,
              x: effects.gradient.x,
              y: effects.gradient.y,
              width: effects.gradient.width,
              height: effects.gradient.height,
              tilt: effects.gradient.tilt,
              colorStart: effects.gradient.colorStart,
              colorEnd: effects.gradient.colorEnd,
            }}
            dots={{
              display: effects.dots.display,
              opacity: effects.dots.opacity as opacity,
              size: effects.dots.size as SpacingToken,
              color: effects.dots.color,
            }}
            grid={{
              display: effects.grid.display,
              opacity: effects.grid.opacity as opacity,
              color: effects.grid.color,
              width: effects.grid.width,
              height: effects.grid.height,
            }}
            lines={{
              display: effects.lines.display,
              opacity: effects.lines.opacity as opacity,
              size: effects.lines.size as SpacingToken,
              thickness: effects.lines.thickness,
              angle: effects.lines.angle,
              color: effects.lines.color,
            }}
          />
          <Flex fillWidth minHeight="16" hide="s"/>
            <Header />
            <main id="main-content" className="main-content-layout" style={{ width: '100%', flex: 1, position: 'relative' }}>
                <Flex fillWidth direction="column" horizontal="center">
                  <Flex fillWidth maxWidth="l" direction="column">
                    {children}
                  </Flex>
                </Flex>
            </main>
            <Footer/>
          </Column>
        </Providers>
      </Flex>
  );
}