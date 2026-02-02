"use client";

import React, { useRef, useEffect } from 'react';
import { Column, Flex, Heading, Text, Tag } from '@once-ui-system/core';
import styles from './Timeline.module.scss';

interface TimelineMilestone {
  date: string;
  title: string;
  description: string | React.ReactNode;
  achievements: string[];
  skills: string[];
  type: 'learning' | 'foundation' | 'achievement';
}

interface TimelineProps {
  milestones: TimelineMilestone[];
}

export default function Timeline({ milestones }: TimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const timelineItems = document.querySelectorAll(`.${styles.timelineItem}`);
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.timeline} ref={timelineRef}>
      {milestones.map((milestone, index) => (
        <div
          key={`${milestone.date}-${index}`}
          className={`${styles.timelineItem} ${styles[milestone.type]}`}
        >
          <div className={styles.timelineDot} />
          <div className={styles.timelineContent}>
            <Column gap="m" className={styles.content}>
              <Column gap="xs">
                <Text variant="label-strong-m" className={styles.date}>
                  {milestone.date}
                </Text>
                <Heading as="h3" variant="heading-strong-l">
                  {milestone.title}
                </Heading>
              </Column>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {milestone.description}
              </Text>
              <Column gap="s">
                <Text variant="label-strong-s">Key Achievements:</Text>
                <ul className={styles.achievements}>
                  {milestone.achievements.map((achievement, i) => (
                    <li key={i}>
                      <Text variant="body-default-s">{achievement}</Text>
                    </li>
                  ))}
                </ul>
              </Column>
              <Flex gap="xs" wrap className={styles.skills}>
                {milestone.skills.map((skill, i) => (
                  <Tag key={i} label={skill} variant="neutral" />
                ))}
              </Flex>
            </Column>
          </div>
        </div>
      ))}
    </div>
  );
} 