import React from 'react';
import { ShieldCheck, FileCheck, CheckCircle2, UserCheck } from 'lucide-react';
import './EvidenceLimitations.css';

export const EvidenceLimitations: React.FC = () => {
  return (
    <section className="evidence-limitations-section" aria-labelledby="limitations-heading">
      <div className="content-container">
        <div className="evidence-limitations-card">
          <div className="limitations-top-row">
            <div className="limitations-badge">
              <ShieldCheck size={16} color="#C6A15B" />
              <span>STORAGE STANDARDS</span>
            </div>
            <span className="limitations-tag">Practice Guidelines</span>
          </div>

          <h2 id="limitations-heading" className="limitations-title">
            Storage Helps You Stay Organized.
          </h2>

          <p className="limitations-desc">
            BrilliusLaw helps you keep evidence organized and accessible. The responsibility for reviewing, verifying, and using the evidence remains with the legal professional.
          </p>

          <div className="limitations-points-grid">
            <div className="limitation-point">
              <FileCheck size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Clear Scans & Legibility</strong>
                <p className="point-desc">Ensure uploaded documents, contracts, and photographs are legible and complete before filing.</p>
              </div>
            </div>

            <div className="limitation-point">
              <CheckCircle2 size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Check Case References</strong>
                <p className="point-desc">Verify that exhibits correspond accurately with annexure lists in your petitions and applications.</p>
              </div>
            </div>

            <div className="limitation-point">
              <UserCheck size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Advocate Judgment</strong>
                <p className="point-desc">Counsel retains full control over evidentiary strategy, relevance determination, and presentation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
