import type { Metadata } from 'next';
import { LegalResearchPage } from '../../views/LegalResearchPage';

export const metadata: Metadata = {
  title: 'Legal Research | BrilliusLaw Legal Technology',
};

export default function Page() {
  return <LegalResearchPage />;
}
