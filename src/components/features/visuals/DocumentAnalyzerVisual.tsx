import React from 'react';
import './visuals.css';
import { Sparkles, CheckCircle2, FileText, Check } from 'lucide-react';

export const DocumentAnalyzerVisual: React.FC = () => {
  return (
    <div className="visual-card analyzer-visual-card">
      <div className="visual-window-header">
        <div className="visual-window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="visual-window-title">Intelligent Document Analyzer // Multi-Clause Verification</span>
        <span className="visual-badge-analyzer">
          <Sparkles size={12} color="#C6A15B" />
          <span>Grounded Context Engine</span>
        </span>
      </div>

      {/* 3-Stage Workflow Architecture */}
      <div className="analyzer-three-stage-grid">
        {/* STAGE 1: Left Document */}
        <div className="analyzer-stage stage-left">
          <div className="stage-header">
            <span className="stage-step">Stage 1</span>
            <h5 className="stage-title">Supplied Legal Document</h5>
          </div>
          <div className="stage-doc-card">
            <div className="doc-page-header">
              <FileText size={14} color="#091526" />
              <span>Shareholder_Agreement_v4.pdf</span>
            </div>
            <div className="doc-page-content">
              <p className="doc-paragraph unhighlighted">
                Section 8.1 Representation and Warranties of Founders...
              </p>
              <div className="doc-paragraph highlighted-gold-glow">
                <span className="highlight-pill">Target Clause // § 8.3</span>
                <p>
                  "In the event of a Material Default, the non-defaulting investor may trigger immediate indemnity under Schedule IV without prior cure notice if breach involves IP transfer."
                </p>
              </div>
              <p className="doc-paragraph unhighlighted">
                Section 8.4 Governing Law and Exclusive Jurisdiction...
              </p>
            </div>
          </div>
        </div>

        {/* STAGE 2: Center Intelligent Analysis Bridge */}
        <div className="analyzer-stage stage-center">
          <div className="stage-header">
            <span className="stage-step">Stage 2</span>
            <h5 className="stage-title">Context Analysis</h5>
          </div>

          <div className="analysis-engine-card">
            <div className="engine-pulse-halo" />
            <div className="analysis-step-row active">
              <div className="step-check">
                <Check size={11} color="#FFFFFF" />
              </div>
              <span>Context & Clause Parsing</span>
            </div>
            <div className="analysis-connector-line" />
            <div className="analysis-step-row active">
              <div className="step-check">
                <Check size={11} color="#FFFFFF" />
              </div>
              <span>Connecting Related Provisions</span>
            </div>
            <div className="analysis-connector-line" />
            <div className="analysis-step-row active gold">
              <div className="step-check check-gold">
                <Sparkles size={11} color="#091526" />
              </div>
              <span className="text-gold-dark font-semibold">Grounded Evidence Mapping</span>
            </div>
          </div>
        </div>

        {/* STAGE 3: Right Grounded Answer */}
        <div className="analyzer-stage stage-right">
          <div className="stage-header">
            <span className="stage-step">Stage 3</span>
            <h5 className="stage-title">Document-Grounded Answer</h5>
          </div>

          <div className="grounded-answer-card">
            <div className="inquiry-box">
              <span className="inquiry-label">Query:</span>
              <p className="inquiry-text">"What are the immediate liabilities if an IP transfer breach occurs?"</p>
            </div>

            <div className="verified-response-box">
              <div className="verified-badge-row">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span className="verified-text">Grounded in Section 8.3 & Schedule IV</span>
              </div>
              <p className="response-text">
                Under <strong>Section 8.3</strong>, an IP transfer breach constitutes an automatic <em>Material Default</em>, allowing the non-defaulting investor to trigger immediate indemnity without a cure period.
              </p>

              {/* Exact Source Citation Links */}
              <div className="source-citations">
                <span className="citation-tag">Source: Page 24, ¶ 2</span>
                <span className="citation-tag tag-gold">Cross-Ref: Schedule IV</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
