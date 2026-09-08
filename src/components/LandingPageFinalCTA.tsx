import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import './LandingPageFinalCTA.css';

export const LandingPageFinalCTA: React.FC = () => {
  return (
    <section className="landing-final-cta-section" aria-label="Closing Call to Action">
      <div className="content-container">
        <div className="landing-final-cta-card">
          {/* Ambient Glows */}
          <div className="landing-cta-glow glow-top-right" aria-hidden="true" />
          <div className="landing-cta-glow glow-bottom-left" aria-hidden="true" />

          <div className="landing-final-cta-content">
            <div className="landing-cta-eyebrow-row">
              <Sparkles size={14} color="#C6A15B" />
              <span className="landing-cta-eyebrow">START WITH BRILLIUSLAW</span>
            </div>

            <h2 className="landing-cta-heading">
              Bring Your Legal Work Together.
            </h2>

            <p className="landing-cta-subtext">
              Research, manage, draft, and stay organized with BrilliusLaw.
            </p>

            <div className="landing-cta-buttons-row">
              <Link href="/coming-soon" className="landing-btn-primary">
                <span>Get Started</span>
                <ArrowRight size={16} className="btn-arrow-icon" aria-hidden="true" />
              </Link>

              <Link href="/features" className="landing-btn-secondary">
                <span>Explore Features</span>
              </Link>
            </div>

            <div className="landing-cta-trust-note">
              <ShieldCheck size={14} color="#C6A15B" />
              <span>Indian Jurisprudence Aligned • Constitutional Heritage • Enterprise Security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
