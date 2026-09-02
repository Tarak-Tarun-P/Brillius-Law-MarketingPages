import React from 'react';
import { User, Briefcase, History, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import './BillingClientMatterLink.css';

export const BillingClientMatterLink: React.FC = () => {
  const linkPillars = [
    {
      title: 'Client-Linked Billing',
      desc: 'Aggregate all invoices, retainers, and statements under the client’s verified profile.',
      icon: <User size={20} />,
    },
    {
      title: 'Matter-Linked Invoices',
      desc: 'Associate specific fee items with suit numbers, tribunal filings, or advisory briefs.',
      icon: <Briefcase size={20} />,
    },
    {
      title: 'Clear Billing History',
      desc: 'Review past billing milestones, paid receipts, and previous invoices at a glance.',
      icon: <History size={20} />,
    },
    {
      title: 'Easier Financial Tracking',
      desc: 'Understand total fees billed versus total fees received per client or matter.',
      icon: <TrendingUp size={20} />,
    },
  ];

  return (
    <section className="billing-link-section" aria-labelledby="link-heading">
      <div className="content-container">
        <div className="billing-link-grid">
          {/* Left Text */}
          <div className="link-left-content">
            <div className="eyebrow-chip">
              <span className="eyebrow-text">UNIFIED RELATIONSHIPS</span>
            </div>
            <h2 id="link-heading" className="link-title">
              Keep Every Invoice Connected
            </h2>
            <p className="link-desc">
              Keep billing information connected to the right client and matter so your team can understand exactly what each invoice relates to.
            </p>

            <div className="link-pillars-list">
              {linkPillars.map((p, idx) => (
                <div key={idx} className="link-pillar-row">
                  <div className="pillar-mini-icon">{p.icon}</div>
                  <div className="pillar-text">
                    <strong className="pillar-name">{p.title}</strong>
                    <p className="pillar-explanation">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Flow Diagram */}
          <div className="link-right-visual">
            <div className="link-diagram-card">
              {/* Step 1: Client Box */}
              <div className="diagram-box client-box">
                <div className="diag-header">
                  <User size={15} color="#C6A15B" />
                  <span className="diag-label">CLIENT PROFILE</span>
                </div>
                <strong className="diag-title">Horizon Logistics India Pvt. Ltd.</strong>
                <span className="diag-sub">KYC Verified • Corporate Client</span>
              </div>

              {/* Arrow 1 */}
              <div className="diagram-arrow">
                <ArrowRight size={16} color="#C6A15B" />
                <span className="arrow-text">Associated Matters</span>
              </div>

              {/* Step 2: Matter Box */}
              <div className="diagram-box matter-box">
                <div className="diag-header">
                  <Briefcase size={15} color="#C6A15B" />
                  <span className="diag-label">ACTIVE COURT MATTER</span>
                </div>
                <strong className="diag-title">Horizon Logistics vs Port Authority of India</strong>
                <span className="diag-sub">High Court of Bombay • Commercial Appeal #109/2023</span>
              </div>

              {/* Arrow 2 */}
              <div className="diagram-arrow">
                <ArrowRight size={16} color="#C6A15B" />
                <span className="arrow-text">Linked Invoices</span>
              </div>

              {/* Step 3: Invoices Container */}
              <div className="diagram-invoices-group">
                <div className="diag-inv-item">
                  <div className="inv-tag-row">
                    <span className="inv-num-str">INV-2023-074</span>
                    <span className="diag-status paid">Paid</span>
                  </div>
                  <span className="inv-amt-str">₹ 1,50,000 (Senior Briefing &amp; Admission)</span>
                </div>

                <div className="diag-inv-item active-inv">
                  <div className="inv-tag-row">
                    <span className="inv-num-str">INV-2023-112</span>
                    <span className="diag-status pending">Pending</span>
                  </div>
                  <span className="inv-amt-str">₹ 95,000 (Final Arguments Hearing)</span>
                </div>
              </div>

              <div className="diagram-footer">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Zero duplicate entries; financial and case data stay perfectly synchronized.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
