import type { Metadata } from 'next';
import { SolutionsPage } from '../../views/SolutionsPage';

export const metadata: Metadata = {
  title: 'BrilliusLaw Solutions | Built Around the Way You Work',
};

export default function Page() {
  return <SolutionsPage />;
}
