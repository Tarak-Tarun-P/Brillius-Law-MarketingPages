import React, { useState } from 'react';
import { MessageSquare, CheckCircle2, Search, FileText } from 'lucide-react';
import './AnalyzerAskQuestions.css';

export const AnalyzerAskQuestions: React.FC = () => {
  const sampleQA = [
    {
      q: 'What are the payment terms?',
      a: 'Payment of any approved claim must be remitted within 30 business days following written notice, subject to the cure provisions detailed in Schedule IV.',
      source: 'Section 8.3 // Page 24, Paragraph 2',
      category: 'Payment & Remittance',
    },
    {
      q: 'When does this agreement end?',
      a: 'The agreement remains in effect for an initial term of 36 months from the Effective Date, renewing automatically unless written notice is given 60 days prior.',
      source: 'Section 4.1 // Page 11, Paragraph 1',
      category: 'Term & Renewal',
    },
    {
      q: "What are the buyer's responsibilities?",
      a: 'The buyer is responsible for maintaining all statutory clearances, providing quarterly audit reports, and maintaining valid indemnity insurance.',
      source: 'Section 6.2 // Page 18, Paragraph 3',
      category: 'Buyer Obligations',
    },
    {
      q: 'Where is confidentiality discussed?',
      a: 'Confidentiality obligations are outlined in Clause 12. Non-disclosure duties continue for a period of 24 months following agreement expiration.',
      source: 'Clause 12.4 // Page 32, Paragraph 1',
      category: 'Confidentiality & Non-Disclosure',
    },
    {
      q: 'What happens if the agreement is terminated?',
      a: 'Upon termination for material default, all operational licenses cease immediately and proprietary files must be returned within 14 calendar days.',
      source: 'Section 14.2 // Page 39, Paragraph 4',
      category: 'Termination Consequences',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeQA = sampleQA[activeIndex];

  return (
    <section className="analyzer-ask-section" aria-labelledby="ask-heading">
      <div className="content-container">
        <div className="analyzer-ask-header">
          <span className="ask-eyebrow">NATURAL INQUIRY</span>
          <h2 id="ask-heading" className="ask-title">
            Ask Your Document.
          </h2>
          <p className="ask-desc">
            Instead of searching page by page, ask a question in your own words and find the relevant information more quickly.
          </p>
        </div>

        <div className="analyzer-ask-showcase">
          {/* LEFT: Clickable Questions List */}
          <div className="questions-selector-col" role="tablist">
            <span className="selector-heading">SELECT AN EXAMPLE QUESTION</span>
            {sampleQA.map((item, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={activeIndex === idx}
                className={`question-select-btn ${activeIndex === idx ? 'active-q-btn' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <div className="q-btn-icon">
                  <MessageSquare size={16} />
                </div>
                <div className="q-btn-text">
                  <span className="q-btn-title">"{item.q}"</span>
                  <span className="q-btn-cat">{item.category}</span>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT: Live Grounded Answer Display */}
          <div className="answers-display-col animate-fade-in" key={activeIndex}>
            <div className="answer-display-card">
              <div className="answer-card-header">
                <span className="answer-badge">
                  <CheckCircle2 size={13} color="#C6A15B" />
                  <span>Document Grounded Answer</span>
                </span>
                <span className="answer-source-tag">
                  <FileText size={12} />
                  <span>Commercial_Contract.pdf</span>
                </span>
              </div>

              <div className="answer-body-section">
                <span className="answer-question-echo">"{activeQA.q}"</span>
                <p className="answer-main-text">{activeQA.a}</p>
              </div>

              <div className="answer-footer-citation">
                <div className="citation-indicator">
                  <Search size={14} color="#C6A15B" />
                  <span className="citation-label">Direct Citation:</span>
                  <strong className="citation-val">{activeQA.source}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
