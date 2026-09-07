import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { LandingPageFeaturesOverview } from '../components/LandingPageFeaturesOverview';
import { ProductValueSection } from '../components/ProductValueSection';
import { ConnectedWorkflowSection } from '../components/ConnectedWorkflowSection';
import { PracticeAreasSection } from '../components/PracticeAreasSection';
import { StudentOfferSection } from '../components/StudentOfferSection';
import { LandingPageFinalCTA } from '../components/LandingPageFinalCTA';

export const LandingPage: React.FC = () => {
  useEffect(() => {
    document.title = 'BrilliusLaw — Modern Legal Intelligence. Built for the Law.';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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

      {/* 06. Student Offer - First 500 Law Students Get Started Free */}
      <StudentOfferSection />

      {/* 07. Closing CTA - Bring Your Legal Work Together */}
      <LandingPageFinalCTA />
    </main>
  );
};
