import React from 'react';
import { MessageSquare, Compass, BookOpen } from 'lucide-react';
import './AIAssistantOverview.css';

export const AIAssistantOverview: React.FC = () => {
  const cards = [
    {
      icon: <MessageSquare size={24} color="#091526" />,
      title: 'Describe the Matter',
      desc: 'Explain the factual background, question, or research scenario in your own plain words.',
    },
    {
      icon: <Compass size={24} color="#C6A15B" />,
      title: 'Identify Possible Areas',
      desc: 'Discover potentially relevant legal topics, Acts, and section provisions worth investigating.',
      featured: true,
    },
    {
      icon: <BookOpen size={24} color="#091526" />,
      title: 'Deepen Your Research',
      desc: 'Ask follow-up questions to understand nuances and transition smoothly to Bare Acts.',
    },
  ];

  return (
    <section id="assistant-how-it-works" className="assistant-overview-section" aria-labelledby="overview-heading">
      <div className="content-container">
        <div className="assistant-overview-header">
          <span className="overview-eyebrow">WHAT IT DOES</span>
          <h2 id="overview-heading" className="overview-title">
            Start With a Question.
          </h2>
          <p className="overview-desc">
            Legal work often starts with a question. BrilliusLaw helps you explore that question, understand the information you find, and decide what to look into next.
          </p>
        </div>

        <div className="overview-cards-grid">
          {cards.map((c, i) => (
            <div key={i} className={`overview-card ${c.featured ? 'featured-overview-card' : ''}`}>
              <div className="overview-icon-box">{c.icon}</div>
              <h3 className="overview-card-title">{c.title}</h3>
              <p className="overview-card-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
