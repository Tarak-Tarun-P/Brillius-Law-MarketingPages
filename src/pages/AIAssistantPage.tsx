import React, { useEffect } from 'react';
import { AIAssistantHero } from '../components/assistant/AIAssistantHero';
import { AIAssistantOverview } from '../components/assistant/AIAssistantOverview';
import { AIAssistantSituation } from '../components/assistant/AIAssistantSituation';
import { AIAssistantExplore } from '../components/assistant/AIAssistantExplore';
import { AIAssistantFollowUp } from '../components/assistant/AIAssistantFollowUp';
import { AIAssistantAudiences } from '../components/assistant/AIAssistantAudiences';
import { AIAssistantUseCases } from '../components/assistant/AIAssistantUseCases';
import { AIAssistantLimitations } from '../components/assistant/AIAssistantLimitations';
import { AIAssistantFinalCTA } from '../components/assistant/AIAssistantFinalCTA';

export const AIAssistantPage: React.FC = () => {
  useEffect(() => {
    document.title = 'AI Assistant | BrilliusLaw Legal Technology';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="ai-assistant-page-main">
      {/* 01. Hero with Product Conversation Mockup */}
      <AIAssistantHero />

      {/* 02. What It Does (Start With a Question: Ask -> Explore -> Understand) */}
      <AIAssistantOverview />

      {/* 03. Start With the Situation (Factual scenario breakdown) */}
      <AIAssistantSituation />

      {/* 04. How It Works (01 Ask -> 02 Explore -> 03 Understand -> 04 Continue) */}
      <AIAssistantExplore />

      {/* 05. Ask Follow-Up Questions (Conversational clarity) */}
      <AIAssistantFollowUp />

      {/* 06. For Lawyers & Advocates, Law Firms & Teams, Law Students */}
      <AIAssistantAudiences />

      {/* 07. Realistic Legal Scenarios (Where It Can Help) */}
      <AIAssistantUseCases />

      {/* 08. Limitations: A Starting Point, Not the Final Word */}
      <AIAssistantLimitations />

      {/* 09. Final Call To Action: Have a Legal Question? Start Exploring. */}
      <AIAssistantFinalCTA />
    </main>
  );
};
