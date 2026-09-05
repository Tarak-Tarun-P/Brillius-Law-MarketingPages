import React from 'react';
import { FileText, Briefcase, ChevronRight } from 'lucide-react';
import './ClientsNotesAndCases.css';

export const ClientsNotesAndCases: React.FC = () => {
  return (
    <section className="clients-notes-cases-section" aria-labelledby="notes-cases-heading">
      <div className="content-container">
        <div className="notes-cases-header">
          <span className="notes-cases-eyebrow">NOTES & MATTERS</span>
          <h2 id="notes-cases-heading" className="notes-cases-title">
            Keep Important Notes & Connected Cases Together.
          </h2>
          <p className="notes-cases-desc">
            Attach client notes for quick reference and navigate all active or historical legal matters connected to their profile.
          </p>
        </div>

        <div className="notes-cases-dual-grid">
          {/* LEFT: Client Notes */}
          <div className="nc-card-box">
            <div className="nc-card-header">
              <div className="nc-icon-wrap">
                <FileText size={20} color="#C6A15B" />
              </div>
              <div>
                <span className="nc-eyebrow-tag">CLIENT NOTES</span>
                <h3 className="nc-card-title">Keep Important Details Close.</h3>
              </div>
            </div>

            <p className="nc-card-text">
              Add private notes about client preferences, meeting discussions, and key instructions so details never slip through the cracks.
            </p>

            <div className="nc-notes-demo">
              <div className="demo-note-bubble">
                <div className="note-meta-row">
                  <strong className="note-author-name">Senior Advocate Note</strong>
                  <span className="note-timestamp">12 Aug 2026</span>
                </div>
                <p className="note-content-text">
                  "Client confirmed that the original contract amendments were signed via courier in June 2024. Documents to be added to Evidence Storage for Section 65B compliance."
                </p>
              </div>

              <div className="demo-note-bubble">
                <div className="note-meta-row">
                  <strong className="note-author-name">Briefing Note</strong>
                  <span className="note-timestamp">02 Aug 2026</span>
                </div>
                <p className="note-content-text">
                  "Client prefers evening phone check-ins on hearing outcomes prior to weekly board review."
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Connected Matters (Linked to Cases) */}
          <div className="nc-card-box featured-nc-box">
            <div className="nc-card-header">
              <div className="nc-icon-wrap nc-icon-navy">
                <Briefcase size={20} color="#091526" />
              </div>
              <div>
                <span className="nc-eyebrow-tag">RELATED CASES</span>
                <h3 className="nc-card-title">See the Matters Connected to a Client.</h3>
              </div>
            </div>

            <p className="nc-card-text">
              Connect multiple ongoing matters, tribunal applications, and advisory files directly to the client's master profile.
            </p>

            <div className="nc-cases-demo">
              <a href="/cases" className="demo-case-item demo-case-link" title="Open Case in Case Management">
                <div className="case-item-info">
                  <span className="case-item-name">Commercial Injunction Suit</span>
                  <span className="case-court-tag">Delhi High Court • Active</span>
                </div>
                <div className="case-state-col">
                  <span className="case-state-badge badge-active">In Progress</span>
                  <ChevronRight size={14} className="case-arrow-icon" />
                </div>
              </a>

              <a href="/cases" className="demo-case-item demo-case-link" title="Open Case in Case Management">
                <div className="case-item-info">
                  <span className="case-item-name">NCLT Section 9 Company Defense</span>
                  <span className="case-court-tag">NCLT New Delhi Bench • Active</span>
                </div>
                <div className="case-state-col">
                  <span className="case-state-badge badge-hearing">Hearing Scheduled</span>
                  <ChevronRight size={14} className="case-arrow-icon" />
                </div>
              </a>

              <a href="/cases" className="demo-case-item demo-case-link" title="Open Case in Case Management">
                <div className="case-item-info">
                  <span className="case-item-name">Share Purchase Agreement Review</span>
                  <span className="case-court-tag">Corporate Advisory • Closed</span>
                </div>
                <div className="case-state-col">
                  <span className="case-state-badge badge-closed">Completed</span>
                  <ChevronRight size={14} className="case-arrow-icon" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
