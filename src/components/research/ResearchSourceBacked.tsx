import React from 'react';
import { ArrowDown, FileText } from 'lucide-react';
import './ResearchSourceBacked.css';

export const ResearchSourceBacked: React.FC = () => {
  const sources = [
    {
      title: 'Commercial Petition',
      page: 'Page 8',
      type: 'Pleading',
      excerpt: 'Para 12: "...the defendant purportedly failed to deliver the software release build by the scheduled April timeline..."',
    },
    {
      title: 'Interim Order Sheet',
      page: 'Page 14',
      type: 'Court Order',
      excerpt: 'Directions: "Court directed plaintiff to place on record the bilateral milestone sign-off sheets..."',
    },
    {
      title: 'Contract Schedule Ex. P-4',
      page: 'Page 21',
      type: 'Documentary Evidence',
      excerpt: 'Clause 9.1: "Formal written acceptance shall precede the issuance of final payment tranches."',
    },
  ];

  return (
    <section className="source-backed-section" aria-labelledby="source-backed-heading">
      <div className="content-container">
        <div className="source-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">SOURCE VERIFICATION</span>
          </div>
          <h2 id="source-backed-heading" className="source-title">
            See Where the Answer Comes From.
          </h2>
          <p className="source-desc">
            Answers about a case point you directly back to the specific documents and page numbers they are based on, so you can verify the primary record yourself.
          </p>
        </div>

        {/* 3-Stage Source Provenance Flow */}
        <div className="source-flow-wrapper">
          {/* Stage 1: Question */}
          <div className="flow-step-box step-question">
            <div className="step-tag-row">
              <span className="step-badge">STEP 01 // QUESTION</span>
            </div>
            <strong className="step-title">"What are the weak points in the plaintiff's claim?"</strong>
            <p className="step-sub">Inquiry posed within matter workspace.</p>
          </div>

          <div className="flow-arrow-down">
            <ArrowDown size={18} color="#C6A15B" />
          </div>

          {/* Stage 2: Generated Answer */}
          <div className="flow-step-box step-answer">
            <div className="step-tag-row">
              <span className="step-badge gold-badge">STEP 02 // GROUNDED ANSWER</span>
            </div>
            <p className="step-answer-body">
              "The record shows that the milestone acceptance was never executed in writing as required by Clause 9.1 of the agreement, and the court's interim directions specifically observed this evidentiary omission."
            </p>
          </div>

          <div className="flow-arrow-down">
            <ArrowDown size={18} color="#C6A15B" />
          </div>

          {/* Stage 3: Source Verification Cards */}
          <div className="flow-step-box step-sources">
            <div className="step-tag-row">
              <span className="step-badge sources-badge">STEP 03 // PRIMARY SOURCE CITATIONS</span>
            </div>
            
            <div className="sources-cards-grid">
              {sources.map((s, idx) => (
                <div key={idx} className="source-card-item">
                  <div className="source-card-top">
                    <div className="source-name-group">
                      <FileText size={14} color="#C6A15B" />
                      <strong className="source-doc-title">{s.title}</strong>
                    </div>
                    <span className="source-page-pill">{s.page}</span>
                  </div>
                  <span className="source-type-label">{s.type}</span>
                  <p className="source-excerpt-text">{s.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
