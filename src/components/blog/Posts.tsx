"use client";

import React, { useState, useEffect } from 'react';
import { Grid, Column, Text, Flex } from "@once-ui-system/core";
import { motion } from "framer-motion";
import { Post } from "./Post";
import styles from './Posts.module.scss';

interface PostsProps {
  range?: [number, number?];
  direction?: "row" | "column";
  columns?: string | number;
  category?: string;
  isHero?: boolean;
}

const LoadingPost = ({ direction }: { direction: string }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
    style={{ 
      background: 'rgba(255,255,255,0.03)', 
      borderRadius: 'var(--radius-xl)', 
      height: direction === 'column' ? '240px' : '400px',
      border: '1px solid var(--border-neutral-weak)'
    }}
  />
);

export function Posts({ range, direction = "row", columns = "1", category = "All", isHero = false }: PostsProps) {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setError(null);
        const response = await fetch('/api/blog');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        let fetchedPosts = await response.json();
        fetchedPosts = fetchedPosts.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Failed to load posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post => {
    if (category === "All") return true;
    const text = (post.title + " " + post.description).toLowerCase();
    const isAI = text.includes("ai") || text.includes("agent") || text.includes("llm") || text.includes("prompt") || text.includes("gpt") || text.includes("model") || text.includes("gemini");
    const isWeb = text.includes("web") || text.includes("next.js") || text.includes("react") || text.includes("css") || text.includes("javascript") || text.includes("typescript") || text.includes("api") || text.includes("html") || text.includes("node");
    
    if (category === "AI & Agents") return isAI;
    if (category === "Web Engineering") return isWeb;
    if (category === "Reflections") return !isAI && !isWeb;
    return true;
  });

  const displayedPosts = range
    ? filteredPosts.slice(range[0] - 1, range[1] ?? filteredPosts.length)
    : filteredPosts;

  const loadingCount = range ? (range[1] || range[0]) - range[0] + 1 : 3;
  const gridColumns = typeof columns === 'string' ? parseInt(columns, 10) : columns;

  if (loading) {
    return (
      <Grid columns={gridColumns as any} gap="l" className={styles.mobileResponsiveGrid}>
        {Array.from({ length: loadingCount }).map((_, index) => (
          <LoadingPost key={index} direction={direction} />
        ))}
      </Grid>
    );
  }

  if (error) {
    return (
      <Flex fillWidth horizontal="center" paddingY="64">
        <Text variant="body-default-m" onBackground="neutral-weak">{error}</Text>
      </Flex>
    );
  }

  if (!displayedPosts.length) {
    return (
      <Flex fillWidth horizontal="center" paddingY="32">
        <Text variant="body-default-m" onBackground="neutral-weak">No articles found in this category.</Text>
      </Flex>
    );
  }

  return (
    <Column gap="xl" fillWidth>
      <Grid columns={gridColumns as any} gap="l" className={`${direction === "column" ? styles.columnLayout : ""} ${styles.mobileResponsiveGrid}`}>
        {displayedPosts.map((post, index) => (
          <motion.div
            key={post.link}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            layout
          >
            <Post
              post={post}
              direction={direction}
              hasImage={true} 
              isHero={isHero}
            />
          </motion.div>
        ))}
      </Grid>
    </Column>
  );
}
