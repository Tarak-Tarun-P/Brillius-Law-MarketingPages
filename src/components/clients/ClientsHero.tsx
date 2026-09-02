import React from 'react';
import { ArrowRight, ArrowDown, Search, Plus, Building2, User, CheckCircle2, Briefcase } from 'lucide-react';
import './ClientsHero.css';

export const ClientsHero: React.FC = () => {
  const scrollToHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('clients-how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sampleClients = [
    {
      name: 'ABC Technologies Pvt. Ltd.',
      type: 'Company',
      cases: '3 Cases',
      status: 'Active',
      icon: <Building2 size={15} color="#C6A15B" />,
    },
    {
      name: 'Ravi Kumar',
      type: 'Individual',
      cases: '1 Case',
      status: 'Active',
      icon: <User size={15} color="#091526" />,
    },
    {
      name: 'XYZ Industries Ltd.',
      type: 'Company',
      cases: '2 Cases',
      status: 'Active',
      icon: <Building2 size={15} color="#C6A15B" />,
    },
    {
      name: 'Priya Sharma',
      type: 'Individual',
      cases: '1 Case',
      status: 'Active',
      icon: <User size={15} color="#091526" />,
    },
  ];

  return (
    <section className="clients-hero-section" aria-label="Client Management Hero">
      {/* Ambient background glows */}
      <div className="clients-hero-glow glow-gold" aria-hidden="true" />
      <div className="clients-hero-glow glow-navy" aria-hidden="true" />

      <div className="content-container">
        <div className="clients-hero-grid">
          {/* LEFT: Headline & Description */}
          <div className="clients-hero-left animate-fade-in-up">
            <div className="clients-hero-eyebrow-wrapper">
              <span className="clients-hero-eyebrow">CLIENT MANAGEMENT</span>
              <span className="clients-hero-eyebrow-line" aria-hidden="true" />
            </div>

            <h1 className="clients-hero-headline">
              Keep Your Clients
              <br />
              and Their Matters
              <br />
              Organized.
            </h1>

            <p className="clients-hero-description">
              Add, manage, and keep important client information together — from basic details and KYC to notes and related cases.
            </p>

            <div className="clients-hero-actions">
              <a href="#get-started" className="btn-clients-primary">
                <span>Explore Client Management</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#clients-how-it-works" className="btn-clients-secondary" onClick={scrollToHowItWorks}>
                <span>See How It Works</span>
                <ArrowDown size={15} aria-hidden="true" />
              </a>
            </div>

            {/* Quick trust reassurance */}
            <div className="clients-trust-pills">
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Individuals & Companies</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>KYC & Notes Organized</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Connected Case Files</span>
              </span>
            </div>
          </div>

          {/* RIGHT: Realistic Client Management Directory Mockup */}
          <div className="clients-hero-right animate-fade-in">
            <div className="clients-directory-card">
              {/* Window Header */}
              <div className="directory-window-header">
                <div className="directory-window-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <span className="directory-window-title">BrilliusLaw // Clients Directory</span>
                <span className="directory-window-badge">Practice Hub</span>
              </div>

              {/* Toolbar Area */}
              <div className="directory-toolbar">
                <div className="directory-search-box">
                  <Search size={14} color="#94A3B8" />
                  <span className="search-placeholder">Search clients by name, PAN, or matter...</span>
                </div>
                <button type="button" className="btn-add-client-demo" tabIndex={-1}>
                  <Plus size={14} />
                  <span>Add Client</span>
                </button>
              </div>

              {/* Filter Tabs */}
              <div className="directory-filter-tabs">
                <span className="filter-tab active-filter">All Clients (24)</span>
                <span className="filter-tab">Active Clients (21)</span>
                <span className="filter-tab">Companies (14)</span>
                <span className="filter-tab">Individuals (10)</span>
              </div>

              {/* Table / List */}
              <div className="directory-table-list">
                {sampleClients.map((client, idx) => (
                  <div key={idx} className="directory-row-item">
                    <div className="client-identity-col">
                      <div className="client-icon-avatar">{client.icon}</div>
                      <div className="client-name-meta">
                        <strong className="client-full-name">{client.name}</strong>
                        <span className="client-type-tag">{client.type}</span>
                      </div>
                    </div>

                    <div className="client-cases-col">
                      <Briefcase size={12} color="#091526" />
                      <span>{client.cases}</span>
                    </div>

                    <div className="client-status-col">
                      <span className="client-status-badge status-active">
                        <span className="status-dot" />
                        <span>{client.status}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
