import React, { useEffect } from 'react';
import { ResearchHero } from '../components/research/ResearchHero';
import { ResearchCaseLawSearch } from '../components/research/ResearchCaseLawSearch';
import { ResearchCourtCoverage } from '../components/research/ResearchCourtCoverage';
import { ResearchJudgmentInsights } from '../components/research/ResearchJudgmentInsights';
import { ResearchTreatmentStatus } from '../components/research/ResearchTreatmentStatus';
import { ResearchSimilarPrecedents } from '../components/research/ResearchSimilarPrecedents';
import { ResearchRelevantPassages } from '../components/research/ResearchRelevantPassages';
import { ResearchCaseSpecificAI } from '../components/research/ResearchCaseSpecificAI';
import { ResearchSourceBacked } from '../components/research/ResearchSourceBacked';
import { ResearchNotesAndMatter } from '../components/research/ResearchNotesAndMatter';
import { ResearchHowItWorks } from '../components/research/ResearchHowItWorks';
import { ResearchProblem } from '../components/research/ResearchProblem';
import { ResearchAudiences } from '../components/research/ResearchAudiences';
import { ResearchBenefits } from '../components/research/ResearchBenefits';
import { ResearchLimitations } from '../components/research/ResearchLimitations';
import { ResearchFinalCTA } from '../components/research/ResearchFinalCTA';

export const LegalResearchPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Legal Research | BrilliusLaw Legal Technology';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="legal-research-page-main">
      {/* 01. Hero with Dual-Mode Legal Research & Case Research Interface */}
      <ResearchHero />

      {/* 02. Case Law & Precedent Search (5 Search Methods: Keyword, Party, Citation, Judge, Section) */}
      <ResearchCaseLawSearch />

      {/* 03. Court Coverage across Supreme Court & High Courts */}
      <ResearchCourtCoverage />

      {/* 04. Judgment Insights (Summary, Ratio, Issues, Arguments, Treatment, Precedents) */}
      <ResearchJudgmentInsights />

      {/* 05. Precedential Treatment Status (Followed, Distinguished, Overruled, Applied, Explained) */}
      <ResearchTreatmentStatus />

      {/* 06. Similar Precedents Flow */}
      <ResearchSimilarPrecedents />

      {/* 07. Relevant Passages with Full Context Access */}
      <ResearchRelevantPassages />

      {/* 08. Case-Specific AI Research (Ask Questions About Your Case) */}
      <ResearchCaseSpecificAI />

      {/* 09. Source-Backed Answers (Question -> Answer -> Primary Sources) */}
      <ResearchSourceBacked />

      {/* 10. Research Notes, Save to Matter & Citations Export */}
      <ResearchNotesAndMatter />

      {/* 11. How It Works (Two Ways to Research: Research the Law & Research Your Case) */}
      <ResearchHowItWorks />

      {/* 12. The Challenge (Find the Case, Understand Decision, Connect to Work) */}
      <ResearchProblem />

      {/* 13. Practice Value: Lawyers & Advocates, Law Firms & Teams, Law Students */}
      <ResearchAudiences />

      {/* 14. Simple Benefits (7 Pillars: Search, Understand, Check, Explore, Ask, Source, Save) */}
      <ResearchBenefits />

      {/* 15. Practice Notice & Limitations (Required) */}
      <ResearchLimitations />

      {/* 16. Final CTA Banner (#091526 background) */}
      <ResearchFinalCTA />
    </main>
  );
};

