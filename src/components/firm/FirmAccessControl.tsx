import React from 'react';
import { Lock, CheckCircle2, UserCheck, EyeOff } from 'lucide-react';
import './FirmAccessControl.css';

export const FirmAccessControl: React.FC = () => {
  const highlights = [
    {
      title: 'Tailored Access',
      desc: 'Ensure team members only view and work on the matters, documents, and tools relevant to their specific legal responsibilities.',
      icon: <UserCheck size={20} />,
    },
    {
      title: 'Sensitive Matter Protection',
      desc: 'Restrict high-stakes litigation, sensitive commercial arbitrations, or confidential advisory briefs to designated senior teams.',
      icon: <EyeOff size={20} />,
    },
    {
      title: 'Client Confidentiality',
      desc: 'Maintain distinct confidentiality boundaries between competing client files, specialized practice groups, and external co-counsel.',
      icon: <Lock size={20} />,
    },
    {
      title: 'Clear Responsibility',
      desc: 'Define who drafts, who reviews, who approves, and who files with unambiguous role clarity across every stage of a matter.',
      icon: <CheckCircle2 size={20} />,
    },
  ];

  return (
    <section className="firm-access-section" aria-labelledby="access-control-heading">
      <div className="content-container">
        <div className="firm-access-grid">
          {/* Left Text Column */}
          <div className="firm-access-left">
            <div className="eyebrow-chip">
              <span className="eyebrow-text">CONFIDENTIALITY &amp; PRIVILEGE</span>
            </div>
            <h2 id="access-control-heading" className="firm-access-title">
              Keep Sensitive Work in the Right Hands
            </h2>
            <p className="firm-access-desc">
              Control what different members of your firm can access, helping protect confidential client, case, and financial information.
            </p>

            <div className="access-highlights-list">
              {highlights.map((h, idx) => (
                <div key={idx} className="access-highlight-row">
                  <div className="highlight-icon-box">{h.icon}</div>
                  <div className="highlight-text-content">
                    <strong className="highlight-title">{h.title}</strong>
                    <p className="highlight-desc">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Representation */}
          <div className="firm-access-right">
            <div className="access-preview-card">
              <div className="access-card-header">
                <div className="header-meta">
                  <span className="access-level-pill">Matter Access Controls</span>
                  <strong className="matter-access-name">Matter #2023-ARB-084 (Confidential Dispute)</strong>
                </div>
                <span className="access-status-badge">Restricted Team</span>
              </div>

              <div className="access-members-table">
                <div className="table-header-row">
                  <span>Team Member</span>
                  <span>Role</span>
                  <span>Matter Access Level</span>
                </div>

                <div className="table-data-row">
                  <div className="user-cell">
                    <div className="user-avatar p-av">SM</div>
                    <span className="user-name">S. K. Mehta (Lead)</span>
                  </div>
                  <span className="user-role-str">Senior Partner</span>
                  <span className="perm-level-badge full">Full Access &amp; Approvals</span>
                </div>

                <div className="table-data-row">
                  <div className="user-cell">
                    <div className="user-avatar a-av">AK</div>
                    <span className="user-name">Arjun Kapoor</span>
                  </div>
                  <span className="user-role-str">Senior Associate</span>
                  <span className="perm-level-badge edit">Draft &amp; Research</span>
                </div>

                <div className="table-data-row">
                  <div className="user-cell">
                    <div className="user-avatar c-av">RS</div>
                    <span className="user-name">Ramesh Singh</span>
                  </div>
                  <span className="user-role-str">Head Clerk</span>
                  <span className="perm-level-badge filing">Filing &amp; Registry Only</span>
                </div>

                <div className="table-data-row restricted-row">
                  <div className="user-cell muted-user">
                    <div className="user-avatar lock-av"><Lock size={12} /></div>
                    <span className="user-name">General Practice Team</span>
                  </div>
                  <span className="user-role-str">Other Members</span>
                  <span className="perm-level-badge none">No Access</span>
                </div>
              </div>

              <div className="access-card-footer">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Matter access can be customized on a per-case basis at any time.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
