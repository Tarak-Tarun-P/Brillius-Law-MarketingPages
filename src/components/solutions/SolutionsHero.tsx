import React from 'react';
import { Building2, Briefcase, GraduationCap } from 'lucide-react';
import './SolutionsHero.css';

export const SolutionsHero: React.FC = () => {
  return (
    <section className="solutions-hero-section" aria-label="Solutions Overview Hero">
      {/* Subtle Ambient Background Gradients */}
      <div className="solutions-hero-glow glow-gold" aria-hidden="true" />
      <div className="solutions-hero-glow glow-navy" aria-hidden="true" />

      {/* Subtle Background Architectural & Legal Journey Art */}
      <svg
        className="solutions-hero-bg-svg"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g stroke="#091526" strokeWidth="1" opacity="0.05" fill="none">
          {/* Connected journey lines */}
          <path d="M 200 480 Q 520 200 720 300 T 1240 180" strokeDasharray="6 6" />
          <circle cx="200" cy="480" r="16" />
          <circle cx="720" cy="300" r="22" strokeWidth="1.5" />
          <circle cx="1240" cy="180" r="18" />
          
          {/* Subtle Justice Scales Contours */}
          <line x1="1120" y1="120" x2="1120" y2="340" strokeWidth="1.5" />
          <line x1="980" y1="170" x2="1260" y2="170" strokeWidth="1.8" />
          <path d="M 940 240 Q 980 270 1020 240 Z" />
          <path d="M 1220 240 Q 1260 270 1300 240 Z" />
          
          {/* Architectural Arcs */}
          <circle cx="720" cy="300" r="260" />
          <circle cx="720" cy="300" r="390" strokeDasharray="4 6" />
        </g>
      </svg>

      <div className="content-container">
        <div className="solutions-hero-content animate-fade-in-up">
          {/* Eyebrow */}
          <div className="solutions-hero-eyebrow-wrapper">
            <span className="solutions-hero-eyebrow">SOLUTIONS FOR EVERY LEGAL JOURNEY</span>
            <span className="solutions-hero-eyebrow-line" aria-hidden="true" />
          </div>

          {/* Main Headline */}
          <h1 className="solutions-hero-headline">
            One Platform.
            <br />
            Built Around the Way You Work.
          </h1>

          {/* Supporting Text */}
          <p className="solutions-hero-description">
            Whether you're managing a law firm, building your practice, or studying law, BrilliusLaw brings the tools you need together in one place.
          </p>

          {/* 3 Audience Indicators */}
          <div className="solutions-audience-indicators" role="list">
            <a href="#solution-firms" className="audience-indicator-pill">
              <Building2 size={16} color="#C6A15B" />
              <span>Law Firms</span>
            </a>
            <a href="#solution-lawyers" className="audience-indicator-pill featured-indicator">
              <Briefcase size={16} color="#091526" />
              <span>Lawyers & Advocates</span>
            </a>
            <a href="#solution-students" className="audience-indicator-pill">
              <GraduationCap size={16} color="#C6A15B" />
              <span>Law Students</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
