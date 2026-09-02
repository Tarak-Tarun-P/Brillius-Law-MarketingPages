import React from 'react';
import { MessageSquare, Pin } from 'lucide-react';
import './DraftingAnnotations.css';

export const DraftingAnnotations: React.FC = () => {
  return (
    <section className="drafting-annotations-section" aria-labelledby="annotations-heading">
      <div className="content-container">
        <div className="annotations-header">
          <span className="annotations-eyebrow">MARGIN NOTES</span>
          <h2 id="annotations-heading" className="annotations-title">
            Add Your Own Notes While You Draft.
          </h2>
          <p className="annotations-desc">
            Attach personal annotations and reminders to specific clauses or sentences so you can leave notes while reviewing or editing.
          </p>
        </div>

        {/* Realistic Annotation Document Visual */}
        <div className="annotations-card">
          <div className="annotations-card-topbar">
            <div className="card-topbar-left">
              <MessageSquare size={16} color="#C6A15B" />
              <strong className="card-topbar-title">Annotated Draft // Service Agreement v2.1</strong>
            </div>
            <span className="card-topbar-badge">2 Personal Notes Attached</span>
          </div>

          <div className="annotations-body">
            {/* Clause with Annotation 1 */}
            <div className="annotated-clause-row">
              <div className="clause-content-col">
                <span className="clause-tag">CLAUSE 4.3 — JURISDICTION</span>
                <p className="clause-text">
                  "This Agreement shall be governed by the laws of India, and the courts at <span className="highlight-target-text">New Delhi</span> shall have exclusive jurisdiction."
                </p>
              </div>

              <div className="annotation-sticky-col">
                <div className="sticky-note-card">
                  <div className="sticky-top">
                    <Pin size={12} color="#C6A15B" />
                    <span className="sticky-author">Personal Reminder</span>
                  </div>
                  <p className="sticky-body">
                    "Verify if client’s registered corporate office requires Mumbai seat instead of Delhi before final exchange."
                  </p>
                </div>
              </div>
            </div>

            {/* Clause with Annotation 2 */}
            <div className="annotated-clause-row">
              <div className="clause-content-col">
                <span className="clause-tag">CLAUSE 8.1 — INDEMNITY LIMITS</span>
                <p className="clause-text">
                  "The aggregate liability of the Consultant under this Agreement shall be limited to the <span className="highlight-target-text">total consulting fees received</span> in the preceding 6 months."
                </p>
              </div>

              <div className="annotation-sticky-col">
                <div className="sticky-note-card featured-sticky">
                  <div className="sticky-top">
                    <Pin size={12} color="#091526" />
                    <span className="sticky-author text-navy">Review Flag</span>
                  </div>
                  <p className="sticky-body">
                    "Review this clause against partner's standard 12-month indemnity requirement."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
