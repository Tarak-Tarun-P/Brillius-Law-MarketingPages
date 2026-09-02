import React from 'react';
import { ArrowRight, FileText, CheckCircle2, Search, ArrowDown } from 'lucide-react';
import './AnalyzerHero.css';

export const AnalyzerHero: React.FC = () => {
  const scrollToHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="analyzer-hero-section" aria-label="Document Analyzer Hero">
      {/* Ambient background glows */}
      <div className="analyzer-hero-glow glow-gold" aria-hidden="true" />
      <div className="analyzer-hero-glow glow-navy" aria-hidden="true" />

      <div className="content-container">
        <div className="analyzer-hero-grid">
          {/* LEFT: Headline & Value Proposition */}
          <div className="analyzer-hero-left animate-fade-in-up">
            <div className="analyzer-hero-eyebrow-wrapper">
              <span className="analyzer-hero-eyebrow">DOCUMENT ANALYZER</span>
              <span className="analyzer-hero-eyebrow-line" aria-hidden="true" />
            </div>

            <h1 className="analyzer-hero-headline">
              Understand Long Documents
              <br />
              More Easily.
            </h1>

            <p className="analyzer-hero-description">
              Upload a document, ask questions about it, and quickly find the information that matters.
            </p>

            <div className="analyzer-hero-actions">
              <a href="#get-started" className="btn-analyzer-primary">
                <span>Try Document Analyzer</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#how-it-works" className="btn-analyzer-secondary" onClick={scrollToHowItWorks}>
                <span>See How It Works</span>
                <ArrowDown size={15} aria-hidden="true" />
              </a>
            </div>

            {/* Quick trust reassurance */}
            <div className="analyzer-trust-pills">
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>PDF & Word Files</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Page & Section Citations</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Private & Secure</span>
              </span>
            </div>
          </div>

          {/* RIGHT: Visual Product Representation (Document + Question + Source) */}
          <div className="analyzer-hero-right animate-fade-in">
            <div className="analyzer-mockup-card">
              <div className="mockup-window-header">
                <div className="mockup-window-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <span className="mockup-window-title">Shareholder_Agreement_v4.pdf</span>
                <span className="mockup-window-badge">Active Review</span>
              </div>

              <div className="mockup-workspace-grid">
                {/* Document Column */}
                <div className="mockup-doc-col">
                  <div className="mockup-doc-header">
                    <FileText size={14} color="#091526" />
                    <span>Page 24 of 48</span>
                  </div>
                  <div className="mockup-doc-body">
                    <p className="doc-line muted-line">
                      Section 8.1 Representations and Warranties of Founders...
                    </p>
                    <div className="doc-highlighted-box">
                      <span className="doc-target-badge">Section 8.3 // Payment & Indemnity</span>
                      <p className="highlight-text">
                        "Payment of any approved claim shall be remitted within 30 business days following written notice, subject to cure terms in Schedule IV."
                      </p>
                    </div>
                    <p className="doc-line muted-line">
                      Section 8.4 Governing Law and Dispute Resolution...
                    </p>
                  </div>
                </div>

                {/* Question & Answer Column */}
                <div className="mockup-qa-col">
                  {/* User Question */}
                  <div className="qa-bubble user-bubble">
                    <div className="bubble-label">QUESTION</div>
                    <p className="bubble-text">"What are the payment terms?"</p>
                  </div>

                  {/* Grounded Answer */}
                  <div className="qa-bubble assistant-bubble">
                    <div className="bubble-label gold-label">ANSWER</div>
                    <p className="bubble-text">
                      Payment must be made within <strong>30 business days</strong> following written notice of an approved claim.
                    </p>

                    {/* Exact Citation Badge */}
                    <div className="source-citation-badge">
                      <Search size={12} color="#C6A15B" />
                      <span>Source: Section 8.3 (Page 24)</span>
                    </div>
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
