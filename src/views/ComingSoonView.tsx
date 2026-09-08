'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import '../styles/all.css';
import '../components/coming-soon/ComingSoon.css';

export const ComingSoonView: React.FC = () => {
  return (
    <main className="coming-soon-main" aria-labelledby="coming-soon-heading">
      {/* Background Ambient Lighting Glows */}
      <div className="coming-soon-glow coming-soon-glow-gold" aria-hidden="true" />
      <div className="coming-soon-glow coming-soon-glow-navy" aria-hidden="true" />

      {/* Decorative Architecture SVG Contour */}
      <svg
        className="coming-soon-bg-svg"
        viewBox="0 0 1200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g stroke="#091526" strokeWidth="1" opacity="0.04" fill="none">
          <circle cx="600" cy="300" r="240" />
          <circle cx="600" cy="300" r="380" strokeDasharray="4 6" />
          <path d="M 100 500 Q 400 200 600 300 T 1100 150" strokeDasharray="6 6" />
          <line x1="600" y1="60" x2="600" y2="540" strokeDasharray="2 4" />
        </g>
      </svg>

      {/* Main Centered Coming Soon Card */}
      <div className="coming-soon-card animate-fade-in-up">
        {/* Architectural Motif Icon */}
        <div className="coming-soon-badge-icon-box" aria-hidden="true">
          <Sparkles size={24} />
        </div>

        {/* Small Eyebrow */}
        <div className="coming-soon-eyebrow-wrapper">
          <span className="coming-soon-eyebrow">BRILLIUSLAW</span>
          <span className="coming-soon-eyebrow-line" aria-hidden="true" />
        </div>

        {/* Main Heading */}
        <h1 id="coming-soon-heading" className="coming-soon-headline">
          Coming Soon.
        </h1>

        {/* Supporting Message */}
        <h2 className="coming-soon-highlight">
          We’re preparing BrilliusLaw for the next stage of modern legal work.
        </h2>

        {/* Short Supporting Paragraph */}
        <p className="coming-soon-paragraph">
          BrilliusLaw is being built to bring legal research, matters, documents, drafting, and everyday legal workflows together in one place.
        </p>

        {/* Core Pillars / Capabilities preview */}
        <div className="coming-soon-pillars" aria-label="Platform Highlights">
          <span className="coming-soon-pillar-pill">
            <span className="pillar-dot" aria-hidden="true" />
            <span>Legal Research</span>
          </span>
          <span className="coming-soon-pillar-pill">
            <span className="pillar-dot" aria-hidden="true" />
            <span>Case &amp; Matter Intelligence</span>
          </span>
          <span className="coming-soon-pillar-pill">
            <span className="pillar-dot" aria-hidden="true" />
            <span>Drafting Lab</span>
          </span>
          <span className="coming-soon-pillar-pill">
            <span className="pillar-dot" aria-hidden="true" />
            <span>Document Analyzer</span>
          </span>
        </div>

        {/* CTAs */}
        <div className="coming-soon-actions">
          <Link href="/" className="btn-coming-soon-primary">
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Back to Home</span>
          </Link>
          <Link href="/features" className="btn-coming-soon-secondary">
            <span>Explore Features</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </main>
  );
};
