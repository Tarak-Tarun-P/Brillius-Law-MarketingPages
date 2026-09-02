import React from 'react';
import { Landmark, BookOpen, RefreshCw, FileCheck2, Scale } from 'lucide-react';
import './IndiaAtTheCore.css';

export const IndiaAtTheCore: React.FC = () => {
  const points = [
    {
      icon: <Landmark size={22} color="#C6A15B" />,
      title: 'Indian Courts',
      text: 'Works seamlessly for the Supreme Court of India, High Courts across all states, District Courts, and specialized tribunals like NCLT and ITAT.',
    },
    {
      icon: <RefreshCw size={22} color="#C6A15B" />,
      title: 'Court Updates',
      text: 'Connects with official court listings so you stay updated on daily hearing dates, courtroom listings, and newly issued orders.',
    },
    {
      icon: <BookOpen size={22} color="#C6A15B" />,
      title: 'Laws & Legal Resources',
      text: 'Easy access to major Indian laws, Bare Acts, and key legal provisions written and searchable in plain, simple language.',
    },
    {
      icon: <FileCheck2 size={22} color="#C6A15B" />,
      title: 'Organized Evidence',
      text: 'Keep digital evidence, certificates, and case documents neatly arranged, tamper-proof, and ready for court.',
    },
  ];

  return (
    <section className="india-core-section" aria-labelledby="india-heading">
      <div className="content-container">
        <div className="india-core-wrapper">
          <div className="india-core-header">
            <div className="india-badge-row">
              <Scale size={14} color="#C6A15B" />
              <span className="india-badge-text">MADE FOR INDIA</span>
            </div>
            <h2 id="india-heading" className="india-core-title">
              Built for Indian Law
            </h2>
            <p className="india-core-desc">
              Generic software from other countries does not fit how Indian courts and legal work actually function. BrilliusLaw was built from day one for Indian legal needs.
            </p>
          </div>

          <div className="india-points-grid">
            {points.map((p, i) => (
              <div key={i} className="india-point-card">
                <div className="india-point-icon-box">{p.icon}</div>
                <h3 className="india-point-title">{p.title}</h3>
                <p className="india-point-text">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
