import React from 'react';
import { ArrowRight, ArrowDown, GitCompare, CheckCircle2 } from 'lucide-react';
import './CompareHero.css';

export const CompareHero: React.FC = () => {
  const scrollToHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('compare-how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="compare-hero-section" aria-label="Compare and Review Hero">
      {/* Ambient background glows */}
      <div className="compare-hero-glow glow-gold" aria-hidden="true" />
      <div className="compare-hero-glow glow-navy" aria-hidden="true" />

      <div className="content-container">
        <div className="compare-hero-grid">
          {/* LEFT: Headline & Value Proposition */}
          <div className="compare-hero-left animate-fade-in-up">
            <div className="compare-hero-eyebrow-wrapper">
              <span className="compare-hero-eyebrow">COMPARE & REVIEW</span>
              <span className="compare-hero-eyebrow-line" aria-hidden="true" />
            </div>

            <h1 className="compare-hero-headline">
              See Exactly
              <br />
              What Changed.
            </h1>

            <p className="compare-hero-description">
              Compare a previous saved version with your current document and quickly review what was added, removed, moved, or changed.
            </p>

            <div className="compare-hero-actions">
              <a href="#get-started" className="btn-compare-primary">
                <span>Explore Compare & Review</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#compare-how-it-works" className="btn-compare-secondary" onClick={scrollToHowItWorks}>
                <span>See How It Works</span>
                <ArrowDown size={15} aria-hidden="true" />
              </a>
            </div>

            {/* Trust Pills */}
            <div className="compare-trust-pills">
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Side-by-Side Clarity</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Text, Numbers & Tables</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Saved Version History</span>
              </span>
            </div>
          </div>

          {/* RIGHT: Large Realistic Document Comparison Interface */}
          <div className="compare-hero-right animate-fade-in">
            <div className="compare-mockup-card">
              {/* Window Header */}
              <div className="mockup-header">
                <div className="mockup-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <span className="mockup-title">Employment Agreement // Version Comparison</span>
                <div className="mockup-badge">
                  <GitCompare size={11} />
                  <span>v1 (Saved) vs Current</span>
                </div>
              </div>

              {/* Card Body with Side-by-Side Comparison */}
              <div className="mockup-body">
                <div className="hero-diff-split">
                  {/* Previous Version Column */}
                  <div className="diff-col col-previous">
                    <div className="col-header-bar">
                      <span className="col-tag">PREVIOUS VERSION (v1)</span>
                      <span className="col-status-muted">Saved 24 Aug</span>
                    </div>
                    <div className="diff-content-block">
                      <span className="clause-meta">Clause 4.1 — Term & Duration</span>
                      <p className="clause-text">
                        The agreement shall remain valid for <span className="diff-highlight-deleted">12 months</span> from the effective commencement date.
                      </p>
                    </div>
                  </div>

                  {/* Current Version Column */}
                  <div className="diff-col col-current">
                    <div className="col-header-bar">
                      <span className="col-tag text-gold">CURRENT VERSION</span>
                      <span className="col-status-active">Currently Edited</span>
                    </div>
                    <div className="diff-content-block active-block">
                      <span className="clause-meta">Clause 4.1 — Term & Duration</span>
                      <p className="clause-text">
                        The agreement shall remain valid for <span className="diff-highlight-added">24 months</span> from the effective commencement date.
                      </p>
                      <div className="change-annotation">
                        <span className="annotation-pill">↑ Duration changed from 12 to 24 months</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Change Summary Bar */}
                <div className="hero-diff-summary-bar">
                  <div className="summary-change-tags">
                    <span className="pill-tag added">+ 1 Number Changed</span>
                    <span className="pill-tag modified">• 1 Clause Updated</span>
                  </div>
                  <span className="summary-status-note">Reviewing Change 1 of 4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
