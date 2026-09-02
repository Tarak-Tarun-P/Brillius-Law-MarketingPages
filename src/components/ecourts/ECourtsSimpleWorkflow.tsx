import React from 'react';
import { Search, Landmark, Calendar, FileText, ArrowRight } from 'lucide-react';
import './ECourtsSimpleWorkflow.css';

export const ECourtsSimpleWorkflow: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Enter CNR',
      desc: 'Connect the matter using its CNR number.',
      icon: <Search size={18} />,
    },
    {
      num: '02',
      title: 'Bring in Case Information',
      desc: 'Review the available court and party information.',
      icon: <Landmark size={18} />,
    },
    {
      num: '03',
      title: 'Track Hearings & History',
      desc: 'Follow upcoming dates and previous proceedings.',
      icon: <Calendar size={18} />,
      featured: true,
    },
    {
      num: '04',
      title: 'Access Orders',
      desc: 'Keep available court orders and judgments close to the matter.',
      icon: <FileText size={18} />,
    },
  ];

  return (
    <section className="ecourts-workflow-section" aria-labelledby="workflow-heading">
      <div className="content-container">
        <div className="workflow-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">SIMPLE 4-STEP PROGRESSION</span>
          </div>
          <h2 id="workflow-heading" className="workflow-title">
            From CNR to Case Tracking
          </h2>
          <p className="workflow-desc">
            A frictionless workflow to link official court databases to your active litigation workspace.
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
