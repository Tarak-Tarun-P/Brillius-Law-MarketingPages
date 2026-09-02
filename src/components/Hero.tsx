import React from 'react';
import { HeroBackground } from './HeroBackground';
import { LadyJustice } from './LadyJustice';
import { CTAButtons } from './CTAButtons';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section" aria-label="Hero Section">
      {/* Background Architectural & Lighting Layers */}
      <HeroBackground />

      <div className="hero-container content-container">
        <div className="hero-grid">
          {/* Left Column: Headline & Messaging */}
          <div className="hero-left">
            {/* Eyebrow with decorative gold rule */}
            <div className="hero-eyebrow-wrapper animate-fade-in-up delay-100">
              <span className="hero-eyebrow">LEGAL TECHNOLOGY, REIMAGINED</span>
              <span className="hero-eyebrow-line" aria-hidden="true" />
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline animate-fade-in-up delay-200">
              Modern Legal<br />
              Intelligence.<br />
              <span className="hero-headline-sub">Built for the Law.</span>
            </h1>

            {/* Description */}
            <p className="hero-description animate-fade-in-up delay-300">
              BrilliusLaw brings legal research, document intelligence, and intelligent workflows together in one powerful platform.
            </p>

            {/* Call to Actions & Trust Note */}
            <div className="hero-cta-wrapper animate-fade-in-up delay-400">
              <CTAButtons />
            </div>
          </div>

          {/* Right Column: Nyay Ki Devi (Lady Justice) */}
          <div className="hero-right animate-fade-in delay-200">
            <LadyJustice />
          </div>
        </div>
      </div>

      {/* Hero Bottom Organic Wave Transition */}
      <div className="hero-bottom-transition" aria-hidden="true">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="transition-svg"
        >
          {/* Subtle gold transition contour line */}
          <path
            d="M0,60 C320,110 820,10 1440,70"
            stroke="#C6A15B"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            fill="none"
          />
          {/* Deep Navy/Ivory gradient curve transition fill */}
          <path
            d="M0,70 C360,115 880,25 1440,80 L1440,120 L0,120 Z"
            fill="rgba(9, 21, 38, 0.03)"
          />
        </svg>
      </div>
    </section>
  );
};
