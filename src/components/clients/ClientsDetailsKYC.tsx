import React from 'react';
import { User, Building2 } from 'lucide-react';
import './ClientsDetailsKYC.css';

export const ClientsDetailsKYC: React.FC = () => {
  return (
    <section className="clients-details-kyc-section" aria-labelledby="details-kyc-heading">
      <div className="content-container">
        <div className="details-kyc-header">
          <span className="details-kyc-eyebrow">CLIENT INFORMATION & KYC</span>
          <h2 id="details-kyc-heading" className="details-kyc-title">
            Keep Client & KYC Details Organized.
          </h2>
          <p className="details-kyc-desc">
            Organize personal details, corporate tax identifiers, and official addresses across both individual and business clients.
          </p>
        </div>

        <div className="details-kyc-dual-grid">
          {/* Left: Individual Client Record */}
          <div className="kyc-type-card">
            <div className="kyc-card-top">
              <div className="kyc-icon-avatar">
                <User size={22} color="#091526" />
              </div>
              <div>
                <span className="kyc-badge">INDIVIDUAL CLIENT</span>
                <h3 className="kyc-entity-name">Personal & Identity Details</h3>
              </div>
            </div>

            <p className="kyc-card-intro">
              Manage personal contact information, permanent account numbers, and residential addresses for individual litigants and retainers.
            </p>

            <div className="kyc-fields-sample">
              <div className="kyc-field-row">
                <span className="field-lbl">Full Name</span>
                <span className="field-val">Ravi Kumar</span>
              </div>
              <div className="kyc-field-row">
                <span className="field-lbl">Individual PAN</span>
                <span className="field-val font-mono">ABCDE1234F</span>
              </div>
              <div className="kyc-field-row">
                <span className="field-lbl">Contact Phone</span>
                <span className="field-val">+91 98112 34567</span>
              </div>
              <div className="kyc-field-row">
                <span className="field-lbl">Residential Address</span>
                <span className="field-val">Sector 14, Chandigarh, UT</span>
              </div>
            </div>
          </div>

          {/* Right: Company / Corporate Client Record */}
          <div className="kyc-type-card featured-kyc-card">
            <div className="kyc-card-top">
              <div className="kyc-icon-avatar avatar-gold">
                <Building2 size={22} color="#C6A15B" />
              </div>
              <div>
                <span className="kyc-badge badge-gold">COMPANY CLIENT</span>
                <h3 className="kyc-entity-name">Business & Tax Details</h3>
              </div>
            </div>

            <p className="kyc-card-intro">
              Organize corporate registration data, GSTIN numbers for registered businesses, corporate PAN, and official registered offices.
            </p>

            <div className="kyc-fields-sample">
              <div className="kyc-field-row">
                <span className="field-lbl">Company Name</span>
                <span className="field-val font-bold">XYZ Industries Ltd.</span>
              </div>
              <div className="kyc-field-row">
                <span className="field-lbl">Company GSTIN</span>
                <span className="field-val font-mono">27AAACX1234F1Z8</span>
              </div>
              <div className="kyc-field-row">
                <span className="field-lbl">Company PAN</span>
                <span className="field-val font-mono">AAACX1234F</span>
              </div>
              <div className="kyc-field-row">
                <span className="field-lbl">Registered Office</span>
                <span className="field-val">Nariman Point, Mumbai, MH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
