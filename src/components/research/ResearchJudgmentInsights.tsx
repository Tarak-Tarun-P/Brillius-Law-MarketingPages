import React, { useState } from 'react';
import {
  FileText,
  Scale,
  HelpCircle,
  Users2,
  Activity,
  Layers,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import './ResearchJudgmentInsights.css';

type InsightTab =
  | 'summary'
  | 'ratio'
  | 'issues'
  | 'arguments'
  | 'treatment'
  | 'precedents';

export const ResearchJudgmentInsights: React.FC = () => {
  const [activeTab, setActiveTab] = useState<InsightTab>('ratio');

  return (
    <section className="judgment-insights-section" aria-labelledby="insights-heading">
      <div className="content-container">
        {/* Section Header */}
        <div className="insights-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">JUDGMENT INSIGHTS</span>
          </div>
          <h2 id="insights-heading" className="insights-title">
            Understand a Long Judgment Faster.
          </h2>
          <p className="insights-desc">
            Get a clearer view of a judgment's key points without having to work through every page before you know where to look.
          </p>
        </div>

        {/* Realistic Judgment Analysis Workspace */}
        <div className="insights-workspace-card">
          {/* Top Bar: Case Identifier & Full Text CTA */}
          <div className="insights-case-banner">
            <div className="case-banner-left">
              <span className="case-badge">Supreme Court of India</span>
              <strong className="case-banner-title">
                Ameer Minhaj v. Dierdre Elizabeth (Wright) Steen &amp; Ors.
              </strong>
              <span className="case-banner-citation">(2018) 7 SCC 639</span>
            </div>
            <button type="button" className="btn-access-original">
              <span>View Original Judgment</span>
              <ExternalLink size={12} />
            </button>
          </div>

          {/* Navigation Tabs for 6 Insight Categories */}
          <div className="insights-nav-row" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'summary'}
              className={`insight-nav-btn ${activeTab === 'summary' ? 'active' : ''}`}
              onClick={() => setActiveTab('summary')}
            >
              <FileText size={14} />
              <span>Executive Summary</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'ratio'}
              className={`insight-nav-btn ${activeTab === 'ratio' ? 'active' : ''}`}
              onClick={() => setActiveTab('ratio')}
            >
              <Scale size={14} />
              <span>Ratio Decidendi</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'issues'}
              className={`insight-nav-btn ${activeTab === 'issues' ? 'active' : ''}`}
              onClick={() => setActiveTab('issues')}
            >
              <HelpCircle size={14} />
              <span>Key Issues</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'arguments'}
              className={`insight-nav-btn ${activeTab === 'arguments' ? 'active' : ''}`}
              onClick={() => setActiveTab('arguments')}
            >
              <Users2 size={14} />
              <span>Party Arguments</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'treatment'}
              className={`insight-nav-btn ${activeTab === 'treatment' ? 'active' : ''}`}
              onClick={() => setActiveTab('treatment')}
            >
              <Activity size={14} />
              <span>Treatment Status</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'precedents'}
              className={`insight-nav-btn ${activeTab === 'precedents' ? 'active' : ''}`}
              onClick={() => setActiveTab('precedents')}
            >
              <Layers size={14} />
              <span>Similar Precedents</span>
            </button>
          </div>

          {/* Insight Content Panel */}
          <div className="insight-content-panel animate-fade-in" key={activeTab}>
            {activeTab === 'summary' && (
              <div className="insight-pane-body">
                <h3 className="pane-title">Executive Summary</h3>
                <p className="pane-lead">
                  A plain-language overview of the dispute, proceedings, and final ruling:
                </p>
                <div className="summary-blocks">
                  <div className="summary-block-item">
                    <strong className="block-label">THE DISPUTE:</strong>
                    <p className="block-text">
                      Appellant filed a suit for specific performance based on an unregistered agreement to sell. The trial court and High Court rejected the document due to lack of mandatory registration under Section 17(1A) of the Registration Act.
                    </p>
                  </div>
                  <div className="summary-block-item">
                    <strong className="block-label">THE SUPREME COURT RULING:</strong>
                    <p className="block-text">
                      The Supreme Court reversed the High Court, clarifying that while an unregistered agreement cannot protect possession under Section 53A of the Transfer of Property Act, it is admissible as evidence of the contract in a suit for specific performance under the Proviso to Section 49.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ratio' && (
              <div className="insight-pane-body">
                <h3 className="pane-title">Ratio Decidendi</h3>
                <p className="pane-lead">
                  The core legal rule and binding proposition established by the court:
                </p>
                <div className="ratio-highlight-card">
                  <div className="ratio-quote-icon">"</div>
                  <blockquote className="ratio-quote-text">
                    An unregistered agreement to sell is admissible in evidence in a suit for specific performance under the Proviso to Section 49 of the Registration Act, 1908, notwithstanding Section 17(1A). Non-registration merely disables the vendee from asserting the defense of part performance under Section 53A of the Transfer of Property Act, 1882.
                  </blockquote>
                </div>
                <div className="bench-attribution">
                  <span>Bench: Hon'ble Kurian Joseph and Sanjay Kishan Kaul, JJ.</span>
                </div>
              </div>
            )}

            {activeTab === 'issues' && (
              <div className="insight-pane-body">
                <h3 className="pane-title">Key Legal Issues</h3>
                <p className="pane-lead">
                  The main legal questions framed and resolved by the court:
                </p>
                <div className="issues-list">
                  <div className="issue-item">
                    <span className="issue-num">Issue 01</span>
                    <p className="issue-question">
                      Whether an agreement to sell containing a delivery of possession clause is inadmissible in evidence for want of registration under Section 17(1A) of the Registration Act?
                    </p>
                  </div>
                  <div className="issue-item">
                    <span className="issue-num">Issue 02</span>
                    <p className="issue-question">
                      Whether the Proviso to Section 49 operates as an exception allowing an unregistered agreement to be received as evidence of contract in specific performance suits?
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'arguments' && (
              <div className="insight-pane-body">
                <h3 className="pane-title">Party Arguments</h3>
                <p className="pane-lead">
                  A structured view of key submissions presented by respective counsel:
                </p>
                <div className="arguments-split-grid">
                  <div className="arg-box appellant-box">
                    <span className="arg-side-badge">Appellant (Buyer)</span>
                    <ul className="arg-bullets">
                      <li>Section 49 Proviso explicitly preserves the right to prove the contract in specific performance suits.</li>
                      <li>Non-registration only restricts claiming equitable protection of possession under Section 53A.</li>
                    </ul>
                  </div>
                  <div className="arg-box respondent-box">
                    <span className="arg-side-badge">Respondent (Vendor)</span>
                    <ul className="arg-bullets">
                      <li>Agreement clearly mentions delivery of possession and attracts mandatory registration under Section 17(1A).</li>
                      <li>In the absence of registration, no relief based on the contract could be granted.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'treatment' && (
              <div className="insight-pane-body">
                <h3 className="pane-title">Treatment Status</h3>
                <p className="pane-lead">
                  How this decision has been cited and applied in subsequent proceedings:
                </p>
                <div className="treatment-chips-display">
                  <div className="treatment-status-item followed">
                    <span className="status-label">Followed By</span>
                    <strong className="status-case">High Court of Karnataka (2022)</strong>
                    <span className="status-note">Applied on the admissibility of unregistered sale deeds for specific relief.</span>
                  </div>
                  <div className="treatment-status-item applied">
                    <span className="status-label">Applied By</span>
                    <strong className="status-case">High Court of Delhi (2021)</strong>
                    <span className="status-note">Cited regarding the interplay between § 49 Proviso and § 53A TPA.</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'precedents' && (
              <div className="insight-pane-body">
                <h3 className="pane-title">Similar Precedents &amp; Authorities</h3>
                <p className="pane-lead">
                  Decisions addressing related statutory principles and contract interpretation:
                </p>
                <div className="precedents-list">
                  <div className="precedent-item-card">
                    <strong className="prec-case-name">K.B. Saha &amp; Sons Pvt. Ltd. v. Development Consultant Ltd.</strong>
                    <span className="prec-citation">(2008) 8 SCC 564</span>
                    <p className="prec-snippet">Collateral purpose admissibility principles under Section 49 Registration Act.</p>
                  </div>
                  <div className="precedent-item-card">
                    <strong className="prec-case-name">Ramesh Chand Ardawatiya v. Anil Panjwani</strong>
                    <span className="prec-citation">(2003) 7 SCC 350</span>
                    <p className="prec-snippet">Possession protection under Section 53A Transfer of Property Act.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Practice Notice */}
          <div className="insights-footer-note">
            <CheckCircle2 size={13} color="#C6A15B" />
            <span>
              Judgment insights help you navigate key legal questions quickly. The original, full-text judgment is always available for complete review.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
