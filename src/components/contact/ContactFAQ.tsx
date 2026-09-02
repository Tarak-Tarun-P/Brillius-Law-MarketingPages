import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './ContactFAQ.css';

export const ContactFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Who can use BrilliusLaw?',
      a: 'BrilliusLaw is designed for law firms of all sizes, independent lawyers and advocates, corporate legal teams, and law students across India.',
    },
    {
      q: 'Can I use BrilliusLaw as an individual lawyer?',
      a: 'Yes, absolutely. Solo practitioners can easily manage their daily matters, receive automatic court updates, organize files, use the Drafting Lab, and explore Indian laws in the Law Library.',
    },
    {
      q: 'Is BrilliusLaw available for law students?',
      a: 'Yes. Law students can explore Bare Acts, read simplified case summaries, study landmark court decisions, and prepare research briefs with verified citations.',
    },
    {
      q: 'How can I get started?',
      a: 'You can reach out through the contact form above to request an onboarding walkthrough, or click "Get Started" to begin exploring the platform.',
    },
    {
      q: 'What can I contact BrilliusLaw about?',
      a: 'You can reach out to us for practice demonstrations, firm team setup, student access inquiries, product questions, or any technical and account assistance.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="contact-faq-section" aria-labelledby="faq-heading">
      <div className="content-container">
        <div className="faq-section-header">
          <div className="faq-eyebrow-pill">
            <HelpCircle size={14} color="#C6A15B" />
            <span>COMMON QUESTIONS</span>
          </div>
          <h2 id="faq-heading" className="faq-section-title">
            Questions? We've Got You Covered.
          </h2>
          <p className="faq-section-desc">
            Find quick answers to common questions about using BrilliusLaw, getting started, and reaching our team.
          </p>
        </div>

        <div className="faq-accordion-container">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item-card ${isOpen ? 'active-faq' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="faq-question-text">{faq.q}</span>
                  <span className="faq-chevron-box" aria-hidden="true">
                    <ChevronDown
                      size={18}
                      className={`faq-chevron-icon ${isOpen ? 'rotate-open' : ''}`}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="faq-answer-box animate-fade-in"
                  >
                    <p className="faq-answer-text">{faq.a}</p>
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
