import React from 'react';
import { UserPlus, Sliders, Users, Eye, ArrowRight } from 'lucide-react';
import './FirmWorkflow.css';

export const FirmWorkflow: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Add Your Team',
      desc: 'Bring your firm members together into a unified directory.',
      icon: <UserPlus size={18} />,
    },
    {
      num: '02',
      title: 'Define Responsibilities',
      desc: 'Set roles and appropriate access across cases and modules.',
      icon: <Sliders size={18} />,
    },
    {
      num: '03',
      title: 'Work & Collaborate',
      desc: 'Let team members handle their responsibilities with clear boundaries.',
      icon: <Users size={18} />,
      featured: true,
    },
    {
      num: '04',
      title: 'Review & Oversee',
      desc: 'Keep senior-level visibility where needed before final submissions.',
      icon: <Eye size={18} />,
    },
  ];

  return (
    <section className="firm-workflow-section" aria-labelledby="workflow-heading">
      <div className="content-container">
        <div className="workflow-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">ADMINISTRATIVE LIFECYCLE</span>
          </div>
          <h2 id="workflow-heading" className="workflow-title">
            From Team Setup to Daily Practice
          </h2>
          <p className="workflow-desc">
            A simple, straightforward progression that gets your law firm organized and running efficiently.
          </p>
        </div>

        <div className="workflow-steps-row">
          {steps.map((s, idx) => (
            <React.Fragment key={idx}>
              <div className={`workflow-step-card ${s.featured ? 'featured-step' : ''}`}>
                <div className="step-card-top">
                  <span className="step-pill">0{idx + 1}</span>
                  <div className="step-icon-circle">{s.icon}</div>
                </div>
                <h3 className="step-card-title">{s.title}</h3>
                <p className="step-card-desc">{s.desc}</p>
              </div>

              {idx < steps.length - 1 && (
                <div className="step-arrow-connector" aria-hidden="true">
                  <ArrowRight size={14} color="#C6A15B" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
