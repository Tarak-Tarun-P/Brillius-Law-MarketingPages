import React, { useState } from 'react';
import {
  ArrowRight,
  Shield,
  Users,
  CheckCircle2,
  Building2,
  Lock,
  UserCheck,
  ChevronRight,
  BadgeCheck,
} from 'lucide-react';
import './FirmHero.css';

export const FirmHero: React.FC = () => {
  const [activeRoleTab, setActiveRoleTab] = useState<'partners' | 'associates' | 'clerks'>('partners');

  const scrollToExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('firm-core-value');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="firm-hero-section" aria-label="Firm Management Hero">
      {/* Background ambient lighting */}
      <div className="firm-hero-glow glow-gold" aria-hidden="true" />
      <div className="firm-hero-glow glow-navy" aria-hidden="true" />

      <div className="content-container">
        <div className="firm-hero-grid">
          {/* LEFT: Headline & Value Proposition */}
          <div className="firm-hero-left animate-fade-in-up">
            <div className="firm-hero-eyebrow-wrapper">
              <span className="firm-hero-eyebrow">FIRM MANAGEMENT</span>
              <span className="firm-hero-eyebrow-line" aria-hidden="true" />
            </div>

            <h1 className="firm-hero-headline">
              Bring Your Firm
              <br />
              <span className="gold-accent-text">Together.</span>
            </h1>

            <p className="firm-hero-description">
              Manage your team, control access, streamline approvals, and keep your firm’s work organized in one secure place.
            </p>

            <div className="firm-hero-actions">
              <a href="#get-started" className="btn-firm-primary">
                <span>Get Started</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                href="#firm-core-value"
                className="btn-firm-secondary"
                onClick={scrollToExplore}
              >
                <span>Explore Firm Management</span>
                <ChevronRight size={15} aria-hidden="true" />
              </a>
            </div>

            {/* Trust Pills */}
            <div className="firm-trust-pills">
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Role-Based Access</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Review &amp; Approval Oversight</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Centralized Team Directory</span>
              </span>
            </div>
          </div>

          {/* RIGHT: Law Firm Operations & Team Management Visual */}
          <div className="firm-hero-right animate-fade-in">
            <div className="firm-mockup-card">
              {/* Window Header */}
              <div className="firm-mockup-header">
                <div className="mockup-window-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="firm-header-title">
                  <Building2 size={13} color="#C6A15B" />
                  <span>Chambers of Senior Advocate S. K. Mehta &amp; Partners</span>
                </div>
                <span className="firm-status-badge">18 Active Members</span>
              </div>

              {/* Workspace Navigation Bar */}
              <div className="firm-workspace-bar">
                <div className="workspace-tabs-group">
                  <button
                    type="button"
                    className={`firm-tab-btn ${activeRoleTab === 'partners' ? 'active' : ''}`}
                    onClick={() => setActiveRoleTab('partners')}
                  >
                    <Shield size={12} />
                    <span>Partners &amp; Senior Counsel</span>
                  </button>
                  <button
                    type="button"
                    className={`firm-tab-btn ${activeRoleTab === 'associates' ? 'active' : ''}`}
                    onClick={() => setActiveRoleTab('associates')}
                  >
                    <Users size={12} />
                    <span>Associates &amp; Advocates</span>
                  </button>
                  <button
                    type="button"
                    className={`firm-tab-btn ${activeRoleTab === 'clerks' ? 'active' : ''}`}
                    onClick={() => setActiveRoleTab('clerks')}
                  >
                    <UserCheck size={12} />
                    <span>Clerks &amp; Support</span>
                  </button>
                </div>
              </div>

              {/* Team Member Cards Display */}
              <div className="firm-team-list animate-fade-in" key={activeRoleTab}>
                {activeRoleTab === 'partners' && (
                  <>
                    <div className="member-card featured-member">
                      <div className="member-avatar partner-avatar">SM</div>
                      <div className="member-info">
                        <div className="member-name-row">
                          <strong className="member-name">S. K. Mehta</strong>
                          <span className="role-pill pill-partner">Managing Partner</span>
                        </div>
                        <span className="member-designation">Supreme Court &amp; Delhi High Court Practice</span>
                        <div className="member-permissions-row">
                          <span className="perm-tag"><BadgeCheck size={11} /> Full Firm Access</span>
                          <span className="perm-tag"><Lock size={11} /> Financial &amp; Fee Approvals</span>
                          <span className="perm-tag"><CheckCircle2 size={11} /> Final Filing Sign-Off</span>
                        </div>
                      </div>
                    </div>

                    <div className="member-card">
                      <div className="member-avatar counsel-avatar">RA</div>
                      <div className="member-info">
                        <div className="member-name-row">
                          <strong className="member-name">Radhika Agarwal</strong>
                          <span className="role-pill pill-counsel">Senior Partner</span>
                        </div>
                        <span className="member-designation">Commercial Disputes &amp; Arbitration Lead</span>
                        <div className="member-permissions-row">
                          <span className="perm-tag">Matter Lead</span>
                          <span className="perm-tag">Pleadings Oversight</span>
                          <span className="perm-tag">Team Reassignment</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeRoleTab === 'associates' && (
                  <>
                    <div className="member-card">
                      <div className="member-avatar assoc-avatar">AK</div>
                      <div className="member-info">
                        <div className="member-name-row">
                          <strong className="member-name">Arjun Kapoor</strong>
                          <span className="role-pill pill-assoc">Senior Associate</span>
                        </div>
                        <span className="member-designation">Commercial Court &amp; NCLT Matters</span>
                        <div className="member-permissions-row">
                          <span className="perm-tag">Assigned Matters (12)</span>
                          <span className="perm-tag">Drafting Lab Access</span>
                          <span className="perm-tag">Submit for Senior Review</span>
                        </div>
                      </div>
                    </div>

                    <div className="member-card">
                      <div className="member-avatar assoc-avatar">PS</div>
                      <div className="member-info">
                        <div className="member-name-row">
                          <strong className="member-name">Pooja Sharma</strong>
                          <span className="role-pill pill-assoc">Associate Advocate</span>
                        </div>
                        <span className="member-designation">Writ &amp; Appellate Research Division</span>
                        <div className="member-permissions-row">
                          <span className="perm-tag">Assigned Matters (8)</span>
                          <span className="perm-tag">Evidence &amp; Research Access</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeRoleTab === 'clerks' && (
                  <>
                    <div className="member-card">
                      <div className="member-avatar clerk-avatar">RS</div>
                      <div className="member-info">
                        <div className="member-name-row">
                          <strong className="member-name">Ramesh Singh</strong>
                          <span className="role-pill pill-clerk">Head Legal Clerk</span>
                        </div>
                        <span className="member-designation">Registry, Filing &amp; Cause List Coordination</span>
                        <div className="member-permissions-row">
                          <span className="perm-tag">Court Filing Indexing</span>
                          <span className="perm-tag">Hearings Calendar Sync</span>
                          <span className="perm-tag">Limited Matter Documents</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Bottom Quick Operations Status */}
              <div className="firm-mockup-footer">
                <div className="footer-status-item">
                  <span className="status-label">RECENT APPROVAL:</span>
                  <span className="status-val">Written Statement approved by S. K. Mehta for filing</span>
                </div>
                <span className="footer-timestamp">10 mins ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
