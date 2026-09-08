'use client';

import React from 'react';
import Link from 'next/link';
import {
  Building2,
  Briefcase,
  Building,
  Users2,
  GraduationCap,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
} from 'lucide-react';
import { ClientManagementVisual } from '../components/features/visuals/ClientManagementVisual';
import { CaseManagementVisual } from '../components/features/visuals/CaseManagementVisual';
import { DocumentApprovalsVisual } from '../components/features/visuals/DocumentApprovalsVisual';
import { LawLibraryVisual } from '../components/features/visuals/LawLibraryVisual';
import { SolutionsFinalCTA } from '../components/solutions/SolutionsFinalCTA';
import '../components/who-we-serve/WhoWeServe.css';

export const WhoWeServeView: React.FC = () => {
  return (
    <main className="who-we-serve-main">
      {/* ============================================================== */}
      {/* 01. HERO SECTION                                               */}
      {/* ============================================================== */}
      <section className="wws-hero-section" aria-label="Who BrilliusLaw Is Built For">
        <div className="wws-hero-glow glow-gold" aria-hidden="true" />
        <div className="wws-hero-glow glow-navy" aria-hidden="true" />

        {/* Ambient Architectural Geometry Background */}
        <svg
          className="wws-hero-bg-svg"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g stroke="#091526" strokeWidth="1" opacity="0.04" fill="none">
            <circle cx="720" cy="300" r="280" />
            <circle cx="720" cy="300" r="420" strokeDasharray="4 6" />
            <path d="M 160 500 Q 480 220 720 320 T 1280 200" strokeDasharray="6 6" />
            <circle cx="160" cy="500" r="18" />
            <circle cx="720" cy="320" r="24" strokeWidth="1.5" />
            <circle cx="1280" cy="200" r="20" />
          </g>
        </svg>

        <div className="content-container">
          <div className="wws-hero-content animate-fade-in-up">
            <div className="wws-hero-eyebrow-wrapper">
              <span className="wws-hero-eyebrow">BUILT FOR MODERN LEGAL WORK</span>
              <span className="wws-hero-eyebrow-line" aria-hidden="true" />
            </div>

            <h1 className="wws-hero-headline">
              Who BrilliusLaw Is Built For
              <span className="wws-hero-headline-accent">
                People • Teams • Organizations
              </span>
            </h1>

            <p className="wws-hero-description">
              One legal platform designed around the people, teams, and organizations involved in modern legal work.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 02. STICKY AUDIENCE QUICK-JUMP RIBBON                          */}
      {/* ============================================================== */}
      <nav className="wws-audience-nav-section" aria-label="Audience Quick Navigation">
        <div className="content-container">
          <div className="wws-nav-track">
            <a href="#law-firms" className="wws-nav-pill">
              <span className="wws-nav-pill-num">01</span>
              <span>Law Firms</span>
            </a>
            <a href="#advocates-lawyers" className="wws-nav-pill">
              <span className="wws-nav-pill-num">02</span>
              <span>Advocates &amp; Lawyers</span>
            </a>
            <a href="#corporate-legal-teams" className="wws-nav-pill">
              <span className="wws-nav-pill-num">03</span>
              <span>Corporate Legal Teams</span>
            </a>
            <a href="#corporates-and-counsel" className="wws-nav-pill">
              <span className="wws-nav-pill-num">04</span>
              <span>Corporates &amp; Legal Counsel</span>
            </a>
            <a href="#law-students" className="wws-nav-pill">
              <span className="wws-nav-pill-num">05</span>
              <span>Law Students</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ============================================================== */}
      {/* 03. AUDIENCE 01 — LAW FIRMS                                    */}
      {/* ============================================================== */}
      <section id="law-firms" className="wws-section bg-subtle-ivory" aria-labelledby="firms-heading">
        <div className="content-container">
          <div className="wws-section-grid">
            <div className="wws-content-col">
              <div className="wws-audience-badge">
                <Building2 size={14} />
                <span>01 — Law Firms</span>
              </div>

              <h2 id="firms-heading" className="wws-section-title">
                Law Firms
              </h2>

              <p className="wws-section-desc">
                Manage clients, matters, teams, documents, research, drafting, billing, approvals, and day-to-day firm operations in one organized workspace.
              </p>

              <span className="wws-features-subheading">Relevant Platform Capabilities</span>
              <div className="wws-feature-tags">
                <Link href="/client-management" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Client Management
                </Link>
                <Link href="/cases" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Case Management
                </Link>
                <Link href="/hearings" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Hearings &amp; Calendar
                </Link>
                <Link href="/evidence" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Evidence &amp; Exhibits
                </Link>
                <Link href="/document-storage" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Document Management
                </Link>
                <Link href="/features" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Document Approvals
                </Link>
                <Link href="/drafting-lab" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Drafting Lab
                </Link>
                <Link href="/case-drafts" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Case Drafts
                </Link>
                <Link href="/compare-review" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Compare &amp; Review
                </Link>
                <Link href="/legal-research" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Legal Research
                </Link>
                <Link href="/billing-invoicing" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Billing &amp; Invoicing
                </Link>
                <Link href="/firm-management" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Firm &amp; Team Management
                </Link>
                <Link href="/ecourts-sync" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> eCourts Case Monitoring
                </Link>
                <Link href="/whatsapp-alerts" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> WhatsApp Alerts
                </Link>
              </div>

              <Link href="/firm-management" className="wws-cta-link">
                <span>Explore Firm Management Workspace</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="wws-visual-col">
              <ClientManagementVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 04. AUDIENCE 02 — ADVOCATES & LAWYERS                          */}
      {/* ============================================================== */}
      <section id="advocates-lawyers" className="wws-section bg-white-tint" aria-labelledby="lawyers-heading">
        <div className="content-container">
          <div className="wws-section-grid reverse-layout">
            <div className="wws-content-col">
              <div className="wws-audience-badge">
                <Briefcase size={14} />
                <span>02 — Advocates &amp; Lawyers</span>
              </div>

              <h2 id="lawyers-heading" className="wws-section-title">
                Advocates &amp; Lawyers
              </h2>

              <p className="wws-section-desc">
                Organize your practice, manage matters and clients, research law, prepare documents, track hearings, and keep important legal work within reach.
              </p>

              <span className="wws-features-subheading">Relevant Platform Capabilities</span>
              <div className="wws-feature-tags">
                <Link href="/client-management" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Client Management
                </Link>
                <Link href="/cases" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Case Management
                </Link>
                <Link href="/hearings" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Hearings &amp; Calendar
                </Link>
                <Link href="/evidence" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Evidence &amp; Exhibits
                </Link>
                <Link href="/legal-research" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Legal Research
                </Link>
                <Link href="/drafting-lab" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Drafting Lab
                </Link>
                <Link href="/case-drafts" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Case Drafts
                </Link>
                <Link href="/document-analyzer" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Document Analyzer
                </Link>
                <Link href="/ai-assistant" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> AI Assistant
                </Link>
                <Link href="/my-journal" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> My Journal
                </Link>
                <Link href="/ecourts-sync" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> eCourts Case Sync
                </Link>
                <Link href="/whatsapp-alerts" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> WhatsApp Alerts
                </Link>
              </div>

              <Link href="/cases" className="wws-cta-link">
                <span>Explore Matter Management &amp; Timelines</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="wws-visual-col">
              <CaseManagementVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 05. AUDIENCE 03 — CORPORATE LEGAL TEAMS                         */}
      {/* ============================================================== */}
      <section id="corporate-legal-teams" className="wws-section bg-subtle-ivory" aria-labelledby="corporate-heading">
        <div className="content-container">
          <div className="wws-section-grid">
            <div className="wws-content-col">
              <div className="wws-audience-badge">
                <Building size={14} />
                <span>03 — Corporate Legal Teams</span>
              </div>

              <h2 id="corporate-heading" className="wws-section-title">
                Corporate Legal Teams
              </h2>

              <p className="wws-section-desc">
                Keep contracts, legal matters, documents, approvals, research, and collaboration organized across your internal legal team.
              </p>

              <span className="wws-features-subheading">Relevant Platform Capabilities</span>
              <div className="wws-feature-tags">
                <Link href="/document-storage" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Document Management
                </Link>
                <Link href="/features" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Document Approvals
                </Link>
                <Link href="/drafting-lab" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Drafting Lab
                </Link>
                <Link href="/compare-review" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Compare &amp; Review
                </Link>
                <Link href="/legal-research" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Legal Research
                </Link>
                <Link href="/ai-assistant" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> AI Assistant
                </Link>
                <Link href="/document-analyzer" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Document Analyzer
                </Link>
                <Link href="/cases" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Case &amp; Matter Oversight
                </Link>
                <Link href="/firm-management" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Team Roles &amp; Permissions
                </Link>
              </div>

              <Link href="/compare-review" className="wws-cta-link">
                <span>Explore Contract Review &amp; Redline Workflows</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="wws-visual-col">
              <DocumentApprovalsVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 06. AUDIENCE 04 — CORPORATES & THEIR LEGAL COUNSEL             */}
      {/* ============================================================== */}
      <section id="corporates-and-counsel" className="wws-section bg-white-tint" aria-labelledby="counsel-heading">
        <div className="content-container">
          <div className="wws-section-grid reverse-layout">
            <div className="wws-content-col">
              <div className="wws-audience-badge">
                <Users2 size={14} />
                <span>04 — Corporates &amp; Their Legal Counsel</span>
              </div>

              <h2 id="counsel-heading" className="wws-section-title">
                Corporates &amp; Their Legal Counsel
              </h2>

              <p className="wws-section-desc">
                BrilliusLaw can support legal work across a company&apos;s internal legal team and the external or associated law firms working with them, keeping matters, documents, research, drafting, reviews, and approvals organized around the same legal work.
              </p>

              <span className="wws-features-subheading">Core Workflow Concept</span>
              <div className="wws-feature-tags">
                <span className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> One Organized Legal Workspace
                </span>
                <span className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Centralized Matter Structure
                </span>
                <span className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Structured Document Lifecycle
                </span>
                <span className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Clear Approval Stages
                </span>
              </div>

              <Link href="/platform" className="wws-cta-link">
                <span>View All Platform Solutions</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Visual Workflow Showcase */}
            <div className="wws-visual-col">
              <div className="wws-corp-counsel-showcase">
                <div className="wws-corp-header-badge">
                  <span className="wws-corp-header-title">Conceptual Legal Workflow</span>
                  <span className="wws-corp-header-tag">Matter-Centric Hub</span>
                </div>

                {/* Stakeholders Hierarchy */}
                <div className="wws-stakeholders-tier">
                  <div className="wws-stakeholder-card primary">
                    <div className="wws-stakeholder-icon">
                      <Building size={18} color="#C6A15B" />
                    </div>
                    <div className="wws-stakeholder-info">
                      <span className="wws-stakeholder-title">Corporate Legal Team</span>
                      <span className="wws-stakeholder-sub">General Counsel • In-House Legal Officers</span>
                    </div>
                  </div>

                  <div className="wws-arrow-down-divider" aria-hidden="true">
                    <ArrowDown size={14} color="#C6A15B" />
                  </div>

                  <div className="wws-stakeholder-card">
                    <div className="wws-stakeholder-icon">
                      <Building2 size={18} color="#091526" />
                    </div>
                    <div className="wws-stakeholder-info">
                      <span className="wws-stakeholder-title">Associated / External Law Firm</span>
                      <span className="wws-stakeholder-sub">Retained Partners • Special Briefing Counsel</span>
                    </div>
                  </div>
                </div>

                <div className="wws-arrow-down-divider" aria-hidden="true">
                  <ArrowDown size={16} color="#091526" />
                </div>

                {/* Central Shared Matter Node */}
                <div className="wws-matter-center-node">
                  <div className="wws-matter-node-left">
                    <Briefcase size={18} className="wws-matter-node-icon" />
                    <div>
                      <span className="wws-matter-node-title">Active Matter / Transaction</span>
                      <p className="wws-matter-node-sub">Shared Context • Structured Repository</p>
                    </div>
                  </div>
                  <span className="wws-matter-node-tag">Central Matter</span>
                </div>

                {/* Horizontal Journey Step Pipeline */}
                <div className="wws-journey-track-wrapper">
                  <span className="wws-journey-track-label">Legal Work Lifecycle</span>
                  <div className="wws-journey-steps-row">
                    <div className="wws-journey-step-box">
                      <span className="wws-step-num">01</span>
                      <span className="wws-step-name">Documents</span>
                    </div>
                    <div className="wws-journey-step-box">
                      <span className="wws-step-num">02</span>
                      <span className="wws-step-name">Research</span>
                    </div>
                    <div className="wws-journey-step-box">
                      <span className="wws-step-num">03</span>
                      <span className="wws-step-name">Draft</span>
                    </div>
                    <div className="wws-journey-step-box">
                      <span className="wws-step-num">04</span>
                      <span className="wws-step-name">Review</span>
                    </div>
                    <div className="wws-journey-step-box active">
                      <span className="wws-step-num">05</span>
                      <span className="wws-step-name">Approval</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 07. AUDIENCE 05 — LAW STUDENTS                                 */}
      {/* ============================================================== */}
      <section id="law-students" className="wws-section bg-subtle-ivory" aria-labelledby="students-heading">
        <div className="content-container">
          <div className="wws-section-grid">
            <div className="wws-content-col">
              <div className="wws-audience-badge">
                <GraduationCap size={14} />
                <span>05 — Law Students</span>
              </div>

              <h2 id="students-heading" className="wws-section-title">
                Law Students
              </h2>

              <p className="wws-section-desc">
                Explore Indian law, research judgments, organize important notes, save useful legal references, and build practical legal-work habits with modern legal tools.
              </p>

              <span className="wws-features-subheading">Relevant Platform Capabilities</span>
              <div className="wws-feature-tags">
                <Link href="/law-library" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Law Library &amp; Bare Acts
                </Link>
                <Link href="/legal-research" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Legal Research &amp; Precedents
                </Link>
                <Link href="/my-journal" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> My Journal
                </Link>
                <Link href="/ai-assistant" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> AI Assistant
                </Link>
                <Link href="/document-analyzer" className="wws-feature-pill">
                  <CheckCircle2 size={13} color="#C6A15B" /> Document Analyzer
                </Link>
              </div>

              <Link href="/law-library" className="wws-cta-link">
                <span>Explore Law Library &amp; Bare Acts</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="wws-visual-col">
              <LawLibraryVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 08. SUMMARY ECOSYSTEM MATRIX                                   */}
      {/* ============================================================== */}
      <section className="wws-matrix-section" aria-labelledby="matrix-heading">
        <div className="content-container">
          <div className="wws-matrix-header">
            <h2 id="matrix-heading" className="wws-matrix-title">
              Designed Around Every Legal Role
            </h2>
            <p className="wws-matrix-desc">
              Whether you are managing complex multi-partner firm operations or building strong foundational research habits, BrilliusLaw adapts to your workflow.
            </p>
          </div>

          <div className="wws-matrix-cards-grid">
            {/* Card 1 */}
            <div className="wws-matrix-card">
              <div className="wws-card-top">
                <span className="wws-card-num">01</span>
                <Building2 size={20} className="wws-card-icon" />
              </div>
              <h3 className="wws-card-title">Law Firms</h3>
              <p className="wws-card-desc">
                Multi-partner oversight, associate workload assignment, client billing, and centralized secure vaults.
              </p>
              <a href="#law-firms" className="wws-card-link">
                <span>View capabilities</span>
                <ArrowRight size={12} />
              </a>
            </div>

            {/* Card 2 */}
            <div className="wws-matrix-card featured">
              <div className="wws-card-top">
                <span className="wws-card-num">02</span>
                <Briefcase size={20} className="wws-card-icon" />
              </div>
              <h3 className="wws-card-title">Advocates &amp; Lawyers</h3>
              <p className="wws-card-desc">
                Active matter tracker, automatic court date sync, smart drafting assistance, and personal journal.
              </p>
              <a href="#advocates-lawyers" className="wws-card-link">
                <span>View capabilities</span>
                <ArrowRight size={12} />
              </a>
            </div>

            {/* Card 3 */}
            <div className="wws-matrix-card">
              <div className="wws-card-top">
                <span className="wws-card-num">03</span>
                <Building size={20} className="wws-card-icon" />
              </div>
              <h3 className="wws-card-title">Corporate Legal</h3>
              <p className="wws-card-desc">
                Contract redlines, approval tracking, document analysis, and organized compliance archives.
              </p>
              <a href="#corporate-legal-teams" className="wws-card-link">
                <span>View capabilities</span>
                <ArrowRight size={12} />
              </a>
            </div>

            {/* Card 4 */}
            <div className="wws-matrix-card">
              <div className="wws-card-top">
                <span className="wws-card-num">04</span>
                <Users2 size={20} className="wws-card-icon" />
              </div>
              <h3 className="wws-card-title">Corporates &amp; Counsel</h3>
              <p className="wws-card-desc">
                Organized legal work across internal teams and associated law firms around shared matters.
              </p>
              <a href="#corporates-and-counsel" className="wws-card-link">
                <span>View capabilities</span>
                <ArrowRight size={12} />
              </a>
            </div>

            {/* Card 5 */}
            <div className="wws-matrix-card">
              <div className="wws-card-top">
                <span className="wws-card-num">05</span>
                <GraduationCap size={20} className="wws-card-icon" />
              </div>
              <h3 className="wws-card-title">Law Students</h3>
              <p className="wws-card-desc">
                Bare Acts reader, landmark judgment research, moot preparation, and personal study notes.
              </p>
              <a href="#law-students" className="wws-card-link">
                <span>View capabilities</span>
                <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 09. FINAL CALL TO ACTION                                       */}
      {/* ============================================================== */}
      <SolutionsFinalCTA />
    </main>
  );
};
