import React from 'react';
import { PlusCircle, Link, Save, ArrowRight } from 'lucide-react';
import './EvidenceStore.css';

export const EvidenceStore: React.FC = () => {
  return (
    <section className="evidence-store-section" aria-labelledby="store-evidence-heading">
      <div className="content-container">
        <div className="store-header">
          <span className="store-eyebrow">STORE EVIDENCE</span>
          <h2 id="store-evidence-heading" className="store-title">
            Keep Important Evidence in One Place.
          </h2>
          <p className="store-desc">
            Add evidence related to a case and keep it organized so it is easier to find later.
          </p>
        </div>

        {/* 3-Step Visual: ADD EVIDENCE -> SELECT CASE -> SAVE */}
        <div className="store-flow-card">
          <div className="store-flow-step">
            <div className="store-step-icon">
              <PlusCircle size={22} color="#091526" />
            </div>
            <div className="store-step-text">
              <span className="store-step-num">01</span>
              <h3 className="store-step-title">ADD EVIDENCE</h3>
              <p className="store-step-desc">Upload or attach the relevant documents, records, or files.</p>
            </div>
          </div>

          <div className="store-arrow-col" aria-hidden="true">
            <ArrowRight size={20} color="#C6A15B" />
          </div>

          <div className="store-flow-step featured-store-step">
            <div className="store-step-icon">
              <Link size={22} color="#C6A15B" />
            </div>
            <div className="store-step-text">
              <span className="store-step-num text-gold">02</span>
              <h3 className="store-step-title">CONNECT CASE</h3>
              <p className="store-step-desc">Select and link the specific legal matter the file belongs to.</p>
            </div>
          </div>

          <div className="store-arrow-col" aria-hidden="true">
            <ArrowRight size={20} color="#C6A15B" />
          </div>

          <div className="store-flow-step">
            <div className="store-step-icon">
              <Save size={22} color="#091526" />
            </div>
            <div className="store-step-text">
              <span className="store-step-num">03</span>
              <h3 className="store-step-title">SAVE & STORE</h3>
              <p className="store-step-desc">Preserve the evidence securely on file for future case review.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
