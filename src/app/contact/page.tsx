import type { Metadata } from 'next';
import { ContactPage } from '../../views/ContactPage';

export const metadata: Metadata = {
  title: "Contact BrilliusLaw | Let's Talk About Your Legal Journey",
};

export default function Page() {
  return <ContactPage />;
}
