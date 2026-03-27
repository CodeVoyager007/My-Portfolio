"use client";

import React from 'react';
import { Column, Flex, Text, Tag, RevealFx } from "@once-ui-system/core";
import styles from './Post.module.scss';

interface PostProps {
    post: {
        title: string;
        description: string;
        link: string;
        date: string;
        image: string | null;
        platform: string;
    };
    direction?: "row" | "column";
    hasImage: boolean;
}

export const Post: React.FC<PostProps> = ({ post, direction = "row" }) => {
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (
        <RevealFx fillWidth>
            <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.postCard} ${direction === "column" ? styles.columnLayout : ''}`}
            >
                <div style={{ display: 'flex', flexDirection: 'inherit', width: '100%', height: '100%' }}>
                    <div className={styles.imageContainer}>
                        {post.image ? (
                            <img
                                src={post.image}
                                alt={post.title}
                                className={styles.postImage}
                            />
                        ) : (
                            <div className={styles.placeholderImage}>
                                <Text variant="label-strong-xl" style={{ opacity: 0.1, fontSize: '4rem' }}>
                                    {post.platform}
                                </Text>
                            </div>
                        )}
                    </div>
                    <Column gap="16" padding="32" className={styles.content}>
                        <Flex vertical="center" gap="8">
                            <Tag label={post.platform} variant="neutral" />
                            <Text className={styles.date}>
                                {formattedDate}
                            </Text>
                        </Flex>
                        <Text variant="heading-strong-l" className={styles.title}>
                            {post.title}
                        </Text>
                        <Text className={styles.description}>
                            {post.description}
                        </Text>
                    </Column>
                </div>
            </a>
        </RevealFx>
    );
};
