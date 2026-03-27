"use client";

import { CustomMDX } from '@/components/mdx';
import { Flex, Column, Heading, Text, Button, Tag, Row } from '@once-ui-system/core';
import { motion } from "framer-motion";
import styles from './ProjectPage.module.scss';
import React from 'react';

interface ProjectDetailClientProps {
  project: any;
  aboutPath: string;
  personName: string;
  personAvatar: string;
}

export default function ProjectDetailClient({ project, aboutPath, personName, personAvatar }: ProjectDetailClientProps) {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Flex fillWidth direction="column" horizontal="center" className={styles.pageContainer}>
      {/* HERO SECTION */}
      <motion.section 
        className={styles.hero}
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <Column maxWidth="m" fillWidth gap="l">
          <motion.div variants={fadeIn}>
            <Button
              href="/work"
              variant="tertiary"
              size="s"
              prefixIcon="chevronLeft"
              className={styles.backBtn}
            >
              Back to Projects
            </Button>
          </motion.div>

          <Column gap="m">
            <motion.div variants={fadeIn}>
              <Heading variant="display-strong-l" className={styles.title}>
                {project.metadata.title}
              </Heading>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Text variant="heading-default-xl" onBackground="neutral-weak" className={styles.summary}>
                {project.metadata.summary}
              </Text>
            </motion.div>
          </Column>

          <motion.div variants={fadeIn}>
            <Flex gap="m" wrap className={styles.actionGroup}>
              {project.metadata.link && (
                <a href={project.metadata.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="l" arrowIcon>
                    Visit Live Site
                  </Button>
                </a>
              )}
              {project.metadata.repo && (
                <a href={project.metadata.repo} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="l" prefixIcon="github">
                    Source Code
                  </Button>
                </a>
              )}
            </Flex>
          </motion.div>
        </Column>
      </motion.section>

      {/* PROJECT DETAILS */}
      <motion.section 
        className={styles.contentSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Column maxWidth="s" fillWidth gap="xl">
          <Row gap="xl" wrap className={styles.metaInfo}>
            <Column gap="xs">
              <Text variant="label-strong-m" onBackground="neutral-strong">Published</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {new Date(project.metadata.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long'
                })}
              </Text>
            </Column>
            <Column gap="xs">
              <Text variant="label-strong-m" onBackground="neutral-strong">Role</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">Lead Developer</Text>
            </Column>
            <Column gap="xs">
              <Text variant="label-strong-m" onBackground="neutral-strong">Technologies</Text>
              <Flex gap="xs" wrap>
                {project.metadata.tech && project.metadata.tech.map((tech: string) => (
                  <Tag key={tech} label={tech} variant="neutral" />
                ))}
              </Flex>
            </Column>
          </Row>

          <div className={styles.mdxContent}>
            <CustomMDX source={project.content} />
          </div>
        </Column>
      </motion.section>
    </Flex>
  );
}
