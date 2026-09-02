import React, { useEffect } from 'react';
import { ECourtsHero } from '../components/ecourts/ECourtsHero';
import { ECourtsProblem } from '../components/ecourts/ECourtsProblem';
import { ECourtsCnrLookup } from '../components/ecourts/ECourtsCnrLookup';
import { ECourtsCaseInformation } from '../components/ecourts/ECourtsCaseInformation';
import { ECourtsHearingTracking } from '../components/ecourts/ECourtsHearingTracking';
import { ECourtsCaseHistory } from '../components/ecourts/ECourtsCaseHistory';
import { ECourtsOrdersJudgments } from '../components/ecourts/ECourtsOrdersJudgments';
import { ECourtsCourtVsFirm } from '../components/ecourts/ECourtsCourtVsFirm';
import { ECourtsWorkflowIntegration } from '../components/ecourts/ECourtsWorkflowIntegration';
import { ECourtsBenefits } from '../components/ecourts/ECourtsBenefits';
import { ECourtsAudiences } from '../components/ecourts/ECourtsAudiences';
import { ECourtsSimpleWorkflow } from '../components/ecourts/ECourtsSimpleWorkflow';
import { ECourtsFinalCTA } from '../components/ecourts/ECourtsFinalCTA';

export const ECourtsSyncPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Live eCourts Sync & Case Tracking | BrilliusLaw Legal Technology';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="ecourts-sync-page-main">
      {/* 01. Hero with Realistic CNR-Linked Case Tracking Preview */}
      <ECourtsHero />

      {/* 02. The Problem: Manual Searches, Changing Dates, Missing Orders */}
      <ECourtsProblem />

      {/* 03. Connect a Case Using CNR (Interactive Lookup Simulation) */}
      <ECourtsCnrLookup />

      {/* 04. Case Information from Official Court Record */}
      <ECourtsCaseInformation />

      {/* 05. Hearing Tracking & Daily Cause Board Calendar Sync */}
      <ECourtsHearingTracking />

      {/* 06. Complete Case History (Chronological Proceedings Timeline) */}
      <ECourtsCaseHistory />

      {/* 07. Court Orders & Judgments (PDF Document View & Save to Matter) */}
      <ECourtsOrdersJudgments />

      {/* 08. Official Court Information vs Your Firm's Private Work */}
      <ECourtsCourtVsFirm />

      {/* 09. One Place for the Matter (End-to-End Workflow Integration) */}
      <ECourtsWorkflowIntegration />

      {/* 10. Business Benefits */}
      <ECourtsBenefits />

      {/* 11. Who It's For (Advocates, Law Firms, Clerks, Managing Partners) */}
      <ECourtsAudiences />

      {/* 12. Simple 4-Step Workflow (From CNR to Tracking) */}
      <ECourtsSimpleWorkflow />

      {/* 13. Final Call to Action */}
      <ECourtsFinalCTA />
    </main>
  );
};
