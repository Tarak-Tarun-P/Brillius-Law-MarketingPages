import React from 'react';
import { Files, Clock, Calculator, HelpCircle } from 'lucide-react';
import './BillingProblem.css';

export const BillingProblem: React.FC = () => {
  const problems = [
    {
      num: '01',
      title: 'Scattered Billing',
      desc: 'Keep invoices and payment information organized instead of relying on scattered records.',
      icon: <Files size={22} />,
    },
    {
      num: '02',
      title: 'Unclear Payments',
      desc: 'See which invoices are paid, pending, partially paid, or overdue.',
      icon: <Clock size={22} />,
    },
    {
      num: '03',
      title: 'Manual Calculations',
      desc: 'Make billing easier by keeping charges and totals clearly organized.',
      icon: <Calculator size={22} />,
    },
    {
      num: '04',
      title: 'Client Confusion',
      desc: 'Give clients clearer, itemized invoices that are easier to understand.',
      icon: <HelpCircle size={22} />,
    },
  ];

  return (
    <section className="billing-problem-section" aria-labelledby="billing-problem-heading">
      <div className="content-container">
        <div className="billing-problem-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">COMMON BILLING OBSTACLES</span>
          </div>
          <h2 id="billing-problem-heading" className="billing-problem-title">
            Legal Billing Shouldn’t Be Complicated.
          </h2>
          <p className="billing-problem-desc">
            Keeping track of fees, invoices, payments, and outstanding amounts can quickly become difficult as your practice grows. Billing &amp; Invoicing brings these activities together so your team can manage them with greater clarity.
          </p>
        </div>

        <div className="billing-problem-grid">
          {problems.map((p, idx) => (
            <div key={idx} className="problem-bill-card">
              <div className="bill-card-top">
                <span className="bill-index-pill">{p.num}</span>
                <div className="bill-icon-wrap">{p.icon}</div>
              </div>
              <h3 className="bill-card-title">{p.title}</h3>
              <p className="bill-card-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
