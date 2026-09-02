import React from 'react';
import { ArrowRight, HelpCircle, Compass, Lightbulb, ArrowRightCircle } from 'lucide-react';
import './AIAssistantExplore.css';

export const AIAssistantExplore: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'ASK',
      desc: 'Ask about a legal question, issue, or topic in your own words.',
      icon: <HelpCircle size={20} color="#091526" />,
    },
    {
      num: '02',
      title: 'EXPLORE',
      desc: 'Explore areas or provisions that may be relevant to the matter.',
      icon: <Compass size={20} color="#C6A15B" />,
      featured: true,
    },
    {
      num: '03',
      title: 'UNDERSTAND',
      desc: 'Ask follow-up questions and understand the information better.',
      icon: <Lightbulb size={20} color="#091526" />,
    },
    {
      num: '04',
      title: 'CONTINUE',
      desc: 'Use the direction from the conversation to continue your research or work.',
      icon: <ArrowRightCircle size={20} color="#091526" />,
    },
  ];

  return (
    <section className="assistant-explore-section" aria-labelledby="explore-heading">
      <div className="content-container">
        <div className="explore-section-header">
          <span className="explore-eyebrow">A CLEAR RESEARCH PATH</span>
          <h2 id="explore-heading" className="explore-title">
            Explore What May Apply.
          </h2>
          <p className="explore-desc">
            Describe the legal situation and ask which laws, sections, or legal topics may be relevant to the matter you're researching.
          </p>
        </div>

        <div className="explore-pathway-grid">
          {steps.map((s, idx) => (
            <React.Fragment key={idx}>
              <div className={`explore-step-card ${s.featured ? 'featured-explore-card' : ''}`}>
                <div className="explore-step-top">
                  <span className="step-tag">0{idx + 1} — {s.title}</span>
                  <div className="step-icon-box">{s.icon}</div>
                </div>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-sub">{s.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="explore-arrow-divider" aria-hidden="true">
                  <ArrowRight size={18} color="#C6A15B" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
