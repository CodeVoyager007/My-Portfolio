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

export function Posts({ range, direction = "row", columns = "1" }: PostsProps) {
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

  const displayedPosts = range
    ? posts.slice(range[0] - 1, range[1] ?? posts.length)
    : posts;

  const loadingCount = range ? (range[1] || range[0]) - range[0] + 1 : 3;
  const gridColumns = typeof columns === 'string' ? parseInt(columns, 10) : columns;

  if (loading) {
    return (
      <Grid columns={gridColumns as any} gap="l">
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
    return null;
  }

  return (
    <Column gap="xl" fillWidth>
      <Grid columns={gridColumns as any} gap="l" className={direction === "column" ? styles.columnLayout : ""}>
        {displayedPosts.map((post, index) => (
          <motion.div
            key={post.link}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Post
              post={post}
              direction={direction}
              hasImage={true} 
            />
          </motion.div>
        ))}
      </Grid>
    </Column>
  );
}
