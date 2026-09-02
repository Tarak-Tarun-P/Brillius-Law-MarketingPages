import React from 'react';
import { ShieldCheck, UserCheck, FileCheck, CheckCircle2 } from 'lucide-react';
import './CompareLimitations.css';

export const CompareLimitations: React.FC = () => {
  return (
    <section className="compare-limitations-section" aria-labelledby="limitations-heading">
      <div className="content-container">
        <div className="compare-limitations-card">
          <div className="limitations-top-row">
            <div className="limitations-badge">
              <ShieldCheck size={16} color="#C6A15B" />
              <span>PRACTICE GUIDELINES</span>
            </div>
            <span className="limitations-tag">Professional Standards</span>
          </div>

          <h2 id="limitations-heading" className="limitations-title">
            Compare Clearly. Review Carefully.
          </h2>

          <p className="limitations-desc">
            The comparison helps you identify differences between document versions. The legal professional remains responsible for reviewing the changes and deciding what should be kept.
          </p>

          <div className="limitations-points-grid">
            <div className="limitation-point">
              <UserCheck size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Advocate Discretion</strong>
                <p className="point-desc">The legal professional exercises final judgment on which revisions are legally advantageous to accept.</p>
              </div>
            </div>

            <div className="limitation-point">
              <FileCheck size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Contextual Evaluation</strong>
                <p className="point-desc">Differences should always be reviewed within the overarching commercial and regulatory context of the matter.</p>
              </div>
            </div>

            <div className="limitation-point">
              <CheckCircle2 size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Execution Copy Check</strong>
                <p className="point-desc">Always perform a final review of the clean execution copy before exchanging signatures.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
