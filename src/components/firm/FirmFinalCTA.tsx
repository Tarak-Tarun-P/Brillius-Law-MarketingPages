import React from 'react';
import { ArrowRight, MessageSquare, Shield, Users, Lock } from 'lucide-react';
import './FirmFinalCTA.css';

export const FirmFinalCTA: React.FC = () => {
  return (
    <section className="firm-final-cta-section" aria-label="Start Firm Management">
      <div className="content-container">
        <div className="firm-final-cta-card">
          {/* Subtle Ambient Glows */}
          <div className="final-glow gold-glow" aria-hidden="true" />
          <div className="final-glow navy-glow" aria-hidden="true" />

          <div className="final-cta-content">
            <div className="final-eyebrow-wrapper">
              <span className="final-eyebrow-text">UNIFIED PRACTICE ADMINISTRATION</span>
            </div>

            <h2 className="final-cta-headline">
              Give Your Firm a Better Way to Work Together.
            </h2>

            <p className="final-cta-description">
              Organize your team, manage access, and keep your practice running with greater clarity.
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
                <Users size={13} color="#C6A15B" />
                <span>Centralized Team Directory</span>
              </span>
              <span className="assurance-divider" aria-hidden="true">•</span>
              <span className="assurance-item">
                <Lock size={13} color="#C6A15B" />
                <span>Tailored Matter Access</span>
              </span>
              <span className="assurance-divider" aria-hidden="true">•</span>
              <span className="assurance-item">
                <Shield size={13} color="#C6A15B" />
                <span>Senior Oversight &amp; Review</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
