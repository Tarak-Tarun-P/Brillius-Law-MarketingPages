import React from 'react';
import { ShieldCheck, RefreshCw, FileCheck, CheckCircle2 } from 'lucide-react';
import './ClientsLimitations.css';

export const ClientsLimitations: React.FC = () => {
  return (
    <section className="clients-limitations-section" aria-labelledby="limitations-heading">
      <div className="content-container">
        <div className="clients-limitations-card">
          <div className="limitations-top-row">
            <div className="limitations-badge">
              <ShieldCheck size={16} color="#C6A15B" />
              <span>BEST PRACTICES</span>
            </div>
            <span className="limitations-tag">Practice Management Standards</span>
          </div>

          <h2 id="limitations-heading" className="limitations-title">
            Keep Client Information Up to Date.
          </h2>

          <p className="limitations-desc">
            Client information is most useful when it is current. Review and update important details and KYC records whenever contact details, addresses, or matter retainers change.
          </p>

          <div className="limitations-points-grid">
            <div className="limitation-point">
              <RefreshCw size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Keep Contact Data Current</strong>
                <p className="point-desc">Ensure phone numbers, official email IDs, and registered office addresses reflect the client's latest filings.</p>
              </div>
            </div>

            <div className="limitation-point">
              <FileCheck size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Verify Tax & KYC Identifiers</strong>
                <p className="point-desc">Cross-check PAN and GSTIN entries against client certificates before citing them in formal pleadings.</p>
              </div>
            </div>

            <div className="limitation-point">
              <CheckCircle2 size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Full Editorial Control</strong>
                <p className="point-desc">Edit, update, and manage your client records anytime to reflect new matters and ongoing instructions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
