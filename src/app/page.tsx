import type { Metadata } from 'next';
import { LandingPage } from '../views/LandingPage';

export const metadata: Metadata = {
  title: 'BrilliusLaw — Where Legal Work Comes Together.',
  description: 'BrilliusLaw brings legal research, document intelligence, and connected workflows together in one powerful legal platform.',
};

export default function Page() {
  return <LandingPage />;
}
