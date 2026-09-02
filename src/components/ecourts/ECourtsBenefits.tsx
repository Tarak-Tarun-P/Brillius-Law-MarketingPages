import React from 'react';
import { Clock, Eye, FileText, Users } from 'lucide-react';
import './ECourtsBenefits.css';

export const ECourtsBenefits: React.FC = () => {
  const benefits = [
    {
      num: '01',
      title: 'Save Time',
      desc: 'Spend less time repeatedly checking court records for routine case information.',
      icon: <Clock size={22} />,
    },
    {
      num: '02',
      title: 'Better Awareness',
      desc: 'Keep upcoming hearings and case developments easier to follow.',
      icon: <Eye size={22} />,
    },
    {
      num: '03',
      title: 'Organized Records',
      desc: 'Keep available court orders and case history close to the matter.',
      icon: <FileText size={22} />,
    },
    {
      num: '04',
      title: 'Better Team Coordination',
      desc: 'Give your team a shared view of important court information.',
      icon: <Users size={22} />,
    },
  ];

  return (
    <section className="ecourts-benefits-section" aria-labelledby="benefits-heading">
      <div className="content-container">
        <div className="benefits-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">LITIGATION EFFICIENCY</span>
          </div>
          <h2 id="benefits-heading" className="benefits-title">
            Less Manual Checking. Better Case Visibility.
          </h2>
          <p className="benefits-desc">
            Four practical advantages that streamline litigation management across Indian courts and tribunals.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((b, idx) => (
            <div key={idx} className="ecourt-benefit-card">
              <div className="benefit-card-top">
                <span className="benefit-num-pill">{b.num}</span>
                <div className="benefit-icon-wrap">{b.icon}</div>
              </div>
              <h3 className="benefit-card-title">{b.title}</h3>
              <p className="benefit-card-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
