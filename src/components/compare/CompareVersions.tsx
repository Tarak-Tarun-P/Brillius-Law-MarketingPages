import React from 'react';
import { GitCompare, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import './CompareVersions.css';

export const CompareVersions: React.FC = () => {
  return (
    <section className="compare-versions-section" aria-labelledby="compare-versions-heading">
      <div className="content-container">
        <div className="compare-versions-header">
          <span className="compare-versions-eyebrow">COMPARE VERSIONS</span>
          <h2 id="compare-versions-heading" className="compare-versions-title">
            Compare an Earlier Version With Your Current One.
          </h2>
          <p className="compare-versions-desc">
            Choose a previously saved version and compare it with the version you are working on to see what changed.
          </p>
        </div>

        {/* Realistic Version Selection & Comparison Visual */}
        <div className="compare-version-card">
          <div className="version-doc-meta-bar">
            <div className="doc-meta-left">
              <FileText size={18} color="#C6A15B" />
              <div>
                <span className="doc-meta-label">DOCUMENT</span>
                <strong className="doc-meta-title">Senior Executive Employment Agreement</strong>
              </div>
            </div>
            <span className="doc-meta-branch">Drafting Lab // Live Workspace</span>
          </div>

          <div className="version-selector-grid">
            {/* Left Choice: Saved Version */}
            <div className="version-choice-box">
              <span className="choice-eyebrow">SELECT BASELINE VERSION</span>
              <div className="version-choice-card selected-choice">
                <div className="choice-header">
                  <span className="version-tag">Version 1 — Previously Saved</span>
                  <span className="version-date">Saved 24 Aug 2026</span>
                </div>
                <p className="choice-summary">Original baseline approved by initial counsel</p>
                <div className="choice-indicator">
                  <CheckCircle2 size={13} color="#C6A15B" />
                  <span>Selected for Comparison</span>
                </div>
              </div>
            </div>

            {/* Middle VS Badge */}
            <div className="version-vs-divider">
              <div className="vs-circle">
                <GitCompare size={16} color="#091526" />
                <span>VS</span>
              </div>
            </div>

            {/* Right Choice: Current Version */}
            <div className="version-choice-box">
              <span className="choice-eyebrow">COMPARE AGAINST</span>
              <div className="version-choice-card current-choice">
                <div className="choice-header">
                  <span className="version-tag text-gold">Current Version</span>
                  <span className="version-live-badge">Currently Edited</span>
                </div>
                <p className="choice-summary">Latest working revisions with comments and adjustments</p>
                <div className="choice-indicator active-indicator">
                  <CheckCircle2 size={13} color="#059669" />
                  <span>Active Workspace Draft</span>
                </div>
              </div>
            </div>
          </div>

          <div className="version-action-footer">
            <span className="btn-run-compare-demo">
              <GitCompare size={15} />
              <span>Compare Versions</span>
              <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
