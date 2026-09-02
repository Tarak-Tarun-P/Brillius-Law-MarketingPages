import React from 'react';
import { Landmark, FileText, Calendar, ScrollText, Briefcase, ArrowDown, CheckCircle2 } from 'lucide-react';
import './ECourtsWorkflowIntegration.css';

export const ECourtsWorkflowIntegration: React.FC = () => {
  const flowNodes = [
    {
      title: 'Official Court Record',
      desc: 'eCourts registry database & cause list portals',
      icon: <Landmark size={18} />,
    },
    {
      title: 'Verified Case Information',
      desc: 'Parties, bench roster, filing dates, and case stages',
      icon: <FileText size={18} />,
    },
    {
      title: 'Calendar & Hearing Sync',
      desc: 'Automatic cause board listing & next date alerts',
      icon: <Calendar size={18} />,
    },
    {
      title: 'Orders & Daily Notes',
      desc: 'Interim directions, bench business, and PDF copies',
      icon: <ScrollText size={18} />,
    },
    {
      title: 'Integrated Matter Workspace',
      desc: 'Pleadings, journal notes, tasks, and team research in one place',
      icon: <Briefcase size={18} />,
      featured: true,
    },
  ];

  return (
    <section className="ecourts-integ-section" aria-labelledby="integ-heading">
      <div className="content-container">
        <div className="integ-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">UNIFIED WORKSPACE PIPELINE</span>
          </div>
          <h2 id="integ-heading" className="integ-title">
            Bring Court Information Into Your Daily Workflow.
          </h2>
          <p className="integ-desc">
            Instead of switching between different places to check case information, hearings, and orders, keep the available court information connected to the matter your team is already working on.
          </p>
        </div>

        {/* Vertical Connected Flow Diagram */}
        <div className="integ-pipeline-card">
          <div className="pipeline-nodes-column">
            {flowNodes.map((node, idx) => (
              <React.Fragment key={idx}>
                <div className={`pipeline-node ${node.featured ? 'featured-node' : ''}`}>
                  <div className="node-icon-box">{node.icon}</div>
                  <div className="node-details">
                    <strong className="node-title">{node.title}</strong>
                    <span className="node-desc">{node.desc}</span>
                  </div>
                </div>

                {idx < flowNodes.length - 1 && (
                  <div className="pipeline-connector-arrow" aria-hidden="true">
                    <ArrowDown size={14} color="#C6A15B" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="pipeline-footer">
            <CheckCircle2 size={13} color="#C6A15B" />
            <span>Eliminates constant context-switching between external portals and internal matter preparation files.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
