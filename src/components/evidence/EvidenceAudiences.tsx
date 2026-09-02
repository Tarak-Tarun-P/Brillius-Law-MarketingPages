import React from 'react';
import { Briefcase, Building2, CheckCircle2 } from 'lucide-react';
import './EvidenceAudiences.css';

export const EvidenceAudiences: React.FC = () => {
  const audiences = [
    {
      badge: 'FOR LAWYERS & ADVOCATES',
      icon: <Briefcase size={26} color="#091526" />,
      headline: 'Keep Case Evidence Within Reach.',
      desc: 'Store evidence with the relevant case and return to previous evidence without searching through different folders or paper records.',
      points: [
        'Add agreements, notices, invoices, and photo exhibits',
        'Keep every evidentiary item connected to its specific court matter',
        'Quickly open previously uploaded evidence when preparing submissions',
        'Save precious preparation time before chamber meetings and hearings',
      ],
      featured: true,
    },
    {
      badge: 'FOR LAW FIRMS & LEGAL TEAMS',
      icon: <Building2 size={26} color="#C6A15B" />,
      headline: 'Keep Evidence Organized Across Matters.',
      desc: 'Keep evidence connected to the cases your team is handling so important files are easier to find and reference across associates and partners.',
      points: [
        'Organize case attachments centrally across diverse practice areas',
        'Give case team members immediate access to uploaded exhibits',
        'Avoid duplicate file storage and missing documentation',
        'Maintain a clean, searchable history of all submitted case files',
      ],
    },
  ];

  return (
    <section className="evidence-aud-section" aria-labelledby="evidence-aud-heading">
      <div className="content-container">
        <div className="evidence-aud-header">
          <span className="evidence-aud-eyebrow">PRACTICE TEAMS</span>
          <h2 id="evidence-aud-heading" className="evidence-aud-title">
            Built for Advocates and Law Firms.
          </h2>
          <p className="evidence-aud-desc">
            Whether managing an active individual trial practice or coordinating complex commercial matters across a firm, BrilliusLaw keeps your evidence connected.
          </p>
        </div>

        <div className="evidence-aud-grid">
          {audiences.map((aud, idx) => (
            <div key={idx} className={`evidence-aud-card ${aud.featured ? 'featured-aud-card' : ''}`}>
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
