import React from 'react';
import { ArrowRight, ArrowDown, Search, Scale, CheckCircle2, Bookmark } from 'lucide-react';
import './LibraryHero.css';

export const LibraryHero: React.FC = () => {
  const scrollToHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('library-how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="library-hero-section" aria-label="Law Library Hero">
      {/* Ambient background glows */}
      <div className="library-hero-glow glow-gold" aria-hidden="true" />
      <div className="library-hero-glow glow-navy" aria-hidden="true" />

      <div className="content-container">
        <div className="library-hero-grid">
          {/* LEFT: Headline & Value Proposition */}
          <div className="library-hero-left animate-fade-in-up">
            <div className="library-hero-eyebrow-wrapper">
              <span className="library-hero-eyebrow">LAW LIBRARY</span>
              <span className="library-hero-eyebrow-line" aria-hidden="true" />
            </div>

            <h1 className="library-hero-headline">
              Explore Indian Law,
              <br />
              Clearly.
            </h1>

            <p className="library-hero-description">
              Find the laws, provisions, references, and judgments you need to understand an issue and continue your research.
            </p>

            <div className="library-hero-actions">
              <a href="#get-started" className="btn-library-primary">
                <span>Explore Law Library</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#library-how-it-works" className="btn-library-secondary" onClick={scrollToHowItWorks}>
                <span>See How It Works</span>
                <ArrowDown size={15} aria-hidden="true" />
              </a>
            </div>

            {/* Trust Pills */}
            <div className="library-trust-pills">
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Verified Bare Acts</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Section-Level References</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Related Judgments</span>
              </span>
            </div>
          </div>

          {/* RIGHT: Large Realistic Law Library Product Interface */}
          <div className="library-hero-right animate-fade-in">
            <div className="library-mockup-card">
              {/* Window Header */}
              <div className="mockup-header">
                <div className="mockup-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <span className="mockup-title">BrilliusLaw // Indian Legal Library</span>
                <span className="mockup-badge">Bare Act Reader</span>
              </div>

              {/* Search Bar Bar */}
              <div className="hero-search-bar">
                <Search size={14} color="#C6A15B" />
                <span className="search-placeholder">Search Indian Contract Act, Section 10, or landmark cases...</span>
                <span className="search-tag">Central Acts</span>
              </div>

              {/* Reader Split View */}
              <div className="hero-reader-split">
                {/* Left: Section Reading Pane */}
                <div className="hero-section-pane">
                  <div className="pane-header-row">
                    <div>
                      <span className="act-tag">INDIAN CONTRACT ACT, 1872</span>
                      <strong className="section-title">Section 10 — What agreements are contracts</strong>
                    </div>
                    <span className="bookmark-icon-pill" title="Saved to Journal">
                      <Bookmark size={13} color="#C6A15B" fill="#C6A15B" />
                    </span>
                  </div>

                  <div className="provision-body">
                    <p className="provision-p">
                      "All agreements are contracts if they are made by the <span className="highlight-phrase">free consent</span> of parties competent to contract, for a <span className="highlight-phrase">lawful consideration</span> and with a lawful object, and are not hereby expressly declared to be void."
                    </p>
                    
                    <div className="footnote-pill">
                      <span className="fn-badge">[1]</span>
                      <span>See Section 11 for capacity to contract; Section 14 for free consent.</span>
                    </div>
                  </div>
                </div>

                {/* Right: Connected Judicial Decisions */}
                <div className="hero-decisions-pane">
                  <div className="decisions-header">
                    <Scale size={13} color="#C6A15B" />
                    <span>Connected Judgments</span>
                  </div>

                  <div className="hero-judgment-card">
                    <div className="j-top-line">
                      <span className="j-court">Supreme Court of India</span>
                      <span className="j-citation">1954 SCR 310</span>
                    </div>
                    <strong className="j-case-name">Satyabrata Ghose v. Mugneeram Bangur &amp; Co.</strong>
                    <p className="j-summary">Essential elements of valid formation and doctrine of frustration under Section 56.</p>
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
