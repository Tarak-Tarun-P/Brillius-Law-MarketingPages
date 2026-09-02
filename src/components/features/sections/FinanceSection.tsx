import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { BillingOverviewVisual } from '../visuals/BillingOverviewVisual';
import './sections.css';

export const FinanceSection: React.FC = () => {
  return (
    <section id="section-finance" className="workflow-section bg-surface-alt" aria-labelledby="finance-heading">
      <div className="content-container">
        {/* Section Main Header */}
        <div className="workflow-section-header">
          <div className="section-eyebrow-pill">BILLING & FINANCE</div>
          <h2 id="finance-heading" className="workflow-section-title">
            Keep Your Firm's Finances Organized
          </h2>
          <p className="workflow-section-desc">
            Stay on top of billing, invoices, payments, and financial activity alongside your legal work.
          </p>
        </div>

        {/* Billing Overview & Invoicing */}
        <div className="workflow-sub-block layout-text-left">
          <div className="sub-text-col">
            <span className="sub-tag">01 // BILLING & INVOICING</span>
            <h3 className="sub-title">Billing & Invoice Management</h3>
            <p className="sub-desc">
              Get a clear view of billing activity, outstanding work, collections, and financial performance without cumbersome administrative overhead.
            </p>
            <ul className="sub-bullets">
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Track billable hours, fixed matter fees, and retainer tranches seamlessly</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Create, review, track, and manage invoices for legal work and case expenses</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Real-time collections visibility to accelerate firm cash flow and realization</span></li>
            </ul>
          </div>
          <div className="sub-visual-col">
            <BillingOverviewVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
