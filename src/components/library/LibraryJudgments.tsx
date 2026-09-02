import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import './LibraryJudgments.css';

export const LibraryJudgments: React.FC = () => {
  const judgments = [
    {
      title: 'Satyabrata Ghose v. Mugneeram Bangur & Co.',
      court: 'Supreme Court of India',
      bench: 'Mukherjea, B.K., J.',
      citation: '1954 SCR 310 • AIR 1954 SC 44',
      provision: 'Section 10 & Section 56 (Doctrine of Frustration)',
      holding: 'The Supreme Court held that Section 56 of the Contract Act lays down a positive rule of frustration and does not leave the matter to English common law doctrines.',
    },
    {
      title: 'Niranjan Shankar Golikari v. Century Spg. & Mfg. Co. Ltd.',
      court: 'Supreme Court of India',
      bench: 'Shelat, J.M., J.',
      citation: '1967 SCR (2) 378 • AIR 1967 SC 1098',
      provision: 'Section 27 (Agreement in Restraint of Trade)',
      holding: 'Negative covenants operating during the term of employment are valid and not in restraint of trade under Section 27 unless shown to be unconscionable.',
    },
    {
      title: 'Percept D\'Mark (India) Pvt. Ltd. v. Zaheer Khan & Anr.',
      court: 'Supreme Court of India',
      bench: 'Kapadia, S.H., J.',
      citation: '2006 (4) SCC 227 • (2006) 32 PTC 609',
      provision: 'Section 27 (Post-Termination Restraint)',
      holding: 'The rule against restraint of trade is absolute in India; any restrictive covenant operating post-contractual expiration is void under Section 27.',
    },
  ];

  return (
    <section className="library-judgments-section" aria-labelledby="judgments-heading">
      <div className="content-container">
        <div className="judgments-header">
          <span className="judgments-eyebrow">CONNECTED CASE LAW</span>
          <h2 id="judgments-heading" className="judgments-title">
            See Judgments Related to the Law.
          </h2>
          <p className="judgments-desc">
            Explore authoritative High Court and Supreme Court decisions connected directly to the statutory provisions you are researching.
          </p>
        </div>

        <div className="judgments-cards-grid">
          {judgments.map((j, idx) => (
            <div key={idx} className="judgment-box-card">
              <div className="judgment-top-row">
                <span className="court-pill">{j.court}</span>
                <span className="citation-pill">{j.citation}</span>
              </div>

              <h3 className="judgment-name">{j.title}</h3>

              <div className="provision-tag-row">
                <FileText size={13} color="#C6A15B" />
                <span className="provision-tag-text">{j.provision}</span>
              </div>

              <p className="judgment-holding-text">{j.holding}</p>

              <div className="judgment-card-footer">
                <span className="bench-text">Bench: {j.bench}</span>
                <span className="btn-view-judgment">
                  <span>Read Decision</span>
                  <ExternalLink size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
