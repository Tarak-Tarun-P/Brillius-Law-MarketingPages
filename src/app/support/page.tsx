import type { Metadata } from 'next';
import { SupportPage } from '../../views/SupportPage';

export const metadata: Metadata = {
  title: 'Support | BrilliusLaw',
};

export default function Page() {
  return <SupportPage />;
}
