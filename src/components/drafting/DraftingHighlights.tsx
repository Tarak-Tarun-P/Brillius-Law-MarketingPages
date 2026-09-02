import React from 'react';
import { Highlighter } from 'lucide-react';
import './DraftingHighlights.css';

export const DraftingHighlights: React.FC = () => {
  return (
    <section className="drafting-highlights-section" aria-labelledby="highlights-heading">
      <div className="content-container">
        <div className="highlights-header">
          <span className="highlights-eyebrow">VISUAL EMPHASIS</span>
          <h2 id="highlights-heading" className="highlights-title">
            Highlight What Matters.
          </h2>
          <p className="highlights-desc">
            Use colors, underlines, and background highlights to draw immediate attention to critical terms, conditions, and payment deadlines.
          </p>
        </div>

        {/* Realistic Text Styling Demonstration Card */}
        <div className="highlights-demo-card">
          <div className="demo-card-topbar">
            <div className="topbar-left">
              <Highlighter size={16} color="#C6A15B" />
              <strong className="topbar-title">Text Emphasis &amp; Color Palette Demo</strong>
            </div>
            <span className="topbar-badge">Live Document View</span>
          </div>

          <div className="demo-card-body">
            <div className="style-sample-row">
              <span className="style-type-tag">NORMAL BODY</span>
              <p className="sample-text plain">
                "The Contractor shall deliver the project deliverables in accordance with the agreed schedule."
              </p>
            </div>

            <div className="style-sample-row">
              <span className="style-type-tag text-bold-tag">BOLD DEFINITION</span>
              <p className="sample-text bold">
                "The <strong>'Effective Date'</strong> shall mean the date of formal signing by both authorized signatories."
              </p>
            </div>

            <div className="style-sample-row">
              <span className="style-type-tag text-under-tag">UNDERLINE TIMELINE</span>
              <p className="sample-text underline">
                "All notices shall be served <u>within forty-eight (48) hours</u> of any material occurrence."
              </p>
            </div>

            <div className="style-sample-row">
              <span className="style-type-tag text-high-tag">YELLOW HIGHLIGHT</span>
              <p className="sample-text highlight">
                "The total aggregate liquidated damages shall be capped at <mark className="yellow-mark">₹10,00,000 (Rupees Ten Lakhs)</mark>."
              </p>
            </div>

            <div className="style-sample-row">
              <span className="style-type-tag text-color-tag">COLORED ACCENT</span>
              <p className="sample-text colored">
                <span className="text-amber-warning">Important Notice:</span> Non-compliance with statutory filings constitutes an irremediable material breach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
