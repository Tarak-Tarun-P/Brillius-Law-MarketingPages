import React from 'react';
import { Type, Hash, LayoutGrid } from 'lucide-react';
import './CompareProblem.css';

export const CompareProblem: React.FC = () => {
  const problems = [
    {
      title: 'Word Changes',
      desc: 'A small wording shift or newly inserted qualifier can be easy to overlook when skimming multi-page legal drafts.',
      icon: <Type size={22} color="#091526" />,
    },
    {
      title: 'Numbers & Dates',
      desc: 'Changes to milestone dates, indemnity caps, payment amounts, and notice timelines carry significant implications.',
      icon: <Hash size={22} color="#C6A15B" />,
      featured: true,
    },
    {
      title: 'Structural Shifts',
      desc: 'Sentences, clauses, or table rows may be relocated, added, or removed across successive partner revisions.',
      icon: <LayoutGrid size={22} color="#091526" />,
    },
  ];

  return (
    <section className="compare-problem-section" aria-labelledby="problem-heading">
      <div className="content-container">
        <div className="compare-problem-header">
          <span className="compare-problem-eyebrow">THE CHALLENGE</span>
          <h2 id="problem-heading" className="compare-problem-title">
            Small Changes Can Be Easy to Miss.
          </h2>
          <p className="compare-problem-desc">
            When a document changes over time across multiple revisions, manual side-by-side reading takes hours and leaves room for oversight.
          </p>
        </div>

        <div className="compare-problem-grid">
          {problems.map((p, idx) => (
            <div key={idx} className={`compare-problem-card ${p.featured ? 'featured-problem-card' : ''}`}>
              <div className="problem-icon-wrap">{p.icon}</div>
              <h3 className="problem-card-title">{p.title}</h3>
              <p className="problem-card-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
