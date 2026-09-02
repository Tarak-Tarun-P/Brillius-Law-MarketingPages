import React from 'react';
import { Search, Scale, Bookmark } from 'lucide-react';
import './ResearchProblem.css';

export const ResearchProblem: React.FC = () => {
  const points = [
    {
      num: '01',
      title: 'FIND THE CASE',
      desc: 'Search by issue, party name, citation, judge, or statutory section.',
      icon: <Search size={20} />,
    },
    {
      num: '02',
      title: 'UNDERSTAND THE DECISION',
      desc: 'See key issues, arguments, legal principles, and other available insights.',
      icon: <Scale size={20} />,
    },
    {
      num: '03',
      title: 'CONNECT IT TO YOUR WORK',
      desc: 'Save useful research to a matter and keep sources connected with your case.',
      icon: <Bookmark size={20} />,
    },
  ];

  return (
    <section className="research-problem-section" aria-labelledby="problem-heading">
      <div className="content-container">
        <div className="problem-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">THE CHALLENGE</span>
          </div>
          <h2 id="problem-heading" className="problem-title">
            Legal Research Can Take You Through Pages of Information.
          </h2>
          <p className="problem-desc">
            Finding a useful authority is only the beginning. You still need to understand the decision, check how it has been treated, and connect it to the matter you are working on.
          </p>
        </div>

        <div className="problem-points-grid">
          {points.map((p, idx) => (
            <div key={idx} className="problem-point-card">
              <div className="point-card-top">
                <span className="point-number-pill">{p.num}</span>
                <div className="point-icon-box">{p.icon}</div>
              </div>
              <h3 className="point-headline">{p.title}</h3>
              <p className="point-explanation">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
