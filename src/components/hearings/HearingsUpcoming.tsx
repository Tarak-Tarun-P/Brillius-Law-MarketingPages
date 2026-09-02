import React from 'react';
import { ChevronRight, Clock } from 'lucide-react';
import './HearingsUpcoming.css';

export const HearingsUpcoming: React.FC = () => {
  const upcomingList = [
    {
      day: '15',
      month: 'SEP',
      title: 'ABC Technologies vs. XYZ Ltd.',
      court: 'High Court of Delhi • Court No. 3',
      caseNo: 'CS (COMM) 142/2026',
      status: 'Listed for Arguments',
      priority: 'High',
    },
    {
      day: '22',
      month: 'SEP',
      title: 'Property Title & Injunction Dispute',
      court: 'District Court, Saket • Court No. 2',
      caseNo: 'Civil Suit 88/2025',
      status: 'Interim Stay Application',
      priority: 'Medium',
    },
    {
      day: '04',
      month: 'OCT',
      title: 'Commercial Supply Contract Matter',
      court: 'High Court of Bombay • Commercial Division',
      caseNo: 'Comm. Suit 312/2026',
      status: 'Pleadings & Rejoinder Review',
      priority: 'High',
    },
  ];

  return (
    <section className="hearings-upcoming-section" aria-labelledby="upcoming-hearings-heading">
      <div className="content-container">
        <div className="upcoming-header">
          <span className="upcoming-eyebrow">UPCOMING HEARINGS</span>
          <h2 id="upcoming-hearings-heading" className="upcoming-title">
            Know What's Coming Up.
          </h2>
          <p className="upcoming-desc">
            See the hearings scheduled for your cases and keep important dates easy to find.
          </p>
        </div>

        {/* Realistic Hearing List Visual */}
        <div className="upcoming-list-card">
          <div className="upcoming-list-topbar">
            <div className="topbar-left">
              <Clock size={16} color="#C6A15B" />
              <span className="topbar-title">Scheduled Court Listings</span>
            </div>
            <span className="topbar-count">3 Upcoming Matters</span>
          </div>

          <div className="upcoming-items-stack">
            {upcomingList.map((item, idx) => (
              <div key={idx} className="upcoming-item-row">
                {/* Date Col */}
                <div className="item-date-badge">
                  <span className="item-month">{item.month}</span>
                  <span className="item-day">{item.day}</span>
                </div>

                {/* Info Col */}
                <div className="item-info-col">
                  <div className="item-title-row">
                    <h3 className="item-matter-name">{item.title}</h3>
                    <span className="item-status-tag">{item.status}</span>
                  </div>
                  <div className="item-sub-meta">
                    <span className="item-caseno">{item.caseNo}</span>
                    <span className="meta-sep">•</span>
                    <span className="item-courtname">{item.court}</span>
                  </div>
                </div>

                {/* Action Link */}
                <div className="item-action-col">
                  <span className="action-view-link">
                    <span>View Case</span>
                    <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
