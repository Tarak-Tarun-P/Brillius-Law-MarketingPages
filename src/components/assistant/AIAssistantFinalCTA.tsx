import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import './AIAssistantFinalCTA.css';

export const AIAssistantFinalCTA: React.FC = () => {
  return (
    <section className="assistant-final-cta-section" aria-labelledby="assistant-final-heading">
      <div className="content-container">
        <div className="assistant-final-cta-box">
          {/* Subtle Ambient Halos */}
          <div className="cta-glow glow-gold" aria-hidden="true" />
          <div className="cta-glow glow-blue" aria-hidden="true" />

          <div className="assistant-final-content">
            <div className="assistant-final-badge">
              <Sparkles size={14} color="#C6A15B" />
              <span>START EXPLORING SMARTER</span>
            </div>

            <h2 id="assistant-final-heading" className="assistant-final-headline">
              Have a Legal Question?
              <br />
              Start Exploring.
            </h2>

            <p className="assistant-final-subtext">
              Ask a question, explore the issue, and find a clearer starting point for your next step.
            </p>

            <div className="assistant-final-actions">
              <a href="#get-started" className="btn-final-gold">
                <span>Try AI Assistant</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#/features" className="btn-final-outline">
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
