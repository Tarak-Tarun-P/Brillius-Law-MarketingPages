import React from 'react';
import { ArrowDown } from 'lucide-react';
import './ResearchTrail.css';

export const ResearchTrail: React.FC = () => {
  return (
    <section className="research-trail-section" aria-labelledby="trail-heading">
      <div className="content-container">
        <div className="trail-header">
          <span className="trail-eyebrow">FOLLOW THE LEGAL TRAIL</span>
          <h2 id="trail-heading" className="trail-title">
            Keep Following the Research.
          </h2>
          <p className="trail-desc">
            Move naturally from an initial issue to landmark decisions, follow cited precedents, and trace connected statutory provisions without losing your research context.
          </p>
        </div>

        {/* Visual Citation Trail Box */}
        <div className="trail-visual-container">
          {/* Stage 1: Legal Issue */}
          <div className="trail-node-box node-issue">
            <span className="node-step-pill">01 // STARTING ISSUE</span>
            <strong className="node-title">Admissibility of Unregistered Agreements to Sell in Specific Performance</strong>
            <span className="node-sub">Research question regarding Section 49 Proviso of Registration Act</span>
          </div>

          <div className="trail-connector" aria-hidden="true">
            <ArrowDown size={18} color="#C6A15B" />
          </div>

          {/* Stage 2: Landmark Decision */}
          <div className="trail-node-box node-case">
            <div className="node-top-row">
              <span className="node-step-pill">02 // PRIMARY AUTHORITY</span>
              <span className="node-cit">Supreme Court • (2018) 7 SCC 639</span>
            </div>
            <strong className="node-title">Ameer Minhaj v. Dierdre Elizabeth (Wright) Steen</strong>
            <p className="node-text">
              Direct holding confirming that an unregistered sale agreement is admissible to prove contract formation for specific relief under Section 49 Proviso.
            </p>
          </div>

          <div className="trail-connector" aria-hidden="true">
            <ArrowDown size={18} color="#C6A15B" />
          </div>

          {/* Stage 3: Cited Precedents & Connected Provisions */}
          <div className="trail-branch-row">
            <div className="trail-node-box branch-node">
              <div className="node-top-row">
                <span className="node-step-pill">03A // CITED PRECEDENT</span>
                <span className="node-cit">(2008) 8 SCC 564</span>
              </div>
              <strong className="node-title">K.B. Saha &amp; Sons v. Development Consultant</strong>
              <p className="node-text">Five principles on collateral purpose exception under Section 49.</p>
            </div>

            <div className="trail-node-box branch-node">
              <div className="node-top-row">
                <span className="node-step-pill">03B // STATUTORY PROVISIONS</span>
                <span className="node-cit">Central Statutes</span>
              </div>
              <strong className="node-title">Section 49 Proviso &amp; Section 53A</strong>
              <p className="node-text">Registration Act, 1908 &amp; Transfer of Property Act, 1882.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
