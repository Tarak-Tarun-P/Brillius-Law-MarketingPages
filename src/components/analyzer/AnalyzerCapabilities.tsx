import React from 'react';
import { Search, MessageSquare, Lightbulb, CheckCircle2 } from 'lucide-react';
import './AnalyzerCapabilities.css';

export const AnalyzerCapabilities: React.FC = () => {
  const pillars = [
    {
      title: 'FIND',
      desc: 'Find relevant clauses and information more easily across multi-page files.',
      icon: <Search size={22} color="#C6A15B" />,
    },
    {
      title: 'ASK',
      desc: 'Ask questions in everyday natural language without typing complex queries.',
      icon: <MessageSquare size={22} color="#091526" />,
    },
    {
      title: 'UNDERSTAND',
      desc: 'Get a clearer starting point when reviewing lengthy agreements or petitions.',
      icon: <Lightbulb size={22} color="#C6A15B" />,
    },
    {
      title: 'REVIEW',
      desc: 'Return to the document and verify every detail with your own judgment.',
      icon: <CheckCircle2 size={22} color="#091526" />,
    },
  ];

  return (
    <section className="analyzer-capabilities-section" aria-labelledby="capabilities-heading">
      <div className="content-container">
        <div className="capabilities-header">
          <span className="capabilities-eyebrow">CORE VALUE</span>
          <h2 id="capabilities-heading" className="capabilities-title">
            A Faster Way to Explore Documents.
          </h2>
          <p className="capabilities-desc">
            Four simple ways BrilliusLaw transforms document review into a smooth, structured experience.
          </p>
        </div>

        <div className="capabilities-grid">
          {pillars.map((p, idx) => (
            <div key={idx} className="capability-card">
              <div className="capability-icon">{p.icon}</div>
              <h3 className="capability-title">{p.title}</h3>
              <p className="capability-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
