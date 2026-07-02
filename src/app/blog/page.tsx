import { Column, Heading, Text, Flex } from "@once-ui-system/core";
import { BlogContent } from "@/components/blog/BlogContent";
import { MaskedReveal } from "@/components";
import React from 'react';

export const metadata = {
  title: 'Blog - Ayesha Mughal',
  description: 'Read my latest articles on web development, programming, and tech.',
};

export default function Blog() {
  return (
    <Column fillWidth horizontal="center" gap="0" className="page-top-padding">
      <MaskedReveal>
        <Column horizontal="center" gap="16" paddingY="48" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 70%)' }} fillWidth>
          <Flex direction="column" gap="12" horizontal="center">
            <Text variant="label-strong-s" onBackground="neutral-weak" style={{ letterSpacing: '0.3em', textTransform: 'uppercase' }}>
              Chronicles of Code
            </Text>
            <Heading variant="display-strong-l" align="center" style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}>
              Insights & Ideas
            </Heading>
          </Flex>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center" style={{ maxWidth: '650px', lineHeight: '1.8' }}>
            Exploring the intersection of Agentic AI, modern web engineering, and digital creativity through deep-dives and technical reflections.
          </Text>
        </Column>
      </MaskedReveal>

      <BlogContent />
    </Column>
  );
}
