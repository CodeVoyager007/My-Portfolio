"use client";

import "./styles/Landing.css";
import { config } from "@/data/config";
import HeroMascot from "./HeroMascot";

const Landing = () => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <div className="landing-section" id="landingDiv">
      {/* Center Viewport Multi-Shade Blended Background Glow */}
      <div className="hero-bg-glow" aria-hidden="true">
        <div className="character-rim"></div>
        <div className="character-rim-ring"></div>
      </div>

      <div className="landing-container">
        {/* Left Side: Name Block */}
        <div className="landing-intro">
          <span className="hero-eyebrow">Hello! I'm</span>
          <div className="hero-name-wrapper">
            <h1 className="hero-name-heading">
              <span className="hero-name-line">{firstName.toUpperCase()}</span>
              <span className="hero-name-line">{lastName && lastName.toUpperCase()}</span>
            </h1>
            <span className="hero-glow-orb" aria-hidden="true"></span>
          </div>
        </div>

        {/* Center: Interactive Mascot */}
        <div className="hero-mascot-wrapper">
          <HeroMascot />
        </div>

        {/* Right Side: Role Block */}
        <div className="landing-info">
          <span className="hero-eyebrow">An</span>
          <div className="hero-roles-stack">
            <h2 className="hero-role-styled" data-text="AI AGENT BUILDER">
              AI AGENT BUILDER
            </h2>
            <h2 className="hero-role-primary">
              TECHNICAL WRITER
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
