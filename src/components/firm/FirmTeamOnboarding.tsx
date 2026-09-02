import React from 'react';
import { UserPlus, CheckCircle2, MoreVertical } from 'lucide-react';
import './FirmTeamOnboarding.css';

export const FirmTeamOnboarding: React.FC = () => {
  const members = [
    {
      name: 'Aditya Sen',
      email: 'aditya.sen@mehtalaw.in',
      role: 'Associate Advocate',
      status: 'Active',
      joined: 'Joined 2 weeks ago',
      avatar: 'AS',
      avatarClass: 'av-active',
    },
    {
      name: 'Neha Roy',
      email: 'neha.roy@mehtalaw.in',
      role: 'Senior Associate',
      status: 'Active',
      joined: 'Joined 3 months ago',
      avatar: 'NR',
      avatarClass: 'av-active',
    },
    {
      name: 'Kavita Verma',
      email: 'kavita.v@mehtalaw.in',
      role: 'Legal Intern',
      status: 'Pending Invite',
      joined: 'Invitation sent yesterday',
      avatar: 'KV',
      avatarClass: 'av-pending',
    },
  ];

  return (
    <section className="firm-onboarding-section" aria-labelledby="onboarding-heading">
      <div className="content-container">
        <div className="onboarding-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">TEAM DIRECTORY</span>
          </div>
          <h2 id="onboarding-heading" className="onboarding-title">
            Bring New Team Members Onboard Easily
          </h2>
          <p className="onboarding-desc">
            Invite new members, manage active users, and keep your firm’s team directory up to date as your practice grows.
          </p>
        </div>

        {/* Directory Management Interface Preview */}
        <div className="onboarding-workspace-card">
          {/* Top Actions Row */}
          <div className="directory-topbar">
            <div className="dir-search-wrap">
              <strong className="dir-title">Firm Member Directory</strong>
              <span className="dir-count">18 Members Total</span>
            </div>
            <button type="button" className="btn-invite-member">
              <UserPlus size={14} />
              <span>Invite New Member</span>
            </button>
          </div>

          {/* Directory Members Table */}
          <div className="directory-table">
            <div className="dir-table-head">
              <span>Member Details</span>
              <span>Assigned Role</span>
              <span>Status</span>
              <span>Activity / Onboarding</span>
              <span>Actions</span>
            </div>

            <div className="dir-table-body">
              {members.map((m, idx) => (
                <div key={idx} className="dir-row">
                  <div className="dir-member-cell">
                    <div className={`dir-avatar ${m.avatarClass}`}>{m.avatar}</div>
                    <div className="dir-name-group">
                      <strong className="dir-user-name">{m.name}</strong>
                      <span className="dir-user-email">{m.email}</span>
                    </div>
                  </div>

                  <span className="dir-role-tag">{m.role}</span>

                  <div className="dir-status-cell">
                    <span className={`status-pill ${m.status === 'Active' ? 'pill-active' : 'pill-pending'}`}>
                      {m.status}
                    </span>
                  </div>

                  <span className="dir-joined-text">{m.joined}</span>

                  <div className="dir-action-cell">
                    <button type="button" className="btn-dir-manage" aria-label="Manage Member">
                      <MoreVertical size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="directory-footer">
            <div className="dir-footer-item">
              <CheckCircle2 size={13} color="#C6A15B" />
              <span>Easy onboarding with secure role and matter assignment right from day one.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
