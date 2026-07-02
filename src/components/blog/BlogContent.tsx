"use client";

import React, { useState } from 'react';
import { Column, Flex, Heading, Text, Button, Card, Icon } from "@once-ui-system/core";
import { Posts } from "./Posts";

export function BlogContent() {
  return (
    <Column fillWidth maxWidth="l" paddingX="m" gap="40" paddingBottom="80">
      <Column gap="64" fillWidth>
        {/* Asymmetric Hero Section: Featured Card (2/3) + Newsletter Widget (1/3) */}
        <Column gap="24" fillWidth>
          <Heading variant="display-strong-xs" onBackground="neutral-weak">
            Latest Release
          </Heading>
          <Flex 
            gap="l" 
            fillWidth 
            style={{ 
              flexDirection: 'row',
              flexWrap: 'wrap'
            }}
          >
            {/* Hero Post */}
            <Flex 
              style={{ 
                flex: '2 1 600px', 
                minWidth: '320px' 
              }}
            >
              <Posts range={[1, 1]} direction="column" isHero={true} />
            </Flex>

            {/* Newsletter card */}
            <Flex 
              style={{ 
                flex: '1 1 300px', 
                minWidth: '300px'
              }}
            >
              <Card 
                fillWidth
                padding="32" 
                radius="xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.01)',
                  border: '1px solid var(--border-neutral-weak)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '24px',
                  height: '100%',
                  backdropFilter: 'blur(12px)'
                }}
              >
                <Column gap="12">
                  <Flex 
                    background="neutral-alpha-weak" 
                    radius="full" 
                    padding="12" 
                    style={{ alignSelf: 'flex-start', color: 'var(--neutral-on-background-strong)' }}
                  >
                    <Icon name="email" size="m" />
                  </Flex>
                  <Heading variant="heading-strong-l">
                    Stay Ahead in Tech
                  </Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak" style={{ lineHeight: '1.6' }}>
                    Get notified when I publish deep-dives on Agentic AI, full-stack tools, and technical articles. No spam, ever.
                  </Text>
                </Column>
                <Button 
                  variant="secondary" 
                  href="https://medium.com/@ayeshamughal21/subscribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  suffixIcon="chevronRight"
                  fillWidth
                >
                  Subscribe Now
                </Button>
              </Card>
            </Flex>
          </Flex>
        </Column>

        {/* Remaining Posts Grid (3 Columns) */}
        <Column gap="24" fillWidth>
          <Flex 
            horizontal="space-between" 
            vertical="end" 
            borderBottom="neutral-alpha-weak" 
            paddingBottom="16"
          >
            <Heading variant="display-strong-xs" onBackground="neutral-weak">
              Previous Articles
            </Heading>
          </Flex>
          <Posts range={[2]} columns={3} />
        </Column>
      </Column>
    </Column>
  );
}
