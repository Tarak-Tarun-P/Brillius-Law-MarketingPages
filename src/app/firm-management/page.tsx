import type { Metadata } from 'next';
import { FirmManagementPage } from '../../views/FirmManagementPage';

export const metadata: Metadata = {
  title: 'Firm Management | BrilliusLaw Legal Technology',
};

export default function Page() {
  return <FirmManagementPage />;
}
