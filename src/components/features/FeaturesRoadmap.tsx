import React from 'react';
import Link from 'next/link';
import {
  ArrowDown,
  Layers,
  Calendar,
  FileCheck2,
  BookOpen,
  Sparkles,
  Archive,
  Building2,
  Check,
  ArrowRight,
} from 'lucide-react';
import { ClientManagementVisual } from './visuals/ClientManagementVisual';
import { CaseManagementVisual } from './visuals/CaseManagementVisual';
import { HearingsCalendarVisual } from './visuals/HearingsCalendarVisual';
import { EvidenceStorageVisual } from './visuals/EvidenceStorageVisual';
import { CaseDraftsVisual } from './visuals/CaseDraftsVisual';
import { DocumentStorageVisual } from './visuals/DocumentStorageVisual';
import { DocumentApprovalsVisual } from './visuals/DocumentApprovalsVisual';
import { DraftingLabVisual } from './visuals/DraftingLabVisual';
import { VersionCompareVisual } from './visuals/VersionCompareVisual';
import { LawLibraryVisual } from './visuals/LawLibraryVisual';
import { LegalResearchVisual } from './visuals/LegalResearchVisual';
import { MyJournalVisual } from './visuals/MyJournalVisual';
import { DocumentAnalyzerVisual } from './visuals/DocumentAnalyzerVisual';
import { AIAssistantVisual } from './visuals/AIAssistantVisual';
import { AIDraftingVisual } from './visuals/AIDraftingVisual';
import { BillingOverviewVisual } from './visuals/BillingOverviewVisual';
import { TeamManagementVisual } from './visuals/TeamManagementVisual';
import { ECourtsMonitoringVisual } from './visuals/ECourtsMonitoringVisual';
import { WhatsAppAlertsVisual } from './visuals/WhatsAppAlertsVisual';
import './FeaturesRoadmap.css';

interface Milestone {
  id: string;
  stepNum: string;
  tag: string;
  title: string;
  desc: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  visual: React.ReactNode;
  align: 'left' | 'right'; // left = text left, visual right; right = text right, visual left
}

interface Stage {
  stageId: string;
  stageNumber: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  transitionNote?: string;
  milestones: Milestone[];
}

