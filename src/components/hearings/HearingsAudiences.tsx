import React from 'react';
import { Briefcase, Building2, CheckCircle2 } from 'lucide-react';
import './HearingsAudiences.css';

export const HearingsAudiences: React.FC = () => {
  const audiences = [
    {
      badge: 'FOR LAWYERS & ADVOCATES',
      icon: <Briefcase size={26} color="#091526" />,
      headline: 'Keep Your Hearing Dates Close.',
      desc: 'See upcoming hearings connected to your cases and review earlier hearings when you need to look back before entering the courtroom.',
      points: [
        'See scheduled hearings for all your active court matters',
        'Keep important appearance dates visible on your calendar',
        'Review what happened at previous hearings and read past orders',
        'Keep bench numbers, cause list items, and stages organized',
      ],
      featured: true,
    },
    {
      badge: 'FOR LAW FIRMS & LEGAL TEAMS',
      icon: <Building2 size={26} color="#C6A15B" />,
      headline: 'Keep Track of Hearings Across Your Matters.',
      desc: 'Keep hearing information connected to your cases so important dates and previous hearing records are easier to find across partners and associates.',
      points: [
        'Maintain a unified listing of upcoming hearings across all practice groups',
        'Keep past court orders and daily proceedings attached to master cases',
        'Help briefing counsel quickly review hearing milestones',
        'Ensure clean visibility between case teams and calendar schedules',
      ],
    },
  ];

  return (
    <section className="hearings-aud-section" aria-labelledby="hearings-aud-heading">
      <div className="content-container">
        <div className="hearings-aud-header">
          <span className="hearings-aud-eyebrow">TAILORED VALUE</span>
          <h2 id="hearings-aud-heading" className="hearings-aud-title">
            Built for Advocates and Law Firms.
          </h2>
          <p className="hearings-aud-desc">
            Whether coordinating multiple daily cause list appearances across a firm or managing an active independent chamber, BrilliusLaw keeps your hearings organized.
          </p>
        </div>

        <div className="hearings-aud-grid">
          {audiences.map((aud, idx) => (
            <div key={idx} className={`hearings-aud-card ${aud.featured ? 'featured-aud-card' : ''}`}>
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
