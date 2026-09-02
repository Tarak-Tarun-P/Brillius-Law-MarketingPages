import React from 'react';
import { Zap, LayoutTemplate, GitBranch, ShieldCheck } from 'lucide-react';
import './CaseDraftsBenefits.css';

export const CaseDraftsBenefits: React.FC = () => {
  const benefits = [
    {
      num: '01',
      title: 'Faster Starting Point',
      desc: 'Begin with case information and a suitable template instead of starting from a blank page.',
      icon: <Zap size={22} />,
    },
    {
      num: '02',
      title: 'Consistent Structure',
      desc: 'Work from templates your team already uses.',
      icon: <LayoutTemplate size={22} />,
    },
    {
      num: '03',
      title: 'Better Review',
      desc: 'Keep drafts organized through versions and review stages.',
      icon: <GitBranch size={22} />,
    },
    {
      num: '04',
      title: 'Lawyer-Controlled Output',
      desc: 'Review, edit, and finalize every document before using it.',
      icon: <ShieldCheck size={22} />,
    },
  ];

  return (
    <section className="casedrafts-benefits-section" aria-labelledby="benefits-heading">
      <div className="content-container">
        <div className="benefits-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">PRACTICE ADVANTAGES</span>
          </div>
          <h2 id="benefits-heading" className="benefits-title">
            Built to Make Legal Drafting Easier.
          </h2>
          <p className="benefits-desc">
            Four foundational advantages that give legal practitioners an organized and efficient drafting workflow.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((b, idx) => (
            <div key={idx} className="casedraft-benefit-card">
              <div className="b-card-top">
                <span className="b-num-pill">{b.num}</span>
                <div className="b-icon-wrap">{b.icon}</div>
              </div>
              <h3 className="b-card-title">{b.title}</h3>
              <p className="b-card-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
