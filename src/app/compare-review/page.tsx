import type { Metadata } from 'next';
import { CompareReviewPage } from '../../views/CompareReviewPage';

export const metadata: Metadata = {
  title: 'Compare & Review | BrilliusLaw Legal Technology',
};

export default function Page() {
  return <CompareReviewPage />;
}
