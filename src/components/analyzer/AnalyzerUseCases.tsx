import React from 'react';
import { FileText, Users, Briefcase, GraduationCap } from 'lucide-react';
import './AnalyzerUseCases.css';

export const AnalyzerUseCases: React.FC = () => {
  const cases = [
    {
      title: 'Long Agreement',
      scenario: 'Need to find a specific term without reading every page again?',
      solution: 'Ask about payment terms, liabilities, or renewal dates and jump directly to the relevant clause.',
      icon: <FileText size={22} color="#C6A15B" />,
    },
    {
      title: 'Client Document',
      scenario: 'Need a quick understanding of a document before a client meeting?',
      solution: 'Use the analyzer to explore key responsibilities, dates, and covenants in advance.',
      icon: <Users size={22} color="#091526" />,
    },
    {
      title: 'Case Document',
      scenario: 'Looking for a particular date, witness reference, or exhibit detail?',
      solution: 'Ask a direct question instead of manually scanning through hundreds of pages of filings.',
      icon: <Briefcase size={22} color="#C6A15B" />,
    },
    {
      title: 'Law Study & Briefs',
      scenario: 'Working through a lengthy agreement, statute, or landmark petition?',
      solution: 'Ask questions to navigate the structure, clarify provisions, and prepare stronger notes.',
      icon: <GraduationCap size={22} color="#091526" />,
    },
  ];

  return (
    <section className="analyzer-usecases-section" aria-labelledby="usecases-heading">
      <div className="content-container">
        <div className="usecases-header">
          <span className="usecases-eyebrow">PRACTICAL SCENARIOS</span>
          <h2 id="usecases-heading" className="usecases-title">
            Where It Can Help
          </h2>
          <p className="usecases-desc">
            Explore practical situations where asking your document saves valuable hours every week.
          </p>
        </div>

        <div className="usecases-grid">
          {cases.map((cs, idx) => (
            <div key={idx} className="usecase-card">
              <div className="usecase-icon-box">{cs.icon}</div>
              <h3 className="usecase-title">{cs.title}</h3>
              <p className="usecase-scenario">"{cs.scenario}"</p>
              <div className="usecase-divider" aria-hidden="true" />
              <p className="usecase-solution">{cs.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
