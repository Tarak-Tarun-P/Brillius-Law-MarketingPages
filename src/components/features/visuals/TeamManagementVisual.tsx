import React from 'react';
import './visuals.css';
import { Shield, Lock, CheckCircle2, User } from 'lucide-react';

export const TeamManagementVisual: React.FC = () => {
  return (
    <div className="visual-card team-visual-card">
      <div className="visual-window-header">
        <div className="visual-window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="visual-window-title">Firm Workspace // Roles & Matter Permissions</span>
        <div className="visual-badge-shield">
          <Shield size={12} />
          <span>Role-Based Access</span>
        </div>
      </div>

      <div className="team-body">
        <div className="team-roles-list">
          {/* Senior Partner Role */}
          <div className="team-member-card">
            <div className="member-avatar partner">
              <User size={16} color="#C6A15B" />
            </div>
            <div className="member-details">
              <span className="member-name">Adv. R. K. Sharma (Senior Partner)</span>
              <span className="member-role-tag role-partner">Full Practice Access</span>
            </div>
            <span className="member-status-pill">12 Matters Lead</span>
          </div>

          {/* Associate Role */}
          <div className="team-member-card">
            <div className="member-avatar associate">
              <User size={16} color="#091526" />
            </div>
            <div className="member-details">
              <span className="member-name">Priya Mukerjee (Senior Associate)</span>
              <span className="member-role-tag role-associate">Drafting & Research Access</span>
            </div>
            <span className="member-status-pill">6 Matters Assigned</span>
          </div>

          {/* Firm Admin Role */}
          <div className="team-member-card">
            <div className="member-avatar admin">
              <Lock size={15} color="#738091" />
            </div>
            <div className="member-details">
              <span className="member-name">Suresh Verma (Finance & Administration)</span>
              <span className="member-role-tag role-admin">Invoicing & Operations</span>
            </div>
            <span className="member-status-pill">Billing Lead</span>
          </div>
        </div>

        <div className="team-footer-note">
          <CheckCircle2 size={13} color="#C6A15B" />
          <span>Granular access control keeps confidential client documents protected within matter teams.</span>
        </div>
      </div>
    </div>
  );
};
