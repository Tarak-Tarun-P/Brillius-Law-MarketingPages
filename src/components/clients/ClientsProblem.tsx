import React from 'react';
import { Layers, Briefcase, FileText } from 'lucide-react';
import './ClientsProblem.css';

export const ClientsProblem: React.FC = () => {
  const painPoints = [
    {
      title: 'Scattered Information',
      desc: 'Important client details, PAN/GSTIN numbers, and contact info can end up across separate emails, folders, and spreadsheets.',
      icon: <Layers size={22} color="#091526" />,
    },
    {
      title: 'Multiple Matters',
      desc: 'When one corporate or individual client has multiple active cases, seeing their full legal engagement in one view is challenging.',
      icon: <Briefcase size={22} color="#C6A15B" />,
      featured: true,
    },
    {
      title: 'Important Notes',
      desc: 'Meeting instructions, telephone updates, and key background context can easily get lost without a dedicated client notebook.',
      icon: <FileText size={22} color="#091526" />,
    },
  ];

  return (
    <section className="clients-problem-section" aria-labelledby="clients-problem-heading">
      <div className="content-container">
        <div className="clients-problem-header">
          <span className="clients-problem-eyebrow">THE CHALLENGE</span>
          <h2 id="clients-problem-heading" className="clients-problem-title">
            Client Information Shouldn't Be Scattered.
          </h2>
          <p className="clients-problem-desc">
            Client details can end up across files, notes, spreadsheets, and different places. Finding the right information becomes harder as the number of clients and matters grows.
          </p>
        </div>

        <div className="clients-problem-grid">
          {painPoints.map((point, idx) => (
            <div key={idx} className={`clients-problem-card ${point.featured ? 'featured-problem-card' : ''}`}>
              <div className="problem-icon-wrap">{point.icon}</div>
              <h3 className="problem-card-title">{point.title}</h3>
              <p className="problem-card-desc">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
