'use client';
import React from 'react';
import { work } from "@/resources";
import { Heading, Text, Flex, Button, Badge, RevealFx } from "@once-ui-system/core";

export function Projects() {
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

      <Flex
        fillWidth
        wrap
        gap="l"
        horizontal="center"
      >
        {work.projects.map((project, index) => (
          <RevealFx
            key={project.slug}
            translateY="16"
            delay={index * 0.1}
            style={{ display: 'flex', flex: '1 1 300px', maxWidth: '400px' }}
          >
            <Flex
              fillWidth
              direction="column"
              background="neutral-weak"
              border="neutral-medium"
              radius="l"
              padding="l"
              gap="m"
              style={{
                height: '100%',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
            >
              <Flex direction="column" gap="xs">
                <Heading variant="heading-strong-m">
                  {project.title}
                </Heading>
                <Text
                  variant="body-default-s"
                  onBackground="neutral-weak"
                >
                  {project.summary}
                </Text>
              </Flex>

              {project.tech && (
                <Flex gap="8" wrap>
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      background="neutral-alpha-medium"
                      textVariant="label-default-s"
                    >
                      {tech}
                    </Badge>
                  ))}
                </Flex>
              )}

              <Flex
                gap="16"
                style={{ marginTop: 'auto' }}
                paddingTop="m"
              >
                {project.link && (
                  <Button
                    href={project.link}
                    variant="primary"
                    size="s"
                    arrowIcon
                  >
                    Live Demo
                  </Button>
                )}
                {project.repo && (
                  <Button
                    href={project.repo}
                    variant="secondary"
                    size="s"
                    prefixIcon="github"
                  >
                    Code
                  </Button>
                )}
              </Flex>
            </Flex>
          </RevealFx>
        ))}
      </Flex>
    </Flex>
  );
}
