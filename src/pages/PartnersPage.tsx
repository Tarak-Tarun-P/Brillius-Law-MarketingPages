import React, { useEffect } from 'react';
import { PartnersHero } from '../components/partners/PartnersHero';
import { PartnersWhyPartner } from '../components/partners/PartnersWhyPartner';
import { PartnersWhoCanPartner } from '../components/partners/PartnersWhoCanPartner';
import { PartnersCTA } from '../components/partners/PartnersCTA';

export const PartnersPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Partners | BrilliusLaw';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="partners-page-main">
      {/* 01. Hero */}
      <PartnersHero />

      {/* 02. Why Partner With BrilliusLaw */}
      <PartnersWhyPartner />

      {/* 03. Who Can Partner */}
      <PartnersWhoCanPartner />

      {/* 04. Partner With Us (Final CTA) */}
      <PartnersCTA />
    </main>
  );
};
