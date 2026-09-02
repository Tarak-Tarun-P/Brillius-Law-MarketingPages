import React from 'react';
import { ArrowRight, PlusCircle, Link, Archive, FolderOpen } from 'lucide-react';
import './EvidenceHowItWorks.css';

export const EvidenceHowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'ADD',
      desc: 'Add the evidentiary documents, agreements, or files you want to keep.',
      icon: <PlusCircle size={20} color="#091526" />,
    },
    {
      num: '02',
      title: 'CONNECT',
      desc: 'Link the evidence directly to the relevant legal matter or dispute.',
      icon: <Link size={20} color="#C6A15B" />,
      featured: true,
    },
    {
      num: '03',
      title: 'STORE',
      desc: 'Keep it organized and indexed safely within the platform.',
      icon: <Archive size={20} color="#091526" />,
    },
    {
      num: '04',
      title: 'RETURN',
      desc: 'Open and review previous evidence later when preparing arguments.',
      icon: <FolderOpen size={20} color="#091526" />,
    },
  ];

  return (
    <section id="evidence-how-it-works" className="evidence-flow-section" aria-labelledby="evidence-flow-heading">
      <div className="content-container">
        <div className="evidence-flow-header">
          <span className="flow-eyebrow">A CLEAR 4-STEP WORKFLOW</span>
          <h2 id="evidence-flow-heading" className="flow-title">
            How Evidence Works.
          </h2>
          <p className="flow-desc">
            A straightforward process to capture, connect, preserve, and retrieve evidentiary records whenever you need them.
          </p>
        </div>

        <div className="evidence-flow-grid">
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
