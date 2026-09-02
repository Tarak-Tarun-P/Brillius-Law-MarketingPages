import React from 'react';
import { FolderOpen, FileText, Clock, ExternalLink } from 'lucide-react';
import './DraftingSavedDocs.css';

export const DraftingSavedDocs: React.FC = () => {
  const savedDocs = [
    {
      title: 'Senior Executive Employment Agreement.docx',
      category: 'Employment & Labor',
      lastEdited: 'Edited Today at 04:30 PM',
      status: 'Active Draft',
      author: 'Advocate Sharma',
    },
    {
      title: 'Section 138 NI Act Legal Notice.docx',
      category: 'Banking & Cheque Bounce',
      lastEdited: 'Edited Yesterday at 06:15 PM',
      status: 'Ready for Review',
      author: 'Associate Drafting Team',
    },
    {
      title: 'Commercial Suit Written Statement Draft.docx',
      category: 'Civil & Commercial Litigation',
      lastEdited: 'Edited 28 Aug 2026',
      status: 'In Progress',
      author: 'Senior Partner Chambers',
    },
  ];

  return (
    <section className="drafting-saved-section" aria-labelledby="saved-docs-heading">
      <div className="content-container">
        <div className="saved-header">
          <span className="saved-eyebrow">DOCUMENT CONTINUITY</span>
          <h2 id="saved-docs-heading" className="saved-title">
            Come Back to Your Documents.
          </h2>
          <p className="saved-desc">
            Open a previously saved document and continue drafting or formatting right where you left off.
          </p>
        </div>

        {/* Saved Documents Directory Card */}
        <div className="saved-docs-card">
          <div className="saved-card-topbar">
            <div className="saved-topbar-left">
              <FolderOpen size={16} color="#C6A15B" />
              <strong className="saved-topbar-title">My Saved Documents // Drafting Lab Workspace</strong>
            </div>
            <span className="saved-topbar-badge">3 Active Documents</span>
          </div>

          <div className="saved-items-list">
            {savedDocs.map((doc, idx) => (
              <div key={idx} className="saved-doc-row">
                <div className="doc-icon-box">
                  <FileText size={18} color="#C6A15B" />
                </div>

                <div className="doc-details-col">
                  <div className="doc-top-line">
                    <span className="doc-cat-pill">{doc.category}</span>
                    <span className="doc-status-tag">{doc.status}</span>
                  </div>
                  <strong className="doc-title-text">{doc.title}</strong>
                  <div className="doc-meta-line">
                    <Clock size={12} color="#94A3B8" />
                    <span>{doc.lastEdited}</span>
                    <span className="doc-dot">•</span>
                    <span>By {doc.author}</span>
                  </div>
                </div>

                <div className="doc-action-col">
                  <span className="btn-open-doc">
                    <ExternalLink size={12} />
                    <span>Open in Drafting Lab</span>
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
