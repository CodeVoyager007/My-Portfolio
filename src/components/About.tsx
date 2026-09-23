"use client";

import React, { useEffect, useRef } from "react";
import "./styles/About.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (portraitRef.current) {
        gsap.fromTo(
          portraitRef.current,
          {
            opacity: 0,
            x: -60,
            rotateY: -20,
            scale: 0.9,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            x: 0,
            rotateY: -10,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              end: "bottom 30%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          {
            opacity: 0,
            x: 60,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power3.out",
            delay: 0.15,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              end: "bottom 30%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="about-container">

        <div className="about-left-slot" ref={portraitRef}>
          <div className="portrait-3d-scene">
            <div className="portrait-glow-outer" aria-hidden="true" />
            <div className="portrait-glow-ring" aria-hidden="true" />
            
            <div className="portrait-3d-card">
              <img
                src="/images/about-portrait.png"
                alt="Ayesha Mughal, AI Agent Builder"
                className="portrait-3d-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        <div className="about-right-content" ref={textRef}>
          <div className="about-header">
            <h2 className="title">
              W<span className="hat-h2">HO</span>
              <div>
                &nbsp;I<span className="do-h2"> AM</span>
              </div>
            </h2>
          </div>

          <div className="about-body-narrative">
            <p className="about-lead-para">
              I am an AI Agent Builder and Full-Stack Engineer based in Karachi, Pakistan. My philosophy is simple: code is proof. While the internet is flooded with AI hype, I focus on stress-testing LLMs, building autonomous agent tool loops, and engineering resilient software architectures.
            </p>

            <p className="about-secondary-para">
              Specializing in Python, FastAPI, Whisper speech interfaces, vector DB retrieval pipelines (RAG), and high-performance Next.js web applications. From winning Top 5 in international prompt engineering challenges to graduating Stanford CS106A Code in Place in the Experienced track.
            </p>

            <p className="about-secondary-para">
              Beyond writing code, I author technical breakdowns on Medium (In Plain English) with 1.4M+ cumulative views, demystifying LLM architectures, backend optimization, and production developer workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
