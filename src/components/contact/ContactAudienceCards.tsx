import React from 'react';
import { Building2, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import './ContactAudienceCards.css';

export const ContactAudienceCards: React.FC = () => {
  const audienceCards = [
    {
      role: 'Law Firms',
      icon: <Building2 size={24} color="#C6A15B" />,
      desc: 'Interested in bringing BrilliusLaw to your team?',
      cta: 'Talk to Us',
      href: '#contact-form-section',
    },
    {
      role: 'Lawyers & Advocates',
      icon: <Briefcase size={24} color="#091526" />,
      featured: true,
      desc: 'Looking for a simpler way to manage your legal work?',
      cta: 'Learn More',
      href: '/features',
    },
    {
      role: 'Law Students',
      icon: <GraduationCap size={24} color="#C6A15B" />,
      desc: 'Want to explore BrilliusLaw for your legal journey?',
      cta: 'Get in Touch',
      href: '#contact-form-section',
    },
  ];

  return (
    <section className="contact-audience-section" aria-labelledby="audience-help-heading">
      <div className="content-container">
        <div className="audience-section-header">
          <span className="audience-section-eyebrow">TAILORED SUPPORT</span>
          <h2 id="audience-help-heading" className="audience-section-title">
            How Can We Help?
          </h2>
          <p className="audience-section-desc">
            Select the category that best describes your needs to explore the most relevant resources and get in touch with our team.
          </p>
        </div>

        <div className="audience-cards-grid" role="list">
          {audienceCards.map((card, i) => (
            <div
              key={i}
              className={`contact-aud-card ${card.featured ? 'featured-aud-card' : ''}`}
            >
              <div className="aud-card-top">
                <div className="aud-icon-box">{card.icon}</div>
                <h3 className="aud-card-role">{card.role}</h3>
              </div>

              <p className="aud-card-desc">{card.desc}</p>

              <a href={card.href} className="btn-aud-cta">
                <span>{card.cta}</span>
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
