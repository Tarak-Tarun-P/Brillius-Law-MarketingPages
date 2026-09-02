import React from 'react';
import { ShieldCheck, UserCheck, FileCheck, CheckCircle2 } from 'lucide-react';
import './DraftingLimitations.css';

export const DraftingLimitations: React.FC = () => {
  return (
    <section className="drafting-limitations-section" aria-labelledby="limitations-heading">
      <div className="content-container">
        <div className="drafting-limitations-card">
          <div className="limitations-top-row">
            <div className="limitations-badge">
              <ShieldCheck size={16} color="#C6A15B" />
              <span>PROFESSIONAL STANDARDS</span>
            </div>
            <span className="limitations-tag">Practice Guidelines</span>
          </div>

          <h2 id="limitations-heading" className="limitations-title">
            A Workspace, Not a Substitute for Your Judgment.
          </h2>

          <p className="limitations-desc">
            Drafting Lab gives you the tools to create, format, and edit documents. The content, wording, and final legal agreements remain your responsibility.
          </p>

          <div className="limitations-points-grid">
            <div className="limitation-point">
              <UserCheck size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Editorial Ownership</strong>
                <p className="point-desc">Advocates maintain full authorial control over every covenant, definition, and clause structure.</p>
              </div>
            </div>

            <div className="limitation-point">
              <FileCheck size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Statutory Verification</strong>
                <p className="point-desc">Always ensure that your drafted terms align with applicable statutes, local court rules, and precedent.</p>
              </div>
            </div>

            <div className="limitation-point">
              <CheckCircle2 size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Final Execution Review</strong>
                <p className="point-desc">Perform a comprehensive review of the finalized clean document prior to exchange or court filing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
