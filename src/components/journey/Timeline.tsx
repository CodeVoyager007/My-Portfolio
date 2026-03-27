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
        rootMargin: '0px 0px -50px 0px'
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
            <Column gap="8">
              <Text variant="label-default-s" className={styles.date}>
                {milestone.date}
              </Text>
              <Heading as="h3" variant="heading-strong-l" style={{ marginBottom: '0.5rem' }}>
                {milestone.title}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak" style={{ lineHeight: '1.6' }}>
                {milestone.description}
              </Text>
              
              {milestone.achievements && milestone.achievements.length > 0 && (
                <ul className={styles.achievements}>
                  {milestone.achievements.map((achievement, i) => (
                    <li key={i}>
                      <Text variant="body-default-s">{achievement}</Text>
                    </li>
                  ))}
                </ul>
              )}

              <Flex gap="8" wrap className={styles.skills}>
                {milestone.skills.map((skill, i) => (
                  <Tag key={i} label={skill} variant="neutral" size="s" />
                ))}
              </Flex>
            </Column>
          </div>
        </div>
      ))}
    </div>
  );
} 
