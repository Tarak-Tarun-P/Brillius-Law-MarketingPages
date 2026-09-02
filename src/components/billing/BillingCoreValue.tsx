import React from 'react';
import { FileText, Link2, CheckCircle2, TrendingUp } from 'lucide-react';
import './BillingCoreValue.css';

export const BillingCoreValue: React.FC = () => {
  const pillars = [
    {
      title: 'Itemized Legal Fee Invoicing',
      desc: 'Create clear, structured invoices detailing court appearances, pleadings drafted, conferences held, and filing fee disbursements.',
      icon: <FileText size={20} />,
    },
    {
      title: 'Seamless Matter Linkage',
      desc: 'Every fee and billing record links directly to the respective client profile and active court matter.',
      icon: <Link2 size={20} />,
    },
    {
      title: 'Live Payment Tracking',
      desc: 'Track partial advances, staged fee payments, and pending dues with real-time status updates.',
      icon: <TrendingUp size={20} />,
    },
  ];

  return (
    <section id="billing-core-value" className="billing-core-value-section" aria-labelledby="billing-core-heading">
      <div className="content-container">
        <div className="billing-core-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">PRACTICE-ALIGNED BILLING</span>
          </div>
          <h2 id="billing-core-heading" className="billing-core-title">
            Billing Built Around Your Legal Practice
          </h2>
          <p className="billing-core-desc">
            Keep your client, matter, invoice, and payment information connected so your financial work stays organized.
          </p>
        </div>

        <div className="billing-core-grid">
          {pillars.map((p, idx) => (
            <div key={idx} className="core-pillar-card">
              <div className="pillar-icon-box">{p.icon}</div>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-desc">{p.desc}</p>
              <div className="pillar-footer">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Designed for Indian Chambers &amp; Law Firms</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
