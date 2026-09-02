import React from 'react';
import { Clock, BookOpen, FileText, ArrowRight } from 'lucide-react';
import './JournalContinue.css';

export const JournalContinue: React.FC = () => {
  const recentItems = [
    {
      type: 'STATUTORY PROVISION',
      title: 'The Indian Contract Act, 1872 — Section 10',
      lastActivity: 'Last viewed Yesterday at 04:30 PM',
      snippet: 'Reviewed essential elements of valid contract formation and capacity requirements.',
      action: 'Continue Reading',
      icon: <BookOpen size={18} color="#C6A15B" />,
    },
    {
      type: 'JOURNAL NOTE',
      title: 'Commercial Lease Drafting & Indemnity Notes',
      lastActivity: 'Last updated 2 days ago',
      snippet: 'Personal notes on tenant utility liability clauses and notice period structuring.',
      action: 'Open Note',
      icon: <FileText size={18} color="#091526" />,
    },
    {
      type: 'CASE PREPARATION',
      title: 'Section 138 NI Act Cheque Dishonour Arguments',
      lastActivity: 'Last updated 3 days ago',
      snippet: 'Key points compiled from Supreme Court precedents on statutory notice delivery.',
      action: 'Open Note',
      icon: <FileText size={18} color="#C6A15B" />,
    },
  ];

  return (
    <section className="journal-continue-section" aria-labelledby="continue-heading">
      <div className="content-container">
        <div className="continue-header">
          <span className="continue-eyebrow">CONTINUE WHERE YOU LEFT OFF</span>
          <h2 id="continue-heading" className="continue-title">
            Pick Up Where You Left Off.
          </h2>
          <p className="continue-desc">
            Return to your active notes, saved provisions, and bookmarked research right where you paused, without losing your train of thought.
          </p>
        </div>

        {/* Recent Activity Card Container */}
        <div className="continue-card-wrapper">
          <div className="continue-topbar">
            <div className="continue-topbar-left">
              <Clock size={16} color="#C6A15B" />
              <strong className="continue-topbar-title">Recent Workspace Activity</strong>
            </div>
            <span className="continue-topbar-badge">Ready to Resume</span>
          </div>

          <div className="continue-list">
            {recentItems.map((item, idx) => (
              <div key={idx} className="continue-item-row">
                <div className="continue-icon-box">{item.icon}</div>

                <div className="continue-info-col">
                  <div className="continue-meta-row">
                    <span className="continue-type-pill">{item.type}</span>
                    <span className="continue-time"><Clock size={11} /> {item.lastActivity}</span>
                  </div>
                  <strong className="continue-item-title">{item.title}</strong>
                  <p className="continue-item-desc">{item.snippet}</p>
                </div>

                <div className="continue-action-col">
                  <span className="btn-resume-item">
                    <span>{item.action}</span>
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
