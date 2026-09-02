import React from 'react';
import { Upload, FileText, CheckCircle2, FolderCheck } from 'lucide-react';
import './CaseDraftsCustomTemplates.css';

export const CaseDraftsCustomTemplates: React.FC = () => {
  const firmTemplates = [
    {
      name: 'Chambers Standard Special Leave Petition (Civil)',
      docType: 'Appellate Pleading • Supreme Court Format',
      uploadedBy: 'Uploaded by Senior Partner Desk',
      uses: 'Used in 14 matters',
    },
    {
      name: 'Commercial Injunction Application & Undertaking',
      docType: 'Interlocutory • High Court Format',
      uploadedBy: 'Uploaded by Dispute Resolution Lead',
      uses: 'Used in 22 matters',
    },
    {
      name: 'Pre-Litigation Statutory Demand Notice (Sec 138 NI Act)',
      docType: 'Legal Notice • Chamber Master',
      uploadedBy: 'Uploaded by Associate Team',
      uses: 'Used in 38 matters',
    },
  ];

  return (
    <section className="custom-templates-section" aria-labelledby="custom-templates-heading">
      <div className="content-container">
        <div className="custom-templates-grid">
          {/* Left Text Column */}
          <div className="custom-left-content">
            <div className="eyebrow-chip">
              <span className="eyebrow-text">CHAMBERS REPOSITORY</span>
            </div>
            <h2 id="custom-templates-heading" className="custom-title">
              Bring Your Firm’s Templates With You.
            </h2>
            <p className="custom-desc">
              Upload your own document templates and use them when preparing future drafts. Work with the exact formats, standard clauses, and structures your firm already follows.
            </p>

            <div className="custom-highlights-list">
              <div className="custom-hl-item">
                <CheckCircle2 size={16} color="#C6A15B" />
                <span>Upload and maintain your firm's trusted document formats</span>
              </div>
              <div className="custom-hl-item">
                <CheckCircle2 size={16} color="#C6A15B" />
                <span>Standardize drafting quality across associates and interns</span>
              </div>
              <div className="custom-hl-item">
                <CheckCircle2 size={16} color="#C6A15B" />
                <span>Combine custom firm structures with case-aware information</span>
              </div>
            </div>
          </div>

          {/* Right Template Upload & Library Visual */}
          <div className="custom-right-visual">
            <div className="custom-library-card">
              <div className="library-topbar">
                <div className="lib-title-group">
                  <FolderCheck size={16} color="#C6A15B" />
                  <strong className="lib-title">Your Firm's Template Library</strong>
                </div>
                <button type="button" className="btn-upload-tpl">
                  <Upload size={12} />
                  <span>Upload Template</span>
                </button>
              </div>

              <div className="firm-tpl-list">
                {firmTemplates.map((t, idx) => (
                  <div key={idx} className="firm-tpl-item">
                    <div className="tpl-doc-icon">
                      <FileText size={16} color="#C6A15B" />
                    </div>
                    <div className="tpl-details">
                      <strong className="tpl-doc-title">{t.name}</strong>
                      <span className="tpl-doc-type">{t.docType}</span>
                      <div className="tpl-meta-row">
                        <span>{t.uploadedBy}</span>
                        <span>•</span>
                        <span className="tpl-uses-tag">{t.uses}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="library-footer">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Upload your firm's standard formats and select them during draft creation.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
