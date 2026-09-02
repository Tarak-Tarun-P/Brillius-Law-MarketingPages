import React from 'react';
import { Search, BookOpen, CornerDownRight, Scale, ArrowRight } from 'lucide-react';
import './LibraryHowItWorks.css';

export const LibraryHowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'SEARCH',
      desc: 'Find an Act, section number, or landmark judicial decision.',
      icon: <Search size={18} color="#091526" />,
    },
    {
      num: '02',
      title: 'READ',
      desc: 'Open the verified provision text and review exact statutory wording.',
      icon: <BookOpen size={18} color="#091526" />,
    },
    {
      num: '03',
      title: 'FOLLOW',
      desc: 'Explore legislative footnotes and cross-references where available.',
      icon: <CornerDownRight size={18} color="#C6A15B" />,
      featured: true,
    },
    {
      num: '04',
      title: 'UNDERSTAND',
      desc: 'Review related judgments and connected legal principles.',
      icon: <Scale size={18} color="#091526" />,
    },
  ];

  return (
    <section id="library-how-it-works" className="library-works-section" aria-labelledby="how-it-works-heading">
      <div className="content-container">
        <div className="works-header">
          <span className="works-eyebrow">SIMPLE 4-STEP WORKFLOW</span>
          <h2 id="how-it-works-heading" className="works-title">
            A Simple Way to Explore the Law.
          </h2>
          <p className="works-desc">
            A clear, focused legal research path from locating statutes to discovering connected judicial decisions.
          </p>
        </div>

        <div className="works-steps-row">
          {steps.map((s, idx) => (
            <React.Fragment key={idx}>
              <div className={`works-step-box ${s.featured ? 'featured-work-box' : ''}`}>
                <div className="works-step-top">
                  <span className="step-num-pill">0{idx + 1}</span>
                  <div className="works-icon-circle">{s.icon}</div>
                </div>
                <h3 className="works-step-title">{s.title}</h3>
                <p className="works-step-desc">{s.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="works-step-arrow" aria-hidden="true">
                  <ArrowRight size={14} color="#C6A15B" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
