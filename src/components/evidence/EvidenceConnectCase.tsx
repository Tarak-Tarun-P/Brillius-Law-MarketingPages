import React from 'react';
import { Scale, FileText, Image, FileArchive, Eye } from 'lucide-react';
import './EvidenceConnectCase.css';

export const EvidenceConnectCase: React.FC = () => {
  const evidenceItems = [
    {
      id: 'doc-a',
      title: 'Contract_Amendment_Signed.pdf',
      type: 'Document A',
      category: 'Primary Contract Agreement',
      date: 'Added 12 August 2026',
      icon: <FileText size={18} color="#C6A15B" />,
    },
    {
      id: 'file-b',
      title: 'Site_Inspection_Photographs.zip',
      type: 'Image / File B',
      category: 'Physical Site & Exhibit Photos',
      date: 'Added 04 August 2026',
      icon: <Image size={18} color="#091526" />,
    },
    {
      id: 'ref-c',
      title: 'Email_Correspondences_Annexure_B.pdf',
      type: 'Reference C',
      category: 'Communication Exchange & Notices',
      date: 'Added 28 July 2026',
      icon: <FileArchive size={18} color="#091526" />,
    },
  ];

  return (
    <section className="evidence-connect-section" aria-labelledby="connect-case-heading">
      <div className="content-container">
        <div className="connect-header">
          <span className="connect-eyebrow">CASE LINKING</span>
          <h2 id="connect-case-heading" className="connect-title">
            Keep Evidence With the Right Case.
          </h2>
          <p className="connect-desc">
            Connect evidence to the matter it belongs to so you can see it in the right context later without confusion.
          </p>
        </div>

        {/* Master Case-Evidence Hierarchy Visual */}
        <div className="connect-hierarchy-card">
          {/* Master Case Block */}
          <div className="master-case-node">
            <div className="node-icon-box">
              <Scale size={22} color="#C6A15B" />
            </div>
            <div className="node-text-col">
              <span className="node-eyebrow-tag">CASE</span>
              <h3 className="node-case-title">ABC Technologies vs. XYZ Ltd.</h3>
              <p className="node-court-meta">CS (COMM) 142/2026 • High Court of Delhi • Commercial Division</p>
            </div>
          </div>

          {/* Connected Evidence Stack */}
          <div className="connected-evidence-stack">
            <div className="stack-header-row">
              <span className="stack-label">EVIDENCE ATTACHED TO THIS MATTER</span>
              <span className="stack-count">3 Files Connected</span>
            </div>

            <div className="stack-items-grid">
              {evidenceItems.map((item) => (
                <div key={item.id} className="stack-item-row">
                  <div className="item-icon-col">{item.icon}</div>
                  <div className="item-details-col">
                    <div className="item-top-meta">
                      <span className="item-type-badge">{item.type}</span>
                      <span className="item-date-text">{item.date}</span>
                    </div>
                    <strong className="item-title-text">{item.title}</strong>
                    <span className="item-category-sub">{item.category}</span>
                  </div>
                  <div className="item-action-col">
                    <span className="btn-item-view">
                      <Eye size={12} />
                      <span>View</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
