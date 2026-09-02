import React from 'react';
import './visuals.css';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

export const AIDraftingVisual: React.FC = () => {
  return (
    <div className="visual-card ai-drafting-visual-card">
      <div className="visual-window-header">
        <div className="visual-window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="visual-window-title">AI Drafting Assistant // Commercial Non-Disclosure Clause</span>
        <span className="visual-badge-ai">
          <Sparkles size={12} color="#C6A15B" />
          <span>Interactive Drafting</span>
        </span>
      </div>

      <div className="ai-drafting-body">
        {/* Step Flow: Idea -> Draft -> Review */}
        <div className="drafting-stages-header">
          <span className="stage-pill active">1. Prompt & Intent</span>
          <ArrowRight size={13} color="#C6A15B" />
          <span className="stage-pill active">2. Generated Clause Draft</span>
          <ArrowRight size={13} color="#C6A15B" />
          <span className="stage-pill active gold">3. Counsel Review</span>
        </div>

        <div className="ai-draft-prompt-box">
          <span className="prompt-label">Drafting Objective:</span>
          <p className="prompt-text">"Draft a reciprocal non-compete provision valid under Section 27 of the Indian Contract Act with reasonable territorial carve-outs."</p>
        </div>

        <div className="ai-draft-output-box">
          <div className="output-header-bar">
            <span className="output-tag">Generated Draft for Review</span>
            <span className="output-statute">Statute Aligned: Indian Contract Act § 27</span>
          </div>
          <p className="output-clause-text">
            "During the term of this Agreement and for a period of 12 months thereafter, neither party shall directly solicit the core executive personnel of the other party within the designated operational territory of India, subject to mutual written consent."
          </p>
          <div className="output-actions">
            <button type="button" className="btn-insert-draft">
              <Check size={13} />
              <span>Insert into Document Draft</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
