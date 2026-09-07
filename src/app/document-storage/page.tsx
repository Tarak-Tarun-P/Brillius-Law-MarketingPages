import type { Metadata } from 'next';
import { DocumentStoragePage } from '../../views/DocumentStoragePage';

export const metadata: Metadata = {
  title: 'Document Storage | BrilliusLaw Legal Technology',
};

export default function Page() {
  return <DocumentStoragePage />;
}
