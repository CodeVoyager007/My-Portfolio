"use client";

import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { config } from "@/data/config";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    const handlers: { container: HTMLDivElement; listener: () => void }[] = [];
    if (typeof window !== "undefined" && ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          const listener = () => handleClick(container);
          container.addEventListener("click", listener);
          handlers.push({ container, listener });
        }
      });
    }
    return () => {
      handlers.forEach(({ container, listener }) => {
        container.removeEventListener("click", listener);
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>&nbsp;I<span className="do-h2"> DO</span>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          {config.whatIDo.map((item, index) => (
            <div
              key={item.title}
              className="what-content what-noTouch"
              ref={(el) => setRef(el, index)}
            >
              <div className="what-border1">
                <svg height="100%">
                  {index === 0 && (
                    <line
                      x1="0"
                      y1="0"
                      x2="100%"
                      y2="0"
                      stroke="white"
                      strokeWidth="2"
                      strokeDasharray="6,6"
                    />
                  )}
                  <line
                    x1="0"
                    y1="100%"
                    x2="100%"
                    y2="100%"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                  />
                </svg>
              </div>
              <div className="what-corner"></div>

              <div className="what-content-in">
                <h3>{item.title}</h3>
                <h4>{item.description}</h4>
                <p>{item.details}</p>
                <h5>Selected work</h5>
                <div className="what-content-flex">
                  {item.work.map((work) => (
                    <div key={work} className="what-tags">{work}</div>
                  ))}
                </div>
                <div className="what-arrow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  const isActive = container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children).filter(
      (el) => el !== container && el.classList.contains("what-content")
    );

    siblings.forEach((sibling) => {
      sibling.classList.remove("what-content-active");
      sibling.classList.toggle("what-sibling", isActive);
    });
  }
}
