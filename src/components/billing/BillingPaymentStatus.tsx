import React, { useState } from 'react';
import {
  FileText,
  Send,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Receipt,
  MoreVertical,
} from 'lucide-react';
import './BillingPaymentStatus.css';

interface InvoiceStatusItem {
  id: string;
  client: string;
  matter: string;
  amount: string;
  status: 'Draft' | 'Sent' | 'Partially Paid' | 'Paid' | 'Overdue';
  statusClass: string;
  dueDate: string;
}

export const BillingPaymentStatus: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const invoices: InvoiceStatusItem[] = [
    {
      id: 'INV-2023-118',
      client: 'Sun Pharma Logistics',
      matter: 'NCLT Company Petition #42',
      amount: '₹ 1,80,000',
      status: 'Paid',
      statusClass: 'st-paid',
      dueDate: 'Paid on 12 Oct',
    },
    {
      id: 'INV-2023-119',
      client: 'ABC Technologies Pvt. Ltd.',
      matter: 'Commercial Suit #482/2023',
      amount: '₹ 1,51,630',
      status: 'Partially Paid',
      statusClass: 'st-partial',
      dueDate: 'Balance Due: 30 Oct',
    },
    {
      id: 'INV-2023-120',
      client: 'Metro Infra Consortium',
      matter: 'Arbitration Notice & Section 9',
      amount: '₹ 2,25,000',
      status: 'Sent',
      statusClass: 'st-sent',
      dueDate: 'Due in 7 days',
    },
    {
      id: 'INV-2023-112',
      client: 'Kaveri Energy Projects',
      matter: 'Section 11 Arbitration',
      amount: '₹ 97,400',
      status: 'Overdue',
      statusClass: 'st-overdue',
      dueDate: '14 Days Overdue',
    },
    {
      id: 'INV-2023-121',
      client: 'Apex Retail Enterprises',
      matter: 'Trademark Opposition Proceeding',
      amount: '₹ 45,000',
      status: 'Draft',
      statusClass: 'st-draft',
      dueDate: 'In Review',
    },
  ];

  const filteredInvoices =
    activeFilter === 'all'
      ? invoices
      : invoices.filter((inv) => inv.status.toLowerCase().replace(/\s+/g, '-') === activeFilter);

  return (
    <section className="billing-status-section" aria-labelledby="status-heading">
      <div className="content-container">
        <div className="status-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">PAYMENT STATUS LIFECYCLE</span>
          </div>
          <h2 id="status-heading" className="status-title">
            Know What’s Paid and What’s Pending
          </h2>
          <p className="status-desc">
            Stay on top of outstanding invoices with clear payment statuses and a simple view of what still needs attention.
          </p>
        </div>

        {/* Status System Pills / Filter */}
        <div className="status-pills-filter">
          <button
            type="button"
            className={`status-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Invoices
          </button>
          <button
            type="button"
            className={`status-filter-btn ${activeFilter === 'draft' ? 'active' : ''}`}
            onClick={() => setActiveFilter('draft')}
          >
            <FileText size={12} />
            <span>Draft</span>
          </button>
          <button
            type="button"
            className={`status-filter-btn ${activeFilter === 'sent' ? 'active' : ''}`}
            onClick={() => setActiveFilter('sent')}
          >
            <Send size={12} />
            <span>Sent</span>
          </button>
          <button
            type="button"
            className={`status-filter-btn ${activeFilter === 'partially-paid' ? 'active' : ''}`}
            onClick={() => setActiveFilter('partially-paid')}
          >
            <Clock size={12} />
            <span>Partially Paid</span>
          </button>
          <button
            type="button"
            className={`status-filter-btn ${activeFilter === 'paid' ? 'active' : ''}`}
            onClick={() => setActiveFilter('paid')}
          >
            <CheckCircle2 size={12} />
            <span>Paid</span>
          </button>
          <button
            type="button"
            className={`status-filter-btn ${activeFilter === 'overdue' ? 'active' : ''}`}
            onClick={() => setActiveFilter('overdue')}
          >
            <AlertTriangle size={12} />
            <span>Overdue</span>
          </button>
        </div>

        {/* Status Dashboard Table */}
        <div className="status-dashboard-card">
          <div className="dash-topbar">
            <div className="dash-title-group">
              <Receipt size={16} color="#C6A15B" />
              <strong className="dash-heading">Invoice Payment Tracker</strong>
            </div>
            <span className="dash-subtext">Showing {filteredInvoices.length} Invoices</span>
          </div>

          <div className="dash-table-wrapper">
            <div className="dash-table-head">
              <span>Invoice &amp; Client</span>
              <span>Connected Matter</span>
              <span>Invoice Amount</span>
              <span>Status</span>
              <span>Timeline / Due Date</span>
              <span>Actions</span>
            </div>

            <div className="dash-table-body">
              {filteredInvoices.map((inv) => (
                <div key={inv.id} className="dash-row">
                  <div className="dash-inv-client">
                    <strong className="dash-inv-id">{inv.id}</strong>
                    <span className="dash-client-name">{inv.client}</span>
                  </div>

                  <span className="dash-matter-name">{inv.matter}</span>

                  <strong className="dash-amount-val">{inv.amount}</strong>

                  <div>
                    <span className={`status-tag-badge ${inv.statusClass}`}>
                      {inv.status}
                    </span>
                  </div>

                  <span className="dash-due-str">{inv.dueDate}</span>

                  <div className="dash-action-cell">
                    <button type="button" className="btn-dash-action" aria-label="Invoice Options">
                      <MoreVertical size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="dash-footer">
            <CheckCircle2 size={13} color="#C6A15B" />
            <span>Clearly distinguishes completed transactions from active receivables.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
