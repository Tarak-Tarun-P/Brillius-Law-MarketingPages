import React from 'react';
import {
  Shield,
  Briefcase,
  Users,
  GraduationCap,
  UserCheck,
  Receipt,
  CheckCircle2,
} from 'lucide-react';
import './FirmRolesManagement.css';

interface RoleType {
  title: string;
  category: string;
  responsibilities: string;
  icon: React.ReactNode;
  tagClass: string;
}

export const FirmRolesManagement: React.FC = () => {
  const roles: RoleType[] = [
    {
      title: 'Managing Partners',
      category: 'Firm Leadership',
      responsibilities: 'Practice-wide oversight, financial approvals, fee structures, and partner assignments.',
      icon: <Shield size={18} />,
      tagClass: 'tag-partner',
    },
    {
      title: 'Senior Counsel',
      category: 'Senior Advocacy',
      responsibilities: 'Lead strategist on key matters, final pleadings review, and hearing appearances.',
      icon: <Briefcase size={18} />,
      tagClass: 'tag-counsel',
    },
    {
      title: 'Associates & Advocates',
      category: 'Case Execution',
      responsibilities: 'Drafting petitions, managing assigned matter timelines, client interactions, and legal research.',
      icon: <Users size={18} />,
      tagClass: 'tag-assoc',
    },
    {
      title: 'Paralegals & Interns',
      category: 'Research & Preparation',
      responsibilities: 'Case law discovery, brief preparation, note compilation, and preliminary draft assistance.',
      icon: <GraduationCap size={18} />,
      tagClass: 'tag-intern',
    },
    {
      title: 'Legal Clerks',
      category: 'Registry & Filing',
      responsibilities: 'Registry filings, physical document service, cause list verification, and court filing coordination.',
      icon: <UserCheck size={18} />,
      tagClass: 'tag-clerk',
    },
    {
      title: 'Finance & Billing Teams',
      category: 'Operations',
      responsibilities: 'Invoice generation, fee tracking, client billing statements, and retainer management.',
      icon: <Receipt size={18} />,
      tagClass: 'tag-finance',
    },
  ];

  return (
    <section className="firm-roles-section" aria-labelledby="roles-heading">
      <div className="content-container">
        <div className="roles-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">ROLE CONFIGURATION</span>
          </div>
          <h2 id="roles-heading" className="roles-title">
            Manage Your Team, Your Way
          </h2>
          <p className="roles-desc">
            Set up your team around the way your firm actually works. Give different members the access and responsibilities appropriate to their role.
          </p>
        </div>

        <div className="roles-grid">
          {roles.map((r, idx) => (
            <div key={idx} className="role-card-item">
              <div className="role-card-top">
                <div className="role-icon-box">{r.icon}</div>
                <span className={`role-cat-badge ${r.tagClass}`}>{r.category}</span>
              </div>
              <h3 className="role-card-name">{r.title}</h3>
              <p className="role-card-text">{r.responsibilities}</p>
              <div className="role-card-footer">
                <CheckCircle2 size={12} color="#C6A15B" />
                <span>Customizable role permissions</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
