import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import './HearingsFinalCTA.css';

export const HearingsFinalCTA: React.FC = () => {
  return (
    <section className="hearings-final-cta-section" aria-labelledby="hearings-final-heading">
      <div className="content-container">
        <div className="hearings-final-cta-box">
          {/* Ambient Glows */}
          <div className="cta-glow glow-gold" aria-hidden="true" />
          <div className="cta-glow glow-blue" aria-hidden="true" />

          <div className="hearings-final-content">
            <div className="hearings-final-badge">
              <Calendar size={14} color="#C6A15B" />
              <span>HEARINGS & CALENDAR</span>
            </div>

            <h2 id="hearings-final-heading" className="hearings-final-headline">
              Stay on Top of Your Hearings.
            </h2>

            <p className="hearings-final-subtext">
              Keep upcoming hearing dates visible and review previous hearings and their recorded orders or verdicts when you need them.
            </p>

            <div className="hearings-final-actions">
              <a href="#get-started" className="btn-final-gold">
                <span>Explore Hearings</span>
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
