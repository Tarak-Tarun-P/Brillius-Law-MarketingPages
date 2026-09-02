import React from 'react';
import { Search, Calendar, History, FileText } from 'lucide-react';
import './ECourtsProblem.css';

export const ECourtsProblem: React.FC = () => {
  const problems = [
    {
      num: '01',
      title: 'Repeated Court Checks',
      desc: 'Reduce the need to repeatedly search court records for updates.',
      icon: <Search size={22} />,
    },
    {
      num: '02',
      title: 'Changing Hearing Dates',
      desc: 'Keep upcoming hearing information easier to track.',
      icon: <Calendar size={22} />,
    },
    {
      num: '03',
      title: 'Scattered Case History',
      desc: 'Review past proceedings and case information in one place.',
      icon: <History size={22} />,
    },
    {
      num: '04',
      title: 'Missing Orders',
      desc: 'Keep official court orders accessible alongside your matter.',
      icon: <FileText size={22} />,
    },
  ];

  return (
    <section className="ecourts-problem-section" aria-labelledby="ecourts-problem-heading">
      <div className="content-container">
        <div className="ecourts-problem-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">LITIGATION TRACKING CHALLENGES</span>
          </div>
          <h2 id="ecourts-problem-heading" className="ecourts-problem-title">
            Stop Checking Court Records Manually.
          </h2>
          <p className="ecourts-problem-desc">
            Keeping track of court dates, case history, and orders can mean repeatedly checking official court records. eCourts Sync brings the relevant information into your BrilliusLaw workspace so your team can spend less time searching and more time working on the matter.
          </p>
        </div>

        <div className="ecourts-problem-grid">
          {problems.map((p, idx) => (
            <div key={idx} className="problem-ecourt-card">
              <div className="ecourt-card-top">
                <span className="ecourt-index-pill">{p.num}</span>
                <div className="ecourt-icon-wrap">{p.icon}</div>
              </div>
              <h3 className="ecourt-card-title">{p.title}</h3>
              <p className="ecourt-card-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
