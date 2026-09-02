import React from 'react';
import { Briefcase, Users, Shield, Building2, CheckCircle2 } from 'lucide-react';
import './CaseDraftsAudiences.css';

export const CaseDraftsAudiences: React.FC = () => {
  const audiences = [
    {
      title: 'Advocates & Lawyers',
      quote: 'Prepare case-specific documents with a structured starting point and control over the final draft.',
      icon: <Briefcase size={22} />,
      points: [
        'Commence drafting with auto-linked facts, parties, and court particulars',
        'Refine legal grounds and citations directly in the document editor',
        'Maintain direct control over final verification and prayers',
      ],
      featured: true,
    },
    {
      title: 'Associates',
      quote: 'Spend less time rebuilding standard document structures and more time refining the substance.',
      icon: <Users size={22} />,
      points: [
        'Avoid creating identical court formats and preambles from scratch',
        'Quickly assemble preliminary objections and para-wise replies',
        'Submit completed first iterations for senior review seamlessly',
      ],
    },
    {
      title: 'Senior Lawyers',
      quote: 'Review important drafts and request changes before they are finalized.',
      icon: <Shield size={22} />,
      points: [
        'Review associate drafts with contextual case facts right alongside',
        'Add inline feedback and request specific revisions',
        'Approve finalized pleadings prior to formal client signing',
      ],
    },
    {
      title: 'Law Firms',
      quote: 'Use consistent templates and organized drafting workflows across matters.',
      icon: <Building2 size={22} />,
      points: [
        'Centralize firm-wide drafting templates across all branches',
        'Standardize document quality across litigation and dispute teams',
        'Keep a structured version audit trail for every client matter',
      ],
    },
  ];

  return (
    <section className="casedrafts-audiences-section" aria-labelledby="draft-aud-heading">
      <div className="content-container">
        <div className="draft-aud-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">TAILORED FOR PRACTITIONERS</span>
          </div>
          <h2 id="draft-aud-heading" className="draft-aud-title">
            Built for Everyday Legal Drafting
          </h2>
          <p className="draft-aud-desc">
            Engineered to empower individual advocates, associate teams, senior counsel, and multi-partner firms.
          </p>
        </div>

        <div className="draft-aud-grid">
          {audiences.map((aud, idx) => (
            <div
              key={idx}
              className={`casedraft-aud-card ${aud.featured ? 'featured-draft-aud' : ''}`}
            >
              <div className="d-card-header">
                <div className="d-icon-circle">{aud.icon}</div>
                <strong className="d-title-text">{aud.title}</strong>
              </div>

              <blockquote className="d-quote-text">
                "{aud.quote}"
              </blockquote>

              <div className="d-points-list">
                {aud.points.map((pt, pIdx) => (
                  <div key={pIdx} className="d-point-item">
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
