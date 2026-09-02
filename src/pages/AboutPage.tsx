import React, { useEffect } from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { WhatIsBrilliusLaw } from '../components/about/WhatIsBrilliusLaw';
import { ThreeAudiences } from '../components/about/ThreeAudiences';
import { WhyWeBuilt } from '../components/about/WhyWeBuilt';
import { VisionMission } from '../components/about/VisionMission';
import { EcosystemNarrative } from '../components/about/EcosystemNarrative';
import { IndiaAtTheCore } from '../components/about/IndiaAtTheCore';
import { OurValues } from '../components/about/OurValues';
import { ResponsibleAI } from '../components/about/ResponsibleAI';
import { OurAmbition } from '../components/about/OurAmbition';
import { ChooseYourJourney } from '../components/about/ChooseYourJourney';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About BrilliusLaw | Building a Smarter Future for Legal Professionals';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="about-page-main">
      {/* 01. Hero */}
      <AboutHero />

      {/* 02. What is BrilliusLaw? */}
      <WhatIsBrilliusLaw />

      {/* 03. Three Audiences (Firms | Lawyers | Students) */}
      <ThreeAudiences />

      {/* 04. Why We Built BrilliusLaw */}
      <WhyWeBuilt />

      {/* 05. Our Vision & Mission */}
      <VisionMission />

      {/* 06. The BrilliusLaw Ecosystem */}
      <EcosystemNarrative />

      {/* 07. India at the Core */}
      <IndiaAtTheCore />

      {/* 08. Our Values */}
      <OurValues />

      {/* 09. Responsible AI */}
      <ResponsibleAI />

      {/* 10. Our Ambition */}
      <OurAmbition />

      {/* 11. Choose Your Journey ([FIRM] [LAWYER] [STUDENT]) */}
      <ChooseYourJourney />
    </main>
  );
};
