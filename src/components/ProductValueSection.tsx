import React from 'react';
import { Layers, Sparkles, FileCheck2, Building2 } from 'lucide-react';
import './ProductValueSection.css';

interface ValueBlock {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
}

export const ProductValueSection: React.FC = () => {
  const values: ValueBlock[] = [
    {
      id: 'workflows',
      title: 'LEGAL WORKFLOWS',
      description: 'Keep matters, documents, hearings, and tasks organized.',
      icon: <Layers size={22} strokeWidth={1.6} />,
      tag: 'Practice Operations',
    },
    {
      id: 'intelligence',
      title: 'LEGAL INTELLIGENCE',
      description: 'Research cases, judgments, statutes, and legal information more efficiently.',
      icon: <Sparkles size={22} strokeWidth={1.6} />,
      tag: 'Jurisprudence & Precedents',
    },
    {
      id: 'documents',
      title: 'DOCUMENT WORK',
      description: 'Create, review, compare, analyze, and manage important legal documents.',
      icon: <FileCheck2 size={22} strokeWidth={1.6} />,
      tag: 'Drafting & Verification',
    },
    {
      id: 'practice',
      title: 'CONNECTED PRACTICE',
      description: 'Keep clients, cases, hearings, documents, and updates connected.',
      icon: <Building2 size={22} strokeWidth={1.6} />,
      tag: 'Unified Ecosystem',
    },
  ];

  return (
    <section className="product-value-section" aria-labelledby="product-value-heading">
      <div className="content-container">
        {/* Section Header */}
        <div className="product-value-header">
          <div className="product-value-eyebrow-wrapper">
            <span className="product-value-eyebrow">BUILT FOR MODERN LAW</span>
            <span className="product-value-eyebrow-line" aria-hidden="true" />
          </div>
          <h2 id="product-value-heading" className="product-value-heading">
            Built for the Way Legal Work Happens
          </h2>
          <p className="product-value-subtext">
            From research and case management to drafting, documents, and everyday practice, BrilliusLaw brings the essential parts of legal work together in one workspace.
          </p>
        </div>

        {/* 4 Value Blocks Grid */}
        <div className="product-value-grid" role="list">
          {values.map((val) => (
            <article key={val.id} className="product-value-card" role="listitem">
              <div className="value-card-top">
                <div className="value-icon-box" aria-hidden="true">
                  {val.icon}
                </div>
                <span className="value-tag">{val.tag}</span>
              </div>

              <h3 className="value-title">{val.title}</h3>
              <p className="value-description">{val.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
