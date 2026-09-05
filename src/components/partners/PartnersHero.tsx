import React from 'react';
import { Handshake, Building2, Network } from 'lucide-react';
import './PartnersHero.css';

export const PartnersHero: React.FC = () => {
  return (
    <section className="partners-hero-section" aria-label="Partners Hero">
      <div className="partners-hero-glow glow-gold" aria-hidden="true" />
      <div className="partners-hero-glow glow-navy" aria-hidden="true" />

      <div className="content-container">
        <div className="partners-hero-content animate-fade-in-up">
          <div className="partners-hero-eyebrow-wrapper">
            <span className="partners-hero-eyebrow">PARTNERSHIPS</span>
            <span className="partners-hero-eyebrow-line" aria-hidden="true" />
          </div>

          <h1 className="partners-hero-headline">
            Build the Future of
            <br />
            Legal Technology Together
          </h1>

          <p className="partners-hero-description">
            Partner with BrilliusLaw to bring modern legal technology to legal professionals, firms, institutions, and the wider legal ecosystem.
          </p>

          <div className="partners-hero-badges-row">
            <div className="partners-hero-badge">
              <Handshake size={15} color="#C6A15B" />
              <span>Meaningful Collaboration</span>
            </div>
            <div className="partners-hero-badge">
              <Building2 size={15} color="#C6A15B" />
              <span>Built for Indian Legal Practice</span>
            </div>
            <div className="partners-hero-badge">
              <Network size={15} color="#C6A15B" />
              <span>A Growing Ecosystem</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
