import React, { useState } from 'react';
import { Scale, Calendar, Clock, User, FileText } from 'lucide-react';
import './CasesDetailVisual.css';

export const CasesDetailVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'info' | 'hearings' | 'parties' | 'timeline'>('info');

  return (
    <section className="cases-detail-section" aria-labelledby="case-detail-heading">
      <div className="content-container">
        <div className="cases-detail-header">
          <span className="detail-eyebrow">CASE PROFILE & DETAIL</span>
          <h2 id="case-detail-heading" className="detail-title">
            See the Full Picture of a Case.
          </h2>
          <p className="detail-desc">
            Open a case to see the information connected to that matter in one place — from court details and client links to upcoming hearings and chronological history.
          </p>
        </div>

        {/* Case Detail Mockup Canvas */}
        <div className="case-detail-canvas">
          {/* Top Banner: Case Master Title */}
          <div className="case-master-banner">
            <div className="case-title-left">
              <div className="case-avatar-box">
                <Scale size={26} color="#C6A15B" />
              </div>
              <div className="case-header-text">
                <div className="case-title-tags-row">
                  <h3 className="case-full-title">ABC Technologies vs. XYZ Ltd.</h3>
                  <span className="case-status-badge badge-active">Active Matter</span>
                  <span className="case-priority-badge badge-high">High Priority</span>
                </div>
                <p className="case-sub-info">
                  CS (COMM) 142/2026 • High Court of Delhi • Lead Counsel: Adv. R. K. Sharma
                </p>
              </div>
            </div>

            <div className="case-quick-meta-box">
              <div className="quick-meta-item">
                <span className="qm-label">Client</span>
                <strong className="qm-val">ABC Technologies</strong>
              </div>
              <div className="quick-meta-item">
                <span className="qm-label">Next Hearing</span>
                <strong className="qm-val text-gold">15 Sep 2026</strong>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="case-tabs-bar" role="tablist">
            <button
              type="button"
              className={`case-tab-btn ${activeTab === 'info' ? 'active-case-tab' : ''}`}
              onClick={() => setActiveTab('info')}
              role="tab"
              aria-selected={activeTab === 'info'}
            >
              <FileText size={14} />
              <span>Case Details</span>
            </button>

            <button
              type="button"
              className={`case-tab-btn ${activeTab === 'hearings' ? 'active-case-tab' : ''}`}
              onClick={() => setActiveTab('hearings')}
              role="tab"
              aria-selected={activeTab === 'hearings'}
            >
              <Calendar size={14} />
              <span>Hearings (Upcoming)</span>
            </button>

            <button
              type="button"
              className={`case-tab-btn ${activeTab === 'parties' ? 'active-case-tab' : ''}`}
              onClick={() => setActiveTab('parties')}
              role="tab"
              aria-selected={activeTab === 'parties'}
            >
              <User size={14} />
              <span>Related Parties & Client</span>
            </button>

            <button
              type="button"
              className={`case-tab-btn ${activeTab === 'timeline' ? 'active-case-tab' : ''}`}
              onClick={() => setActiveTab('timeline')}
              role="tab"
              aria-selected={activeTab === 'timeline'}
            >
              <Clock size={14} />
              <span>Case History</span>
            </button>
          </div>

          {/* Tab Pane Body */}
          <div className="case-tab-pane-content">
            {/* 1. Case Details Pane */}
            {activeTab === 'info' && (
              <div className="case-fields-grid">
                <div className="field-card">
                  <span className="f-label">Court / Forum</span>
                  <strong className="f-value">High Court of Delhi (Commercial Division)</strong>
                </div>
                <div className="field-card">
                  <span className="f-label">Case Number & Year</span>
                  <strong className="f-value">CS (COMM) No. 142 of 2026</strong>
                </div>
                <div className="field-card">
                  <span className="f-label">Category & Stage</span>
                  <strong className="f-value">Commercial Suit • Final Arguments</strong>
                </div>
                <div className="field-card">
                  <span className="f-label">Presiding Bench</span>
                  <strong className="f-value">Court No. 3, Single Bench</strong>
                </div>
              </div>
            )}

            {/* 2. Hearings Pane */}
            {activeTab === 'hearings' && (
              <div className="hearing-display-pane">
                <div className="upcoming-hearing-card">
                  <div className="hearing-date-badge">
                    <span className="h-month">SEP</span>
                    <span className="h-day">15</span>
                  </div>
                  <div className="hearing-details-col">
                    <div className="h-top-row">
                      <strong className="h-title">Interim Injunction & Oral Arguments</strong>
                      <span className="h-badge-time">10:30 AM • Item No. 18</span>
                    </div>
                    <p className="h-desc">
                      Scheduled before Hon'ble Single Bench in Courtroom 3. Senior counsel bench brief prepared.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 3. Related Parties Pane */}
            {activeTab === 'parties' && (
              <div className="parties-display-pane">
                <div className="party-card party-plaintiff">
                  <span className="party-role">PLAINTIFF / CLIENT</span>
                  <strong className="party-name">ABC Technologies Pvt. Ltd.</strong>
                  <span className="party-sub">Represented by Adv. R. K. Sharma</span>
                </div>
                <div className="party-card party-defendant">
                  <span className="party-role">DEFENDANT / OPPOSING PARTY</span>
                  <strong className="party-name">XYZ Ltd. & Ors.</strong>
                  <span className="party-sub">Represented by Opposing Counsel</span>
                </div>
              </div>
            )}

            {/* 4. Case History Pane */}
            {activeTab === 'timeline' && (
              <div className="history-timeline-pane">
                <div className="history-step done">
                  <div className="step-dot" />
                  <div className="step-text">
                    <span className="step-date">10 Jun 2026</span>
                    <strong>Plaint Filed & Diary Number Issued</strong>
                    <p>Formal institution of commercial suit in Delhi High Court registry.</p>
                  </div>
                </div>

                <div className="history-step done">
                  <div className="step-dot" />
                  <div className="step-text">
                    <span className="step-date">28 Jul 2026</span>
                    <strong>Written Statement & Rejoinder Affidavits Exchanged</strong>
                    <p>Counter-affidavits compiled and verified on record.</p>
                  </div>
                </div>

                <div className="history-step active-next">
                  <div className="step-dot dot-gold" />
                  <div className="step-text">
                    <span className="step-date text-gold-dark">15 Sep 2026 (Upcoming)</span>
                    <strong>Oral Arguments on Interim Application</strong>
                    <p>Item No. 18 listed before Hon'ble Single Bench.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
