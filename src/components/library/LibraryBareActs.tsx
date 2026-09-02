import React from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';
import './LibraryBareActs.css';

export const LibraryBareActs: React.FC = () => {
  const actsList = [
    { name: 'The Constitution of India, 1950', category: 'Constitutional Law', sections: '395 Articles' },
    { name: 'The Indian Contract Act, 1872', category: 'Commercial & Civil Law', sections: '238 Sections', active: true },
    { name: 'The Code of Civil Procedure, 1908', category: 'Civil Litigation', sections: '158 Sections' },
    { name: 'The Commercial Courts Act, 2015', category: 'Commercial Law', sections: '23 Sections' },
    { name: 'The Arbitration & Conciliation Act, 1996', category: 'ADR & Arbitration', sections: '87 Sections' },
  ];

  return (
    <section className="library-acts-section" aria-labelledby="bare-acts-heading">
      <div className="content-container">
        <div className="acts-header">
          <span className="acts-eyebrow">BARE ACTS</span>
          <h2 id="bare-acts-heading" className="acts-title">
            Read the Law as It Is Written.
          </h2>
          <p className="acts-desc">
            Explore Bare Acts and read individual provisions without having to search through separate, unverified documents.
          </p>
        </div>

        {/* Bare Act Reader Visual Container */}
        <div className="acts-reader-card">
          {/* Act Directory Left Panel */}
          <div className="acts-sidebar">
            <div className="sidebar-header">
              <BookOpen size={15} color="#C6A15B" />
              <span>Available Bare Acts</span>
            </div>
            <div className="act-list">
              {actsList.map((act, idx) => (
                <div key={idx} className={`act-item ${act.active ? 'active-act' : ''}`}>
                  <div className="act-item-info">
                    <span className="act-item-cat">{act.category}</span>
                    <strong className="act-item-title">{act.name}</strong>
                    <span className="act-item-count">{act.sections}</span>
                  </div>
                  {act.active && <ChevronRight size={14} color="#C6A15B" />}
                </div>
              ))}
            </div>
          </div>

          {/* Section Reader Main Panel */}
          <div className="act-content-view">
            <div className="act-view-topbar">
              <div>
                <span className="act-num-pill">CENTRAL ACT NO. 09 OF 1872</span>
                <h3 className="act-view-title">The Indian Contract Act, 1872</h3>
              </div>
              <span className="act-status-badge">Official Statute Text</span>
            </div>

            <div className="act-section-body">
              <div className="section-head-box">
                <span className="section-label">CHAPTER II — OF CONTRACTS, VOIDABLE CONTRACTS AND VOID AGREEMENTS</span>
                <h4 className="section-name">Section 10 — What agreements are contracts</h4>
              </div>

              <div className="section-text-container">
                <p className="statute-text">
                  All agreements are contracts if they are made by the <span className="statute-highlight">free consent</span> of parties competent to contract, for a <span className="statute-highlight">lawful consideration</span> and with a <span className="statute-highlight">lawful object</span>, and are not hereby expressly declared to be void.
                </p>
                <p className="statute-text">
                  Nothing herein contained shall affect any law in force in India, and not hereby expressly repealed, by which any contract is required to be made in writing or in the presence of witnesses, or any law relating to the registration of documents.
                </p>
              </div>

              {/* Related Provision Pointers */}
              <div className="section-connections-row">
                <div className="connection-item">
                  <span className="conn-type">CROSS-REFERENCE</span>
                  <span className="conn-val">Section 11 (Who are competent to contract)</span>
                </div>
                <div className="connection-item">
                  <span className="conn-type">CROSS-REFERENCE</span>
                  <span className="conn-val">Section 14 ('Free consent' defined)</span>
                </div>
                <div className="connection-item">
                  <span className="conn-type">CROSS-REFERENCE</span>
                  <span className="conn-val">Section 23 (What considerations &amp; objects are lawful)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
