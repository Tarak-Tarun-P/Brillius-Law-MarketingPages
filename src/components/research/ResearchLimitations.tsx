import React from 'react';
import { ShieldCheck, Scale, AlertCircle, FileText } from 'lucide-react';
import './ResearchLimitations.css';

export const ResearchLimitations: React.FC = () => {
  return (
    <section className="research-limitations-section" aria-labelledby="limitations-heading">
      <div className="content-container">
        <div className="research-limitations-card">
          <div className="limitations-top-row">
            <div className="limitations-badge">
              <ShieldCheck size={16} color="#C6A15B" />
              <span>PRACTICE NOTICE &amp; LIMITATIONS</span>
            </div>
            <span className="limitations-tag">Professional Responsibility</span>
          </div>

          <h2 id="limitations-heading" className="limitations-title">
            Research Helps You Find and Understand. You Decide What to Use.
          </h2>

          <p className="limitations-desc">
            Research results and AI-generated insights are there to help you work through legal material. Always review the original judgment, statute, and case documents before relying on them.
          </p>

          <div className="limitations-case-box">
            <p className="limitations-case-text">
              <strong>For case-specific answers:</strong> The answers are based on the case material available to the system. They should be checked against the original documents and your own legal judgment.
            </p>
          </div>

          <div className="limitations-points-grid">
            <div className="limitation-point">
              <Scale size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Independent Legal Analysis</strong>
                <p className="point-desc">
                  Insights provide research assistance and do not substitute for counsel's interpretation of ratio decidendi and statutory context.
                </p>
              </div>
            </div>

            <div className="limitation-point">
              <FileText size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Primary Text Verification</strong>
                <p className="point-desc">
                  Always inspect the full law report text and primary case record to confirm factual matrix, bench strength, and procedural history.
                </p>
              </div>
            </div>

            <div className="limitation-point">
              <AlertCircle size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Platform Scope &amp; Standing</strong>
                <p className="point-desc">
                  Jurisprudential coverage is based on available records in the platform. Verify good law status and subsequent legislative developments independently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
