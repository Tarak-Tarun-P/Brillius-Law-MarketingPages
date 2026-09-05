import React from 'react';
import { ArrowRight, PenTool } from 'lucide-react';
import './DraftingFinalCTA.css';

export const DraftingFinalCTA: React.FC = () => {
  return (
    <section className="drafting-final-cta-section" aria-labelledby="drafting-final-heading">
      <div className="content-container">
        <div className="drafting-final-cta-box">
          {/* Ambient Glows */}
          <div className="cta-glow glow-gold" aria-hidden="true" />
          <div className="cta-glow glow-blue" aria-hidden="true" />

          <div className="drafting-final-content">
            <div className="drafting-final-badge">
              <PenTool size={14} color="#C6A15B" />
              <span>DRAFTING LAB WORKSPACE</span>
            </div>

            <h2 id="drafting-final-heading" className="drafting-final-headline">
              Create Your Next Document.
            </h2>

            <p className="drafting-final-subtext">
              Write, edit, format, and annotate your documents in one focused workspace.
            </p>

            <div className="drafting-final-actions">
              <a href="#get-started" className="btn-final-gold">
                <span>Explore Drafting Lab</span>
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
