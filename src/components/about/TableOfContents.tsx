"use client";

import React from "react";
import { Column, Flex, Text } from "@once-ui-system/core";
import styles from "./about.module.scss";

interface TableOfContentsProps {
  structure: {
    title: string;
    slug: string;
    display: boolean;
    items: {
        title: string;
        slug: string;
    }[];
  }[];
  about: {
    tableOfContent: {
      display: boolean;
      subItems: boolean;
    };
  };
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ structure, about }) => {
  const scrollTo = (id: string, offset: number) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (!about.tableOfContent.display) return null;

  return (
    <Column
      gap="32"
      horizontal="end"
      style={{ textAlign: 'right' }}
    >
      {structure
        .filter((section) => section.display)
        .map((section) => (
          <Column key={section.slug} gap="12" horizontal="end">
            <Flex
              cursor="interactive"
              className={styles.hover}
              gap="8"
              vertical="center"
              onClick={() => scrollTo(section.slug, 140)}
            >
              <Text variant="body-default-s" onBackground="neutral-weak">{section.title}</Text>
              <Flex height="1" minWidth="16" background="neutral-strong"></Flex>
            </Flex>
            {about.tableOfContent.subItems && (
              <>
                {section.items.map((item) => (
                  <Flex
                    hide="l"
                    key={item.slug}
                    style={{ cursor: "pointer" }}
                    className={styles.hover}
                    gap="12"
                    paddingRight="24"
                    vertical="center"
                    onClick={() => scrollTo(item.slug, 140)}
                  >
                    <Text variant="body-default-xs" onBackground="neutral-weak">{item.title}</Text>
                    <Flex height="1" minWidth="8" background="neutral-strong"></Flex>
                  </Flex>
                ))}
              </>
            )}
          </Column>
        ))}
    </Column>
  );
};

export default TableOfContents;
