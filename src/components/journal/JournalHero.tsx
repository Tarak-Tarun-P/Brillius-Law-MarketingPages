import React from 'react';
import { ArrowRight, ArrowDown, Mic, Bookmark, CheckCircle2, Search, PlusCircle, Clock } from 'lucide-react';
import './JournalHero.css';

export const JournalHero: React.FC = () => {
  const scrollToHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('journal-how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="journal-hero-section" aria-label="My Journal Hero">
      {/* Ambient background glows */}
      <div className="journal-hero-glow glow-gold" aria-hidden="true" />
      <div className="journal-hero-glow glow-navy" aria-hidden="true" />

      <div className="content-container">
        <div className="journal-hero-grid">
          {/* LEFT: Headline & Value Proposition */}
          <div className="journal-hero-left animate-fade-in-up">
            <div className="journal-hero-eyebrow-wrapper">
              <span className="journal-hero-eyebrow">MY JOURNAL</span>
              <span className="journal-hero-eyebrow-line" aria-hidden="true" />
            </div>

            <h1 className="journal-hero-headline">
              Your Thoughts.
              <br />
              Your Notes.
              <br />
              Your Legal Work.
            </h1>

            <p className="journal-hero-description">
              Save important points, bookmark useful legal content, and capture your thoughts while you work. Everything you choose to keep is ready when you come back.
            </p>

            <div className="journal-hero-actions">
              <a href="#get-started" className="btn-journal-primary">
                <span>Explore My Journal</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#journal-how-it-works" className="btn-journal-secondary" onClick={scrollToHowItWorks}>
                <span>See How It Works</span>
                <ArrowDown size={15} aria-hidden="true" />
              </a>
            </div>

            {/* Trust Pills */}
            <div className="journal-trust-pills">
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Private &amp; Personal</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Quick Voice Capture</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Connected Bookmarks</span>
              </span>
            </div>
          </div>

          {/* RIGHT: Large Realistic My Journal Product Visual */}
          <div className="journal-hero-right animate-fade-in">
            <div className="journal-mockup-card">
              {/* Header Bar */}
              <div className="mockup-header-bar">
                <div className="mockup-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <span className="mockup-title">My Journal // Personal Workspace</span>
                <span className="mockup-badge">Private Notes</span>
              </div>

              {/* Action & Search Bar */}
              <div className="mockup-toolbar">
                <div className="toolbar-search">
                  <Search size={14} color="#94A3B8" />
                  <span className="search-placeholder">Search your notes, key points, bookmarks...</span>
                </div>
                <span className="btn-new-note-demo">
                  <PlusCircle size={13} />
                  <span>New Note</span>
                </span>
              </div>

              {/* Quick Record Banner */}
              <div className="hero-voice-banner">
                <div className="voice-mic-circle">
                  <Mic size={15} color="#091526" />
                </div>
                <div className="voice-text-col">
                  <span className="voice-title">Don't stop to type. Just speak.</span>
                  <span className="voice-sub">"Check if Section 27 exception applies to goodwill..."</span>
                </div>
                <div className="voice-wave-demo" aria-hidden="true">
                  <span className="wave-line h-1" />
                  <span className="wave-line h-3" />
                  <span className="wave-line h-2" />
                  <span className="wave-line h-4" />
                  <span className="wave-line h-2" />
                </div>
              </div>

              {/* Two Column Content: Continue & Bookmarks */}
              <div className="hero-journal-grid">
                {/* Left Col: Continue Where You Left Off */}
                <div className="journal-sub-col">
                  <div className="sub-col-header">
                    <Clock size={12} color="#C6A15B" />
                    <span>Continue Where You Left Off</span>
                  </div>

                  <div className="journal-mini-card">
                    <span className="card-tag-act">Indian Contract Act</span>
                    <strong className="card-item-title">Section 10 — Essential Elements</strong>
                    <span className="card-meta">Last viewed Yesterday at 04:15 PM</span>
                  </div>

                  <div className="journal-mini-card">
                    <span className="card-tag-note">Working Draft Notes</span>
                    <strong className="card-item-title">Indemnity Clause Argument</strong>
                    <span className="card-meta">Updated 2 days ago</span>
                  </div>
                </div>

                {/* Right Col: Saved Key Points & Bookmarks */}
                <div className="journal-sub-col">
                  <div className="sub-col-header">
                    <Bookmark size={12} color="#C6A15B" />
                    <span>Saved Bookmarks</span>
                  </div>

                  <div className="journal-mini-card bookmark-card">
                    <div className="bm-top">
                      <span className="bm-type">BARE ACT</span>
                      <Bookmark size={12} color="#C6A15B" fill="#C6A15B" />
                    </div>
                    <strong className="card-item-title">Section 27 — Restraint of Trade</strong>
                    <p className="card-item-snippet">Exception 1 (Sale of Goodwill) bookmarked for hearing prep.</p>
                  </div>

                  <div className="journal-mini-card bookmark-card">
                    <div className="bm-top">
                      <span className="bm-type">JUDGMENT</span>
                      <Bookmark size={12} color="#C6A15B" fill="#C6A15B" />
                    </div>
                    <strong className="card-item-title">Satyabrata Ghose (1954 SCR 310)</strong>
                    <p className="card-item-snippet">Landmark ratio on doctrine of frustration.</p>
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
