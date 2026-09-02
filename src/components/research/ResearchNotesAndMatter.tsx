import React, { useState } from 'react';
import {
  FileText,
  Bookmark,
  Download,
  Copy,
  Check,
  Share2,
  FolderCheck,
  ArrowRight,
} from 'lucide-react';
import './ResearchNotesAndMatter.css';

export const ResearchNotesAndMatter: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [savedToMatter, setSavedToMatter] = useState(false);

  const handleCopyCitation = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveToMatter = () => {
    setSavedToMatter(true);
    setTimeout(() => setSavedToMatter(false), 3000);
  };

  return (
    <section className="notes-matter-section" aria-labelledby="notes-matter-heading">
      <div className="content-container">
        {/* Section Header */}
        <div className="notes-matter-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">RESEARCH WORKFLOW &amp; ACTION</span>
          </div>
          <h2 id="notes-matter-heading" className="notes-matter-title">
            Connect Research Directly to Your Matter.
          </h2>
          <p className="notes-matter-desc">
            Save judgments to cases, generate structured research notes, copy citations, and export findings when you need them.
          </p>
        </div>

        {/* 3 Practical Research Action Pillars */}
        <div className="notes-matter-grid">
          {/* Card 1: Research Notes (Section 19) */}
          <div className="action-pillar-card">
            <div className="pillar-top-badge">
              <FileText size={14} color="#C6A15B" />
              <span>RESEARCH NOTES</span>
            </div>
            <h3 className="pillar-heading">Turn Research Into Useful Notes.</h3>
            <p className="pillar-desc">
              Save research findings as structured notes that can be kept with the case.
            </p>

            <div className="pillar-mockup-box note-preview-box">
              <div className="note-card-header">
                <span className="note-type-tag">LEGAL RESEARCH NOTE</span>
                <span className="note-date">Today • 11:30 AM</span>
              </div>
              <div className="note-field-row">
                <span className="note-label">ISSUE:</span>
                <span className="note-val">Admissibility of unregistered agreement for specific performance.</span>
              </div>
              <div className="note-field-row">
                <span className="note-label">KEY FINDING:</span>
                <span className="note-val">Section 49 Proviso allows reception as evidence of contract.</span>
              </div>
              <div className="note-field-row">
                <span className="note-label">AUTHORITIES:</span>
                <span className="note-val">(2018) 7 SCC 639 • (2008) 8 SCC 564</span>
              </div>
              <div className="note-actions-bar">
                <span className="note-save-case-str">Saved to case Notes area</span>
                <button type="button" className="btn-note-action">
                  <Download size={12} />
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Save Judgment to a Matter (Section 20) */}
          <div className="action-pillar-card">
            <div className="pillar-top-badge">
              <Bookmark size={14} color="#C6A15B" />
              <span>MATTER INTEGRATION</span>
            </div>
            <h3 className="pillar-heading">Keep a Useful Judgment With the Case.</h3>
            <p className="pillar-desc">
              Found a judgment you want to use later? Save it directly to the relevant matter.
            </p>

            <div className="pillar-mockup-box matter-save-box">
              <div className="save-workflow-top">
                <div className="source-judgment-tag">
                  <span className="sub-tag">JUDGMENT</span>
                  <strong className="judg-name">Vijay Madanlal Choudhary v. UOI</strong>
                </div>
                <button
                  type="button"
                  className={`btn-save-matter ${savedToMatter ? 'saved' : ''}`}
                  onClick={handleSaveToMatter}
                >
                  {savedToMatter ? <FolderCheck size={13} /> : <Bookmark size={13} />}
                  <span>{savedToMatter ? 'Saved to Case' : 'Save to Matter'}</span>
                </button>
              </div>

              <div className="save-flow-arrow">
                <ArrowRight size={13} color="#C6A15B" />
              </div>

              <div className="target-case-box">
                <span className="target-label">CONNECTED MATTER</span>
                <strong className="target-case-title">ABC Technologies vs XYZ Ltd</strong>
                <span className="target-status-pill">Active Reference in Case File</span>
              </div>
            </div>
          </div>

          {/* Card 3: Citations & Export (Section 21) */}
          <div className="action-pillar-card">
            <div className="pillar-top-badge">
              <Share2 size={14} color="#C6A15B" />
              <span>CITATIONS &amp; EXPORT</span>
            </div>
            <h3 className="pillar-heading">Take Your Research With You.</h3>
            <p className="pillar-desc">
              Copy citations or export available research material when you need to use it elsewhere.
            </p>

            <div className="pillar-mockup-box export-box">
              <div className="citation-preview-row">
                <div className="cit-info-group">
                  <span className="cit-label">STANDARDIZED CITATION</span>
                  <code className="cit-code-str">(2023) 5 SCC 123</code>
                </div>
                <button
                  type="button"
                  className="btn-copy-cit"
                  onClick={handleCopyCitation}
                >
                  {copied ? <Check size={13} color="#059669" /> : <Copy size={13} />}
                  <span>{copied ? 'Copied' : 'Copy Citation'}</span>
                </button>
              </div>

              <div className="export-options-row">
                <span className="export-label">AVAILABLE EXPORT FORMATS:</span>
                <div className="export-buttons-group">
                  <span className="btn-export-pill">
                    <Download size={11} />
                    <span>PDF Export</span>
                  </span>
                  <span className="btn-export-pill">
                    <FileText size={11} />
                    <span>Text Export</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
