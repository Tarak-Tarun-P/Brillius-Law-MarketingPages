import React from 'react';
import { BookOpen, FileText, CornerDownRight, Scale, ArrowRight } from 'lucide-react';
import './LibrarySectionResearch.css';

export const LibrarySectionResearch: React.FC = () => {
  const steps = [
    {
      step: '01',
      tag: 'ACT',
      title: 'Select Bare Act',
      desc: 'Choose from official Central and Commercial statutes.',
      icon: <BookOpen size={20} color="#091526" />,
      example: 'The Indian Contract Act, 1872',
    },
    {
      step: '02',
      tag: 'SECTION TEXT',
      title: 'Read Provision',
      desc: 'Review exact statutory wording, provisos, and explanations.',
      icon: <FileText size={20} color="#C6A15B" />,
      example: 'Section 10: What agreements are contracts',
      featured: true,
    },
    {
      step: '03',
      tag: 'REFERENCES',
      title: 'Cross-References',
      desc: 'Follow legislative footnotes and connected statutory provisions.',
      icon: <CornerDownRight size={20} color="#091526" />,
      example: 'Sections 11, 14, 23 & 56 alignment',
    },
    {
      step: '04',
      tag: 'JUDGMENTS',
      title: 'Connected Rulings',
      desc: 'Discover landmark High Court & Supreme Court precedents.',
      icon: <Scale size={20} color="#091526" />,
      example: 'Satyabrata Ghose (1954 SCR 310)',
    },
  ];

  return (
    <section className="library-section-res" aria-labelledby="section-res-heading">
      <div className="content-container">
        <div className="section-res-header">
          <span className="section-res-eyebrow">STRUCTURED DISCOVERY</span>
          <h2 id="section-res-heading" className="section-res-title">
            Go Straight to the Provision You Need.
          </h2>
          <p className="section-res-desc">
            Open individual sections and effortlessly explore all relevant statutory text, footnotes, cross-references, and case law connected to that single provision.
          </p>
        </div>

        <div className="section-res-grid">
          {steps.map((s, idx) => (
            <React.Fragment key={idx}>
              <div className={`res-card ${s.featured ? 'featured-res-card' : ''}`}>
                <div className="res-card-top">
                  <span className="res-step-pill">STEP {s.step}</span>
                  <div className="res-icon-box">{s.icon}</div>
                </div>
                <span className="res-tag-label">{s.tag}</span>
                <h3 className="res-card-title">{s.title}</h3>
                <p className="res-card-desc">{s.desc}</p>
                <div className="res-example-pill">
                  <span className="example-label">EXAMPLE</span>
                  <span className="example-content">{s.example}</span>
                </div>
              </div>
              {idx < steps.length - 1 && (
                <div className="res-arrow-col" aria-hidden="true">
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
