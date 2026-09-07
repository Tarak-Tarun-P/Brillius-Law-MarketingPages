import type { Metadata } from 'next';
import { LawLibraryPage } from '../../views/LawLibraryPage';

export const metadata: Metadata = {
  title: 'Law Library | BrilliusLaw Legal Technology',
};

export default function Page() {
  return <LawLibraryPage />;
}
