import React, { useEffect } from 'react';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactFormSection } from '../components/contact/ContactFormSection';
import { ContactAudienceCards } from '../components/contact/ContactAudienceCards';
import { ContactFAQ } from '../components/contact/ContactFAQ';
import { ContactCTA } from '../components/contact/ContactCTA';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = "Contact BrilliusLaw | Let's Talk About Your Legal Journey";
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="contact-page-main">
      {/* 01. Contact Hero */}
      <ContactHero />

      {/* 02. Two-Column Contact Form + Info Panel */}
      <ContactFormSection />

      {/* 03. Three Audience Cards (How Can We Help?) */}
      <ContactAudienceCards />

      {/* 04. Accordion FAQ Section */}
      <ContactFAQ />

      {/* 05. Final Call to Action */}
      <ContactCTA />
    </main>
  );
};
