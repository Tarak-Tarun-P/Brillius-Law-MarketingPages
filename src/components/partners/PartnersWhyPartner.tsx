import React from 'react';
import { Sparkles, Workflow, Landmark, Handshake } from 'lucide-react';
import './PartnersWhyPartner.css';

export const PartnersWhyPartner: React.FC = () => {
  const reasons = [
    {
      title: 'MODERN LEGAL TECHNOLOGY',
      desc: 'A platform built around modern tools for legal research, drafting, case management, and client work.',
      icon: <Sparkles size={22} color="#C6A15B" />,
    },
    {
      title: 'BUILT AROUND REAL WORKFLOWS',
      desc: 'Designed with the everyday realities of legal practice in mind, not just abstract product ideas.',
      icon: <Workflow size={22} color="#091526" />,
    },
    {
      title: 'DESIGNED FOR INDIAN LEGAL PRACTICE',
      desc: "Rooted in India's legal system, courts, and jurisprudence, built for the Indian legal ecosystem.",
      icon: <Landmark size={22} color="#C6A15B" />,
    },
    {
      title: 'MEANINGFUL COLLABORATION',
      desc: 'Opportunities to work together with organizations and professionals who share our vision for legal technology.',
      icon: <Handshake size={22} color="#091526" />,
    },
  ];

  return (
    <section className="why-partner-section" aria-labelledby="why-partner-heading">
      <div className="content-container">
        <div className="why-partner-header">
          <span className="why-partner-eyebrow">WHY PARTNER WITH BRILLIUSLAW</span>
          <h2 id="why-partner-heading" className="why-partner-title">
            A Platform Worth Building With
          </h2>
          <p className="why-partner-desc">
            We're building BrilliusLaw with an eye toward long-term collaboration across the legal ecosystem.
          </p>
        </div>

        <div className="why-partner-grid">
          {reasons.map((r, idx) => (
            <div key={idx} className="why-partner-card">
              <div className="why-partner-icon-wrap">{r.icon}</div>
              <h3 className="why-partner-card-title">{r.title}</h3>
              <p className="why-partner-card-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
