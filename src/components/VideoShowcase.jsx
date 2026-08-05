import React, { useState, useRef } from 'react';

export default function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  const handleToggleSound = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (isPlaying) {
      vid.muted = true;
      setIsPlaying(false);
    } else {
      vid.muted = false;
      vid.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleFullscreen = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.requestFullscreen) vid.requestFullscreen();
    else if (vid.webkitRequestFullscreen) vid.webkitRequestFullscreen();
    else if (vid.webkitEnterFullscreen) vid.webkitEnterFullscreen();
    vid.muted = false;
    vid.play().catch(() => {});
    setIsPlaying(true);
  };

  return (
    <section className="section" id="video-showcase">
      <div className="container">
        <div className="section-header-enhanced">
          <div className="label-tag-wrapper">
            <span className="label-tag-enhanced">
              <span className="dot"></span>
              Inside Our Facility
            </span>
          </div>
          <h2 className="section-title-enhanced">
            General Precision <span className="gradient-text">Spindles</span>
          </h2>
          <div className="title-divider-enhanced"></div>
        </div>

        <div className="proc-video-wrap" style={{ marginBottom: 0 }}>
          <div className="proc-video-container">
            <video
              ref={videoRef}
              className={`proc-video ${videoLoaded ? 'loaded' : ''}`}
              src="/videos/Initial_Greeting_and_Offer.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onCanPlay={() => setVideoLoaded(true)}
            />
            {/* Gradient overlay for readability */}
            <div className="proc-video-overlay" />

            {/* Bottom-left: live badge */}
            <div className="proc-video-badge">
              <span className="proc-video-live-dot" />
              Company Introduction
            </div>

            {/* Top-right: Controls (Mute & Fullscreen) */}
            <div className="vs-ctrl-row" style={{ position: 'absolute', top: '1.25rem', right: '1.5rem', display: 'flex', gap: '0.5rem' }}>
              <button className="vs-ctrl-btn" onClick={handleToggleSound} aria-label={isPlaying ? 'Mute' : 'Unmute'} style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '0.6rem', borderRadius: '50%', cursor: 'pointer', display: 'flex' }}>
                {isPlaying ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                )}
              </button>
              <button className="vs-ctrl-btn" onClick={handleFullscreen} aria-label="Fullscreen" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '0.6rem', borderRadius: '50%', cursor: 'pointer', display: 'flex' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
