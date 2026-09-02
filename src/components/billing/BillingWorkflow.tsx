import React from 'react';
import { FilePlus2, ListChecks, Activity, BellRing, ArrowRight } from 'lucide-react';
import './BillingWorkflow.css';

export const BillingWorkflow: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Create',
      desc: 'Create an invoice for the client and link it to the matter.',
      icon: <FilePlus2 size={18} />,
    },
    {
      num: '02',
      title: 'Itemize',
      desc: 'Clearly list professional fees, disbursements, and taxes.',
      icon: <ListChecks size={18} />,
      featured: true,
    },
    {
      num: '03',
      title: 'Track',
      desc: 'Keep track of invoice status, advances, and receipts.',
      icon: <Activity size={18} />,
    },
    {
      num: '04',
      title: 'Follow Up',
      desc: 'See outstanding amounts that still need attention.',
      icon: <BellRing size={18} />,
    },
  ];

  return (
    <section className="billing-workflow-section" aria-labelledby="billing-workflow-heading">
      <div className="content-container">
        <div className="workflow-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">BILLING LIFECYCLE</span>
          </div>
          <h2 id="billing-workflow-heading" className="workflow-title">
            From Work Completed to Payment
          </h2>
          <p className="workflow-desc">
            A straightforward 4-step process designed to simplify billing administration in modern legal practices.
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
