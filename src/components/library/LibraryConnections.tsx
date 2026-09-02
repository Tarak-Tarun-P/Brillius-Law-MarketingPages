import React from 'react';
import { GitFork, Scale, ArrowDown } from 'lucide-react';
import './LibraryConnections.css';

export const LibraryConnections: React.FC = () => {
  return (
    <section className="library-connections-section" aria-labelledby="connections-heading">
      <div className="content-container">
        <div className="connections-header">
          <span className="connections-eyebrow">RELATIONSHIP VIEW</span>
          <h2 id="connections-heading" className="connections-title">
            See How Legal Information Connects.
          </h2>
          <p className="connections-desc">
            Explore direct connections between statutory provisions, cross-references, and authoritative judicial decisions through a clear, visual relationship view.
          </p>
        </div>

        {/* Visual Relationship Tree Card */}
        <div className="connections-visual-card">
          <div className="conn-card-topbar">
            <div className="conn-topbar-left">
              <GitFork size={16} color="#C6A15B" />
              <strong className="conn-topbar-title">Statutory &amp; Judicial Relationship View</strong>
            </div>
            <span className="conn-topbar-badge">Interactive Map</span>
          </div>

          <div className="conn-map-container">
            {/* Top Node: Root Provision */}
            <div className="root-node-box">
              <span className="node-badge">PRIMARY STATUTE PROVISION</span>
              <h3 className="node-title">The Indian Contract Act, 1872 — Section 10</h3>
              <p className="node-desc">"What agreements are contracts: Free consent, lawful consideration &amp; capacity"</p>
            </div>

            {/* Branch Lines SVG */}
            <div className="branch-lines-wrapper" aria-hidden="true">
              <svg viewBox="0 0 700 80" className="branch-svg">
                <path d="M 350 0 L 350 40 L 150 40 L 150 80" stroke="#C6A15B" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                <path d="M 350 0 L 350 40 L 550 40 L 550 80" stroke="#C6A15B" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
              </svg>
            </div>

            {/* Mid Tier: Connected Landmark Judgments */}
            <div className="mid-tier-grid">
              {/* Left Branch */}
              <div className="mid-branch-col">
                <div className="judgment-node-box">
                  <div className="j-node-top">
                    <Scale size={13} color="#C6A15B" />
                    <span>LANDMARK PRECEDENT</span>
                  </div>
                  <strong className="j-node-title">Satyabrata Ghose v. Mugneeram</strong>
                  <span className="j-node-cit">1954 SCR 310 • Supreme Court</span>
                  <p className="j-node-p">Valid contract formation &amp; scope of frustration</p>
                </div>

                <div className="node-down-arrow" aria-hidden="true">
                  <ArrowDown size={14} color="#C6A15B" />
                </div>

                <div className="sub-statute-node">
                  <span className="sub-tag">CONNECTED SECTION</span>
                  <strong className="sub-title">Section 56 (Frustration)</strong>
                </div>
              </div>

              {/* Right Branch */}
              <div className="mid-branch-col">
                <div className="judgment-node-box">
                  <div className="j-node-top">
                    <Scale size={13} color="#C6A15B" />
                    <span>LANDMARK PRECEDENT</span>
                  </div>
                  <strong className="j-node-title">Bhagwandas Goverdhandas Kedia</strong>
                  <span className="j-node-cit">1966 SCR (1) 656 • Supreme Court</span>
                  <p className="j-node-p">Offer and acceptance over telephone &amp; telex</p>
                </div>

                <div className="node-down-arrow" aria-hidden="true">
                  <ArrowDown size={14} color="#C6A15B" />
                </div>

                <div className="sub-statute-node">
                  <span className="sub-tag">CONNECTED SECTION</span>
                  <strong className="sub-title">Section 4 (Communication of Offer)</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
