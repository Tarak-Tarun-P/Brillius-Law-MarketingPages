'use client';

import React from 'react';
import Link from 'next/link';
import {
  Users,
  Briefcase,
  FileCheck,
  GitCompare,
  Search,
  Receipt,
  Building2,
  Landmark,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { SolutionsFinalCTA } from '../components/solutions/SolutionsFinalCTA';
import '../components/platform-audiences/AudiencePlatform.css';

export const PlatformFirmsView: React.FC = () => {
  const whyPoints = [
    {
      icon: <Building2 size={20} />,
      title: 'Unified Practice Operations',
      desc: 'Eliminate fragmented tools by managing clients, court matters, team permissions, and billing in one central firm workspace.',
    },
    {
      icon: <ShieldCheck size={20} />,
      title: 'Institutional Knowledge & Governance',
      desc: 'Retain case files, contract reviews, standard clauses, and approval histories securely within the firm repository.',
    },
    {
      icon: <Zap size={20} />,
      title: 'Real-Time Team Coordination',
      desc: 'Seamlessly allocate tasks across partners, briefing counsel, and associates with automated cause-list and WhatsApp alerts.',
    },
  ];

  const workflows = [
    { step: '01', name: 'Clients & KYC', desc: 'Onboard clients and establish corporate entity relationships.' },
    { step: '02', name: 'Matters & Teams', desc: 'Assign associates, track deadlines, and schedule court appearances.' },
    { step: '03', name: 'Document Work', desc: 'Draft pleadings, compare versions, and route files for approval.' },
    { step: '04', name: 'Research & AI', desc: 'Perform precedent searches and analyze voluminous contract files.' },
    { step: '05', name: 'Billing & Alerts', desc: 'Generate matter invoices and receive automated court reminders.' },
  ];

  const features = [
    {
      icon: <Users size={20} />,
      name: 'Client Management',
      desc: 'Manage retainers, KYC data, and connected matter histories in one verified directory.',
      href: '/client-management',
    },
    {
      icon: <Briefcase size={20} />,
      name: 'Case Management',
      desc: 'Track case milestones from petition filing to final court decree with timeline clarity.',
      href: '/cases',
    },
    {
      icon: <Building2 size={20} />,
      name: 'Firm & Team Management',
      desc: 'Role-based access controls for partners, associates, and administrative staff.',
      href: '/firm-management',
    },
    {
      icon: <Receipt size={20} />,
      name: 'Billing & Invoicing',
      desc: 'Track professional fees, retainers, disbursements, and generate professional invoices.',
      href: '/billing-invoicing',
    },
    {
      icon: <FileCheck size={20} />,
      name: 'Document Approvals & Drafts',
      desc: 'Coordinate draft approvals, senior reviews, and maintain comprehensive version audit trails.',
      href: '/case-drafts',
    },
    {
      icon: <GitCompare size={20} />,
      name: 'Compare & Review',
      desc: 'Spot contract revisions, redlines, and clause modifications in seconds.',
      href: '/compare-review',
    },
    {
      icon: <Search size={20} />,
      name: 'Legal Research',
      desc: 'Fast citation and precedent search across Supreme Court and High Court judgments.',
      href: '/legal-research',
    },
    {
      icon: <Landmark size={20} />,
      name: 'eCourts Sync',
      desc: 'Automated cause list tracking, case status synchronization, and hearing updates.',
      href: '/ecourts-sync',
    },
    {
      icon: <MessageSquare size={20} />,
      name: 'WhatsApp Alerts',
      desc: 'Instant notifications for cause list listings, urgent deadlines, and team updates.',
      href: '/whatsapp-alerts',
    },
  ];

  return (
    <main className="audience-platform-main">
      {/* 01. HERO */}
      <section className="ap-hero-section" aria-label="Law Firms Platform">
        <div className="ap-hero-glow glow-gold" aria-hidden="true" />
        <div className="ap-hero-glow glow-navy" aria-hidden="true" />

        <svg className="ap-hero-bg-svg" viewBox="0 0 1440 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <g stroke="#091526" strokeWidth="1" opacity="0.04" fill="none">
            <circle cx="720" cy="250" r="260" />
            <circle cx="720" cy="250" r="400" strokeDasharray="4 6" />
            <path d="M 120 450 Q 500 180 720 280 T 1320 160" strokeDasharray="6 6" />
          </g>
        </svg>

        <div className="content-container">
          <div className="ap-hero-content animate-fade-in-up">
            <div className="ap-hero-eyebrow-wrapper">
              <span className="ap-hero-eyebrow">BUILT FOR LAW FIRMS &amp; LEGAL TEAMS</span>
              <span className="ap-hero-eyebrow-line" aria-hidden="true" />
            </div>

            <h1 className="ap-hero-headline">
              One Unified Workspace for Your Entire Firm.
            </h1>

            <p className="ap-hero-description">
              A dedicated BrilliusLaw workspace for law firms and legal teams to organize clients, matters, teams, documents, research, approvals, and billing in one secure environment.
            </p>

            <div className="ap-hero-actions">
              <Link href="/coming-soon" className="btn-ap-primary">
                <span>Get Started</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/features" className="btn-ap-secondary">
                <span>Explore Features</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 02. WHY BRILLIUSLAW */}
      <section className="ap-why-section" aria-label="Why BrilliusLaw for Firms">
        <div className="content-container">
          <div className="ap-section-header">
            <span className="ap-section-tag">FIRM ADVANTAGE</span>
            <h2 className="ap-section-title">Built for Modern Firm Collaboration</h2>
            <p className="ap-section-subtext">
              How BrilliusLaw brings structure, security, and operational clarity to everyday practice.
            </p>
          </div>

          <div className="ap-why-grid">
            {whyPoints.map((pt, idx) => (
              <div key={idx} className="ap-why-card">
                <div className="ap-why-icon-box">{pt.icon}</div>
                <h3 className="ap-why-card-title">{pt.title}</h3>
                <p className="ap-why-card-desc">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. KEY WORKFLOWS */}
      <section className="ap-workflows-section" aria-label="Firm Workflows">
        <div className="content-container">
          <div className="ap-section-header">
            <span className="ap-section-tag">CONNECTED WORKFLOW</span>
            <h2 className="ap-section-title">How Work Moves Through Your Firm</h2>
            <p className="ap-section-subtext">
              From client intake and case assignments to research, drafting, review, and client billing.
            </p>
          </div>

          <div className="ap-workflow-steps-grid">
            {workflows.map((wf, idx) => (
              <div key={idx} className="ap-workflow-step-card">
                <span className="ap-step-num">STAGE {wf.step}</span>
                <h3 className="ap-step-name">{wf.name}</h3>
                <p className="ap-step-desc">{wf.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. FEATURES FOR FIRMS */}
      <section className="ap-features-section" aria-label="Firm Features">
        <div className="content-container">
          <div className="ap-section-header">
            <span className="ap-section-tag">CORE CAPABILITIES</span>
            <h2 className="ap-section-title">Features Designed for Firm Excellence</h2>
            <p className="ap-section-subtext">
              Explore the dedicated BrilliusLaw tools that power modern legal practices.
            </p>
          </div>

          <div className="ap-features-grid">
            {features.map((feat, idx) => (
              <Link key={idx} href={feat.href} className="ap-feature-card">
                <div className="ap-feature-card-top">
                  <div className="ap-feature-icon-box">{feat.icon}</div>
                  <h3 className="ap-feature-title">{feat.name}</h3>
                  <p className="ap-feature-desc">{feat.desc}</p>
                </div>
                <span className="ap-feature-cta">
                  <span>Explore {feat.name}</span>
                  <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 05. FINAL CTA */}
      <SolutionsFinalCTA />
    </main>
  );
};
