import React, { useState, useRef } from 'react';
import { SlideInLeft, SlideInRight, ScaleUp } from './MotionWrapper';

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
      vid.play().catch(() => { });
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
    vid.play().catch(() => { });
    setIsPlaying(true);
  };

  return (
    <section className="section" id="video-showcase">
      <div className="container">
        {/* Exact Machin 2-Column Section Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '3rem', alignItems: 'start', marginBottom: '3.5rem' }}>
          <SlideInLeft>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1d4ed8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              INSIDE OUR FACILITY
            </span>
          </SlideInLeft>
          <SlideInRight>
            <h2 style={{ fontSize: '2.35rem', fontWeight: 700, color: '#0f172a', lineHeight: '1.25', margin: 0, letterSpacing: '-0.02em', borderBottom: 'none', paddingBottom: 0 }}>
              GPS Spindles manufactures and rebuilds{' '}
              <span style={{ color: '#1d4ed8', fontWeight: 700 }}>precision high-speed CNC spindles</span> for industries like automotive, aerospace, defense, and manufacturing.
            </h2>
          </SlideInRight>
        </div>

        <ScaleUp delay={0.1}>
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
        </ScaleUp>
      </div>
    </section>
  );
}
