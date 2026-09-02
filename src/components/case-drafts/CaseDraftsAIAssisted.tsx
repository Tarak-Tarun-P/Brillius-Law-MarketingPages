import React from 'react';
import { Briefcase, LayoutTemplate, MessageSquare, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import './CaseDraftsAIAssisted.css';

export const CaseDraftsAIAssisted: React.FC = () => {
  return (
    <section className="casedrafts-ai-section" aria-labelledby="ai-drafting-heading">
      <div className="content-container">
        <div className="casedrafts-ai-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">AI-ASSISTED CREATION</span>
          </div>
          <h2 id="ai-drafting-heading" className="casedrafts-ai-title">
            Turn Case Information Into a Draft.
          </h2>
          <p className="casedrafts-ai-desc">
            Use AI assistance to build a draft from the selected template and the information available in your case. Get a structured starting draft, then make it your own.
          </p>
        </div>

        {/* 3 Input Pillars + Arrow + Generated Output Card */}
        <div className="ai-generation-pipeline">
          <div className="input-pillars-row">
            {/* Input 1 */}
            <div className="input-source-card">
              <div className="source-icon-wrap">
                <Briefcase size={18} />
              </div>
              <strong className="source-title">Case Information</strong>
              <p className="source-desc">Parties, agreed contracts, limitation dates, and core dispute facts.</p>
            </div>

            <span className="plus-symbol" aria-hidden="true">+</span>

            {/* Input 2 */}
            <div className="input-source-card">
              <div className="source-icon-wrap">
                <LayoutTemplate size={18} />
              </div>
              <strong className="source-title">Selected Template</strong>
              <p className="source-desc">Standard court pleading format or your firm’s customized master template.</p>
            </div>

            <span className="plus-symbol" aria-hidden="true">+</span>

            {/* Input 3 */}
            <div className="input-source-card">
              <div className="source-icon-wrap">
                <MessageSquare size={18} />
              </div>
              <strong className="source-title">Your Instructions</strong>
              <p className="source-desc">Specific legal defenses, grounds for stay, and strategic relief required.</p>
            </div>
          </div>

          {/* Pipeline Arrow */}
          <div className="pipeline-flow-arrow" aria-hidden="true">
            <ArrowRight size={20} color="#C6A15B" />
          </div>

          {/* Output Result Card */}
          <div className="generated-output-card">
            <div className="output-header">
              <div className="out-icon-title">
                <Sparkles size={16} color="#C6A15B" />
                <strong className="out-heading">Structured Starting Draft Generated</strong>
              </div>
              <span className="out-ready-tag">Ready for Lawyer Review</span>
            </div>

            <div className="output-body">
              <p className="out-quote">
                “A comprehensive first draft formatted to court specifications—complete with cause title, preliminary objections, para-wise responses, and verification clause—ready for counsel appraisal.”
              </p>
            </div>

            <div className="output-footer">
              <CheckCircle2 size={13} color="#C6A15B" />
              <span>Lawyers remain in complete control to review, edit, refine, and finalize every document.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
