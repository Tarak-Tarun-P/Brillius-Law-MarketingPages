import React from 'react';
import { ShieldCheck, Target, UserCheck, HeartHandshake } from 'lucide-react';
import './OurValues.css';

export const OurValues: React.FC = () => {
  const values = [
    {
      icon: <ShieldCheck size={24} color="#091526" />,
      title: 'Trust & Privacy',
      desc: 'Your client information is strictly private. We use strong encryption and never share or sell your data to anyone.',
    },
    {
      icon: <Target size={24} color="#C6A15B" />,
      title: 'Accuracy',
      desc: 'No guesswork. Every answer, citation, and legal reference is checked against real Indian laws and verified court decisions.',
    },
    {
      icon: <UserCheck size={24} color="#091526" />,
      title: 'Human Judgment',
      desc: 'AI is here to help you, not replace you. You always stay in control of the final decision and every court draft.',
    },
    {
      icon: <HeartHandshake size={24} color="#C6A15B" />,
      title: 'Better Legal Work',
      desc: 'By removing tedious paperwork and daily chaos, we help lawyers and teams do their best work with less stress.',
    },
  ];

  return (
    <section className="our-values-section" aria-labelledby="values-heading">
      <div className="content-container">
        <div className="our-values-header">
          <span className="our-values-eyebrow">WHAT MATTERS TO US</span>
          <h2 id="values-heading" className="our-values-title">
            Our Values
          </h2>
          <p className="our-values-desc">
            The simple principles that guide how we build our product and serve our users every day.
          </p>
        </div>

        <div className="our-values-grid" role="list">
          {values.map((v, i) => (
            <div key={i} className="our-value-card">
              <div className="value-icon-box">{v.icon}</div>
              <h3 className="value-title">{v.title}</h3>
              <p className="value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
