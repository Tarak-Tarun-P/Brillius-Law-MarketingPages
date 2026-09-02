import React from 'react';
import { ArrowRight, ArrowDown, Calendar, Scale, Check, ChevronRight, CheckCircle2 } from 'lucide-react';
import './HearingsHero.css';

export const HearingsHero: React.FC = () => {
  const scrollToHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('hearings-how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hearings-hero-section" aria-label="Hearings Hero">
      {/* Ambient background glows */}
      <div className="hearings-hero-glow glow-gold" aria-hidden="true" />
      <div className="hearings-hero-glow glow-navy" aria-hidden="true" />

      <div className="content-container">
        <div className="hearings-hero-grid">
          {/* LEFT: Headline & Value Proposition */}
          <div className="hearings-hero-left animate-fade-in-up">
            <div className="hearings-hero-eyebrow-wrapper">
              <span className="hearings-hero-eyebrow">HEARING MANAGEMENT</span>
              <span className="hearings-hero-eyebrow-line" aria-hidden="true" />
            </div>

            <h1 className="hearings-hero-headline">
              Keep Track of
              <br />
              Your Hearings.
            </h1>

            <p className="hearings-hero-description">
              See upcoming hearing dates, keep them on your calendar, and look back at previous hearings and their recorded orders or verdicts.
            </p>

            <div className="hearings-hero-actions">
              <a href="#get-started" className="btn-hearings-primary">
                <span>Explore Hearings</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#hearings-how-it-works" className="btn-hearings-secondary" onClick={scrollToHowItWorks}>
                <span>See How It Works</span>
                <ArrowDown size={15} aria-hidden="true" />
              </a>
            </div>

            {/* Trust Pills */}
            <div className="hearings-trust-pills">
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Connected to Cases</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Calendar Visible</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Past Orders Recorded</span>
              </span>
            </div>
          </div>

          {/* RIGHT: Realistic Hearing Product Visual */}
          <div className="hearings-hero-right animate-fade-in">
            <div className="hearings-mockup-card">
              {/* Window Header */}
              <div className="mockup-header">
                <div className="mockup-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <span className="mockup-title">BrilliusLaw // Case Hearings</span>
                <span className="mockup-badge">Listing Overview</span>
              </div>

              {/* Card Body */}
              <div className="mockup-body">
                {/* Case Reference Header */}
                <div className="hero-case-ref-bar">
                  <div className="case-ref-icon">
                    <Scale size={18} color="#091526" />
                  </div>
                  <div>
                    <span className="case-ref-tag">CASE</span>
                    <strong className="case-ref-name">ABC Technologies vs. XYZ Ltd.</strong>
                  </div>
                </div>

                {/* Upcoming Hearing Card */}
                <div className="hero-upcoming-box">
                  <div className="upcoming-top-row">
                    <span className="upcoming-tag">UPCOMING HEARING</span>
                    <span className="calendar-status-badge">
                      <Check size={11} strokeWidth={2.5} />
                      <span>Added to Calendar</span>
                    </span>
                  </div>

                  <div className="upcoming-date-block">
                    <div className="date-badge-sq">
                      <span className="sq-month">SEP</span>
                      <span className="sq-day">15</span>
                    </div>
                    <div className="date-meta-text">
                      <h4 className="hearing-listing-title">15 September 2026</h4>
                      <p className="hearing-court-sub">High Court of Delhi • Court No. 3</p>
                    </div>
                  </div>

                  <div className="upcoming-actions-row">
                    <span className="btn-view-hearing-demo">
                      <span>View Hearing</span>
                      <ChevronRight size={13} />
                    </span>
                    <span className="btn-add-cal-demo">
                      <Calendar size={13} />
                      <span>Calendar Synced</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
