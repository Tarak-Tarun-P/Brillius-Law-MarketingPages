import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
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

      {/* Core Capabilities: 6 Enterprise Feature Cards */}
      <FeatureSection />
    </main>
  );
};
