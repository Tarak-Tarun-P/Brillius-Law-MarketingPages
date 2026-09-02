import React from 'react';
import { FileText, Users, Calendar, Clock } from 'lucide-react';
import './CasesBenefits.css';

export const CasesBenefits: React.FC = () => {
  const benefits = [
    {
      title: 'CASE DETAILS',
      desc: 'Keep court names, case numbers, categories, and priority flags in one structured record.',
      icon: <FileText size={22} color="#C6A15B" />,
    },
    {
      title: 'CLIENT CONNECTIONS',
      desc: 'Know exactly which client a matter belongs to and see all related opposing parties.',
      icon: <Users size={22} color="#091526" />,
    },
    {
      title: 'HEARING INFORMATION',
      desc: 'Keep relevant court dates, bench numbers, and causelist item details close to the case.',
      icon: <Calendar size={22} color="#C6A15B" />,
    },
    {
      title: 'CASE HISTORY',
      desc: 'Understand what has happened with a matter from initial filing through orders and hearings.',
      icon: <Clock size={22} color="#091526" />,
    },
  ];

  return (
    <section className="cases-benefits-section" aria-labelledby="benefits-heading">
      <div className="content-container">
        <div className="benefits-header">
          <span className="benefits-eyebrow">CORE VALUE</span>
          <h2 id="benefits-heading" className="benefits-title">
            A Clearer Way to Manage Cases.
          </h2>
          <p className="benefits-desc">
            Four simple benefits that give legal teams clarity, confidence, and control over their litigation practice.
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
