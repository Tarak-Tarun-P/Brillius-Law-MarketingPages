import React from 'react';
import './visuals.css';
import { ShieldCheck, Link2, CheckCircle2, Hash } from 'lucide-react';

export const EvidenceStorageVisual: React.FC = () => {
  return (
    <div className="visual-card evidence-visual-card">
      <div className="visual-window-header">
        <div className="visual-window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="visual-window-title">Evidence Vault // Matter #ARB-2026-IND</span>
        <span className="evidence-badge-secure">
          <ShieldCheck size={13} color="#C6A15B" />
          <span>Chain-of-Custody Verified</span>
        </span>
      </div>

      <div className="evidence-body">
        {/* Vault Header Metadata */}
        <div className="evidence-vault-summary">
          <div className="vault-summary-item">
            <span className="vault-label">Total Exhibits</span>
            <span className="vault-value">28 Exhibits</span>
          </div>
          <div className="vault-summary-item">
            <span className="vault-label">Cryptographic Integrity</span>
            <span className="vault-value text-gold">SHA-256 Validated</span>
          </div>
          <div className="vault-summary-item">
            <span className="vault-label">Court Admissibility</span>
            <span className="vault-value">Sec 65B Indian Evidence Act</span>
          </div>
        </div>

        {/* Evidence Items List */}
        <div className="evidence-items-list">
          {/* Item 1 */}
          <div className="evidence-item-row featured">
            <div className="evidence-mark">
              <span className="evidence-id">EX-01</span>
            </div>
            <div className="evidence-item-info">
              <div className="evidence-name-row">
                <span className="evidence-name">Email_Correspondences_Annexure_B.pdf</span>
                <span className="evidence-tag">Primary Exhibit</span>
              </div>
              <div className="evidence-meta-row">
                <span className="hash-code">
                  <Hash size={11} />
                  <span>e3b0c44298fc1c149afbf4c8996fb924...</span>
                </span>
                <span className="evidence-date">Timestamped 14 Aug 2026</span>
              </div>
            </div>
            <div className="evidence-status-pill">
              <CheckCircle2 size={12} color="#C6A15B" />
              <span>Certified</span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="evidence-item-row">
            <div className="evidence-mark">
              <span className="evidence-id">EX-02</span>
            </div>
            <div className="evidence-item-info">
              <div className="evidence-name-row">
                <span className="evidence-name">Audited_Financial_Ledger_FY24-25.xlsx</span>
                <span className="evidence-tag">Financial Proof</span>
              </div>
              <div className="evidence-meta-row">
                <span className="hash-code">
                  <Hash size={11} />
                  <span>8f434346648f6b96df89dda901c5176b...</span>
                </span>
                <span className="evidence-date">Timestamped 02 Jul 2026</span>
              </div>
            </div>
            <div className="evidence-status-pill">
              <CheckCircle2 size={12} color="#C6A15B" />
              <span>Certified</span>
            </div>
          </div>

          {/* Item 3 */}
          <div className="evidence-item-row">
            <div className="evidence-mark">
              <span className="evidence-id">EX-03</span>
            </div>
            <div className="evidence-item-info">
              <div className="evidence-name-row">
                <span className="evidence-name">Board_Resolution_Authorisation.pdf</span>
                <span className="evidence-tag">Corporate Authority</span>
              </div>
              <div className="evidence-meta-row">
                <span className="hash-code">
                  <Hash size={11} />
                  <span>a591a6d40bf420404a011733cfb7b190...</span>
                </span>
                <span className="evidence-date">Linked to Matter #ARB-2026</span>
              </div>
            </div>
            <div className="evidence-status-pill">
              <Link2 size={12} />
              <span>Attached</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
