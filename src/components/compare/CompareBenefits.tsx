import React from 'react';
import { FileText, Hash, Type, Move, Table, Layers } from 'lucide-react';
import './CompareBenefits.css';

export const CompareBenefits: React.FC = () => {
  const benefits = [
    {
      title: 'TEXT',
      desc: 'See what was added, removed, or rewritten with clear visual highlights.',
      icon: <FileText size={20} color="#C6A15B" />,
    },
    {
      title: 'NUMBERS',
      desc: 'Spot changes to dates, financial amounts, notice days, and percentage caps.',
      icon: <Hash size={20} color="#091526" />,
    },
    {
      title: 'FORMATTING',
      desc: 'Notice changes to heading styles, all-caps casing, and underline emphasis.',
      icon: <Type size={20} color="#C6A15B" />,
    },
    {
      title: 'MOVED CONTENT',
      desc: 'See when sentences or full clauses relocate to different sections.',
      icon: <Move size={20} color="#091526" />,
    },
    {
      title: 'TABLES',
      desc: 'Identify added or deleted rows in schedule tables and fee breakdowns.',
      icon: <Table size={20} color="#C6A15B" />,
    },
    {
      title: 'VERSIONS',
      desc: 'Compare any previous saved milestone against your live workspace.',
      icon: <Layers size={20} color="#091526" />,
    },
  ];

  return (
    <section className="compare-benefits-section" aria-labelledby="simple-benefits-heading">
      <div className="content-container">
        <div className="benefits-header">
          <span className="benefits-eyebrow">CORE CAPABILITIES</span>
          <h2 id="simple-benefits-heading" className="benefits-title">
            Everything Important, Easy to Compare.
          </h2>
          <p className="benefits-desc">
            Six focused comparison capabilities designed to provide total visibility over every revision.
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
