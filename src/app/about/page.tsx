import type { Metadata } from 'next';
import { AboutPage } from '../../views/AboutPage';

export const metadata: Metadata = {
  title: 'About BrilliusLaw | Building a Smarter Future for Legal Professionals',
};

export default function Page() {
  return <AboutPage />;
}
