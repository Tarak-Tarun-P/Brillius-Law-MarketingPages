import React from 'react';
import {
  Search,
  Scale,
  Activity,
  Layers,
  HelpCircle,
  FileCheck,
  Bookmark,
} from 'lucide-react';
import './ResearchBenefits.css';

export const ResearchBenefits: React.FC = () => {
  const benefits = [
    {
      name: 'SEARCH',
      desc: 'Find judgments using keyword, party name, reporter citation, judge, or section.',
      icon: <Search size={20} />,
    },
    {
      name: 'UNDERSTAND',
      desc: 'Review key issues, party arguments, ratio decidendi principles, and executive summaries.',
      icon: <Scale size={20} />,
    },
    {
      name: 'CHECK',
      desc: 'See available treatment information including followed, distinguished, and overruled status.',
      icon: <Activity size={20} />,
    },
    {
      name: 'EXPLORE',
      desc: 'Find similar precedents and related authorities across connected legal propositions.',
      icon: <Layers size={20} />,
    },
    {
      name: 'ASK',
      desc: 'Ask targeted questions about a specific case using the documents connected to it.',
      icon: <HelpCircle size={20} />,
    },
    {
      name: 'SOURCE',
      desc: 'See the exact documents and page numbers behind case-specific answers.',
      icon: <FileCheck size={20} />,
    },
    {
      name: 'SAVE',
      desc: 'Keep useful research, judgments, and structured notes connected directly to a matter.',
      icon: <Bookmark size={20} />,
    },
  ];

  return (
    <section className="research-benefits-section" aria-labelledby="benefits-heading">
      <div className="content-container">
        <div className="benefits-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">CAPABILITIES OVERVIEW</span>
          </div>
          <h2 id="benefits-heading" className="benefits-title">
            Everything You Need to Follow Your Research.
          </h2>
          <p className="benefits-desc">
            Seven practical capabilities designed to keep your legal inquiries structured, accurate, and connected to your work.
          </p>
        </div>

        <div className="benefits-grid-7">
          {benefits.map((b, idx) => (
            <div key={idx} className="benefit-card-item">
              <div className="benefit-icon-wrapper">{b.icon}</div>
              <h3 className="benefit-name-h3">{b.name}</h3>
              <p className="benefit-desc-p">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
