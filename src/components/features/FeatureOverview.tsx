import React from 'react';
import { Users, FolderOpen, PenLine, Archive, Briefcase, Files, Sparkles, FileSearch } from 'lucide-react';
import { FeatureOverviewCard, FeatureOverviewCardProps } from './FeatureOverviewCard';
import './FeatureOverview.css';

export const FeatureOverview: React.FC = () => {
  const overviewList: FeatureOverviewCardProps[] = [
    {
      id: 'clients',
      num: '01',
      title: 'Clients Management',
      description: 'Manage client information, relationships, matters, and important interactions from one organized workspace.',
      icon: <Users size={22} color="#091526" strokeWidth={1.8} />,
      targetId: 'detail-clients',
    },
    {
      id: 'doc-storage',
      num: '02',
      title: 'Document Storage',
      description: 'Store, organize, and securely access legal documents across matters, clients, and cases from a centralized workspace.',
      icon: <FolderOpen size={22} color="#091526" strokeWidth={1.8} />,
      targetId: 'detail-storage',
    },
    {
      id: 'drafting-lab',
      num: '03',
      title: 'Drafting Lab',
      description: 'Create, refine, and manage legal drafts in a focused workspace designed for modern legal drafting.',
      icon: <PenLine size={22} color="#091526" strokeWidth={1.8} />,
      targetId: 'detail-drafting',
    },
    {
      id: 'evidence-storage',
      num: '04',
      title: 'Evidence Storage',
      description: 'Organize evidence and supporting materials with structured storage that keeps important case information easy to access and manage.',
      icon: <Archive size={22} color="#091526" strokeWidth={1.8} />,
      targetId: 'detail-evidence',
    },
    {
      id: 'case-management',
      num: '05',
      title: 'Case Management',
      description: 'Manage cases, matters, tasks, deadlines, documents, and important case information from one centralized workspace.',
      icon: <Briefcase size={22} color="#091526" strokeWidth={1.8} />,
      targetId: 'detail-case',
    },
    {
      id: 'case-drafts',
      num: '06',
      title: 'Case Drafts',
      description: 'Keep case-specific drafts organized and accessible throughout the lifecycle of a matter.',
      icon: <Files size={22} color="#091526" strokeWidth={1.8} />,
      targetId: 'detail-casedrafts',
    },
    {
      id: 'ai-assistant',
      num: '07',
      title: 'AI Assistant',
      description: 'Get intelligent assistance across legal workflows with an AI companion that helps you find information, understand documents, and work more efficiently.',
      icon: <Sparkles size={22} color="#091526" strokeWidth={1.8} />,
      targetId: 'detail-aiassistant',
    },
    {
      id: 'document-analyzer',
      num: '08',
      title: 'Intelligent Document Analyzer',
      description: 'Analyze legal documents with context-aware AI that helps identify relevant information, connect related provisions, and answer questions grounded in your documents.',
      icon: <FileSearch size={22} color="#091526" strokeWidth={1.8} />,
      targetId: 'detail-analyzer',
    },
  ];

  return (
    <section className="feat-overview-section" aria-labelledby="overview-heading">
      {/* Subtle Ambient Depth Gradients */}
      <div className="feat-overview-glow glow-navy" aria-hidden="true" />
      <div className="feat-overview-glow glow-gold" aria-hidden="true" />

      <div className="content-container">
        {/* Section Header */}
        <div className="feat-overview-header">
          <span className="feat-overview-eyebrow">ONE PLATFORM. COMPLETE LEGAL WORKFLOW.</span>
          <h2 id="overview-heading" className="feat-overview-heading">
            Everything Your Legal Team Needs
          </h2>
          <p className="feat-overview-desc">
            From managing clients and documents to drafting, evidence, case workflows, and AI-powered analysis, BrilliusLaw brings your legal operations together in one place.
          </p>
        </div>

        {/* 8-Card Grid (4 cols x 2 rows on desktop) */}
        <div className="feat-overview-grid" role="list">
          {overviewList.map((card) => (
            <FeatureOverviewCard
              key={card.id}
              id={card.id}
              num={card.num}
              title={card.title}
              description={card.description}
              icon={card.icon}
              targetId={card.targetId}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
