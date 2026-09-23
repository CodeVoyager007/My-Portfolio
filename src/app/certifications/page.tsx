"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import SocialIcons from "@/components/SocialIcons";
import Cursor from "@/components/Cursor";
import { config } from "@/data/config";
import Link from "next/link";
import { MdArrowOutward, MdVerified } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/components/styles/Certifications.css";

gsap.registerPlugin(ScrollTrigger);

interface Cert {
  title: string;
  icon: string;
  issuer?: string;
  link: string;
  image?: string;
}

export default function CertificationsPage() {
  const [hoveredCert, setHoveredCert] = useState<Cert | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLElement>(null);

  const allCerts: Cert[] = config.certifications;

  /* Hero credential: first cert with an available image, or fallback to first */
  const heroCert = allCerts.find((c) => c.image && c.image.length > 0) || allCerts[0];
  const remainingCerts = allCerts.filter((c) => c !== heroCert);

  const uniqueIssuers = new Set(allCerts.map((c) => c.issuer || c.icon)).size;

  const iconCounts: Record<string, number> = {};
  allCerts.forEach((c) => {
    const key = c.icon;
    iconCounts[key] = (iconCounts[key] || 0) + 1;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMouseMove = (e: MouseEvent) => {
      if (previewRef.current && hoveredCert) {
        const previewWidth = 320;
        const previewHeight = 250;

        let x = e.clientX + 24;
        /* If mouse is near right side of screen, flip preview to left of cursor */
        if (e.clientX + previewWidth + 40 > window.innerWidth) {
          x = e.clientX - previewWidth - 24;
        }

        let y = e.clientY - 120;
        /* Clamp Y position within viewport bounds */
        if (y < 20) y = 20;
        if (y + previewHeight > window.innerHeight - 20) {
          y = window.innerHeight - previewHeight - 20;
        }

        gsap.to(previewRef.current, {
          x,
          y,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };

    const handleWindowBlur = () => {
      setHoveredCert(null);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("blur", handleWindowBlur);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, [hoveredCert]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (stripRef.current) {
        const cells = stripRef.current.querySelectorAll(".cert-stat-cell");
        gsap.fromTo(
          cells,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: stripRef.current,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (listRef.current) {
        const rows = listRef.current.querySelectorAll(".cert-row-item");
        rows.forEach((row, i) => {
          gsap.fromTo(
            row,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 90%",
                toggleActions: "play none none none",
              },
              delay: i * 0.04,
            }
          );
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />

      <div
        ref={previewRef}
        className={`cert-floating-preview ${hoveredCert && hoveredCert.image ? "active" : ""}`}
        aria-hidden="true"
      >
        {hoveredCert && hoveredCert.image && (
          <div className="cert-preview-inner">
            <img
              src={hoveredCert.image}
              alt={hoveredCert.title}
              className="cert-preview-img"
            />
            <div className="cert-preview-meta">
              <span className="cert-preview-issuer">
                {hoveredCert.issuer || hoveredCert.icon}
              </span>
              <h4 className="cert-preview-title">{hoveredCert.title}</h4>
            </div>
          </div>
        )}
      </div>

      <main className="certifications-page-main">

        <header className="cert-header-editorial">
          <span className="cert-eyebrow">
            04 / CREDENTIALS & CERTIFICATIONS
          </span>
          <h1 className="cert-title-display">
            VERIFIED{" "}
            <span className="cert-title-accent">CREDENTIALS</span>
          </h1>
          <p className="cert-subtitle">
            From Stanford CS106A Code in Place graduation to Google Cloud
            Silver League AI badges and Top 5 international prompting wins.
          </p>
        </header>

        <div className="cert-summary-strip" ref={stripRef}>
          <div className="cert-stat-cell">
            <span className="cert-stat-value">{allCerts.length}</span>
            <span className="cert-stat-label">TOTAL CREDENTIALS</span>
          </div>
          <div className="cert-stat-cell">
            <span className="cert-stat-value">{uniqueIssuers}</span>
            <span className="cert-stat-label">UNIQUE ISSUERS</span>
          </div>
          <div className="cert-stat-cell">
            <span className="cert-stat-value">
              {iconCounts["GOOGLE"] || 0}
            </span>
            <span className="cert-stat-label">GOOGLE CLOUD BADGES</span>
          </div>
          <div className="cert-stat-cell">
            <span className="cert-stat-value">
              {(iconCounts["HARVARD"] || 0) + (iconCounts["STANFORD"] || 0)}
            </span>
            <span className="cert-stat-label">IVY LEAGUE CERTS</span>
          </div>
        </div>

        <section className="cert-hero-section" ref={heroRef}>
          <span className="cert-hero-tag">CROWN CREDENTIAL</span>
          <div className="cert-hero-card">
            <div className="cert-hero-image-col">
              {heroCert.image ? (
                <img
                  src={heroCert.image}
                  alt={heroCert.title}
                  className="cert-hero-img"
                  loading="lazy"
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(135deg, #0f0b12 0%, #1a1424 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: '"Geist", monospace',
                    fontSize: "48px",
                    color: "var(--accentColor)",
                    fontWeight: "800",
                  }}
                >
                  {heroCert.icon}
                </div>
              )}
            </div>

            <div className="cert-hero-content-col">
              <div className="cert-hero-badge-line">
                <span className="cert-hero-icon-badge">{heroCert.icon}</span>
                <span className="cert-hero-issuer">
                  {heroCert.issuer || "Credential Authority"}
                </span>
              </div>

              <h2 className="cert-hero-title">{heroCert.title}</h2>

              <span className="cert-hero-verified">
                <MdVerified /> VERIFIED DOCUMENT
              </span>

              <div className="cert-hero-action-row">
                <a
                  href={heroCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-hero-view-btn"
                  data-cursor="disable"
                  onClick={() => setHoveredCert(null)}
                >
                  VIEW CREDENTIAL <MdArrowOutward />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="cert-list-section" ref={listRef}>
          <div className="cert-list-header">
            <span className="cert-col-idx">NO.</span>
            <span className="cert-col-title">CREDENTIAL & CATEGORY</span>
            <span className="cert-col-issuer">ISSUER</span>
            <span className="cert-col-action">LINK</span>
          </div>

          <div className="cert-list-rows">
            {remainingCerts.map((cert, idx) => (
              <div
                key={idx}
                className="cert-row-item"
                onMouseEnter={() => setHoveredCert(cert)}
                onMouseLeave={() => setHoveredCert(null)}
              >
                <div className="cert-row-main">
                  <span className="cert-row-idx">
                    {String(idx + 2).padStart(2, "0")}
                  </span>

                  <div className="cert-row-info">
                    <div className="cert-row-tag-line">
                      <span className="cert-row-icon-badge">{cert.icon}</span>
                      <span className="cert-row-verified-pill">
                        <MdVerified /> VERIFIED
                      </span>
                    </div>
                    <h3 className="cert-row-title">{cert.title}</h3>
                  </div>

                  <div className="cert-row-issuer-col">
                    <span className="cert-row-issuer-name">
                      {cert.issuer || cert.icon}
                    </span>
                    <span className="cert-row-issuer-type">CREDENTIAL</span>
                  </div>

                  <div
                    className="cert-row-action"
                    onMouseEnter={(e) => {
                      e.stopPropagation();
                      setHoveredCert(null);
                    }}
                  >
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-action-btn"
                      data-cursor="disable"
                      onClick={() => setHoveredCert(null)}
                    >
                      VIEW <MdArrowOutward />
                    </a>
                  </div>
                </div>

                {cert.image && cert.image.length > 0 && (
                  <div className="cert-row-mobile-img">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="cert-footer-cta">
          <Link
            href="/"
            className="return-home-btn"
            data-cursor="disable"
          >
            RETURN TO HOME
          </Link>
        </div>
      </main>
    </div>
  );
}
