'use client';
import React from 'react';
import { work, social } from "@/resources";
import { Heading, Text, Flex, Button, RevealFx, Icon, Badge } from "@once-ui-system/core";
import styles from './Projects.module.scss';

export function Projects() {
  const githubLink = social.find(s => s.name === "GitHub")?.link;

  return (
    <Flex
      fillWidth
      direction="column"
      paddingY="xl"
      gap="l"
    >
      <Flex
        fillWidth
        direction="column"
        horizontal="center"
        gap="m"
        paddingBottom="l"
      >
        <RevealFx translateY="8">
          <Heading
            variant="display-strong-l"
            wrap="balance"
            align="center"
          >
            {work.title}
          </Heading>
        </RevealFx>
        <RevealFx translateY="12" delay={0.2}>
          <Text
            variant="heading-default-xl"
            onBackground="neutral-weak"
            align="center"
            wrap="balance"
          >
            {work.description}
          </Text>
        </RevealFx>
      </Flex>

      <div className={styles.grid}>
        {work.projects.map((project, index) => (
          <RevealFx
            key={project.slug}
            translateY="16"
            delay={index * 0.05}
          >
            <div className={styles.card}>
              <div className={styles.content}>
                <div className={styles.header}>
                  <Icon name="grid" size="m" className={styles.icon} />
                  <div className={styles.titleGroup}>
                    <Text className={styles.number}>
                      Project {String(index + 1).padStart(2, '0')}
                    </Text>
                    <Text variant="heading-strong-m" className={styles.title}>
                      {project.title}
                    </Text>
                  </div>
                </div>

                <Text className={styles.description}>
                  {project.summary}
                </Text>

                <div className={styles.footer}>
                  {project.tech && (
                    <div className={styles.techStack}>
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={styles.techBadge}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className={styles.links}>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <Button
                          variant="secondary"
                          size="s"
                          arrowIcon
                        >
                          Visit Site
                        </Button>
                      </a>
                    )}
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <Button
                          variant="tertiary"
                          size="s"
                          prefixIcon="github"
                        >
                          Source Code
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </RevealFx>
        ))}
        
        {githubLink && (
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
          >
            <div className={styles.seeMoreCard}>
              <div className={styles.content} style={{ justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                <Icon name="github" size="xl" />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <Heading variant="heading-strong-m" align="center">
                    See More Projects
                  </Heading>
                  <Text variant="body-default-s" onBackground="neutral-weak" align="center">
                    Check out my complete repository on GitHub
                  </Text>
                </div>
              </div>
            </div>
          </a>
        )}
      </div>
    </Flex>
  );
}
