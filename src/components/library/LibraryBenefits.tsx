import React from 'react';
import { BookOpen, FileText, CornerDownRight, Scale, GitFork, Search } from 'lucide-react';
import './LibraryBenefits.css';

export const LibraryBenefits: React.FC = () => {
  const benefits = [
    {
      title: 'BARE ACTS',
      desc: 'Read the actual provisions as enacted in official statutes.',
      icon: <BookOpen size={20} color="#C6A15B" />,
    },
    {
      title: 'SECTIONS',
      desc: 'Go directly to the specific section, explanation, or proviso you need.',
      icon: <FileText size={20} color="#091526" />,
    },
    {
      title: 'REFERENCES',
      desc: 'Follow legislative footnotes and connected statutory references seamlessly.',
      icon: <CornerDownRight size={20} color="#C6A15B" />,
    },
    {
      title: 'JUDGMENTS',
      desc: 'Explore authoritative Supreme Court and High Court decisions.',
      icon: <Scale size={20} color="#091526" />,
    },
    {
      title: 'CONNECTIONS',
      desc: 'See visual relationships between provisions and connected precedent.',
      icon: <GitFork size={20} color="#C6A15B" />,
    },
    {
      title: 'SEARCH',
      desc: 'Find available statutes, sections, and case law with instant search.',
      icon: <Search size={20} color="#091526" />,
    },
  ];

  return (
    <section className="library-benefits-section" aria-labelledby="benefits-heading">
      <div className="content-container">
        <div className="benefits-header">
          <span className="benefits-eyebrow">CORE ADVANTAGES</span>
          <h2 id="benefits-heading" className="benefits-title">
            Everything You Need to Explore the Law.
          </h2>
          <p className="benefits-desc">
            Six essential capabilities designed to make reading statutes, following citations, and discovering judicial decisions clear and structured.
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
