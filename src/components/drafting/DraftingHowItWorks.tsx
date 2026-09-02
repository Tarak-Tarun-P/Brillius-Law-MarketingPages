import React from 'react';
import { Plus, Edit2, Type, MessageSquare, Save, ArrowRight } from 'lucide-react';
import './DraftingHowItWorks.css';

export const DraftingHowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'CREATE',
      desc: 'Start a clean new document or select an existing draft.',
      icon: <Plus size={18} color="#091526" />,
    },
    {
      num: '02',
      title: 'WRITE',
      desc: 'Add and edit your legal content, clauses, and covenants.',
      icon: <Edit2 size={18} color="#091526" />,
    },
    {
      num: '03',
      title: 'FORMAT',
      desc: 'Use familiar tools to bold, underline, align, and highlight text.',
      icon: <Type size={18} color="#C6A15B" />,
      featured: true,
    },
    {
      num: '04',
      title: 'ANNOTATE',
      desc: 'Add personal notes to important sections for review.',
      icon: <MessageSquare size={18} color="#091526" />,
    },
    {
      num: '05',
      title: 'SAVE',
      desc: 'Save your work securely and return to it whenever needed.',
      icon: <Save size={18} color="#091526" />,
    },
  ];

  return (
    <section id="drafting-how-it-works" className="drafting-works-section" aria-labelledby="how-it-works-heading">
      <div className="content-container">
        <div className="works-header">
          <span className="works-eyebrow">SIMPLE 5-STEP WORKFLOW</span>
          <h2 id="how-it-works-heading" className="works-title">
            A Simple Place to Work on Documents.
          </h2>
          <p className="works-desc">
            A familiar, focused environment to draft, refine, and maintain complete ownership over your legal documents.
          </p>
        </div>

        <div className="works-steps-row">
          {steps.map((s, idx) => (
            <React.Fragment key={idx}>
              <div className={`works-step-box ${s.featured ? 'featured-work-box' : ''}`}>
                <div className="works-step-top">
                  <span className="step-num-pill">0{idx + 1}</span>
                  <div className="works-icon-circle">{s.icon}</div>
                </div>
                <h3 className="works-step-title">{s.title}</h3>
                <p className="works-step-desc">{s.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="works-step-arrow" aria-hidden="true">
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
