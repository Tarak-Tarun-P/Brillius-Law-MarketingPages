import React from 'react';
import { Star, BookOpen, Clock } from 'lucide-react';
import './JournalKeyPoints.css';

export const JournalKeyPoints: React.FC = () => {
  const points = [
    {
      title: 'Section 10 Core Contractual Validity',
      content: 'Section 10 requires free consent, lawful consideration, competent parties, and lawful object for a valid contract.',
      source: 'The Indian Contract Act, 1872 // Section 10',
      date: 'Saved Today at 10:30 AM',
    },
    {
      title: 'Employment Non-Compete Validity Rule',
      content: 'Negative covenants operating during the term of employment are valid and not in restraint of trade under Section 27.',
      source: 'Niranjan Shankar Golikari v. Century Spg. (1967 SCR 378)',
      date: 'Saved Yesterday',
    },
    {
      title: 'Cheque Bounce Statutory Notice Timeline',
      content: 'Formal demand notice under Section 138 must be issued within 30 days of receiving the cheque dishonour bank memo.',
      source: 'The Negotiable Instruments Act, 1881 // Section 138',
      date: 'Saved 3 days ago',
    },
  ];

  return (
    <section className="journal-kp-section" aria-labelledby="kp-heading">
      <div className="content-container">
        <div className="kp-header">
          <span className="kp-eyebrow">KEY POINTS</span>
          <h2 id="kp-heading" className="kp-title">
            Keep the Things That Matter.
          </h2>
          <p className="kp-desc">
            Save important points while you are reading statutes, researching case law, or preparing drafts so you can easily return to them later.
          </p>
        </div>

        {/* Key Points List Visual Card */}
        <div className="kp-visual-card">
          <div className="kp-card-topbar">
            <div className="kp-topbar-left">
              <Star size={16} color="#C6A15B" />
              <strong className="kp-topbar-title">Saved Key Points // Personal Journal</strong>
            </div>
            <span className="kp-topbar-badge">3 Key Points</span>
          </div>

          <div className="kp-items-list">
            {points.map((pt, idx) => (
              <div key={idx} className="kp-item-row">
                <div className="kp-star-box">
                  <Star size={16} color="#C6A15B" fill="#C6A15B" />
                </div>

                <div className="kp-content-col">
                  <div className="kp-meta-top">
                    <span className="kp-title-text">{pt.title}</span>
                    <span className="kp-date-text"><Clock size={11} /> {pt.date}</span>
                  </div>
                  <p className="kp-body-p">"{pt.content}"</p>
                  <div className="kp-source-line">
                    <BookOpen size={12} color="#C6A15B" />
                    <span>Source: {pt.source}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
