import type { Metadata } from 'next';
import { FeaturesPage } from '../../views/FeaturesPage';

export const metadata: Metadata = {
  title: 'BrilliusLaw Features | Simple, Powerful Legal Technology',
};

export default function Page() {
  return <FeaturesPage />;
}
