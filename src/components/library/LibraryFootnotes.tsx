import React from 'react';
import { CornerDownRight, ArrowUpRight } from 'lucide-react';
import './LibraryFootnotes.css';

export const LibraryFootnotes: React.FC = () => {
  return (
    <section className="library-fn-section" aria-labelledby="footnotes-heading">
      <div className="content-container">
        <div className="fn-header">
          <span className="fn-eyebrow">STATUTORY CROSS-REFERENCES</span>
          <h2 id="footnotes-heading" className="fn-title">
            Follow the References.
          </h2>
          <p className="fn-desc">
            When a provision includes a legislative footnote, exception, or statutory reference, easily follow it to explore related legal principles without losing your place.
          </p>
        </div>

        {/* Realistic Interactive Footnotes & Reference Demonstration Card */}
        <div className="fn-demo-card">
          <div className="fn-demo-topbar">
            <div className="fn-topbar-left">
              <CornerDownRight size={16} color="#C6A15B" />
              <strong className="fn-topbar-title">The Indian Contract Act, 1872 // Section 27</strong>
            </div>
            <span className="fn-topbar-badge">Interactive Footnotes Active</span>
          </div>

          <div className="fn-demo-body">
            {/* Primary Provision Block */}
            <div className="primary-provision-box">
              <span className="fn-provision-tag">SECTION 27 — AGREEMENT IN RESTRAINT OF TRADE VOID</span>
              <p className="fn-provision-p">
                "Every agreement by which anyone is restrained from exercising a lawful profession, trade or business of any kind, is to that extent void. <span className="footnote-anchor" title="View Exception 1">[Footnote 1]</span>"
              </p>
            </div>

            {/* Connected Footnote Detail */}
            <div className="footnote-detail-card">
              <div className="fn-detail-header">
                <span className="fn-badge-solid">[Footnote 1]</span>
                <span className="fn-detail-title">Statutory Exception — Sale of Goodwill</span>
              </div>
              <p className="fn-detail-text">
                "Exception 1: One who sells the goodwill of a business may agree with the buyer to refrain from carrying on a similar business, within specified local limits, so long as the buyer, or any person deriving title to the goodwill from him, carries on a like business therein..."
              </p>
            </div>

            {/* Related Statutory Links Grid */}
            <div className="related-statutes-grid">
              <div className="statute-link-item">
                <div className="statute-link-top">
                  <span className="statute-tag">CONNECTED SECTION</span>
                  <ArrowUpRight size={13} color="#C6A15B" />
                </div>
                <strong className="statute-title">Section 28</strong>
                <p className="statute-sub">Agreements in restraint of legal proceedings void.</p>
              </div>

              <div className="statute-link-item">
                <div className="statute-link-top">
                  <span className="statute-tag">CONNECTED SECTION</span>
                  <ArrowUpRight size={13} color="#C6A15B" />
                </div>
                <strong className="statute-title">Section 73</strong>
                <p className="statute-sub">Compensation for loss or damage caused by breach.</p>
              </div>

              <div className="statute-link-item">
                <div className="statute-link-top">
                  <span className="statute-tag">CONNECTED SECTION</span>
                  <ArrowUpRight size={13} color="#C6A15B" />
                </div>
                <strong className="statute-title">Section 74</strong>
                <p className="statute-sub">Compensation for breach where penalty stipulated.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
