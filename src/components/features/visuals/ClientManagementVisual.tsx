import React from 'react';
import './visuals.css';
import { CheckCircle2, Building2, Clock } from 'lucide-react';

export const ClientManagementVisual: React.FC = () => {
  return (
    <div className="visual-card client-visual-card">
      <div className="visual-window-header">
        <div className="visual-window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="visual-window-title">Client Workspace // Apex Enterprises Ltd.</span>
        <span className="visual-badge-active">Active Client</span>
      </div>

      <div className="client-grid">
        {/* Profile Card Summary */}
        <div className="client-profile-header">
          <div className="client-avatar">
            <Building2 size={24} color="#C6A15B" />
          </div>
          <div className="client-info">
            <h4 className="client-name">Apex Global Technologies Pvt. Ltd.</h4>
            <p className="client-meta">Client ID: CLI-2026-0894 • Retainer Account</p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="client-stats-row">
          <div className="client-stat-item">
            <span className="stat-num">12</span>
            <span className="stat-label">Active Matters</span>
          </div>
          <div className="client-stat-item">
            <span className="stat-num">84</span>
            <span className="stat-label">Vault Documents</span>
          </div>
          <div className="client-stat-item">
            <span className="stat-num">3</span>
            <span className="stat-label">Upcoming Hearings</span>
          </div>
        </div>

        {/* Active Matters List */}
        <div className="client-matters-list">
          <div className="matter-item">
            <div className="matter-status-indicator" />
            <div className="matter-details">
              <span className="matter-title">NCLT Insolvency Defense — Bench III</span>
              <span className="matter-sub">Senior Counsel: Adv. R. K. Sharma • High Priority</span>
            </div>
            <span className="matter-badge">In Hearing</span>
          </div>

          <div className="matter-item">
            <div className="matter-status-indicator indicator-gold" />
            <div className="matter-details">
              <span className="matter-title">Cross-Border Share Purchase Agreement</span>
              <span className="matter-sub">Drafting Lab • Clause 14 Review</span>
            </div>
            <span className="matter-badge badge-gold">Drafting</span>
          </div>
        </div>

        {/* Quick Meta Footer */}
        <div className="client-footer-meta">
          <div className="meta-sync">
            <Clock size={13} />
            <span>Last activity logged 14 mins ago by Corporate Team</span>
          </div>
          <div className="meta-verified">
            <CheckCircle2 size={13} color="#C6A15B" />
            <span>KYC & Engagement Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
};
