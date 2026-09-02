import React from 'react';
import { Building2, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import './SolutionsAudienceCTA.css';

export const SolutionsAudienceCTA: React.FC = () => {
  const pathways = [
    {
      role: 'I\'m a Law Firm',
      desc: 'Connect partners, streamline client retainers, and manage team workloads.',
      icon: <Building2 size={24} color="#C6A15B" />,
      cta: 'Explore Firm Solution',
      href: '#/features#section-practice',
    },
    {
      role: 'I\'m a Lawyer / Advocate',
      desc: 'Organize active matters, receive court updates, and draft with smart AI assistance.',
      icon: <Briefcase size={24} color="#091526" />,
      cta: 'Explore Advocate Solution',
      href: '#/features#section-documents',
      featured: true,
    },
    {
      role: 'I\'m a Student',
      desc: 'Explore Bare Acts, study landmark judgments, and prepare winning moot briefs.',
      icon: <GraduationCap size={24} color="#C6A15B" />,
      cta: 'Explore Student Solution',
      href: '#/features#section-library',
    },
  ];

  return (
    <section className="solutions-audience-cta-section" aria-labelledby="pathway-heading">
      <div className="content-container">
        <div className="audience-cta-header">
          <span className="audience-cta-eyebrow">CHOOSE YOUR PATHWAY</span>
          <h2 id="pathway-heading" className="audience-cta-title">
            Find the BrilliusLaw Solution for You.
          </h2>
          <p className="audience-cta-desc">
            Choose the experience that fits the way you learn, practice, or manage legal work.
          </p>
        </div>

        <div className="audience-pathways-grid">
          {pathways.map((p, i) => (
            <div key={i} className={`pathway-card ${p.featured ? 'featured-pathway' : ''}`}>
              <div className="pathway-icon-box">{p.icon}</div>
              <h3 className="pathway-role-title">{p.role}</h3>
              <p className="pathway-desc-text">{p.desc}</p>

              <a href={p.href} className="btn-pathway-cta">
                <span>{p.cta}</span>
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
