import React from 'react';
import { PenTool, Type, Highlighter, MessageSquare } from 'lucide-react';
import './DraftingProblem.css';

export const DraftingProblem: React.FC = () => {
  const points = [
    {
      title: 'WRITE',
      label: 'One Focused Workspace',
      desc: 'Create and edit your legal documents in one central place without constantly exporting to external word apps.',
      icon: <PenTool size={20} color="#091526" />,
    },
    {
      title: 'FORMAT',
      label: 'Standard Controls',
      desc: 'Structure petitions, contracts, and notices with familiar formatting tools that require no learning curve.',
      icon: <Type size={20} color="#C6A15B" />,
      featured: true,
    },
    {
      title: 'MARK',
      label: 'Immediate Emphasis',
      desc: 'Highlight critical payment figures, underline statutory timelines, and bold important defined terms.',
      icon: <Highlighter size={20} color="#091526" />,
    },
    {
      title: 'ANNOTATE',
      label: 'Personal Context',
      desc: 'Leave inline margin reminders and notes for yourself while drafting or reviewing prior to client delivery.',
      icon: <MessageSquare size={20} color="#091526" />,
    },
  ];

  return (
    <section className="drafting-problem-section" aria-labelledby="draft-prob-heading">
      <div className="content-container">
        <div className="drafting-problem-header">
          <span className="drafting-problem-eyebrow">THE CHALLENGE</span>
          <h2 id="draft-prob-heading" className="drafting-problem-title">
            Your Drafting Workspace Should Feel Simple.
          </h2>
          <p className="drafting-problem-desc">
            Creating and editing legal documents should not require switching between disparate software tools just to make basic edits and leave notes.
          </p>
        </div>

        <div className="drafting-problem-grid">
          {points.map((p, idx) => (
            <div key={idx} className={`drafting-problem-card ${p.featured ? 'featured-prob-card' : ''}`}>
              <div className="prob-card-top">
                <span className="prob-action-pill">{p.title}</span>
                <div className="prob-icon-box">{p.icon}</div>
              </div>

              <h3 className="prob-card-title">{p.label}</h3>
              <p className="prob-card-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
