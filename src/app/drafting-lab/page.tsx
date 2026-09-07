import type { Metadata } from 'next';
import { DraftingLabPage } from '../../views/DraftingLabPage';

export const metadata: Metadata = {
  title: 'Drafting Lab | BrilliusLaw Legal Technology',
};

export default function Page() {
  return <DraftingLabPage />;
}
