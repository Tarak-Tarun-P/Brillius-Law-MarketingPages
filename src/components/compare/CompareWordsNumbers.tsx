import React from 'react';
import { IndianRupee, Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import './CompareWordsNumbers.css';

export const CompareWordsNumbers: React.FC = () => {
  const numberChanges = [
    {
      label: 'CONSIDERATION / FEES',
      icon: <IndianRupee size={16} color="#C6A15B" />,
      previous: '₹50,000 per month',
      current: '₹75,000 per month',
      note: 'Retainer fee increased by ₹25,000',
    },
    {
      label: 'AGREEMENT TERM',
      icon: <Calendar size={16} color="#091526" />,
      previous: '12 months',
      current: '24 months',
      note: 'Contract term doubled to 2 years',
    },
    {
      label: 'TERMINATION NOTICE',
      icon: <Clock size={16} color="#C6A15B" />,
      previous: '30 days prior written notice',
      current: '60 days prior written notice',
      note: 'Notice period extended by 30 days',
    },
    {
      label: 'GOVERNING JURISDICTION',
      icon: <MapPin size={16} color="#091526" />,
      previous: 'Courts at New Delhi',
      current: 'Courts at Mumbai',
      note: 'Exclusive seat changed to Mumbai',
    },
  ];

  return (
    <section className="compare-words-numbers-section" aria-labelledby="words-numbers-heading">
      <div className="content-container">
        <div className="words-numbers-header">
          <span className="words-numbers-eyebrow">PRECISE DETECTION</span>
          <h2 id="words-numbers-heading" className="words-numbers-title">
            Catch Small Changes That Matter.
          </h2>
          <p className="words-numbers-desc">
            Quickly spot changes to words, names, dates, amounts, and other numbers before agreements are executed.
          </p>
        </div>

        <div className="words-numbers-grid">
          {numberChanges.map((item, idx) => (
            <div key={idx} className="number-change-card">
              <div className="card-top-meta">
                <div className="card-icon-wrap">{item.icon}</div>
                <span className="card-category-label">{item.label}</span>
              </div>

              <div className="change-values-row">
                <div className="val-box val-prev">
                  <span className="val-tag">PREVIOUS</span>
                  <strong className="val-text-del">{item.previous}</strong>
                </div>

                <div className="val-arrow" aria-hidden="true">
                  <ArrowRight size={14} color="#C6A15B" />
                </div>

                <div className="val-box val-curr">
                  <span className="val-tag text-gold">CURRENT</span>
                  <strong className="val-text-ins">{item.current}</strong>
                </div>
              </div>

              <span className="change-impact-note">{item.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
