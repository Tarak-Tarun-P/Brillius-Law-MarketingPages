import React from 'react';
import { FileText, Scale, Receipt, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import './FirmApprovalOversight.css';

export const FirmApprovalOversight: React.FC = () => {
  const approvalItems = [
    {
      title: 'Pleadings & Draft Review',
      docName: 'Special Leave Petition (Civil) — Draft v3',
      matter: 'M/s Apex Infrastructure vs State of Karnataka',
      author: 'Drafted by: Arjun Kapoor (Senior Associate)',
      reviewer: 'Reviewer: S. K. Mehta (Senior Partner)',
      status: 'Ready for Review',
      statusClass: 'status-pending',
      icon: <FileText size={18} />,
    },
    {
      title: 'Court Submissions & Applications',
      docName: 'Section 11 Arbitration Application & Interim Relief',
      matter: 'Confidential Commercial Arbitration 2023',
      author: 'Drafted by: Pooja Sharma (Associate)',
      reviewer: 'Reviewer: Radhika Agarwal (Partner)',
      status: 'Approved for Filing',
      statusClass: 'status-approved',
      icon: <Scale size={18} />,
    },
    {
      title: 'Fee Structure & Invoicing Approval',
      docName: 'Retainer Agreement & Senior Appearance Quote',
      matter: 'Corporate Advisory Mandate #480',
      author: 'Prepared by: Finance Desk',
      reviewer: 'Reviewer: Managing Partner Desk',
      status: 'Approved',
      statusClass: 'status-approved',
      icon: <Receipt size={18} />,
    },
  ];

  return (
    <section className="firm-approval-section" aria-labelledby="approval-heading">
      <div className="content-container">
        <div className="approval-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">QUALITY ASSURANCE &amp; CONTROL</span>
          </div>
          <h2 id="approval-heading" className="approval-title">
            Keep Important Work Under Review
          </h2>
          <p className="approval-desc">
            Give senior lawyers the visibility they need while allowing associates and junior team members to keep work moving.
          </p>
        </div>

        <div className="approval-cards-grid">
          {approvalItems.map((item, idx) => (
            <div key={idx} className="approval-item-card">
              <div className="card-top-header">
                <div className="appr-icon-box">{item.icon}</div>
                <span className={`approval-status-tag ${item.statusClass}`}>
                  {item.statusClass === 'status-approved' ? (
                    <CheckCircle2 size={12} />
                  ) : (
                    <Clock size={12} />
                  )}
                  <span>{item.status}</span>
                </span>
              </div>

              <h3 className="appr-card-title">{item.title}</h3>
              <strong className="appr-doc-name">{item.docName}</strong>
              <span className="appr-matter-name">{item.matter}</span>

              <div className="approval-workflow-box">
                <div className="author-line">
                  <span className="dot-bullet" />
                  <span className="role-text">{item.author}</span>
                </div>
                <div className="flow-down-arrow">
                  <ArrowRight size={11} color="#C6A15B" />
                </div>
                <div className="reviewer-line">
                  <span className="dot-bullet gold-bullet" />
                  <span className="role-text highlight-reviewer">{item.reviewer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
