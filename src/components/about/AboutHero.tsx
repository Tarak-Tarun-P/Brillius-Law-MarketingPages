import React from 'react';
import { Sparkles, Shield, Compass } from 'lucide-react';
import './AboutHero.css';

export const AboutHero: React.FC = () => {
  return (
    <section className="about-hero-section" aria-label="About BrilliusLaw Hero">
      {/* Subtle Ambient Background Gradients */}
      <div className="about-hero-glow glow-gold" aria-hidden="true" />
      <div className="about-hero-glow glow-navy" aria-hidden="true" />

      {/* Subtle Background Architectural Line Art */}
      <svg
        className="about-hero-bg-svg"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g stroke="#091526" strokeWidth="1" opacity="0.06" fill="none">
          <circle cx="720" cy="300" r="280" />
          <circle cx="720" cy="300" r="420" strokeDasharray="6 6" />
          <line x1="200" y1="300" x2="1240" y2="300" strokeDasharray="4 4" />
          <line x1="720" y1="50" x2="720" y2="550" strokeDasharray="4 4" />
        </g>
      </svg>

      <div className="content-container">
        <div className="about-hero-content animate-fade-in-up">
          {/* Eyebrow */}
          <div className="about-hero-eyebrow-wrapper">
            <span className="about-hero-eyebrow">ABOUT BRILLIUSLAW</span>
            <span className="about-hero-eyebrow-line" aria-hidden="true" />
          </div>

          {/* Main Headline */}
          <h1 className="about-hero-headline">
            Building a Smarter Future
            <br />
            for Legal Professionals.
          </h1>

          {/* Description in simple English */}
          <p className="about-hero-description">
            BrilliusLaw brings clients, cases, documents, research, and helpful AI together into one easy-to-use platform—helping lawyers, firms, and students work faster with less stress.
          </p>

          {/* Core Highlights Row */}
          <div className="about-hero-badges-row">
            <div className="about-hero-badge">
              <Compass size={15} color="#C6A15B" />
              <span>Built for Indian Law</span>
            </div>
            <div className="about-hero-badge">
              <Shield size={15} color="#C6A15B" />
              <span>AI You Can Rely On</span>
            </div>
            <div className="about-hero-badge">
              <Sparkles size={15} color="#C6A15B" />
              <span>Everything in One Place</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
