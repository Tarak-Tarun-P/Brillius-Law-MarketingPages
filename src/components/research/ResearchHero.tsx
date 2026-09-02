import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowDown,
  Search,
  CheckCircle2,
  BookOpen,
  Scale,
  Sparkles,
  FileText,
  Bookmark,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';
import './ResearchHero.css';

export const ResearchHero: React.FC = () => {
  const [activeHeroTab, setActiveHeroTab] = useState<'external' | 'case'>('external');
  const [selectedSearchMode, setSelectedSearchMode] = useState<string>('keyword');

  const scrollToHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('research-how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="research-hero-section" aria-label="Legal Research Hero">
      {/* Subtle ambient lighting */}
      <div className="research-hero-glow glow-gold" aria-hidden="true" />
      <div className="research-hero-glow glow-navy" aria-hidden="true" />

      <div className="content-container">
        <div className="research-hero-grid">
          {/* LEFT: Headline & Value Proposition */}
          <div className="research-hero-left animate-fade-in-up">
            <div className="research-hero-eyebrow-wrapper">
              <span className="research-hero-eyebrow">LEGAL RESEARCH</span>
              <span className="research-hero-eyebrow-line" aria-hidden="true" />
            </div>

            <h1 className="research-hero-headline">
              Find the Law.
              <br />
              <span className="gold-accent-text">Understand the Case.</span>
            </h1>

            <p className="research-hero-description">
              Search judgments, precedents, citations, and legal provisions. Then ask questions about a specific case using the documents and evidence connected to it.
            </p>

            <div className="research-hero-actions">
              <a href="#get-started" className="btn-research-primary">
                <span>Explore Legal Research</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                href="#research-how-it-works"
                className="btn-research-secondary"
                onClick={scrollToHowItWorks}
              >
                <span>See How It Works</span>
                <ArrowDown size={15} aria-hidden="true" />
              </a>
            </div>

            {/* Trust Pills */}
            <div className="research-trust-pills">
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Authoritative Judgments</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Grounding in Case Documents</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Direct Source References</span>
              </span>
            </div>
          </div>

          {/* RIGHT: Large Realistic Legal Research Dual Interface */}
          <div className="research-hero-right animate-fade-in">
            <div className="research-dual-mockup-card">
              {/* Window Header with Dual-Mode Tabs */}
              <div className="dual-mockup-header">
                <div className="mockup-window-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>

                <div className="dual-mode-switcher">
                  <button
                    type="button"
                    className={`dual-switch-btn ${activeHeroTab === 'external' ? 'active' : ''}`}
                    onClick={() => setActiveHeroTab('external')}
                  >
                    <Scale size={13} />
                    <span>Legal Research</span>
                    <span className="mode-pill-badge">Case Law</span>
                  </button>
                  <button
                    type="button"
                    className={`dual-switch-btn ${activeHeroTab === 'case' ? 'active' : ''}`}
                    onClick={() => setActiveHeroTab('case')}
                  >
                    <Sparkles size={13} />
                    <span>Case Research</span>
                    <span className="mode-pill-badge matter-badge">Specific Matter</span>
                  </button>
                </div>
              </div>

              {/* View 1: External Case Law Search */}
              {activeHeroTab === 'external' && (
                <div className="dual-content-pane animate-fade-in">
                  {/* Search Bar with Mode Selection */}
                  <div className="hero-search-bar-wrap">
                    <div className="hero-search-input-box">
                      <Search size={16} color="#C6A15B" />
                      <input
                        type="text"
                        readOnly
                        value={
                          selectedSearchMode === 'keyword'
                            ? 'anticipatory bail in PMLA matters'
                            : selectedSearchMode === 'party'
                            ? 'Union of India'
                            : selectedSearchMode === 'citation'
                            ? '(2023) 5 SCC 123'
                            : selectedSearchMode === 'judge'
                            ? 'Hon’ble Mr. Justice D.Y. Chandrachud'
                            : 'Section 138 Negotiable Instruments Act'
                        }
                        className="hero-search-input"
                        aria-label="Search Legal Research"
                      />
                      <span className="hero-search-submit-btn">Search</span>
                    </div>

                    <div className="hero-search-modes-row">
                      <span className="modes-label">Modes:</span>
                      {[
                        { id: 'keyword', label: 'Keyword' },
                        { id: 'party', label: 'Party' },
                        { id: 'citation', label: 'Citation' },
                        { id: 'judge', label: 'Judge' },
                        { id: 'section', label: 'Section' },
                      ].map((mode) => (
                        <button
                          key={mode.id}
                          type="button"
                          className={`hero-mode-pill ${
                            selectedSearchMode === mode.id ? 'active-mode' : ''
                          }`}
                          onClick={() => setSelectedSearchMode(mode.id)}
                        >
                          {mode.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Search Results Preview */}
                  <div className="hero-results-preview-list">
                    <div className="hero-result-card featured">
                      <div className="res-top-meta">
                        <div className="res-courts-group">
                          <span className="court-chip">Supreme Court of India</span>
                          <span className="treatment-chip chip-followed">Followed</span>
                        </div>
                        <span className="citation-code">(2023) 5 SCC 123</span>
                      </div>

                      <h3 className="res-case-title">Vijay Madanlal Choudhary &amp; Ors. v. Union of India</h3>

                      <div className="res-ratio-snippet">
                        <span className="ratio-label">RATIO DECIDENDI</span>
                        <p className="ratio-text">
                          Twin conditions under Section 45 of the PMLA do not bar the constitutional power to grant anticipatory bail where stringent threshold tests of prima facie innocence are met.
                        </p>
                      </div>

                      <div className="res-card-actions-bar">
                        <span className="statute-ref-pill">
                          <BookOpen size={11} /> Prevention of Money Laundering Act § 45
                        </span>
                        <div className="res-right-actions">
                          <span className="action-link-btn">
                            <Bookmark size={11} /> Save to Matter
                          </span>
                          <span className="action-link-btn primary-action">
                            <span>Read Judgment</span>
                            <ChevronRight size={12} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* View 2: Case-Specific AI Research */}
              {activeHeroTab === 'case' && (
                <div className="dual-content-pane animate-fade-in">
                  {/* Case Context Header */}
                  <div className="hero-matter-context-bar">
                    <div className="matter-context-left">
                      <span className="matter-label">ACTIVE CASE:</span>
                      <strong className="matter-case-title">ABC Technologies vs XYZ Ltd</strong>
                    </div>
                    <span className="matter-forum-pill">Commercial Court, Bengaluru</span>
                  </div>

                  {/* Ask Question Bar */}
                  <div className="hero-case-question-box">
                    <HelpCircle size={16} color="#C6A15B" />
                    <span className="case-question-text">
                      "What are the weak points in the plaintiff's claim?"
                    </span>
                    <span className="case-status-badge">Answer Grounded in Documents</span>
                  </div>

                  {/* Structured Answer Card */}
                  <div className="hero-case-answer-card">
                    <div className="case-answer-header">
                      <div className="answer-indicator">
                        <span className="answer-dot" />
                        <span className="answer-heading-text">Based on available case documents:</span>
                      </div>
                    </div>

                    <div className="case-answer-body">
                      <p className="case-answer-paragraph">
                        1. <strong>Lack of written milestone acceptance:</strong> Clause 8.2 of the Master Service Agreement required explicit sign-off within 14 days, which the plaintiff never obtained before raising invoice #INV-4029.
                      </p>
                      <p className="case-answer-paragraph">
                        2. <strong>Limitation vulnerability:</strong> The claimed outstanding amount pertains to services delivered in April 2021; suit filed beyond 3 years without an acknowledgment of debt.
                      </p>
                    </div>

                    {/* Source References */}
                    <div className="case-sources-tray">
                      <span className="sources-tray-label">SOURCE REFERENCES:</span>
                      <div className="source-tags-group">
                        <span className="source-tag">
                          <FileText size={11} /> Plaint Document — Page 12
                        </span>
                        <span className="source-tag">
                          <FileText size={11} /> Master Agreement Ex. P-3 — Page 4
                        </span>
                        <span className="source-tag">
                          <FileText size={11} /> Reply Notice — Page 19
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
