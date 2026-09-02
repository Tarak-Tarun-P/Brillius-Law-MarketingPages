import React, { useEffect } from 'react';
import { ClientsHero } from '../components/clients/ClientsHero';
import { ClientsProblem } from '../components/clients/ClientsProblem';
import { ClientsHowItWorks } from '../components/clients/ClientsHowItWorks';
import { ClientsProfileSection } from '../components/clients/ClientsProfileSection';
import { ClientsDetailsKYC } from '../components/clients/ClientsDetailsKYC';
import { ClientsNotesAndCases } from '../components/clients/ClientsNotesAndCases';
import { ClientsAudiences } from '../components/clients/ClientsAudiences';
import { ClientsUseCases } from '../components/clients/ClientsUseCases';
import { ClientsBenefits } from '../components/clients/ClientsBenefits';
import { ClientsLimitations } from '../components/clients/ClientsLimitations';
import { ClientsFinalCTA } from '../components/clients/ClientsFinalCTA';

export const ClientManagementPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Clients Management | BrilliusLaw Legal Technology';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="clients-management-page-main">
      {/* 01. Hero with Client Directory Mockup */}
      <ClientsHero />

      {/* 02. The Challenge (Scattered Info, Multiple Matters, Lost Notes) */}
      <ClientsProblem />

      {/* 03. How It Works (Add -> View -> Manage -> Connect) */}
      <ClientsHowItWorks />

      {/* 04. Client Profile View (Interactive Details, KYC, Notes, Cases) */}
      <ClientsProfileSection />

      {/* 05. Client Details & KYC (Individual vs Company) */}
      <ClientsDetailsKYC />

      {/* 06. Client Notes & Connected Matters */}
      <ClientsNotesAndCases />

      {/* 07. Audiences: Law Firms & Advocates */}
      <ClientsAudiences />

      {/* 08. Practical Legal Practice Scenarios */}
      <ClientsUseCases />

      {/* 09. Core Benefits (One Place, Easy to Find, Connected Cases, Notes) */}
      <ClientsBenefits />

      {/* 10. Data Accuracy & Best Practices */}
      <ClientsLimitations />

      {/* 11. Final Call To Action */}
      <ClientsFinalCTA />
    </main>
  );
};
