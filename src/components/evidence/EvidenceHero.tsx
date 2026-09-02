import React from 'react';
import { ArrowRight, ArrowDown, Archive, FileText, CheckCircle2, Eye, FolderPlus } from 'lucide-react';
import './EvidenceHero.css';

export const EvidenceHero: React.FC = () => {
  const scrollToHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('evidence-how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="evidence-hero-section" aria-label="Evidence Hero">
      {/* Ambient background glows */}
      <div className="evidence-hero-glow glow-gold" aria-hidden="true" />
      <div className="evidence-hero-glow glow-navy" aria-hidden="true" />

      <div className="content-container">
        <div className="evidence-hero-grid">
          {/* LEFT: Headline & Value Proposition */}
          <div className="evidence-hero-left animate-fade-in-up">
            <div className="evidence-hero-eyebrow-wrapper">
              <span className="evidence-hero-eyebrow">EVIDENCE MANAGEMENT</span>
              <span className="evidence-hero-eyebrow-line" aria-hidden="true" />
            </div>

            <h1 className="evidence-hero-headline">
              Keep Your Evidence
              <br />
              Organized.
            </h1>

            <p className="evidence-hero-description">
              Store evidence with the relevant case, keep important files in one place, and return to previous evidence whenever you need it.
            </p>

            <div className="evidence-hero-actions">
              <a href="#get-started" className="btn-evidence-primary">
                <span>Explore Evidence</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#evidence-how-it-works" className="btn-evidence-secondary" onClick={scrollToHowItWorks}>
                <span>See How It Works</span>
                <ArrowDown size={15} aria-hidden="true" />
              </a>
            </div>

            {/* Trust Pills */}
            <div className="evidence-trust-pills">
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Connected to Cases</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Easy File Storage</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Previous Records Saved</span>
              </span>
            </div>
          </div>

          {/* RIGHT: Realistic Evidence Product Visual */}
          <div className="evidence-hero-right animate-fade-in">
            <div className="evidence-mockup-card">
              {/* Window Header */}
              <div className="mockup-header">
                <div className="mockup-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <span className="mockup-title">BrilliusLaw // Case Evidence</span>
                <span className="mockup-badge">Repository</span>
              </div>

              {/* Card Body */}
              <div className="mockup-body">
                {/* Case Reference Header */}
                <div className="hero-case-bar">
                  <div className="case-bar-icon">
                    <Archive size={17} color="#091526" />
                  </div>
                  <div className="case-bar-text">
                    <span className="case-bar-label">CONNECTED CASE</span>
                    <strong className="case-bar-title">ABC Technologies vs. XYZ Ltd.</strong>
                  </div>
                  <span className="case-bar-action">
                    <FolderPlus size={13} />
                    <span>Add Evidence</span>
                  </span>
                </div>

                {/* Evidence Item Row 1 */}
                <div className="hero-evidence-item active-item">
                  <div className="item-file-icon">
                    <FileText size={18} color="#C6A15B" />
                  </div>
                  <div className="item-file-info">
                    <strong className="item-file-title">Contract_Amendment_Signed.pdf</strong>
                    <div className="item-meta-line">
                      <span>Added 12 August 2026</span>
                      <span className="meta-dot">•</span>
                      <span className="meta-tag">Primary Document</span>
                    </div>
                  </div>
                  <span className="btn-view-evidence-demo">
                    <Eye size={12} />
                    <span>View</span>
                  </span>
                </div>

                {/* Evidence Item Row 2 */}
                <div className="hero-evidence-item">
                  <div className="item-file-icon">
                    <FileText size={18} color="#091526" />
                  </div>
                  <div className="item-file-info">
                    <strong className="item-file-title">Bank_Statement_Payment_Proof.pdf</strong>
                    <div className="item-meta-line">
                      <span>Added 04 August 2026</span>
                      <span className="meta-dot">•</span>
                      <span className="meta-tag">Supporting File</span>
                    </div>
                  </div>
                  <span className="btn-view-evidence-demo">
                    <Eye size={12} />
                    <span>View</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
