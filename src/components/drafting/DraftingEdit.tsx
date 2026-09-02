import React from 'react';
import { MousePointerClick, Edit3, RefreshCw, CheckCircle2 } from 'lucide-react';
import './DraftingEdit.css';

export const DraftingEdit: React.FC = () => {
  const editSteps = [
    {
      action: 'CLICK',
      title: 'Place Your Cursor',
      desc: 'Click anywhere inside your clauses, recitals, or schedules to begin editing.',
      icon: <MousePointerClick size={20} color="#091526" />,
    },
    {
      action: 'EDIT',
      title: 'Write & Modify',
      desc: 'Type new sentences, adjust covenants, or rephrase legal provisions naturally.',
      icon: <Edit3 size={20} color="#C6A15B" />,
      featured: true,
    },
    {
      action: 'FORMAT',
      title: 'Apply Styling',
      desc: 'Underline key definitions, highlight terms, or change text weights instantly.',
      icon: <RefreshCw size={20} color="#091526" />,
    },
    {
      action: 'CONTINUE',
      title: 'Save & Progress',
      desc: 'Your draft stays preserved so you can return and continue at any moment.',
      icon: <CheckCircle2 size={20} color="#091526" />,
    },
  ];

  return (
    <section className="drafting-edit-section" aria-labelledby="edit-doc-heading">
      <div className="content-container">
        <div className="edit-header">
          <span className="edit-eyebrow">INTUITIVE EDITING</span>
          <h2 id="edit-doc-heading" className="edit-title">
            Make Changes as You Work.
          </h2>
          <p className="edit-desc">
            Open a document and edit the content whenever you need to make changes, without learning complex software.
          </p>
        </div>

        <div className="edit-steps-grid">
          {editSteps.map((step, idx) => (
            <div key={idx} className={`edit-step-card ${step.featured ? 'featured-edit-card' : ''}`}>
              <div className="edit-step-top">
                <span className="action-pill">{step.action}</span>
                <div className="edit-icon-wrap">{step.icon}</div>
              </div>

              <h3 className="step-card-title">{step.title}</h3>
              <p className="step-card-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
