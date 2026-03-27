'use client';

import React, { useRef } from "react";
import { Heading, Flex, Text, Button, Column, Schema, Icon } from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { TextReveal, HorizontalWork, MaskedReveal } from "@/components";
import styles from "./Home.module.scss";

const quickStats = [
  { label: 'Certifications', value: '27+' },
  { label: 'Coding Since', value: 'Feb 2023' },
  { label: 'Hackathons', value: '10' },
  { label: 'CS50x Score', value: '9/9' },
];

const techStack = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'C', 'HTML5', 'CSS3', 'C++'],
  },
  {
    category: 'Frameworks',
    items: ['Next.js', 'React.js', 'Node.js', 'Tailwind CSS', 'FastAPI', 'Express', 'Streamlit'],
  },
  {
    category: 'AI Engineering',
    items: ['OpenAI SDK', 'LiteLLM', 'LangChain', 'RAG', 'Vector DBs', 'OpenRouter', 'Agentic AI'],
  },
  {
    category: 'Backend & DBs',
    items: ['PostgreSQL', 'MongoDB', 'Firebase', 'Supabase', 'REST APIs'],
  },
  {
    category: 'Tools & Design',
    items: ['Git', 'Docker', 'Postman', 'Vercel', 'Linux', 'Framer Motion', 'shadcn/ui'],
  },
];

const quote = {
  author: 'Mark Zuckerberg',
  text: 'The biggest risk is not taking any risk.',
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroScale = useTransform(smoothProgress, [0, 0.1], [1, 0.85]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);

  return (
    <Column fillWidth horizontal="center" ref={containerRef} style={{ background: '#000000' }} gap="80">
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
      
      {/* CINEMATIC HERO SECTION */}
      <motion.section 
        className={styles.hero}
        style={{ 
          scale: heroScale, 
          opacity: heroOpacity, 
          position: 'sticky', 
          top: 0, 
          zIndex: 10,
          width: '100%',
          margin: '0 auto',
          background: 'transparent',
          paddingTop: '20vh',
          paddingBottom: '10vh'
        }}
      >
        <div style={{ transform: 'translateY(8px)' }}>
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
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className={styles.headline}>
            {home.headline}
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className={styles.subline}>
            {home.subline}
          </p>
        </motion.div>

        <motion.div 
          className={styles.ctaGroup}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <a href={about.path} className={styles.primaryBtn}>
            About Me
          </a>
          <a href="/ayesha's-resume.pdf" download className={styles.secondaryBtn}>
            Download Resume
          </a>
        </motion.div>
      </motion.section>

      {/* STATS GRID */}
      <motion.div 
        style={{ width: '100%', maxWidth: 'var(--static-max-width-l)', padding: '0 var(--static-space-24)', zIndex: 5, position: 'relative' }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.statsGrid}>
          {quickStats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* SCROLL REVEAL SECTION */}
      <section style={{ height: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5, position: 'relative' }}>
        <TextReveal 
          text="I build intelligent interfaces that combine cutting-edge AI with modern engineering standards to deliver exceptional user experiences."
        />
      </section>

      {/* HORIZONTAL WORK TRACK */}
      <section style={{ width: '100%', overflow: 'visible', zIndex: 20, position: 'relative' }}>
        <HorizontalWork />
      </section>

      {/* TECH STACK */}
      <MaskedReveal>
        <Column fillWidth maxWidth="l" paddingY="48" paddingX="24">
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
      </MaskedReveal>

      {/* QUOTE */}
      <MaskedReveal>
        <div className={styles.quoteContainer} style={{ width: '100%', maxWidth: 'var(--static-max-width-s)', margin: '4rem auto 8rem' }}>
          <Text variant="heading-default-m">&quot;{quote.text}&quot;</Text>
          <Text variant="label-default-s" style={{ marginTop: '1rem', display: 'block', opacity: 0.6 }}>
            — {quote.author}
          </Text>
        </div>
      </MaskedReveal>

    </Column>
  );
}
