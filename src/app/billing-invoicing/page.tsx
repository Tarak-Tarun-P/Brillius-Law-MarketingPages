import type { Metadata } from 'next';
import { BillingInvoicingPage } from '../../views/BillingInvoicingPage';

export const metadata: Metadata = {
  title: 'Billing & Invoicing | BrilliusLaw Legal Technology',
};

export default function Page() {
  return <BillingInvoicingPage />;
}
