import React from 'react';
import { Briefcase, Building2, GraduationCap, CheckCircle2 } from 'lucide-react';
import './CompareAudiences.css';

export const CompareAudiences: React.FC = () => {
  const audiences = [
    {
      badge: 'FOR LAWYERS & ADVOCATES',
      icon: <Briefcase size={24} color="#091526" />,
      headline: 'Review Your Document Before You Finalize It.',
      desc: 'Compare an earlier draft with your current document and quickly verify every textual and numerical modification.',
      points: [
        'Compare previous versions with live working drafts',
        'Review added and deleted text in color-coded clarity',
        'Spot changes to dates, amounts, and critical numbers',
        'Review moved clauses and updated table rows before signing',
      ],
      featured: true,
    },
    {
      badge: 'FOR LAW FIRMS & LEGAL TEAMS',
      icon: <Building2 size={24} color="#C6A15B" />,
      headline: 'Make Document Changes Easier to Review.',
      desc: 'When agreements go through multiple review cycles across associates, partners, and clients, review differences systematically.',
      points: [
        'Reconcile multi-round revisions without manual proofreading',
        'Maintain version transparency across practice groups',
        'Accelerate contract review cycles with structured change lists',
        'Ensure no unauthorized wording changes slip into final executions',
      ],
      featured: false,
    },
    {
      badge: 'FOR LAW STUDENTS',
      icon: <GraduationCap size={24} color="#091526" />,
      headline: 'Understand How a Document Changes.',
      desc: 'Compare earlier and later drafts of legal agreements and petitions to see how legal drafting language evolves through revisions.',
      points: [
        'Study how professional clauses are refined over iterations',
        'Observe structural reorganization between draft versions',
        'Learn precise legal wording by inspecting before-and-after redlines',
      ],
      featured: false,
    },
  ];

  return (
    <section className="compare-aud-section" aria-labelledby="aud-heading">
      <div className="content-container">
        <div className="compare-aud-header">
          <span className="compare-aud-eyebrow">TAILORED FOR YOUR WORKFLOW</span>
          <h2 id="aud-heading" className="compare-aud-title">
            Built for Advocates, Firms, and Scholars.
          </h2>
          <p className="compare-aud-desc">
            Whether preparing high-stakes commercial agreements, managing firm-wide revision cycles, or studying legal drafting mechanics.
          </p>
        </div>

        <div className="compare-aud-grid">
          {audiences.map((aud, idx) => (
            <div key={idx} className={`compare-aud-card ${aud.featured ? 'featured-aud-card' : ''}`}>
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
