import React, { useEffect } from 'react';
import { SolutionsHero } from '../components/solutions/SolutionsHero';
import { ThreeMainSolutions } from '../components/solutions/ThreeMainSolutions';
import { SolutionsByWork } from '../components/solutions/SolutionsByWork';
import { BeforeAndAfter } from '../components/solutions/BeforeAndAfter';
import { LegalJourneyStage } from '../components/solutions/LegalJourneyStage';
import { SolutionsEcosystem } from '../components/solutions/SolutionsEcosystem';
import { WhyOnePlatform } from '../components/solutions/WhyOnePlatform';
import { SolutionsCallouts } from '../components/solutions/SolutionsCallouts';
import { SolutionsAudienceCTA } from '../components/solutions/SolutionsAudienceCTA';
import { SolutionsFinalCTA } from '../components/solutions/SolutionsFinalCTA';

export const SolutionsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'BrilliusLaw Solutions | Built Around the Way You Work';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="solutions-page-main">
      {/* 01. Hero with Audience Indicators */}
      <SolutionsHero />

      {/* 02. Three Main Solution Cards (Firms, Lawyers, Students) */}
      <ThreeMainSolutions />

      {/* 03. Solutions by Legal Work (5 Pillars) */}
      <SolutionsByWork />

      {/* 04. Before and After (The Old Way vs With BrilliusLaw) */}
      <BeforeAndAfter />

      {/* 05. Your Legal Journey (Student -> Lawyer -> Firm) */}
      <LegalJourneyStage />

      {/* 06. Central Connected Ecosystem Hub */}
      <SolutionsEcosystem />

      {/* 07. Why One Platform? (4 Benefit Blocks) */}
      <WhyOnePlatform />

      {/* 08. Feature Callouts (Law Library & My Journal Pathways) */}
      <SolutionsCallouts />

      {/* 09. Audience Pathways Selector */}
      <SolutionsAudienceCTA />

      {/* 10. Final Call to Action */}
      <SolutionsFinalCTA />
    </main>
  );
};
