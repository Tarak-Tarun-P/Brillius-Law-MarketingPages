import React from 'react';
import { Building2, Briefcase, GraduationCap } from 'lucide-react';
import './AnalyzerAudience.css';

export const AnalyzerAudience: React.FC = () => {
  const audiences = [
    {
      title: 'Law Firms',
      headline: 'Review Client Documents Faster.',
      desc: 'Get a quick starting point when reviewing contracts, agreements, case documents, and other lengthy client files.',
      icon: <Building2 size={24} color="#C6A15B" />,
      benefit: 'Team-wide consistency & faster turnaround',
    },
    {
      title: 'Lawyers & Advocates',
      headline: 'Get to the Important Details.',
      desc: 'Ask questions about a document, find relevant information, and spend less time manually searching through pages.',
      icon: <Briefcase size={24} color="#091526" />,
      featured: true,
      benefit: 'Pinpoint crucial clauses in minutes',
    },
    {
      title: 'Law Students',
      headline: 'Understand Difficult Documents.',
      desc: 'Use the analyzer to explore lengthy legal documents, ask questions, and find important sections while studying.',
      icon: <GraduationCap size={24} color="#C6A15B" />,
      benefit: 'A helpful study companion for legal briefs',
    },
  ];

  return (
    <section className="analyzer-audience-section" aria-labelledby="analyzer-aud-heading">
      <div className="content-container">
        <div className="analyzer-aud-header">
          <span className="analyzer-aud-eyebrow">TAILORED VALUE</span>
          <h2 id="analyzer-aud-heading" className="analyzer-aud-title">
            Who Is It For?
          </h2>
          <p className="analyzer-aud-desc">
            Whether you run a multi-partner firm, manage an independent chamber, or study legal briefs, the Document Analyzer simplifies your reading workflow.
          </p>
        </div>

        <div className="analyzer-aud-grid">
          {audiences.map((aud, idx) => (
            <div key={idx} className={`analyzer-aud-card ${aud.featured ? 'featured-aud' : ''}`}>
              <div className="aud-card-icon">{aud.icon}</div>
              <span className="aud-role-label">{aud.title}</span>
              <h3 className="aud-headline">{aud.headline}</h3>
              <p className="aud-desc">{aud.desc}</p>
              <div className="aud-benefit-pill">
                <span>{aud.benefit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
