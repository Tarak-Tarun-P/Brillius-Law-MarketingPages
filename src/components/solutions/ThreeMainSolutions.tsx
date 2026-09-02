import React from 'react';
import { Building2, Briefcase, GraduationCap, ArrowRight, CheckCircle2, Users, FileText, Scale, Bookmark, Bot, IndianRupee, Sparkles, Archive } from 'lucide-react';
import './ThreeMainSolutions.css';

export const ThreeMainSolutions: React.FC = () => {
  const solutions = [
    {
      id: 'solution-firms',
      badge: 'FOR LAW FIRMS & TEAMS',
      icon: <Building2 size={26} color="#C6A15B" />,
      title: 'Law Firms & Legal Teams',
      headline: 'Run Your Firm With Less Complexity.',
      description:
        'Bring your clients, cases, documents, evidence, hearings, drafting, research, billing, and everyday work together in one organized place.',
      benefits: [
        'Keep client information organized and accessible across your team',
        'Manage cases, hearings, and court deadlines effortlessly',
        'Store documents, contracts, and evidence in a secure vault',
        'Work seamlessly with partners, associates, and briefing counsel',
        'Keep track of matter billing, retainers, and firm activities',
      ],
      tags: [
        { label: 'Clients', icon: <Users size={12} /> },
        { label: 'Cases', icon: <Briefcase size={12} /> },
        { label: 'Documents', icon: <FileText size={12} /> },
        { label: 'Team', icon: <Building2 size={12} /> },
        { label: 'Billing', icon: <IndianRupee size={12} /> },
      ],
      ctaText: 'Explore Firm Solutions',
      ctaHref: '#/features#section-practice',
      featured: false,
    },
    {
      id: 'solution-lawyers',
      badge: 'FOR INDEPENDENT COUNSEL',
      icon: <Briefcase size={26} color="#091526" />,
      title: 'Lawyers & Advocates',
      headline: 'Everything You Need for Your Practice.',
      description:
        'Manage your matters, research the law, work on documents, and keep your important notes close at hand.',
      benefits: [
        'Organize your active cases and receive automatic court updates',
        'Find useful legal information and landmark decisions quickly',
        'Draft, redline, and review legal documents faster',
        'Save important notes and references in My Journal',
        'Get helpful intelligent assistance with everyday legal work',
      ],
      tags: [
        { label: 'Cases', icon: <Briefcase size={12} /> },
        { label: 'Research', icon: <Scale size={12} /> },
        { label: 'Drafting', icon: <FileText size={12} /> },
        { label: 'Journal', icon: <Bookmark size={12} /> },
        { label: 'AI Assistance', icon: <Bot size={12} /> },
      ],
      ctaText: 'Explore Professional Solutions',
      ctaHref: '#/features#section-documents',
      featured: true,
    },
    {
      id: 'solution-students',
      badge: 'FOR LAW SCHOLARS',
      icon: <GraduationCap size={26} color="#C6A15B" />,
      title: 'Law Students',
      headline: 'Learn Law. Explore More. Prepare Better.',
      description:
        'Explore Indian laws and judgments, understand documents, practice drafting, and keep your study notes organized.',
      benefits: [
        'Explore Bare Acts with section breakdowns and helpful footnotes',
        'Read related court decisions that interpret specific laws',
        'Understand complex agreements and legal petitions in plain English',
        'Save important sections and notes directly to your personal journal',
        'Practice professional legal drafting with clause libraries',
        'Organize case materials, exhibits, and study documents in Evidence Storage',
      ],
      tags: [
        { label: 'Law Library', icon: <Scale size={12} /> },
        { label: 'Research', icon: <Sparkles size={12} /> },
        { label: 'Documents', icon: <FileText size={12} /> },
        { label: 'Evidence Storage', icon: <Archive size={12} /> },
        { label: 'Journal', icon: <Bookmark size={12} /> },
        { label: 'Drafting', icon: <FileText size={12} /> },
      ],
      ctaText: 'Explore Student Solutions',
      ctaHref: '#/features#section-library',
      featured: false,
    },
  ];

  return (
    <section className="three-main-solutions-section" aria-labelledby="three-solutions-heading">
      <div className="content-container">
        <div className="three-solutions-header">
          <span className="three-solutions-eyebrow">SOLUTIONS FOR YOU</span>
          <h2 id="three-solutions-heading" className="three-solutions-title">
            Built for Every Stage of the Legal Journey.
          </h2>
          <p className="three-solutions-desc">
            Discover how BrilliusLaw adapts to the way you work—providing purpose-built workflows for managing firms, running a practice, or learning the law.
          </p>
        </div>

        <div className="three-solutions-grid" role="list">
          {solutions.map((sol) => (
            <div
              key={sol.id}
              id={sol.id}
              className={`solution-card ${sol.featured ? 'featured-solution-card' : ''}`}
            >
              <div className="solution-card-header">
                <div className="solution-icon-box">{sol.icon}</div>
                <span className="solution-badge">{sol.badge}</span>
              </div>

              <div className="solution-title-group">
                <span className="solution-audience-name">{sol.title}</span>
                <h3 className="solution-headline">{sol.headline}</h3>
              </div>

              <p className="solution-description">{sol.description}</p>

              {/* Visual Tags Pill Row */}
              <div className="solution-tags-row">
                {sol.tags.map((tag, i) => (
                  <span key={i} className="solution-mini-tag">
                    {tag.icon}
                    <span>{tag.label}</span>
                  </span>
                ))}
              </div>

              <div className="solution-divider" aria-hidden="true" />

              {/* Benefits Checklist */}
              <ul className="solution-benefits-list">
                {sol.benefits.map((b, i) => (
                  <li key={i} className="solution-benefit-item">
                    <CheckCircle2 size={16} className="benefit-icon" color="#C6A15B" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <div className="solution-card-footer">
                <a href={sol.ctaHref} className={`btn-solution-action ${sol.featured ? 'btn-featured-action' : ''}`}>
                  <span>{sol.ctaText}</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
