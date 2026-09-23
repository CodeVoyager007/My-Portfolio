"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import SocialIcons from "@/components/SocialIcons";
import Cursor from "@/components/Cursor";
import { config } from "@/data/config";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import gsap from "gsap";
import "@/components/styles/MyWorks.css";

interface Project {
  id: number;
  title: string;
  category: string;
  technologies: string;
  image: string;
  description: string;
  link: string;
  featured?: boolean;
}

export default function WorkPage() {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const allProjects: Project[] = [
    ...config.featuredProjects,
    ...config.secondaryProjects,
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMouseMove = (e: MouseEvent) => {
      if (previewRef.current && hoveredProject) {
        gsap.to(previewRef.current, {
          x: e.clientX + 24,
          y: e.clientY - 140,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hoveredProject]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />

      <div
        ref={previewRef}
        className={`work-floating-preview ${hoveredProject ? "active" : ""}`}
        aria-hidden="true"
      >
        {hoveredProject && (
          <div className="preview-card-inner">
            <img
              src={hoveredProject.image}
              alt={hoveredProject.title}
              className="preview-img"
            />
            <div className="preview-meta">
              <span className="preview-cat">{hoveredProject.category}</span>
              <h4 className="preview-title">{hoveredProject.title}</h4>
            </div>
          </div>
        )}
      </div>

      <main className="myworks-page-main">

        <header className="myworks-header-editorial">
          <span className="myworks-eyebrow">02 / ARCHITECTURE & SYSTEMS</span>
          <h1 className="myworks-title-display">
            SHIPPED <span className="myworks-title-accent">PROJECTS</span>
          </h1>
          <p className="myworks-subtitle">
            From hackathon-winning AI speech engines to thermal POS controllers. Every project engineered with code proof.
          </p>
        </header>

        <section className="work-list-section">
          <div className="work-list-header">
            <span className="col-idx">NO.</span>
            <span className="col-title">PROJECT & CATEGORY</span>
            <span className="col-tech">TECHNOLOGIES</span>
            <span className="col-action">LINK</span>
          </div>

          <div className="work-list-rows">
            {allProjects.map((project, idx) => (
              <div
                key={project.id}
                className="work-row-item"
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="work-row-main">
                  <span className="work-row-idx">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div className="work-row-info">
                    <div className="work-row-tag-line">
                      <span className="work-cat-badge">{project.category}</span>
                      {project.featured && (
                        <span className="work-featured-badge">FEATURED</span>
                      )}
                    </div>
                    <h3 className="work-row-title">{project.title}</h3>
                    <p className="work-row-desc">{project.description}</p>
                  </div>

                  <div className="work-row-tech">
                    {project.technologies.split(", ").map((tech, tIdx) => (
                      <span key={tIdx} className="work-tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="work-row-action">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-action-btn"
                      data-cursor="disable"
                    >
                      VIEW <MdArrowOutward />
                    </a>
                  </div>
                </div>

                <div className="work-row-mobile-img">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="myworks-footer-cta">
          <Link href="/" className="return-home-btn" data-cursor="disable">
            RETURN TO HOME
          </Link>
        </div>
      </main>
    </div>
  );
}
