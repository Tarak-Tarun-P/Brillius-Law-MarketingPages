import React from 'react';
import {
  Sparkles,
  Users,
  FolderOpen,
  Briefcase,
  PenLine,
  Archive,
  Calendar,
  Bot,
  BookOpen
} from 'lucide-react';
import './FeaturesHero.css';

export const FeaturesHero: React.FC = () => {
  return (
    <section className="features-hero-section" aria-label="Features Overview Hero">
      {/* Background Architectural & Radial Halos */}
      <div className="features-hero-bg-glow glow-gold" aria-hidden="true" />
      <div className="features-hero-bg-glow glow-navy" aria-hidden="true" />

      {/* Large Subtle Background Architectural Line Art */}
      <svg
        className="features-hero-bg-architecture"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Courthouse Silhouette in Center-Left Background */}
        <g stroke="#091526" strokeWidth="1" opacity="0.07" fill="none">
          <polygon points="160,260 400,160 640,260" />
          <line x1="140" y1="260" x2="660" y2="260" strokeWidth="1.5" />
          <line x1="190" y1="260" x2="190" y2="620" strokeDasharray="4 4" />
          <line x1="270" y1="260" x2="270" y2="620" strokeDasharray="4 4" />
          <line x1="350" y1="260" x2="350" y2="620" strokeDasharray="4 4" />
          <line x1="450" y1="260" x2="450" y2="620" strokeDasharray="4 4" />
          <line x1="530" y1="260" x2="530" y2="620" strokeDasharray="4 4" />
          <line x1="610" y1="260" x2="610" y2="620" strokeDasharray="4 4" />
        </g>

        {/* Balance Scale Outline in Upper-Right Background */}
        <g stroke="#091526" strokeWidth="1.2" opacity="0.06" fill="none">
          <line x1="1120" y1="130" x2="1120" y2="400" strokeWidth="1.6" />
          <line x1="940" y1="190" x2="1300" y2="190" strokeWidth="1.8" />
          <path d="M 890 280 Q 940 310 990 280 Z" />
          <line x1="940" y1="190" x2="890" y2="280" strokeDasharray="3 3" />
          <line x1="940" y1="190" x2="990" y2="280" strokeDasharray="3 3" />
          <path d="M 1250 280 Q 1300 310 1350 280 Z" />
          <line x1="1300" y1="190" x2="1250" y2="280" strokeDasharray="3 3" />
          <line x1="1300" y1="190" x2="1350" y2="280" strokeDasharray="3 3" />
        </g>
      </svg>

      <div className="content-container">
        {/* Hero Header Group */}
        <div className="features-hero-content animate-fade-in-up">
          {/* Eyebrow */}
          <div className="features-hero-eyebrow-wrapper">
            <span className="features-hero-eyebrow">POWERFUL LEGAL TECHNOLOGY</span>
            <span className="features-hero-eyebrow-line" aria-hidden="true" />
          </div>

          {/* Main Headline (66px desktop, 700 weight) */}
          <h1 className="features-hero-headline">
            Everything You Need
            <br />
            to Work Smarter in Law
          </h1>

          {/* Description (20px, centered) */}
          <p className="features-hero-description">
            BrilliusLaw brings your clients, cases, documents, drafting, evidence, research, and everyday legal workflows together in one secure platform.
          </p>
        </div>

        {/* LARGE PRODUCT ECOSYSTEM VISUAL (Primary Hero Visual, 1080px wide x 340px tall) */}
        <div className="features-ecosystem-wrapper animate-fade-in delay-200">
          <div className="ecosystem-halo-glow" aria-hidden="true" />

          {/* SVG Vector Flow & Orbital Connection Architecture */}
          <svg
            className="ecosystem-vector-canvas"
            viewBox="0 0 1080 340"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="orbitalGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C6A15B" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#C6A15B" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#C6A15B" stopOpacity="0.1" />
              </linearGradient>

              <linearGradient id="orbitalNavyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#17365D" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#17365D" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#17365D" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Large Orbital Paths Framing the Center */}
            <ellipse
              cx="540"
              cy="150"
              rx="420"
              ry="125"
              stroke="url(#orbitalGoldGrad)"
              strokeWidth="2"
            />
            <ellipse
              cx="540"
              cy="150"
              rx="300"
              ry="95"
              stroke="url(#orbitalNavyGrad)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />

            {/* Direct Fluid Connectors from Center Node (540, 150) to 8 Surrounding Nodes */}
            {/* 1. Clients (80, 205) */}
            <path d="M 540 150 Q 280 210 80 205" stroke="#C6A15B" strokeWidth="2" strokeOpacity="0.38" />
            {/* 2. Documents (190, 85) */}
            <path d="M 540 150 Q 330 90 190 85" stroke="#C6A15B" strokeWidth="2" strokeOpacity="0.42" />
            {/* 3. Cases (360, 48) */}
            <path d="M 540 150 Q 430 80 360 48" stroke="#C6A15B" strokeWidth="2" strokeOpacity="0.4" />
            {/* 4. Drafting (720, 48) */}
            <path d="M 540 150 Q 650 80 720 48" stroke="#C6A15B" strokeWidth="2" strokeOpacity="0.4" />
            {/* 5. Research (890, 85) */}
            <path d="M 540 150 Q 750 90 890 85" stroke="#C6A15B" strokeWidth="2" strokeOpacity="0.42" />
            {/* 6. Evidence (1000, 205) */}
            <path d="M 540 150 Q 800 210 1000 205" stroke="#C6A15B" strokeWidth="2" strokeOpacity="0.38" />
            {/* 7. Hearings (310, 265) */}
            <path d="M 540 150 Q 400 230 310 265" stroke="#091526" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.25" />
            {/* 8. AI Assistant (770, 265) */}
            <path d="M 540 150 Q 680 230 770 265" stroke="#091526" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.25" />
          </svg>

          {/* HTML Interactive Nodes (Generous Sizes & Distinct Typography) */}
          <div className="ecosystem-nodes-grid">
            {/* 1. PRIMARY CENTER NODE: LEGAL INTELLIGENCE (88px circle, dominant) */}
            <div className="eco-node node-center">
              <div className="node-circle center-circle">
                <Sparkles size={32} color="#C6A15B" strokeWidth={2} />
              </div>
              <span className="node-label center-label">LEGAL INTELLIGENCE</span>
              <span className="node-sub center-sub">CORE ECOSYSTEM ENGINE</span>
            </div>

            {/* 2. NODE: Clients (Far Left-Lower) */}
            <div className="eco-node node-clients">
              <div className="node-circle standard-circle">
                <Users size={26} color="#091526" strokeWidth={1.9} />
              </div>
              <span className="node-label">Clients</span>
            </div>

            {/* 3. NODE: Documents (Left-Upper Wing) */}
            <div className="eco-node node-documents">
              <div className="node-circle standard-circle">
                <FolderOpen size={26} color="#C6A15B" strokeWidth={1.9} />
              </div>
              <span className="node-label">Documents</span>
            </div>

            {/* 4. NODE: Cases (Upper Center-Left) */}
            <div className="eco-node node-cases">
              <div className="node-circle standard-circle">
                <Briefcase size={26} color="#091526" strokeWidth={1.9} />
              </div>
              <span className="node-label">Cases</span>
            </div>

            {/* 5. NODE: Drafting (Upper Center-Right) */}
            <div className="eco-node node-drafting">
              <div className="node-circle standard-circle">
                <PenLine size={26} color="#C6A15B" strokeWidth={1.9} />
              </div>
              <span className="node-label">Drafting</span>
            </div>

            {/* 6. NODE: Law Library (Right-Upper Wing) */}
            <div className="eco-node node-research">
              <div className="node-circle standard-circle">
                <BookOpen size={26} color="#091526" strokeWidth={1.9} />
              </div>
              <span className="node-label">Law Library</span>
            </div>

            {/* 7. NODE: Evidence (Far Right-Lower) */}
            <div className="eco-node node-evidence">
              <div className="node-circle standard-circle">
                <Archive size={26} color="#C6A15B" strokeWidth={1.9} />
              </div>
              <span className="node-label">Evidence</span>
            </div>

            {/* 8. NODE: Hearings (Lower Center-Left) */}
            <div className="eco-node node-hearings">
              <div className="node-circle standard-circle">
                <Calendar size={25} color="#091526" strokeWidth={1.9} />
              </div>
              <span className="node-label">Hearings</span>
            </div>

            {/* 9. NODE: AI Assistant (Lower Center-Right) */}
            <div className="eco-node node-ai">
              <div className="node-circle standard-circle">
                <Bot size={25} color="#C6A15B" strokeWidth={1.9} />
              </div>
              <span className="node-label">AI Assistant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Organic Curved Wave Transition */}
      <div className="features-hero-bottom-transition" aria-hidden="true">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="transition-wave-svg"
        >
          {/* Flowing Gold Contour Line */}
          <path
            d="M0,45 C360,85 860,15 1440,55"
            stroke="#C6A15B"
            strokeWidth="1.5"
            strokeOpacity="0.35"
            fill="none"
          />
          {/* Subtle ivory/white transition fill */}
          <path
            d="M0,55 C380,95 880,25 1440,65 L1440,90 L0,90 Z"
            fill="rgba(255, 255, 255, 0.4)"
          />
        </svg>
      </div>
    </section>
  );
};
