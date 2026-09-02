import React from 'react';
import { Scale, BookOpen, FileCheck, GraduationCap, Lightbulb } from 'lucide-react';
import './JournalVoiceScenarios.css';

export const JournalVoiceScenarios: React.FC = () => {
  const scenarios = [
    {
      title: 'Reading a Judgment',
      desc: 'Record an immediate observation on how the judge\'s ratio applies to your active matter.',
      example: '"Check whether this 3-judge bench decision overruled the earlier single-bench ruling."',
      icon: <Scale size={18} color="#C6A15B" />,
    },
    {
      title: 'Researching a Provision',
      desc: 'Capture a cross-statute question while following footnotes and legislative amendments.',
      example: '"Verify if the Section 12A mediation requirement applies before filing an urgent injunction."',
      icon: <BookOpen size={18} color="#091526" />,
      featured: true,
    },
    {
      title: 'Reviewing a Document',
      desc: 'Speak an amendment suggestion or clause flag without stopping to type out formal comments.',
      example: '"Cap the indemnification liability in Clause 14 to fees paid in preceding 12 months."',
      icon: <FileCheck size={18} color="#C6A15B" />,
    },
    {
      title: 'Court & Hearing Prep',
      desc: 'Dictate a quick speaking point or oral rebuttal while reviewing your petition brief.',
      example: '"Emphasize the statutory timeline in paragraph 4 during initial opening submissions."',
      icon: <Lightbulb size={18} color="#091526" />,
    },
    {
      title: 'Studying & Exam Prep',
      desc: 'Save summary notes on landmark statutory definitions and precedent doctrines for revision.',
      example: '"Review the essential elements of promissory estoppel under Section 115 tonight."',
      icon: <GraduationCap size={18} color="#C6A15B" />,
    },
  ];

  return (
    <section className="journal-scenarios-section" aria-labelledby="scenarios-heading">
      <div className="content-container">
        <div className="scenarios-header">
          <span className="scenarios-eyebrow">PRACTICAL USAGE</span>
          <h2 id="scenarios-heading" className="scenarios-title">
            Capture a Thought While You Have It.
          </h2>
          <p className="scenarios-desc">
            Voice capture keeps your focus uninterrupted across every stage of reading, researching, drafting, and studying.
          </p>
        </div>

        <div className="scenarios-grid">
          {scenarios.map((sc, idx) => (
            <div key={idx} className={`scenario-card ${sc.featured ? 'featured-scenario-card' : ''}`}>
              <div className="scenario-top">
                <div className="scenario-icon-box">{sc.icon}</div>
                <strong className="scenario-title">{sc.title}</strong>
              </div>
              <p className="scenario-desc">{sc.desc}</p>
              <div className="scenario-quote-box">
                <span className="quote-label">SPOKEN THOUGHT</span>
                <p className="quote-text">{sc.example}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
