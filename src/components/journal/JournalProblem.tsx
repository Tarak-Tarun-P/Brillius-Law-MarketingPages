import React from 'react';
import { Star, Bookmark, Mic, Clock } from 'lucide-react';
import './JournalProblem.css';

export const JournalProblem: React.FC = () => {
  const points = [
    {
      title: 'IMPORTANT POINT',
      label: 'Save It Instantly',
      desc: 'Preserve key statutory definitions or judicial principles instead of hoping you will remember them later.',
      icon: <Star size={20} color="#091526" />,
    },
    {
      title: 'USEFUL SOURCE',
      label: 'Bookmark For Later',
      desc: 'Pin relevant Acts, sections, or court rulings so you can quickly jump back to them whenever needed.',
      icon: <Bookmark size={20} color="#091526" />,
    },
    {
      title: 'QUICK THOUGHT',
      label: 'Speak Without Typing',
      desc: 'Capture a sudden legal insight or argument angle by speaking without breaking your reading flow.',
      icon: <Mic size={20} color="#C6A15B" />,
      featured: true,
    },
    {
      title: 'CONTINUE LATER',
      label: 'Pick Up Seamlessly',
      desc: 'Return to your saved notes and bookmarked provisions whenever you are ready to resume work.',
      icon: <Clock size={20} color="#091526" />,
    },
  ];

  return (
    <section className="journal-problem-section" aria-labelledby="prob-heading">
      <div className="content-container">
        <div className="journal-problem-header">
          <span className="journal-problem-eyebrow">THE CHALLENGE</span>
          <h2 id="prob-heading" className="journal-problem-title">
            Good Ideas Can Come at the Wrong Time.
          </h2>
          <p className="journal-problem-desc">
            While reading a complex statute or preparing a brief, you may encounter an important reference or have a sudden legal insight. Stopping to organize it manually disrupts your focus.
          </p>
        </div>

        <div className="journal-problem-grid">
          {points.map((p, idx) => (
            <div key={idx} className={`journal-problem-card ${p.featured ? 'featured-prob-card' : ''}`}>
              <div className="prob-card-top">
                <span className="prob-action-pill">{p.title}</span>
                <div className="prob-icon-box">{p.icon}</div>
              </div>

              <h3 className="prob-card-title">{p.label}</h3>
              <p className="prob-card-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
