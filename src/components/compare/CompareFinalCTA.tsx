import React from 'react';
import { ArrowRight, GitCompare } from 'lucide-react';
import './CompareFinalCTA.css';

export const CompareFinalCTA: React.FC = () => {
  return (
    <section className="compare-final-cta-section" aria-labelledby="compare-final-heading">
      <div className="content-container">
        <div className="compare-final-cta-box">
          {/* Ambient Glows */}
          <div className="cta-glow glow-gold" aria-hidden="true" />
          <div className="cta-glow glow-blue" aria-hidden="true" />

          <div className="compare-final-content">
            <div className="compare-final-badge">
              <GitCompare size={14} color="#C6A15B" />
              <span>COMPARE & REVIEW</span>
            </div>

            <h2 id="compare-final-heading" className="compare-final-headline">
              See What Changed Before You Move Forward.
            </h2>

            <p className="compare-final-subtext">
              Compare document versions and review the differences clearly before finalizing any legal draft.
            </p>

            <div className="compare-final-actions">
              <a href="#get-started" className="btn-final-gold">
                <span>Explore Compare & Review</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#/features" className="btn-final-outline">
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
