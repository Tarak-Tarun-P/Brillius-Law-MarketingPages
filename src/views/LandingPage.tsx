import React from 'react';
import { Hero } from '../components/Hero';
import { LandingPageFeaturesOverview } from '../components/LandingPageFeaturesOverview';
import { ProductValueSection } from '../components/ProductValueSection';
import { ConnectedWorkflowSection } from '../components/ConnectedWorkflowSection';
import { PracticeAreasSection } from '../components/PracticeAreasSection';
import { LandingPageFinalCTA } from '../components/LandingPageFinalCTA';

export const LandingPage: React.FC = () => {
  return (
    <main>
      {/* 01. Hero with Lady Justice & Legal Intelligence Thesis */}
      <Hero />

      {/* 02. Features Overview - 5 Refined Category Cards */}
      <LandingPageFeaturesOverview />

      {/* 03. Product Value - Built for the Way Legal Work Happens */}
      <ProductValueSection />

      {/* 04. Workflow & Ecosystem - How BrilliusLaw Fits Together */}
      <ConnectedWorkflowSection />

      {/* 05. Practice Areas - Built Around the Way You Practice */}
      <PracticeAreasSection />

      {/* 06. Closing CTA - Bring Your Legal Work Together */}
      <LandingPageFinalCTA />
    </main>
  );
};
