import React from 'react';
import { Eye, Clock, CheckCircle2 } from 'lucide-react';
import './FirmActivityVisibility.css';

export const FirmActivityVisibility: React.FC = () => {
  const activities = [
    {
      action: 'Document Finalized',
      detail: 'Arjun Kapoor uploaded Final Reply to Commercial Suit #482/2023',
      time: '25 mins ago',
      category: 'Drafting',
      user: 'AK',
    },
    {
      action: 'Approval Signed Off',
      detail: 'Radhika Agarwal approved Section 11 Petition for Registry Filing',
      time: '1 hour ago',
      category: 'Approval',
      user: 'RA',
    },
    {
      action: 'Matter Access Assigned',
      detail: 'Pooja Sharma was assigned to Appellate Research in Special Leave Petition #1092',
      time: '3 hours ago',
      category: 'Team Management',
      user: 'SM',
    },
    {
      action: 'Hearing Update Recorded',
      detail: 'Ramesh Singh updated next listing date for NCLT Company Petition #54',
      time: 'Yesterday',
      category: 'Registry Sync',
      user: 'RS',
    },
  ];

  return (
    <section className="firm-activity-section" aria-labelledby="activity-heading">
      <div className="content-container">
        <div className="firm-activity-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">OPERATIONAL VISIBILITY</span>
          </div>
          <h2 id="activity-heading" className="firm-activity-title">
            Know What’s Happening Across Your Firm
          </h2>
          <p className="firm-activity-desc">
            Keep a clearer view of team activity and responsibilities so important work does not get lost.
          </p>
        </div>

        {/* Realistic Activity Timeline Card */}
        <div className="activity-timeline-card">
          <div className="activity-topbar">
            <div className="act-top-left">
              <Eye size={16} color="#C6A15B" />
              <strong className="act-heading">Recent Firm Activity &amp; Updates</strong>
            </div>
            <span className="act-badge">Practice Activity Stream</span>
          </div>

          <div className="activity-items-list">
            {activities.map((act, idx) => (
              <div key={idx} className="activity-row-item">
                <div className="act-user-circle">{act.user}</div>
                <div className="act-body-content">
                  <div className="act-header-line">
                    <strong className="act-action-title">{act.action}</strong>
                    <span className="act-cat-pill">{act.category}</span>
                    <span className="act-time-text">
                      <Clock size={11} />
                      <span>{act.time}</span>
                    </span>
                  </div>
                  <p className="act-detail-text">{act.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="activity-footer">
            <CheckCircle2 size={13} color="#C6A15B" />
            <span>Operational visibility ensures matter deadlines, drafts, and team responsibilities remain transparent across the firm.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
