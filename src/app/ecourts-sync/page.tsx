import type { Metadata } from 'next';
import { ECourtsSyncPage } from '../../views/ECourtsSyncPage';

export const metadata: Metadata = {
  title: 'Live eCourts Sync & Case Tracking | BrilliusLaw Legal Technology',
};

export default function Page() {
  return <ECourtsSyncPage />;
}
