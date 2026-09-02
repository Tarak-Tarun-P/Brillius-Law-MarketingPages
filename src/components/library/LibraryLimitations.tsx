import React from 'react';
import { ShieldCheck, UserCheck, FileCheck, CheckCircle2 } from 'lucide-react';
import './LibraryLimitations.css';

export const LibraryLimitations: React.FC = () => {
  return (
    <section className="library-limitations-section" aria-labelledby="limitations-heading">
      <div className="content-container">
        <div className="library-limitations-card">
          <div className="limitations-top-row">
            <div className="limitations-badge">
              <ShieldCheck size={16} color="#C6A15B" />
              <span>PRACTICE STANDARDS</span>
            </div>
            <span className="limitations-tag">Research Notice</span>
          </div>

          <h2 id="limitations-heading" className="limitations-title">
            Research Still Needs Legal Judgment.
          </h2>

          <p className="limitations-desc">
            The Law Library helps you find and explore legal sources. Legal professionals, researchers, and students should review the original material and apply their own professional judgment when advising clients or preparing court filings.
          </p>

          <div className="limitations-points-grid">
            <div className="limitation-point">
              <UserCheck size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Independent Legal Analysis</strong>
                <p className="point-desc">Statutory provisions and judicial rulings must always be interpreted in the specific context of your matter's facts.</p>
              </div>
            </div>

            <div className="limitation-point">
              <FileCheck size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Gazette &amp; Amendment Verification</strong>
                <p className="point-desc">Verify applicable state amendments, effective dates, and local high court practice directions before final reliance.</p>
              </div>
            </div>

            <div className="limitation-point">
              <CheckCircle2 size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Full Judgment Review</strong>
                <p className="point-desc">Always review the complete authoritative text of court decisions to ensure the ratio decidendi remains good law.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
