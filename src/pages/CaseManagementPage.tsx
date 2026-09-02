import React, { useEffect } from 'react';
import { CasesHero } from '../components/cases/CasesHero';
import { CasesProblem } from '../components/cases/CasesProblem';
import { CasesHowItWorks } from '../components/cases/CasesHowItWorks';
import { CasesDetailVisual } from '../components/cases/CasesDetailVisual';
import { CasesInfoAndClient } from '../components/cases/CasesInfoAndClient';
import { CasesHearingsAndTimeline } from '../components/cases/CasesHearingsAndTimeline';
import { CasesAudiences } from '../components/cases/CasesAudiences';
import { CasesBenefits } from '../components/cases/CasesBenefits';
import { CasesUseCases } from '../components/cases/CasesUseCases';
import { CasesLimitations } from '../components/cases/CasesLimitations';
import { CasesFinalCTA } from '../components/cases/CasesFinalCTA';

export const CaseManagementPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Case Management | BrilliusLaw Legal Technology';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="case-management-page-main">
      {/* 01. Hero with Case Directory Mockup */}
      <CasesHero />

      {/* 02. The Challenge: Scattered details, multiple matters, hearings */}
      <CasesProblem />

      {/* 03. How It Works: 01 Create -> 02 Organize -> 03 Connect -> 04 Follow */}
      <CasesHowItWorks />

      {/* 04. Case Profile / Case Detail Visual */}
      <CasesDetailVisual />

      {/* 05. Case Details & Client Connection */}
      <CasesInfoAndClient />

      {/* 06. Hearings & Chronological Case Timeline */}
      <CasesHearingsAndTimeline />

      {/* 07. Built for Law Firms and Lawyers & Advocates */}
      <CasesAudiences />

      {/* 08. Simple Benefits (Case Details, Clients, Hearings, History) */}
      <CasesBenefits />

      {/* 09. Realistic Use Cases (Where It Can Help) */}
      <CasesUseCases />

      {/* 10. Limitations: Good Case Management Still Needs Good Information */}
      <CasesLimitations />

      {/* 11. Final Call To Action */}
      <CasesFinalCTA />
    </main>
  );
};
