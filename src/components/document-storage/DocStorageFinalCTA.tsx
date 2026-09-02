import React from 'react';
import { ArrowRight, MessageSquare, Archive, Search, Download } from 'lucide-react';
import './DocStorageFinalCTA.css';

export const DocStorageFinalCTA: React.FC = () => {
  return (
    <section className="doc-final-cta-section" aria-label="Start Document Storage">
      <div className="content-container">
        <div className="doc-final-cta-card">
          {/* Ambient Lighting */}
          <div className="final-glow gold-glow" aria-hidden="true" />
          <div className="final-glow navy-glow" aria-hidden="true" />

          <div className="final-cta-content">
            <div className="final-eyebrow-wrapper">
              <span className="final-eyebrow-text">DOCUMENT STORAGE</span>
            </div>

            <h2 className="final-cta-headline">
              Keep Your Documents Organized.
            </h2>

            <p className="final-cta-description">
              Store important documents in one place and make them easier to find when you need them.
            </p>

            <div className="final-cta-buttons-row">
              <a href="#get-started" className="btn-cta-gold">
                <span>Get Started</span>
                <ArrowRight size={16} />
              </a>

              <a href="#/contact" className="btn-cta-ghost">
                <span>Talk to Us</span>
                <MessageSquare size={16} />
              </a>
            </div>

            {/* Bottom Assurance */}
            <div className="final-assurance-row">
              <span className="assurance-item">
                <Archive size={13} color="#C6A15B" />
                <span>Centralized File Storage</span>
              </span>
              <span className="assurance-divider" aria-hidden="true">•</span>
              <span className="assurance-item">
                <Search size={13} color="#C6A15B" />
                <span>Quick Document Discovery</span>
              </span>
              <span className="assurance-divider" aria-hidden="true">•</span>
              <span className="assurance-item">
                <Download size={13} color="#C6A15B" />
                <span>Instant Retrieval</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
