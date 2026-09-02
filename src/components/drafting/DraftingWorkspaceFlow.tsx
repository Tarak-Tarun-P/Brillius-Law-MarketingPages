import React from 'react';
import { PlusCircle, Edit3, Type, MessageSquare, Save, ArrowRight } from 'lucide-react';
import './DraftingWorkspaceFlow.css';

export const DraftingWorkspaceFlow: React.FC = () => {
  const lifecycle = [
    {
      step: '01',
      action: 'CREATE',
      title: 'Initiate Document',
      desc: 'Start with a clean canvas or a chosen structure.',
      icon: <PlusCircle size={20} color="#091526" />,
    },
    {
      step: '02',
      action: 'WRITE',
      title: 'Compose Content',
      desc: 'Type agreements, legal notices, petitions, and clauses.',
      icon: <Edit3 size={20} color="#091526" />,
    },
    {
      step: '03',
      action: 'FORMAT',
      title: 'Apply Styling',
      desc: 'Bold, underline, align, and highlight critical terms.',
      icon: <Type size={20} color="#C6A15B" />,
      featured: true,
    },
    {
      step: '04',
      action: 'ANNOTATE',
      title: 'Attach Notes',
      desc: 'Leave personal review reminders and flags on clauses.',
      icon: <MessageSquare size={20} color="#091526" />,
    },
    {
      step: '05',
      action: 'SAVE',
      title: 'Preserve Work',
      desc: 'Keep your document safely organized in your workspace.',
      icon: <Save size={20} color="#091526" />,
    },
  ];

  return (
    <section className="drafting-lifecycle-section" aria-labelledby="lifecycle-heading">
      <div className="content-container">
        <div className="lifecycle-header">
          <span className="lifecycle-eyebrow">COMPLETE WORKSPACE</span>
          <h2 id="lifecycle-heading" className="lifecycle-title">
            The Complete Drafting Experience.
          </h2>
          <p className="lifecycle-desc">
            From your very first word to final saved revisions, Drafting Lab provides a seamless, unified environment.
          </p>
        </div>

        <div className="lifecycle-flow-grid">
          {lifecycle.map((item, idx) => (
            <React.Fragment key={idx}>
              <div className={`lifecycle-card ${item.featured ? 'featured-lifecycle-card' : ''}`}>
                <div className="lifecycle-card-top">
                  <span className="lifecycle-step-tag">STEP {item.step}</span>
                  <div className="lifecycle-icon-wrap">{item.icon}</div>
                </div>
                <span className="lifecycle-action-pill">{item.action}</span>
                <h3 className="lifecycle-title-text">{item.title}</h3>
                <p className="lifecycle-desc-text">{item.desc}</p>
              </div>
              {idx < lifecycle.length - 1 && (
                <div className="lifecycle-arrow-col" aria-hidden="true">
                  <ArrowRight size={16} color="#C6A15B" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
