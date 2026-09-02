import React from 'react';
import { Users, Lock, CheckSquare, Eye } from 'lucide-react';
import './FirmProblem.css';

export const FirmProblem: React.FC = () => {
  const problems = [
    {
      num: '01',
      title: 'Growing Teams',
      desc: 'Keep lawyers, associates, clerks, interns, and administrative staff organized.',
      icon: <Users size={22} />,
    },
    {
      num: '02',
      title: 'Sensitive Information',
      desc: 'Control access to important client and matter information.',
      icon: <Lock size={22} />,
    },
    {
      num: '03',
      title: 'Review & Approval',
      desc: 'Keep senior lawyers involved where review and approval are needed.',
      icon: <CheckSquare size={22} />,
    },
    {
      num: '04',
      title: 'Firm Visibility',
      desc: 'Understand team activity and responsibilities across the practice.',
      icon: <Eye size={22} />,
    },
  ];

  return (
    <section className="firm-problem-section" aria-labelledby="firm-problem-heading">
      <div className="content-container">
        <div className="firm-problem-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">PRACTICE CHALLENGES</span>
          </div>
          <h2 id="firm-problem-heading" className="firm-problem-title">
            Your Firm Has People, Matters, and Responsibilities. Keep Them Organized.
          </h2>
          <p className="firm-problem-desc">
            As a firm grows, managing who can access what, who is responsible for a matter, and who needs to review important work can become difficult. Firm Management gives your team a clearer way to manage roles, responsibilities, access, and oversight.
          </p>
        </div>

        <div className="firm-problem-grid">
          {problems.map((p, idx) => (
            <div key={idx} className="problem-box-card">
              <div className="problem-box-top">
                <span className="problem-index-pill">{p.num}</span>
                <div className="problem-icon-wrap">{p.icon}</div>
              </div>
              <h3 className="problem-box-title">{p.title}</h3>
              <p className="problem-box-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
