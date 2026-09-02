import React from 'react';
import { Users, UserCheck, Calendar, Landmark, Activity, History, CheckCircle2 } from 'lucide-react';
import './ECourtsCaseInformation.css';

export const ECourtsCaseInformation: React.FC = () => {
  const fields = [
    {
      title: 'Parties to the Dispute',
      desc: 'Complete petitioner and respondent names as recorded in the official court registry.',
      icon: <Users size={18} />,
    },
    {
      title: 'Appearing Advocates',
      desc: 'Advocates representing both sides along with enrollment references where available.',
      icon: <UserCheck size={18} />,
    },
    {
      title: 'Filing & Registration',
      desc: 'Original diary number, filing date, scrutiny clearance, and formal registration details.',
      icon: <Calendar size={18} />,
    },
    {
      title: 'Court & Bench Details',
      desc: 'Court establishment, designated court hall, sitting roster, and bench composition.',
      icon: <Landmark size={18} />,
    },
    {
      title: 'Current Matter Stage',
      desc: 'Official stage of proceedings (e.g., Admission, Notice, Counter, Evidence, Final Hearing).',
      icon: <Activity size={18} />,
    },
    {
      title: 'Chronological Proceedings',
      desc: 'Complete record of past listing dates, bench remarks, and previous business conducted.',
      icon: <History size={18} />,
    },
  ];

  return (
    <section className="ecourts-info-section" aria-labelledby="case-info-heading">
      <div className="content-container">
        <div className="info-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">SYNCHRONIZED METADATA</span>
          </div>
          <h2 id="case-info-heading" className="info-title">
            See the Case Information You Need.
          </h2>
          <p className="info-desc">
            Bring important information from the official court record into your matter so your team can quickly understand the case.
          </p>
        </div>

        <div className="info-cards-grid">
          {fields.map((f, idx) => (
            <div key={idx} className="info-item-card">
              <div className="info-icon-wrap">{f.icon}</div>
              <h3 className="info-item-title">{f.title}</h3>
              <p className="info-item-desc">{f.desc}</p>
              <div className="info-item-footer">
                <CheckCircle2 size={12} color="#C6A15B" />
                <span>Auto-populated into matter file</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
