import React from 'react';
import { FileText, Eye, Clock } from 'lucide-react';
import './EvidencePreviousList.css';

export const EvidencePreviousList: React.FC = () => {
  const previousEvidence = [
    {
      date: '12 August 2026',
      type: 'Evidence Document',
      filename: 'Contract_Amendment_Signed.pdf',
      caseRef: 'ABC Technologies vs. XYZ Ltd.',
      size: '2.4 MB',
      verified: true,
    },
    {
      date: '04 August 2026',
      type: 'Supporting File',
      filename: 'Bank_Statement_Payment_Proof.pdf',
      caseRef: 'Property Title Dispute • CS 88/2025',
      size: '1.1 MB',
      verified: true,
    },
    {
      date: '28 July 2026',
      type: 'Case Attachment',
      filename: 'Board_Resolution_Authorisation.pdf',
      caseRef: 'NCLT Section 9 Defense • CP 312/2026',
      size: '840 KB',
      verified: true,
    },
  ];

  return (
    <section className="evidence-prev-section" aria-labelledby="prev-evidence-heading">
      <div className="content-container">
        <div className="evidence-prev-header">
          <span className="evidence-prev-eyebrow">PREVIOUS EVIDENCE</span>
          <h2 id="prev-evidence-heading" className="evidence-prev-title">
            Find Earlier Evidence When You Need It.
          </h2>
          <p className="evidence-prev-desc">
            Previously added evidence remains available so you can return to it while working on the case.
          </p>
        </div>

        {/* Previous Evidence Card Container */}
        <div className="evidence-prev-card">
          <div className="prev-card-topbar">
            <div className="prev-topbar-left">
              <Clock size={16} color="#C6A15B" />
              <strong className="prev-topbar-title">Historical Evidence Record</strong>
            </div>
            <span className="prev-topbar-badge">3 Archived Records</span>
          </div>

          <div className="prev-items-stack">
            {previousEvidence.map((item, idx) => (
              <div key={idx} className="prev-evidence-row">
                <div className="prev-file-badge">
                  <FileText size={18} color="#C6A15B" />
                </div>

                <div className="prev-meta-col">
                  <div className="prev-row-header">
                    <span className="prev-date-badge">{item.date}</span>
                    <span className="prev-type-pill">{item.type}</span>
                  </div>
                  <strong className="prev-filename-text">{item.filename}</strong>
                  <span className="prev-caseref-text">{item.caseRef}</span>
                </div>

                <div className="prev-action-col">
                  <span className="btn-prev-view">
                    <Eye size={13} />
                    <span>View</span>
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
