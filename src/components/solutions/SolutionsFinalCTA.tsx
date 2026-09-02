import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import './SolutionsFinalCTA.css';

export const SolutionsFinalCTA: React.FC = () => {
  return (
    <section className="solutions-final-cta-section" aria-labelledby="final-cta-heading">
      <div className="content-container">
        <div className="solutions-final-cta-box">
          {/* Subtle Ambient Halos */}
          <div className="sol-glow sol-glow-gold" aria-hidden="true" />
          <div className="sol-glow sol-glow-blue" aria-hidden="true" />

          <div className="sol-final-cta-content">
            <div className="sol-final-badge">
              <Sparkles size={14} color="#C6A15B" />
              <span>EXPERIENCE THE DIFFERENCE</span>
            </div>

            <h2 id="final-cta-heading" className="sol-final-headline">
              A Simpler Way to Work With Law.
            </h2>

            <p className="sol-final-subtext">
              Explore BrilliusLaw and discover a more connected way to learn, practice, and manage legal work.
            </p>

            <div className="sol-final-actions">
              <a href="#get-started" className="btn-sol-final-gold">
                <span>Get Started</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
