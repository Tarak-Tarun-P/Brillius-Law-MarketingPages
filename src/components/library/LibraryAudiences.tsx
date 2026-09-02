import React from 'react';
import { Briefcase, Building2, GraduationCap, CheckCircle2 } from 'lucide-react';
import './LibraryAudiences.css';

export const LibraryAudiences: React.FC = () => {
  const audiences = [
    {
      badge: 'FOR LAWYERS & ADVOCATES',
      icon: <Briefcase size={24} color="#091526" />,
      headline: 'Keep Your Legal Research in One Place.',
      desc: 'Explore Acts, sections, references, and related judgments while researching a legal issue without jumping between disparate databases.',
      points: [
        'Explore verified Bare Acts with complete chapter structures',
        'Read individual provisions along with explanations and provisos',
        'Follow statutory footnotes and connected section references',
        'Review authoritative High Court & Supreme Court rulings',
      ],
      featured: true,
    },
    {
      badge: 'FOR LAW FIRMS & LEGAL TEAMS',
      icon: <Building2 size={24} color="#C6A15B" />,
      headline: 'Make Everyday Legal Research Easier to Navigate.',
      desc: 'Give your practice groups and associates a focused place to explore legal provisions and the authoritative decisions connected to them.',
      points: [
        'Standardize statutory research workflows across practice teams',
        'Access exact legislative text for contract drafting and advisory',
        'Accelerate brief preparation and opinion drafting',
        'Ensure consistent statutory citations across all matters',
      ],
      featured: false,
    },
    {
      badge: 'FOR LAW STUDENTS & SCHOLARS',
      icon: <GraduationCap size={24} color="#091526" />,
      headline: 'Learn the Law by Exploring the Sources.',
      desc: 'Read Bare Acts, explore provisions, follow references, and examine related judgments while studying Indian law and preparing for moot courts.',
      points: [
        'Study foundational statutes alongside landmark precedent',
        'Prepare thoroughly for moot court arguments and memorials',
        'Understand statutory exceptions and legislative cross-links',
        'Explore legal principles as they are applied in practice',
      ],
      featured: false,
    },
  ];

  return (
    <section className="library-aud-section" aria-labelledby="aud-heading">
      <div className="content-container">
        <div className="library-aud-header">
          <span className="library-aud-eyebrow">PRACTICE SUITABILITY</span>
          <h2 id="aud-heading" className="library-aud-title">
            Built for Advocates, Teams, and Students.
          </h2>
          <p className="library-aud-desc">
            Whether preparing for a court hearing, conducting thorough statutory analysis, or studying Indian jurisprudence.
          </p>
        </div>

        <div className="library-aud-grid">
          {audiences.map((aud, idx) => (
            <div key={idx} className={`library-aud-card ${aud.featured ? 'featured-aud-card' : ''}`}>
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
