import React from 'react';
import { Upload, BookOpen, MessageSquare, CheckCircle2 } from 'lucide-react';
import './AnalyzerHowItWorks.css';

export const AnalyzerHowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'UPLOAD',
      desc: 'Add the PDF or Word document you want to explore and understand.',
      icon: <Upload size={22} color="#091526" />,
    },
    {
      num: '02',
      title: 'EXPLORE',
      desc: 'Review the document, its key clause structure, and major sections.',
      icon: <BookOpen size={22} color="#091526" />,
    },
    {
      num: '03',
      title: 'ASK',
      desc: 'Ask questions about the document in your own plain, natural words.',
      icon: <MessageSquare size={22} color="#C6A15B" />,
      featured: true,
    },
    {
      num: '04',
      title: 'REVIEW',
      desc: 'Read the answer, click the exact citation, and verify it directly.',
      icon: <CheckCircle2 size={22} color="#091526" />,
    },
  ];

  return (
    <section id="how-it-works" className="analyzer-how-section" aria-labelledby="how-heading">
      <div className="content-container">
        <div className="analyzer-how-header">
          <span className="how-eyebrow">SIMPLE 4-STEP PROCESS</span>
          <h2 id="how-heading" className="how-title">
            How It Works
          </h2>
          <p className="how-desc">
            A simple, transparent flow designed to help you navigate lengthy agreements without confusion.
          </p>
        </div>

        <div className="how-steps-grid">
          {steps.map((st, i) => (
            <div key={i} className={`how-step-card ${st.featured ? 'featured-how-card' : ''}`}>
              <div className="step-card-top">
                <span className="step-badge">STEP {st.num}</span>
                <div className="step-icon-circle">{st.icon}</div>
              </div>

              <h3 className="step-title">{st.title}</h3>
              <p className="step-desc">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
