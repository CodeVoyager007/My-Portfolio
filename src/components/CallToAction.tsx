"use client";

import Link from "next/link";
import { config } from "@/data/config";
import "./styles/CallToAction.css";

const CallToAction = () => {
  return (
    <div className="cta-section">
      <div className="cta-buttons">
        <Link href="/blog" className="cta-btn cta-btn-play" data-cursor="disable">
          Read Articles →
        </Link>
        <a 
          href={`mailto:${config.contact.email}`} 
          className="cta-btn cta-btn-hire"
          data-cursor="disable"
        >
          Get In Touch →
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
