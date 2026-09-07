import type { Metadata } from 'next';
import { MyJournalPage } from '../../views/MyJournalPage';

export const metadata: Metadata = {
  title: 'My Journal | BrilliusLaw Legal Technology',
};

export default function Page() {
  return <MyJournalPage />;
}
