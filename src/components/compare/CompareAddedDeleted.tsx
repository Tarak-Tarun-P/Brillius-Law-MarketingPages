import React from 'react';
import { Plus, Minus } from 'lucide-react';
import './CompareAddedDeleted.css';

export const CompareAddedDeleted: React.FC = () => {
  return (
    <section className="compare-added-deleted-section" aria-labelledby="added-deleted-heading">
      <div className="content-container">
        <div className="added-deleted-header">
          <span className="added-deleted-eyebrow">DIFF HIGHLIGHTING</span>
          <h2 id="added-deleted-heading" className="added-deleted-title">
            Spot Added and Deleted Text.
          </h2>
          <p className="added-deleted-desc">
            See which parts of the document were added, removed, or updated between versions without guessing.
          </p>
        </div>

        <div className="added-deleted-grid">
          {/* Box 1: Deleted Text Highlighting */}
          <div className="diff-card-box deleted-box">
            <div className="diff-box-header">
              <div className="badge-tag deleted-badge">
                <Minus size={13} strokeWidth={2.5} />
                <span>DELETED / REMOVED TEXT</span>
              </div>
              <span className="version-indicator">Baseline Draft</span>
            </div>

            <h3 className="diff-box-title">Previous Version</h3>
            <div className="diff-passage-box">
              <p className="passage-text">
                "The agreement shall remain valid for <span className="diff-text-deleted">12 months</span> from the date of execution, <span className="diff-text-deleted">subject to quarterly oral reviews</span>."
              </p>
            </div>
            <span className="diff-caption">Struck-through in red to clearly show removed commitments</span>
          </div>

          {/* Box 2: Added Text Highlighting */}
          <div className="diff-card-box added-box">
            <div className="diff-box-header">
              <div className="badge-tag added-badge">
                <Plus size={13} strokeWidth={2.5} />
                <span>ADDED / INSERTED TEXT</span>
              </div>
              <span className="version-indicator text-gold">Current Draft</span>
            </div>

            <h3 className="diff-box-title">Revised Version</h3>
            <div className="diff-passage-box">
              <p className="passage-text">
                "The agreement shall remain valid for <span className="diff-text-added">24 months</span> from the date of execution. <span className="diff-text-added">All intellectual property created during employment shall vest exclusively in the Company.</span>"
              </p>
            </div>
            <span className="diff-caption">Highlighted in green to instantly identify newly introduced covenants</span>
          </div>
        </div>
      </div>
    </section>
  );
};
