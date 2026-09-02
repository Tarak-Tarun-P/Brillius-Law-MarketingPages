import React, { useEffect } from 'react';
import { EvidenceHero } from '../components/evidence/EvidenceHero';
import { EvidenceStore } from '../components/evidence/EvidenceStore';
import { EvidenceProblem } from '../components/evidence/EvidenceProblem';
import { EvidenceHowItWorks } from '../components/evidence/EvidenceHowItWorks';
import { EvidenceConnectCase } from '../components/evidence/EvidenceConnectCase';
import { EvidencePreviousList } from '../components/evidence/EvidencePreviousList';
import { EvidenceAudiences } from '../components/evidence/EvidenceAudiences';
import { EvidenceBenefits } from '../components/evidence/EvidenceBenefits';
import { EvidenceLimitations } from '../components/evidence/EvidenceLimitations';
import { EvidenceFinalCTA } from '../components/evidence/EvidenceFinalCTA';

export const EvidencePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Evidence Storage & Exhibits | BrilliusLaw Legal Technology';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="evidence-page-main">
      {/* 01. Hero */}
      <EvidenceHero />

      {/* 02. Store Evidence (Add -> Select Case -> Save) */}
      <EvidenceStore />

      {/* 03. The Challenge */}
      <EvidenceProblem />

      {/* 04. How It Works (Add -> Connect -> Store -> Return) */}
      <EvidenceHowItWorks />

      {/* 05. Connect Evidence to a Case */}
      <EvidenceConnectCase />

      {/* 06. View Previous Evidence */}
      <EvidencePreviousList />

      {/* 07. For Lawyers & Advocates, For Law Firms & Teams */}
      <EvidenceAudiences />

      {/* 08. Simple Benefits */}
      <EvidenceBenefits />

      {/* 09. Limitations */}
      <EvidenceLimitations />

      {/* 10. Final Call To Action */}
      <EvidenceFinalCTA />
    </main>
  );
};
