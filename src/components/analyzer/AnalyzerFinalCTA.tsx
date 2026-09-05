import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import './AnalyzerFinalCTA.css';

export const AnalyzerFinalCTA: React.FC = () => {
  return (
    <section className="analyzer-final-cta-section" aria-labelledby="analyzer-final-heading">
      <div className="content-container">
        <div className="analyzer-final-cta-box">
          {/* Subtle Ambient Halos */}
          <div className="cta-glow glow-gold" aria-hidden="true" />
          <div className="cta-glow glow-blue" aria-hidden="true" />

          <div className="analyzer-final-content">
            <div className="analyzer-final-badge">
              <Sparkles size={14} color="#C6A15B" />
              <span>START REVIEWING SMARTER</span>
            </div>

            <h2 id="analyzer-final-heading" className="analyzer-final-headline">
              Ready to Explore Your Documents?
            </h2>

            <p className="analyzer-final-subtext">
              Upload a document and see how BrilliusLaw can help you find and understand important information.
            </p>

            <div className="analyzer-final-actions">
              <a href="#get-started" className="btn-final-gold">
                <span>Try Document Analyzer</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="/features" className="btn-final-outline">
                <span>Explore All Features</span>
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
