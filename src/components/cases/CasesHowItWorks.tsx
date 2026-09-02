import React from 'react';
import { ArrowRight, PlusCircle, FolderKanban, Users, Clock } from 'lucide-react';
import './CasesHowItWorks.css';

export const CasesHowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'CREATE',
      desc: 'Add a new case, assign a matter title, and record the court and case number.',
      icon: <PlusCircle size={20} color="#091526" />,
    },
    {
      num: '02',
      title: 'ORGANIZE',
      desc: 'Keep the case details, priority level, and current stage together in one place.',
      icon: <FolderKanban size={20} color="#091526" />,
    },
    {
      num: '03',
      title: 'CONNECT',
      desc: 'Link the matter with the client it belongs to and list all related opposing parties.',
      icon: <Users size={20} color="#C6A15B" />,
      featured: true,
    },
    {
      num: '04',
      title: 'FOLLOW',
      desc: 'Keep track of scheduled hearings, court orders, and chronological matter history.',
      icon: <Clock size={20} color="#091526" />,
    },
  ];

  return (
    <section id="cases-how-it-works" className="cases-flow-section" aria-labelledby="cases-flow-heading">
      <div className="content-container">
        <div className="cases-flow-header">
          <span className="flow-eyebrow">A CLEAR 4-STEP WORKFLOW</span>
          <h2 id="cases-flow-heading" className="flow-title">
            Manage a Case From One Place.
          </h2>
          <p className="flow-desc">
            BrilliusLaw provides a clear, structured workflow to create new legal matters, organize filings, and follow case progression over time.
          </p>
        </div>

        <div className="cases-flow-grid">
          {steps.map((s, idx) => (
            <React.Fragment key={idx}>
              <div className={`flow-step-card ${s.featured ? 'featured-step-card' : ''}`}>
                <div className="flow-step-top">
                  <span className="flow-num-badge">STEP {s.num}</span>
                  <div className="flow-icon-wrap">{s.icon}</div>
                </div>
                <h3 className="flow-step-title">{s.title}</h3>
                <p className="flow-step-desc">{s.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="flow-arrow-separator" aria-hidden="true">
                  <ArrowRight size={18} color="#C6A15B" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
