import React, { useEffect } from 'react';
import { AnalyzerHero } from '../components/analyzer/AnalyzerHero';
import { AnalyzerProblem } from '../components/analyzer/AnalyzerProblem';
import { AnalyzerHowItWorks } from '../components/analyzer/AnalyzerHowItWorks';
import { AnalyzerAskQuestions } from '../components/analyzer/AnalyzerAskQuestions';
import { AnalyzerKeySections } from '../components/analyzer/AnalyzerKeySections';
import { AnalyzerSourceVerification } from '../components/analyzer/AnalyzerSourceVerification';
import { AnalyzerAudience } from '../components/analyzer/AnalyzerAudience';
import { AnalyzerUseCases } from '../components/analyzer/AnalyzerUseCases';
import { AnalyzerCapabilities } from '../components/analyzer/AnalyzerCapabilities';
import { AnalyzerLimitations } from '../components/analyzer/AnalyzerLimitations';
import { AnalyzerFinalCTA } from '../components/analyzer/AnalyzerFinalCTA';

export const DocumentAnalyzerPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Document Analyzer | BrilliusLaw Legal Technology';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="document-analyzer-page-main">
      {/* 01. Hero with Live Mockup Preview */}
      <AnalyzerHero />

      {/* 02. The Problem (Pain points of manual scanning) */}
      <AnalyzerProblem />

      {/* 03. How It Works (Upload -> Explore -> Ask -> Review) */}
      <AnalyzerHowItWorks />

      {/* 04. Ask Questions About Your Document (Interactive sample queries) */}
      <AnalyzerAskQuestions />

      {/* 05. Find What Matters (Key Clause Structure) */}
      <AnalyzerKeySections />

      {/* 06. See Where The Answer Comes From (Citation flow) */}
      <AnalyzerSourceVerification />

      {/* 07. Who Is It For? (Firms, Lawyers, Students) */}
      <AnalyzerAudience />

      {/* 08. Real-World Use Cases (Where It Can Help) */}
      <AnalyzerUseCases />

      {/* 09. What It Helps You Do (Find, Ask, Understand, Review) */}
      <AnalyzerCapabilities />

      {/* 10. Important Limitations & Responsible Legal Use */}
      <AnalyzerLimitations />

      {/* 11. Final Call To Action */}
      <AnalyzerFinalCTA />
    </main>
  );
};
