import React from 'react';
import { Highlighter, BookOpen } from 'lucide-react';
import './ResearchPassages.css';

export const ResearchPassages: React.FC = () => {
  return (
    <section className="research-passages-section" aria-labelledby="passages-heading">
      <div className="content-container">
        <div className="passages-header">
          <span className="passages-eyebrow">TARGETED EXCERPTS</span>
          <h2 id="passages-heading" className="passages-title">
            Get to the Relevant Part Faster.
          </h2>
          <p className="passages-desc">
            See the exact passages and paragraphs in a lengthy judgment that address the statutory question you are researching, directly within full context.
          </p>
        </div>

        {/* Highlighted Passage Visual Container */}
        <div className="passages-card-wrapper">
          <div className="passages-topbar">
            <div className="p-topbar-left">
              <Highlighter size={16} color="#C6A15B" />
              <strong className="p-topbar-title">Highlighted Passage in Context // Supreme Court Landmark Ratio</strong>
            </div>
            <span className="p-topbar-badge">Direct Citation Match</span>
          </div>

          <div className="passages-card-content">
            <div className="judgment-meta-strip">
              <span className="j-title">Khushal Rao v. State of Bombay (AIR 1958 SC 22)</span>
              <span className="j-statute"><BookOpen size={11} /> Indian Evidence Act, 1872 — Section 32(1)</span>
            </div>

            {/* Context paragraph leading up */}
            <p className="context-leading-text">
              ...Upon a careful review of the authorities cited at the Bar, the question which falls for determination is whether a dying declaration can form the sole foundation of conviction without independent corroboration.
            </p>

            {/* Target Highlighted Passage */}
            <div className="target-highlight-box">
              <span className="highlight-tag">KEY RATIO // PARAGRAPH 16</span>
              <p className="highlight-text">
                "Held, that there is no absolute rule of law, or even of prudence, that a dying declaration cannot form the sole basis of conviction unless it is corroborated by other independent evidence. A dying declaration stands on the same footing as any other piece of evidence and has to be judged in the light of surrounding circumstances."
              </p>
            </div>

            {/* Context paragraph trailing */}
            <p className="context-trailing-text">
              ...Each case must be determined on its own merits, keeping in view the circumstances in which the declaration was made, the mental state of the maker, and whether opportunity was afforded for tutoring.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
