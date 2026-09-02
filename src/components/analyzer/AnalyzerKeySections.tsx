import React from 'react';
import { Shield, IndianRupee, FileX, Lock, AlertTriangle, Scale } from 'lucide-react';
import './AnalyzerKeySections.css';

export const AnalyzerKeySections: React.FC = () => {
  const categories = [
    {
      title: 'Important Clauses',
      desc: 'Quickly surface core covenants, operational conditions, and representation clauses.',
      icon: <Shield size={22} color="#C6A15B" />,
    },
    {
      title: 'Payment Terms',
      desc: 'Identify invoice due dates, retainer milestones, payment terms, and interest clauses.',
      icon: <IndianRupee size={22} color="#091526" />,
    },
    {
      title: 'Termination',
      desc: 'Check mandatory notice periods, cure timelines, and post-termination survival duties.',
      icon: <FileX size={22} color="#C6A15B" />,
    },
    {
      title: 'Confidentiality',
      desc: 'Review non-disclosure boundaries, trade secret definitions, and expiry timelines.',
      icon: <Lock size={22} color="#091526" />,
    },
    {
      title: 'Obligations & Liabilities',
      desc: 'Locate indemnity caps, liability limitations, and specific operational duties.',
      icon: <AlertTriangle size={22} color="#C6A15B" />,
    },
    {
      title: 'Dispute Resolution',
      desc: 'Verify arbitration seats, exclusive court jurisdiction, and governing Indian laws.',
      icon: <Scale size={22} color="#091526" />,
    },
  ];

  return (
    <section className="analyzer-sections-feature" aria-labelledby="key-sections-heading">
      <div className="content-container">
        <div className="key-sections-header">
          <span className="key-sections-eyebrow">ESSENTIAL CLAUSE STRUCTURE</span>
          <h2 id="key-sections-heading" className="key-sections-title">
            Find the Parts That Matter.
          </h2>
          <p className="key-sections-desc">
            Long documents often contain important details spread across different sections. BrilliusLaw helps you get to relevant information faster.
          </p>
        </div>

        <div className="key-sections-grid">
          {categories.map((cat, idx) => (
            <div key={idx} className="key-section-card">
              <div className="key-section-icon">{cat.icon}</div>
              <h3 className="key-section-title">{cat.title}</h3>
              <p className="key-section-desc">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
