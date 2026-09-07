import type { Metadata } from 'next';
import { CaseDraftsPage } from '../../views/CaseDraftsPage';

export const metadata: Metadata = {
  title: 'Case Drafts | BrilliusLaw Legal Technology',
};

export default function Page() {
  return <CaseDraftsPage />;
}
