import React from 'react';
import { Building2, Briefcase, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';
import './ThreeAudiences.css';

export const ThreeAudiences: React.FC = () => {
  const audiences = [
    {
      id: 'firms',
      title: 'Law Firms & Teams',
      badge: 'FOR FIRMS & TEAMS',
      icon: <Building2 size={24} color="#C6A15B" />,
      description:
        'Keep your entire firm organized with shared cases, client billing, team permissions, and secure document storage.',
      benefits: [
        'Clear team roles and access for partners and associates',
        'Track active client matters and team workloads easily',
        'Secure, encrypted storage for all firm files and notes',
        'Simple billing, invoices, and payment tracking',
      ],
      ctaText: 'Explore Firm Solutions',
      ctaHref: '#firm-journey',
    },
    {
      id: 'lawyers',
      title: 'Lawyers & Advocates',
      badge: 'FOR LAWYERS & ADVOCATES',
      icon: <Briefcase size={24} color="#091526" />,
      featured: true,
      description:
        'Save time on your daily legal work with court date updates, quick drafting tools, case timelines, and smart research.',
      benefits: [
        'Keep all your cases and court dates organized in one place',
        'Draft legal documents faster with ready-to-use clauses',
        'Easily compare document versions to see what changed',
        'Get helpful answers to research questions in seconds',
      ],
      ctaText: 'Explore Lawyer Tools',
      ctaHref: '#lawyer-journey',
    },
    {
      id: 'students',
      title: 'Law Students',
      badge: 'FOR LAW STUDENTS',
      icon: <GraduationCap size={24} color="#C6A15B" />,
      description:
        'Learn and research faster with plain-English case summaries, easy access to laws, and helpful study tools.',
      benefits: [
        'Understand complex court decisions with simple summaries',
        'Search Indian laws and sections in plain language',
        'Organize case materials, exhibits, and evidence storage for moot courts',
        'Prepare for assignments, trial simulations, and research papers',
        'Learn with reliable information and clear citations',
      ],
      ctaText: 'Explore Student Access',
      ctaHref: '#student-journey',
    },
  ];

  return (
    <section className="audiences-section" aria-labelledby="audiences-heading">
      <div className="content-container">
        <div className="audiences-header">
          <span className="audiences-eyebrow">WHO IT IS FOR</span>
          <h2 id="audiences-heading" className="audiences-title">
            Made for Everyone in Law
          </h2>
          <p className="audiences-sub">
            Whether you run a firm, practice on your own, or are studying in law school, BrilliusLaw is built to help you work faster and stay organized.
          </p>
        </div>

        <div className="audiences-grid" role="list">
          {audiences.map((item) => (
            <div key={item.id} className={`audience-card ${item.featured ? 'featured-audience-card' : ''}`}>
              <div className="audience-card-top">
                <div className="audience-icon-box">{item.icon}</div>
                <span className="audience-badge">{item.badge}</span>
              </div>

              <h3 className="audience-card-title">{item.title}</h3>
              <p className="audience-card-desc">{item.description}</p>

              <div className="audience-divider" aria-hidden="true" />

              <ul className="audience-benefits-list">
                {item.benefits.map((b, i) => (
                  <li key={i} className="audience-benefit-item">
                    <CheckCircle2 size={16} className="benefit-icon" color="#C6A15B" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <a href={item.ctaHref} className={`btn-audience-action ${item.featured ? 'btn-featured' : ''}`}>
                <span>{item.ctaText}</span>
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
