import type { Metadata } from 'next';
import { ClientManagementPage } from '../../views/ClientManagementPage';

export const metadata: Metadata = {
  title: 'Clients Management | BrilliusLaw Legal Technology',
};

export default function Page() {
  return <ClientManagementPage />;
}
