import React from 'react';
import { Calendar, Clock, FileText } from 'lucide-react';
import './HearingsProblem.css';

export const HearingsProblem: React.FC = () => {
  const problems = [
    {
      title: 'Upcoming Dates',
      desc: 'Know exactly which hearings are coming up across high courts, district courts, and tribunals without missing a date.',
      icon: <Clock size={22} color="#091526" />,
    },
    {
      title: 'Calendar Visibility',
      desc: 'Keep important court appearance dates visible alongside your other scheduled chamber work and client appointments.',
      icon: <Calendar size={22} color="#C6A15B" />,
      featured: true,
    },
    {
      title: 'Past Hearings & Orders',
      desc: 'Look back at earlier hearings and quickly review what happened and which interim orders were recorded.',
      icon: <FileText size={22} color="#091526" />,
    },
  ];

  return (
    <section className="hearings-problem-section" aria-labelledby="hearings-problem-heading">
      <div className="content-container">
        <div className="hearings-problem-header">
          <span className="hearings-problem-eyebrow">THE CHALLENGE</span>
          <h2 id="hearings-problem-heading" className="hearings-problem-title">
            Important Hearing Dates Should Be Easy to Find.
          </h2>
          <p className="hearings-problem-desc">
            When you are handling multiple matters, it can be difficult to keep track of upcoming hearing dates and remember what happened at earlier hearings.
          </p>
        </div>

        <div className="hearings-problem-grid">
          {problems.map((p, idx) => (
            <div key={idx} className={`hearings-problem-card ${p.featured ? 'featured-problem-card' : ''}`}>
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
