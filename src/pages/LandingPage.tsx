import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { PracticeAreasSection } from '../components/PracticeAreasSection';
import { StudentOfferSection } from '../components/StudentOfferSection';
import { FeatureSection } from '../components/FeatureSection';

export const LandingPage: React.FC = () => {
  useEffect(() => {
    document.title = 'BrilliusLaw — Modern Legal Intelligence. Built for the Law.';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main>
      {/* First Viewport: Hero with Lady Justice & Legal Intelligence Thesis */}
      <Hero />

      {/* NEW SECTION 1: Solutions by Practice Area */}
      <PracticeAreasSection />

      {/* NEW SECTION 2: First 500 Law Students Promotional Section */}
      <StudentOfferSection />

      {/* Core Capabilities: 6 Enterprise Feature Cards */}
      <FeatureSection />
    </main>
  );
};
