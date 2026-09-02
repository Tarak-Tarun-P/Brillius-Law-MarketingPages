import React, { useState } from 'react';
import { Search, FileText, Download, Eye, CheckCircle2 } from 'lucide-react';
import './DocStorageSearch.css';

export const DocStorageSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('lease');

  const allDocuments = [
    {
      name: 'Commercial_Lease_Agreement_Final.pdf',
      folder: 'Agreements',
      size: '2.4 MB',
      updated: '14 Oct 2023',
    },
    {
      name: 'Residential_Lease_Deed_Executed.docx',
      folder: 'Agreements',
      size: '1.2 MB',
      updated: '02 Oct 2023',
    },
    {
      name: 'Lease_Renewal_Notice_Signed.pdf',
      folder: 'Legal Notices',
      size: '620 KB',
      updated: '28 Sep 2023',
    },
  ];

  return (
    <section className="doc-search-section" aria-labelledby="doc-search-heading">
      <div className="content-container">
        <div className="doc-search-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">DOCUMENT DISCOVERY</span>
          </div>
          <h2 id="doc-search-heading" className="doc-search-title">
            Find Important Documents Easily.
          </h2>
          <p className="doc-search-desc">
            Spend less time searching through scattered files. Find the documents you need from your workspace.
          </p>
        </div>

        {/* Search Mockup Interface */}
        <div className="search-mockup-card">
          <div className="search-bar-input-box">
            <Search size={18} color="#C6A15B" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by document title, folder, or client..."
              className="doc-query-input"
              aria-label="Search documents"
            />
            <span className="match-tag">3 Matches Found</span>
          </div>

          <div className="search-results-list">
            {allDocuments.map((doc, idx) => (
              <div key={idx} className="search-res-item">
                <div className="res-icon">
                  <FileText size={16} color="#C6A15B" />
                </div>
                <div className="res-details">
                  <strong className="res-name">{doc.name}</strong>
                  <div className="res-meta">
                    <span className="res-folder-tag">{doc.folder}</span>
                    <span>•</span>
                    <span>{doc.size}</span>
                    <span>•</span>
                    <span>{doc.updated}</span>
                  </div>
                </div>
                <div className="res-actions">
                  <button type="button" className="res-btn" aria-label="Preview Document">
                    <Eye size={13} />
                  </button>
                  <button type="button" className="res-btn" aria-label="Download Document">
                    <Download size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="search-mockup-footer">
            <CheckCircle2 size={13} color="#C6A15B" />
            <span>Locate files instantly by keyword without digging through endless subdirectories.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
