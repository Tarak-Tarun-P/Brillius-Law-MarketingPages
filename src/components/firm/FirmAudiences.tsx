import React from 'react';
import { Shield, Briefcase, Users, UserCheck, CheckCircle2 } from 'lucide-react';
import './FirmAudiences.css';

export const FirmAudiences: React.FC = () => {
  const audiences = [
    {
      title: 'Managing Partners',
      quote: 'Maintain visibility across the firm while keeping important work under control.',
      icon: <Shield size={22} />,
      points: [
        'Practice-wide oversight across active matters',
        'Fee structure approvals and financial controls',
        'Configure firm-level roles and membership',
      ],
      featured: true,
    },
    {
      title: 'Senior Lawyers',
      quote: 'Review important work and maintain oversight where it matters.',
      icon: <Briefcase size={22} />,
      points: [
        'Review court drafts before registry filing',
        'Lead strategic matter execution and team assignment',
        'Direct supervision over junior associate submissions',
      ],
    },
    {
      title: 'Associates & Advocates',
      quote: 'Work on matters with access suited to your responsibilities.',
      icon: <Users size={22} />,
      points: [
        'Focused access to assigned client matters and case notes',
        'Prepare pleadings, research briefs, and evidence indexes',
        'Submit work seamlessly for senior review',
      ],
    },
    {
      title: 'Clerks & Support Teams',
      quote: 'Handle assigned administrative and filing responsibilities with clear access.',
      icon: <UserCheck size={22} />,
      points: [
        'Manage court registry filings and physical document tracks',
        'Synchronize hearing cause lists and daily appearances',
        'Access only the operational data needed for filing tasks',
      ],
    },
  ];

  return (
    <section className="firm-audiences-section" aria-labelledby="firm-audiences-heading">
      <div className="content-container">
        <div className="firm-audiences-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">ROLE-SPECIFIC VALUE</span>
          </div>
          <h2 id="firm-audiences-heading" className="firm-audiences-title">
            Useful Across Your Entire Firm
          </h2>
          <p className="firm-audiences-desc">
            Tailored capabilities built to support every tier of modern legal practice administration.
          </p>
        </div>

        <div className="firm-audiences-grid">
          {audiences.map((aud, idx) => (
            <div
              key={idx}
              className={`audience-role-card ${aud.featured ? 'featured-role-card' : ''}`}
            >
              <div className="role-card-header-top">
                <div className="role-icon-circle">{aud.icon}</div>
                <strong className="role-title-text">{aud.title}</strong>
              </div>

              <blockquote className="role-quote-text">
                "{aud.quote}"
              </blockquote>

              <div className="role-points-box">
                {aud.points.map((pt, pIdx) => (
                  <div key={pIdx} className="role-point-row">
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
