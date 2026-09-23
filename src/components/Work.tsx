"use client";

import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { config } from "@/data/config";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth <= 768) return;

    let translateX: number = 0;

    function setTranslateX() {
      const flex = document.querySelector(".work-flex") as HTMLElement;
      const container = document.querySelector(".work-container") as HTMLElement;
      if (!flex || !container) return;
      const totalWidth = flex.scrollWidth;
      const visibleWidth = container.clientWidth;
      translateX = Math.max(0, totalWidth - visibleWidth + 40);
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    ScrollTrigger.refresh();

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2 className="title">
          F<span className="hat-h2">EATURED</span>&nbsp;<span className="do-h2">WORK</span>
        </h2>
        <div className="work-flex">
          {config.featuredProjects.map((project, index) => (
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
