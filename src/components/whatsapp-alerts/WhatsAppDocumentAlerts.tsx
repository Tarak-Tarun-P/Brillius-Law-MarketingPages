import React from 'react';
import { FileText, CheckCircle2, MessageSquare } from 'lucide-react';
import './WhatsAppDocumentAlerts.css';

export const WhatsAppDocumentAlerts: React.FC = () => {
  const docAlerts = [
    {
      badge: 'DOCUMENT APPROVAL REQUESTED',
      badgeClass: 'doc-req',
      docName: 'Commercial Master Lease Agreement (v3.2)',
      detail: 'Submitted by Corporate Desk for Managing Partner sign-off.',
      client: 'Client: Bengaluru Urban Tech Infra',
    },
    {
      badge: 'DOCUMENT REVISION REQUESTED',
      badgeClass: 'doc-rev',
      docName: 'Indemnity & Undertaking Bond',
      detail: 'Counsel requested modifications to Clause 14 (Liability Cap).',
      client: 'Client: Delta Global Technologies',
    },
    {
      badge: 'DOCUMENT APPROVED',
      badgeClass: 'doc-app',
      docName: 'Non-Disclosure & Confidentiality Agreement',
      detail: 'Approved by Senior Partner Desk and ready for execution.',
      client: 'Client: Apex Global Logistics',
    },
  ];

  return (
    <section className="wa-docs-section" aria-labelledby="wa-docs-heading">
      <div className="content-container">
        <div className="wa-docs-grid">
          {/* Left Text */}
          <div className="wa-docs-left">
            <div className="eyebrow-chip">
              <span className="eyebrow-text">DOCUMENT WORKFLOW VISIBILITY</span>
            </div>
            <h2 id="wa-docs-heading" className="wa-docs-title">
              Keep Document Reviews Moving.
            </h2>
            <p className="wa-docs-desc">
              Receive important updates when documents are submitted for review or when changes are requested.
            </p>

            <div className="wa-docs-bullets">
              <div className="d-bullet-item">
                <CheckCircle2 size={16} color="#C6A15B" />
                <span>Immediate awareness when contracts or deeds are ready for review</span>
              </div>
              <div className="d-bullet-item">
                <CheckCircle2 size={16} color="#C6A15B" />
                <span>Clear alerts when senior lawyers request clause revisions</span>
              </div>
              <div className="d-bullet-item">
                <CheckCircle2 size={16} color="#C6A15B" />
                <span>Instant notice when client agreements receive final chamber approval</span>
              </div>
            </div>
          </div>

          {/* Right Visual Feed Box */}
          <div className="wa-docs-right">
            <div className="docs-feed-box">
              <div className="feed-header">
                <FileText size={15} color="#C6A15B" />
                <strong className="feed-title">Sample Document Alerts on WhatsApp</strong>
              </div>

              <div className="docs-messages-list">
                {docAlerts.map((doc, idx) => (
                  <div key={idx} className="wa-doc-card">
                    <div className="wa-card-badge-row">
                      <span className={`wa-doc-badge ${doc.badgeClass}`}>{doc.badge}</span>
                      <MessageSquare size={12} color="#075E54" />
                    </div>
                    <strong className="wa-doc-title">{doc.docName}</strong>
                    <p className="wa-doc-detail">{doc.detail}</p>
                    <span className="wa-doc-client">{doc.client}</span>
                  </div>
                ))}
              </div>

              <div className="feed-footer">
                <CheckCircle2 size={12} color="#C6A15B" />
                <span>WhatsApp informs you of the update; open BrilliusLaw to review full clauses and execute.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
