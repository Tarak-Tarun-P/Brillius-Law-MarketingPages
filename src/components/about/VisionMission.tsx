import React from 'react';
import { Eye, Target, Compass, Sparkles } from 'lucide-react';
import './VisionMission.css';

export const VisionMission: React.FC = () => {
  return (
    <section className="vision-mission-section" aria-labelledby="vision-heading">
      <div className="content-container">
        <div className="vision-mission-grid">
          {/* Vision Card */}
          <div className="vm-card vision-card">
            <div className="vm-icon-row">
              <div className="vm-icon-box">
                <Eye size={26} color="#C6A15B" />
              </div>
              <span className="vm-eyebrow">OUR VISION</span>
            </div>

            <h3 id="vision-heading" className="vm-title">
              Making Legal Work Easier
            </h3>

            <p className="vm-text">
              We want every lawyer, firm, and law student in India to have simple, reliable modern tools that take away everyday friction so they can focus on what matters most—delivering justice and helping clients.
            </p>

            <div className="vm-badge-footer">
              <Sparkles size={14} color="#C6A15B" />
              <span>A Modern Home for Legal Work</span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="vm-card mission-card">
            <div className="vm-icon-row">
              <div className="vm-icon-box">
                <Target size={26} color="#091526" />
              </div>
              <span className="vm-eyebrow">OUR MISSION</span>
            </div>

            <h3 className="vm-title">
              Helping You Work Smarter
            </h3>

            <p className="vm-text">
              Our mission is to build software people genuinely enjoy using. We bring cases, documents, research, and AI together in a simple way that is accurate, trustworthy, and built for Indian law.
            </p>

            <div className="vm-badge-footer">
              <Compass size={14} color="#091526" />
              <span>Simple • Reliable • Human-Led</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
