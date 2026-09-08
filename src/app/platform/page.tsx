import type { Metadata } from 'next';
import { SolutionsPage } from '../../views/SolutionsPage';

export const metadata: Metadata = {
  title: 'BrilliusLaw Platform | Built Around the Way You Work',
  description:
    'Explore the BrilliusLaw platform — a unified legal technology workspace built for Indian law firms, advocates, legal counsel, and students.',
};

export default function Page() {
  return <SolutionsPage />;
}
