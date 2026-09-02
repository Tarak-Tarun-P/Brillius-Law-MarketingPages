import React from 'react';
import { Briefcase, Building2, GraduationCap, CheckCircle2 } from 'lucide-react';
import './DraftingAudiences.css';

export const DraftingAudiences: React.FC = () => {
  const audiences = [
    {
      badge: 'FOR LAWYERS & ADVOCATES',
      icon: <Briefcase size={24} color="#091526" />,
      headline: 'A Focused Workspace for Everyday Drafting.',
      desc: 'Create and edit legal documents while keeping familiar formatting, highlighting, and annotation tools close at hand.',
      points: [
        'Draft contracts, legal notices, and court petitions from scratch',
        'Apply bold, underline, italic, and alignment formatting instantly',
        'Highlight critical monetary figures and notice deadlines',
        'Attach personal reminders to clauses while reviewing drafts',
      ],
      featured: true,
    },
    {
      badge: 'FOR LAW FIRMS & LEGAL TEAMS',
      icon: <Building2 size={24} color="#C6A15B" />,
      headline: 'Give Your Team a Familiar Place to Draft.',
      desc: 'Create and edit documents in a consistent, intuitive workspace across associates and partners without software fragmentation.',
      points: [
        'Standardize document editing workflows across practice areas',
        'Keep active drafts organized and easily resumable in the workspace',
        'Enable associates and partners to work within a clean environment',
        'Eliminate formatting inconsistencies across firm documents',
      ],
      featured: false,
    },
    {
      badge: 'FOR LAW STUDENTS',
      icon: <GraduationCap size={24} color="#091526" />,
      headline: 'A Simple Place to Write and Organize Your Work.',
      desc: 'Create documents, format your writing, highlight key sections, and add notes while working on moot memorials and legal coursework.',
      points: [
        'Format academic research papers and moot court submissions',
        'Highlight statutory sections and landmark case principles',
        'Leave study notes and clause annotations directly in the draft',
      ],
      featured: false,
    },
  ];

  return (
    <section className="drafting-aud-section" aria-labelledby="draft-aud-heading">
      <div className="content-container">
        <div className="drafting-aud-header">
          <span className="drafting-aud-eyebrow">PRACTICE SUITABILITY</span>
          <h2 id="draft-aud-heading" className="drafting-aud-title">
            Designed for Advocates, Firms, and Scholars.
          </h2>
          <p className="drafting-aud-desc">
            Whether preparing bespoke commercial agreements, handling high-volume practice documents, or drafting moot briefs.
          </p>
        </div>

        <div className="drafting-aud-grid">
          {audiences.map((aud, idx) => (
            <div key={idx} className={`drafting-aud-card ${aud.featured ? 'featured-aud-card' : ''}`}>
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
