import React, { useState } from 'react';
import {
  CheckCircle2,
  Receipt,
  Scale,
  MessageSquare,
  PenLine,
} from 'lucide-react';
import './BillingInvoiceCreation.css';

interface ServiceCategory {
  id: string;
  name: string;
  rate: string;
  description: string;
  icon: React.ReactNode;
}

export const BillingInvoiceCreation: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('appearance');

  const categories: ServiceCategory[] = [
    {
      id: 'appearance',
      name: 'Court Appearances',
      rate: '₹ 50,000 / Hearing',
      description: 'Senior counsel and arguing advocate representation in High Court, Commercial Court, or Tribunals.',
      icon: <Scale size={18} />,
    },
    {
      id: 'drafting',
      name: 'Pleadings & Drafting',
      rate: '₹ 35,000 / Pleading',
      description: 'Drafting Plaints, Written Statements, Special Leave Petitions, Counter-Affidavits, and Rejoinders.',
      icon: <PenLine size={18} />,
    },
    {
      id: 'consultation',
      name: 'Legal Consultation',
      rate: '₹ 15,000 / Session',
      description: 'Pre-litigation strategy conferences, evidentiary appraisal, and senior client advisory sessions.',
      icon: <MessageSquare size={18} />,
    },
    {
      id: 'court-charges',
      name: 'Court & Registry Charges',
      rate: 'Itemized Disbursements',
      description: 'Court filing fees, vakalatnama stamp duty, court process service, and official paper book printing.',
      icon: <Receipt size={18} />,
    },
  ];

  const activeCategory = categories.find((c) => c.id === selectedCategory) || categories[0];

  return (
    <section className="invoice-creation-section" aria-labelledby="invoice-creation-heading">
      <div className="content-container">
        <div className="creation-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">ITEMIZED INVOICING</span>
          </div>
          <h2 id="invoice-creation-heading" className="creation-title">
            Create Clear, Professional Invoices
          </h2>
          <p className="creation-desc">
            Create invoices that clearly show what your client is being charged for, making fees and expenses easier to understand.
          </p>
        </div>

        {/* Invoice Creation Workspace Preview */}
        <div className="creation-workspace-grid">
          {/* Left Category Selection */}
          <div className="creation-categories-list" role="tablist" aria-label="Billing Categories">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat.id}
                className={`category-item-btn ${selectedCategory === cat.id ? 'active-cat' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <div className="cat-icon-box">{cat.icon}</div>
                <div className="cat-text-group">
                  <span className="cat-name">{cat.name}</span>
                  <span className="cat-rate-str">{cat.rate}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Right Live Itemized Invoice Card */}
          <div className="invoice-live-card animate-fade-in" key={activeCategory.id}>
            <div className="invoice-card-header">
              <div className="firm-brand-title">
                <span className="chambers-label">ADVOCATE &amp; LEGAL CONSULTANTS</span>
                <strong className="chambers-name">CHAMBERS OF S. K. MEHTA</strong>
              </div>
              <div className="invoice-badge-block">
                <span className="inv-badge">TAX INVOICE</span>
                <span className="inv-num">#INV-2023-104</span>
              </div>
            </div>

            <div className="inv-client-summary-row">
              <div>
                <span className="inv-sub-lbl">CLIENT:</span>
                <strong className="inv-client-name">Kaveri Renewable Energies Ltd.</strong>
              </div>
              <div>
                <span className="inv-sub-lbl">MATTER:</span>
                <span className="inv-matter-str">Arbitration Petition (Comm.) No. 112/2023</span>
              </div>
            </div>

            {/* Selected Category Highlight Item */}
            <div className="highlight-line-item">
              <div className="highlight-top">
                <div className="highlight-title-group">
                  <div className="highlight-icon">{activeCategory.icon}</div>
                  <div>
                    <strong className="hl-name">{activeCategory.name}</strong>
                    <span className="hl-rate">{activeCategory.rate}</span>
                  </div>
                </div>
                <span className="hl-amount-val">Included in Bill</span>
              </div>
              <p className="hl-desc">{activeCategory.description}</p>
            </div>

            {/* Invoice Total Line */}
            <div className="inv-summary-bottom">
              <div className="total-breakdown">
                <div className="tb-row">
                  <span>Professional Fees:</span>
                  <span>₹ 85,000</span>
                </div>
                <div className="tb-row">
                  <span>Disbursements &amp; Registry:</span>
                  <span>₹ 12,400</span>
                </div>
                <div className="tb-row total-highlight">
                  <strong>Total Invoice Amount:</strong>
                  <strong className="gold-num">₹ 97,400</strong>
                </div>
              </div>
            </div>

            <div className="invoice-card-footer">
              <CheckCircle2 size={13} color="#C6A15B" />
              <span>Clients receive clear itemized breakdowns with complete transparency.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
