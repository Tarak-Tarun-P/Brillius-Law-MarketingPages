import React from 'react';
import { ArrowDownUp, Move } from 'lucide-react';
import './CompareMovedContent.css';

export const CompareMovedContent: React.FC = () => {
  return (
    <section className="compare-moved-section" aria-labelledby="moved-heading">
      <div className="content-container">
        <div className="moved-header">
          <span className="moved-eyebrow">STRUCTURAL REORGANIZATION</span>
          <h2 id="moved-heading" className="moved-title">
            See When Content Moves.
          </h2>
          <p className="moved-desc">
            If a sentence or clause has moved to another position in the document, the comparison makes that relocation clear instead of treating it as deleted text.
          </p>
        </div>

        {/* Moved Content Visual */}
        <div className="moved-content-card">
          <div className="moved-card-topbar">
            <div className="moved-topbar-left">
              <ArrowDownUp size={16} color="#C6A15B" />
              <strong className="moved-topbar-title">Clause Order & Section Relocation</strong>
            </div>
            <span className="moved-topbar-badge">Clause Relocation Identified</span>
          </div>

          <div className="moved-split-view">
            {/* Left: Previous Structure */}
            <div className="moved-column">
              <div className="moved-col-header">
                <span className="moved-col-tag">PREVIOUS VERSION</span>
                <span className="moved-status-tag">Original Order</span>
              </div>

              <div className="moved-clause-list">
                <div className="clause-item-box moved-origin">
                  <span className="clause-order-num">01</span>
                  <div className="clause-text-wrap">
                    <strong className="clause-heading">Confidentiality & Non-Disclosure</strong>
                    <p className="clause-snippet">"The Receiving Party shall safeguard all proprietary information..."</p>
                  </div>
                  <span className="origin-marker-pill">Original Position</span>
                </div>

                <div className="clause-item-box">
                  <span className="clause-order-num">02</span>
                  <div className="clause-text-wrap">
                    <strong className="clause-heading">Payment Terms & Milestones</strong>
                    <p className="clause-snippet">"Fees shall be remitted on the first business day of each month..."</p>
                  </div>
                </div>

                <div className="clause-item-box">
                  <span className="clause-order-num">03</span>
                  <div className="clause-text-wrap">
                    <strong className="clause-heading">Termination & Notice</strong>
                    <p className="clause-snippet">"Either party may terminate upon giving 30 days written notice..."</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Current Structure */}
            <div className="moved-column">
              <div className="moved-col-header">
                <span className="moved-col-tag text-gold">CURRENT VERSION</span>
                <span className="moved-status-tag text-gold">Reorganized Order</span>
              </div>

              <div className="moved-clause-list">
                <div className="clause-item-box">
                  <span className="clause-order-num">01</span>
                  <div className="clause-text-wrap">
                    <strong className="clause-heading">Payment Terms & Milestones</strong>
                    <p className="clause-snippet">"Fees shall be remitted on the first business day of each month..."</p>
                  </div>
                </div>

                <div className="clause-item-box">
                  <span className="clause-order-num">02</span>
                  <div className="clause-text-wrap">
                    <strong className="clause-heading">Termination & Notice</strong>
                    <p className="clause-snippet">"Either party may terminate upon giving 30 days written notice..."</p>
                  </div>
                </div>

                <div className="clause-item-box moved-destination">
                  <span className="clause-order-num text-gold">03</span>
                  <div className="clause-text-wrap">
                    <strong className="clause-heading">Confidentiality & Non-Disclosure</strong>
                    <p className="clause-snippet">"The Receiving Party shall safeguard all proprietary information..."</p>
                  </div>
                  <span className="moved-marker-pill">
                    <Move size={11} />
                    <span>Moved from Section 1 to Section 3</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
