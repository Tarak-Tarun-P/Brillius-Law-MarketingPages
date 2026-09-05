import React from 'react';
import { BookOpen, Mic, ArrowRight } from 'lucide-react';
import './SolutionsCallouts.css';

export const SolutionsCallouts: React.FC = () => {
  return (
    <section className="solutions-callouts-section" aria-labelledby="callouts-heading">
      <div className="content-container">
        <div className="callouts-section-header">
          <span className="callouts-eyebrow">SIGNATURE CAPABILITIES</span>
          <h2 id="callouts-heading" className="callouts-title">
            Explore Laws. Capture Thoughts.
          </h2>
          <p className="callouts-desc">
            Two unique capabilities designed to simplify how you explore Indian laws and preserve your daily observations.
          </p>
        </div>

        <div className="callouts-grid">
          {/* CALLOUT 1: LAW LIBRARY */}
          <div className="callout-card law-library-callout">
            <div className="callout-badge">
              <BookOpen size={14} color="#C6A15B" />
              <span>LAW LIBRARY</span>
            </div>

            <h3 className="callout-card-title">Find the Law You Need.</h3>
            <p className="callout-card-desc">
              Explore Indian laws, sections, footnotes, exceptions, and related judgments in one organized place.
            </p>

            {/* Visual Pathway */}
            <div className="callout-pathway">
              <div className="pathway-step">
                <span className="step-label">1. Bare Act</span>
                <span className="step-sub">Indian Contract Act, 1872</span>
              </div>
              <div className="pathway-arrow"><ArrowRight size={14} /></div>
              <div className="pathway-step">
                <span className="step-label">2. Section</span>
                <span className="step-sub">Section 27 (Trade Restraint)</span>
              </div>
              <div className="pathway-arrow"><ArrowRight size={14} /></div>
              <div className="pathway-step">
                <span className="step-label">3. Footnote</span>
                <span className="step-sub">Exception 1 (Goodwill)</span>
              </div>
              <div className="pathway-arrow"><ArrowRight size={14} /></div>
              <div className="pathway-step highlighted-step">
                <span className="step-label">4. Judgment</span>
                <span className="step-sub">Supreme Court Landmark</span>
              </div>
            </div>

            <a href="/features#section-library" className="btn-callout-link">
              <span>Explore Law Library</span>
              <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>

          {/* CALLOUT 2: MY JOURNAL */}
          <div className="callout-card my-journal-callout">
            <div className="callout-badge">
              <Mic size={14} color="#C6A15B" />
              <span>MY JOURNAL</span>
            </div>

            <h3 className="callout-card-title">Your Notes, Always Within Reach.</h3>
            <p className="callout-card-desc">
              Have a thought? Record it instead of typing. Save important notes and bookmark useful Acts and sections so you can come back to them later.
            </p>

            {/* Visual Pathway */}
            <div className="callout-pathway">
              <div className="pathway-step">
                <span className="step-label">1. RECORD</span>
                <span className="step-sub">Speak your thoughts</span>
              </div>
              <div className="pathway-arrow"><ArrowRight size={14} /></div>
              <div className="pathway-step">
                <span className="step-label">2. SAVE</span>
                <span className="step-sub">Saved to case note</span>
              </div>
              <div className="pathway-arrow"><ArrowRight size={14} /></div>
              <div className="pathway-step">
                <span className="step-label">3. BOOKMARK</span>
                <span className="step-sub">Attach Bare Act clause</span>
              </div>
              <div className="pathway-arrow"><ArrowRight size={14} /></div>
              <div className="pathway-step highlighted-step">
                <span className="step-label">4. RETURN</span>
                <span className="step-sub">Instant recall anytime</span>
              </div>
            </div>

            <a href="/features#section-journal" className="btn-callout-link">
              <span>Explore My Journal</span>
              <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
