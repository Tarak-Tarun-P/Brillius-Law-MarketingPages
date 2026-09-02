import React from 'react';
import { LayoutGrid, Shield, Eye, TrendingUp } from 'lucide-react';
import './FirmBenefits.css';

export const FirmBenefits: React.FC = () => {
  const benefits = [
    {
      num: '01',
      title: 'Better Organization',
      desc: 'Keep people, responsibilities, and access organized as your firm grows.',
      icon: <LayoutGrid size={22} />,
    },
    {
      num: '02',
      title: 'Stronger Confidentiality',
      desc: 'Help ensure sensitive client and matter information is only available to the right people.',
      icon: <Shield size={22} />,
    },
    {
      num: '03',
      title: 'Clearer Oversight',
      desc: 'Give senior members better visibility into important work and approvals.',
      icon: <Eye size={22} />,
    },
    {
      num: '04',
      title: 'Easier Growth',
      desc: 'Make it easier to manage your team as your practice expands.',
      icon: <TrendingUp size={22} />,
    },
  ];

  return (
    <section className="firm-benefits-section" aria-labelledby="benefits-heading">
      <div className="content-container">
        <div className="firm-benefits-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">BUSINESS ADVANTAGES</span>
          </div>
          <h2 id="benefits-heading" className="firm-benefits-title">
            Built to Help Your Firm Work Better
          </h2>
          <p className="firm-benefits-desc">
            Four foundational advantages that empower modern law practices to scale seamlessly while maintaining high operational standards.
          </p>
        </div>

        <div className="firm-benefits-grid">
          {benefits.map((b, idx) => (
            <div key={idx} className="firm-benefit-card">
              <div className="benefit-card-top">
                <span className="benefit-num-pill">{b.num}</span>
                <div className="benefit-icon-wrap">{b.icon}</div>
              </div>
              <h3 className="benefit-card-title">{b.title}</h3>
              <p className="benefit-card-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
