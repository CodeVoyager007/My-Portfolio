"use client";

import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { config } from "@/data/config";
import Link from "next/link";

const Work = () => {
  const priority = [1, 3, 2, 10, 11, 5, 7, 4];
  const projects = [...config.featuredProjects, ...config.secondaryProjects]
    .sort((a, b) => priority.indexOf(a.id) - priority.indexOf(b.id))
    .slice(0, 8);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2 className="title">
          F<span className="hat-h2">EATURED</span>&nbsp;<span className="do-h2">WORK</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.technologies}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.link} />
            </div>
          ))}

          <div className="work-box work-box-cta">
            <div className="see-all-works">
              <h3>Want to see more?</h3>
              <p>Explore all 8 projects and technical breakdowns</p>
              <Link href="/work" className="see-all-btn" data-cursor="disable">
                See All Projects →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
