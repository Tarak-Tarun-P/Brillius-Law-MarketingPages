import React from 'react';
import { ArrowRight, Compass, Shield } from 'lucide-react';
import './ResearchFinalCTA.css';

export const ResearchFinalCTA: React.FC = () => {
  return (
    <section className="research-final-cta-section" aria-label="Start Your Legal Research">
      <div className="content-container">
        <div className="research-final-cta-card">
          {/* Subtle Ambient Glows */}
          <div className="final-glow gold-glow" aria-hidden="true" />
          <div className="final-glow navy-glow" aria-hidden="true" />

          <div className="final-cta-content">
            <div className="final-eyebrow-wrapper">
              <span className="final-eyebrow-text">MODERN LEGAL INTELLIGENCE</span>
            </div>

            <h2 className="final-cta-headline">
              Start Your Legal Research.
            </h2>

            <p className="final-cta-description">
              Find the judgments, precedents, and legal information you need, then continue your research with the case material in front of you.
            </p>

            <div className="final-cta-buttons-row">
              <a href="#get-started" className="btn-cta-gold">
                <span>Explore Legal Research</span>
                <ArrowRight size={16} />
              </a>

              <a href="#/features" className="btn-cta-ghost">
                <span>Explore All Features</span>
                <Compass size={16} />
              </a>
            </div>

            {/* Bottom Assurance */}
            <div className="final-assurance-row">
              <span className="assurance-item">
                <Shield size={13} color="#C6A15B" />
                <span>Indian Case Law &amp; Precedents</span>
              </span>
              <span className="assurance-divider" aria-hidden="true">•</span>
              <span className="assurance-item">
                <Shield size={13} color="#C6A15B" />
                <span>Matter Document Grounding</span>
              </span>
              <span className="assurance-divider" aria-hidden="true">•</span>
              <span className="assurance-item">
                <Shield size={13} color="#C6A15B" />
                <span>Built for Advocates &amp; Legal Teams</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
