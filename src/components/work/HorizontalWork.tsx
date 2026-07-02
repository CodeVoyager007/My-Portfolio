"use client";

import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { work } from "@/resources";
import { Heading, Text, Flex, Button, Tag } from "@once-ui-system/core";
import { Magnetic } from "@/components";
import styles from './HorizontalWork.module.scss';
import React from 'react';

export const HorizontalWork = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [translateX, setTranslateX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
  });

  useEffect(() => {
    const updateScroll = () => {
      setIsMobile(window.innerWidth <= 768);
      if (scrollRef.current) {
        const totalWidth = scrollRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setTranslateX(totalWidth - viewportWidth + (viewportWidth * 0.1));
      }
    };

    updateScroll();
    const timer = setTimeout(updateScroll, 1000);
    window.addEventListener('resize', updateScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateScroll);
    }
  }, []);

  const x = useTransform(smoothProgress, [0, 1], [0, isMobile ? 0 : -translateX]);

  return (
    <section ref={targetRef} className={styles.container}>
      <div className={styles.stickyContainer}>
        <div className={styles.titleWrapper}>
           <Heading variant="display-strong-l" style={{ opacity: 0.03, fontSize: '15vw', whiteSpace: 'nowrap', color: '#ffffff' }}>
              PROJECTS - PROJECTS -
           </Heading>
        </div>
        
        <motion.div 
          ref={scrollRef} 
          style={{ x }} 
          className={styles.track}
        >
          {work.projects.map((project, index) => (
            <div key={project.slug} className={styles.cardWrapper}>
                <div className={styles.card}>
                   <div className={styles.header}>
                      <Text className={styles.number}>0{index + 1}</Text>
                      <Heading variant="display-strong-s" className={styles.title}>
                        {project.title}
                      </Heading>
                   </div>
                   
                   <Text variant="body-default-l" className={styles.summary}>
                      {project.summary}
                   </Text>

                   <Flex gap="8" wrap marginTop="16">
                      {project.tech.map((t: string) => (
                        <Tag key={t} label={t} variant="neutral" />
                      ))}
                   </Flex>

                   <Flex gap="m" marginTop="32">
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                          <Button variant="tertiary" size="s" prefixIcon="openLink" style={{ color: '#ffffff' }}>Live</Button>
                        </a>
                      )}
                   </Flex>
                </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
