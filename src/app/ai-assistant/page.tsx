import type { Metadata } from 'next';
import { AIAssistantPage } from '../../views/AIAssistantPage';

export const metadata: Metadata = {
  title: 'AI Assistant | BrilliusLaw Legal Technology',
};

export default function Page() {
  return <AIAssistantPage />;
}
