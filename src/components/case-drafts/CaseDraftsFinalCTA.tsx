import React from 'react';
import { ArrowRight, MessageSquare, Briefcase, FileCheck2, GitBranch } from 'lucide-react';
import './CaseDraftsFinalCTA.css';

export const CaseDraftsFinalCTA: React.FC = () => {
  return (
    <section className="casedrafts-final-cta-section" aria-label="Start Case Drafts">
      <div className="content-container">
        <div className="casedrafts-final-cta-card">
          {/* Ambient Lighting */}
          <div className="final-glow gold-glow" aria-hidden="true" />
          <div className="final-glow navy-glow" aria-hidden="true" />

          <div className="final-cta-content">
            <div className="final-eyebrow-wrapper">
              <span className="final-eyebrow-text">CASE DRAFTS WORKSPACE</span>
            </div>

            <h2 className="final-cta-headline">
              Spend Less Time Starting. More Time Refining.
            </h2>

            <p className="final-cta-description">
              Bring your case information, templates, drafting, review, and final documents into one organized workflow.
            </p>

            <div className="final-cta-buttons-row">
              <a href="#get-started" className="btn-cta-gold">
                <span>Get Started</span>
                <ArrowRight size={16} />
              </a>

              <a href="/contact" className="btn-cta-ghost">
                <span>Talk to Us</span>
                <MessageSquare size={16} />
              </a>
            </div>

            {/* Bottom Assurance */}
            <div className="final-assurance-row">
              <span className="assurance-item">
                <Briefcase size={13} color="#C6A15B" />
                <span>Case-Aware Context</span>
              </span>
              <span className="assurance-divider" aria-hidden="true">•</span>
              <span className="assurance-item">
                <FileCheck2 size={13} color="#C6A15B" />
                <span>Chamber Master Templates</span>
              </span>
              <span className="assurance-divider" aria-hidden="true">•</span>
              <span className="assurance-item">
                <GitBranch size={13} color="#C6A15B" />
                <span>Versioned Review &amp; Approval</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
