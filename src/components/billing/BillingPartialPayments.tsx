import React from 'react';
import { CheckCircle2, Clock, History } from 'lucide-react';
import './BillingPartialPayments.css';

export const BillingPartialPayments: React.FC = () => {
  const paymentHistory = [
    {
      date: '01 Sep 2023',
      type: 'Initial Retainer Advance',
      method: 'Bank Transfer (NEFT)',
      amount: '₹ 50,000',
      status: 'Recorded',
      balanceAfter: '₹ 1,00,000 remaining',
    },
    {
      date: '28 Sep 2023',
      type: 'Interim Hearing Stage Payment',
      method: 'Cheque Clearance',
      amount: '₹ 40,000',
      status: 'Recorded',
      balanceAfter: '₹ 60,000 remaining',
    },
    {
      date: '15 Oct 2023',
      type: 'Final Arguments Deposit',
      method: 'Online Transfer (RTGS)',
      amount: '₹ 35,000',
      status: 'Recorded',
      balanceAfter: '₹ 25,000 remaining',
    },
  ];

  return (
    <section className="billing-partial-section" aria-labelledby="partial-heading">
      <div className="content-container">
        <div className="partial-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">FLEXIBLE FEE ARRANGEMENTS</span>
          </div>
          <h2 id="partial-heading" className="partial-title">
            Handle Different Payment Arrangements
          </h2>
          <p className="partial-desc">
            Legal fees are not always paid in one go. Keep track of payments and outstanding balances when clients pay in stages.
          </p>
        </div>

        {/* Staged Payment Tracker Box */}
        <div className="partial-tracker-card">
          {/* Card Top Banner */}
          <div className="tracker-topbar">
            <div className="tracker-matter-info">
              <span className="tracker-sub">FEE ARRANGEMENT TRACKER</span>
              <strong className="tracker-title">Special Leave Petition (Civil) — Chambers Engagement</strong>
            </div>
            <div className="tracker-total-block">
              <span className="tracker-lbl">Agreed Total Fee:</span>
              <strong className="tracker-total-amt">₹ 1,50,000</strong>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="progress-section">
            <div className="progress-meta">
              <span className="progress-status-str">Total Paid to Date: <strong>₹ 1,25,000</strong> (83%)</span>
              <span className="progress-balance-str">Remaining Due: <strong className="gold-num">₹ 25,000</strong></span>
            </div>
            <div className="progress-bar-track">
              <div className="progress-bar-fill" style={{ width: '83%' }} />
            </div>
          </div>

          {/* Payment History Log */}
          <div className="payment-history-wrap">
            <div className="history-header">
              <History size={14} color="#C6A15B" />
              <strong className="history-heading">Recorded Payment Milestones</strong>
            </div>

            <div className="history-list">
              {paymentHistory.map((item, idx) => (
                <div key={idx} className="history-row-item">
                  <div className="hist-date-box">
                    <Clock size={12} color="#C6A15B" />
                    <span>{item.date}</span>
                  </div>

                  <div className="hist-details">
                    <strong className="hist-type-title">{item.type}</strong>
                    <span className="hist-method">{item.method}</span>
                  </div>

                  <strong className="hist-amt-paid">+{item.amount}</strong>

                  <span className="hist-bal-after">{item.balanceAfter}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="tracker-footer">
            <CheckCircle2 size={13} color="#C6A15B" />
            <span>Support for advances, retainers, and multiple staged receipts with automatic remaining balance calculation.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
