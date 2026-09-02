import React from 'react';
import {
  Sliders,
  CheckCircle2,
  Briefcase,
  Archive,
  FileText,
  PenLine,
  Search,
  Receipt,
  CheckSquare,
} from 'lucide-react';
import './FirmCustomPermissions.css';

interface ModulePermission {
  module: string;
  icon: React.ReactNode;
  partner: 'Full' | 'View' | 'Restricted';
  seniorCounsel: 'Full' | 'View' | 'Restricted';
  associate: 'Full' | 'View' | 'Restricted';
  clerk: 'Full' | 'View' | 'Restricted';
}

export const FirmCustomPermissions: React.FC = () => {

  const permissions: ModulePermission[] = [
    {
      module: 'Cases & Matters',
      icon: <Briefcase size={15} />,
      partner: 'Full',
      seniorCounsel: 'Full',
      associate: 'Full',
      clerk: 'View',
    },
    {
      module: 'Evidence Vault',
      icon: <Archive size={15} />,
      partner: 'Full',
      seniorCounsel: 'Full',
      associate: 'Full',
      clerk: 'Restricted',
    },
    {
      module: 'Documents & Filings',
      icon: <FileText size={15} />,
      partner: 'Full',
      seniorCounsel: 'Full',
      associate: 'Full',
      clerk: 'View',
    },
    {
      module: 'Drafting Lab',
      icon: <PenLine size={15} />,
      partner: 'Full',
      seniorCounsel: 'Full',
      associate: 'Full',
      clerk: 'Restricted',
    },
    {
      module: 'Legal Research',
      icon: <Search size={15} />,
      partner: 'Full',
      seniorCounsel: 'Full',
      associate: 'Full',
      clerk: 'View',
    },
    {
      module: 'Billing & Invoicing',
      icon: <Receipt size={15} />,
      partner: 'Full',
      seniorCounsel: 'View',
      associate: 'Restricted',
      clerk: 'Restricted',
    },
    {
      module: 'Final Approvals',
      icon: <CheckSquare size={15} />,
      partner: 'Full',
      seniorCounsel: 'Full',
      associate: 'Restricted',
      clerk: 'Restricted',
    },
  ];

  return (
    <section className="firm-perms-section" aria-labelledby="perms-heading">
      <div className="content-container">
        <div className="perms-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">MODULAR PERMISSIONS</span>
          </div>
          <h2 id="perms-heading" className="perms-title">
            Set Access Around Your Firm’s Workflow
          </h2>
          <p className="perms-desc">
            Different teams work differently. Configure access around the responsibilities of each role and the way your practice operates.
          </p>
        </div>

        {/* Interactive Modular Permissions Matrix */}
        <div className="perms-matrix-card">
          <div className="matrix-topbar">
            <div className="matrix-title-group">
              <Sliders size={16} color="#C6A15B" />
              <strong className="matrix-title">Role Permissions Configuration</strong>
            </div>
            <span className="matrix-note">Standard Chamber Configuration</span>
          </div>

          <div className="matrix-table-wrapper">
            <div className="matrix-grid-header">
              <span className="col-module">Feature Module</span>
              <span className="col-role">Partner</span>
              <span className="col-role">Senior Counsel</span>
              <span className="col-role">Associate</span>
              <span className="col-role">Clerk</span>
            </div>

            <div className="matrix-rows-list">
              {permissions.map((p, idx) => (
                <div key={idx} className="matrix-grid-row">
                  <div className="cell-module">
                    <div className="module-icon-box">{p.icon}</div>
                    <span className="module-name">{p.module}</span>
                  </div>

                  <div className="cell-status">
                    <span className="status-badge full-badge">Full Control</span>
                  </div>

                  <div className="cell-status">
                    <span className={`status-badge ${p.seniorCounsel === 'Full' ? 'full-badge' : 'view-badge'}`}>
                      {p.seniorCounsel === 'Full' ? 'Full Control' : 'View Only'}
                    </span>
                  </div>

                  <div className="cell-status">
                    <span
                      className={`status-badge ${
                        p.associate === 'Full'
                          ? 'full-badge'
                          : p.associate === 'View'
                          ? 'view-badge'
                          : 'restr-badge'
                      }`}
                    >
                      {p.associate === 'Full' ? 'Edit & Work' : p.associate === 'View' ? 'View Only' : 'No Access'}
                    </span>
                  </div>

                  <div className="cell-status">
                    <span
                      className={`status-badge ${
                        p.clerk === 'View' ? 'view-badge' : 'restr-badge'
                      }`}
                    >
                      {p.clerk === 'View' ? 'View Only' : 'Restricted'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="matrix-footer">
            <CheckCircle2 size={13} color="#C6A15B" />
            <span>Permissions can be modified at any time to match your firm's administrative policies.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
