import React from 'react';
import { Users, Briefcase, FolderOpen, PenLine, Archive, Calendar, BookOpen, Mic, Bot, IndianRupee, Building2, GraduationCap, Sparkles } from 'lucide-react';
import './SolutionsEcosystem.css';

export const SolutionsEcosystem: React.FC = () => {
  const ecosystemNodes = [
    { title: 'Clients', icon: <Users size={18} color="#091526" />, desc: 'Contact details & updates' },
    { title: 'Cases', icon: <Briefcase size={18} color="#091526" />, desc: 'Timelines & milestones' },
    { title: 'Documents', icon: <FolderOpen size={18} color="#C6A15B" />, desc: 'Encrypted storage vault' },
    { title: 'Drafting Lab', icon: <PenLine size={18} color="#C6A15B" />, desc: 'Ready-to-use clauses' },
    { title: 'Evidence', icon: <Archive size={18} color="#091526" />, desc: 'Organized case logs' },
    { title: 'Hearings', icon: <Calendar size={18} color="#091526" />, desc: 'Court cause list sync' },
    { title: 'Law Library', icon: <BookOpen size={18} color="#C6A15B" />, desc: 'Bare Acts & judgments' },
    { title: 'My Journal', icon: <Mic size={18} color="#C6A15B" />, desc: 'Record thoughts & notes' },
    { title: 'AI Assistant', icon: <Bot size={18} color="#091526" />, desc: 'Help with long files' },
    { title: 'Billing & Fees', icon: <IndianRupee size={18} color="#091526" />, desc: 'Retainers & invoices' },
  ];

  return (
    <section className="solutions-ecosystem-section" aria-labelledby="eco-title">
      <div className="content-container">
        <div className="solutions-eco-header">
          <span className="solutions-eco-eyebrow">ALL-IN-ONE CONNECTED PLATFORM</span>
          <h2 id="eco-title" className="solutions-eco-title">
            The BrilliusLaw Ecosystem
          </h2>
          <p className="solutions-eco-desc">
            Every feature connects naturally with the others—sharing information across clients, documents, research, and court dates without manual copying.
          </p>
        </div>

        {/* Central Hub Showcase Card */}
        <div className="solutions-eco-canvas">
          {/* Center Hub Indicator */}
          <div className="center-hub-card">
            <div className="hub-logo-circle">
              <Sparkles size={28} color="#C6A15B" />
            </div>
            <h3 className="hub-title">BRILLIUSLAW</h3>
            <span className="hub-sub">Connected Practice Hub</span>
          </div>

          {/* Connected Practice Capabilities Grid */}
          <div className="eco-capabilities-grid">
            {ecosystemNodes.map((node, i) => (
              <div key={i} className="eco-capability-card">
                <div className="eco-icon-box">{node.icon}</div>
                <div className="eco-text-col">
                  <span className="eco-node-title">{node.title}</span>
                  <span className="eco-node-desc">{node.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* 3 Audience Bridges at the Bottom */}
          <div className="eco-audiences-banner">
            <span className="banner-label">Serving Every Legal Professional in India</span>
            <div className="banner-audience-pills">
              <div className="audience-bridge-pill">
                <Building2 size={16} color="#C6A15B" />
                <span>For Law Firms</span>
              </div>
              <div className="audience-bridge-pill">
                <Briefcase size={16} color="#C6A15B" />
                <span>For Lawyers & Advocates</span>
              </div>
              <div className="audience-bridge-pill">
                <GraduationCap size={16} color="#C6A15B" />
                <span>For Law Students</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
