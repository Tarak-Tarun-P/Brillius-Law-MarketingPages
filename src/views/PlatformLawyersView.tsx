'use client';

import React from 'react';
import Link from 'next/link';
import {
  Briefcase,
  Calendar,
  PenLine,
  GitCompare,
  Search,
  Sparkles,
  FileSearch,
  Mic,
  Landmark,
  ArrowRight,
  Clock,
  Zap,
} from 'lucide-react';
import { SolutionsFinalCTA } from '../components/solutions/SolutionsFinalCTA';
import '../components/platform-audiences/AudiencePlatform.css';

export const PlatformLawyersView: React.FC = () => {
  const whyPoints = [
    {
      icon: <Briefcase size={20} />,
      title: 'Practice Clarity Every Day',
      desc: 'Organize all active briefs, client matters, court dates, and notes in one single, responsive workspace designed for solo and chamber practitioners.',
    },
    {
      icon: <Clock size={20} />,
      title: 'Court & Hearing Discipline',
      desc: 'Never miss an appearance with automated eCourts sync, daily cause-list monitoring, and instant WhatsApp reminders.',
    },
    {
      icon: <Zap size={20} />,
      title: 'Faster Drafting & Research',
      desc: 'Accelerate notice preparation, review voluminous case files with AI, and verify precedents across Supreme Court and High Court judgments.',
    },
  ];

  const workflows = [
    { step: '01', name: 'Client & Matter Intake', desc: 'Add client records, establish dispute context, and create matter folders.' },
    { step: '02', name: 'Precedent Research', desc: 'Find relevant citations, landmark judgments, and statutory provisions in seconds.' },
    { step: '03', name: 'Drafting & Redlining', desc: 'Assemble pleadings in Drafting Lab and spot opposing modifications in Compare & Review.' },
    { step: '04', name: 'Evidence & Hearing Prep', desc: 'Organize exhibits chronologically and track listing numbers on cause lists.' },
    { step: '05', name: 'Journal & Next Steps', desc: 'Capture voice notes, hearing outcomes, and future action items in My Journal.' },
  ];

  const features = [
    {
      icon: <Briefcase size={20} />,
      name: 'Case Management',
      desc: 'Keep case details, hearing history, next dates, and connected parties organized in one view.',
      href: '/cases',
    },
    {
      icon: <Calendar size={20} />,
      name: 'Hearings & Calendar',
      desc: 'Track daily court appearances, interim orders, and stage transitions seamlessly.',
      href: '/hearings',
    },
    {
      icon: <Search size={20} />,
      name: 'Legal Research',
      desc: 'Intelligent search across Indian jurisprudence, headnotes, ratio decidendi, and citations.',
      href: '/legal-research',
    },
    {
      icon: <PenLine size={20} />,
      name: 'Drafting Lab',
      desc: 'Draft petitions, notices, and agreements with standard Indian legal clauses.',
      href: '/drafting-lab',
    },
    {
      icon: <GitCompare size={20} />,
      name: 'Compare & Review',
      desc: 'Instantly compare contract and pleading versions to catch insertions and omissions.',
      href: '/compare-review',
    },
    {
      icon: <FileSearch size={20} />,
      name: 'Document Analyzer',
      desc: 'Upload lengthy plaints, chargesheets, or contracts and extract key clauses and dates.',
      href: '/document-analyzer',
    },
    {
      icon: <Sparkles size={20} />,
      name: 'AI Assistant',
      desc: 'Ask contextual legal questions and explore applicable statutory sections.',
      href: '/ai-assistant',
    },
    {
      icon: <Mic size={20} />,
      name: 'My Journal',
      desc: 'Record personal practice insights, case bookmarks, voice notes, and research snippets.',
      href: '/my-journal',
    },
    {
      icon: <Landmark size={20} />,
      name: 'eCourts Sync',
      desc: 'Direct synchronization with eCourts for automatic case status and listing alerts.',
      href: '/ecourts-sync',
    },
  ];

  return (
    <main className="audience-platform-main">
      {/* 01. HERO */}
      <section className="ap-hero-section" aria-label="Lawyers Platform">
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
              <span className="ap-hero-eyebrow">BUILT FOR LAWYERS &amp; ADVOCATES</span>
              <span className="ap-hero-eyebrow-line" aria-hidden="true" />
            </div>

            <h1 className="ap-hero-headline">
              Elevate Your Daily Legal Practice.
            </h1>

            <p className="ap-hero-description">
              Tools to help individual advocates, litigators, and counsel organize matters, research precedents, prepare court drafts, track hearings, and manage everyday legal work with confidence.
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
      <section className="ap-why-section" aria-label="Why BrilliusLaw for Advocates">
        <div className="content-container">
          <div className="ap-section-header">
            <span className="ap-section-tag">PRACTITIONER ADVANTAGE</span>
            <h2 className="ap-section-title">Designed for Everyday Litigation &amp; Counsel</h2>
            <p className="ap-section-subtext">
              How BrilliusLaw helps you spend less time on administration and more time on legal advocacy.
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
      <section className="ap-workflows-section" aria-label="Lawyer Workflows">
        <div className="content-container">
          <div className="ap-section-header">
            <span className="ap-section-tag">PRACTICE LIFECYCLE</span>
            <h2 className="ap-section-title">A Natural Flow for Every Brief</h2>
            <p className="ap-section-subtext">
              Clients → Cases → Research → Drafting → Document Review → Hearings &amp; Notes.
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

      {/* 04. FEATURES FOR ADVOCATES */}
      <section className="ap-features-section" aria-label="Advocate Features">
        <div className="content-container">
          <div className="ap-section-header">
            <span className="ap-section-tag">CORE TOOLS</span>
            <h2 className="ap-section-title">Essential Tools for Individual Advocates</h2>
            <p className="ap-section-subtext">
              Explore the individual features that streamline research, court preparation, and document management.
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
