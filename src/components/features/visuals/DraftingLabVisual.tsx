import React from 'react';
import './visuals.css';
import { Sparkles, Check, GitCommit } from 'lucide-react';

export const DraftingLabVisual: React.FC = () => {
  return (
    <div className="visual-card drafting-visual-card">
      <div className="visual-window-header">
        <div className="visual-window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="visual-window-title">Drafting Lab // Commercial Dispute Agreement.docx</span>
        <div className="drafting-version-pill">
          <GitCommit size={12} />
          <span>v2.4 (Live Draft)</span>
        </div>
      </div>

      <div className="drafting-editor-body">
        {/* Editor Toolbar Header */}
        <div className="drafting-toolbar">
          <span className="toolbar-title">Clause 14: Indemnification & Limitation of Liability</span>
          <div className="toolbar-actions">
            <span className="toolbar-badge">
              <Sparkles size={12} color="#C6A15B" />
              <span>Smart Clause Suggestion</span>
            </span>
          </div>
        </div>

        {/* Unselected Clause block */}
        <div className="clause-block standard">
          <span className="clause-num">14.1 Scope of Indemnity</span>
          <p className="clause-text">
            The Service Provider shall defend, indemnify and hold harmless the Client and its directors, officers, and employees against any and all third-party claims, demands, and regulatory penalties...
          </p>
        </div>

        {/* Selected Highlighted Clause Block */}
        <div className="clause-block highlighted-gold">
          <div className="clause-highlight-badge">
            <span className="highlight-tag">Selected Clause • Smart Polish Active</span>
            <span className="statutory-ref">Indian Contract Act § 124 Alignment</span>
          </div>
          <span className="clause-num">14.2 Limitation Cap & Carve-Outs</span>
          <p className="clause-text-active">
            Except in cases of gross negligence or willful misconduct under Indian law, aggregate liability arising out of or in connection with this Agreement shall be limited to total fees paid in the preceding 12 months.
          </p>
          <div className="clause-suggestion-box">
            <div className="suggestion-header">
              <Sparkles size={13} color="#C6A15B" />
              <span className="suggestion-label">Suggested Refinement:</span>
            </div>
            <p className="suggestion-content">
              Include explicit exclusion for breach of confidentiality obligations (Section 18) to prevent ambiguous indemnity caps.
            </p>
            <div className="suggestion-action-row">
              <button type="button" className="btn-accept-suggestion">
                <Check size={13} />
                <span>Accept Clause Refinement</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
