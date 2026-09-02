import React from 'react';
import './visuals.css';
import { Sparkles, User, Bookmark } from 'lucide-react';

export const AIAssistantVisual: React.FC = () => {
  return (
    <div className="visual-card ai-assistant-visual-card">
      <div className="visual-window-header">
        <div className="visual-window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="visual-window-title">Brillius AI Legal Intelligence Assistant</span>
        <span className="visual-badge-ai">
          <Sparkles size={12} color="#C6A15B" />
          <span>Active Jurisprudence Model</span>
        </span>
      </div>

      <div className="ai-assistant-body">
        {/* User Query Message */}
        <div className="ai-msg user-msg">
          <div className="msg-avatar user-avatar">
            <User size={16} color="#091526" />
          </div>
          <div className="msg-bubble user-bubble">
            <span className="msg-sender">Senior Counsel</span>
            <p className="msg-text">
              Summarize the limitation period and key threshold grounds under Section 34 of the Arbitration Act for our upcoming challenge.
            </p>
          </div>
        </div>

        {/* AI Assistant Context-Rich Response */}
        <div className="ai-msg bot-msg">
          <div className="msg-avatar bot-avatar">
            <Sparkles size={16} color="#C6A15B" />
          </div>
          <div className="msg-bubble bot-bubble">
            <div className="bot-header">
              <span className="bot-name">Brillius Legal Intelligence</span>
              <span className="bot-tag">Context: Indian Arbitration Law</span>
            </div>

            <p className="bot-summary">
              Under <strong>Section 34(3)</strong> of the <em>Arbitration and Conciliation Act, 1996</em>:
            </p>

            <ul className="bot-points-list">
              <li>
                <strong>Limitation Period:</strong> 3 months from the date of receipt of the arbitral award (with discretionary condonation of max 30 days under proviso).
              </li>
              <li>
                <strong>Key Ground 1 (Patent Illegality):</strong> Available exclusively under Section 34(2A) for domestic arbitrations where the error goes to the root of the matter.
              </li>
              <li>
                <strong>Key Ground 2 (Public Policy):</strong> Violation of fundamental policy of Indian law as settled in <em>Associate Builders</em> and <em>Ssangyong Engineering</em>.
              </li>
            </ul>

            {/* Citations / Reference Badges */}
            <div className="bot-citations-row">
              <div className="citation-pill">
                <Bookmark size={11} color="#C6A15B" />
                <span>Ssangyong Eng. v. NHAI (2019) 15 SCC 131</span>
              </div>
              <div className="citation-pill">
                <Bookmark size={11} color="#C6A15B" />
                <span>Arbitration Act § 34(2A)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
