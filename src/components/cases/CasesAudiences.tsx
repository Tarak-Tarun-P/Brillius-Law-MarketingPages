import React from 'react';
import { Building2, Briefcase, CheckCircle2 } from 'lucide-react';
import './CasesAudiences.css';

export const CasesAudiences: React.FC = () => {
  const audiences = [
    {
      badge: 'FOR LAW FIRMS & TEAMS',
      icon: <Building2 size={26} color="#C6A15B" />,
      headline: 'Keep Every Matter Easier to Follow.',
      desc: 'Manage your firm\'s cases in an organized way and keep the information connected to each matter across partners, briefing counsel, and associates.',
      points: [
        'Centralize all active suits, petitions, and tribunal matters',
        'Assign priorities and track progression across practice groups',
        'Keep hearing dates and daily cause list listings synchronized',
        'Ensure quick access to client briefs and past orders',
      ],
      featured: true,
    },
    {
      badge: 'FOR LAWYERS & ADVOCATES',
      icon: <Briefcase size={26} color="#091526" />,
      headline: 'Stay Clear on Every Matter.',
      desc: 'Keep your cases organized, find important details quickly, and keep track of the information connected to each matter without managing scattered notes.',
      points: [
        'Add and update your active litigation and advisory cases',
        'Know exactly which client and opposing parties are involved',
        'Keep upcoming appearance dates and courtroom benches close',
        'Review chronological matter activity before every hearing',
      ],
    },
  ];

  return (
    <section className="cases-audiences-section" aria-labelledby="cases-aud-heading">
      <div className="content-container">
        <div className="cases-aud-header">
          <span className="cases-aud-eyebrow">TAILORED VALUE</span>
          <h2 id="cases-aud-heading" className="cases-aud-title">
            Built for Law Firms and Advocates.
          </h2>
          <p className="cases-aud-desc">
            Whether coordinating dozens of courtroom appearances across a firm or managing an active independent practice, BrilliusLaw keeps your matters organized.
          </p>
        </div>

        <div className="cases-aud-grid">
          {audiences.map((aud, idx) => (
            <div key={idx} className={`cases-aud-card ${aud.featured ? 'featured-aud-card' : ''}`}>
              <div className="aud-card-top">
                <div className="aud-icon-wrap">{aud.icon}</div>
                <span className="aud-badge-label">{aud.badge}</span>
              </div>

              <h3 className="aud-card-headline">{aud.headline}</h3>
              <p className="aud-card-desc">{aud.desc}</p>

              <div className="aud-divider" aria-hidden="true" />

              <ul className="aud-points-list">
                {aud.points.map((pt, pIdx) => (
                  <li key={pIdx}>
                    <CheckCircle2 size={15} color="#C6A15B" className="point-icon" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
