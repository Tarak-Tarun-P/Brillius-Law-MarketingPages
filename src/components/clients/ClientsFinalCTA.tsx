import React from 'react';
import { ArrowRight, Users } from 'lucide-react';
import './ClientsFinalCTA.css';

export const ClientsFinalCTA: React.FC = () => {
  return (
    <section className="clients-final-cta-section" aria-labelledby="clients-final-heading">
      <div className="content-container">
        <div className="clients-final-cta-box">
          {/* Subtle Ambient Halos */}
          <div className="cta-glow glow-gold" aria-hidden="true" />
          <div className="cta-glow glow-blue" aria-hidden="true" />

          <div className="clients-final-content">
            <div className="clients-final-badge">
              <Users size={14} color="#C6A15B" />
              <span>CLIENT MANAGEMENT</span>
            </div>

            <h2 id="clients-final-heading" className="clients-final-headline">
              Keep Your Client Work Organized.
            </h2>

            <p className="clients-final-subtext">
              Bring client details, KYC information, notes, and related cases together in one place.
            </p>

            <div className="clients-final-actions">
              <a href="#get-started" className="btn-final-gold">
                <span>Explore Clients</span>
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
