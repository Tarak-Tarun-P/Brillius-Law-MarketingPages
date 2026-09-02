import React from 'react';
import { PlusCircle, Edit3, Type, Highlighter, MessageSquare, Save } from 'lucide-react';
import './DraftingBenefits.css';

export const DraftingBenefits: React.FC = () => {
  const benefits = [
    {
      title: 'CREATE',
      desc: 'Start a new document instantly in a clean, distraction-free environment.',
      icon: <PlusCircle size={20} color="#C6A15B" />,
    },
    {
      title: 'EDIT',
      desc: 'Modify clauses, rephrase paragraphs, and update terms seamlessly.',
      icon: <Edit3 size={20} color="#091526" />,
    },
    {
      title: 'FORMAT',
      desc: 'Apply bold, underline, italics, alignment, and proportional sizing.',
      icon: <Type size={20} color="#C6A15B" />,
    },
    {
      title: 'HIGHLIGHT',
      desc: 'Mark critical monetary figures, definitions, and timelines with color.',
      icon: <Highlighter size={20} color="#091526" />,
    },
    {
      title: 'ANNOTATE',
      desc: 'Attach your own personal margin notes to clauses during review.',
      icon: <MessageSquare size={20} color="#C6A15B" />,
    },
    {
      title: 'SAVE',
      desc: 'Preserve your drafts safely in your workspace to resume anytime.',
      icon: <Save size={20} color="#091526" />,
    },
  ];

  return (
    <section className="drafting-benefits-section" aria-labelledby="benefits-heading">
      <div className="content-container">
        <div className="benefits-header">
          <span className="benefits-eyebrow">CORE ADVANTAGES</span>
          <h2 id="benefits-heading" className="benefits-title">
            Everything You Need for Everyday Drafting.
          </h2>
          <p className="benefits-desc">
            Six essential capabilities designed to make writing and formatting legal documents intuitive and effortless.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((b, idx) => (
            <div key={idx} className="benefit-card">
              <div className="benefit-icon-wrap">{b.icon}</div>
              <h3 className="benefit-title">{b.title}</h3>
              <p className="benefit-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
