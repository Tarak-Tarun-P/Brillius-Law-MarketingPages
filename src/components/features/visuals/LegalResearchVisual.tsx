import React from 'react';
import './visuals.css';
import { Search, Scale, BookOpen, ExternalLink } from 'lucide-react';

export const LegalResearchVisual: React.FC = () => {
  return (
    <div className="visual-card research-visual-card">
      <div className="visual-window-header">
        <div className="visual-window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="visual-window-title">Legal Research // Supreme Court & High Court Precedents</span>
        <div className="visual-badge-shield">
          <Scale size={12} />
          <span>Judicial Repository</span>
        </div>
      </div>

      <div className="research-body">
        {/* Natural Language Query Bar */}
        <div className="research-query-bar">
          <Search size={15} color="#C6A15B" />
          <span className="query-text">"Can an arbitral tribunal grant interim injunction under Section 17 after final hearing concludes?"</span>
        </div>

        {/* Case Results List */}
        <div className="research-results-list">
          {/* Result 1 */}
          <div className="research-result-card featured">
            <div className="result-top-row">
              <span className="case-citation">Supreme Court of India • (2021) 9 SCC 1</span>
              <span className="relevance-score">98% Match</span>
            </div>
            <h5 className="case-title">Amazon.com NV Investment Holdings vs. Future Retail Ltd.</h5>
            <p className="case-snippet">
              Held: Emergency Arbitrator orders and Section 17 interim measures are enforceable under Section 17(2) of the Arbitration Act, 1996 prior to award execution.
            </p>
            <div className="result-footer-tags">
              <span className="statute-pill"><BookOpen size={11} /> Arbitration Act § 17(1), § 17(2)</span>
              <span className="read-case-link">Read Full Judgment <ExternalLink size={11} /></span>
            </div>
          </div>

          {/* Result 2 */}
          <div className="research-result-card">
            <div className="result-top-row">
              <span className="case-citation">Delhi High Court • 2023 DHC 4410</span>
              <span className="relevance-score">92% Match</span>
            </div>
            <h5 className="case-title">InterContinental Hotels vs. Shiva Satya Hotels</h5>
            <p className="case-snippet">
              Analysis on the exact scope of power available to the arbitral tribunal under Section 17 post-2015 amendment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
