import React from 'react';
import { Zap, MessageSquare, Clock, TrendingUp } from 'lucide-react';
import './BillingBenefits.css';

export const BillingBenefits: React.FC = () => {
  const benefits = [
    {
      num: '01',
      title: 'Faster Billing',
      desc: 'Create and manage invoices without unnecessary administrative work.',
      icon: <Zap size={22} />,
    },
    {
      num: '02',
      title: 'Clearer Client Communication',
      desc: 'Give clients straightforward invoices with clear charges and totals.',
      icon: <MessageSquare size={22} />,
    },
    {
      num: '03',
      title: 'Better Payment Tracking',
      desc: 'Know which invoices are paid and which still need attention.',
      icon: <Clock size={22} />,
    },
    {
      num: '04',
      title: 'Better Financial Visibility',
      desc: 'Keep a clearer record of billing and outstanding amounts across your practice.',
      icon: <TrendingUp size={22} />,
    },
  ];

  return (
    <section className="billing-benefits-section" aria-labelledby="billing-benefits-heading">
      <div className="content-container">
        <div className="billing-benefits-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">PRACTICE ADVANTAGES</span>
          </div>
          <h2 id="billing-benefits-heading" className="billing-benefits-title">
            Built to Make Billing Easier
          </h2>
          <p className="billing-benefits-desc">
            Four direct benefits designed to help law chambers and legal teams handle billing with greater confidence and simplicity.
          </p>
        </div>

        <div className="billing-benefits-grid">
          {benefits.map((b, idx) => (
            <div key={idx} className="bill-benefit-card">
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
