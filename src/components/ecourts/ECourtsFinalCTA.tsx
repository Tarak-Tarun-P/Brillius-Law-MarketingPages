import React from 'react';
import { ArrowRight, MessageSquare, Landmark, FileText, Calendar } from 'lucide-react';
import './ECourtsFinalCTA.css';

export const ECourtsFinalCTA: React.FC = () => {
  return (
    <section className="ecourts-final-cta-section" aria-label="Start Live eCourts Sync">
      <div className="content-container">
        <div className="ecourts-final-cta-card">
          {/* Subtle Ambient Glows */}
          <div className="final-glow gold-glow" aria-hidden="true" />
          <div className="final-glow navy-glow" aria-hidden="true" />

          <div className="final-cta-content">
            <div className="final-eyebrow-wrapper">
              <span className="final-eyebrow-text">LIVE ECOURTS TRACKING</span>
            </div>

            <h2 className="final-cta-headline">
              Spend Less Time Checking. Spend More Time Practicing.
            </h2>

            <p className="final-cta-description">
              Keep your litigation matters connected to available official court information and stay closer to what is happening in your cases.
            </p>

            <div className="final-cta-buttons-row">
              <a href="#get-started" className="btn-cta-gold">
                <span>Get Started</span>
                <ArrowRight size={16} />
              </a>

              <a href="/contact" className="btn-cta-ghost">
                <span>Talk to Us</span>
                <MessageSquare size={16} />
              </a>
            </div>

            {/* Bottom Assurance */}
            <div className="final-assurance-row">
              <span className="assurance-item">
                <Landmark size={13} color="#C6A15B" />
                <span>CNR-Linked Matters</span>
              </span>
              <span className="assurance-divider" aria-hidden="true">•</span>
              <span className="assurance-item">
                <Calendar size={13} color="#C6A15B" />
                <span>Hearing &amp; Listing Sync</span>
              </span>
              <span className="assurance-divider" aria-hidden="true">•</span>
              <span className="assurance-item">
                <FileText size={13} color="#C6A15B" />
                <span>Court Orders &amp; Daily Notes</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
