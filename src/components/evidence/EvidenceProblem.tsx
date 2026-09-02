import React from 'react';
import { FolderX, Scale, History } from 'lucide-react';
import './EvidenceProblem.css';

export const EvidenceProblem: React.FC = () => {
  const problems = [
    {
      title: 'Scattered Files',
      desc: 'Important exhibits and documents often end up scattered across emails, chat threads, and disparate local folders.',
      icon: <FolderX size={22} color="#091526" />,
    },
    {
      title: 'Case Context',
      desc: 'Evidence is much easier to understand and evaluate when you know exactly which legal matter it belongs to.',
      icon: <Scale size={22} color="#C6A15B" />,
      featured: true,
    },
    {
      title: 'Past Evidence Access',
      desc: 'You frequently need to return to earlier evidence while drafting pleadings, briefing seniors, or preparing for hearings.',
      icon: <History size={22} color="#091526" />,
    },
  ];

  return (
    <section className="evidence-problem-section" aria-labelledby="evidence-problem-heading">
      <div className="content-container">
        <div className="evidence-problem-header">
          <span className="evidence-problem-eyebrow">THE CHALLENGE</span>
          <h2 id="evidence-problem-heading" className="evidence-problem-title">
            Evidence Shouldn't Be Difficult to Find.
          </h2>
          <p className="evidence-problem-desc">
            When evidence is kept in different folders or places, it can take longer to find the right item later when time is critical.
          </p>
        </div>

        <div className="evidence-problem-grid">
          {problems.map((p, idx) => (
            <div key={idx} className={`evidence-problem-card ${p.featured ? 'featured-problem-card' : ''}`}>
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
