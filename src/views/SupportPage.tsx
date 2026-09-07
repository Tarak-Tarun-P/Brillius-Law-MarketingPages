import React from 'react';
import { SupportHero } from '../components/support/SupportHero';
import { SupportGettingStarted } from '../components/support/SupportGettingStarted';
import { SupportFAQ } from '../components/support/SupportFAQ';
import { SupportCTA } from '../components/support/SupportCTA';

export const SupportPage: React.FC = () => {
  return (
    <main className="support-page-main">
      {/* 01. Hero */}
      <SupportHero />

      {/* 02. Getting Started */}
      <SupportGettingStarted />

      {/* 03. Common Questions */}
      <SupportFAQ />

      {/* 04. Need More Help? (Final CTA) */}
      <SupportCTA />
    </main>
  );
};
