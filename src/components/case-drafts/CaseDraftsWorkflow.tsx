import React from 'react';
import { Briefcase, LayoutTemplate, Sparkles, Edit3, CheckCircle2, ArrowRight } from 'lucide-react';
import './CaseDraftsWorkflow.css';

export const CaseDraftsWorkflow: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Select Your Case',
      desc: 'Choose the matter you are working on.',
      icon: <Briefcase size={18} />,
    },
    {
      num: '02',
      title: 'Choose a Template',
      desc: 'Start from an available template or one your firm has added.',
      icon: <LayoutTemplate size={18} />,
    },
    {
      num: '03',
      title: 'Generate the Draft',
      desc: 'Use the case information and your instructions to create a starting draft.',
      icon: <Sparkles size={18} />,
      featured: true,
    },
    {
      num: '04',
      title: 'Review & Refine',
      desc: 'Edit the document and make the necessary changes.',
      icon: <Edit3 size={18} />,
    },
    {
      num: '05',
      title: 'Approve & Export',
      desc: 'Complete the review process and export the finalized draft.',
      icon: <CheckCircle2 size={18} />,
    },
  ];

  return (
    <section className="casedrafts-flow-section" aria-labelledby="flow-heading">
      <div className="content-container">
        <div className="flow-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">STRUCTURED 5-STEP LIFECYCLE</span>
          </div>
          <h2 id="flow-heading" className="flow-title">
            From Case to Final Draft
          </h2>
          <p className="flow-desc">
            A reliable, attorney-guided progression to produce court-ready legal documents with complete quality control.
          </p>
        </div>

        <div className="flow-steps-row">
          {steps.map((s, idx) => (
            <React.Fragment key={idx}>
              <div className={`flow-step-card ${s.featured ? 'featured-flow-step' : ''}`}>
                <div className="f-step-top">
                  <span className="f-step-num">0{idx + 1}</span>
                  <div className="f-step-icon">{s.icon}</div>
                </div>
                <h3 className="f-step-title">{s.title}</h3>
                <p className="f-step-desc">{s.desc}</p>
              </div>

              {idx < steps.length - 1 && (
                <div className="f-arrow-connector" aria-hidden="true">
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
