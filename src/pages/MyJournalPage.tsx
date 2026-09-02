import React, { useEffect } from 'react';
import { JournalHero } from '../components/journal/JournalHero';
import { JournalKeyPoints } from '../components/journal/JournalKeyPoints';
import { JournalBookmarks } from '../components/journal/JournalBookmarks';
import { JournalContinue } from '../components/journal/JournalContinue';
import { JournalVoice } from '../components/journal/JournalVoice';
import { JournalVoiceScenarios } from '../components/journal/JournalVoiceScenarios';
import { JournalPersonalNotes } from '../components/journal/JournalPersonalNotes';
import { JournalConnectedNotes } from '../components/journal/JournalConnectedNotes';
import { JournalHowItWorks } from '../components/journal/JournalHowItWorks';
import { JournalProblem } from '../components/journal/JournalProblem';
import { JournalAudiences } from '../components/journal/JournalAudiences';
import { JournalBenefits } from '../components/journal/JournalBenefits';
import { JournalLimitations } from '../components/journal/JournalLimitations';
import { JournalFinalCTA } from '../components/journal/JournalFinalCTA';

export const MyJournalPage: React.FC = () => {
  useEffect(() => {
    document.title = 'My Journal | BrilliusLaw Legal Technology';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="journal-page-main">
      {/* 01. Hero with Large My Journal Product Visual */}
      <JournalHero />

      {/* 02. Key Points: Keep the Things That Matter */}
      <JournalKeyPoints />

      {/* 03. Bookmarks: Save Something You Want to Revisit */}
      <JournalBookmarks />

      {/* 04. Continue Where You Left Off */}
      <JournalContinue />

      {/* 05. Voice Capture: Don't Stop to Type. Just Speak. */}
      <JournalVoice />

      {/* 06. Practical Scenarios for Voice Notes */}
      <JournalVoiceScenarios />

      {/* 07. Personal Notes & Research Questions */}
      <JournalPersonalNotes />

      {/* 08. Context-Connected Notes */}
      <JournalConnectedNotes />

      {/* 09. How It Works (4 Steps) */}
      <JournalHowItWorks />

      {/* 10. The Challenge (4 Points) */}
      <JournalProblem />

      {/* 11. Practice Suitability: Advocates, Firms, Students */}
      <JournalAudiences />

      {/* 12. Simple Benefits (5 Pillars) */}
      <JournalBenefits />

      {/* 13. Limitations & Guidelines */}
      <JournalLimitations />

      {/* 14. Final CTA Banner */}
      <JournalFinalCTA />
    </main>
  );
};
