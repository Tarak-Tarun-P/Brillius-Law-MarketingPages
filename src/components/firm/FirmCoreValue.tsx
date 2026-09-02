import React from 'react';
import { UserCheck, Lock, Eye, Workflow, CheckCircle2 } from 'lucide-react';
import './FirmCoreValue.css';

export const FirmCoreValue: React.FC = () => {
  const values = [
    {
      title: 'Organized Team Structure',
      desc: 'Map partners, senior advocates, associates, clerks, and support staff to clear organizational hierarchies.',
      icon: <UserCheck size={20} />,
    },
    {
      title: 'Precise Access Control',
      desc: 'Protect confidential client files, sensitive matter evidence, and financial billing records with appropriate permissions.',
      icon: <Lock size={20} />,
    },
    {
      title: 'Structured Review & Approvals',
      desc: 'Ensure court drafts, key filings, and fee quotes undergo senior review before external dispatch or submission.',
      icon: <Workflow size={20} />,
    },
    {
      title: 'Practice-Wide Oversight',
      desc: 'Keep senior leadership informed of workload distribution, matter responsibilities, and key operational milestones.',
      icon: <Eye size={20} />,
    },
  ];

  return (
    <section id="firm-core-value" className="firm-core-value-section" aria-labelledby="core-value-heading">
      <div className="content-container">
        <div className="core-value-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">CORE VALUE</span>
          </div>
          <h2 id="core-value-heading" className="core-value-title">
            Designed for the Way Modern Law Firms Work
          </h2>
          <p className="core-value-desc">
            Give your team the freedom to work while keeping responsibilities, access, and oversight clear.
          </p>
        </div>

        <div className="core-value-grid">
          {values.map((v, idx) => (
            <div key={idx} className="value-feature-card">
              <div className="value-icon-circle">{v.icon}</div>
              <h3 className="value-card-title">{v.title}</h3>
              <p className="value-card-desc">{v.desc}</p>
              <div className="value-card-footer">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span className="footer-label">Built for Indian Law Chambers</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
