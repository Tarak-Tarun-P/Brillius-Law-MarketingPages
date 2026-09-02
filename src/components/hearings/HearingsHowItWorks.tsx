import React from 'react';
import { ArrowRight, PlusCircle, Clock, Calendar, FileText } from 'lucide-react';
import './HearingsHowItWorks.css';

export const HearingsHowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'ADD A HEARING',
      desc: 'Add the relevant hearing date, court, and bench information to a case.',
      icon: <PlusCircle size={20} color="#091526" />,
    },
    {
      num: '02',
      title: "SEE WHAT'S UPCOMING",
      desc: 'View upcoming hearing dates connected to all your active matters in one list.',
      icon: <Clock size={20} color="#091526" />,
    },
    {
      num: '03',
      title: 'KEEP IT ON THE CALENDAR',
      desc: 'Keep important hearing dates visible directly on the platform calendar.',
      icon: <Calendar size={20} color="#C6A15B" />,
      featured: true,
    },
    {
      num: '04',
      title: 'LOOK BACK',
      desc: 'Review previous hearings and their recorded orders or verdicts with the case.',
      icon: <FileText size={20} color="#091526" />,
    },
  ];

  return (
    <section id="hearings-how-it-works" className="hearings-flow-section" aria-labelledby="hearings-flow-heading">
      <div className="content-container">
        <div className="hearings-flow-header">
          <span className="flow-eyebrow">A CLEAR 4-STEP WORKFLOW</span>
          <h2 id="hearings-flow-heading" className="flow-title">
            How Hearings Work.
          </h2>
          <p className="flow-desc">
            A simple workflow to keep your court appearances organized, visible on your calendar, and recorded for historical review.
          </p>
        </div>

        <div className="hearings-flow-grid">
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
