import React from 'react';
import { Building2, Briefcase, CheckCircle2 } from 'lucide-react';
import './ClientsAudiences.css';

export const ClientsAudiences: React.FC = () => {
  const audiences = [
    {
      badge: 'FOR LAW FIRMS & TEAMS',
      icon: <Building2 size={26} color="#C6A15B" />,
      headline: 'A Clearer View of Your Clients.',
      desc: 'Keep client information organized and connect each client with the matters your firm is handling across partners and practice groups.',
      points: [
        'Manage firm-wide client directories and retainer accounts',
        'Keep KYC, PAN, and corporate GSTIN data in one accessible place',
        'Connect multiple partner and associate matters to the same client',
        'Ensure quick cross-team access when briefing senior counsel',
      ],
      featured: true,
    },
    {
      badge: 'FOR LAWYERS & ADVOCATES',
      icon: <Briefcase size={26} color="#091526" />,
      headline: 'Keep Your Client Work Organized.',
      desc: 'Find client details quickly, keep important notes together, and see the cases connected to each client without managing disconnected files.',
      points: [
        'Add and manage individual and corporate clients with ease',
        'Keep essential KYC documents and tax records organized',
        'Save quick instructions and meeting notes on the go',
        'View connected active and pending matters in one click',
      ],
    },
  ];

  return (
    <section className="clients-audiences-section" aria-labelledby="clients-aud-heading">
      <div className="content-container">
        <div className="clients-aud-header">
          <span className="clients-aud-eyebrow">TAILORED VALUE</span>
          <h2 id="clients-aud-heading" className="clients-aud-title">
            Built for Law Firms and Advocates.
          </h2>
          <p className="clients-aud-desc">
            Whether coordinating complex multi-party matters across a firm or managing an independent chamber, BrilliusLaw keeps your client records clear and organized.
          </p>
        </div>

        <div className="clients-aud-grid">
          {audiences.map((aud, idx) => (
            <div key={idx} className={`clients-aud-card ${aud.featured ? 'featured-aud-card' : ''}`}>
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
