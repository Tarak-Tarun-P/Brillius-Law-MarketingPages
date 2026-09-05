import React from 'react';
import { LifeBuoy, MessageSquare, BookOpen } from 'lucide-react';
import './SupportHero.css';

export const SupportHero: React.FC = () => {
  return (
    <section className="support-hero-section" aria-label="Support Hero">
      <div className="support-hero-glow glow-gold" aria-hidden="true" />
      <div className="support-hero-glow glow-navy" aria-hidden="true" />

      <div className="content-container">
        <div className="support-hero-content animate-fade-in-up">
          <div className="support-hero-eyebrow-wrapper">
            <span className="support-hero-eyebrow">SUPPORT</span>
            <span className="support-hero-eyebrow-line" aria-hidden="true" />
          </div>

          <h1 className="support-hero-headline">
            Help When You Need It
          </h1>

          <p className="support-hero-description">
            Find answers, get guidance, and reach out when you need help using BrilliusLaw.
          </p>

          <div className="support-hero-badges-row">
            <div className="support-hero-badge">
              <LifeBuoy size={15} color="#C6A15B" />
              <span>Guidance to Get Started</span>
            </div>
            <div className="support-hero-badge">
              <BookOpen size={15} color="#C6A15B" />
              <span>Common Questions Answered</span>
            </div>
            <div className="support-hero-badge">
              <MessageSquare size={15} color="#C6A15B" />
              <span>Reach Our Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
