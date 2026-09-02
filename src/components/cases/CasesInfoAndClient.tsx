import React from 'react';
import { FileText, Users, ArrowRight, Building2, Scale } from 'lucide-react';
import './CasesInfoAndClient.css';

export const CasesInfoAndClient: React.FC = () => {
  return (
    <section className="cases-info-client-section" aria-labelledby="info-client-heading">
      <div className="content-container">
        <div className="cases-info-client-header">
          <span className="ic-eyebrow">CASE DETAILS & CLIENT RELATIONSHIPS</span>
          <h2 id="info-client-heading" className="ic-title">
            Keep Important Case Information & Clients Connected.
          </h2>
          <p className="ic-desc">
            Organize the vital parameters of every matter and maintain a clear, direct connection between each case and the client it belongs to.
          </p>
        </div>

        <div className="ic-dual-grid">
          {/* LEFT: Case Details */}
          <div className="ic-card-box">
            <div className="ic-card-header">
              <div className="ic-icon-wrap">
                <FileText size={20} color="#C6A15B" />
              </div>
              <div>
                <span className="ic-tag">CASE DETAILS</span>
                <h3 className="ic-card-title">Keep Important Case Information Together.</h3>
              </div>
            </div>

            <p className="ic-card-text">
              Keep the key information about a matter organized so you can find what you need without searching through different places.
            </p>

            <div className="ic-fields-sample">
              <div className="sample-row">
                <span className="sr-label">Matter / Case Title</span>
                <strong className="sr-val">ABC Technologies vs. XYZ Ltd.</strong>
              </div>
              <div className="sample-row">
                <span className="sr-label">Court / Tribunal</span>
                <span className="sr-val">High Court of Delhi</span>
              </div>
              <div className="sample-row">
                <span className="sr-label">Case Number</span>
                <span className="sr-val font-mono">CS (COMM) 142/2026</span>
              </div>
              <div className="sample-row">
                <span className="sr-label">Matter Category & Priority</span>
                <span className="sr-val">Commercial Dispute • High</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Client Connection */}
          <div className="ic-card-box featured-ic-box">
            <div className="ic-card-header">
              <div className="ic-icon-wrap ic-icon-navy">
                <Users size={20} color="#091526" />
              </div>
              <div>
                <span className="ic-tag">CLIENT CONNECTION</span>
                <h3 className="ic-card-title">Connect Cases With Their Clients.</h3>
              </div>
            </div>

            <p className="ic-card-text">
              Link a case with the client it belongs to so the relationship between the client and their legal proceedings is easy to understand.
            </p>

            <div className="ic-connection-diagram">
              <div className="diagram-entity-box client-node">
                <Building2 size={18} color="#C6A15B" />
                <div>
                  <span className="node-tag">CLIENT</span>
                  <strong className="node-title">ABC Technologies Pvt. Ltd.</strong>
                </div>
              </div>

              <div className="diagram-arrow">
                <ArrowRight size={16} color="#C6A15B" />
                <span className="arrow-label">Connected Matter</span>
              </div>

              <div className="diagram-entity-box case-node">
                <Scale size={18} color="#091526" />
                <div>
                  <span className="node-tag">RELATED CASE</span>
                  <strong className="node-title">ABC Technologies vs. XYZ Ltd.</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
