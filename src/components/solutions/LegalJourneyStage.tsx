import React from 'react';
import { GraduationCap, Briefcase, Building2, CheckCircle2 } from 'lucide-react';
import './LegalJourneyStage.css';

export const LegalJourneyStage: React.FC = () => {
  const stages = [
    {
      stage: 'STAGE 01',
      role: 'Law Student',
      tagline: 'Learn • Explore • Practice',
      desc: 'Understand foundational Indian statutes, read interpreted judgments, practice document drafting, and organize study notes.',
      icon: <GraduationCap size={28} color="#C6A15B" />,
      features: ['Bare Acts & Section Notes', 'Simplified Judgment Summaries', 'Personal Study Journal'],
    },
    {
      stage: 'STAGE 02',
      role: 'Lawyer & Advocate',
      tagline: 'Practice • Research • Draft',
      desc: 'Manage active matters, track court dates, conduct reliable legal research, draft clauses with AI assistance, and record quick thoughts on the go.',
      icon: <Briefcase size={28} color="#091526" />,
      features: ['Automatic Court Date Sync', 'Intelligent Drafting Lab', 'Voice-to-Note My Journal'],
      featured: true,
    },
    {
      stage: 'STAGE 03',
      role: 'Law Firm',
      tagline: 'Manage • Collaborate • Grow',
      desc: 'Orchestrate multi-partner operations, delegate associate workloads, manage client retainers, and maintain centralized encrypted file storage.',
      icon: <Building2 size={28} color="#C6A15B" />,
      features: ['Team Roles & Permissions', 'Retainers & Invoicing', 'Unified Matter Oversight'],
    },
  ];

  return (
    <section className="legal-journey-section" aria-labelledby="journey-heading">
      <div className="content-container">
        <div className="journey-header">
          <span className="journey-eyebrow">YOUR JOURNEY</span>
          <h2 id="journey-heading" className="journey-title">
            From Learning to Practice.
          </h2>
          <p className="journey-desc">
            BrilliusLaw grows with the different ways people learn, practice, and manage legal work.
          </p>
        </div>

        <div className="journey-flow-grid">
          {stages.map((st, i) => (
            <div key={i} className={`journey-stage-card ${st.featured ? 'featured-stage-card' : ''}`}>
              <div className="stage-top-row">
                <span className="stage-num-pill">{st.stage}</span>
                <div className="stage-icon-circle">{st.icon}</div>
              </div>

              <h3 className="stage-role">{st.role}</h3>
              <span className="stage-tagline">{st.tagline}</span>

              <p className="stage-desc-text">{st.desc}</p>

              <div className="stage-divider" aria-hidden="true" />

              <ul className="stage-features-list">
                {st.features.map((f, idx) => (
                  <li key={idx} className="stage-feature-item">
                    <CheckCircle2 size={15} color="#C6A15B" />
                    <span>{f}</span>
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
