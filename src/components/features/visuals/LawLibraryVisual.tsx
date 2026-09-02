import React from 'react';
import './visuals.css';
import { BookOpen, Search, Bookmark, Scale, ExternalLink } from 'lucide-react';

export const LawLibraryVisual: React.FC = () => {
  return (
    <div className="visual-card library-visual-card">
      <div className="visual-window-header">
        <div className="visual-window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="visual-window-title">Law Library // Indian Contract Act, 1872</span>
        <span className="visual-badge-shield">
          <BookOpen size={12} />
          <span>Bare Act Reader</span>
        </span>
      </div>

      <div className="library-body">
        {/* Search & Navigation Bar */}
        <div className="library-search-bar">
          <Search size={15} color="#C6A15B" />
          <span className="library-search-text">Search Acts, sections, or keywords (e.g. "Section 27 Non-Compete")</span>
          <span className="search-kbd">Bare Acts</span>
        </div>

        {/* Two-Column Reader Layout */}
        <div className="library-reader-grid">
          {/* Left Column: Bare Act Section Reading Pane */}
          <div className="library-section-pane">
            <div className="section-pane-header">
              <div className="section-title-group">
                <span className="act-name">Indian Contract Act, 1872</span>
                <h4 className="section-heading">Section 27 — Agreement in Restraint of Trade Void</h4>
              </div>
              <div className="bookmark-action" title="Saved to My Journal">
                <Bookmark size={15} color="#C6A15B" fill="#C6A15B" />
              </div>
            </div>

            <div className="section-content-box">
              <p className="provision-text">
                "Every agreement by which anyone is restrained from exercising a lawful profession, trade or business of any kind, is to that extent <span className="highlight-term">void</span>."
              </p>
              
              <div className="exception-card">
                <span className="exception-label">Exception 1 // Sale of Goodwill</span>
                <p className="exception-text">
                  One who sells the goodwill of a business may agree with the buyer to refrain from carrying on a similar business within specified local limits...
                </p>
              </div>

              <div className="footnote-row">
                <span className="footnote-num">[1]</span>
                <span className="footnote-text">Subject to reasonable geographic limits verified by the Court.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Connected Judgments & Related Sections */}
          <div className="library-related-pane">
            <div className="related-header">
              <Scale size={14} color="#C6A15B" />
              <span className="related-title">Connected Court Decisions</span>
            </div>

            <div className="related-cases-list">
              {/* Case 1 */}
              <div className="related-case-item">
                <div className="case-item-top">
                  <span className="case-court-tag">Supreme Court of India</span>
                  <span className="case-year">1967 SCR (2) 378</span>
                </div>
                <h5 className="case-item-title">Niranjan Shankar Golikari v. Century Spg. & Mfg. Co.</h5>
                <p className="case-item-desc">
                  Held: Negative covenants during the term of employment are valid and not in restraint of trade under Section 27.
                </p>
                <div className="case-item-link">
                  <span>Read Decision</span>
                  <ExternalLink size={11} />
                </div>
              </div>

              {/* Case 2 */}
              <div className="related-case-item">
                <div className="case-item-top">
                  <span className="case-court-tag">Delhi High Court</span>
                  <span className="case-year">2006 (32) PTC 609</span>
                </div>
                <h5 className="case-item-title">Percept D'Mark v. Zaheer Khan</h5>
                <p className="case-item-desc">
                  Post-contractual non-compete restrictions are void and unenforceable under Indian law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
