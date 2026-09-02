import React from 'react';
import { Briefcase, Building2, GraduationCap, CheckCircle2 } from 'lucide-react';
import './JournalAudiences.css';

export const JournalAudiences: React.FC = () => {
  const audiences = [
    {
      badge: 'FOR LAWYERS & ADVOCATES',
      icon: <Briefcase size={24} color="#091526" />,
      headline: 'Keep Your Legal Thoughts Close.',
      desc: 'Save important points, bookmark useful provisions, and capture rapid argument ideas while researching or preparing for upcoming hearings.',
      points: [
        'Save key points from statutes, orders, and judgment citations',
        'Keep personal notes organized by matter and legal topic',
        'Capture spoken thoughts during brief analysis without typing',
        'Bookmark frequently cited provisions for instant access',
      ],
      featured: true,
    },
    {
      badge: 'FOR LAW FIRMS & LEGAL TEAMS',
      icon: <Building2 size={24} color="#C6A15B" />,
      headline: 'Keep Your Own Working Notes Organized.',
      desc: 'Give each associate, senior counsel, and partner a dedicated personal space to maintain their own working notes and research bookmarks.',
      points: [
        'A dedicated, private journal space for each individual lawyer',
        'Capture quick oral observations during contract review',
        'Bookmark critical statutory amendments across active practice areas',
        'Seamlessly resume work from recent notes and saved points',
      ],
      featured: false,
    },
    {
      badge: 'FOR LAW STUDENTS & SCHOLARS',
      icon: <GraduationCap size={24} color="#091526" />,
      headline: 'Keep Track of What You Learn.',
      desc: 'Save important principles, bookmark statutory provisions and judgments, and record summary thoughts while studying and preparing for moots.',
      points: [
        'Organize study notes alongside official Bare Act sections',
        'Record spoken questions and thoughts during lecture review',
        'Bookmark landmark case citations for moot court memorials',
        'Build a personalized library of key legal concepts',
      ],
      featured: false,
    },
  ];

  return (
    <section className="journal-aud-section" aria-labelledby="aud-heading">
      <div className="content-container">
        <div className="journal-aud-header">
          <span className="journal-aud-eyebrow">PRACTICE SUITABILITY</span>
          <h2 id="aud-heading" className="journal-aud-title">
            Your Personal Companion for Everyday Law.
          </h2>
          <p className="journal-aud-desc">
            Designed for advocates in chambers, corporate legal counsel, and law students who need a quiet, focused space for their thoughts.
          </p>
        </div>

        <div className="journal-aud-grid">
          {audiences.map((aud, idx) => (
            <div key={idx} className={`journal-aud-card ${aud.featured ? 'featured-aud-card' : ''}`}>
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
