import React, { useEffect } from 'react';
import { HearingsHero } from '../components/hearings/HearingsHero';
import { HearingsUpcoming } from '../components/hearings/HearingsUpcoming';
import { HearingsProblem } from '../components/hearings/HearingsProblem';
import { HearingsHowItWorks } from '../components/hearings/HearingsHowItWorks';
import { HearingsCalendar } from '../components/hearings/HearingsCalendar';
import { HearingsPreviousAndOrders } from '../components/hearings/HearingsPreviousAndOrders';
import { HearingsCaseConnection } from '../components/hearings/HearingsCaseConnection';
import { HearingsAudiences } from '../components/hearings/HearingsAudiences';
import { HearingsBenefits } from '../components/hearings/HearingsBenefits';
import { HearingsLimitations } from '../components/hearings/HearingsLimitations';
import { HearingsFinalCTA } from '../components/hearings/HearingsFinalCTA';

export const HearingsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Hearings | BrilliusLaw Legal Technology';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="hearings-page-main">
      {/* 01. Hero with Hearing Listing Mockup */}
      <HearingsHero />

      {/* 02. Upcoming Hearings List */}
      <HearingsUpcoming />

      {/* 03. The Challenge (Upcoming dates, calendar, past hearings) */}
      <HearingsProblem />

      {/* 04. How It Works (Add -> Upcoming -> Calendar -> Look Back) */}
      <HearingsHowItWorks />

      {/* 05. Calendar (Keep Hearing Dates on Your Calendar) */}
      <HearingsCalendar />

      {/* 06. Previous Hearings & Orders (Look Back at Earlier Hearings) */}
      <HearingsPreviousAndOrders />

      {/* 07. Case Connection (Hearings Stay Connected to the Case) */}
      <HearingsCaseConnection />

      {/* 08. For Lawyers & Advocates, For Law Firms & Legal Teams */}
      <HearingsAudiences />

      {/* 09. Simple Benefits (Upcoming, Calendar, Past, Orders) */}
      <HearingsBenefits />

      {/* 10. Limitations (Stay Informed, Stay Up to Date) */}
      <HearingsLimitations />

      {/* 11. Final Call To Action */}
      <HearingsFinalCTA />
    </main>
  );
};
