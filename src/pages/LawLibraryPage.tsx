import React, { useEffect } from 'react';
import { LibraryHero } from '../components/library/LibraryHero';
import { LibraryBareActs } from '../components/library/LibraryBareActs';
import { LibrarySectionResearch } from '../components/library/LibrarySectionResearch';
import { LibraryFootnotes } from '../components/library/LibraryFootnotes';
import { LibraryJudgments } from '../components/library/LibraryJudgments';
import { LibraryConnections } from '../components/library/LibraryConnections';
import { LibrarySearch } from '../components/library/LibrarySearch';
import { LibraryHowItWorks } from '../components/library/LibraryHowItWorks';
import { LibraryProblem } from '../components/library/LibraryProblem';
import { LibraryAudiences } from '../components/library/LibraryAudiences';
import { LibraryBenefits } from '../components/library/LibraryBenefits';
import { LibraryLimitations } from '../components/library/LibraryLimitations';
import { LibraryFinalCTA } from '../components/library/LibraryFinalCTA';

export const LawLibraryPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Law Library | BrilliusLaw Legal Technology';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="library-page-main">
      {/* 01. Hero with Large Law Library Product Visual */}
      <LibraryHero />

      {/* 02. Bare Acts: Read the Law as It Is Written */}
      <LibraryBareActs />

      {/* 03. Section-Level Research */}
      <LibrarySectionResearch />

      {/* 04. Footnotes & References */}
      <LibraryFootnotes />

      {/* 05. Related Judgments */}
      <LibraryJudgments />

      {/* 06. Legal Connections & Visual View */}
      <LibraryConnections />

      {/* 07. Search Across Statutes & Cases */}
      <LibrarySearch />

      {/* 08. How It Works (4 Steps) */}
      <LibraryHowItWorks />

      {/* 09. The Challenge */}
      <LibraryProblem />

      {/* 10. Audiences: Advocates, Law Firms, Students */}
      <LibraryAudiences />

      {/* 11. Simple Benefits (6 Pillars) */}
      <LibraryBenefits />

      {/* 12. Limitations & Practice Guidelines */}
      <LibraryLimitations />

      {/* 13. Final CTA Banner */}
      <LibraryFinalCTA />
    </main>
  );
};
