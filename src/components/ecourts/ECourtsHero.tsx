import React from 'react';
import {
  ArrowRight,
  Landmark,
  CheckCircle2,
  Calendar,
  FileText,
  Clock,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import './ECourtsHero.css';

export const ECourtsHero: React.FC = () => {
  const scrollToExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('ecourts-cnr-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="ecourts-hero-section" aria-label="eCourts Sync Hero">
      {/* Ambient glows */}
      <div className="ecourts-hero-glow glow-gold" aria-hidden="true" />
      <div className="ecourts-hero-glow glow-navy" aria-hidden="true" />

      <div className="content-container">
        <div className="ecourts-hero-grid">
          {/* LEFT: Headline & Value Proposition */}
          <div className="ecourts-hero-left animate-fade-in-up">
            <div className="ecourts-hero-eyebrow-wrapper">
              <span className="ecourts-hero-eyebrow">LIVE ECOURTS SYNC &amp; TRACKING</span>
              <span className="ecourts-hero-eyebrow-line" aria-hidden="true" />
            </div>

            <h1 className="ecourts-hero-headline">
              Stay Connected to
              <br />
              <span className="gold-accent-text">the Court.</span>
            </h1>

            <p className="ecourts-hero-description">
              Connect your case to official eCourts records and keep track of hearings, case history, and court orders from one place.
            </p>

            <div className="ecourts-hero-actions">
              <a href="#get-started" className="btn-ecourts-primary">
                <span>Get Started</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                href="#ecourts-cnr-section"
                className="btn-ecourts-secondary"
                onClick={scrollToExplore}
              >
                <span>Explore eCourts Sync</span>
                <ChevronRight size={15} aria-hidden="true" />
              </a>
            </div>

            {/* Trust Pills */}
            <div className="ecourts-trust-pills">
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>CNR-Linked Records</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Official Orders &amp; Daily Notes</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Hearings &amp; History Timeline</span>
              </span>
            </div>
          </div>

          {/* RIGHT: Realistic Court Case Tracking Visual */}
          <div className="ecourts-hero-right animate-fade-in">
            <div className="ecourts-mockup-card">
              {/* Window Header */}
              <div className="ecourts-mockup-header">
                <div className="mockup-window-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="ecourts-header-title">
                  <Landmark size={13} color="#C6A15B" />
                  <span>CNR: KAHC010023452023 • High Court of Karnataka</span>
                </div>
                <span className="ecourts-sync-status">Synced</span>
              </div>

              {/* Case Title Banner */}
              <div className="ecourts-case-banner">
                <div className="case-badge-row">
                  <span className="case-type-badge">COMMERCIAL APPEAL</span>
                  <span className="case-num-text">Comm. Appeal No. 142/2023</span>
                </div>
                <strong className="case-parties-title">
                  M/s Bengaluru Urban Tech Infra vs State of Karnataka &amp; Ors.
                </strong>
                <span className="bench-info">Bench: Division Bench 02 (Court Hall No. 04)</span>
              </div>

              {/* Hearing & Status Snapshot */}
              <div className="ecourts-snapshot-grid">
                <div className="snapshot-box upcoming-box">
                  <div className="snap-label-row">
                    <Calendar size={12} color="#C6A15B" />
                    <span className="snap-lbl">NEXT HEARING DATE</span>
                  </div>
                  <strong className="snap-date-val">24 Oct 2023</strong>
                  <span className="snap-stage-text">Stage: Final Arguments (Item #14)</span>
                </div>

                <div className="snapshot-box filing-box">
                  <div className="snap-label-row">
                    <Clock size={12} color="#94A3B8" />
                    <span className="snap-lbl">FILING DETAILS</span>
                  </div>
                  <strong className="snap-date-val">Filed: 14 Feb 2023</strong>
                  <span className="snap-stage-text">Reg: Ready for Hearing</span>
                </div>
              </div>

              {/* Latest Order Snippet */}
              <div className="ecourts-latest-order">
                <div className="order-row-top">
                  <div className="order-icon-title">
                    <FileText size={14} color="#C6A15B" />
                    <strong className="order-title">Latest Daily Order (09 Oct 2023)</strong>
                  </div>
                  <span className="order-download-link">
                    <span>View PDF</span>
                    <ExternalLink size={11} />
                  </span>
                </div>
                <p className="order-summary-text">
                  “Learned Senior Counsel for Appellant concluded submissions. List for Respondent counter-arguments on 24.10.2023 at 2:30 PM.”
                </p>
              </div>

              {/* Case History Timeline Preview */}
              <div className="ecourts-history-snippet">
                <span className="history-preview-title">RECENT PROCEEDINGS</span>
                <div className="history-mini-list">
                  <div className="mini-item">
                    <span className="mini-dot active" />
                    <span className="mini-date">09 Oct 2023:</span>
                    <span className="mini-text">Arguments Part-Heard</span>
                  </div>
                  <div className="mini-item">
                    <span className="mini-dot" />
                    <span className="mini-date">21 Sep 2023:</span>
                    <span className="mini-text">Rejoinder Affidavit Filed</span>
                  </div>
                  <div className="mini-item">
                    <span className="mini-dot" />
                    <span className="mini-date">04 Aug 2023:</span>
                    <span className="mini-text">Interim Relief Extended</span>
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
