"use client";

import { useEffect } from "react";
import "./styles/Career.css";
import { config } from "@/data/config";
import { setAllTimeline } from "./utils/GsapScroll";

const getDisplayYear = (period: string) => {
  if (period.includes("Present")) return "NOW";
  const start = period.split(" - ")[0];
  return start.match(/\d{4}/)?.[0] ?? start;
};

const Career = () => {
  useEffect(() => {
    setAllTimeline();
  }, []);

  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2 className="title">
          M<span className="hat-h2">Y CAREER</span>
          <div>
            &nbsp;&amp;<span className="do-h2"> EXPERIENCE</span>
          </div>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {config.experiences.map((exp, index) => (
            <div key={index} className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.position}</h4>
                  <h5>{exp.company}</h5>
                </div>
                <h3>{getDisplayYear(exp.period)}</h3>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
