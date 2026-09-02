import React from 'react';
import {
  ArrowRight,
  FileCheck2,
  CheckCircle2,
  FileText,
  Briefcase,
  ChevronRight,
  GitBranch,
  Clock,
} from 'lucide-react';
import './CaseDraftsHero.css';

export const CaseDraftsHero: React.FC = () => {
  const scrollToExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('case-aware-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="casedrafts-hero-section" aria-label="Case Drafts Hero">
      {/* Background ambient lighting */}
      <div className="casedrafts-hero-glow glow-gold" aria-hidden="true" />
      <div className="casedrafts-hero-glow glow-navy" aria-hidden="true" />

      <div className="content-container">
        <div className="casedrafts-hero-grid">
          {/* LEFT: Headline & Value Proposition */}
          <div className="casedrafts-hero-left animate-fade-in-up">
            <div className="casedrafts-hero-eyebrow-wrapper">
              <span className="casedrafts-hero-eyebrow">CASE-SPECIFIC LEGAL DRAFTING</span>
              <span className="casedrafts-hero-eyebrow-line" aria-hidden="true" />
            </div>

            <h1 className="casedrafts-hero-headline">
              Draft for the Case,
              <br />
              <span className="gold-accent-text">Not From Scratch.</span>
            </h1>

            <p className="casedrafts-hero-description">
              Create case-specific legal drafts using your case information and templates, then edit, review, and finalize them in one place.
            </p>

            <div className="casedrafts-hero-actions">
              <a href="#get-started" className="btn-casedrafts-primary">
                <span>Get Started</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                href="#case-aware-section"
                className="btn-casedrafts-secondary"
                onClick={scrollToExplore}
              >
                <span>Explore Case Drafts</span>
                <ChevronRight size={15} aria-hidden="true" />
              </a>
            </div>

            {/* Trust Pills */}
            <div className="casedrafts-trust-pills">
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Case-Aware Context</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Ready &amp; Custom Templates</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Version &amp; Review Workflow</span>
              </span>
            </div>
          </div>

          {/* RIGHT: Realistic Legal Drafting Workspace Visual */}
          <div className="casedrafts-hero-right animate-fade-in">
            <div className="casedrafts-mockup-card">
              {/* Workspace Top Header */}
              <div className="casedrafts-mockup-header">
                <div className="mockup-window-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="casedrafts-header-title">
                  <FileText size={13} color="#C6A15B" />
                  <span>Drafting: Written Statement &amp; Counter-Claim</span>
                </div>
                <span className="casedrafts-status-badge in-review">In Review (v2.1)</span>
              </div>

              {/* Case & Template Meta Banner */}
              <div className="draft-meta-banner">
                <div className="meta-col">
                  <div className="meta-icon-label">
                    <Briefcase size={12} color="#C6A15B" />
                    <span className="meta-lbl">ACTIVE CASE</span>
                  </div>
                  <strong className="meta-val">ABC Technologies vs XYZ Ltd</strong>
                  <span className="meta-sub">Commercial Suit #482/2023 • Bengaluru</span>
                </div>

                <div className="meta-col">
                  <div className="meta-icon-label">
                    <FileCheck2 size={12} color="#C6A15B" />
                    <span className="meta-lbl">SELECTED TEMPLATE</span>
                  </div>
                  <strong className="meta-val">Commercial Written Statement (Order VIII CPC)</strong>
                  <span className="meta-sub">Chamber Standard Format</span>
                </div>
              </div>

              {/* Document Editor Live Preview */}
              <div className="draft-doc-canvas">
                <div className="doc-paper-header">
                  <span className="paper-court">IN THE COURT OF THE PRINCIPAL CITY CIVIL JUDGE AT BENGALURU</span>
                  <span className="paper-suit">COMMERCIAL SUIT NO. 482 OF 2023</span>
                </div>

                <div className="doc-parties-block">
                  <div className="party-line">
                    <span className="p-name">ABC Technologies Pvt. Ltd.</span>
                    <span className="p-role">... Plaintiff</span>
                  </div>
                  <div className="party-vs">VERSUS</div>
                  <div className="party-line">
                    <span className="p-name">XYZ Infrastructure Ltd.</span>
                    <span className="p-role">... Defendant</span>
                  </div>
                </div>

                <div className="doc-title-bar">
                  <strong>WRITTEN STATEMENT ON BEHALF OF THE DEFENDANT UNDER ORDER VIII RULE 1 OF CPC, 1908</strong>
                </div>

                <div className="doc-paragraph-sample">
                  <span className="para-num">1.</span>
                  <p className="para-text">
                    That the present suit filed by the Plaintiff is false, frivolous, and not maintainable either in law or on facts, inasmuch as time was the essence of the contract dated 12.03.2022...
                  </p>
                </div>
              </div>

              {/* Footer Version & Review Info */}
              <div className="casedrafts-mockup-footer">
                <div className="footer-meta-left">
                  <GitBranch size={12} color="#C6A15B" />
                  <span>Version 2.1 (Updated by Arjun Kapoor)</span>
                </div>
                <div className="footer-meta-right">
                  <Clock size={11} color="#94A3B8" />
                  <span>Assigned for Senior Review to S. K. Mehta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
