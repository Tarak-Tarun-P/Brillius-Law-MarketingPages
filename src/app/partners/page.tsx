import type { Metadata } from 'next';
import { PartnersPage } from '../../views/PartnersPage';

export const metadata: Metadata = {
  title: 'Partners | BrilliusLaw',
};

export default function Page() {
  return <PartnersPage />;
}
