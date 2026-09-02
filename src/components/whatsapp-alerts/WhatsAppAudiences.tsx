import React from 'react';
import { Briefcase, Users, Shield, UserCheck, Building2, CheckCircle2 } from 'lucide-react';
import './WhatsAppAudiences.css';

export const WhatsAppAudiences: React.FC = () => {
  const audiences = [
    {
      title: 'Lawyers & Advocates',
      quote: 'Stay informed about hearings, tasks, and important matter updates.',
      icon: <Briefcase size={22} />,
      points: [
        'Immediate alerts for today’s and tomorrow’s court listings',
        'Direct prompts for post-hearing proceedings logging',
        'Critical task notifications on active litigation matters',
      ],
      featured: true,
    },
    {
      title: 'Associates',
      quote: 'Keep track of work that needs attention, review, or follow-up.',
      icon: <Users size={22} />,
      points: [
        'Instant alerts when senior counsel reviews or requests changes',
        'Task reminders for filing rejoinders and serving notices',
        'Hearing listing alerts for cases assigned to their research desk',
      ],
    },
    {
      title: 'Senior Lawyers',
      quote: 'Know when drafts and documents are ready for review.',
      icon: <Shield size={22} />,
      points: [
        'Immediate notification when associates submit a draft for review',
        'Quick awareness of pending commercial contract sign-offs',
        'Summary alerts for high-stakes division bench listings',
      ],
    },
    {
      title: 'Clerks & Support Staff',
      quote: 'Stay aware of important hearing and task-related updates.',
      icon: <UserCheck size={22} />,
      points: [
        'Court hall and item number alerts for daily cause board management',
        'Filing deadline reminders for registry submissions',
        'Prompt notice when matter documents are updated',
      ],
    },
    {
      title: 'Firm Administrators',
      quote: 'Help keep teams informed about important workflow updates.',
      icon: <Building2 size={22} />,
      points: [
        'Practice-wide awareness of critical stage progressions',
        'Assurance that team members receive timely updates',
        'Reduced communication bottlenecks across departments',
      ],
    },
  ];

  return (
    <section className="wa-audiences-section" aria-labelledby="wa-aud-heading">
      <div className="content-container">
        <div className="wa-aud-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">PRACTICE ROLES &amp; ALERTS</span>
          </div>
          <h2 id="wa-aud-heading" className="wa-aud-title">
            Keep the Right People Informed.
          </h2>
          <p className="wa-aud-desc">
            Different members of a legal team have different responsibilities. WhatsApp Alerts helps keep relevant users aware of important updates connected to their work.
          </p>
        </div>

        <div className="wa-aud-grid">
          {audiences.map((aud, idx) => (
            <div
              key={idx}
              className={`wa-aud-card ${aud.featured ? 'featured-wa-aud' : ''}`}
            >
              <div className="wa-aud-card-header">
                <div className="wa-aud-icon-circle">{aud.icon}</div>
                <strong className="wa-aud-title-text">{aud.title}</strong>
              </div>

              <blockquote className="wa-aud-quote">
                "{aud.quote}"
              </blockquote>

              <div className="wa-aud-points">
                {aud.points.map((pt, pIdx) => (
                  <div key={pIdx} className="wa-aud-pt">
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
