import React from 'react';
import { GitBranch, Clock, User, CheckCircle2 } from 'lucide-react';
import './CaseDraftsVersionHistory.css';

export const CaseDraftsVersionHistory: React.FC = () => {
  const versions = [
    {
      version: 'v3.0 (Final)',
      author: 'Senior Advocate S. K. Mehta',
      time: 'Today, 04:15 PM',
      summary: 'Incorporated final Senior Counsel edits on limitation defense and prayer clauses.',
      status: 'Approved & Finalized',
      statusClass: 'status-approved',
      current: true,
    },
    {
      version: 'v2.1',
      author: 'Arjun Kapoor (Associate)',
      time: 'Yesterday, 06:30 PM',
      summary: 'Added Exhibit D-1 to D-4 documents and strengthened para-wise denials on defect liability.',
      status: 'In Review',
      statusClass: 'status-review',
    },
    {
      version: 'v1.0 (Initial Draft)',
      author: 'AI Drafting Assistant + Arjun Kapoor',
      time: '18 Oct 2023, 11:20 AM',
      summary: 'Generated baseline draft from Order VIII template and initial client case facts.',
      status: 'Baseline Created',
      statusClass: 'status-baseline',
    },
  ];

  return (
    <section className="casedrafts-version-section" aria-labelledby="version-heading">
      <div className="content-container">
        <div className="version-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">AUDITABLE DRAFT EVOLUTION</span>
          </div>
          <h2 id="version-heading" className="version-title">
            Keep Every Version Within Reach.
          </h2>
          <p className="version-desc">
            Save your changes as versions so you can review how a draft developed and return to an earlier version when needed.
          </p>
        </div>

        {/* Timeline Visualization Card */}
        <div className="version-timeline-card">
          <div className="v-topbar">
            <div className="v-title-group">
              <GitBranch size={16} color="#C6A15B" />
              <strong className="v-heading">Draft Version History &amp; Revisions</strong>
            </div>
            <span className="v-meta-badge">3 Tracked Iterations</span>
          </div>

          <div className="v-timeline-body">
            {versions.map((ver, idx) => (
              <div key={idx} className="v-timeline-node">
                <div className="v-marker-col">
                  <div className={`v-marker ${ver.current ? 'current-v-marker' : ''}`} />
                  {idx < versions.length - 1 && <div className="v-vertical-line" />}
                </div>

                <div className="v-node-content">
                  <div className="v-node-header">
                    <div className="v-ver-group">
                      <strong className="v-num">{ver.version}</strong>
                      <span className={`v-status-pill ${ver.statusClass}`}>{ver.status}</span>
                    </div>
                    <div className="v-meta-right">
                      <span className="v-author"><User size={11} /> {ver.author}</span>
                      <span className="v-time"><Clock size={11} /> {ver.time}</span>
                    </div>
                  </div>

                  <p className="v-summary-text">{ver.summary}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="v-footer">
            <CheckCircle2 size={13} color="#C6A15B" />
            <span>Complete version tracking allows your team to restore or reference earlier draft states anytime.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
