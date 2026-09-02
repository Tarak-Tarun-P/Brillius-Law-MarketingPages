import React from 'react';
import { ArrowRight, UserPlus, Users, FolderCheck, Briefcase } from 'lucide-react';
import './ClientsHowItWorks.css';

export const ClientsHowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'ADD A CLIENT',
      desc: 'Create a client record and add relevant personal or company details.',
      icon: <UserPlus size={20} color="#091526" />,
    },
    {
      num: '02',
      title: 'VIEW CLIENTS',
      desc: 'Browse, filter, and search through your complete client directory.',
      icon: <Users size={20} color="#091526" />,
    },
    {
      num: '03',
      title: 'MANAGE INFORMATION',
      desc: 'Keep client profile details, KYC documents, and notes organized.',
      icon: <FolderCheck size={20} color="#C6A15B" />,
      featured: true,
    },
    {
      num: '04',
      title: 'CONNECT CASES',
      desc: 'Link active and past legal matters directly to the client profile.',
      icon: <Briefcase size={20} color="#091526" />,
    },
  ];

  return (
    <section id="clients-how-it-works" className="clients-workflow-section" aria-labelledby="clients-flow-heading">
      <div className="content-container">
        <div className="clients-flow-header">
          <span className="flow-eyebrow">A SIMPLE 4-STEP WORKFLOW</span>
          <h2 id="clients-flow-heading" className="flow-title">
            Manage a Client From One Place.
          </h2>
          <p className="flow-desc">
            BrilliusLaw provides a clear, connected structure to onboard clients, maintain records, and view related legal proceedings.
          </p>
        </div>

        <div className="clients-flow-grid">
          {steps.map((s, idx) => (
            <React.Fragment key={idx}>
              <div className={`flow-step-card ${s.featured ? 'featured-step-card' : ''}`}>
                <div className="flow-step-top">
                  <span className="flow-num-badge">STEP {s.num}</span>
                  <div className="flow-icon-wrap">{s.icon}</div>
                </div>
                <h3 className="flow-step-title">{s.title}</h3>
                <p className="flow-step-desc">{s.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="flow-arrow-separator" aria-hidden="true">
                  <ArrowRight size={18} color="#C6A15B" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
