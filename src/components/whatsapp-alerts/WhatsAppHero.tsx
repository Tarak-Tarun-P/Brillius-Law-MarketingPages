import React from 'react';
import {
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  Calendar,
  CheckSquare,
  FileCheck2,
  ChevronRight,
  Shield,
} from 'lucide-react';
import './WhatsAppHero.css';

export const WhatsAppHero: React.FC = () => {
  const scrollToExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('whatsapp-how-it-helps');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="wa-hero-section" aria-label="WhatsApp Alerts Hero">
      {/* Background ambient lighting */}
      <div className="wa-hero-glow glow-gold" aria-hidden="true" />
      <div className="wa-hero-glow glow-navy" aria-hidden="true" />

      <div className="content-container">
        <div className="wa-hero-grid">
          {/* LEFT: Headline & Value Proposition */}
          <div className="wa-hero-left animate-fade-in-up">
            <div className="wa-hero-eyebrow-wrapper">
              <span className="wa-hero-eyebrow">PRACTICE COMMUNICATION &amp; ALERTS</span>
              <span className="wa-hero-eyebrow-line" aria-hidden="true" />
            </div>

            <h1 className="wa-hero-headline">
              Important Updates,
              <br />
              <span className="gold-accent-text">Right on WhatsApp.</span>
            </h1>

            <p className="wa-hero-description">
              Stay informed about important hearings, tasks, approvals, and document updates without constantly checking your workspace.
            </p>

            <div className="wa-hero-actions">
              <a href="#get-started" className="btn-wa-primary">
                <span>Get Started</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                href="#whatsapp-how-it-helps"
                className="btn-wa-secondary"
                onClick={scrollToExplore}
              >
                <span>Explore WhatsApp Alerts</span>
                <ChevronRight size={15} aria-hidden="true" />
              </a>
            </div>

            {/* Trust Pills */}
            <div className="wa-trust-pills">
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Hearings &amp; Listings</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Task Reminders</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Draft &amp; Doc Approvals</span>
              </span>
            </div>
          </div>

          {/* RIGHT: Realistic WhatsApp Alert Chat Preview */}
          <div className="wa-hero-right animate-fade-in">
            <div className="wa-phone-mockup">
              {/* WhatsApp App Header */}
              <div className="wa-chat-header">
                <div className="wa-header-avatar">
                  <MessageSquare size={16} color="#FFFFFF" />
                </div>
                <div className="wa-header-info">
                  <strong className="wa-bot-name">BrilliusLaw Chambers Assistant</strong>
                  <span className="wa-bot-status">Verified Practice Channel</span>
                </div>
                <Shield size={14} color="#C6A15B" />
              </div>

              {/* Chat Message Stream */}
              <div className="wa-message-stream">
                {/* Message 1: Hearing Alert */}
                <div className="wa-bubble hearing-bubble">
                  <div className="bubble-type-tag">
                    <Calendar size={11} color="#C6A15B" />
                    <span>HEARING REMINDER</span>
                  </div>
                  <strong className="bubble-title">Commercial Appeal No. 142/2023</strong>
                  <p className="bubble-body">
                    Matter listed today before High Court of Karnataka (Court Hall 04, Item #14).
                    <br />
                    <span className="bubble-sub">Bench: Division Bench 02 • Final Arguments</span>
                  </p>
                </div>

                {/* Message 2: Draft Approval Request */}
                <div className="wa-bubble draft-bubble">
                  <div className="bubble-type-tag">
                    <FileCheck2 size={11} color="#C6A15B" />
                    <span>DRAFT APPROVAL REQUEST</span>
                  </div>
                  <strong className="bubble-title">Written Statement &amp; Counter-Claim (v2.1)</strong>
                  <p className="bubble-body">
                    Associate Arjun Kapoor submitted the draft for matter <em>ABC Tech vs XYZ Ltd</em> for your review.
                  </p>
                </div>

                {/* Message 3: Task Reminder */}
                <div className="wa-bubble task-bubble">
                  <div className="bubble-type-tag">
                    <CheckSquare size={11} color="#C6A15B" />
                    <span>TASK REMINDER</span>
                  </div>
                  <strong className="bubble-title">File Rejoinder Affidavit</strong>
                  <p className="bubble-body">
                    Rejoinder due in Registry today before 04:00 PM for <em>Apex Global vs CGSC</em>.
                  </p>
                </div>
              </div>

              {/* WhatsApp Mockup Footer */}
              <div className="wa-mockup-footer">
                <span>Open BrilliusLaw for complete matter records &amp; one-click action</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
