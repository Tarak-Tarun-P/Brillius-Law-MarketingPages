import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './SupportFAQ.css';

export const SupportFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Who can use BrilliusLaw?',
      a: 'BrilliusLaw is designed for law firms of all sizes, independent lawyers and advocates, corporate legal teams, and law students across India.',
    },
    {
      q: 'How do I get started with BrilliusLaw?',
      a: "Start by exploring the platform's features and setting up your clients, cases, and documents. Our Getting Started section above walks through the basics.",
    },
    {
      q: 'Can I use BrilliusLaw as an individual lawyer?',
      a: 'Yes. Solo practitioners can manage their daily matters, organize case files, use the Drafting Lab, and explore Indian laws in the Law Library.',
    },
    {
      q: 'What if I have a question that is not answered here?',
      a: "If you can't find what you're looking for, reach out to the BrilliusLaw team directly and we'll help you sort it out.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="support-faq-section" aria-labelledby="support-faq-heading">
      <div className="content-container">
        <div className="support-faq-header">
          <div className="support-faq-eyebrow-pill">
            <HelpCircle size={14} color="#C6A15B" />
            <span>COMMON QUESTIONS</span>
          </div>
          <h2 id="support-faq-heading" className="support-faq-title">
            Answers to Common Questions
          </h2>
          <p className="support-faq-desc">
            A few general questions people ask when getting used to BrilliusLaw.
          </p>
        </div>

        <div className="support-faq-accordion-container">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`support-faq-item-card ${isOpen ? 'active-support-faq' : ''}`}
              >
                <button
                  type="button"
                  className="support-faq-question-btn"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`support-faq-answer-${index}`}
                >
                  <span className="support-faq-question-text">{faq.q}</span>
                  <span className="support-faq-chevron-box" aria-hidden="true">
                    <ChevronDown
                      size={18}
                      className={`support-faq-chevron-icon ${isOpen ? 'rotate-open' : ''}`}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`support-faq-answer-${index}`}
                    className="support-faq-answer-box animate-fade-in"
                  >
                    <p className="support-faq-answer-text">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
