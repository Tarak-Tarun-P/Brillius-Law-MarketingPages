import React from 'react';
import { Layers, GitCompare, Eye, CheckSquare, ArrowRight } from 'lucide-react';
import './CompareHowItWorks.css';

export const CompareHowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'CHOOSE A VERSION',
      desc: 'Select a previously saved version from your document history.',
      icon: <Layers size={20} color="#091526" />,
    },
    {
      num: '02',
      title: 'COMPARE',
      desc: 'Compare it side-by-side with the current working draft or another milestone.',
      icon: <GitCompare size={20} color="#C6A15B" />,
      featured: true,
    },
    {
      num: '03',
      title: 'REVIEW',
      desc: 'See exactly what was added, deleted, moved, or formatted across clauses.',
      icon: <Eye size={20} color="#091526" />,
    },
    {
      num: '04',
      title: 'DECIDE',
      desc: 'Review the identified differences and make your final legal decisions.',
      icon: <CheckSquare size={20} color="#091526" />,
    },
  ];

  return (
    <section id="compare-how-it-works" className="compare-flow-section" aria-labelledby="flow-heading">
      <div className="content-container">
        <div className="compare-flow-header">
          <span className="flow-eyebrow">A CLEAR 4-STEP WORKFLOW</span>
          <h2 id="flow-heading" className="flow-title">
            How Compare & Review Works.
          </h2>
          <p className="flow-desc">
            A straightforward process to examine document revisions, understand differences, and retain complete control over what gets finalized.
          </p>
        </div>

        <div className="compare-flow-grid">
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
