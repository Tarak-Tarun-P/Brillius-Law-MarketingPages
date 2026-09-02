import React from 'react';
import { Mic, ArrowRight, Check } from 'lucide-react';
import './JournalVoice.css';

export const JournalVoice: React.FC = () => {
  return (
    <section className="journal-voice-section" aria-labelledby="voice-heading">
      <div className="content-container">
        <div className="voice-header">
          <span className="voice-eyebrow">CAPTURE YOUR THOUGHTS</span>
          <h2 id="voice-heading" className="voice-title">
            Don't Stop to Type. Just Speak.
          </h2>
          <p className="voice-desc">
            Have an idea while reading a statute, analyzing a case, or reviewing a draft? Simply record your thought and save it directly to your Journal.
          </p>
        </div>

        {/* 3-Step Voice Workflow Banner */}
        <div className="voice-flow-strip">
          <div className="voice-flow-step">
            <span className="v-flow-num">01</span>
            <span className="v-flow-text">TAP RECORD</span>
          </div>
          <ArrowRight size={14} color="#C6A15B" className="v-flow-arrow" />
          <div className="voice-flow-step">
            <span className="v-flow-num">02</span>
            <span className="v-flow-text">SPEAK YOUR THOUGHT</span>
          </div>
          <ArrowRight size={14} color="#C6A15B" className="v-flow-arrow" />
          <div className="voice-flow-step">
            <span className="v-flow-num">03</span>
            <span className="v-flow-text">SAVE TO JOURNAL</span>
          </div>
        </div>

        {/* Realistic Voice Capture Card Visual */}
        <div className="voice-card-box">
          <div className="voice-card-topbar">
            <div className="v-topbar-left">
              <Mic size={16} color="#C6A15B" />
              <strong className="v-topbar-title">Quick Voice Capture // Spoken Thought Note</strong>
            </div>
            <span className="v-topbar-badge">Instant Recording</span>
          </div>

          <div className="voice-card-body">
            {/* Live Waveform & Mic State */}
            <div className="voice-recording-row">
              <div className="voice-recording-mic-box">
                <Mic size={22} color="#091526" />
              </div>
              <div className="voice-waveform-display" aria-hidden="true">
                <span className="wave-bar wb-1" />
                <span className="wave-bar wb-3" />
                <span className="wave-bar wb-5" />
                <span className="wave-bar wb-2" />
                <span className="wave-bar wb-4" />
                <span className="wave-bar wb-6" />
                <span className="wave-bar wb-3" />
                <span className="wave-bar wb-5" />
                <span className="wave-bar wb-2" />
                <span className="wave-bar wb-4" />
              </div>
              <span className="recording-time-pill">00:14 Recorded</span>
            </div>

            {/* Saved Spoken Text Box */}
            <div className="spoken-text-box">
              <span className="spoken-text-label">CAPTURED THOUGHT NOTE</span>
              <p className="spoken-quote">
                "Need to verify whether the 1967 Supreme Court ruling in Niranjan Shankar Golikari on negative covenants was distinguished in the 2006 Zaheer Khan judgment regarding post-contractual period."
              </p>
            </div>

            {/* Action Row */}
            <div className="voice-action-row">
              <span className="voice-attached-tag">Attached Source: Section 27 (Indian Contract Act)</span>
              <span className="btn-save-voice-note">
                <Check size={14} />
                <span>Save to Journal Notes</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
