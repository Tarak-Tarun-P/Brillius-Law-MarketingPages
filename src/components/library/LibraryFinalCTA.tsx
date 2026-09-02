import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import './LibraryFinalCTA.css';

export const LibraryFinalCTA: React.FC = () => {
  return (
    <section className="library-final-cta-section" aria-labelledby="library-final-heading">
      <div className="content-container">
        <div className="library-final-cta-box">
          {/* Ambient Glows */}
          <div className="cta-glow glow-gold" aria-hidden="true" />
          <div className="cta-glow glow-blue" aria-hidden="true" />

          <div className="library-final-content">
            <div className="library-final-badge">
              <BookOpen size={14} color="#C6A15B" />
              <span>LAW LIBRARY &amp; RESEARCH</span>
            </div>

            <h2 id="library-final-heading" className="library-final-headline">
              Explore the Law With Confidence.
            </h2>

            <p className="library-final-subtext">
              Find the Acts, provisions, references, and judgments you need for your research.
            </p>

            <div className="library-final-actions">
              <a href="#get-started" className="btn-final-gold">
                <span>Explore Law Library</span>
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
