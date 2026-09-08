import type { Metadata } from 'next';
import { ComingSoonView } from '../../views/ComingSoonView';

export const metadata: Metadata = {
  title: 'Coming Soon — BrilliusLaw',
  description: 'We’re preparing BrilliusLaw for the next stage of modern legal work.',
};

export default function Page() {
  return <ComingSoonView />;
}
