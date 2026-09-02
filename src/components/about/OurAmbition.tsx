import React from 'react';
import { Rocket, Globe, Award } from 'lucide-react';
import './OurAmbition.css';

export const OurAmbition: React.FC = () => {
  return (
    <section className="ambition-section" aria-labelledby="ambition-heading">
      <div className="content-container">
        <div className="ambition-header">
          <span className="ambition-eyebrow">LOOKING AHEAD</span>
          <h2 id="ambition-heading" className="ambition-title">
            Our Ambition
          </h2>
          <p className="ambition-desc">
            We want to make legal work simpler, faster, and more accessible for thousands of legal professionals across India.
          </p>
        </div>

        <div className="ambition-pillars-row">
          <div className="ambition-pillar-card">
            <div className="ambition-pillar-icon">
              <Rocket size={22} color="#C6A15B" />
            </div>
            <h3 className="ambition-pillar-title">Helping 100,000+ Legal Practices</h3>
            <p className="ambition-pillar-text">
              Bringing modern, easy-to-use digital tools to lawyers and law firms across every court, city, and town in India.
            </p>
          </div>

          <div className="ambition-pillar-card">
            <div className="ambition-pillar-icon">
              <Globe size={22} color="#091526" />
            </div>
            <h3 className="ambition-pillar-title">Modernizing Indian Law</h3>
            <p className="ambition-pillar-text">
              Making Indian laws, Bare Acts, and landmark court decisions easier to search, understand, and use in everyday practice.
            </p>
          </div>

          <div className="ambition-pillar-card">
            <div className="ambition-pillar-icon">
              <Award size={22} color="#C6A15B" />
            </div>
            <h3 className="ambition-pillar-title">Setting the Standard for Helpful AI</h3>
            <p className="ambition-pillar-text">
              Creating AI tools that are genuinely useful, reliable, and respectful of professional legal standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
