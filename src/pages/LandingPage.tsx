import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { LandingPageFeaturesOverview } from '../components/LandingPageFeaturesOverview';
import { StudentOfferSection } from '../components/StudentOfferSection';

export const LandingPage: React.FC = () => {
  useEffect(() => {
    document.title = 'BrilliusLaw — Modern Legal Intelligence. Built for the Law.';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main>
      {/* First Viewport: Hero with Lady Justice & Legal Intelligence Thesis */}
      <Hero />

      {/* SECTION 1: Features Overview - Quick look at all features organized by category */}
      <LandingPageFeaturesOverview />

      {/* SECTION 2: First 500 Law Students Promotional Section */}
      <StudentOfferSection />
    </main>
  );
};
