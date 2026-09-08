'use client';

import React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Search,
  Sparkles,
  FileSearch,
  Mic,
  PenLine,
  GitCompare,
  ArrowRight,
  Bookmark,
  Award,
} from 'lucide-react';
import { SolutionsFinalCTA } from '../components/solutions/SolutionsFinalCTA';
import '../components/platform-audiences/AudiencePlatform.css';

export const PlatformStudentsView: React.FC = () => {
  const whyPoints = [
    {
      icon: <BookOpen size={20} />,
      title: 'Accessible Indian Statutes & Judgments',
      desc: 'Master Bare Acts, landmark constitutional rulings, and contemporary high court decisions with verified statutory citations.',
    },
    {
      icon: <Award size={20} />,
      title: 'Moot Court & Assignment Readiness',
      desc: 'Build winning memorials, organize exhibits in Evidence, and draft structured legal briefs using standard clause templates.',
    },
    {
      icon: <Bookmark size={20} />,
      title: 'Structured Knowledge & Journaling',
      desc: 'Save case summaries, articulate personal ratio analyses, and record voice notes in My Journal for long-term retention.',
    },
  ];

  const workflows = [
    { step: '01', name: 'Statutory Research', desc: 'Browse Bare Acts, central statutes, and state amendments in the Law Library.' },
    { step: '02', name: 'Case Law Analysis', desc: 'Find authoritative precedents and understand ratio decidendi with clear citations.' },
    { step: '03', name: 'Document Exploration', desc: 'Upload case studies or research papers into Document Analyzer for instant insights.' },
    { step: '04', name: 'Drafting Practice', desc: 'Formulate notices, pleadings, and moot memorials in the Drafting Lab.' },
    { step: '05', name: 'Version Review', desc: 'Compare draft iterations in Compare & Review and record reflections in My Journal.' },
  ];

  const features = [
    {
      icon: <BookOpen size={20} />,
      name: 'Law Library',
      desc: 'Comprehensive access to Bare Acts, Indian codes, and searchable statutory provisions.',
      href: '/law-library',
    },
    {
      icon: <Search size={20} />,
      name: 'Legal Research',
      desc: 'Search case precedents, citations, and court judgments across Indian jurisdictions.',
      href: '/legal-research',
    },
    {
      icon: <Sparkles size={20} />,
      name: 'AI Assistant',
      desc: 'Explore legal concepts, clarify statutory provisions, and unpack complex legal problems.',
      href: '/ai-assistant',
    },
    {
      icon: <FileSearch size={20} />,
      name: 'Document Analyzer',
      desc: 'Analyze long judgments, contracts, and legal papers to extract key propositions.',
      href: '/document-analyzer',
    },
    {
      icon: <PenLine size={20} />,
      name: 'Drafting Lab',
      desc: 'Practice drafting plaints, petitions, and commercial agreements with standard clauses.',
      href: '/drafting-lab',
    },
    {
      icon: <GitCompare size={20} />,
      name: 'Compare & Review',
      desc: 'Compare document revisions side-by-side to understand legal drafting nuances.',
      href: '/compare-review',
    },
    {
      icon: <Mic size={20} />,
      name: 'My Journal',
      desc: 'Save case bookmarks, moot court notes, audio reflections, and research summaries.',
      href: '/my-journal',
    },
  ];

  return (
    <main className="audience-platform-main">
      {/* 01. HERO */}
      <section className="ap-hero-section" aria-label="Law Students Platform">
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
              <span className="ap-hero-eyebrow">BUILT FOR LAW STUDENTS &amp; SCHOLARS</span>
              <span className="ap-hero-eyebrow-line" aria-hidden="true" />
            </div>

            <h1 className="ap-hero-headline">
              A Modern Workspace for Future Legal Minds.
            </h1>

            <p className="ap-hero-description">
              A practical workspace for exploring Indian law, researching landmark judgments, organizing legal knowledge, and building rigorous legal-work habits from law school to practice.
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
      <section className="ap-why-section" aria-label="Why BrilliusLaw for Students">
        <div className="content-container">
          <div className="ap-section-header">
            <span className="ap-section-tag">STUDENT ADVANTAGE</span>
            <h2 className="ap-section-title">Built for Real Legal Competence</h2>
            <p className="ap-section-subtext">
              How BrilliusLaw transforms statutory study, moot preparation, and case research into intuitive workflows.
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
      <section className="ap-workflows-section" aria-label="Student Workflows">
        <div className="content-container">
          <div className="ap-section-header">
            <span className="ap-section-tag">LEARNING PATH</span>
            <h2 className="ap-section-title">From Concept to Concrete Legal Work</h2>
            <p className="ap-section-subtext">
              Research → Understand → Organize → Draft → Review &amp; Reflect.
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

      {/* 04. FEATURES FOR STUDENTS */}
      <section className="ap-features-section" aria-label="Student Features">
        <div className="content-container">
          <div className="ap-section-header">
            <span className="ap-section-tag">ESSENTIAL SUITE</span>
            <h2 className="ap-section-title">Core Research &amp; Study Tools</h2>
            <p className="ap-section-subtext">
              Practical legal tools to elevate academic research, moot court preparation, and drafting skills.
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
