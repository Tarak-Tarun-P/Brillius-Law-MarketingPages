import type { Metadata } from 'next';
import { PlatformFirmsView } from '../../../views/PlatformFirmsView';

export const metadata: Metadata = {
  title: 'Law Firms & Teams — BrilliusLaw Platform',
  description: 'A dedicated BrilliusLaw workspace for firms to organize clients, matters, teams, documents, billing, and day-to-day legal work.',
};

export default function Page() {
  return <PlatformFirmsView />;
}
