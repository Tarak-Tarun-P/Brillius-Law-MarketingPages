import React, { useEffect } from 'react';
import { CompareHero } from '../components/compare/CompareHero';
import { CompareVersions } from '../components/compare/CompareVersions';
import { CompareAddedDeleted } from '../components/compare/CompareAddedDeleted';
import { CompareWordsNumbers } from '../components/compare/CompareWordsNumbers';
import { CompareFormatting } from '../components/compare/CompareFormatting';
import { CompareMovedContent } from '../components/compare/CompareMovedContent';
import { CompareTableChanges } from '../components/compare/CompareTableChanges';
import { CompareReviewPanel } from '../components/compare/CompareReviewPanel';
import { CompareVersionHistory } from '../components/compare/CompareVersionHistory';
import { CompareHowItWorks } from '../components/compare/CompareHowItWorks';
import { CompareProblem } from '../components/compare/CompareProblem';
import { CompareAudiences } from '../components/compare/CompareAudiences';
import { CompareBenefits } from '../components/compare/CompareBenefits';
import { CompareLimitations } from '../components/compare/CompareLimitations';
import { CompareFinalCTA } from '../components/compare/CompareFinalCTA';

export const CompareReviewPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Compare & Review | BrilliusLaw Legal Technology';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="compare-page-main">
      {/* 01. Hero (with Large Version Comparison Visual) */}
      <CompareHero />

      {/* 02. Compare Versions */}
      <CompareVersions />

      {/* 03. Added & Deleted Text */}
      <CompareAddedDeleted />

      {/* 04. Words & Numbers */}
      <CompareWordsNumbers />

      {/* 05. Formatting Changes */}
      <CompareFormatting />

      {/* 06. Moved Sentences or Content */}
      <CompareMovedContent />

      {/* 07. Table Changes */}
      <CompareTableChanges />

      {/* 08. Review Changes (Change List / Review Panel with Navigation) */}
      <CompareReviewPanel />

      {/* 09. Version History */}
      <CompareVersionHistory />

      {/* 10. How It Works (4 Steps) */}
      <CompareHowItWorks />

      {/* 11. The Challenge (3 Problem Points) */}
      <CompareProblem />

      {/* 12. For Lawyers, Law Firms, and Law Students */}
      <CompareAudiences />

      {/* 13. Simple Benefits */}
      <CompareBenefits />

      {/* 14. Practice Limitations */}
      <CompareLimitations />

      {/* 15. Final CTA */}
      <CompareFinalCTA />
    </main>
  );
};
