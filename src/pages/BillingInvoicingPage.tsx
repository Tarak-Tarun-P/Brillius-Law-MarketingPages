import React, { useEffect } from 'react';
import { BillingHero } from '../components/billing/BillingHero';
import { BillingProblem } from '../components/billing/BillingProblem';
import { BillingCoreValue } from '../components/billing/BillingCoreValue';
import { BillingInvoiceCreation } from '../components/billing/BillingInvoiceCreation';
import { BillingClientMatterLink } from '../components/billing/BillingClientMatterLink';
import { BillingPaymentStatus } from '../components/billing/BillingPaymentStatus';
import { BillingPartialPayments } from '../components/billing/BillingPartialPayments';
import { BillingTaxesAndCharges } from '../components/billing/BillingTaxesAndCharges';
import { BillingFinancialVisibility } from '../components/billing/BillingFinancialVisibility';
import { BillingBenefits } from '../components/billing/BillingBenefits';
import { BillingAudiences } from '../components/billing/BillingAudiences';
import { BillingWorkflow } from '../components/billing/BillingWorkflow';
import { BillingFinalCTA } from '../components/billing/BillingFinalCTA';

export const BillingInvoicingPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Billing & Invoicing | BrilliusLaw Legal Technology';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="billing-invoicing-page-main">
      {/* 01. Hero with Realistic Legal Invoice Mockup */}
      <BillingHero />

      {/* 02. The Problem: Scattered Records, Unclear Payments, Calculations */}
      <BillingProblem />

      {/* 03. Core Value: Billing Built Around Your Legal Practice */}
      <BillingCoreValue />

      {/* 04. Create Clear, Professional Invoices */}
      <BillingInvoiceCreation />

      {/* 05. Connect Invoices to Clients & Matters */}
      <BillingClientMatterLink />

      {/* 06. Payment Status Lifecycle (Draft, Sent, Partial, Paid, Overdue) */}
      <BillingPaymentStatus />

      {/* 07. Partial Payments & Staged Retainers */}
      <BillingPartialPayments />

      {/* 08. Taxes, Discounts & Out-of-Pocket Disbursements */}
      <BillingTaxesAndCharges />

      {/* 09. Financial Visibility & Practice Overview */}
      <BillingFinancialVisibility />

      {/* 10. Business Benefits */}
      <BillingBenefits />

      {/* 11. For Your Whole Firm (Partners, Associates, Finance, Admins) */}
      <BillingAudiences />

      {/* 12. Simple 4-Step Billing Workflow */}
      <BillingWorkflow />

      {/* 13. Final Call to Action */}
      <BillingFinalCTA />
    </main>
  );
};
