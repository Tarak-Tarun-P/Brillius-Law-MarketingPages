import React, { useEffect } from 'react';
import { WhatsAppHero } from '../components/whatsapp-alerts/WhatsAppHero';
import { WhatsAppProblem } from '../components/whatsapp-alerts/WhatsAppProblem';
import { WhatsAppHowItHelps } from '../components/whatsapp-alerts/WhatsAppHowItHelps';
import { WhatsAppHearingAlerts } from '../components/whatsapp-alerts/WhatsAppHearingAlerts';
import { WhatsAppTaskAlerts } from '../components/whatsapp-alerts/WhatsAppTaskAlerts';
import { WhatsAppDraftAlerts } from '../components/whatsapp-alerts/WhatsAppDraftAlerts';
import { WhatsAppDocumentAlerts } from '../components/whatsapp-alerts/WhatsAppDocumentAlerts';
import { WhatsAppAudiences } from '../components/whatsapp-alerts/WhatsAppAudiences';
import { WhatsAppComparison } from '../components/whatsapp-alerts/WhatsAppComparison';
import { WhatsAppBenefits } from '../components/whatsapp-alerts/WhatsAppBenefits';
import { WhatsAppWorkflow } from '../components/whatsapp-alerts/WhatsAppWorkflow';
import { WhatsAppFinalCTA } from '../components/whatsapp-alerts/WhatsAppFinalCTA';

export const WhatsAppAlertsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'WhatsApp Alerts | BrilliusLaw Legal Technology';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="whatsapp-alerts-page-main">
      {/* 01. Hero with Realistic WhatsApp Alert Stream Preview */}
      <WhatsAppHero />

      {/* 02. The Problem: Too Many Things to Track & Repeated Checking */}
      <WhatsAppProblem />

      {/* 03. How It Helps: 4-Step Communication Flow */}
      <WhatsAppHowItHelps />

      {/* 04. Hearing Alerts: Today, Tomorrow, Follow-ups */}
      <WhatsAppHearingAlerts />

      {/* 05. Task Alerts: Due, Overdue, Critical Reminders */}
      <WhatsAppTaskAlerts />

      {/* 06. Draft Approval Alerts: Submitted, In Review, Revisions */}
      <WhatsAppDraftAlerts />

      {/* 07. Document Approval Alerts: Contracts & Deeds Oversight */}
      <WhatsAppDocumentAlerts />

      {/* 08. Useful for Different Team Members */}
      <WhatsAppAudiences />

      {/* 09. Less Checking, More Focus (With vs Without Comparison) */}
      <WhatsAppComparison />

      {/* 10. Business Benefits */}
      <WhatsAppBenefits />

      {/* 11. Simple 4-Step Workflow: Activity to WhatsApp */}
      <WhatsAppWorkflow />

      {/* 12. Final Call to Action */}
      <WhatsAppFinalCTA />
    </main>
  );
};
