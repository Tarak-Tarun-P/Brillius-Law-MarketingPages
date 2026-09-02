import React from 'react';
import { ShieldCheck, Eye, BookOpen, CheckCircle2 } from 'lucide-react';
import './AIAssistantLimitations.css';

export const AIAssistantLimitations: React.FC = () => {
  return (
    <section className="assistant-limitations-section" aria-labelledby="limitations-heading">
      <div className="content-container">
        <div className="assistant-limitations-card">
          <div className="limitations-top-row">
            <div className="limitations-badge">
              <ShieldCheck size={16} color="#C6A15B" />
              <span>RESPONSIBLE LEGAL AI</span>
            </div>
            <span className="limitations-tag">Practice Guidance</span>
          </div>

          <h2 id="limitations-heading" className="limitations-title">
            A Starting Point, Not the Final Word.
          </h2>

          <p className="limitations-desc">
            The Assistant helps you explore legal information and organize your thinking. Review the relevant legal sources, facts, and circumstances before relying on an answer.
          </p>

          <div className="limitations-points-grid">
            <div className="limitation-point">
              <Eye size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">An Exploratory Companion</strong>
                <p className="point-desc">Helps you brainstorm issues, discover provisions to explore, and organize questions around a matter.</p>
              </div>
            </div>

            <div className="limitation-point">
              <BookOpen size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Verify Primary Legal Sources</strong>
                <p className="point-desc">Always confirm suggested sections against the authoritative statutory provisions and judicial precedents.</p>
              </div>
            </div>

            <div className="limitation-point">
              <CheckCircle2 size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">You Retain Full Judgment</strong>
                <p className="point-desc">The legal professional or student remains in complete control of all analysis, advice, and final decisions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
