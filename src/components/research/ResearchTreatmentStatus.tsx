import React, { useState } from 'react';
import { CheckCircle, AlertTriangle, XCircle, Info, Sparkles } from 'lucide-react';
import './ResearchTreatmentStatus.css';

interface TreatmentCategory {
  id: string;
  tag: string;
  badgeClass: string;
  icon: React.ReactNode;
  label: string;
  explanation: string;
  exampleCase: string;
  exampleCitation: string;
  exampleRuling: string;
}

export const ResearchTreatmentStatus: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('followed');

  const treatments: TreatmentCategory[] = [
    {
      id: 'followed',
      tag: 'Followed',
      badgeClass: 'badge-followed',
      icon: <CheckCircle size={15} />,
      label: 'Directly Adopted & Followed',
      explanation: 'Subsequent courts have agreed with the legal principle and applied it to similar facts.',
      exampleCase: 'Khushal Rao v. State of Bombay (1958 SCR 552)',
      exampleCitation: 'Followed in Atbir v. Govt. of NCT of Delhi (2013) 12 SCC 298',
      exampleRuling: 'Principles governing reliance on dying declarations followed and reaffirmed by the Supreme Court.',
    },
    {
      id: 'distinguished',
      tag: 'Distinguished',
      badgeClass: 'badge-distinguished',
      icon: <Info size={15} />,
      label: 'Distinguished on Facts',
      explanation: 'Court found the factual scenario or statutory provision distinguishable, limiting direct application.',
      exampleCase: 'State of Haryana v. Bhajan Lal (1992 Supp (1) SCC 335)',
      exampleCitation: 'Distinguished in Neeharika Infrastructure (2021) 19 SCC 401',
      exampleRuling: 'Distinguished regarding blanket interim orders staying investigation under Section 482 CrPC.',
    },
    {
      id: 'overruled',
      tag: 'Overruled',
      badgeClass: 'badge-overruled',
      icon: <XCircle size={15} />,
      label: 'Overruled by Larger Bench',
      explanation: 'A larger bench or subsequent constitutional decision has set aside or overturned the legal rule.',
      exampleCase: 'ADM Jabalpur v. Shivkant Shukla (1976) 2 SCC 521',
      exampleCitation: 'Overruled in K.S. Puttaswamy (2017) 10 SCC 1 (9-Judge Bench)',
      exampleRuling: 'Held that fundamental rights under Article 21 cannot be suspended even during a proclamation of emergency.',
    },
    {
      id: 'applied',
      tag: 'Applied',
      badgeClass: 'badge-applied',
      icon: <Sparkles size={15} />,
      label: 'Applied to Related Legal Framework',
      explanation: 'The underlying doctrine was extended and applied to analogous statutory questions.',
      exampleCase: 'Ameer Minhaj v. Dierdre Elizabeth (2018) 7 SCC 639',
      exampleCitation: 'Applied in High Court Commercial Division Appeals (2022)',
      exampleRuling: 'Admissibility of unregistered contracts for specific performance relief applied to commercial lease agreements.',
    },
    {
      id: 'explained',
      tag: 'Explained',
      badgeClass: 'badge-explained',
      icon: <AlertTriangle size={15} />,
      label: 'Judicially Clarified & Explained',
      explanation: 'Subsequent bench clarified the precise scope and operative limits of the earlier judgment.',
      exampleCase: 'Lalita Kumari v. Govt. of U.P. (2014) 2 SCC 1',
      exampleCitation: 'Explained in State of Telangana v. Habib Abdullah (2017)',
      exampleRuling: 'Clarified scope of preliminary inquiry prior to FIR registration in specific commercial/matrimonial matters.',
    },
  ];

  const activeTreatment = treatments.find((t) => t.id === selectedTag) || treatments[0];

  return (
    <section className="treatment-status-section" aria-labelledby="treatment-heading">
      <div className="content-container">
        <div className="treatment-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">PRECEDENTIAL TREATMENT</span>
          </div>
          <h2 id="treatment-heading" className="treatment-title">
            Check How a Judgment Has Been Treated.
          </h2>
          <p className="treatment-desc">
            See the available treatment information for a judgment before relying on it in your research.
          </p>
        </div>

        {/* Treatment Visual Interactive Display */}
        <div className="treatment-interactive-box">
          {/* Treatment Category Filter Chips */}
          <div className="treatment-chips-row" role="tablist" aria-label="Treatment categories">
            {treatments.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selectedTag === item.id}
                className={`treatment-btn-pill ${item.badgeClass} ${selectedTag === item.id ? 'active-pill' : ''}`}
                onClick={() => setSelectedTag(item.id)}
              >
                {item.icon}
                <span>{item.tag}</span>
              </button>
            ))}
          </div>

          {/* Treatment Detail Card */}
          <div className="treatment-detail-card animate-fade-in" key={activeTreatment.id}>
            <div className="treatment-detail-top">
              <div className="treatment-tag-box">
                <span className={`tag-badge ${activeTreatment.badgeClass}`}>
                  {activeTreatment.icon}
                  <span>{activeTreatment.tag}</span>
                </span>
                <strong className="treatment-label-text">{activeTreatment.label}</strong>
              </div>
              <span className="status-mode-note">Treatment Category</span>
            </div>

            <p className="treatment-explanation-text">{activeTreatment.explanation}</p>

            <div className="treatment-example-container">
              <div className="example-row">
                <span className="example-sub-label">PRIMARY JUDGMENT:</span>
                <strong className="example-case-name">{activeTreatment.exampleCase}</strong>
              </div>
              <div className="example-row">
                <span className="example-sub-label">CITING AUTHORITY:</span>
                <span className="example-citing-str">{activeTreatment.exampleCitation}</span>
              </div>
              <div className="example-ruling-box">
                <p className="example-ruling-text">{activeTreatment.exampleRuling}</p>
              </div>
            </div>
          </div>

          {/* Required Disclaimer */}
          <div className="treatment-disclaimer-row">
            <Info size={14} color="#64748B" />
            <p className="treatment-disclaimer-text">
              Treatment status reflects available citing information in the platform. It provides helpful research context and does not substitute for independent counsel verification of good law.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
