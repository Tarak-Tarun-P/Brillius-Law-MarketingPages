import React from 'react';
import { UserPlus, Briefcase, Building2, FileText } from 'lucide-react';
import './ClientsUseCases.css';

export const ClientsUseCases: React.FC = () => {
  const cases = [
    {
      title: 'New Client Onboarding',
      scenario: 'Taking on a new client retainer or individual litigant?',
      solution: 'Create a client profile and keep their contact details, address, and identification info in one secure place.',
      icon: <UserPlus size={22} color="#C6A15B" />,
    },
    {
      title: 'Multiple Ongoing Matters',
      scenario: 'Representing a client across different courts or tribunals?',
      solution: 'Connect all their commercial suits, arbitrations, and advisory files directly to their master profile.',
      icon: <Briefcase size={22} color="#091526" />,
    },
    {
      title: 'Company & Tax Records',
      scenario: 'Managing corporate entities with GSTIN and PAN details?',
      solution: 'Organize official registered office addresses and business identifiers so they are readily available for filings.',
      icon: <Building2 size={22} color="#C6A15B" />,
    },
    {
      title: 'Preserving Important Notes',
      scenario: 'Discussed key tactical details in a client phone call?',
      solution: 'Save a client note immediately so all partners and associates on the matter have full context.',
      icon: <FileText size={22} color="#091526" />,
    },
  ];

  return (
    <section className="clients-usecases-section" aria-labelledby="usecases-heading">
      <div className="content-container">
        <div className="usecases-header">
          <span className="usecases-eyebrow">PRACTICAL SCENARIOS</span>
          <h2 id="usecases-heading" className="usecases-title">
            Where It Can Help
          </h2>
          <p className="usecases-desc">
            Explore everyday legal practice scenarios where organized client records save time and improve coordination.
          </p>
        </div>

        <div className="usecases-grid">
          {cases.map((cs, idx) => (
            <div key={idx} className="usecase-card">
              <div className="usecase-icon-box">{cs.icon}</div>
              <h3 className="usecase-title">{cs.title}</h3>
              <p className="usecase-scenario">"{cs.scenario}"</p>
              <div className="usecase-divider" aria-hidden="true" />
              <p className="usecase-solution">{cs.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
