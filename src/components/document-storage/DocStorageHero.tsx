import React from 'react';
import {
  ArrowRight,
  Folder,
  FileText,
  Search,
  Download,
  Eye,
  CheckCircle2,
} from 'lucide-react';
import './DocStorageHero.css';

export const DocStorageHero: React.FC = () => {
  const sampleDocs = [
    {
      name: 'Commercial_Lease_Agreement_Final.pdf',
      category: 'Agreements & Contracts',
      size: '2.4 MB',
      updated: 'Updated today',
    },
    {
      name: 'Special_Leave_Petition_Civil_v3.docx',
      category: 'Pleadings & Petitions',
      size: '1.1 MB',
      updated: 'Updated yesterday',
    },
    {
      name: 'High_Court_Daily_Order_09Oct2023.pdf',
      category: 'Court Orders',
      size: '480 KB',
      updated: '18 Oct 2023',
    },
    {
      name: 'Board_Resolution_Authorisation.pdf',
      category: 'Client Documents',
      size: '850 KB',
      updated: '14 Oct 2023',
    },
  ];

  return (
    <section className="doc-hero-section" aria-label="Document Storage Hero">
      {/* Background ambient lighting */}
      <div className="doc-hero-glow glow-gold" aria-hidden="true" />
      <div className="doc-hero-glow glow-navy" aria-hidden="true" />

      <div className="content-container">
        <div className="doc-hero-grid">
          {/* LEFT: Simple Headline & Copy */}
          <div className="doc-hero-left animate-fade-in-up">
            <div className="doc-hero-eyebrow-wrapper">
              <span className="doc-hero-eyebrow">DOCUMENT STORAGE</span>
              <span className="doc-hero-eyebrow-line" aria-hidden="true" />
            </div>

            <h1 className="doc-hero-headline">
              Keep Your Important
              <br />
              <span className="gold-accent-text">Documents Close.</span>
            </h1>

            <p className="doc-hero-description">
              Store, organize, and quickly find the documents you need for your legal work.
            </p>

            <div className="doc-hero-actions">
              <a href="#get-started" className="btn-doc-primary">
                <span>Get Started</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="doc-trust-pills">
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>One Place for All Files</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Organized Folders</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Quick Document Retrieval</span>
              </span>
            </div>
          </div>

          {/* RIGHT: Clean Document Storage UI Preview */}
          <div className="doc-hero-right animate-fade-in">
            <div className="doc-storage-card">
              {/* Window Header */}
              <div className="doc-card-header">
                <div className="doc-window-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <span className="doc-header-title">Document Storage • All Files</span>
                <span className="doc-count-badge">4 Files</span>
              </div>

              {/* Top Search & Folder Filter Bar */}
              <div className="doc-search-bar">
                <div className="doc-input-wrap">
                  <Search size={14} color="#94A3B8" />
                  <span className="doc-placeholder">Search documents by name...</span>
                </div>
              </div>

              {/* Folders Row */}
              <div className="doc-folders-row">
                <div className="folder-chip active">
                  <Folder size={12} color="#C6A15B" />
                  <span>All Files</span>
                </div>
                <div className="folder-chip">
                  <Folder size={12} />
                  <span>Pleadings</span>
                </div>
                <div className="folder-chip">
                  <Folder size={12} />
                  <span>Agreements</span>
                </div>
                <div className="folder-chip">
                  <Folder size={12} />
                  <span>Orders</span>
                </div>
              </div>

              {/* Document List */}
              <div className="doc-items-list">
                {sampleDocs.map((doc, idx) => (
                  <div key={idx} className="doc-item-row">
                    <div className="doc-icon-wrap">
                      <FileText size={15} color="#C6A15B" />
                    </div>
                    <div className="doc-info-col">
                      <strong className="doc-name">{doc.name}</strong>
                      <div className="doc-meta-line">
                        <span>{doc.category}</span>
                        <span>•</span>
                        <span>{doc.size}</span>
                        <span>•</span>
                        <span>{doc.updated}</span>
                      </div>
                    </div>
                    <div className="doc-actions-col">
                      <button type="button" className="doc-action-btn" aria-label="View Document">
                        <Eye size={13} />
                      </button>
                      <button type="button" className="doc-action-btn" aria-label="Download Document">
                        <Download size={13} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="doc-card-footer">
                <span>Access your legal documents anytime from your workspace.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
