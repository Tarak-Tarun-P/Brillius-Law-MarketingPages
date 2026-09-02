import React, { useState } from 'react';
import { Building2, User, FileText, ShieldCheck, Briefcase, MapPin, Mail, Phone, ChevronRight } from 'lucide-react';
import './ClientsProfileSection.css';

export const ClientsProfileSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'details' | 'kyc' | 'notes' | 'cases'>('details');

  return (
    <section className="clients-profile-section" aria-labelledby="profile-heading">
      <div className="content-container">
        <div className="clients-profile-header">
          <span className="profile-eyebrow">CLIENT PROFILE VIEW</span>
          <h2 id="profile-heading" className="profile-title">
            Everything Important, Together.
          </h2>
          <p className="profile-desc">
            Open a client to view the information associated with them and the matters connected to their legal work.
          </p>
        </div>

        {/* Master Profile Container */}
        <div className="client-profile-card">
          {/* Profile Header Bar */}
          <div className="profile-top-bar">
            <div className="profile-identity">
              <div className="profile-avatar-box">
                <Building2 size={24} color="#091526" />
              </div>
              <div>
                <div className="profile-title-row">
                  <h3 className="profile-client-name">ABC Technologies Pvt. Ltd.</h3>
                  <span className="client-type-badge corporate-badge">Corporate Client</span>
                  <span className="client-status-badge active-badge">Active</span>
                </div>
                <span className="profile-client-id">Client ID: BL-CORP-2026-089</span>
              </div>
            </div>

            <div className="profile-action-buttons">
              <span className="profile-btn-outline">Edit Profile</span>
              <span className="profile-btn-gold">Add Matter</span>
            </div>
          </div>

          {/* Profile Navigation Tabs */}
          <div className="profile-tabs-nav" role="tablist" aria-label="Client Profile Details">
            <button
              type="button"
              className={`profile-tab-btn ${activeTab === 'details' ? 'active-tab' : ''}`}
              onClick={() => setActiveTab('details')}
              role="tab"
              aria-selected={activeTab === 'details'}
            >
              <User size={14} />
              <span>Contact Details</span>
            </button>

            <button
              type="button"
              className={`profile-tab-btn ${activeTab === 'kyc' ? 'active-tab' : ''}`}
              onClick={() => setActiveTab('kyc')}
              role="tab"
              aria-selected={activeTab === 'kyc'}
            >
              <ShieldCheck size={14} />
              <span>KYC & Tax</span>
            </button>

            <button
              type="button"
              className={`profile-tab-btn ${activeTab === 'notes' ? 'active-tab' : ''}`}
              onClick={() => setActiveTab('notes')}
              role="tab"
              aria-selected={activeTab === 'notes'}
            >
              <FileText size={14} />
              <span>Client Notes</span>
            </button>

            <button
              type="button"
              className={`profile-tab-btn ${activeTab === 'cases' ? 'active-tab' : ''}`}
              onClick={() => setActiveTab('cases')}
              role="tab"
              aria-selected={activeTab === 'cases'}
            >
              <Briefcase size={14} />
              <span>Related Cases (3)</span>
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="profile-tab-content">
            {/* 1. Client Details Tab */}
            {activeTab === 'details' && (
              <div className="tab-pane-grid">
                <div className="info-field-card">
                  <span className="info-label">Primary Contact Person</span>
                  <strong className="info-value">Vikramaditya Mehta (Director - Legal)</strong>
                </div>
                <div className="info-field-card">
                  <span className="info-label">Official Email</span>
                  <div className="info-val-with-icon">
                    <Mail size={13} color="#C6A15B" />
                    <span className="info-value">legal@abctechnologies.com</span>
                  </div>
                </div>
                <div className="info-field-card">
                  <span className="info-label">Phone Number</span>
                  <div className="info-val-with-icon">
                    <Phone size={13} color="#C6A15B" />
                    <span className="info-value">+91 98201 45678</span>
                  </div>
                </div>
                <div className="info-field-card">
                  <span className="info-label">Registered Office</span>
                  <div className="info-val-with-icon">
                    <MapPin size={13} color="#C6A15B" />
                    <span className="info-value">Cyber City, Tower B, Level 8, Gurugram, Haryana</span>
                  </div>
                </div>
              </div>
            )}

            {/* 2. KYC Tab */}
            {activeTab === 'kyc' && (
              <div className="tab-pane-grid">
                <div className="info-field-card">
                  <span className="info-label">Company PAN</span>
                  <strong className="info-value">AAACA1234F</strong>
                </div>
                <div className="info-field-card">
                  <span className="info-label">GSTIN (Registered Business)</span>
                  <strong className="info-value">06AAACA1234F1Z5</strong>
                </div>
                <div className="info-field-card">
                  <span className="info-label">Corporate Identification Number (CIN)</span>
                  <strong className="info-value">U72200HR2018PTC078901</strong>
                </div>
                <div className="info-field-card">
                  <span className="info-label">KYC Record Status</span>
                  <strong className="info-value text-gold">Verified & On File</strong>
                </div>
              </div>
            )}

            {/* 3. Notes Tab */}
            {activeTab === 'notes' && (
              <div className="notes-list-pane">
                <div className="note-card-item">
                  <div className="note-item-header">
                    <span className="note-author">Adv. R. K. Sharma</span>
                    <span className="note-date">Yesterday at 4:30 PM</span>
                  </div>
                  <p className="note-body">
                    "Discussed board resolution regarding the shareholder dispute. Director confirmed that all board meeting minutes and share subscription receipts will be delivered by Friday morning."
                  </p>
                </div>

                <div className="note-card-item">
                  <div className="note-item-header">
                    <span className="note-author">Associate Counsel</span>
                    <span className="note-date">24 Aug 2026</span>
                  </div>
                  <p className="note-body">
                    "Reviewed company registration certificates and updated registered office address in client master profile."
                  </p>
                </div>
              </div>
            )}

            {/* 4. Related Cases Tab (Linked to Case Management) */}
            {activeTab === 'cases' && (
              <div className="related-cases-pane">
                <a href="#/features/cases" className="case-row-card case-link-card" title="Open Case Details">
                  <div className="case-row-left">
                    <div className="case-status-indicator indicator-green" />
                    <div>
                      <strong className="case-item-title">ABC Technologies vs. Sigma Infrastructure Ltd.</strong>
                      <span className="case-item-meta">High Court of Delhi • Commercial Suit No. 142/2026</span>
                    </div>
                  </div>
                  <div className="case-row-right">
                    <span className="case-status-pill pill-active">Active Matter</span>
                    <span className="btn-case-deep-link">
                      <span>View Case</span>
                      <ChevronRight size={13} />
                    </span>
                  </div>
                </a>

                <a href="#/features/cases" className="case-row-card case-link-card" title="Open Case Details">
                  <div className="case-row-left">
                    <div className="case-status-indicator indicator-gold" />
                    <div>
                      <strong className="case-item-title">NCLT Section 9 Insolvency Defense</strong>
                      <span className="case-item-meta">NCLT New Delhi Bench III • CP (IB) 312/2026</span>
                    </div>
                  </div>
                  <div className="case-row-right">
                    <span className="case-status-pill pill-pending">In Hearing</span>
                    <span className="btn-case-deep-link">
                      <span>View Case</span>
                      <ChevronRight size={13} />
                    </span>
                  </div>
                </a>

                <a href="#/features/cases" className="case-row-card case-link-card" title="Open Case Details">
                  <div className="case-row-left">
                    <div className="case-status-indicator indicator-slate" />
                    <div>
                      <strong className="case-item-title">Trademark Opposition & Brand Registration</strong>
                      <span className="case-item-meta">Trade Marks Registry, New Delhi • Class 42</span>
                    </div>
                  </div>
                  <div className="case-row-right">
                    <span className="case-status-pill pill-closed">Pending Hearing</span>
                    <span className="btn-case-deep-link">
                      <span>View Case</span>
                      <ChevronRight size={13} />
                    </span>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
