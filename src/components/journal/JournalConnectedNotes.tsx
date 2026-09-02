import React from 'react';
import { BookOpen, MessageSquare, Clock, ArrowDown } from 'lucide-react';
import './JournalConnectedNotes.css';

export const JournalConnectedNotes: React.FC = () => {
  return (
    <section className="journal-connected-section" aria-labelledby="conn-notes-heading">
      <div className="content-container">
        <div className="conn-notes-header">
          <span className="conn-notes-eyebrow">CONTEXTUAL ATTACHMENT</span>
          <h2 id="conn-notes-heading" className="conn-notes-title">
            Keep Your Notes With What You're Reading.
          </h2>
          <p className="conn-notes-desc">
            Save your own thoughts directly alongside the statutes and judgments you are working with so you immediately remember your exact train of thought when you return.
          </p>
        </div>

        {/* Realistic Connected Context Visual Card */}
        <div className="conn-notes-visual-box">
          <div className="conn-visual-topbar">
            <div className="conn-v-left">
              <BookOpen size={16} color="#C6A15B" />
              <strong className="conn-v-title">Context-Attached Note // Indian Contract Act</strong>
            </div>
            <span className="conn-v-badge">Connected Context</span>
          </div>

          <div className="conn-visual-body">
            {/* Primary Statute Provision */}
            <div className="statute-anchor-box">
              <span className="anchor-tag">STATUTORY SOURCE</span>
              <h3 className="anchor-title">The Indian Contract Act, 1872 — Section 10</h3>
              <p className="anchor-text">
                "All agreements are contracts if they are made by the free consent of parties competent to contract, for a lawful consideration..."
              </p>
            </div>

            {/* Connection Arrow */}
            <div className="anchor-arrow-row" aria-hidden="true">
              <ArrowDown size={18} color="#C6A15B" />
              <span className="anchor-arrow-label">YOUR JOURNAL NOTE ATTACHED HERE</span>
              <ArrowDown size={18} color="#C6A15B" />
            </div>

            {/* User's Attached Personal Journal Note */}
            <div className="attached-user-note-card">
              <div className="note-card-header">
                <div className="n-hdr-left">
                  <MessageSquare size={14} color="#C6A15B" />
                  <strong className="n-hdr-title">My Research Note</strong>
                </div>
                <span className="n-hdr-time"><Clock size={11} /> Saved 2 days ago</span>
              </div>
              <p className="n-hdr-body">
                "Examine whether the parties had consensus ad idem on the penalty schedule in Clause 12 before confirming valid consent under Section 10."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
