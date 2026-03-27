import { Column, Heading, Text, Flex } from "@once-ui-system/core";
import { Posts } from "@/components/blog/Posts";
import { MaskedReveal } from "@/components";
import React from 'react';

export const metadata = {
  title: 'Blog - Ayesha Mughal',
  description: 'Read my latest articles on web development, programming, and tech.',
};

export default function Blog() {
  return (
    <Column fillWidth horizontal="center" gap="0">
      <MaskedReveal>
        <Column horizontal="center" gap="16" paddingY="80" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 70%)' }} fillWidth>
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

      <Column fillWidth maxWidth="l" paddingX="m" gap="64" paddingBottom="160">
        {/* Latest Featured Post */}
        <Column gap="24">
          <Flex horizontal="space-between" vertical="end">
            <Heading variant="display-strong-xs">Latest Release</Heading>
          </Flex>
          <Posts range={[1, 1]} direction="column" />
        </Column>

        {/* Previous Posts Grid */}
        <Column gap="24">
          <Flex horizontal="space-between" vertical="end" borderBottom="neutral-alpha-weak" paddingBottom="16">
            <Heading variant="display-strong-xs">Previous Articles</Heading>
          </Flex>
          <Posts range={[2]} columns="2" />
        </Column>
      </Column>
    </Column>
  );
}
