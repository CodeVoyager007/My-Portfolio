"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import SocialIcons from "@/components/SocialIcons";
import Cursor from "@/components/Cursor";
import { config } from "@/data/config";
import Link from "next/link";
import { MdEmail, MdLocationOn, MdSend, MdCheckCircle } from "react-icons/md";
import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa";
import "@/components/styles/Contact.css";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "", company: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message || status === "sending") return;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Your message couldn't be sent.");
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Your message couldn't be sent.");
      setStatus("error");
    }
  };

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />

      <main className="contact-page-main">

        <header className="contact-header-editorial">
          <span className="contact-eyebrow">05 / GET IN TOUCH</span>
          <h1 className="contact-title-display">
            INITIATE <span className="contact-title-accent">CONTACT</span>
          </h1>
          <p className="contact-subtitle">
            Have a project, technical inquiry, AI collaboration, or writing opportunity?
            Send a direct message below.
          </p>
        </header>

        <div className="contact-grid">

          <div className="contact-info-card">
            <div>
              <h2 className="contact-card-heading">Direct Channels</h2>

              <div className="contact-channel-item">
                <div className="contact-channel-label">
                  <MdEmail /> Email Address
                </div>
                <a
                  href={`mailto:${config.contact.email}`}
                  className="contact-channel-value"
                  data-cursor="disable"
                >
                  {config.contact.email}
                </a>
              </div>

              <div className="contact-channel-item">
                <div className="contact-channel-label">
                  <MdLocationOn /> Location
                </div>
                <div className="contact-channel-value">
                  {config.contact.location}
                </div>
              </div>
            </div>

            <div className="contact-socials-block">
              <div className="contact-socials-heading">Social Profiles</div>
              <div className="contact-socials-row">
                <a
                  href={config.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-icon-btn"
                  title="GitHub"
                  data-cursor="disable"
                >
                  <FaGithub />
                </a>
                <a
                  href={config.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-icon-btn"
                  title="LinkedIn"
                  data-cursor="disable"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={config.social.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-icon-btn"
                  title="Medium"
                  data-cursor="disable"
                >
                  <FaMedium />
                </a>
                <a
                  href={config.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-icon-btn"
                  title="Twitter"
                  data-cursor="disable"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            {status === "sent" ? (
              <div className="contact-submitted-state">
                <MdCheckCircle className="contact-submitted-icon" />
                <h3 className="contact-submitted-title">Message Sent</h3>
                <p className="contact-submitted-desc">
                  Thank you, {form.name}. Your message is in my inbox and I&apos;ll reply to {form.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h2 className="contact-card-heading">Send Inquiry</h2>

                {/* Spam trap: hidden from people, filled in by bots */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="contact-honeypot"
                />

                <div className="contact-field-group">
                  <label className="contact-label">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="contact-input"
                  />
                </div>

                <div className="contact-field-group">
                  <label className="contact-label">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="contact-input"
                  />
                </div>

                <div className="contact-field-group">
                  <label className="contact-label">Message Content</label>
                  <textarea
                    required
                    minLength={10}
                    maxLength={5000}
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Details about your inquiry or project..."
                    className="contact-textarea"
                  />
                </div>

                {status === "error" && (
                  <p className="contact-form-error" role="alert">
                    {error} You can also email me at{" "}
                    <a href={`mailto:${config.contact.email}`}>{config.contact.email}</a>.
                  </p>
                )}

                <button
                  type="submit"
                  className="contact-submit-btn"
                  data-cursor="disable"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send Message"} <MdSend />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="contact-footer-cta">
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
