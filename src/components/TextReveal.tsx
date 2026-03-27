"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { Text } from "@once-ui-system/core";

interface TextRevealProps {
  text: string;
  className?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({ text, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={className} style={{ position: "relative", zIndex: 0 }}>
      <div
        style={{
          position: "sticky",
          top: "40vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </div>
    </div>
  );
};

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = useTransform(
    progress,
    range,
    ["var(--neutral-on-background-weak)", "var(--neutral-on-background-strong)"]
  );

  return (
    <motion.span
      style={{
        opacity,
        color,
        fontWeight: 700,
        fontSize: "clamp(2rem, 5vw, 4rem)",
        lineHeight: 1.1,
        letterSpacing: "-0.02em",
      }}
    >
      {children}
    </motion.span>
  );
};
