import React from 'react';
import { BookOpen, Scale, ArrowDown, ExternalLink } from 'lucide-react';
import './ResearchReadSource.css';

export const ResearchReadSource: React.FC = () => {
  return (
    <section className="research-source-section" aria-labelledby="read-source-heading">
      <div className="content-container">
        <div className="source-header">
          <span className="source-eyebrow">READ THE SOURCE</span>
          <h2 id="read-source-heading" className="source-title">
            Go From the Result to the Decision.
          </h2>
          <p className="source-desc">
            Open the underlying judgment, review the exact judicial reasoning, and verify the holding yourself rather than relying on unverified summaries.
          </p>
        </div>

        {/* 3-Stage Reading Path Banner */}
        <div className="source-flow-strip">
          <div className="s-flow-step">
            <span className="s-step-num">01</span>
            <span className="s-step-text">SEARCH RESULT</span>
          </div>
          <ArrowDown size={14} color="#C6A15B" className="s-step-arrow" />
          <div className="s-flow-step">
            <span className="s-step-num">02</span>
            <span className="s-step-text">UNDERLYING SOURCE</span>
          </div>
          <ArrowDown size={14} color="#C6A15B" className="s-step-arrow" />
          <div className="s-flow-step">
            <span className="s-step-num">03</span>
            <span className="s-step-text">COUNSEL REVIEW</span>
          </div>
        </div>

        {/* Detailed Judgment Source Card */}
        <div className="source-detail-card">
          <div className="source-topbar">
            <div className="source-topbar-left">
              <Scale size={16} color="#C6A15B" />
              <strong className="source-topbar-title">Authoritative Judicial Source // Supreme Court of India</strong>
            </div>
            <span className="source-topbar-badge">Official Law Report</span>
          </div>

          <div className="source-body">
            <div className="source-case-header">
              <div>
                <span className="source-bench-label">BENCH: KURIAN JOSEPH, SANJAY KISHAN KAUL, JJ. • DATE OF DECISION: 04 JULY 2018</span>
                <h3 className="source-title-text">Ameer Minhaj v. Dierdre Elizabeth (Wright) Steen &amp; Ors.</h3>
                <span className="source-cit-text">Civil Appeal No. 2838 of 2018 • (2018) 7 SCC 639</span>
              </div>
            </div>

            {/* Paragraph / Passage Excerpt */}
            <div className="source-passage-box">
              <span className="passage-tag">PARAGRAPH 10 // RATIO DECIDENDI</span>
              <p className="passage-full-text">
                "In the present case, the suit filed by the appellant is for specific performance of the agreement of sale. The proviso to Section 49 clearly enables the document to be received as evidence of a contract in a suit for specific performance under Chapter II of the Specific Relief Act, 1877 or as evidence of part performance of a contract for the purposes of Section 53A of the Transfer of Property Act, 1882..."
              </p>
            </div>

            {/* Connected Statutory Provisions */}
            <div className="source-statute-row">
              <div className="source-statute-pill">
                <BookOpen size={12} color="#C6A15B" />
                <span>Section 49 Proviso — The Registration Act, 1908</span>
              </div>
              <div className="source-statute-pill">
                <BookOpen size={12} color="#C6A15B" />
                <span>Section 16 — The Specific Relief Act, 1963</span>
              </div>
              <div className="source-statute-pill">
                <BookOpen size={12} color="#C6A15B" />
                <span>Section 53A — Transfer of Property Act, 1882</span>
              </div>
            </div>

            <div className="source-action-bar">
              <span className="source-notice-text">Source verified against Supreme Court law report records</span>
              <span className="btn-read-full">
                <span>Read Full Judgment Text</span>
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
