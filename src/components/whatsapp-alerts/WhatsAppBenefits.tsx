import React from 'react';
import { Eye, Clock, Zap, Users } from 'lucide-react';
import './WhatsAppBenefits.css';

export const WhatsAppBenefits: React.FC = () => {
  const benefits = [
    {
      num: '01',
      title: 'Stay Informed',
      desc: 'Receive important updates without constantly checking your workspace.',
      icon: <Eye size={22} />,
    },
    {
      num: '02',
      title: 'Reduce Repeated Checking',
      desc: 'Spend less time manually checking for routine updates.',
      icon: <Clock size={22} />,
    },
    {
      num: '03',
      title: 'Keep Work Moving',
      desc: 'Know when something needs your attention, review, or follow-up.',
      icon: <Zap size={22} />,
    },
    {
      num: '04',
      title: 'Better Team Coordination',
      desc: 'Help relevant team members stay aware of important activities.',
      icon: <Users size={22} />,
    },
  ];

  return (
    <section className="wa-benefits-section" aria-labelledby="wa-benefits-heading">
      <div className="content-container">
        <div className="wa-benefits-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">PRACTICE VALUE</span>
          </div>
          <h2 id="wa-benefits-heading" className="wa-benefits-title">
            Simple Alerts. Better Awareness.
          </h2>
          <p className="wa-benefits-desc">
            Four key advantages that streamline communication and keep litigation matters moving forward.
          </p>
        </div>

        <div className="wa-benefits-grid">
          {benefits.map((b, idx) => (
            <div key={idx} className="wa-benefit-card">
              <div className="b-card-top">
                <span className="b-num-pill">{b.num}</span>
                <div className="b-icon-wrap">{b.icon}</div>
              </div>
              <h3 className="b-card-title">{b.title}</h3>
              <p className="b-card-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
