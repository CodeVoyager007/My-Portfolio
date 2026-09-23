"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import Link from "next/link";
import { config } from "@/data/config";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);
export let lenis: Lenis | null = null;

const Navbar = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    lenis = new Lenis({
      duration: 1.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.7,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.stop();

    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    let links = document.querySelectorAll(".header ul a[data-href]");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          let section = element.getAttribute("data-href");
          if (section && section.startsWith("#") && lenis) {
            e.preventDefault();
            const target = document.querySelector(section) as HTMLElement;
            if (target) {
              lenis.scrollTo(target, {
                offset: 0,
                duration: 1.5,
              });
            }
          }
        }
      });
    });

    const handleResize = () => {
      lenis?.resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      lenis?.destroy();
    };
  }, []);

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
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            window.open(
              `https://mail.google.com/mail/?view=cm&fs=1&to=${config.contact.email}`,
              "_blank"
            );
          }}
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
