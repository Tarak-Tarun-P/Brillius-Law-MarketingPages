import type { Metadata } from 'next';
import { EvidencePage } from '../../views/EvidencePage';

export const metadata: Metadata = {
  title: 'Evidence Storage & Exhibits | BrilliusLaw Legal Technology',
};

export default function Page() {
  return <EvidencePage />;
}
