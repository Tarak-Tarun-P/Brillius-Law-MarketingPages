import React from 'react';
import { ArrowDown, BookOpen, ChevronRight } from 'lucide-react';
import './ResearchSimilarPrecedents.css';

interface PrecedentItem {
  id: string;
  name: string;
  citation: string;
  court: string;
  bench: string;
  principle: string;
  statute: string;
}

export const ResearchSimilarPrecedents: React.FC = () => {
  const similarCases: PrecedentItem[] = [
    {
      id: 'case-a',
      name: 'K.B. Saha & Sons Pvt. Ltd. v. Development Consultant Ltd.',
      citation: '(2008) 8 SCC 564',
      court: 'Supreme Court of India',
      bench: 'Tarun Chatterjee, Dalveer Bhandari, JJ.',
      principle: 'Five principles governing collateral purpose admissibility under the Registration Act.',
      statute: 'Registration Act § 49',
    },
    {
      id: 'case-b',
      name: 'Ramesh Chand Ardawatiya v. Anil Panjwani',
      citation: '(2003) 7 SCC 350',
      court: 'Supreme Court of India',
      bench: 'R.C. Lahoti, Ashok Bhan, JJ.',
      principle: 'Doctrine of part performance and nature of lawful possession under contract.',
      statute: 'Transfer of Property Act § 53A',
    },
    {
      id: 'case-c',
      name: 'B. Santoshamma & Anr. v. D. Sarala & Anr.',
      citation: '(2020) 19 SCC 80',
      court: 'Supreme Court of India',
      bench: 'Navin Sinha, Indira Banerjee, JJ.',
      principle: 'Discretionary parameters and readiness and willingness requirements in specific performance suits.',
      statute: 'Specific Relief Act § 16(c)',
    },
  ];

  return (
    <section className="similar-precedents-section" aria-labelledby="precedents-heading">
      <div className="content-container">
        <div className="precedents-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">RELATED AUTHORITIES</span>
          </div>
          <h2 id="precedents-heading" className="precedents-title">
            Find Related Decisions.
          </h2>
          <p className="precedents-desc">
            Explore similar precedents and citations that can help you continue your research across connected legal propositions.
          </p>
        </div>

        {/* Precedent Flow Diagram / Visual */}
        <div className="precedents-flow-container">
          {/* Current Root Judgment */}
          <div className="current-judgment-card">
            <div className="current-badge-row">
              <span className="current-label">CURRENT JUDGMENT UNDER REVIEW</span>
              <span className="current-court">Supreme Court of India</span>
            </div>
            <h3 className="current-case-name">Ameer Minhaj v. Dierdre Elizabeth (Wright) Steen &amp; Ors.</h3>
            <div className="current-meta-row">
              <span className="current-cit">(2018) 7 SCC 639</span>
              <span className="current-topic">Topic: Specific Performance &amp; Unregistered Sale Agreements</span>
            </div>
          </div>

          {/* Flow Connector Arrow */}
          <div className="flow-connector">
            <div className="connector-line" />
            <div className="connector-badge">
              <ArrowDown size={14} color="#C6A15B" />
              <span>SIMILAR PRECEDENTS &amp; CONNECTED RULINGS</span>
            </div>
            <div className="connector-line" />
          </div>

          {/* Similar Precedents List */}
          <div className="similar-cases-grid">
            {similarCases.map((c, idx) => (
              <div key={c.id} className="similar-case-card">
                <div className="card-top-row">
                  <span className="case-marker">Case 0{idx + 1}</span>
                  <span className="case-court-tag">{c.court}</span>
                </div>
                <h4 className="case-title-h4">{c.name}</h4>
                <span className="case-cit-str">{c.citation}</span>
                <p className="case-principle-p">{c.principle}</p>
                <div className="case-card-bottom">
                  <span className="statute-pill">
                    <BookOpen size={11} />
                    <span>{c.statute}</span>
                  </span>
                  <span className="view-case-link">
                    <span>Explore Decision</span>
                    <ChevronRight size={12} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
