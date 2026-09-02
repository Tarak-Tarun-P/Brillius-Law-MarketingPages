import React from 'react';
import { Star, FileText, Bookmark, Mic, Clock } from 'lucide-react';
import './JournalBenefits.css';

export const JournalBenefits: React.FC = () => {
  const benefits = [
    {
      title: 'KEY POINTS',
      desc: 'Save important findings and statutory rules while researching.',
      icon: <Star size={20} color="#C6A15B" />,
    },
    {
      title: 'NOTES',
      desc: 'Write down your personal observations, questions, and reminders.',
      icon: <FileText size={20} color="#091526" />,
    },
    {
      title: 'BOOKMARKS',
      desc: 'Pin useful Bare Acts, sections, and court rulings to revisit.',
      icon: <Bookmark size={20} color="#C6A15B" />,
    },
    {
      title: 'VOICE',
      desc: 'Capture a sudden thought by speaking without stopping to type.',
      icon: <Mic size={20} color="#091526" />,
    },
    {
      title: 'CONTINUE',
      desc: 'Come back to your saved notes and resume right where you left off.',
      icon: <Clock size={20} color="#C6A15B" />,
    },
  ];

  return (
    <section className="journal-benefits-section" aria-labelledby="benefits-heading">
      <div className="content-container">
        <div className="benefits-header">
          <span className="benefits-eyebrow">CORE ADVANTAGES</span>
          <h2 id="benefits-heading" className="benefits-title">
            Everything You Want to Remember, in One Place.
          </h2>
          <p className="benefits-desc">
            Five essential tools that give legal professionals and students a personal, uncluttered home for their work.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((b, idx) => (
            <div key={idx} className="benefit-card">
              <div className="benefit-icon-wrap">{b.icon}</div>
              <h3 className="benefit-title">{b.title}</h3>
              <p className="benefit-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
