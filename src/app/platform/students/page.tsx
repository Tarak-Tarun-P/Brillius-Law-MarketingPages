import type { Metadata } from 'next';
import { PlatformStudentsView } from '../../../views/PlatformStudentsView';

export const metadata: Metadata = {
  title: 'Law Students — BrilliusLaw Platform',
  description: 'A practical workspace for exploring Indian law, researching cases, organizing legal knowledge, and building better legal-work habits.',
};

export default function Page() {
  return <PlatformStudentsView />;
}
