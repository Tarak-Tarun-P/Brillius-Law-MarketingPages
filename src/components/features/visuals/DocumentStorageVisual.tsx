import React from 'react';
import './visuals.css';
import { Search, Folder, FileText, Shield } from 'lucide-react';

export const DocumentStorageVisual: React.FC = () => {
  return (
    <div className="visual-card doc-storage-visual-card">
      <div className="visual-window-header">
        <div className="visual-window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="visual-window-title">Centralized Document Repository // Encrypted Storage</span>
        <span className="visual-badge-shield">
          <Shield size={12} />
          <span>AES-256</span>
        </span>
      </div>

      <div className="doc-storage-body">
        {/* Search & Filter Bar */}
        <div className="doc-search-bar">
          <Search size={15} color="#738091" />
          <span className="search-placeholder">Search across 4,200+ case files, judgments, affidavits...</span>
          <span className="search-kbd">⌘K</span>
        </div>

        {/* Structured Folder Pills */}
        <div className="folder-pills-row">
          <div className="folder-pill">
            <Folder size={13} color="#091526" />
            <span>NCLAT Pleadings</span>
          </div>
          <div className="folder-pill">
            <Folder size={13} color="#091526" />
            <span>Commercial Agreements</span>
          </div>
          <div className="folder-pill">
            <Folder size={14} color="#091526" />
            <span>NCLAT Briefs (64)</span>
          </div>
        </div>

        {/* File Cards Stack */}
        <div className="doc-file-list">
          <div className="doc-file-card featured">
            <div className="doc-file-icon">
              <FileText size={20} color="#C6A15B" />
            </div>
            <div className="doc-file-info">
              <div className="doc-file-name-row">
                <span className="doc-file-name">Special_Leave_Petition_Civil_Final.pdf</span>
                <span className="doc-file-tag">High Court Appeal</span>
              </div>
              <p className="doc-file-meta">Indexed with Optical OCR • 48 Pages • 2.4 MB • Updated Today</p>
            </div>
            <span className="doc-status-badge">Indexed</span>
          </div>

          <div className="doc-file-card">
            <div className="doc-file-icon">
              <FileText size={20} color="#091526" />
            </div>
            <div className="doc-file-info">
              <div className="doc-file-name-row">
                <span className="doc-file-name">Arbitration_Claim_Statement_v3.docx</span>
                <span className="doc-file-tag">Arbitration</span>
              </div>
              <p className="doc-file-meta">Drafting Link Attached • Matter #ARB-410 • 18 Pages</p>
            </div>
            <span className="doc-status-badge">Synced</span>
          </div>

          <div className="doc-file-card">
            <div className="doc-file-icon">
              <FileText size={20} color="#091526" />
            </div>
            <div className="doc-file-info">
              <div className="doc-file-name-row">
                <span className="doc-file-name">Director_Disclosure_Affidavit_Stamped.pdf</span>
                <span className="doc-file-tag">Compliance</span>
              </div>
              <p className="doc-file-meta">E-Notarized Copy • Vault Encrypted</p>
            </div>
            <span className="doc-status-badge">Archived</span>
          </div>
        </div>
      </div>
    </div>
  );
};
