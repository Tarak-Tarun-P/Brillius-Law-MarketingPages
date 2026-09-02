import React from 'react';
import { Clock, Calendar, History, FileText } from 'lucide-react';
import './HearingsBenefits.css';

export const HearingsBenefits: React.FC = () => {
  const benefits = [
    {
      title: 'UPCOMING HEARINGS',
      desc: 'See what court appearances are coming up across your active matters in one organized list.',
      icon: <Clock size={22} color="#C6A15B" />,
    },
    {
      title: 'CALENDAR',
      desc: 'Keep important hearing dates visible directly on your integrated platform calendar.',
      icon: <Calendar size={22} color="#091526" />,
    },
    {
      title: 'PAST HEARINGS',
      desc: 'Review earlier proceedings and understand what transpired during previous appearances.',
      icon: <History size={22} color="#C6A15B" />,
    },
    {
      title: 'ORDERS & VERDICTS',
      desc: 'View and access recorded court orders, certified copies, and verdicts attached to the case.',
      icon: <FileText size={22} color="#091526" />,
    },
  ];

  return (
    <section className="hearings-benefits-section" aria-labelledby="benefits-heading">
      <div className="content-container">
        <div className="benefits-header">
          <span className="benefits-eyebrow">CORE VALUE</span>
          <h2 id="benefits-heading" className="benefits-title">
            Everything You Need to Follow a Hearing.
          </h2>
          <p className="benefits-desc">
            Four simple capabilities designed to keep your court dates clear, organized, and connected to your legal matters.
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
