import React from 'react';
import { ShieldCheck, Eye, FileText, CheckCircle2 } from 'lucide-react';
import './AnalyzerLimitations.css';

export const AnalyzerLimitations: React.FC = () => {
  return (
    <section className="analyzer-limitations-section" aria-labelledby="limitations-heading">
      <div className="content-container">
        <div className="limitations-card">
          <div className="limitations-top-row">
            <div className="limitations-badge">
              <ShieldCheck size={16} color="#C6A15B" />
              <span>RESPONSIBLE LEGAL AI</span>
            </div>
            <span className="limitations-tag">Supporting Professional Review</span>
          </div>

          <h2 id="limitations-heading" className="limitations-title">
            Always Review the Source.
          </h2>

          <p className="limitations-desc">
            The Document Analyzer is designed to help you explore and understand documents faster. It should support — not replace — your own reading, professional judgment, and legal review.
          </p>

          <div className="limitations-points-grid">
            <div className="limitation-point">
              <Eye size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Direct Source Verification</strong>
                <p className="point-desc">Every extracted summary and answer links back to the original clause so you can confirm full context.</p>
              </div>
            </div>

            <div className="limitation-point">
              <FileText size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Supported File Formats</strong>
                <p className="point-desc">Works best with searchable digital PDF contracts, commercial agreements, and Word documents.</p>
              </div>
            </div>

            <div className="limitation-point">
              <CheckCircle2 size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">You Retain Full Editorial Control</strong>
                <p className="point-desc">BrilliusLaw provides quick navigation and starting overviews, leaving every legal determination to you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
