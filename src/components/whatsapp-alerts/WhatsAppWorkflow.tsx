import React from 'react';
import { Activity, Bell, MessageSquare, ExternalLink, ArrowRight } from 'lucide-react';
import './WhatsAppWorkflow.css';

export const WhatsAppWorkflow: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'An Activity Happens',
      desc: 'A hearing, task, approval, or document update occurs in your matter.',
      icon: <Activity size={18} />,
    },
    {
      num: '02',
      title: 'Update Is Identified',
      desc: 'A relevant, high-priority alert is prepared with case context.',
      icon: <Bell size={18} />,
    },
    {
      num: '03',
      title: 'Receive WhatsApp Alert',
      desc: 'The update reaches you instantly on your verified WhatsApp.',
      icon: <MessageSquare size={18} />,
      featured: true,
    },
    {
      num: '04',
      title: 'Take Action in Workspace',
      desc: 'Open BrilliusLaw when you need the full details or need to act.',
      icon: <ExternalLink size={18} />,
    },
  ];

  return (
    <section className="wa-workflow-section" aria-labelledby="wa-flow-heading">
      <div className="content-container">
        <div className="wa-workflow-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">SIMPLE 4-STEP PROGRESSION</span>
          </div>
          <h2 id="wa-flow-heading" className="wa-workflow-title">
            From Important Activity to WhatsApp
          </h2>
          <p className="wa-workflow-desc">
            A reliable notification flow connecting active chamber operations directly to your mobile device.
          </p>
        </div>

        <div className="wa-flow-steps-row">
          {steps.map((s, idx) => (
            <React.Fragment key={idx}>
              <div className={`wa-step-card ${s.featured ? 'featured-wa-step' : ''}`}>
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
