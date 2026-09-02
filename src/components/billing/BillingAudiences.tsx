import React from 'react';
import { Shield, Briefcase, Receipt, UserCheck, CheckCircle2 } from 'lucide-react';
import './BillingAudiences.css';

export const BillingAudiences: React.FC = () => {
  const audiences = [
    {
      title: 'Managing Partners',
      quote: 'Get a clearer view of billing and outstanding payments across the firm.',
      icon: <Shield size={22} />,
      points: [
        'Practice-wide fee tracking and collection summaries',
        'Approve retainer agreements and special fee quotes',
        'Monitor overdue accounts and financial health',
      ],
      featured: true,
    },
    {
      title: 'Lawyers & Associates',
      quote: 'Keep client and matter billing connected to your legal work.',
      icon: <Briefcase size={22} />,
      points: [
        'Log court appearances and drafting milestones directly',
        'Ensure out-of-pocket court disbursements get billed',
        'View invoice status linked to your assigned matters',
      ],
    },
    {
      title: 'Finance & Billing Teams',
      quote: 'Create invoices and keep payment information organized.',
      icon: <Receipt size={22} />,
      points: [
        'Generate itemized GST-ready legal invoices',
        'Record partial payments, NEFT, RTGS, and cheque receipts',
        'Maintain clean accounts and client payment histories',
      ],
    },
    {
      title: 'Administrative Teams',
      quote: 'Help maintain accurate billing records and follow up on outstanding invoices.',
      icon: <UserCheck size={22} />,
      points: [
        'Send invoice copies directly to client accounts desks',
        'Track pending payment milestones across court stages',
        'Organize physical fee receipts and voucher files',
      ],
    },
  ];

  return (
    <section className="billing-audiences-section" aria-labelledby="billing-audiences-heading">
      <div className="content-container">
        <div className="billing-audiences-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">ROLE-FOCUSED VALUE</span>
          </div>
          <h2 id="billing-audiences-heading" className="billing-audiences-title">
            Useful Across Your Practice
          </h2>
          <p className="billing-audiences-desc">
            How different members of a law practice leverage Billing &amp; Invoicing to keep financial operations efficient.
          </p>
        </div>

        <div className="billing-audiences-grid">
          {audiences.map((aud, idx) => (
            <div
              key={idx}
              className={`billing-aud-card ${aud.featured ? 'featured-aud-card' : ''}`}
            >
              <div className="aud-card-header">
                <div className="aud-icon-circle">{aud.icon}</div>
                <strong className="aud-title-text">{aud.title}</strong>
              </div>

              <blockquote className="aud-quote-text">
                "{aud.quote}"
              </blockquote>

              <div className="aud-points-list">
                {aud.points.map((pt, pIdx) => (
                  <div key={pIdx} className="aud-point-item">
                    <CheckCircle2 size={13} color="#C6A15B" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
