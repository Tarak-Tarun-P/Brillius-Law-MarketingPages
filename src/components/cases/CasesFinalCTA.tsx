import React from 'react';
import { ArrowRight, Briefcase } from 'lucide-react';
import './CasesFinalCTA.css';

export const CasesFinalCTA: React.FC = () => {
  return (
    <section className="cases-final-cta-section" aria-labelledby="cases-final-heading">
      <div className="content-container">
        <div className="cases-final-cta-box">
          {/* Ambient Glows */}
          <div className="cta-glow glow-gold" aria-hidden="true" />
          <div className="cta-glow glow-blue" aria-hidden="true" />

          <div className="cases-final-content">
            <div className="cases-final-badge">
              <Briefcase size={14} color="#C6A15B" />
              <span>CASE MANAGEMENT</span>
            </div>

            <h2 id="cases-final-heading" className="cases-final-headline">
              Keep Your Cases Organized.
            </h2>

            <p className="cases-final-subtext">
              Keep your case details, clients, and important matter information together in one place.
            </p>

            <div className="cases-final-actions">
              <a href="#get-started" className="btn-final-gold">
                <span>Explore Case Management</span>
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
