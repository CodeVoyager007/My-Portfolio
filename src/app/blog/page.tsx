"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import SocialIcons from "@/components/SocialIcons";
import Cursor from "@/components/Cursor";
import { config } from "@/data/config";
import Link from "next/link";
import { MdArrowOutward, MdArticle } from "react-icons/md";
import "@/components/styles/MyWorks.css";

interface Article {
  title: string;
  pub?: string;
  claps?: string;
  readTime?: string;
  link: string;
  highlight?: string;
  date?: string;
  pubDate?: string;
  contentSnippet?: string;
  coverImage?: string;
  categories?: string[];
}

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>(config.articles);
  const stats = config.writingStats;

  useEffect(() => {
    async function fetchMediumArticles() {
      try {
        const res = await fetch("/api/medium");
        if (res.ok) {
          const data = await res.json();
          if (data.articles && data.articles.length > 0) {
            setArticles(data.articles);
          }
        }
      } catch (err) {
        console.error("Failed to load Medium RSS feed, using static list:", err);
      }
    }
    fetchMediumArticles();
  }, []);

  const latestArticle = articles[0];
  const remainingArticles = articles.slice(1);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />

      <main className="myworks-page-main">
        {/* Header */}
        <header className="myworks-header-editorial">
          <span className="myworks-eyebrow">03 / WRITING & AI EDUCATION</span>
          <h1 className="myworks-title-display">
            TECHNICAL <span className="myworks-title-accent">DEEP DIVES</span>
          </h1>
          <p className="myworks-subtitle">
            Stress-testing AI agents, breaking down LLM watermarks, and evaluating Python frameworks, live synced from Medium. {stats.totalViews} cumulative views as of April 2026.
          </p>
        </header>

        {/* Reader Impact Metrics Strip */}
        <div className="blog-metrics-strip">
          <div className="metric-cell">
            <span className="metric-value">{stats.totalViews}</span>
            <span className="metric-label">{stats.totalViewsLabel}</span>
          </div>
          <div className="metric-cell">
            <span className="metric-value">{stats.topClaps}</span>
            <span className="metric-label">{stats.topClapsLabel}</span>
          </div>
          <div className="metric-cell">
            <span className="metric-value">7-PART</span>
            <span className="metric-label">AGENTIC ENGINEERING SERIES</span>
          </div>
          <div className="metric-cell">
            <span className="metric-value">{stats.primaryPub}</span>
            <span className="metric-label">REGULAR CONTRIBUTOR</span>
          </div>
        </div>

        {/* Latest Featured Article Spotlight */}
        {latestArticle && (
          <section className="blog-spotlight-section">
            <div className="spotlight-header-tag">LATEST PUBLISHED ARTICLE</div>
            <div className="spotlight-card">
              {latestArticle.coverImage && (
                <div className="spotlight-image-col">
                  <img
                    src={latestArticle.coverImage}
                    alt={latestArticle.title}
                    className="spotlight-img"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="spotlight-content-col">
                <div className="spotlight-badge-line">
                  <span className="spotlight-badge">
                    {latestArticle.highlight || "LATEST RELEASE"}
                  </span>
                  <span className="spotlight-pub">
                    {latestArticle.pub || "Artificial Intelligence in Plain English"}
                  </span>
                </div>

                <h2 className="spotlight-title">{latestArticle.title}</h2>

                {latestArticle.contentSnippet && (
                  <p className="spotlight-snippet">{latestArticle.contentSnippet}</p>
                )}

                <div className="spotlight-meta-line">
                  <div className="spotlight-stats">
                    {latestArticle.claps && (
                      <span>Claps: <strong>{latestArticle.claps}</strong></span>
                    )}
                    {latestArticle.readTime && (
                      <span>Time: <strong>{latestArticle.readTime}</strong></span>
                    )}
                    {(latestArticle.date || latestArticle.pubDate) && (
                      <span>Date: <strong>{latestArticle.date || latestArticle.pubDate}</strong></span>
                    )}
                  </div>

                  <a
                    href={latestArticle.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="spotlight-action-btn"
                    data-cursor="disable"
                  >
                    READ ARTICLE <MdArrowOutward />
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Articles Structural List */}
        <section className="work-list-section" style={{ marginTop: "60px" }}>
          <div className="work-list-header">
            <span className="col-idx">NO.</span>
            <span className="col-title">ARTICLE & PUBLICATION</span>
            <span className="col-tech">METRICS & TAGS</span>
            <span className="col-action">LINK</span>
          </div>

          <div className="work-list-rows">
            {remainingArticles.map((article, idx) => (
              <div key={idx} className="work-row-item">
                <div className="work-row-main">
                  <span className="work-row-idx">
                    {String(idx + 2).padStart(2, "0")}
                  </span>

                  <div className="work-row-info">
                    <div className="work-row-tag-line">
                      <span className="work-cat-badge">
                        {article.highlight || "TECHNICAL ARTICLE"}
                      </span>
                      <span className="work-featured-badge" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", color: "#aaa" }}>
                        {article.pub || "In Plain English"}
                      </span>
                    </div>

                    <h3 className="work-row-title">{article.title}</h3>

                    {article.contentSnippet && (
                      <p className="work-row-desc">{article.contentSnippet}</p>
                    )}
                  </div>

                  <div className="work-row-tech">
                    {article.claps && (
                      <span className="work-tech-pill">Claps: {article.claps}</span>
                    )}
                    {article.readTime && (
                      <span className="work-tech-pill">{article.readTime}</span>
                    )}
                    {(article.date || article.pubDate) && (
                      <span className="work-tech-pill">Date: {article.date || article.pubDate}</span>
                    )}
                  </div>

                  <div className="work-row-action">
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-action-btn"
                      data-cursor="disable"
                    >
                      READ <MdArrowOutward />
                    </a>
                  </div>
                </div>

                {/* Mobile Inline Image */}
                {article.coverImage && (
                  <div className="work-row-mobile-img">
                    <img src={article.coverImage} alt={article.title} loading="lazy" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Medium Profile Direct Link Banner */}
        <div className="blog-medium-banner">
          <MdArticle className="banner-icon" />
          <h3 className="banner-title">Read All Articles Live on Medium</h3>
          <p className="banner-desc">
            Follow @ayeshamughal21 for weekly technical deep-dives on AI agents, FastAPI, Python performance, and Next.js architecture.
          </p>
          <a
            href={config.social.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="banner-action-btn"
            data-cursor="disable"
          >
            VISIT MEDIUM PROFILE <MdArrowOutward />
          </a>
        </div>

        {/* Return Home Link */}
        <div className="myworks-footer-cta">
          <Link href="/" className="return-home-btn" data-cursor="disable">
            RETURN TO HOME
          </Link>
        </div>
      </main>
    </div>
  );
}
