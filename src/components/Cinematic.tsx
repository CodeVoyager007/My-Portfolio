"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export const Cinematic = () => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 1 }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
            left: `${p.x}%`,
            top: `${p.y}%`,
            filter: "blur(1px)",
          }}
          animate={{
            y: ["0%", "-50%", "0%"],
            x: ["0%", "10%", "0%"],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};
