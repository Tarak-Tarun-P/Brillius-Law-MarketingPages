import React from 'react';
import { ArrowRight, MessageSquare, Calendar, CheckSquare, FileCheck2 } from 'lucide-react';
import './WhatsAppFinalCTA.css';

export const WhatsAppFinalCTA: React.FC = () => {
  return (
    <section className="wa-final-cta-section" aria-label="Start WhatsApp Alerts">
      <div className="content-container">
        <div className="wa-final-cta-card">
          {/* Ambient Lighting */}
          <div className="final-glow gold-glow" aria-hidden="true" />
          <div className="final-glow navy-glow" aria-hidden="true" />

          <div className="final-cta-content">
            <div className="final-eyebrow-wrapper">
              <span className="final-eyebrow-text">WHATSAPP ALERTS</span>
            </div>

            <h2 className="final-cta-headline">
              Stay Informed. Keep Moving.
            </h2>

            <p className="final-cta-description">
              Keep important legal work closer to you with simple WhatsApp alerts for the updates that matter.
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
                <Calendar size={13} color="#C6A15B" />
                <span>Hearings &amp; Listings</span>
              </span>
              <span className="assurance-divider" aria-hidden="true">•</span>
              <span className="assurance-item">
                <CheckSquare size={13} color="#C6A15B" />
                <span>Task &amp; Deadline Reminders</span>
              </span>
              <span className="assurance-divider" aria-hidden="true">•</span>
              <span className="assurance-item">
                <FileCheck2 size={13} color="#C6A15B" />
                <span>Draft &amp; Document Approvals</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
