import React, { useEffect } from 'react';
import { FirmHero } from '../components/firm/FirmHero';
import { FirmProblem } from '../components/firm/FirmProblem';
import { FirmCoreValue } from '../components/firm/FirmCoreValue';
import { FirmRolesManagement } from '../components/firm/FirmRolesManagement';
import { FirmAccessControl } from '../components/firm/FirmAccessControl';
import { FirmCustomPermissions } from '../components/firm/FirmCustomPermissions';
import { FirmTeamOnboarding } from '../components/firm/FirmTeamOnboarding';
import { FirmApprovalOversight } from '../components/firm/FirmApprovalOversight';
import { FirmActivityVisibility } from '../components/firm/FirmActivityVisibility';
import { FirmBenefits } from '../components/firm/FirmBenefits';
import { FirmAudiences } from '../components/firm/FirmAudiences';
import { FirmWorkflow } from '../components/firm/FirmWorkflow';
import { FirmFinalCTA } from '../components/firm/FirmFinalCTA';

export const FirmManagementPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Firm Management | BrilliusLaw Legal Technology';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="firm-management-page-main">
      {/* 01. Hero with Law Firm Operations & Directory Preview */}
      <FirmHero />

      {/* 02. The Problem: Growing Teams, Sensitive Information, Oversight */}
      <FirmProblem />

      {/* 03. Core Value: Designed for Modern Law Firms */}
      <FirmCoreValue />

      {/* 04. Team & Role Management */}
      <FirmRolesManagement />

      {/* 05. Access Control & Matter Protection */}
      <FirmAccessControl />

      {/* 06. Custom Modular Permissions Matrix */}
      <FirmCustomPermissions />

      {/* 07. Team Onboarding & Directory Management */}
      <FirmTeamOnboarding />

      {/* 08. Approval & Oversight Workflows */}
      <FirmApprovalOversight />

      {/* 09. Firm Activity & Operational Visibility */}
      <FirmActivityVisibility />

      {/* 10. Business Benefits */}
      <FirmBenefits />

      {/* 11. For Different Firm Members (Partners, Senior Counsel, Associates, Clerks) */}
      <FirmAudiences />

      {/* 12. Simple 4-Step Workflow */}
      <FirmWorkflow />

      {/* 13. Final Call to Action */}
      <FirmFinalCTA />
    </main>
  );
};
