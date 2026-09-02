import React from 'react';
import { Calculator, Percent, Receipt, Tag } from 'lucide-react';
import './BillingTaxesAndCharges.css';

export const BillingTaxesAndCharges: React.FC = () => {
  const chargeComponents = [
    {
      title: 'Professional Legal Fees',
      desc: 'Itemized billing for court hearings, pleadings drafting, legal opinions, and client consultations.',
      icon: <Receipt size={18} />,
      tag: 'Core Legal Fees',
    },
    {
      title: 'Applicable GST & Taxes',
      desc: 'Transparently calculate and display applicable GST (Goods & Services Tax) lines and client GSTIN details.',
      icon: <Percent size={18} />,
      tag: 'Tax Display',
    },
    {
      title: 'Discounts & Retainer Adjustments',
      desc: 'Apply agreed courtesy discounts, retainer credit deductions, or pro bono concessions with full clarity.',
      icon: <Tag size={18} />,
      tag: 'Adjustments',
    },
    {
      title: 'Out-of-Pocket Disbursements',
      desc: 'Account for registry stamp paper, process fees, courier, certified copy charges, and court expenses.',
      icon: <Calculator size={18} />,
      tag: 'Reimbursements',
    },
  ];

  return (
    <section className="billing-taxes-section" aria-labelledby="taxes-heading">
      <div className="content-container">
        <div className="taxes-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">STRUCTURED ACCOUNTING</span>
          </div>
          <h2 id="taxes-heading" className="taxes-title">
            Keep the Numbers Clear
          </h2>
          <p className="taxes-desc">
            Keep fees, applicable taxes, discounts, and additional charges clearly organized so the final amount is easy to understand.
          </p>
        </div>

        <div className="taxes-components-grid">
          {chargeComponents.map((item, idx) => (
            <div key={idx} className="tax-item-box">
              <div className="tax-box-top">
                <div className="tax-icon-wrap">{item.icon}</div>
                <span className="tax-badge">{item.tag}</span>
              </div>
              <h3 className="tax-item-title">{item.title}</h3>
              <p className="tax-item-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
