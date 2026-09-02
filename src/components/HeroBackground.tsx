import React from 'react';
import './HeroBackground.css';

export const HeroBackground: React.FC = () => {
  return (
    <div className="hero-background" aria-hidden="true">
      {/* 1. Atmospheric Radial Gradients (Navy, Gold, Deep Navy) */}
      <div className="bg-gradient bg-gradient-a" />
      <div className="bg-gradient bg-gradient-b" />
      <div className="bg-gradient bg-gradient-c" />
      <div className="bg-gradient bg-gradient-halo" />

      {/* 2. Primary Vector System: Architectural, Legal Symbols, Data Grids & Arcs */}
      <svg
        className="hero-vector-canvas"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Subtle Technical Dot Grid Pattern */}
          <pattern id="techDotGrid" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#091526" opacity="0.35" />
          </pattern>

          {/* Denser Center Matrix Pattern */}
          <pattern id="matrixPattern" width="16" height="16" patternUnits="userSpaceOnUse">
            <line x1="8" y1="6" x2="8" y2="10" stroke="#091526" strokeWidth="0.8" opacity="0.25" />
            <line x1="6" y1="8" x2="10" y2="8" stroke="#091526" strokeWidth="0.8" opacity="0.25" />
          </pattern>

          {/* Linear Gradient for Gold Arcs */}
          <linearGradient id="goldArcGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C6A15B" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#C6A15B" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#DFBF7E" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="goldArcGrad2" x1="0%" y1="80%" x2="100%" y2="20%">
            <stop offset="0%" stopColor="#C6A15B" stopOpacity="0.25" />
            <stop offset="70%" stopColor="#C6A15B" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#091526" stopOpacity="0.02" />
          </linearGradient>

          {/* Fade mask for center tech grid */}
          <radialGradient id="gridFadeMask" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
          <mask id="centerGridMask">
            <rect x="0" y="0" width="1440" height="900" fill="url(#gridFadeMask)" />
          </mask>
        </defs>

        {/* ------------------------------------------------------------- */}
        {/* LAYER: Technical Dot & Data Matrix Grids (Center & Transitory) */}
        {/* ------------------------------------------------------------- */}
        <g className="bg-tech-grid" mask="url(#centerGridMask)">
          <rect x="360" y="80" width="720" height="700" fill="url(#techDotGrid)" opacity="0.4" />
          <rect x="520" y="240" width="380" height="380" fill="url(#matrixPattern)" opacity="0.35" />
        </g>


        {/* ------------------------------------------------------------- */}
        {/* LAYER: Large Architectural Classical Courthouse Line Art      */}
        {/* ------------------------------------------------------------- */}
        <g className="bg-architecture-courthouse" stroke="#091526" strokeWidth="1" opacity="0.07" fill="none">
          {/* Classical Pediment (Triangle roof top) */}
          <polygon points="120,240 380,130 640,240" />
          <polygon points="150,235 380,142 610,235" strokeDasharray="2 2" />
          {/* Architrave / Entablature horizontal beams */}
          <line x1="90" y1="240" x2="670" y2="240" strokeWidth="1.5" />
          <line x1="100" y1="252" x2="660" y2="252" />
          <line x1="110" y1="262" x2="650" y2="262" strokeWidth="1.2" />

          {/* 6 Majestic Classical Columns */}
          {/* Column 1 */}
          <rect x="140" y="262" width="28" height="420" />
          <line x1="149" y1="262" x2="149" y2="682" strokeDasharray="4 4" />
          <line x1="159" y1="262" x2="159" y2="682" strokeDasharray="4 4" />
          {/* Column 2 */}
          <rect x="220" y="262" width="28" height="420" />
          <line x1="229" y1="262" x2="229" y2="682" strokeDasharray="4 4" />
          <line x1="239" y1="262" x2="239" y2="682" strokeDasharray="4 4" />
          {/* Column 3 */}
          <rect x="300" y="262" width="28" height="420" />
          <line x1="309" y1="262" x2="309" y2="682" strokeDasharray="4 4" />
          <line x1="319" y1="262" x2="319" y2="682" strokeDasharray="4 4" />
          {/* Column 4 */}
          <rect x="380" y="262" width="28" height="420" />
          <line x1="389" y1="262" x2="389" y2="682" strokeDasharray="4 4" />
          <line x1="399" y1="262" x2="399" y2="682" strokeDasharray="4 4" />
          {/* Column 5 */}
          <rect x="460" y="262" width="28" height="420" />
          <line x1="469" y1="262" x2="469" y2="682" strokeDasharray="4 4" />
          <line x1="479" y1="262" x2="479" y2="682" strokeDasharray="4 4" />
          {/* Column 6 */}
          <rect x="540" y="262" width="28" height="420" />
          <line x1="549" y1="262" x2="549" y2="682" strokeDasharray="4 4" />
          <line x1="559" y1="262" x2="559" y2="682" strokeDasharray="4 4" />

          {/* Steps / Foundation Base */}
          <line x1="80" y1="682" x2="680" y2="682" strokeWidth="1.5" />
          <line x1="60" y1="696" x2="700" y2="696" />
          <line x1="40" y1="710" x2="720" y2="710" />
        </g>

        {/* ------------------------------------------------------------- */}
        {/* LAYER: Large Architectural Archway behind Right Column        */}
        {/* ------------------------------------------------------------- */}
        <g className="bg-architecture-arch" stroke="#091526" strokeWidth="1" opacity="0.06" fill="none">
          {/* Grand Vaulted Archway */}
          <path d="M 880 750 L 880 440 A 240 240 0 0 1 1360 440 L 1360 750" />
          <path d="M 910 750 L 910 445 A 210 210 0 0 1 1330 445 L 1330 750" strokeDasharray="6 4" />
          <path d="M 940 750 L 940 450 A 180 180 0 0 1 1300 450 L 1300 750" />
          {/* Keystone detail */}
          <polygon points="1110,210 1130,210 1125,245 1115,245" />
        </g>

        {/* ------------------------------------------------------------- */}
        {/* LAYER: Large Legal Symbol Line Art (Huge Balance Scales)      */}
        {/* ------------------------------------------------------------- */}
        <g className="bg-symbol-scales" stroke="#091526" strokeWidth="1.2" opacity="0.065" fill="none">
          {/* Central Pillar / Stand */}
          <line x1="1120" y1="120" x2="1120" y2="480" strokeWidth="1.8" />
          <circle cx="1120" cy="120" r="10" />
          <circle cx="1120" cy="120" r="4" fill="#C6A15B" opacity="0.4" />
          {/* Main Horizontal Beam */}
          <line x1="920" y1="190" x2="1320" y2="190" strokeWidth="2" />
          <circle cx="920" cy="190" r="6" />
          <circle cx="1320" cy="190" r="6" />
          {/* Left Pan Chains & Plate */}
          <line x1="920" y1="196" x2="870" y2="310" strokeDasharray="3 3" />
          <line x1="920" y1="196" x2="970" y2="310" strokeDasharray="3 3" />
          <path d="M 850 310 Q 920 345 990 310 Z" strokeWidth="1.5" />
          {/* Right Pan Chains & Plate */}
          <line x1="1320" y1="196" x2="1270" y2="310" strokeDasharray="3 3" />
          <line x1="1320" y1="196" x2="1370" y2="310" strokeDasharray="3 3" />
          <path d="M 1250 310 Q 1320 345 1390 310 Z" strokeWidth="1.5" />
        </g>

        {/* ------------------------------------------------------------- */}
        {/* LAYER: Floating Legal Document / Constitution Page Outlines   */}
        {/* ------------------------------------------------------------- */}
        {/* Center-Right Floating Legal Document */}
        <g className="bg-legal-doc-center" transform="translate(680, 260) rotate(-4)" stroke="#091526" strokeWidth="1" opacity="0.05" fill="rgba(255,255,255,0.4)">
          <rect x="0" y="0" width="220" height="300" rx="6" />
          {/* Header lines */}
          <line x1="24" y1="36" x2="110" y2="36" stroke="#C6A15B" strokeWidth="1.5" />
          <circle cx="180" cy="36" r="12" stroke="#C6A15B" />
          {/* Body paragraph lines */}
          <line x1="24" y1="70" x2="196" y2="70" strokeDasharray="2 3" />
          <line x1="24" y1="90" x2="180" y2="90" strokeDasharray="2 3" />
          <line x1="24" y1="110" x2="190" y2="110" strokeDasharray="2 3" />
          <line x1="24" y1="140" x2="196" y2="140" strokeDasharray="2 3" />
          <line x1="24" y1="160" x2="160" y2="160" strokeDasharray="2 3" />
          <line x1="24" y1="180" x2="188" y2="180" strokeDasharray="2 3" />
          <line x1="24" y1="210" x2="196" y2="210" strokeDasharray="2 3" />
          <line x1="24" y1="230" x2="140" y2="230" strokeDasharray="2 3" />
          {/* Signature / seal marker */}
          <circle cx="165" cy="265" r="16" stroke="#C6A15B" strokeDasharray="3 2" />
        </g>

        {/* Center-Left Secondary Legal Parchment Outline */}
        <g className="bg-legal-doc-left" transform="translate(460, 420) rotate(5)" stroke="#091526" strokeWidth="0.9" opacity="0.04" fill="none">
          <rect x="0" y="0" width="180" height="240" rx="4" />
          <line x1="20" y1="28" x2="90" y2="28" strokeWidth="1.2" />
          <line x1="20" y1="56" x2="160" y2="56" strokeDasharray="2 4" />
          <line x1="20" y1="76" x2="140" y2="76" strokeDasharray="2 4" />
          <line x1="20" y1="96" x2="155" y2="96" strokeDasharray="2 4" />
          <line x1="20" y1="124" x2="150" y2="124" strokeDasharray="2 4" />
          <line x1="20" y1="144" x2="120" y2="144" strokeDasharray="2 4" />
        </g>

        {/* ------------------------------------------------------------- */}
        {/* LAYER: Knowledge Blueprint & Diagram Connector Lines          */}
        {/* ------------------------------------------------------------- */}
        <g className="bg-blueprint-connectors" stroke="#091526" strokeWidth="0.85" opacity="0.055" fill="none">
          {/* Polyline connecting Courthouse -> Center Doc -> Scales */}
          <path d="M 480 340 L 590 340 L 590 410 L 730 410 L 730 310 L 920 310" strokeDasharray="4 4" />
          <circle cx="480" cy="340" r="3.5" fill="#091526" />
          <circle cx="590" cy="410" r="3.5" fill="#C6A15B" />
          <circle cx="730" cy="310" r="3.5" fill="#091526" />
          <circle cx="920" cy="310" r="3.5" fill="#C6A15B" />

          {/* Lower connector node */}
          <path d="M 380 580 L 540 580 L 620 660 L 840 660" strokeDasharray="3 5" />
          <circle cx="540" cy="580" r="3" fill="#091526" />
          <circle cx="620" cy="660" r="3" fill="#C6A15B" />
        </g>

        {/* ------------------------------------------------------------- */}
        {/* LAYER: Large Translucent Circular Forms & Orbit Diagrams     */}
        {/* ------------------------------------------------------------- */}
        <g className="bg-orbital-circles" fill="none">
          {/* Outer Enormous Orbit (Navy) */}
          <circle cx="1080" cy="460" r="480" stroke="#091526" strokeWidth="1" opacity="0.05" />
          {/* Mid Orbital Ring with Dash pattern (Gold) */}
          <circle cx="1080" cy="460" r="360" stroke="#C6A15B" strokeWidth="1" strokeDasharray="6 8" opacity="0.09" />
          {/* Inner Geometric Ring */}
          <circle cx="1080" cy="460" r="260" stroke="#091526" strokeWidth="1" opacity="0.06" />

          {/* Secondary Center-Left Orbit */}
          <ellipse cx="580" cy="420" rx="340" ry="340" stroke="#C6A15B" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.06" />
        </g>

        {/* ------------------------------------------------------------- */}
        {/* LAYER: Architectural Sweeping Gold Arcs (Framing Lady Justice) */}
        {/* ------------------------------------------------------------- */}
        <g className="bg-gold-sweeping-arcs" fill="none">
          {/* Arc 1: Grand Outer Arc */}
          <path
            d="M 460 920 C 620 780 840 280 1420 180"
            stroke="url(#goldArcGrad1)"
            strokeWidth="1.6"
          />
          {/* Arc 2: Primary Framing Arc */}
          <path
            d="M 560 900 C 720 740 920 320 1380 240"
            stroke="url(#goldArcGrad2)"
            strokeWidth="1.2"
          />
          {/* Arc 3: Concentric Internal Gold Curve */}
          <path
            d="M 690 890 C 820 760 980 410 1340 330"
            stroke="#C6A15B"
            strokeWidth="1"
            strokeOpacity="0.22"
            strokeDasharray="8 6"
          />
          {/* Arc 4: Subtle Lower Right Echo */}
          <path
            d="M 820 910 C 960 810 1140 580 1440 480"
            stroke="#C6A15B"
            strokeWidth="1.2"
            strokeOpacity="0.18"
          />
        </g>
      </svg>
    </div>
  );
};
