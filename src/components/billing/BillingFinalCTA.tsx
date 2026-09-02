import React from 'react';
import { ArrowRight, MessageSquare, Receipt, CheckCircle2, CreditCard } from 'lucide-react';
import './BillingFinalCTA.css';

export const BillingFinalCTA: React.FC = () => {
  return (
    <section className="billing-final-cta-section" aria-label="Start Billing and Invoicing">
      <div className="content-container">
        <div className="billing-final-cta-card">
          {/* Subtle Ambient Glows */}
          <div className="final-glow gold-glow" aria-hidden="true" />
          <div className="final-glow navy-glow" aria-hidden="true" />

          <div className="final-cta-content">
            <div className="final-eyebrow-wrapper">
              <span className="final-eyebrow-text">MODERN LEGAL BILLING</span>
            </div>

            <h2 className="final-cta-headline">
              Bring Clarity to Your Legal Billing.
            </h2>

            <p className="final-cta-description">
              Create professional invoices, track payments, and keep your firm’s billing organized.
            </p>

            <div className="final-cta-buttons-row">
              <a href="#get-started" className="btn-cta-gold">
                <span>Get Started</span>
                <ArrowRight size={16} />
              </a>

              <a href="#/contact" className="btn-cta-ghost">
                <span>Talk to Us</span>
                <MessageSquare size={16} />
              </a>
            </div>

            {/* Bottom Assurance */}
            <div className="final-assurance-row">
              <span className="assurance-item">
                <Receipt size={13} color="#C6A15B" />
                <span>Professional Itemized Invoices</span>
              </span>
              <span className="assurance-divider" aria-hidden="true">•</span>
              <span className="assurance-item">
                <CreditCard size={13} color="#C6A15B" />
                <span>Client &amp; Matter Linked</span>
              </span>
              <span className="assurance-divider" aria-hidden="true">•</span>
              <span className="assurance-item">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Clear Payment Tracking</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
