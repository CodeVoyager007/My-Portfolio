"use client";

import Navbar from "@/components/Navbar";
import SocialIcons from "@/components/SocialIcons";
import Cursor from "@/components/Cursor";
import { config } from "@/data/config";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import "@/components/styles/MyWorks.css";

interface Project {
  id: number;
  title: string;
  category: string;
  technologies: string;
  image: string;
  description: string;
  link: string;
  demoLink?: string;
  demoLabel?: string;
  featured?: boolean;
}

export default function WorkPage() {
  const allProjects: Project[] = [
    ...config.featuredProjects,
    ...config.secondaryProjects,
  ].sort((a, b) => {
    const priority = [1, 3, 2, 10, 11, 5, 7, 4, 6, 8, 9];
    return priority.indexOf(a.id) - priority.indexOf(b.id);
  });

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />

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
              <article key={project.id} className="work-row-item">
                <div className="work-row-main project-row-main">
                  <span className="work-row-idx">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div className="project-row-image">
                    <Image src={project.image} alt={`${project.title} project artwork`} fill sizes="(max-width: 1024px) min(100vw, 640px), 220px" priority={idx === 0} />
                  </div>

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
                      {project.link.includes("github.com/") ? "SOURCE" : "VIEW"} <MdArrowOutward />
                    </a>
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-action-btn"
                        data-cursor="disable"
                        aria-label={`${project.demoLabel ?? "DEMO"}: ${project.title}`}
                      >
                        {project.demoLabel ?? "DEMO"} <MdArrowOutward />
                      </a>
                    )}
                  </div>
                </div>

              </article>
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
