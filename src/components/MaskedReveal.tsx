"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface MaskedRevealProps {
  children: React.ReactNode;
}

export const MaskedReveal: React.FC<MaskedRevealProps> = ({ children }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Projector beam reveal effect
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [
      "inset(100% 0% 0% 0%)", 
      "inset(0% 0% 0% 0%)",
      "inset(0% 0% 0% 0%)",
      "inset(0% 0% 100% 0%)"
    ]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05]);

  return (
    <motion.div
      ref={targetRef}
      style={{
        clipPath,
        opacity,
        scale,
      }}
    >
      {children}
    </motion.div>
  );
};
