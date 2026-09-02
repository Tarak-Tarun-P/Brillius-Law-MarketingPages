import React from 'react';
import './visuals.css';
import { GitBranch, Check, User, Award } from 'lucide-react';

export const CaseDraftsVisual: React.FC = () => {
  return (
    <div className="visual-card case-drafts-visual-card">
      <div className="visual-window-header">
        <div className="visual-window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="visual-window-title">Matter Version Registry // Arbitration Claim Statement</span>
        <div className="visual-badge-branch">
          <GitBranch size={12} />
          <span>Case Lifecycle Drafts</span>
        </div>
      </div>

      <div className="case-drafts-body">
        <div className="draft-version-tree">
          {/* Version 1.0 */}
          <div className="draft-card past">
            <div className="draft-version-badge">v1.0</div>
            <div className="draft-meta">
              <span className="draft-name">Initial Grounds & Factual Recital</span>
              <span className="draft-author"><User size={11} /> Prepared by Junior Associate • 12 Jul</span>
            </div>
            <span className="draft-status-tag">Superseded</span>
          </div>

          {/* Version 1.2 */}
          <div className="draft-card past">
            <div className="draft-version-badge">v1.2</div>
            <div className="draft-meta">
              <span className="draft-name">Senior Partner Annotations & Legal Grounds</span>
              <span className="draft-author"><User size={11} /> Revised with 8 redline edits • 18 Jul</span>
            </div>
            <span className="draft-status-tag">Reviewed</span>
          </div>

          {/* Version 2.0 */}
          <div className="draft-card past">
            <div className="draft-version-badge">v2.0</div>
            <div className="draft-meta">
              <span className="draft-name">Client Review & Verification of Claims</span>
              <span className="draft-author"><User size={11} /> General Counsel Approval • 24 Jul</span>
            </div>
            <span className="draft-status-tag">Approved</span>
          </div>

          {/* Version 2.1 (FINAL CERTIFIED) */}
          <div className="draft-card final-gold">
            <div className="draft-version-badge badge-gold">
              <Award size={13} />
              <span>v2.1 FINAL</span>
            </div>
            <div className="draft-meta">
              <span className="draft-name text-dark font-bold">Certified Filing Copy (Court Ready)</span>
              <span className="draft-author text-gold-dark"><Check size={11} /> Digital Notarized Signature Attached • Stamped for Arbitral Tribunal</span>
            </div>
            <span className="draft-certified-badge">
              <Check size={12} color="#FFFFFF" />
              <span>Filed</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
