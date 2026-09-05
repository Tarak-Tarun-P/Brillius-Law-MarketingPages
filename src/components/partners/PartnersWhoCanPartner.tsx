import React from 'react';
import { Building2, Briefcase, GraduationCap, Network } from 'lucide-react';
import './PartnersWhoCanPartner.css';

export const PartnersWhoCanPartner: React.FC = () => {
  const partnerTypes = [
    {
      title: 'Law Firms & Chambers',
      icon: <Building2 size={24} color="#C6A15B" />,
      desc: 'Firms and chambers looking to bring modern legal technology to their teams and clients.',
    },
    {
      title: 'Legal Professionals & Organizations',
      icon: <Briefcase size={24} color="#091526" />,
      featured: true,
      desc: 'Advocates, associations, and legal organizations interested in shaping the future of legal practice.',
    },
    {
      title: 'Legal Education Institutions',
      icon: <GraduationCap size={24} color="#C6A15B" />,
      desc: 'Law schools and institutions exploring how technology can support legal learning and research.',
    },
    {
      title: 'Technology & Ecosystem Partners',
      icon: <Network size={24} color="#091526" />,
      desc: 'Organizations working across the legal and technology ecosystem who want to collaborate with us.',
    },
  ];

  return (
    <section className="who-can-partner-section" aria-labelledby="who-can-partner-heading">
      <div className="content-container">
        <div className="who-can-partner-header">
          <span className="who-can-partner-eyebrow">WHO CAN PARTNER</span>
          <h2 id="who-can-partner-heading" className="who-can-partner-title">
            Collaboration Across the Legal Ecosystem
          </h2>
          <p className="who-can-partner-desc">
            We welcome conversations with a wide range of organizations and professionals across law and legal technology.
          </p>
        </div>

        <div className="partner-types-grid" role="list">
          {partnerTypes.map((p, i) => (
            <div
              key={i}
              className={`partner-type-card ${p.featured ? 'featured-partner-card' : ''}`}
            >
              <div className="partner-type-icon-box">{p.icon}</div>
              <h3 className="partner-type-title">{p.title}</h3>
              <p className="partner-type-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
