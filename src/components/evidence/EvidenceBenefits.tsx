import React from 'react';
import { Archive, Link, Search, FileText } from 'lucide-react';
import './EvidenceBenefits.css';

export const EvidenceBenefits: React.FC = () => {
  const benefits = [
    {
      title: 'STORE',
      desc: 'Keep all evidentiary files, exhibits, and supporting materials securely in the platform.',
      icon: <Archive size={22} color="#C6A15B" />,
    },
    {
      title: 'CONNECT',
      desc: 'Keep files connected directly to the relevant case so context is never lost.',
      icon: <Link size={22} color="#091526" />,
    },
    {
      title: 'FIND',
      desc: 'Quickly find and open evidence whenever you return to working on the matter.',
      icon: <Search size={22} color="#C6A15B" />,
    },
    {
      title: 'REVIEW',
      desc: 'View previously added evidence, exhibits, and attachments whenever you need them.',
      icon: <FileText size={22} color="#091526" />,
    },
  ];

  return (
    <section className="evidence-benefits-section" aria-labelledby="benefits-heading">
      <div className="content-container">
        <div className="benefits-header">
          <span className="benefits-eyebrow">CORE VALUE</span>
          <h2 id="benefits-heading" className="benefits-title">
            A Simpler Way to Keep Evidence.
          </h2>
          <p className="benefits-desc">
            Four simple capabilities designed to keep your exhibits organized, connected to your cases, and always within reach.
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
