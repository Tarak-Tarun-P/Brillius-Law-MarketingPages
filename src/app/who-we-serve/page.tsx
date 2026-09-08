import type { Metadata } from 'next';
import { WhoWeServeView } from '../../views/WhoWeServeView';

export const metadata: Metadata = {
  title: 'Who BrilliusLaw Is Built For | Modern Legal Platform',
  description:
    'One legal platform designed around the people, teams, and organizations involved in modern legal work — Law Firms, Advocates, Corporate Legal Teams, Corporates & Legal Counsel, and Law Students.',
};

export default function Page() {
  return <WhoWeServeView />;
}
