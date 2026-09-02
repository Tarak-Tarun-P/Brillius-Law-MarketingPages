import React from 'react';
import { UserCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import './CaseDraftsReviewApproval.css';

export const CaseDraftsReviewApproval: React.FC = () => {
  const reviewStages = [
    {
      stage: '01. Draft Prepared',
      sub: 'Associate completes initial draft with case specifics',
      badge: 'Draft',
      badgeClass: 'badge-draft',
    },
    {
      stage: '02. Senior Review',
      sub: 'Senior Advocate reviews legal grounds and citations',
      badge: 'In Review',
      badgeClass: 'badge-review',
    },
    {
      stage: '03. Feedback / Refinement',
      sub: 'Clarifications added or revision requested if needed',
      badge: 'Revision Requested',
      badgeClass: 'badge-revision',
    },
    {
      stage: '04. Final Approval',
      sub: 'Document approved and cleared for client sign-off',
      badge: 'Approved',
      badgeClass: 'badge-approved',
    },
  ];

  return (
    <section className="casedrafts-review-section" aria-labelledby="review-heading">
      <div className="content-container">
        <div className="review-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">STRUCTURED CHAMBER OVERSIGHT</span>
          </div>
          <h2 id="review-heading" className="review-title">
            Keep Important Drafts Under Review.
          </h2>
          <p className="review-desc">
            Submit drafts for senior review and keep track of whether a document is approved or needs further changes.
          </p>
        </div>

        {/* Review Lifecycle Flow Card */}
        <div className="review-lifecycle-card">
          <div className="review-topbar">
            <div className="r-title-group">
              <UserCheck size={16} color="#C6A15B" />
              <strong className="r-heading">Legal Document Review &amp; Approval Workflow</strong>
            </div>
            <span className="r-badge">Quality Assurance</span>
          </div>

          <div className="review-stages-grid">
            {reviewStages.map((stg, idx) => (
              <div key={idx} className="review-stage-box">
                <div className="stage-top">
                  <span className="stage-step-title">{stg.stage}</span>
                  <span className={`stage-badge ${stg.badgeClass}`}>{stg.badge}</span>
                </div>
                <p className="stage-sub-text">{stg.sub}</p>
              </div>
            ))}
          </div>

          {/* Sample Review Comment Box */}
          <div className="review-comment-sample">
            <div className="comment-head">
              <MessageSquare size={13} color="#C6A15B" />
              <strong className="comment-title">Senior Partner Review Note (S. K. Mehta):</strong>
            </div>
            <p className="comment-body">
              “Draft looks strong on facts. Please ensure we attach the board resolution dated 10.01.2023 under Exhibit D-1 and verify the limitation calculation under Section 14 before finalizing.”
            </p>
          </div>

          <div className="review-footer">
            <CheckCircle2 size={13} color="#C6A15B" />
            <span>Ensures all court submissions undergo proper scrutiny and senior alignment prior to filing.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
