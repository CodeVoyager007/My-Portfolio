"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import styles from "./Preloader.module.scss";

const name = "Ayesha Mughal";

export const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 99) {
          clearInterval(interval);
          return 99;
        }
        return prev + 1;
      });
    }, 25);

    const timeout = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setLoading(false), 800);
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          className={styles.preloader}
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1] }
          }}
        >
          {/* Ambient Motion Background */}
          <motion.div 
            className={styles.ambientGlow}
            animate={{ 
              x: ["-20%", "20%", "-20%"],
              y: ["-20%", "20%", "-20%"],
              scale: [1, 1.2, 1],
              opacity: [0.02, 0.05, 0.02]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <div className={styles.content}>
            <div className={styles.nameWrapper}>
              {name.split("").map((char, i) => (
                <div key={i} className={styles.charContainer}>
                  <motion.span
                    className={styles.char}
                    initial={{ y: "110%", rotate: 5 }}
                    animate={{ y: 0, rotate: 0 }}
                    transition={{ 
                      duration: 1.2,
                      delay: i * 0.05,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                </div>
              ))}
            </div>

            <motion.div 
              className={styles.divider}
              initial={{ height: 0 }}
              animate={{ height: "40px" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            />

            <motion.div 
              className={styles.progressWrapper}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className={styles.percentage}>
                Loading {Math.round(progress)}%
              </div>
              <div className={styles.barContainer}>
                <motion.div 
                  className={styles.bar}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: progress / 100 }}
                  style={{ originX: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
