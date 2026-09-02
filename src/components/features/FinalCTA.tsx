import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import './FinalCTA.css';

export const FinalCTA: React.FC = () => {
  return (
    <section className="final-cta-section" aria-label="Call to Action">
      <div className="content-container">
        <div className="final-cta-card">
          {/* Background Decorative Gold Arcs */}
          <div className="cta-gold-arc arc-top-right" aria-hidden="true" />
          <div className="cta-gold-arc arc-bottom-left" aria-hidden="true" />

          <div className="final-cta-content">
            <div className="final-cta-eyebrow-row">
              <Sparkles size={14} color="#C6A15B" />
              <span className="final-cta-eyebrow">MODERN LEGAL WORKFLOW PLATFORM</span>
            </div>

            <h2 className="final-cta-heading">
              Bring Your Legal Work Together.
            </h2>

            <p className="final-cta-subtext">
              A more organized way to manage clients, cases, documents, drafting, research, and everyday legal work.
            </p>

            <div className="final-cta-buttons-row">
              <a href="#get-started" className="btn-final-primary">
                <span>Get Started</span>
                <ArrowRight size={17} className="btn-arrow-icon" aria-hidden="true" />
              </a>

              <a href="#explore" className="btn-final-secondary">
                <span>Explore BrilliusLaw</span>
              </a>
            </div>

            <div className="final-cta-trust-note">
              <ShieldCheck size={14} color="#C6A15B" />
              <span>Enterprise-Grade Security • Indian Jurisprudence Aligned • AES-256 Storage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
