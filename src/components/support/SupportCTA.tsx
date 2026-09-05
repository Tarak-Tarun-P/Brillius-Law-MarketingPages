import React from 'react';
import { ArrowRight, LifeBuoy } from 'lucide-react';
import './SupportCTA.css';

export const SupportCTA: React.FC = () => {
  return (
    <section className="support-cta-section" aria-labelledby="support-cta-heading">
      <div className="content-container">
        <div className="support-cta-box">
          <div className="cta-glow cta-glow-gold" aria-hidden="true" />
          <div className="cta-glow cta-glow-blue" aria-hidden="true" />

          <div className="support-cta-content">
            <div className="support-cta-badge">
              <LifeBuoy size={14} color="#C6A15B" />
              <span>NEED MORE HELP?</span>
            </div>

            <h2 id="support-cta-heading" className="support-cta-headline">
              Still Have a Question?
            </h2>

            <p className="support-cta-subtext">
              If you couldn't find what you were looking for, reach out to the BrilliusLaw team and we'll help you get sorted.
            </p>

            <div className="support-cta-actions">
              <a href="/contact" className="btn-support-cta-gold">
                <span>Contact Support</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
