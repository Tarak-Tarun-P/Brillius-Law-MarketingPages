import React from 'react';
import { ArrowRight, Bookmark } from 'lucide-react';
import './JournalFinalCTA.css';

export const JournalFinalCTA: React.FC = () => {
  return (
    <section className="journal-final-cta-section" aria-labelledby="journal-final-heading">
      <div className="content-container">
        <div className="journal-final-cta-box">
          {/* Ambient Glows */}
          <div className="cta-glow glow-gold" aria-hidden="true" />
          <div className="cta-glow glow-blue" aria-hidden="true" />

          <div className="journal-final-content">
            <div className="journal-final-badge">
              <Bookmark size={14} color="#C6A15B" />
              <span>MY JOURNAL WORKSPACE</span>
            </div>

            <h2 id="journal-final-heading" className="journal-final-headline">
              Keep What Matters.
              <br />
              Come Back When You Need It.
            </h2>

            <p className="journal-final-subtext">
              Save important points, bookmark useful information, and capture your thoughts while you work.
            </p>

            <div className="journal-final-actions">
              <a href="#get-started" className="btn-final-gold">
                <span>Explore My Journal</span>
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
