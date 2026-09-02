import React from 'react';
import { Search, Compass, BookmarkCheck } from 'lucide-react';
import './AnalyzerProblem.css';

export const AnalyzerProblem: React.FC = () => {
  const painPoints = [
    {
      icon: <Search size={24} color="#091526" />,
      title: 'FINDING INFORMATION',
      desc: 'Spend less time manually flipping through dozens of pages to locate a single term or requirement.',
    },
    {
      icon: <Compass size={24} color="#C6A15B" />,
      title: 'UNDERSTANDING DOCUMENTS',
      desc: 'Get a clearer starting point when first opening and reviewing a complex, unfamiliar legal file.',
    },
    {
      icon: <BookmarkCheck size={24} color="#091526" />,
      title: 'RETURNING TO DETAILS',
      desc: 'Find relevant sections quickly without losing track of where key paragraphs and schedules appeared.',
    },
  ];

  return (
    <section className="analyzer-problem-section" aria-labelledby="problem-heading">
      <div className="content-container">
        <div className="analyzer-problem-header">
          <span className="problem-eyebrow">THE PROBLEM</span>
          <h2 id="problem-heading" className="problem-title">
            Long Documents Take Time to Understand.
          </h2>
          <p className="problem-desc">
            Important information can be spread across many pages. Finding one clause, answer, or detail can mean searching through the document again and again.
          </p>
        </div>

        <div className="problem-cards-grid">
          {painPoints.map((item, idx) => (
            <div key={idx} className="problem-card">
              <div className="problem-icon-box">{item.icon}</div>
              <h3 className="problem-card-title">{item.title}</h3>
              <p className="problem-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
