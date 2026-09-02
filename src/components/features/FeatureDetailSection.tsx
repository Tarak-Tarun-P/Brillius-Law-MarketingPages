import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ClientManagementVisual } from './visuals/ClientManagementVisual';
import { DocumentStorageVisual } from './visuals/DocumentStorageVisual';
import { DraftingLabVisual } from './visuals/DraftingLabVisual';
import { EvidenceStorageVisual } from './visuals/EvidenceStorageVisual';
import { CaseManagementVisual } from './visuals/CaseManagementVisual';
import { CaseDraftsVisual } from './visuals/CaseDraftsVisual';
import { AIAssistantVisual } from './visuals/AIAssistantVisual';
import { DocumentAnalyzerVisual } from './visuals/DocumentAnalyzerVisual';
import './FeatureDetailSection.css';

interface FeatureDetailItem {
  id: string;
  num: string;
  eyebrow: string;
  title: string;
  description: string;
  capabilities: string[];
  visual: React.ReactNode;
  visualPosition: 'left' | 'right';
}

export const FeatureDetailSection: React.FC = () => {
  const details: FeatureDetailItem[] = [
    {
      id: 'detail-clients',
      num: '01',
      eyebrow: 'CLIENT RELATIONSHIPS & MATTERS',
      title: 'Clients Management',
      description:
        'Manage client information, relationships, matters, and important interactions from one organized workspace.',
      capabilities: [
        'Centralized client directory with matter histories & retainer tracking',
        'Direct linkage between corporate entities, subsidiaries & contact persons',
        'Real-time activity audit logs and verified KYC compliance status',
      ],
      visual: <ClientManagementVisual />,
      visualPosition: 'right',
    },
    {
      id: 'detail-storage',
      num: '02',
      eyebrow: 'CENTRALIZED VAULT & REPOSITORY',
      title: 'Document Storage',
      description:
        'Store, organize, and securely access legal documents across matters, clients, and cases from a centralized workspace.',
      capabilities: [
        'Instant full-text OCR indexing across petitions, judgments & deeds',
        'Structured matter hierarchies with granular role-based access permissions',
        'Bank-grade AES-256 encryption for both in-transit and at-rest document security',
      ],
      visual: <DocumentStorageVisual />,
      visualPosition: 'left',
    },
    {
      id: 'detail-drafting',
      num: '03',
      eyebrow: 'FOCUSED EDITORIAL WORKSPACE',
      title: 'Drafting Lab',
      description:
        'Create, refine, and manage legal drafts in a focused workspace designed for modern legal drafting.',
      capabilities: [
        'Interactive clause library aligned with standard Indian statutory provisions',
        'Real-time redlining, automated cross-referencing & citation formatting',
        'Intelligent clause recommendations to reduce ambiguity and risk exposure',
      ],
      visual: <DraftingLabVisual />,
      visualPosition: 'right',
    },
    {
      id: 'detail-evidence',
      num: '04',
      eyebrow: 'CHAIN OF CUSTODY & ADMISSIBILITY',
      title: 'Evidence Storage',
      description:
        'Organize evidence and supporting materials with structured storage that keeps important case information easy to access and manage.',
      capabilities: [
        'Cryptographic SHA-256 hash validation for tamper-evident digital exhibits',
        'Sec 65B Indian Evidence Act compliance certification and metadata logs',
        'Direct cross-linking of exhibits to specific pleadings in Drafting Lab',
      ],
      visual: <EvidenceStorageVisual />,
      visualPosition: 'left',
    },
    {
      id: 'detail-case',
      num: '05',
      eyebrow: 'MATTER LIFECYCLE & MILESTONES',
      title: 'Case Management',
      description:
        'Manage cases, matters, tasks, deadlines, documents, and important case information from one centralized workspace.',
      capabilities: [
        'Dynamic litigation cause list tracking with court hearing reminders',
        'Milestone-driven matter timelines from filing through judgment execution',
        'Team task delegation, counsel allocation & filing defect alerts',
      ],
      visual: <CaseManagementVisual />,
      visualPosition: 'right',
    },
    {
      id: 'detail-casedrafts',
      num: '06',
      eyebrow: 'VERSION REGISTRY & LIFECYCLE AUDIT',
      title: 'Case Drafts',
      description:
        'Keep case-specific drafts organized and accessible throughout the lifecycle of a matter.',
      capabilities: [
        'Clear version progression from associate draft to senior partner sign-off',
        'Certified court filing copies segregated from working internal revisions',
        'Complete chronological audit trail of changes across all matter drafts',
      ],
      visual: <CaseDraftsVisual />,
      visualPosition: 'left',
    },
    {
      id: 'detail-aiassistant',
      num: '07',
      eyebrow: 'INTELLIGENT JURISPRUDENCE COMPANION',
      title: 'AI Assistant',
      description:
        'Get intelligent assistance across legal workflows with an AI companion that helps you find information, understand documents, and work more efficiently.',
      capabilities: [
        'Instant synthesis of legal principles grounded in Indian statutes & precedents',
        'Multi-angle strategy exploration and statutory limitation evaluations',
        'Natural language queries with direct citations to landmark judgments',
      ],
      visual: <AIAssistantVisual />,
      visualPosition: 'right',
    },
    {
      id: 'detail-analyzer',
      num: '08',
      eyebrow: 'CONTEXT-AWARE VERIFICATION',
      title: 'Intelligent Document Analyzer',
      description:
        'Analyze legal documents with context-aware AI that helps identify relevant information, connect related provisions, and answer questions grounded in your documents.',
      capabilities: [
        'Three-stage pipeline: Source Document $\\rightarrow$ Context Mapping $\\rightarrow$ Verified Answer',
        'Pinpoint paragraph-level source citations for every extracted conclusion',
        'Deep clause cross-referencing across multi-hundred-page complex agreements',
      ],
      visual: <DocumentAnalyzerVisual />,
      visualPosition: 'left',
    },
  ];

  return (
    <section className="feat-detail-wrapper" aria-label="Detailed Feature Capabilities">
      <div className="content-container">
        {details.map((item, index) => (
          <div key={item.id} id={item.id} className="feat-detail-block">
            {index > 0 && <div className="feat-detail-divider" aria-hidden="true" />}

            <div className={`feat-detail-grid ${item.visualPosition === 'left' ? 'layout-visual-left' : 'layout-visual-right'}`}>
              {/* Text Column */}
              <div className="feat-detail-text-col">
                <div className="feat-num-badge">{item.num}</div>
                <span className="feat-detail-eyebrow">{item.eyebrow}</span>
                <h3 className="feat-detail-heading">{item.title}</h3>
                <p className="feat-detail-description">{item.description}</p>

                {/* Capability Bullet Points */}
                <ul className="feat-capabilities-list">
                  {item.capabilities.map((cap, i) => (
                    <li key={i} className="feat-capability-item">
                      <CheckCircle2 size={18} className="feat-cap-icon" color="#C6A15B" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Mockup Column */}
              <div className="feat-detail-visual-col">
                {item.visual}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
