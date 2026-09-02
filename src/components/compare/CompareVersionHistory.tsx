import React, { useState } from 'react';
import { History, GitCompare, FileText, ArrowRight } from 'lucide-react';
import './CompareVersionHistory.css';

export const CompareVersionHistory: React.FC = () => {
  const [selectedV1, setSelectedV1] = useState('v1');
  const [selectedV2, setSelectedV2] = useState('v3');

  const versions = [
    {
      id: 'v3',
      title: 'Version 3 — Current Draft',
      date: 'Edited Today, 04:30 PM',
      author: 'Senior Advocate Sharma',
      changes: '4 active modifications',
      isCurrent: true,
    },
    {
      id: 'v2',
      title: 'Version 2 — Partner Review',
      date: 'Saved 28 Aug 2026',
      author: 'Partner Chambers',
      changes: 'Commercial clause adjustments',
      isCurrent: false,
    },
    {
      id: 'v1',
      title: 'Version 1 — Initial Baseline',
      date: 'Saved 24 Aug 2026',
      author: 'Associate Drafting Team',
      changes: 'Baseline terms approved',
      isCurrent: false,
    },
  ];

  return (
    <section className="compare-history-section" aria-labelledby="history-heading">
      <div className="content-container">
        <div className="history-header">
          <span className="history-eyebrow">VERSION SELECTION</span>
          <h2 id="history-heading" className="history-title">
            Compare Different Saved Versions.
          </h2>
          <p className="history-desc">
            Choose any two versions from your saved document timeline to understand the exact evolution of your agreements.
          </p>
        </div>

        {/* Version History Selector Card */}
        <div className="version-history-card">
          <div className="history-card-topbar">
            <div className="history-topbar-left">
              <History size={16} color="#C6A15B" />
              <strong className="history-topbar-title">Employment Agreement // Saved Version Timeline</strong>
            </div>
            <span className="history-topbar-badge">3 Saved Milestones</span>
          </div>

          <div className="version-timeline-list">
            {versions.map((ver) => {
              const isBaseline = selectedV1 === ver.id;
              const isTarget = selectedV2 === ver.id;

              return (
                <div
                  key={ver.id}
                  className={`version-timeline-item ${isBaseline || isTarget ? 'selected-version-row' : ''}`}
                >
                  <div className="ver-icon-col">
                    <FileText size={18} color={ver.isCurrent ? '#C6A15B' : '#091526'} />
                  </div>

                  <div className="ver-info-col">
                    <div className="ver-title-row">
                      <strong className="ver-title-text">{ver.title}</strong>
                      {ver.isCurrent && <span className="ver-current-pill">Live Draft</span>}
                    </div>
                    <div className="ver-meta-row">
                      <span>{ver.date}</span>
                      <span className="ver-dot">•</span>
                      <span>By {ver.author}</span>
                      <span className="ver-dot">•</span>
                      <span className="ver-changes-note">{ver.changes}</span>
                    </div>
                  </div>

                  <div className="ver-actions-col">
                    <button
                      type="button"
                      className={`btn-select-ver ${isBaseline ? 'active-baseline' : ''}`}
                      onClick={() => setSelectedV1(ver.id)}
                    >
                      {isBaseline ? 'Baseline (vA) ✓' : 'Set Baseline'}
                    </button>
                    <button
                      type="button"
                      className={`btn-select-ver ${isTarget ? 'active-target' : ''}`}
                      onClick={() => setSelectedV2(ver.id)}
                    >
                      {isTarget ? 'Compare (vB) ✓' : 'Set Target'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="history-card-footer">
            <span className="compare-status-prompt">
              Comparing <strong>{versions.find(v => v.id === selectedV1)?.title}</strong> with <strong>{versions.find(v => v.id === selectedV2)?.title}</strong>
            </span>
            <span className="btn-footer-compare">
              <GitCompare size={14} />
              <span>Compare Selected Versions</span>
              <ArrowRight size={13} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
