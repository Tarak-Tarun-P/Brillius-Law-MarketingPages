import React from 'react';
import { Search, Briefcase, BookOpen, GraduationCap } from 'lucide-react';
import './AIAssistantUseCases.css';

export const AIAssistantUseCases: React.FC = () => {
  const useCases = [
    {
      title: 'Legal Research',
      scenario: 'Starting research on a new legal issue?',
      solution: 'Describe the matter and explore relevant branches of law and statutory provisions to investigate.',
      icon: <Search size={22} color="#C6A15B" />,
    },
    {
      title: 'Case Preparation',
      scenario: 'Preparing arguments for an upcoming hearing?',
      solution: 'Use the Assistant to organize core legal questions, threshold conditions, and potential statutory defenses.',
      icon: <Briefcase size={22} color="#091526" />,
    },
    {
      title: 'Understanding the Law',
      scenario: 'Working through an unfamiliar statutory provision?',
      solution: 'Ask for a simpler plain-English breakdown and explore how exceptions and provisos operate.',
      icon: <BookOpen size={22} color="#C6A15B" />,
    },
    {
      title: 'Legal Study & Briefs',
      scenario: 'Studying a landmark doctrine or moot problem?',
      solution: 'Ask questions to explore foundational legal principles and identify landmark rulings for your brief.',
      icon: <GraduationCap size={22} color="#091526" />,
    },
  ];

  return (
    <section className="assistant-usecases-section" aria-labelledby="usecases-heading">
      <div className="content-container">
        <div className="usecases-header">
          <span className="usecases-eyebrow">PRACTICAL SCENARIOS</span>
          <h2 id="usecases-heading" className="usecases-title">
            Where It Can Help
          </h2>
          <p className="usecases-desc">
            Discover real-world situations where starting with a conversational question provides a clear path forward.
          </p>
        </div>

        <div className="usecases-grid">
          {useCases.map((uc, idx) => (
            <div key={idx} className="usecase-card">
              <div className="usecase-icon-box">{uc.icon}</div>
              <h3 className="usecase-title">{uc.title}</h3>
              <p className="usecase-scenario">"{uc.scenario}"</p>
              <div className="usecase-divider" aria-hidden="true" />
              <p className="usecase-solution">{uc.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
