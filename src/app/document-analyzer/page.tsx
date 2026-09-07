import type { Metadata } from 'next';
import { DocumentAnalyzerPage } from '../../views/DocumentAnalyzerPage';

export const metadata: Metadata = {
  title: 'Document Analyzer | BrilliusLaw Legal Technology',
};

export default function Page() {
  return <DocumentAnalyzerPage />;
}
