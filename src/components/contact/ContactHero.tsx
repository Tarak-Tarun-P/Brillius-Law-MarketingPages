import React from 'react';
import { Mail, MessageSquare, MapPin } from 'lucide-react';
import './ContactHero.css';

export const ContactHero: React.FC = () => {
  return (
    <section className="contact-hero-section" aria-label="Contact BrilliusLaw Hero">
      {/* Ambient background glows */}
      <div className="contact-hero-glow glow-gold" aria-hidden="true" />
      <div className="contact-hero-glow glow-navy" aria-hidden="true" />

      {/* Subtle legal and architectural line art background */}
      <svg
        className="contact-hero-bg-svg"
        viewBox="0 0 1440 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g stroke="#091526" strokeWidth="1" opacity="0.05" fill="none">
          {/* Subtle Justice Scales Contour */}
          <line x1="1180" y1="120" x2="1180" y2="380" strokeWidth="1.5" />
          <line x1="1040" y1="170" x2="1320" y2="170" strokeWidth="1.8" />
          <path d="M 1000 250 Q 1040 280 1080 250 Z" />
          <path d="M 1280 250 Q 1320 280 1360 250 Z" />
          <line x1="1040" y1="170" x2="1000" y2="250" strokeDasharray="3 3" />
          <line x1="1040" y1="170" x2="1080" y2="250" strokeDasharray="3 3" />
          <line x1="1320" y1="170" x2="1280" y2="250" strokeDasharray="3 3" />
          <line x1="1320" y1="170" x2="1360" y2="250" strokeDasharray="3 3" />
          
          {/* Faint Architectural Arcs */}
          <circle cx="720" cy="250" r="280" />
          <circle cx="720" cy="250" r="380" strokeDasharray="4 6" />
        </g>
      </svg>

      <div className="content-container">
        <div className="contact-hero-content animate-fade-in-up">
          <div className="contact-hero-eyebrow-wrapper">
            <span className="contact-hero-eyebrow">GET IN TOUCH</span>
            <span className="contact-hero-eyebrow-line" aria-hidden="true" />
          </div>

          <h1 className="contact-hero-headline">
            Let's Talk About Your
            <br />
            Legal Journey.
          </h1>

          <p className="contact-hero-description">
            Have a question about BrilliusLaw, want to explore it for your firm, or simply want to learn more? We'd love to hear from you.
          </p>

          <div className="contact-hero-badges-row">
            <div className="contact-hero-badge">
              <MessageSquare size={15} color="#C6A15B" />
              <span>Dedicated Support</span>
            </div>
            <div className="contact-hero-badge">
              <Mail size={15} color="#C6A15B" />
              <span>Prompt Response</span>
            </div>
            <div className="contact-hero-badge">
              <MapPin size={15} color="#C6A15B" />
              <span>Built in India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
