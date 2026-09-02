import React from 'react';
import { Archive, Search, Download } from 'lucide-react';
import './DocStorageValue.css';

export const DocStorageValue: React.FC = () => {
  const cards = [
    {
      num: '01',
      title: 'Store',
      desc: 'Keep important documents in one place.',
      icon: <Archive size={22} />,
    },
    {
      num: '02',
      title: 'Find',
      desc: 'Quickly locate the document you are looking for.',
      icon: <Search size={22} />,
    },
    {
      num: '03',
      title: 'Retrieve',
      desc: 'Access your documents whenever you need them.',
      icon: <Download size={22} />,
    },
  ];

  return (
    <section className="doc-value-section" aria-labelledby="doc-value-heading">
      <div className="content-container">
        <div className="doc-value-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">CENTRALIZED ACCESS</span>
          </div>
          <h2 id="doc-value-heading" className="doc-value-title">
            Everything You Need, Easy to Find.
          </h2>
          <p className="doc-value-desc">
            Keep important legal documents organized in one place so you can find and access them when you need them.
          </p>
        </div>

        <div className="doc-value-grid">
          {cards.map((c, idx) => (
            <div key={idx} className="doc-val-card">
              <div className="val-card-top">
                <span className="val-pill">{c.num}</span>
                <div className="val-icon-wrap">{c.icon}</div>
              </div>
              <h3 className="val-card-title">{c.title}</h3>
              <p className="val-card-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
