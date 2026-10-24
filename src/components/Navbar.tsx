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
        <a
          href={`mailto:${config.contact.email}`}
          className="navbar-connect"
          data-cursor="disable"
        >
          {config.contact.email}
        </a>
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
          <li>
            <Link href="/contact">
              <HoverLinks text="CONTACT" />
            </Link>
          </li>
          <li>
            <a href={config.contact.resume} download="Ayesha-Mughal-Resume.pdf">
              <HoverLinks text="RESUME" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