export const FeaturesRoadmap: React.FC = () => {
  const stages: Stage[] = [
    {
      stageId: 'stage-client-matter',
      stageNumber: '01',
      title: 'CLIENT & MATTER INTAKE',
      subtitle: 'Establish verified relationships, create structured case files, and define matter objectives.',
      icon: <Layers size={18} strokeWidth={2} />,
      transitionNote: 'Stage 01 Complete → Synchronizing Court Deadlines & Appearances',
      milestones: [
        {
          id: 'client-management',
          stepNum: '01',
          tag: '01 // CLIENT RELATIONSHIPS',
          title: 'Client Management',
          desc: 'Keep client information, relationships, matters, and important details organized in one place.',
          bullets: [
            'Complete client profiles with active retainer accounts and matter directories',
            'Direct visibility into pending actions, documents, and client communications',
            'Verified KYC and corporate entity relationship mapping',
          ],
          ctaLabel: 'Explore Client Management',
          ctaHref: '/client-management',
          visual: <ClientManagementVisual />,
          align: 'left',
        },
        {
          id: 'case-management',
          stepNum: '02',
          tag: '02 // MATTER LIFECYCLE',
          title: 'Case Management',
          desc: 'Stay on top of every matter with organized case information, important dates, priorities, related parties, and case history.',
          bullets: [
            'Milestone tracking from petition filing to final court decree',
            'Task allocation across partners, briefing counsel, and associates',
            'Real-time priority alerts for urgent limitation dates and filing windows',
          ],
          ctaLabel: 'Explore Case Management',
          ctaHref: '/cases',
          visual: <CaseManagementVisual />,
          align: 'right',
        },
      ],
    },
    {
      stageId: 'stage-calendar',
      stageNumber: '02',
      title: 'CALENDAR & COURT APPEARANCES',
      subtitle: 'Track cause lists, court listings, and hearing schedules with automated reminders.',
      icon: <Calendar size={18} strokeWidth={2} />,
      transitionNote: 'Stage 02 Scheduled → Assembling Documents, Contracts & Pleadings',
      milestones: [
        {
          id: 'hearings-calendar',
          stepNum: '03',
          tag: '03 // CAUSE LIST & COURT DATES',
          title: 'Hearings & Calendar',
          desc: 'Keep upcoming hearings and important case dates organized with a clear view of what is coming next.',
          bullets: [
            'Weekly cause list schedule covering Supreme Court, High Courts, and Tribunals',
            'Courtroom, bench, and item number details attached to every appearance',
            'Automated hearing reminders for lead advocates and briefing associates',
          ],
          ctaLabel: 'Explore Hearings & Calendar',
          ctaHref: '/hearings',
          visual: <HearingsCalendarVisual />,
          align: 'left',
        },
      ],
    },
    {
      stageId: 'stage-documents',
      stageNumber: '03',
      title: 'DOCUMENTS, DRAFTING & REVIEW',
      subtitle: 'Centralize case files, craft pleadings in the Drafting Lab, redline revisions, and secure partner approvals.',
      icon: <FileCheck2 size={18} strokeWidth={2} />,
      transitionNote: 'Stage 03 Drafted & Approved → Exploring Statutory Authorities & Precedents',
      milestones: [
        {
          id: 'document-management',
          stepNum: '04',
          tag: '04 // CENTRALIZED VAULT',
          title: 'Document Management',
          desc: 'Keep contracts, templates, case documents, client documents, and other important files organized and easy to access.',
          bullets: [
            'Fast optical search across thousands of case files, petitions, and deeds',
            'Structured folders categorized by court, client, and practice domain',
            'Strict confidentiality with matter-level document permission locks',
          ],
          ctaLabel: 'Explore Document Management',
          ctaHref: '/document-storage',
          visual: <DocumentStorageVisual />,
          align: 'right',
        },
        {
          id: 'drafting-lab',
          stepNum: '05',
          tag: '05 // DRAFTING WORKSPACE',
          title: 'Drafting Lab',
          desc: 'A focused workspace for creating, editing, reviewing, and refining legal documents.',
          bullets: [
            'Standard clause library tailored for Indian commercial and litigation practice',
            'Smart clause suggestions to prevent ambiguous wording and unneeded risk',
            'Distraction-free environment with formatting tools built specifically for legal drafts',
          ],
          ctaLabel: 'Explore Drafting Lab',
          ctaHref: '/drafting-lab',
          visual: <DraftingLabVisual />,
          align: 'left',
        },
        {
          id: 'case-drafts',
          stepNum: '06',
          tag: '06 // VERSION REGISTRY',
          title: 'Case Drafts',
          desc: 'Keep drafts related to each matter organized from the first version through the final document.',
          bullets: [
            'Clear version progression from associate draft to senior partner sign-off',
            'Final certified court filing copies segregated from working internal revisions',
            'Full chronological revision history preserving all matter contributions',
          ],
          ctaLabel: 'Explore Case Drafts',
          ctaHref: '/case-drafts',
          visual: <CaseDraftsVisual />,
          align: 'right',
        },
        {
          id: 'compare-review',
          stepNum: '07',
          tag: '07 // REDLINE COMPARISON',
          title: 'Compare & Review',
          desc: 'See what changed between different versions of a document, making it easier to review additions, removals, and revisions.',
          bullets: [
            'Side-by-side visual redlines highlighting additions and removals instantly',
            'Identifies modified liability caps, indemnity terms, and statutory references',
            'Export comprehensive redline reports ready for opposing counsel negotiation',
          ],
          ctaLabel: 'Explore Compare & Review',
          ctaHref: '/compare-review',
          visual: <VersionCompareVisual />,
          align: 'left',
        },
        {
          id: 'document-approvals',
          stepNum: '08',
          tag: '08 // REVIEW & SIGN-OFF',
          title: 'Document Approvals',
          desc: 'Send documents through a clear review process so the right people can review and approve them before they are finalized.',
          bullets: [
            'Step-by-step sign-off workflows for associates, partners, and corporate clients',
            'Automated notifications when review comments or approvals are requested',
            'Digital verification and approval records for compliance and peace of mind',
          ],
          ctaLabel: 'Explore Document Approvals',
          ctaHref: '/features',
          visual: <DocumentApprovalsVisual />,
          align: 'right',
        },
      ],
    },
    {
      stageId: 'stage-knowledge',
      stageNumber: '04',
      title: 'KNOWLEDGE, RESEARCH & NOTES',
      subtitle: 'Explore Bare Acts, pinpoint authoritative judicial ratios, and capture immediate thoughts.',
      icon: <BookOpen size={18} strokeWidth={2} />,
      transitionNote: 'Stage 04 Authorities Grounded → Applying Jurisprudence-Aware AI',
      milestones: [
        {
          id: 'law-library',
          stepNum: '09',
          tag: '09 // BARE ACTS & JUDGMENTS',
          title: 'Everything You Need to Explore Indian Law',
          desc: 'Explore laws section by section, follow important references, and discover related judgments without jumping between different sources.',
          bullets: [
            'Explore Bare Acts: Read individual sections, provisions, explanations, and exceptions with ease',
            'Helpful Footnotes: Understand statutory references, amendments, and legal nuances at a glance',
            'Connected Judgments: Move seamlessly from any Bare Act section to the court decisions that interpret it',
            'Bookmark for Later: Save important sections and judgments directly to your personal journal in one click',
          ],
          ctaLabel: 'Explore Law Library',
          ctaHref: '/law-library',
          visual: <LawLibraryVisual />,
          align: 'left',
        },
        {
          id: 'legal-research',
          stepNum: '10',
          tag: '10 // CASE LAW & STATUTES',
          title: 'Legal Research & Precedents',
          desc: 'Find relevant case law, judgments, and legal provisions using natural-language questions and an intuitive research experience.',
          bullets: [
            'Search Supreme Court, High Courts, and Tribunals using legal questions',
            'Explore organized Bare Acts, statutory sections, and legal provisions',
            'Pinpoint headnotes, judicial ratios, and citation references in seconds',
          ],
          ctaLabel: 'Explore Legal Research',
          ctaHref: '/legal-research',
          visual: <LegalResearchVisual />,
          align: 'right',
        },
        {
          id: 'my-journal',
          stepNum: '11',
          tag: '11 // RECORD & SAVE NOTES',
          title: 'Have a Thought? Record It Instead of Typing.',
          desc: 'Remove the burden of typing during busy court days or research sessions. Just record your thought, and BrilliusLaw saves your notes and links them to your cases.',
          bullets: [
            'Record or Type: Speak your thoughts after a court hearing or client call—just record it and save it',
            'Bookmark Useful Laws: Save key Bare Act sections, exceptions, and judgments while reading in the Law Library',
            'Organized by Matter: Tag notes to specific clients and cases so you can quickly return to them when drafting',
            'Completely Private: Your journal is your personal notebook, protected with strict encryption and accessible only by you',
          ],
          ctaLabel: 'Explore My Journal',
          ctaHref: '/my-journal',
          visual: <MyJournalVisual />,
          align: 'left',
        },
      ],
    },
    {
      stageId: 'stage-intelligence',
      stageNumber: '05',
      title: 'LEGAL INTELLIGENCE & AI ASSISTANCE',
      subtitle: 'Accelerate document comprehension, query statutes in plain English, and generate specialized clauses.',
      icon: <Sparkles size={18} strokeWidth={2} />,
      transitionNote: 'Stage 05 Intelligence Applied → Securing Evidence & Admissibility',
      milestones: [
        {
          id: 'document-analyzer',
          stepNum: '12',
          tag: '12 // DOCUMENT UNDERSTANDING',
          title: 'Intelligent Document Analyzer',
          desc: 'Understand complex legal documents faster. Identify important clauses, obligations, risks, and relevant information without reading everything from scratch.',
          bullets: [
            'Analyzes lengthy agreements and highlights crucial liabilities and obligations',
            'Every conclusion is grounded with exact paragraph and page citations',
            'Quickly cross-references definitions with schedules and annexures',
          ],
          ctaLabel: 'Explore Document Analyzer',
          ctaHref: '/document-analyzer',
          visual: <DocumentAnalyzerVisual />,
          align: 'right',
        },
        {
          id: 'ai-assistant',
          stepNum: '13',
          tag: '13 // JURISPRUDENCE COMPANION',
          title: 'AI Assistant',
          desc: 'Get help understanding information, finding relevant details, and working through everyday legal tasks with an intelligent assistant.',
          bullets: [
            'Ask plain-language questions and receive structured legal overviews',
            'Evaluates statutory limitation periods, procedural thresholds, and grounds',
            'Provides direct citations to relevant landmark Indian Supreme Court judgments',
          ],
          ctaLabel: 'Explore AI Assistant',
          ctaHref: '/ai-assistant',
          visual: <AIAssistantVisual />,
          align: 'left',
        },
        {
          id: 'ai-drafting',
          stepNum: '14',
          tag: '14 // DRAFTING ACCELERATION',
          title: 'AI Drafting Assistant',
          desc: 'Get help creating and refining legal documents, from contracts and petitions to briefs and other legal drafts.',
          bullets: [
            'Draft specialized clauses tailored to your matter instructions and client needs',
            'Checks statutory alignment with Indian contract and procedural laws',
            'Empowers advocates to draft faster while keeping full editorial control',
          ],
          ctaLabel: 'Explore AI Drafting Assistant',
          ctaHref: '/drafting-lab',
          visual: <AIDraftingVisual />,
          align: 'right',
        },
      ],
    },
    {
      stageId: 'stage-evidence',
      stageNumber: '06',
      title: 'EVIDENCE & EXHIBIT INTEGRITY',
      subtitle: 'Store evidence annexures, maintain Section 65B compliance records, and link exhibits to active drafts.',
      icon: <Archive size={18} strokeWidth={2} />,
      transitionNote: 'Stage 06 Evidence Verified → Executing Firm Operations & Billing',
      milestones: [
        {
          id: 'evidence-storage',
          stepNum: '15',
          tag: '15 // EVIDENCE INTEGRITY',
          title: 'Evidence & Exhibits',
          desc: 'Keep your evidence within reach. Organize exhibits, documents, and records connected to the matters they belong to, so important information is easy to find when you need it.',
          bullets: [
            'Structured digital repository for affidavits, financial statements, and exhibits',
            'Section 65B Indian Evidence Act admissibility compliance records',
            'Direct cross-linking of exhibit annexures to active case drafts',
          ],
          ctaLabel: 'Explore Evidence & Exhibits',
          ctaHref: '/evidence',
          visual: <EvidenceStorageVisual />,
          align: 'left',
        },
      ],
    },
    {
      stageId: 'stage-operations',
      stageNumber: '07',
      title: 'FINANCE, OPERATIONS & ALERTS',
      subtitle: 'Track fees and retainers, manage team roles, sync eCourts listings, and receive real-time WhatsApp alerts.',
      icon: <Building2 size={18} strokeWidth={2} />,
      transitionNote: 'Matter Lifecycle Complete • All 19 Capabilities Connected in One Platform',
      milestones: [
        {
          id: 'billing-finance',
          stepNum: '16',
          tag: '16 // BILLING & INVOICING',
          title: 'Billing & Invoice Management',
          desc: 'Get a clear view of billing activity, outstanding work, collections, and financial performance without cumbersome administrative overhead.',
          bullets: [
            'Track billable hours, fixed matter fees, and retainer tranches seamlessly',
            'Create, review, track, and manage invoices for legal work and case expenses',
            'Real-time collections visibility to accelerate firm cash flow and realization',
          ],
          ctaLabel: 'Explore Billing & Invoice Management',
          ctaHref: '/billing-invoicing',
          visual: <BillingOverviewVisual />,
          align: 'right',
        },
        {
          id: 'team-management',
          stepNum: '17',
          tag: '17 // ROLES & SECURITY',
          title: 'Firm & Team Management',
          desc: 'Organize your firm\'s team, roles, permissions, and workspace settings in one place.',
          bullets: [
            'Custom roles for senior partners, briefing counsel, associates, and finance',
            'Matter-level access boundaries protect sensitive client secrets and documents',
            'Complete activity logs maintain firm-wide accountability and visibility',
          ],
          ctaLabel: 'Explore Firm & Team Management',
          ctaHref: '/firm-management',
          visual: <TeamManagementVisual />,
          align: 'left',
        },
        {
          id: 'ecourts-monitoring',
          stepNum: '18',
          tag: '18 // PUBLIC REGISTRY CONNECTION',
          title: 'eCourts Case Monitoring',
          desc: 'Keep track of relevant public case information and connect it with the matters you manage in BrilliusLaw.',
          bullets: [
            'Automatic updates from Supreme Court, High Courts, and NCLT listings',
            'Next listing dates and court orders matched directly with internal client files',
            'Keep upcoming hearing and cause list information easier to track',
          ],
          ctaLabel: 'Explore eCourts Case Monitoring',
          ctaHref: '/ecourts-sync',
          visual: <ECourtsMonitoringVisual />,
          align: 'right',
        },
        {
          id: 'whatsapp-alerts',
          stepNum: '19',
          tag: '19 // INSTANT ALERTS & REMINDERS',
          title: 'WhatsApp Alerts',
          desc: 'Stay informed about important case activities, tasks, hearings, and document updates through WhatsApp alerts.',
          bullets: [
            'Stay informed about upcoming and same-day court listings with bench details',
            'Receive timely reminders for overdue tasks and important filing deadlines',
            'Get instant notifications for draft review requests, revisions, and document approvals',
          ],
          ctaLabel: 'Explore WhatsApp Alerts',
          ctaHref: '/whatsapp-alerts',
          visual: <WhatsAppAlertsVisual />,
          align: 'left',
        },
      ],
    },
  ];

  return (
    <section className="features-roadmap-section" aria-labelledby="roadmap-overview-heading">
      <div className="content-container">
        {/* Roadmap Introduction Header */}
        <div className="roadmap-header">
          <div className="roadmap-eyebrow-wrapper">
            <span className="roadmap-eyebrow">LEGAL WORKFLOW ROADMAP</span>
            <span className="roadmap-eyebrow-line" aria-hidden="true" />
          </div>
          <h2 id="roadmap-overview-heading" className="roadmap-main-title">
            How a Matter Moves Through BrilliusLaw
          </h2>
          <p className="roadmap-main-desc">
            Explore the connected journey of an Indian legal matter. From client onboarding and court hearings to drafting, legal research, evidence, and billing—every feature connects into one unified workflow.
          </p>
        </div>

        {/* Interactive Sticky Stage Navigation Ribbon */}
        <nav className="roadmap-stage-ribbon" aria-label="Roadmap Stages Navigation">
          <div className="stage-ribbon-track">
            {stages.map((st) => (
              <a key={st.stageId} href={"#" + st.stageId} className="stage-ribbon-pill">
                <span className="ribbon-pill-num">{st.stageNumber}</span>
                <span className="ribbon-pill-text">{st.title}</span>
              </a>
            ))}
          </div>
        </nav>

        {/* The Continuous Roadmap Journey */}
        <div className="roadmap-journey-container">
          {/* Continuous Center Spine Line */}
          <div className="roadmap-center-spine" aria-hidden="true" />

          {/* Render All 7 Stages */}
          {stages.map((stage) => (
            <div key={stage.stageId} id={stage.stageId} className="roadmap-stage-group">
              {/* Stage Header Banner on the Spine */}
              <div className="stage-banner-node">
                <div className="stage-banner-badge">
                  <span className="stage-badge-icon">{stage.icon}</span>
                  <span className="stage-badge-num">STAGE {stage.stageNumber}</span>
                </div>
                <h3 className="stage-banner-title">{stage.title}</h3>
                <p className="stage-banner-sub">{stage.subtitle}</p>
              </div>

              {/* Milestones within this stage */}
              <div className="stage-milestones-list">
                {stage.milestones.map((ms) => {
                  const isTextLeft = ms.align === 'left';
                  return (
                    <div
                      key={ms.id}
                      id={ms.id}
                      className={"roadmap-milestone-row " + (isTextLeft ? "layout-text-left" : "layout-text-right")}
                    >
                      {/* Central Spine Checkpoint Marker */}
                      <div className="milestone-spine-marker" aria-hidden="true">
                        <div className="marker-ring">
                          <span className="marker-num">{ms.stepNum}</span>
                        </div>
                        <div className="marker-branch-line" />
                      </div>

                      {/* Text Column */}
                      <div className="milestone-text-card">
                        <div className="milestone-tag">{ms.tag}</div>
                        <h4 className="milestone-title">{ms.title}</h4>
                        <p className="milestone-desc">{ms.desc}</p>

                        <ul className="milestone-bullets">
                          {ms.bullets.map((b, bIdx) => (
                            <li key={bIdx}>
                              <div className="bullet-check-icon" aria-hidden="true">
                                <Check size={13} strokeWidth={2.8} />
                              </div>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Milestone Bottom Explore CTA */}
                        <div className="milestone-footer">
                          <Link href={ms.ctaHref} className="milestone-explore-btn">
                            <span>{ms.ctaLabel}</span>
                            <ArrowRight size={13} />
                          </Link>
                        </div>
                      </div>

                      {/* Visual Mockup Column */}
                      <div className="milestone-visual-card">
                        {ms.visual}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Stage Transition Callout */}
              {stage.transitionNote && (
                <div className="stage-transition-row" aria-hidden="true">
                  <div className="stage-transition-pill">
                    <ArrowDown size={14} className="transition-arrow" />
                    <span>{stage.transitionNote}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
