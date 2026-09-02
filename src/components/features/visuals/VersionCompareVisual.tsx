import React from 'react';
import './visuals.css';
import { GitCompare, Plus, Minus } from 'lucide-react';

export const VersionCompareVisual: React.FC = () => {
  return (
    <div className="visual-card compare-visual-card">
      <div className="visual-window-header">
        <div className="visual-window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="visual-window-title">Redline Comparison // Draft v1.4 vs v2.0 Final</span>
        <div className="visual-badge-branch">
          <GitCompare size={12} />
          <span>3 Changes Identified</span>
        </div>
      </div>

      <div className="compare-body">
        <div className="compare-two-column">
          {/* Previous Version Column */}
          <div className="compare-col prev-col">
            <span className="compare-col-header">Previous Draft (v1.4)</span>
            <div className="diff-block">
              <span className="clause-title">Clause 8.2 — Indemnity Cap</span>
              <p className="diff-text-old">
                The total aggregate liability under this Agreement shall not exceed <span className="diff-del"><Minus size={10} />INR 50,00,000</span> for any claims arising out of breach.
              </p>
            </div>
          </div>

          {/* New Version Column with Highlighted Changes */}
          <div className="compare-col new-col">
            <span className="compare-col-header text-gold-dark font-bold">Revised Version (v2.0)</span>
            <div className="diff-block highlighted">
              <span className="clause-title">Clause 8.2 — Indemnity Cap</span>
              <p className="diff-text-new">
                The total aggregate liability under this Agreement shall not exceed <span className="diff-ins"><Plus size={10} />total fees paid during the preceding 12 months</span>, excluding confidentiality breaches.
              </p>
            </div>
          </div>
        </div>

        <div className="compare-summary-bar">
          <span className="summary-pill added">+ 1 Clause Refinement</span>
          <span className="summary-pill removed">- 1 Uncapped Liability Risk</span>
          <span className="summary-pill verified">✓ Both Parties Reconciled</span>
        </div>
      </div>
    </div>
  );
};
