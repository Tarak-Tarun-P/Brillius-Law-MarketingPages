import React from 'react';
import {
  CheckCircle2,
  Clock,
  AlertTriangle,
  Receipt,
} from 'lucide-react';
import './BillingFinancialVisibility.css';

export const BillingFinancialVisibility: React.FC = () => {
  const metricCards = [
    {
      title: 'Total Invoiced',
      amount: '₹ 14,85,000',
      period: 'Current Quarter (Q3)',
      icon: <Receipt size={20} />,
      cardClass: 'metric-total',
    },
    {
      title: 'Total Collected',
      amount: '₹ 11,20,000',
      period: '75.4% Collection Rate',
      icon: <CheckCircle2 size={20} />,
      cardClass: 'metric-paid',
    },
    {
      title: 'Pending Invoices',
      amount: '₹ 2,45,000',
      period: 'Due within 30 days',
      icon: <Clock size={20} />,
      cardClass: 'metric-pending',
    },
    {
      title: 'Overdue Balance',
      amount: '₹ 1,20,000',
      period: 'Requires follow-up',
      icon: <AlertTriangle size={20} />,
      cardClass: 'metric-overdue',
    },
  ];

  const recentInvoices = [
    {
      id: 'INV-2023-124',
      client: 'Tata Steel Subcontractor Group',
      date: 'Yesterday',
      amount: '₹ 1,15,000',
      status: 'Paid',
      statusClass: 'st-paid',
    },
    {
      id: 'INV-2023-123',
      client: 'Apex Infrastructure Pvt. Ltd.',
      date: '2 days ago',
      amount: '₹ 75,000',
      status: 'Pending',
      statusClass: 'st-pending',
    },
    {
      id: 'INV-2023-122',
      client: 'Greenfield Power Corp',
      date: '4 days ago',
      amount: '₹ 2,10,000',
      status: 'Partially Paid',
      statusClass: 'st-partial',
    },
  ];

  return (
    <section className="billing-visibility-section" aria-labelledby="visibility-heading">
      <div className="content-container">
        <div className="visibility-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">PRACTICE OVERVIEW</span>
          </div>
          <h2 id="visibility-heading" className="visibility-title">
            See Your Billing at a Glance
          </h2>
          <p className="visibility-desc">
            Get a clearer view of invoices, payments, and outstanding amounts across your practice.
          </p>
        </div>

        {/* 4 Financial Metrics Grid */}
        <div className="visibility-metrics-grid">
          {metricCards.map((m, idx) => (
            <div key={idx} className={`financial-metric-card ${m.cardClass}`}>
              <div className="metric-icon-box">{m.icon}</div>
              <span className="metric-title-str">{m.title}</span>
              <strong className="metric-amount-str">{m.amount}</strong>
              <span className="metric-sub-str">{m.period}</span>
            </div>
          ))}
        </div>

        {/* Recent Invoices Quick Table Card */}
        <div className="recent-invoices-card">
          <div className="recent-topbar">
            <strong className="recent-title">Recent Invoices Overview</strong>
            <span className="recent-sub">Latest Practice Billing Activity</span>
          </div>

          <div className="recent-list">
            {recentInvoices.map((item) => (
              <div key={item.id} className="recent-row">
                <div className="recent-inv-col">
                  <strong className="r-id">{item.id}</strong>
                  <span className="r-client">{item.client}</span>
                </div>
                <span className="r-date">{item.date}</span>
                <strong className="r-amount">{item.amount}</strong>
                <span className={`status-pill-small ${item.statusClass}`}>{item.status}</span>
              </div>
            ))}
          </div>

          <div className="recent-footer">
            <CheckCircle2 size={13} color="#C6A15B" />
            <span>Practice-level visibility ensures no outstanding invoice or retainer milestone gets overlooked.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
