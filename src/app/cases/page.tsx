import type { Metadata } from 'next';
import { CaseManagementPage } from '../../views/CaseManagementPage';

export const metadata: Metadata = {
  title: 'Case Management | BrilliusLaw Legal Technology',
};

export default function Page() {
  return <CaseManagementPage />;
}
