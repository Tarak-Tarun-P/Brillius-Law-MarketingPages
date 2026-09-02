import React from 'react';
import {
  ArrowRight,
  Receipt,
  CheckCircle2,
  FileText,
  Calendar,
  ChevronRight,
  CreditCard,
} from 'lucide-react';
import './BillingHero.css';

export const BillingHero: React.FC = () => {
  const scrollToExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('billing-core-value');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="billing-hero-section" aria-label="Billing &amp; Invoicing Hero">
      {/* Background ambient lighting */}
      <div className="billing-hero-glow glow-gold" aria-hidden="true" />
      <div className="billing-hero-glow glow-navy" aria-hidden="true" />

      <div className="content-container">
        <div className="billing-hero-grid">
          {/* LEFT: Headline & Value Proposition */}
          <div className="billing-hero-left animate-fade-in-up">
            <div className="billing-hero-eyebrow-wrapper">
              <span className="billing-hero-eyebrow">BILLING &amp; INVOICING</span>
              <span className="billing-hero-eyebrow-line" aria-hidden="true" />
            </div>

            <h1 className="billing-hero-headline">
              Make Every Bill
              <br />
              <span className="gold-accent-text">Clear.</span>
            </h1>

            <p className="billing-hero-description">
              Create professional invoices, connect them to clients and matters, and keep track of payments from one place.
            </p>

            <div className="billing-hero-actions">
              <a href="#get-started" className="btn-billing-primary">
                <span>Get Started</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                href="#billing-core-value"
                className="btn-billing-secondary"
                onClick={scrollToExplore}
              >
                <span>Explore Billing</span>
                <ChevronRight size={15} aria-hidden="true" />
              </a>
            </div>

            {/* Trust Pills */}
            <div className="billing-trust-pills">
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Client &amp; Matter Linked</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Itemized Legal Fees</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Clear Payment Tracking</span>
              </span>
            </div>
          </div>

          {/* RIGHT: Realistic Legal Invoice / Billing Dashboard Visual */}
          <div className="billing-hero-right animate-fade-in">
            <div className="billing-mockup-card">
              {/* Window Header */}
              <div className="billing-mockup-header">
                <div className="mockup-window-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="billing-header-title">
                  <Receipt size={13} color="#C6A15B" />
                  <span>Invoice #INV-2023-089</span>
                </div>
                <span className="invoice-status-pill paid-pill">Partially Paid</span>
              </div>

              {/* Invoice Meta Grid */}
              <div className="invoice-meta-grid">
                <div className="meta-block">
                  <span className="meta-label">BILLED TO (CLIENT)</span>
                  <strong className="meta-value-strong">ABC Technologies Pvt. Ltd.</strong>
                  <span className="meta-sub">GSTIN: 29AABCU9603R1ZM</span>
                </div>

                <div className="meta-block">
                  <span className="meta-label">CONNECTED MATTER</span>
                  <strong className="meta-value-strong">ABC Tech vs XYZ Ltd (Commercial Suit #482)</strong>
                  <span className="meta-sub">Bengaluru Commercial Court</span>
                </div>
              </div>

              {/* Invoice Dates Row */}
              <div className="invoice-date-bar">
                <div className="date-item">
                  <Calendar size={12} color="#C6A15B" />
                  <span><strong>Date:</strong> 15 Oct 2023</span>
                </div>
                <div className="date-item">
                  <Calendar size={12} color="#C6A15B" />
                  <span><strong>Due Date:</strong> 30 Oct 2023</span>
                </div>
                <div className="date-item">
                  <FileText size={12} color="#C6A15B" />
                  <span><strong>Chambers Ref:</strong> SKM/2023/ARB</span>
                </div>
              </div>

              {/* Itemized Line Items Table */}
              <div className="invoice-items-table">
                <div className="table-header">
                  <span className="col-desc">Service Description</span>
                  <span className="col-type">Category</span>
                  <span className="col-amount">Amount (₹)</span>
                </div>

                <div className="table-rows">
                  <div className="table-row">
                    <div className="item-desc-wrap">
                      <strong className="item-title">Senior Counsel Appearance &amp; Interim Arguments</strong>
                      <span className="item-note">Commercial Court Hearing on 10 Oct 2023</span>
                    </div>
                    <span className="item-category-tag">Appearance</span>
                    <span className="item-amount-val">₹ 75,000</span>
                  </div>

                  <div className="table-row">
                    <div className="item-desc-wrap">
                      <strong className="item-title">Drafting Written Statement &amp; Counter-Claim</strong>
                      <span className="item-note">Comprehensive 32-page pleading</span>
                    </div>
                    <span className="item-category-tag">Drafting</span>
                    <span className="item-amount-val">₹ 45,000</span>
                  </div>

                  <div className="table-row">
                    <div className="item-desc-wrap">
                      <strong className="item-title">Court Filing &amp; Document Service Reimbursements</strong>
                      <span className="item-note">Registry filing fees &amp; process service</span>
                    </div>
                    <span className="item-category-tag">Out of Pocket</span>
                    <span className="item-amount-val">₹ 8,500</span>
                  </div>
                </div>
              </div>

              {/* Financial Calculation & Balance Summary */}
              <div className="invoice-calc-summary">
                <div className="calc-left">
                  <span className="calc-left-title">PAYMENT RECORD</span>
                  <div className="payment-record-pill">
                    <CreditCard size={12} color="#047857" />
                    <span>Advance Received (NEFT): ₹ 60,000</span>
                  </div>
                </div>

                <div className="calc-right">
                  <div className="calc-line">
                    <span className="calc-lbl">Subtotal:</span>
                    <span className="calc-val">₹ 1,28,500</span>
                  </div>
                  <div className="calc-line">
                    <span className="calc-lbl">Applicable Tax (GST 18%):</span>
                    <span className="calc-val">₹ 23,130</span>
                  </div>
                  <div className="calc-line total-line">
                    <span className="calc-lbl total-lbl">Total Invoiced:</span>
                    <span className="calc-val total-val">₹ 1,51,630</span>
                  </div>
                  <div className="calc-line balance-line">
                    <span className="balance-lbl">Outstanding Balance:</span>
                    <strong className="balance-val">₹ 91,630</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
