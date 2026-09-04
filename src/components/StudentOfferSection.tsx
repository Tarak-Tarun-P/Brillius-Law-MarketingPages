import React from 'react';
import { GraduationCap, ArrowRight, BookOpen, Search, FileText, Sparkles, CheckCircle2 } from 'lucide-react';
import './StudentOfferSection.css';

export const StudentOfferSection: React.FC = () => {
  const steps = [
    {
      label: 'LEARN',
      desc: 'Bare Acts & commentaries',
      icon: <BookOpen size={16} />,
    },
    {
      label: 'RESEARCH',
      desc: 'Case law & precedents',
      icon: <Search size={16} />,
    },
    {
      label: 'PRACTICE',
      desc: 'Drafting & moot preparation',
      icon: <FileText size={16} />,
    },
    {
      label: 'GROW',
      desc: 'Real legal readiness',
      icon: <Sparkles size={16} />,
    },
  ];

  const highlights = [
    'Access Bare Acts and legal research tools',
    'Practice drafting and organize study notes in My Journal',
    'Purpose-built workspace for Indian law students',
  ];

  return (
    <section className="student-offer-section" aria-labelledby="student-offer-heading">
      <div className="content-container">
        <div className="student-offer-card">
          {/* Subtle Ambient Lighting Effects */}
          <div className="student-card-glow student-card-glow-gold" aria-hidden="true" />
          <div className="student-card-glow student-card-glow-navy" aria-hidden="true" />

          <div className="student-offer-grid">
            {/* Left Content Column */}
            <div className="student-offer-left">
              {/* Premium Offer Badge */}
              <div className="student-badge-row">
                <div className="student-offer-badge">
                  <GraduationCap size={15} className="student-badge-icon" />
                  <span>FIRST 500 LAW STUDENTS</span>
                </div>
              </div>

              {/* Main Headline */}
              <h2 id="student-offer-heading" className="student-offer-headline">
                Your Legal Journey Starts Here.
              </h2>

              {/* Supporting Headline */}
              <p className="student-offer-subheadline">
                First 500 Law Students Get Started Free.
              </p>

              {/* Supporting Copy */}
              <p className="student-offer-copy">
                Explore BrilliusLaw, build your legal workflow, and experience modern tools designed for the way legal professionals work.
              </p>

              {/* Offer Checklist */}
              <ul className="student-highlights-list" role="list">
                {highlights.map((item, idx) => (
                  <li key={idx} className="student-highlight-item">
                    <CheckCircle2 size={16} className="student-check-icon" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Action Buttons */}
              <div className="student-cta-group">
                <a href="#get-started" className="btn-student-primary">
                  <span>Register Now</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
                <a href="#/solutions" className="btn-student-secondary">
                  <span>Learn More</span>
                </a>
              </div>

              {/* Supporting Eligibility Line */}
              <p className="student-eligibility-note">
                For the first 500 eligible law student registrations.
              </p>
            </div>

            {/* Right Visual Column (Editorial Legal Journey Flow) */}
            <div className="student-offer-right">
              <div className="student-visual-container">
                {/* Visual Header */}
                <div className="student-visual-header">
                  <div className="student-visual-badge">
                    <span className="visual-badge-pill">STUDENT WORKSPACE</span>
                  </div>
                  <span className="student-visual-caption">Jurisprudence & Learning Flow</span>
                </div>

                {/* Stepped Legal Journey: LEARN -> RESEARCH -> PRACTICE -> GROW */}
                <div className="student-flow-list">
                  {steps.map((step, idx) => (
                    <div key={idx} className="student-flow-step">
                      <div className="flow-step-left">
                        <div className="flow-step-icon-box">{step.icon}</div>
                        {idx < steps.length - 1 && <div className="flow-step-line" aria-hidden="true" />}
                      </div>
                      <div className="flow-step-content">
                        <div className="flow-step-title-row">
                          <span className="flow-step-number">0{idx + 1}</span>
                          <h3 className="flow-step-label">{step.label}</h3>
                        </div>
                        <p className="flow-step-desc">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Visual Card Footer Guarantee / Trust Banner */}
                <div className="student-visual-footer">
                  <div className="student-trust-indicator">
                    <span className="trust-dot" aria-hidden="true" />
                    <span className="trust-text">Academic & Moot Preparation Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
