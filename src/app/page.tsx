import type { Metadata } from 'next';
import { LandingPage } from '../views/LandingPage';

export const metadata: Metadata = {
  title: 'BrilliusLaw — Modern Legal Intelligence. Built for the Law.',
};

export default function Page() {
  return <LandingPage />;
}
