import React, { useEffect } from 'react';
import { FeaturesHero } from '../components/features/FeaturesHero';
import { PillarsOverview } from '../components/features/PillarsOverview';
import { PracticeSection } from '../components/features/sections/PracticeSection';
import { DocumentsSection } from '../components/features/sections/DocumentsSection';
import { LawLibrarySection } from '../components/features/sections/LawLibrarySection';
import { IntelligenceSection } from '../components/features/sections/IntelligenceSection';
import { MyJournalSection } from '../components/features/sections/MyJournalSection';
import { FinanceSection } from '../components/features/sections/FinanceSection';
import { OperationsSection } from '../components/features/sections/OperationsSection';
import { FeatureMatrixSummary } from '../components/features/FeatureMatrixSummary';
import { FinalCTA } from '../components/features/FinalCTA';

export const FeaturesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'BrilliusLaw Features | Simple, Powerful Legal Technology';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="features-page-main">
      {/* 01. Hero with Large Product Ecosystem */}
      <FeaturesHero />

      {/* 02. Product Overview (Core Feature Pillars) */}
      <PillarsOverview />

      {/* 03. Practice & Cases (Clients, Cases, Hearings, Evidence, Case Drafts) */}
      <PracticeSection />

      {/* 04. Documents & Drafting (Storage, Approvals, Drafting Lab, Version Compare) */}
      <DocumentsSection />

      {/* 05. Law Library (Bare Acts, Section Provisions, Footnotes, Connected Judgments) */}
      <LawLibrarySection />

      {/* 06. Legal Intelligence (Document Analyzer, AI Assistant, AI Drafting) */}
      <IntelligenceSection />

      {/* 07. My Journal (Record Thoughts, Personal Legal Notes, Saved Bookmarks) */}
      <MyJournalSection />

      {/* 08. Billing & Finance (Billing Overview, Retainers, Invoicing) */}
      <FinanceSection />

      {/* 09. Firm Operations (eCourts Case Sync, Firm & Team Roles) */}
      <OperationsSection />

      {/* 10. Complete Feature Matrix Summary */}
      <FeatureMatrixSummary />

      {/* 11. Final Call to Action */}
      <FinalCTA />
    </main>
  );
};
