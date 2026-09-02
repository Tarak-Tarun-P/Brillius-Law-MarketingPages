import React from 'react';
import { Search, FileText, Scale } from 'lucide-react';
import './LibraryProblem.css';

export const LibraryProblem: React.FC = () => {
  const points = [
    {
      title: 'FIND THE LAW',
      label: 'Locate the Relevant Act',
      desc: 'Quickly find verified central statutes and specific chapters without navigating disparate websites.',
      icon: <Search size={20} color="#091526" />,
    },
    {
      title: 'READ THE DETAILS',
      label: 'Review Section & Footnotes',
      desc: 'Understand the exact statutory text, legislative provisos, exceptions, and connected sections in one view.',
      icon: <FileText size={20} color="#C6A15B" />,
      featured: true,
    },
    {
      title: 'FOLLOW THE CASE LAW',
      label: 'Explore Connected Judgments',
      desc: 'Discover authoritative High Court and Supreme Court rulings interpreting that exact statutory provision.',
      icon: <Scale size={20} color="#091526" />,
    },
  ];

  return (
    <section className="library-problem-section" aria-labelledby="prob-heading">
      <div className="content-container">
        <div className="library-problem-header">
          <span className="library-problem-eyebrow">THE CHALLENGE</span>
          <h2 id="prob-heading" className="library-problem-title">
            Finding the Right Provision Can Take Time.
          </h2>
          <p className="library-problem-desc">
            Legal research often requires manually jumping between physical Bare Acts, digital PDFs, footnotes, and judgment reporters just to understand a single legal issue.
          </p>
        </div>

        <div className="library-problem-grid">
          {points.map((p, idx) => (
            <div key={idx} className={`library-problem-card ${p.featured ? 'featured-prob-card' : ''}`}>
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
