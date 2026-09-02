import React from 'react';
import { Layers, Search, Briefcase, FileText } from 'lucide-react';
import './ClientsBenefits.css';

export const ClientsBenefits: React.FC = () => {
  const benefits = [
    {
      title: 'ONE PLACE',
      desc: 'Keep basic contact details, entity information, and addresses in a single structured profile.',
      icon: <Layers size={22} color="#C6A15B" />,
    },
    {
      title: 'EASY TO FIND',
      desc: 'Find any client, PAN number, or company record in seconds using fast keyword search.',
      icon: <Search size={22} color="#091526" />,
    },
    {
      title: 'CONNECTED CASES',
      desc: 'See all past, active, and pending legal proceedings associated with each client.',
      icon: <Briefcase size={22} color="#C6A15B" />,
    },
    {
      title: 'IMPORTANT NOTES',
      desc: 'Keep private practitioner notes, meeting instructions, and next steps close at hand.',
      icon: <FileText size={22} color="#091526" />,
    },
  ];

  return (
    <section className="clients-benefits-section" aria-labelledby="benefits-heading">
      <div className="content-container">
        <div className="benefits-header">
          <span className="benefits-eyebrow">CORE VALUE</span>
          <h2 id="benefits-heading" className="benefits-title">
            A Simpler Way to Manage Client Information.
          </h2>
          <p className="benefits-desc">
            Four clear benefits that make BrilliusLaw an essential daily tool for law firms and independent advocates.
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
