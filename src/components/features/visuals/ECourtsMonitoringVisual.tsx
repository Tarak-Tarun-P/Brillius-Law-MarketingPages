import React from 'react';
import './visuals.css';
import { RefreshCw, CheckCircle2 } from 'lucide-react';

export const ECourtsMonitoringVisual: React.FC = () => {
  return (
    <div className="visual-card ecourts-visual-card">
      <div className="visual-window-header">
        <div className="visual-window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="visual-window-title">eCourts Public Portal Integration // Automatic Matter Sync</span>
        <span className="visual-badge-court">Live Registry Connected</span>
      </div>

      <div className="ecourts-body">
        {/* Sync Status Banner */}
        <div className="ecourts-sync-banner">
          <div className="sync-icon-box">
            <RefreshCw size={15} color="#C6A15B" />
          </div>
          <div className="sync-text">
            <span className="sync-title">Public Registry Connected: Supreme Court, Delhi High Court & NCLT</span>
            <span className="sync-time">Daily cause lists, orders & next listing dates automatically mapped to internal matters.</span>
          </div>
        </div>

        {/* Sync Match Card */}
        <div className="ecourts-match-card">
          <div className="match-source-tag">Official eCourts Record #SLP(C)-4412/2026</div>
          <div className="match-content-grid">
            <div className="match-field">
              <span className="field-label">Court & Bench</span>
              <span className="field-val">Supreme Court • Courtroom 3</span>
            </div>
            <div className="match-field">
              <span className="field-label">Next Listing Date</span>
              <span className="field-val text-gold-dark font-bold">03 Sep 2026 (Item #14)</span>
            </div>
            <div className="match-field">
              <span className="field-label">Last Order Passed</span>
              <span className="field-val">Notice Issued on 18 Aug 2026</span>
            </div>
          </div>

          <div className="match-internal-connection">
            <CheckCircle2 size={13} color="#10B981" />
            <span>Connected directly to BrilliusLaw Matter: <strong>"Apex Global vs UOI"</strong> (Assigned: Adv. R.K. Sharma)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
