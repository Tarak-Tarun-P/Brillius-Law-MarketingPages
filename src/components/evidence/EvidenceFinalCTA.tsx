import React from 'react';
import { ArrowRight, Archive } from 'lucide-react';
import './EvidenceFinalCTA.css';

export const EvidenceFinalCTA: React.FC = () => {
  return (
    <section className="evidence-final-cta-section" aria-labelledby="evidence-final-heading">
      <div className="content-container">
        <div className="evidence-final-cta-box">
          {/* Ambient Glows */}
          <div className="cta-glow glow-gold" aria-hidden="true" />
          <div className="cta-glow glow-blue" aria-hidden="true" />

          <div className="evidence-final-content">
            <div className="evidence-final-badge">
              <Archive size={14} color="#C6A15B" />
              <span>EVIDENCE STORAGE</span>
            </div>

            <h2 id="evidence-final-heading" className="evidence-final-headline">
              Keep Your Evidence Within Reach.
            </h2>

            <p className="evidence-final-subtext">
              Store evidence with the relevant case and return to it whenever you need it.
            </p>

            <div className="evidence-final-actions">
              <a href="#get-started" className="btn-final-gold">
                <span>Explore Evidence</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="/features" className="btn-final-outline">
                <span>Explore All Features</span>
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
