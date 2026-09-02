import React from 'react';
import { Briefcase, Building2, UserCheck, Shield, CheckCircle2 } from 'lucide-react';
import './ECourtsAudiences.css';

export const ECourtsAudiences: React.FC = () => {
  const audiences = [
    {
      title: 'Advocates & Lawyers',
      quote: 'Keep important court information close while preparing and managing matters.',
      icon: <Briefcase size={22} />,
      points: [
        'Review official daily orders and bench notes before hearings',
        'Verify opponent party appearances and counter filings',
        'Track multiple High Court and District Court matters simultaneously',
      ],
      featured: true,
    },
    {
      title: 'Law Firms & Litigation Teams',
      quote: 'Give teams a clearer way to follow case developments across active matters.',
      icon: <Building2 size={22} />,
      points: [
        'Maintain a unified cause board across all firm litigation briefs',
        'Ensure associates have instant access to the latest court directions',
        'Centralize listing dates across diverse state jurisdictions',
      ],
    },
    {
      title: 'Clerks & Support Staff',
      quote: 'Reduce repetitive checking and help keep case information organized.',
      icon: <UserCheck size={22} />,
      points: [
        'Eliminate constant manual searches across court registry websites',
        'Quickly match cause list item numbers and court halls for the day',
        'Keep physical files aligned with official digital records',
      ],
    },
    {
      title: 'Managing Partners',
      quote: 'Get better visibility into important developments across the firm’s litigation matters.',
      icon: <Shield size={22} />,
      points: [
        'Monitor practice-wide litigation progress and critical stage transitions',
        'Ensure timely preparation ahead of high-stakes court hearings',
        'Maintain clear oversight of court orders across every active chamber matter',
      ],
    },
  ];

  return (
    <section className="ecourts-audiences-section" aria-labelledby="audiences-heading">
      <div className="content-container">
        <div className="audiences-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">LITIGATION PRACTICE ROLES</span>
          </div>
          <h2 id="audiences-heading" className="audiences-title">
            Built for People Who Work With Courts Every Day
          </h2>
          <p className="audiences-desc">
            Tailored capabilities built to support litigation advocates, law firms, and administrative support staff.
          </p>
        </div>

        <div className="audiences-grid">
          {audiences.map((aud, idx) => (
            <div
              key={idx}
              className={`ecourt-aud-card ${aud.featured ? 'featured-aud-card' : ''}`}
            >
              <div className="aud-card-header">
                <div className="aud-icon-circle">{aud.icon}</div>
                <strong className="aud-title-text">{aud.title}</strong>
              </div>

              <blockquote className="aud-quote-text">
                "{aud.quote}"
              </blockquote>

              <div className="aud-points-list">
                {aud.points.map((pt, pIdx) => (
                  <div key={pIdx} className="aud-point-item">
                    <CheckCircle2 size={13} color="#C6A15B" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
