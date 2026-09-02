import React, { useEffect } from 'react';
import { DraftingHero } from '../components/drafting/DraftingHero';
import { DraftingCreate } from '../components/drafting/DraftingCreate';
import { DraftingEdit } from '../components/drafting/DraftingEdit';
import { DraftingFormatting } from '../components/drafting/DraftingFormatting';
import { DraftingHighlights } from '../components/drafting/DraftingHighlights';
import { DraftingAnnotations } from '../components/drafting/DraftingAnnotations';
import { DraftingSavedDocs } from '../components/drafting/DraftingSavedDocs';
import { DraftingWorkspaceFlow } from '../components/drafting/DraftingWorkspaceFlow';
import { DraftingHowItWorks } from '../components/drafting/DraftingHowItWorks';
import { DraftingProblem } from '../components/drafting/DraftingProblem';
import { DraftingAudiences } from '../components/drafting/DraftingAudiences';
import { DraftingBenefits } from '../components/drafting/DraftingBenefits';
import { DraftingLimitations } from '../components/drafting/DraftingLimitations';
import { DraftingFinalCTA } from '../components/drafting/DraftingFinalCTA';

export const DraftingLabPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Drafting Lab | BrilliusLaw Legal Technology';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="drafting-page-main">
      {/* 01. Hero (with Large Document Editor Visual) */}
      <DraftingHero />

      {/* 02. Create a Document */}
      <DraftingCreate />

      {/* 03. Edit a Document */}
      <DraftingEdit />

      {/* 04. Familiar Formatting */}
      <DraftingFormatting />

      {/* 05. Colors & Highlights */}
      <DraftingHighlights />

      {/* 06. Annotations & Notes */}
      <DraftingAnnotations />

      {/* 07. Saved Documents Directory */}
      <DraftingSavedDocs />

      {/* 08. Complete Workspace Lifecycle */}
      <DraftingWorkspaceFlow />

      {/* 09. How It Works (5 Steps) */}
      <DraftingHowItWorks />

      {/* 10. The Challenge (4 Problem Points) */}
      <DraftingProblem />

      {/* 11. Tailored Value (Advocates, Firms, Students) */}
      <DraftingAudiences />

      {/* 12. Simple Benefits (6 Pillars) */}
      <DraftingBenefits />

      {/* 13. Practice Standards & Limitations */}
      <DraftingLimitations />

      {/* 14. Final CTA */}
      <DraftingFinalCTA />
    </main>
  );
};
