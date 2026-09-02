import React from 'react';
import { HelpCircle, Compass, Lightbulb, ArrowRightCircle } from 'lucide-react';
import './AIAssistantBenefits.css';

export const AIAssistantBenefits: React.FC = () => {
  const benefits = [
    {
      title: 'START WITH A QUESTION',
      desc: 'No need to know the exact section number or legal doctrine before you begin.',
      icon: <HelpCircle size={22} color="#C6A15B" />,
    },
    {
      title: 'EXPLORE POSSIBILITIES',
      desc: 'Discover potentially relevant areas, statutory sections, and legal angles worth exploring.',
      icon: <Compass size={22} color="#091526" />,
    },
    {
      title: 'UNDERSTAND BETTER',
      desc: 'Ask follow-up questions to break down complex statutory language into plain terms.',
      icon: <Lightbulb size={22} color="#C6A15B" />,
    },
    {
      title: 'KEEP MOVING',
      desc: 'Organize your thoughts quickly and plan the next steps of your legal research.',
      icon: <ArrowRightCircle size={22} color="#091526" />,
    },
  ];

  return (
    <section className="assistant-benefits-section" aria-labelledby="benefits-heading">
      <div className="content-container">
        <div className="benefits-header">
          <span className="benefits-eyebrow">CORE VALUE</span>
          <h2 id="benefits-heading" className="benefits-title">
            Why Use the Assistant?
          </h2>
          <p className="benefits-desc">
            Four simple ways the AI Assistant helps you bridge the gap between an initial question and thorough legal research.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((b, idx) => (
            <div key={idx} className="benefit-card">
              <div className="benefit-icon-wrap">{b.icon}</div>
              <h3 className="benefit-title">{b.title}</h3>
              <p className="benefit-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
