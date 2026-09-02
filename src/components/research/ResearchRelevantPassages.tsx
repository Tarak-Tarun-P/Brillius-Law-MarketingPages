import React, { useState } from 'react';
import { Highlighter, FileText, CheckCircle2 } from 'lucide-react';
import './ResearchRelevantPassages.css';

export const ResearchRelevantPassages: React.FC = () => {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <section className="relevant-passages-section" aria-labelledby="passages-heading">
      <div className="content-container">
        <div className="passages-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">FOCUSED REVIEW</span>
          </div>
          <h2 id="passages-heading" className="passages-title">
            Get to the Important Parts.
          </h2>
          <p className="passages-desc">
            See the parts of a judgment that relate to what you are researching, while keeping the full decision available for review.
          </p>
        </div>

        {/* Realistic Judgment Reader Mockup */}
        <div className="reader-mockup-card">
          <div className="reader-topbar">
            <div className="reader-topbar-left">
              <span className="reader-court-badge">Supreme Court of India</span>
              <strong className="reader-case-title">
                Khushal Rao v. State of Bombay — (1958 SCR 552)
              </strong>
            </div>
            <div className="reader-topbar-right">
              <button
                type="button"
                className="btn-toggle-view"
                onClick={() => setShowFullText(!showFullText)}
              >
                <FileText size={13} />
                <span>{showFullText ? 'Show Relevant Excerpt' : 'View Full Judgment Context'}</span>
              </button>
            </div>
          </div>

          <div className="reader-body">
            {/* Surrounding Context Paragraph */}
            <div className="judgment-para muted-para">
              <span className="para-number">[Para 14]</span>
              <p className="para-text">
                ...The provisions of Section 32(1) of the Indian Evidence Act mark a distinct statutory departure from the general common law rule against hearsay. Statements, written or verbal, of relevant facts made by a person who is dead are admissible in proceedings...
              </p>
            </div>

            {/* High-Impact Relevant Passage Callout */}
            <div className="highlighted-passage-box">
              <div className="passage-badge-row">
                <span className="passage-tag">
                  <Highlighter size={12} />
                  <span>RELEVANT HOLDING PASSAGE</span>
                </span>
                <span className="passage-topic-tag">Subject: Evidentiary Value of Dying Declaration</span>
              </div>

              <div className="passage-quote-content">
                <span className="para-number gold-para">[Para 16]</span>
                <blockquote className="passage-quote-text">
                  "In order to pass the test of reliability, a dying declaration has to be subjected to a very close scrutiny, keeping in view the fact that the statement was made in the absence of the accused who had no opportunity of testing its veracity by cross-examination. But once the court is satisfied that the declaration was true and voluntary, it can undoubtedly base its conviction on it, without requiring corroboration."
                </blockquote>
              </div>
            </div>

            {/* Trailing Context Paragraph */}
            <div className="judgment-para muted-para">
              <span className="para-number">[Para 17]</span>
              <p className="para-text">
                ...The court must, however, satisfy itself that the deceased was in a fit physical and mental condition to make the statement, having had clear opportunity of observation without coaching or prompting by interested parties...
              </p>
            </div>
          </div>

          {/* Context Notice Footer */}
          <div className="reader-footer-note">
            <CheckCircle2 size={13} color="#C6A15B" />
            <span>
              Passage highlights surface relevant holding sections based on your research query. Always examine the surrounding factual matrix and full ratio before finalizing submissions.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
