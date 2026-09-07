import React from 'react';
import {
  Users,
  Briefcase,
  FileText,
  Search,
  PenLine,
  Calendar,
  Layers,
  ArrowRight,
} from 'lucide-react';
import './ConnectedWorkflowSection.css';

interface WorkflowStep {
  id: string;
  stepNumber: string;
  label: string;
  sub: string;
  icon: React.ReactNode;
  path: string;
}

export const ConnectedWorkflowSection: React.FC = () => {
  const steps: WorkflowStep[] = [
    {
      id: 'clients',
      stepNumber: '01',
      label: 'Clients',
      sub: 'Onboarding & records',
      icon: <Users size={20} strokeWidth={1.6} />,
      path: '/client-management',
    },
    {
      id: 'cases',
      stepNumber: '02',
      label: 'Cases',
      sub: 'Matter organization',
      icon: <Briefcase size={20} strokeWidth={1.6} />,
      path: '/cases',
    },
    {
      id: 'documents',
      stepNumber: '03',
      label: 'Documents',
      sub: 'Vault & evidence',
      icon: <FileText size={20} strokeWidth={1.6} />,
      path: '/document-storage',
    },
    {
      id: 'research',
      stepNumber: '04',
      label: 'Research',
      sub: 'Statutes & precedents',
      icon: <Search size={20} strokeWidth={1.6} />,
      path: '/legal-research',
    },
    {
      id: 'drafting',
      stepNumber: '05',
      label: 'Drafting',
      sub: 'Pleadings & review',
      icon: <PenLine size={20} strokeWidth={1.6} />,
      path: '/case-drafts',
    },
    {
      id: 'hearings',
      stepNumber: '06',
      label: 'Hearings',
      sub: 'eCourts & calendar',
      icon: <Calendar size={20} strokeWidth={1.6} />,
      path: '/hearings',
    },
    {
      id: 'matters',
      stepNumber: '07',
      label: 'Matters',
      sub: 'Complete outcome',
      icon: <Layers size={20} strokeWidth={1.6} />,
      path: '/firm-management',
    },
  ];

  return (
    <section className="connected-workflow-section" aria-labelledby="workflow-heading">
      <div className="content-container">
        {/* Section Header */}
        <div className="workflow-header">
          <div className="workflow-eyebrow-wrapper">
            <span className="workflow-eyebrow">CONNECTED WORKFLOW</span>
            <span className="workflow-eyebrow-line" aria-hidden="true" />
          </div>
          <h2 id="workflow-heading" className="workflow-heading">
            How BrilliusLaw Fits Together
          </h2>
          <p className="workflow-subtext">
            A cohesive workflow designed for Indian legal practice—uniting every stage of legal work into one continuous, organized ecosystem.
          </p>
        </div>

        {/* Workflow Chain Card */}
        <div className="workflow-card">
          <div className="workflow-steps-chain" role="list">
            {steps.map((step, idx) => (
              <React.Fragment key={step.id}>
                <a
                  href={step.path}
                  className="workflow-step-node"
                  role="listitem"
                  title={"Explore " + step.label}
                >
                  <div className="step-node-header">
                    <span className="step-node-num">{step.stepNumber}</span>
                    <div className="step-node-icon" aria-hidden="true">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="step-node-label">{step.label}</h3>
                  <p className="step-node-sub">{step.sub}</p>
                </a>

                {idx < steps.length - 1 && (
                  <div className="workflow-connector" aria-hidden="true">
                    <ArrowRight size={16} className="connector-arrow" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="workflow-footer-badge">
            <span className="workflow-badge-dot" aria-hidden="true" />
            <span className="workflow-badge-text">
              Unified Matter Oversight • Every step connected without duplicate effort
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
