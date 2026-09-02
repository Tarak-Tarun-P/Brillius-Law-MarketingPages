import React from 'react';
import { Bold, Underline, ArrowRight } from 'lucide-react';
import './CompareFormatting.css';

export const CompareFormatting: React.FC = () => {
  return (
    <section className="compare-formatting-section" aria-labelledby="formatting-heading">
      <div className="content-container">
        <div className="formatting-header">
          <span className="formatting-eyebrow">STYLE & EMPHASIS</span>
          <h2 id="formatting-heading" className="formatting-title">
            See Changes to Formatting Too.
          </h2>
          <p className="formatting-desc">
            Review styling, emphasis, and hierarchy adjustments alongside changes to the document content.
          </p>
        </div>

        {/* Formatting Detection Cards */}
        <div className="formatting-grid">
          {/* Card 1: Heading Weight & Capitalization */}
          <div className="formatting-card">
            <div className="format-icon-bar">
              <Bold size={16} color="#C6A15B" />
              <span className="format-type-label">HEADING WEIGHT & CAPITALIZATION</span>
            </div>
            <div className="format-compare-split">
              <div className="format-side">
                <span className="format-side-tag">PREVIOUS</span>
                <p className="format-text-plain">Important Notice</p>
              </div>
              <div className="format-arrow" aria-hidden="true">
                <ArrowRight size={14} color="#C6A15B" />
              </div>
              <div className="format-side">
                <span className="format-side-tag text-gold">CURRENT</span>
                <p className="format-text-bold">IMPORTANT NOTICE</p>
              </div>
            </div>
            <span className="format-note">Detected: Changed to all-caps uppercase with bold weight</span>
          </div>

          {/* Card 2: Legal Emphasis & Underline */}
          <div className="formatting-card">
            <div className="format-icon-bar">
              <Underline size={16} color="#091526" />
              <span className="format-type-label">EMPHASIS & UNDERLINING</span>
            </div>
            <div className="format-compare-split">
              <div className="format-side">
                <span className="format-side-tag">PREVIOUS</span>
                <p className="format-text-plain">Time is of the essence for delivery.</p>
              </div>
              <div className="format-arrow" aria-hidden="true">
                <ArrowRight size={14} color="#C6A15B" />
              </div>
              <div className="format-side">
                <span className="format-side-tag text-gold">CURRENT</span>
                <p className="format-text-underlined"><em><u>Time is of the essence for delivery.</u></em></p>
              </div>
            </div>
            <span className="format-note">Detected: Added italicized underline for contractual emphasis</span>
          </div>
        </div>
      </div>
    </section>
  );
};
