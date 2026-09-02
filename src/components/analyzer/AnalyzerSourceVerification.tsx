import React from 'react';
import { ArrowRight, Search } from 'lucide-react';
import './AnalyzerSourceVerification.css';

export const AnalyzerSourceVerification: React.FC = () => {
  return (
    <section className="analyzer-source-section" aria-labelledby="source-heading">
      <div className="content-container">
        <div className="source-section-header">
          <span className="source-eyebrow">VERIFIED CITATION FLOW</span>
          <h2 id="source-heading" className="source-title">
            See the Information Behind the Answer.
          </h2>
          <p className="source-desc">
            When an answer is provided, BrilliusLaw shows the exact page and paragraph so you can return to the document and review it with your own eyes.
          </p>
        </div>

        {/* 3-Step Citation Flow Box */}
        <div className="source-flow-canvas">
          {/* Step 1: Answer */}
          <div className="flow-card step-answer">
            <div className="flow-badge">1. THE ANSWER</div>
            <h4 className="flow-card-title">Clear Summary</h4>
            <p className="flow-card-text">
              "Notice of breach requires 15 business days for cure before legal action can be initiated."
            </p>
          </div>

          <div className="flow-arrow-box" aria-hidden="true">
            <ArrowRight size={20} color="#C6A15B" />
          </div>

          {/* Step 2: Source Section Link */}
          <div className="flow-card step-source">
            <div className="flow-badge badge-gold">2. CITATION TAG</div>
            <h4 className="flow-card-title">Exact Location</h4>
            <div className="flow-citation-pill">
              <Search size={13} color="#C6A15B" />
              <span>Section 14.3 // Page 32, ¶ 1</span>
            </div>
            <p className="flow-card-text">
              Direct anchor linking straight to the corresponding clause in the original uploaded PDF.
            </p>
          </div>

          <div className="flow-arrow-box" aria-hidden="true">
            <ArrowRight size={20} color="#C6A15B" />
          </div>

          {/* Step 3: Highlighted Document */}
          <div className="flow-card step-document">
            <div className="flow-badge">3. ORIGINAL DOCUMENT</div>
            <h4 className="flow-card-title">Direct Verification</h4>
            <div className="flow-doc-preview">
              <span className="doc-preview-clause">§ 14.3 Cure Notice Period</span>
              <p className="doc-preview-body">
                "Either party may deliver written notice... specifying a cure period of not less than fifteen (15) business days..."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
