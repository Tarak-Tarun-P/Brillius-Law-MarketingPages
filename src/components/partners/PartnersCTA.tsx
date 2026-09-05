import React from 'react';
import { ArrowRight, Handshake } from 'lucide-react';
import './PartnersCTA.css';

export const PartnersCTA: React.FC = () => {
  return (
    <section className="partners-cta-section" aria-labelledby="partners-cta-heading">
      <div className="content-container">
        <div className="partners-cta-box">
          <div className="cta-glow cta-glow-gold" aria-hidden="true" />
          <div className="cta-glow cta-glow-blue" aria-hidden="true" />

          <div className="partners-cta-content">
            <div className="partners-cta-badge">
              <Handshake size={14} color="#C6A15B" />
              <span>PARTNER WITH US</span>
            </div>

            <h2 id="partners-cta-heading" className="partners-cta-headline">
              Interested in Working
              <br />
              With BrilliusLaw?
            </h2>

            <p className="partners-cta-subtext">
              If your organization is interested in collaborating with BrilliusLaw, we'd love to hear from you and explore what working together could look like.
            </p>

            <div className="partners-cta-actions">
              <a href="/contact" className="btn-partners-cta-gold">
                <span>Become a Partner</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="/contact" className="btn-partners-cta-outline">
                <span>Talk to Us</span>
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
