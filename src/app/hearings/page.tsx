import type { Metadata } from 'next';
import { HearingsPage } from '../../views/HearingsPage';

export const metadata: Metadata = {
  title: 'Hearings | BrilliusLaw Legal Technology',
};

export default function Page() {
  return <HearingsPage />;
}
