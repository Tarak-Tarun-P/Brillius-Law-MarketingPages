import React from 'react';
import { PlusCircle, Layers, Users, Calendar, Clock } from 'lucide-react';
import './CasesUseCases.css';

export const CasesUseCases: React.FC = () => {
  const scenarios = [
    {
      title: 'New Matter Onboarding',
      scenario: 'Instituting a new civil suit, petition, or company petition?',
      solution: 'Create the case profile, add court particulars, set the priority, and record initial filing dates.',
      icon: <PlusCircle size={20} color="#C6A15B" />,
    },
    {
      title: 'Managing Multiple Cases',
      scenario: 'Handling dozens of active suits across different courts and forums?',
      solution: 'Browse, filter by active or pending status, and locate any case in seconds without searching through physical folders.',
      icon: <Layers size={20} color="#091526" />,
    },
    {
      title: 'Client Matter Linkage',
      scenario: 'Need to see which matters belong to a corporate or individual client?',
      solution: 'Connect the case directly to the client\'s master record for unified practice visibility.',
      icon: <Users size={20} color="#C6A15B" />,
    },
    {
      title: 'Upcoming Court Hearings',
      scenario: 'Checking tomorrow\'s court appearances and causelists?',
      solution: 'View courtroom, bench number, and item number details connected directly to the active matter.',
      icon: <Calendar size={20} color="#091526" />,
    },
    {
      title: 'Reviewing Case History',
      scenario: 'Briefing senior counsel on the timeline of past orders and filings?',
      solution: 'Review a chronological record of every milestone, affidavit filed, and order passed.',
      icon: <Clock size={20} color="#C6A15B" />,
    },
  ];

  return (
    <section className="cases-usecases-section" aria-labelledby="usecases-heading">
      <div className="content-container">
        <div className="usecases-header">
          <span className="usecases-eyebrow">PRACTICAL SCENARIOS</span>
          <h2 id="usecases-heading" className="usecases-title">
            Where It Can Help
          </h2>
          <p className="usecases-desc">
            Explore everyday legal practice situations where organized case management saves time and brings clarity.
          </p>
        </div>

        <div className="usecases-grid">
          {scenarios.map((cs, idx) => (
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
