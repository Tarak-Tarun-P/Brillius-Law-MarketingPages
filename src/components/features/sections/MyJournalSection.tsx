import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { MyJournalVisual } from '../visuals/MyJournalVisual';
import './sections.css';

export const MyJournalSection: React.FC = () => {
  return (
    <section id="section-journal" className="workflow-section" aria-labelledby="journal-heading">
      <div className="content-container">
        {/* Section Main Header */}
        <div className="workflow-section-header">
          <div className="section-eyebrow-pill">MY JOURNAL</div>
          <h2 id="journal-heading" className="workflow-section-title">
            Your Legal Notes, Always Within Reach.
          </h2>
          <p className="workflow-section-desc">
            Keep your thoughts, important notes, and useful legal references together in your own personal journal.
          </p>
        </div>

        {/* Feature Showcase Block */}
        <div className="workflow-sub-block layout-visual-left">
          <div className="sub-text-col">
            <span className="sub-tag">01 // RECORD & SAVE NOTES</span>
            <h3 className="sub-title">Have a Thought? Record It Instead of Typing.</h3>
            <p className="sub-desc">
              Remove the burden of typing during busy court days or research sessions. Just record your thought, and BrilliusLaw saves your notes and links them to your cases.
            </p>
            <ul className="sub-bullets">
              <li>
                <CheckCircle2 size={16} color="#C6A15B" />
                <span><strong>Record or Type:</strong> Speak your thoughts after a court hearing or client call—just record it and save it.</span>
              </li>
              <li>
                <CheckCircle2 size={16} color="#C6A15B" />
                <span><strong>Bookmark Useful Laws:</strong> Save key Bare Act sections, exceptions, and judgments while reading in the Law Library.</span>
              </li>
              <li>
                <CheckCircle2 size={16} color="#C6A15B" />
                <span><strong>Organized by Matter:</strong> Tag notes to specific clients and cases so you can quickly return to them when drafting.</span>
              </li>
              <li>
                <CheckCircle2 size={16} color="#C6A15B" />
                <span><strong>Completely Private:</strong> Your journal is your personal notebook, protected with strict encryption and accessible only by you.</span>
              </li>
            </ul>
          </div>
          <div className="sub-visual-col">
            <MyJournalVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
