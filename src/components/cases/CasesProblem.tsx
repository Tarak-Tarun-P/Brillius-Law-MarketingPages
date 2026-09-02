import React from 'react';
import { Layers, Briefcase, Calendar } from 'lucide-react';
import './CasesProblem.css';

export const CasesProblem: React.FC = () => {
  const problems = [
    {
      title: 'Scattered Details',
      desc: 'Case numbers, court benches, related parties, and order updates end up in different notebooks, folders, and emails.',
      icon: <Layers size={22} color="#091526" />,
    },
    {
      title: 'Multiple Matters',
      desc: 'Managing multiple active suits across high courts, district courts, and tribunals makes prioritizing daily tasks challenging.',
      icon: <Briefcase size={22} color="#C6A15B" />,
      featured: true,
    },
    {
      title: 'Upcoming Hearings',
      desc: 'Important appearance dates, bench numbers, and daily cause list updates can be easy to miss without a unified case calendar.',
      icon: <Calendar size={22} color="#091526" />,
    },
  ];

  return (
    <section className="cases-problem-section" aria-labelledby="cases-problem-heading">
      <div className="content-container">
        <div className="cases-problem-header">
          <span className="cases-problem-eyebrow">THE CHALLENGE</span>
          <h2 id="cases-problem-heading" className="cases-problem-title">
            Important Case Details Can Be Hard to Keep Track Of.
          </h2>
          <p className="cases-problem-desc">
            As the number of matters grows, case information can become difficult to follow when details, clients, hearings, and updates are kept in different places.
          </p>
        </div>

        <div className="cases-problem-grid">
          {problems.map((p, idx) => (
            <div key={idx} className={`cases-problem-card ${p.featured ? 'featured-problem-card' : ''}`}>
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
