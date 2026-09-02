import React from 'react';
import { Clock, Search, ArrowRight } from 'lucide-react';
import './ResearchHistory.css';

export const ResearchHistory: React.FC = () => {
  const recentSearches = [
    {
      query: 'Specific Performance & Section 49 Unregistered Agreement',
      date: 'Researched Yesterday at 03:20 PM',
      resultsCount: '14 relevant judgments found',
      lastViewed: 'Ameer Minhaj v. Dierdre Steen',
    },
    {
      query: 'Section 438 CrPC Anticipatory Bail Conditions & Custodial Interrogation',
      date: 'Researched 2 days ago',
      resultsCount: '22 relevant judgments found',
      lastViewed: 'Sushila Aggarwal Constitution Bench',
    },
    {
      query: 'Section 34 Arbitration Act Patent Illegality & Public Policy',
      date: 'Researched 4 days ago',
      resultsCount: '18 relevant judgments found',
      lastViewed: 'Associate Builders v. DDA',
    },
  ];

  return (
    <section className="research-history-section" aria-labelledby="history-heading">
      <div className="content-container">
        <div className="history-header">
          <span className="history-eyebrow">YOUR RESEARCH</span>
          <h2 id="history-heading" className="history-title">
            Continue Your Research.
          </h2>
          <p className="history-desc">
            Return to research threads you have already explored and save useful authorities directly into your personal workspace.
          </p>
        </div>

        {/* History List Visual Card */}
        <div className="history-card-wrapper">
          <div className="history-topbar">
            <div className="h-topbar-left">
              <Clock size={16} color="#C6A15B" />
              <strong className="h-topbar-title">Recent Research Sessions</strong>
            </div>
            <span className="h-topbar-badge">Recent Inquiries</span>
          </div>

          <div className="history-list">
            {recentSearches.map((item, idx) => (
              <div key={idx} className="history-item-row">
                <div className="history-icon-box">
                  <Search size={16} color="#091526" />
                </div>

                <div className="history-info-col">
                  <strong className="history-query-text">{item.query}</strong>
                  <div className="history-meta-row">
                    <span className="h-date-str"><Clock size={11} /> {item.date}</span>
                    <span className="h-dot">•</span>
                    <span className="h-count-str">{item.resultsCount}</span>
                    <span className="h-dot">•</span>
                    <span className="h-last-viewed">Last viewed: {item.lastViewed}</span>
                  </div>
                </div>

                <div className="history-action-col">
                  <span className="btn-resume-search">
                    <span>Resume</span>
                    <ArrowRight size={13} />
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
