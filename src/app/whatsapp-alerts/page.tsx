import type { Metadata } from 'next';
import { WhatsAppAlertsPage } from '../../views/WhatsAppAlertsPage';

export const metadata: Metadata = {
  title: 'WhatsApp Alerts | BrilliusLaw Legal Technology',
};

export default function Page() {
  return <WhatsAppAlertsPage />;
}
