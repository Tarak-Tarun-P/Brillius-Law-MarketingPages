import React from 'react';
import './visuals.css';
import { Mic, Bookmark, Check, Clock, BookOpen } from 'lucide-react';

export const MyJournalVisual: React.FC = () => {
  return (
    <div className="visual-card journal-visual-card">
      <div className="visual-window-header">
        <div className="visual-window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="visual-window-title">My Journal // Personal Legal Notes & Bookmarks</span>
        <span className="visual-badge-shield">
          <Bookmark size={12} />
          <span>Private Notes</span>
        </span>
      </div>

      <div className="journal-body">
        {/* Quick Record Prompt Card */}
        <div className="journal-record-card">
          <div className="record-mic-btn">
            <Mic size={18} color="#091526" />
          </div>
          <div className="record-text-group">
            <span className="record-prompt-title">Have a thought? Record it instead of typing.</span>
            <span className="record-prompt-sub">Just record your observation and save it directly to your notes.</span>
          </div>
          <div className="record-waveform">
            <span className="wave-bar h-1" />
            <span className="wave-bar h-3" />
            <span className="wave-bar h-2" />
            <span className="wave-bar h-4" />
            <span className="wave-bar h-2" />
            <span className="wave-bar h-3" />
          </div>
        </div>

        {/* Two-Column Notes and Saved References */}
        <div className="journal-entries-grid">
          {/* Note Card 1: Recorded Thought */}
          <div className="journal-note-card featured">
            <div className="note-card-top">
              <span className="note-tag audio-tag">
                <Mic size={11} />
                <span>Recorded Note • Today 11:20 AM</span>
              </span>
              <span className="note-status-saved">
                <Check size={11} /> Saved
              </span>
            </div>
            <h5 className="note-title">Hearing Defense Angle // Section 27 Exception</h5>
            <p className="note-body-text">
              "Remember to emphasize during oral arguments that the non-compete only applied post-sale of goodwill under Exception 1, not during employment. Bring Century Spinning citation."
            </p>
            <div className="note-attached-ref">
              <BookOpen size={12} color="#C6A15B" />
              <span>Linked to Matter: Apex Technologies vs UOI</span>
            </div>
          </div>

          {/* Note Card 2: Bookmarked Section & Case */}
          <div className="journal-bookmarks-col">
            <div className="bookmark-entry-card">
              <div className="bookmark-entry-top">
                <span className="bookmark-type">Saved Law</span>
                <span className="bookmark-date"><Clock size={10} /> 2 days ago</span>
              </div>
              <h6 className="bookmark-title">Indian Contract Act, 1872 — Section 27</h6>
              <p className="bookmark-snippet">Saved Exception 1 (Sale of Goodwill) with personal highlight on local limits.</p>
            </div>

            <div className="bookmark-entry-card">
              <div className="bookmark-entry-top">
                <span className="bookmark-type">Saved Judgment</span>
                <span className="bookmark-date"><Clock size={10} /> Yesterday</span>
              </div>
              <h6 className="bookmark-title">Niranjan Shankar Golikari (Supreme Court)</h6>
              <p className="bookmark-snippet">Key ratio on negative covenants saved for court brief preparation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
