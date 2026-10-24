"use client";

import HoverLinks from "./HoverLinks";
import Link from "next/link";
import { config } from "@/data/config";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <Link href="/" className="navbar-title" data-cursor="disable">
          AM
        </Link>
        <Link
          href="/contact"
          className="navbar-connect"
          data-cursor="disable"
        >
          CONTACT
        </Link>
        <ul>
          <li>
            <Link href="/">
              <HoverLinks text="HOME" />
            </Link>
          </li>
          <li>
            <Link href="/work">
              <HoverLinks text="WORK" />
            </Link>
          </li>
          <li>
            <Link href="/journey" aria-label="Career and learning journey">
              <HoverLinks text="JOURNEY" />
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <HoverLinks text="BLOG" />
            </Link>
          </li>
          <li>
            <Link href="/certifications">
              <HoverLinks text="CERTS" />
            </Link>
          </li>
        </ul>
        <a
          href={config.contact.resume}
          download="Ayesha-Mughal-Resume.pdf"
          className="navbar-resume"
          data-cursor="disable"
        >
          RESUME <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
