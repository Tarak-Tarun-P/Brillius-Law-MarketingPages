import type { Metadata } from 'next';
import { PlatformLawyersView } from '../../../views/PlatformLawyersView';

export const metadata: Metadata = {
  title: 'Lawyers & Advocates — BrilliusLaw Platform',
  description: 'Tools to help individual lawyers and advocates organize matters, research law, prepare documents, track hearings, and manage everyday legal work.',
};

export default function Page() {
  return <PlatformLawyersView />;
}
