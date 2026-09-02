import React from 'react';
import { User, Sparkles, Scale, FileText, HelpCircle } from 'lucide-react';
import './AIAssistantSituation.css';

export const AIAssistantSituation: React.FC = () => {
  return (
    <section className="assistant-situation-section" aria-labelledby="situation-heading">
      <div className="content-container">
        <div className="assistant-situation-header">
          <span className="situation-eyebrow">FACTUAL SITUATION EXPLORATION</span>
          <h2 id="situation-heading" className="situation-title">
            Start With the Situation.
          </h2>
          <p className="situation-desc">
            Describe the facts, issue, or matter you're working on in your own words. The Assistant helps you structure your initial thinking.
          </p>
        </div>

        <div className="situation-demo-box">
          {/* Situation Input Bubble */}
          <div className="situation-input-card">
            <div className="situation-author-row">
              <div className="author-icon">
                <User size={16} color="#091526" />
              </div>
              <span className="author-name">Your Input (Factual Scenario)</span>
            </div>
            <p className="situation-prompt-text">
              "A commercial vendor failed to deliver custom software within the agreed 6-month timeline. The client paid 50% advance and suffered business loss. The contract has a limitation of liability clause. What legal areas and issues should I look into?"
            </p>
          </div>

          {/* Assistant Structured Analysis Result */}
          <div className="situation-response-card">
            <div className="response-header">
              <div className="response-title-group">
                <Sparkles size={16} color="#C6A15B" />
                <span className="response-badge-title">BrilliusLaw Suggested Starting Points</span>
              </div>
              <span className="response-context-tag">Indian Law Overview</span>
            </div>

            <p className="response-intro">
              Based on this scenario, here are areas you may want to consider and provisions to examine during your research:
            </p>

            <div className="response-columns-grid">
              {/* Column 1: Relevant Legal Domains */}
              <div className="response-subcard">
                <div className="subcard-header">
                  <Scale size={14} color="#C6A15B" />
                  <span>Potentially Relevant Areas</span>
                </div>
                <ul className="subcard-list">
                  <li><strong>Breach of Commercial Contract:</strong> Essential performance of time-bound terms.</li>
                  <li><strong>Measure of Damages:</strong> Direct loss vs. consequential indirect loss.</li>
                  <li><strong>Enforceability of Caps:</strong> Whether liability caps apply in gross delay.</li>
                </ul>
              </div>

              {/* Column 2: Provisions to Review */}
              <div className="response-subcard">
                <div className="subcard-header">
                  <FileText size={14} color="#C6A15B" />
                  <span>Provisions to Review</span>
                </div>
                <ul className="subcard-list">
                  <li><strong>Indian Contract Act, 1872 (§ 55):</strong> Effect of failure to perform at fixed time when time is of the essence.</li>
                  <li><strong>Indian Contract Act, 1872 (§ 73 & § 74):</strong> Compensation for loss and liquidated damages provisions.</li>
                  <li><strong>Specific Relief Act, 1963 (§ 20):</strong> Substituted performance of contract.</li>
                </ul>
              </div>

              {/* Column 3: Questions for Deeper Research */}
              <div className="response-subcard">
                <div className="subcard-header">
                  <HelpCircle size={14} color="#C6A15B" />
                  <span>Questions to Investigate</span>
                </div>
                <ul className="subcard-list">
                  <li>Did the parties treat time as the essence of the contract in written communications?</li>
                  <li>Was notice of breach and opportunity to cure formally delivered?</li>
                  <li>Does the contract contain an exclusive dispute resolution or arbitration clause?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
