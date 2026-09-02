import React from 'react';
import './CTAButtons.css';

export const CTAButtons: React.FC = () => {
  return (
    <div className="cta-container">
      <div className="cta-buttons-row">
        {/* Primary CTA */}
        <a href="#explore" className="btn-primary">
          <span>Explore BrilliusLaw</span>
          <span className="btn-arrow" aria-hidden="true">→</span>
        </a>

        {/* Secondary CTA */}
        <a href="#learn-more" className="btn-secondary">
          <span>Learn More</span>
        </a>
      </div>

      {/* Trust Message */}
      <div className="trust-message" role="note">
        <span className="trust-diamond" aria-hidden="true">◇</span>
        <span className="trust-text">Built for modern legal professionals</span>
      </div>
    </div>
  );
};
