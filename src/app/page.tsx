'use client';

import React from "react";
import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Schema, Icon } from "@once-ui-system/core";
import { home, about, person, baseURL, work } from "@/resources";
import { motion } from "framer-motion";
import styles from "./Home.module.scss";

const quickStats = [
  { label: 'Certifications', value: '27+' },
  { label: 'Coding Since', value: 'Feb 2023' },
  { label: 'Hackathons', value: '3' },
  { label: 'CS50x Score', value: '9/9' },
];

const techStack = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'C', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frameworks',
    items: ['Next.js', 'React.js', 'Node.js', 'Tailwind CSS', 'FastAPI'],
  },
  {
    category: 'AI Engineering',
    items: ['OpenAI SDK', 'LiteLLM', 'LangChain', 'RAG', 'Vector DBs'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'Postman', 'Vercel', 'Linux'],
  },
];

const quote = {
  author: 'Mark Zuckerberg',
  text: 'The biggest risk is not taking any risk.',
};

export default function Home() {
  return (
    <Column maxWidth="l" gap="xl" horizontal="center" style={{ width: '100%' }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <RevealFx translateY="8">
          {home.featured && (
            (home.featured as any).href ? (
              <a href={(home.featured as any).href} className={styles.featuredPill}>
                {home.featured.title} <Icon name="arrowRight" size="s" style={{ marginLeft: 8 }}/>
              </a>
            ) : (
              <div className={styles.featuredPill}>
                {home.featured.title}
              </div>
            )
          )}
        </RevealFx>
        
        <RevealFx translateY="12" delay={0.1}>
          <h1 className={styles.headline}>
            {home.headline}
          </h1>
        </RevealFx>
        
        <RevealFx translateY="16" delay={0.2}>
          <p className={styles.subline}>
            {home.subline}
          </p>
        </RevealFx>

        <RevealFx translateY="20" delay={0.3}>
          <div className={styles.ctaGroup}>
            <a href={about.path} className={styles.primaryBtn}>
              About Me
            </a>
            <a href="/ayesha's-resume.pdf" download className={styles.secondaryBtn}>
              Download Resume
            </a>
          </div>
        </RevealFx>
      </section>

      {/* STATS GRID */}
      <RevealFx translateY="24" delay={0.4} fillWidth>
        <div className={styles.statsGrid}>
          {quickStats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </RevealFx>

      {/* TECH STACK */}
      <Column fillWidth paddingY="64">
        <Heading variant="display-strong-s" align="center" style={{ marginBottom: '3rem' }}>
          Technical Arsenal
        </Heading>
        <div className={styles.techGrid}>
          {techStack.map((cat) => (
            <div key={cat.category} className={styles.techCategory}>
              <div className={styles.catTitle}>{cat.category}</div>
              <div className={styles.tagContainer}>
                {cat.items.map((item) => (
                  <span key={item} className={styles.tag}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Column>

      {/* RECENT PROJECTS */}
      <Column fillWidth paddingBottom="64">
        <Flex fillWidth vertical="center" marginBottom="32" style={{ justifyContent: 'space-between' }}>
          <Heading variant="display-strong-s">Recent Work</Heading>
          <Button href={work.path} variant="tertiary" arrowIcon>View All</Button>
        </Flex>
        
        <div className={styles.projectPreviewGrid}>
          {work.projects.slice(0, 3).map((p) => (
            <a key={p.slug} href={work.path} className={styles.projectCard}>
              <div className={styles.projectTitle}>{p.title}</div>
              <div className={styles.projectSummary}>{p.summary}</div>
              <Flex gap="8" wrap>
                {p.tech && p.tech.slice(0, 3).map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </Flex>
            </a>
          ))}
        </div>
      </Column>

      {/* QUOTE */}
      <div className={styles.quoteContainer}>
        <Text variant="heading-default-m">&quot;{quote.text}&quot;</Text>
        <Text variant="label-default-s" style={{ marginTop: '1rem', display: 'block', opacity: 0.6 }}>
          — {quote.author}
        </Text>
      </div>

    </Column>
  );
}
