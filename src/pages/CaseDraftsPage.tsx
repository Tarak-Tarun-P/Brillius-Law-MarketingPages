import React, { useEffect } from 'react';
import { CaseDraftsHero } from '../components/case-drafts/CaseDraftsHero';
import { CaseDraftsProblem } from '../components/case-drafts/CaseDraftsProblem';
import { CaseDraftsCaseAware } from '../components/case-drafts/CaseDraftsCaseAware';
import { CaseDraftsReadyTemplates } from '../components/case-drafts/CaseDraftsReadyTemplates';
import { CaseDraftsCustomTemplates } from '../components/case-drafts/CaseDraftsCustomTemplates';
import { CaseDraftsAIAssisted } from '../components/case-drafts/CaseDraftsAIAssisted';
import { CaseDraftsEditor } from '../components/case-drafts/CaseDraftsEditor';
import { CaseDraftsVersionHistory } from '../components/case-drafts/CaseDraftsVersionHistory';
import { CaseDraftsReviewApproval } from '../components/case-drafts/CaseDraftsReviewApproval';
import { CaseDraftsExport } from '../components/case-drafts/CaseDraftsExport';
import { CaseDraftsBenefits } from '../components/case-drafts/CaseDraftsBenefits';
import { CaseDraftsAudiences } from '../components/case-drafts/CaseDraftsAudiences';
import { CaseDraftsWorkflow } from '../components/case-drafts/CaseDraftsWorkflow';
import { CaseDraftsFinalCTA } from '../components/case-drafts/CaseDraftsFinalCTA';

export const CaseDraftsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Case Drafts | BrilliusLaw Legal Technology';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="casedrafts-page-main">
      {/* 01. Hero with Realistic Legal Drafting Workspace Preview */}
      <CaseDraftsHero />

      {/* 02. The Problem: Blank Page, Repeated Details, Format Search, Revisions */}
      <CaseDraftsProblem />

      {/* 03. Case-Aware Drafting: Contextual Starting Point */}
      <CaseDraftsCaseAware />

      {/* 04. Ready-Made Templates: Standard Pleading Frameworks */}
      <CaseDraftsReadyTemplates />

      {/* 05. Your Own Templates: Chambers Custom Library */}
      <CaseDraftsCustomTemplates />

      {/* 06. AI-Assisted Drafting: Case Details + Template + Instructions */}
      <CaseDraftsAIAssisted />

      {/* 07. Edit & Refine: Interactive Legal Editor & Counsel Notes */}
      <CaseDraftsEditor />

      {/* 08. Version History: Auditable Document Evolution */}
      <CaseDraftsVersionHistory />

      {/* 09. Review & Approval: Structured Chamber Oversight */}
      <CaseDraftsReviewApproval />

      {/* 10. Export & Finalize: DOCX, PDF, Clipboard, Print-Ready */}
      <CaseDraftsExport />

      {/* 11. Business Benefits */}
      <CaseDraftsBenefits />

      {/* 12. Who It's For: Advocates, Associates, Senior Counsel, Law Firms */}
      <CaseDraftsAudiences />

      {/* 13. Simple 5-Step Workflow: From Case to Final Draft */}
      <CaseDraftsWorkflow />

      {/* 14. Final Call to Action */}
      <CaseDraftsFinalCTA />
    </main>
  );
};
