import React, { useState, useRef, useEffect } from 'react';
import { brandLogos } from '../components/BrandLogos';
import { SlideInLeft, SlideInRight, ScaleUp, FadeUp, TextReveal, StaggerContainer, StaggerItem } from '../components/MotionWrapper';
import PromoBannerCard from '../components/PromoBannerCard';
import CadDrawing from '../components/CadDrawing';

/* ── 6-Step process data ─────────────────────────────────── */
const steps = [
  {
    num: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 14l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Dismantling & Root-Cause Diagnosis',
    tag: 'Intake Inspection',
    desc: 'Incoming spindle inspection under controlled conditions. We log vibration signals, shaft concentricity, stator resistance, and encoder readouts before systematic teardown.',
    metric: 'Sub-micron measurement',
  },
  {
    num: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 11h20M9 6v5M19 6v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Fixed-Price Technical Report',
    tag: 'Transparent Quote',
    desc: 'Itemized engineering report detailing mechanical faults, worn bearing preloads, grinding needs, and exact costs. Zero hidden charges — work proceeds after client approval.',
    metric: '100% cost transparency',
  },
  {
    num: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 4v3M14 21v3M4 14h3M21 14h3M6.9 6.9l2.1 2.1M19 19l2.1 2.1M6.9 21.1l2.1-2.1M19 9l2.1-2.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Taper & TCG Cylindrical Grinding',
    tag: 'Precision Machining',
    desc: 'High-precision CNC grinding of tapers and housing bores to sub-micron concentricity. Hard-chrome plating restores dimensional specs to within ±0.0005mm.',
    metric: '±0.0005mm accuracy',
  },
  {
    num: '04',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L4 8v6c0 5.5 4.3 10.7 10 12 5.7-1.3 10-6.5 10-12V8L14 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 14l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'ISO Class 7 Cleanroom Assembly',
    tag: 'Cleanroom Mounting',
    desc: 'All precision bearings and shafts are assembled inside our dust-free positive-pressure cleanroom under strict thermal and pre-load calibration protocols.',
    metric: 'ISO Class 7 environment',
  },
  {
    num: '05',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4a10 10 0 100 20A10 10 0 0014 4z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 9v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'High-Speed Test Stand Balancing',
    tag: 'Dynamic Run-In',
    desc: 'Spindles undergo multi-hour dynamic balancing on automated test stands. Vibration amplitude, speed ramps, and bearing temperatures are continuously recorded.',
    metric: 'Up to 100,000 RPM tested',
  },
  {
    num: '06',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 8h18l-2 12H7L5 8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 8V6a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Quality Seal & Crated Dispatch',
    tag: 'Secure Shipping',
    desc: 'Each rebuilt unit is vacuum-sealed and shipped in custom shock-absorbing timber crates alongside digital QA certificates and runout diagnostic logs.',
    metric: '1-Year Warranty Cert',
  },
];

/* ── OEM Comparison data ──────────────────────────────────── */
const compareRows = [
  {
    feature: 'Average Repair Cost',
    oem: '100% Full OEM List Price',
    gps: '30–40% Savings vs OEM New Unit',
    better: true,
  },
  {
    feature: 'Turnaround Time',
    oem: '4–6 Weeks Standard Wait',
    gps: '6–8 Business Days (48hr Priority)',
    better: true,
  },
  {
    feature: 'Bearing Options',
    oem: 'Standard Steel Bearings Only',
    gps: 'Si₃N₄ Ceramic Hybrid Retrofit Option',
    better: true,
  },
  {
    feature: 'Warranty Coverage',
    oem: '6 to 12 Month Basic Warranty',
    gps: '12-Month Comprehensive + Digital QA Cert',
    better: true,
  },
  {
    feature: 'Brand Support',
    oem: 'Single Proprietary Brand Only',
    gps: '20+ Global OEM Brands Supported',
    better: true,
  },
];

/* ── Brand coverage data ──────────────────────────────────── */
const allBrands = [
  'DMG MORI', 'HERMLE', 'KESSLER', 'GMN', 'CHIRON', 'WEISS', 'BLOHM',
  'FISCHER', 'STEP-TEC', 'SMS', 'IBAG',
  'MAZAK', 'MAKINO', 'MATSUURA', 'FANUC', 'OKUMA', 'TOYODA',
  'HSD', 'OMLAT', 'COLOMBO'
];

/* ── Upgrade cards ───────────────────────────────────────── */
const upgrades = [
  {
    title: 'Si₃N₄ Ceramic Hybrid Bearing Retrofit',
    body: 'We retrofit mechanical and motorized spindles with silicon-nitride hybrid bearings. Ceramic balls are 60% lighter than steel, reducing centrifugal friction, enabling higher RPM limits, and lowering operating temperatures.',
    stat: '60% LIGHTER BALL ELEMENTS',
    image: '/images/upgrade-bg-adobe-14.png',
    navTarget: 'contact',
    navLabel: 'REQUEST CERAMIC RETROFIT',
  },
  {
    title: 'Stator Winding & Encoder Synchronization',
    body: 'Integrated motor spindles often suffer stator short-circuits from coolant ingress. We rewind coils in-house, apply vacuum-pressure impregnation (VPI) epoxy, and calibrate Heidenhain / Fanuc / Kessler encoders to ensure accurate tool change orientation.',
    stat: 'IN-HOUSE VPI EPOXY PROCESS',
    image: '/images/upgrade-bg-adobe-12.png',
    navTarget: 'contact',
    navLabel: 'STATOR REWINDING DETAILS',
  },
];

export default function Services({ onNavigate }) {
  const [activeStep, setActiveStep] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const videoSectionRef = useRef(null);

  /* Auto-unmute on scroll into view & auto-mute on scroll away */
  useEffect(() => {
    const vid = videoRef.current;
    const sec = videoSectionRef.current;
    if (!vid || !sec) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            vid.muted = false;
            vid.play().then(() => setIsPlaying(true)).catch(() => {
              vid.muted = true;
              vid.play().catch(() => {});
              setIsPlaying(false);
            });
          } else {
            vid.muted = true;
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(sec);
    return () => observer.unobserve(sec);
  }, []);

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
    vid.muted = false;
    vid.play().catch(() => {});
    setIsPlaying(true);
  };

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* ══ HERO SECTION (DISTINCT PROCESS PAGE DESIGN) ══════════════════════ */}
      <section style={{ padding: '4rem 0 3.5rem 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1d4ed8', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'inline-block', marginBottom: '1rem' }}>
                SOP DOCUMENTED REBUILD PROTOCOL
              </span>
              <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', lineHeight: '1.18', margin: '0 0 1.25rem 0', letterSpacing: '-0.02em', borderBottom: 'none', paddingBottom: 0 }}>
                Certified Spindle Rebuilding <span style={{ color: '#1d4ed8' }}>&amp; Optimization</span>
              </h1>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.65', margin: '0 0 2rem 0', maxWidth: '600px' }}>
                Every spindle submitted for repair undergoes a document-controlled sequence of sub-micron diagnostic checks, CNC taper grinding, cleanroom assembly, and 100,000 RPM dynamic balancing.
              </p>

              {/* 3 Metric Badges Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
                <div>
                  <span style={{ fontSize: '1.6rem', fontWeight: 900, color: '#1d4ed8', display: 'block', lineHeight: 1 }}>6 Steps</span>
                  <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700, display: 'block', marginTop: '4px' }}>Documented SOP</span>
                </div>
                <div>
                  <span style={{ fontSize: '1.6rem', fontWeight: 900, color: '#1d4ed8', display: 'block', lineHeight: 1 }}>±0.0005mm</span>
                  <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700, display: 'block', marginTop: '4px' }}>Runout Precision</span>
                </div>
                <div>
                  <span style={{ fontSize: '1.6rem', fontWeight: 900, color: '#1d4ed8', display: 'block', lineHeight: 1 }}>100k RPM</span>
                  <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700, display: 'block', marginTop: '4px' }}>Test Stand Run-In</span>
                </div>
              </div>
            </div>

            {/* Right Card Panel — Signature Royal Blue Executive Benchmarks Container */}
            <div style={{ background: '#1d4ed8', borderRadius: '24px', padding: '2.5rem', color: '#ffffff', boxShadow: '0 20px 50px -10px rgba(29, 78, 216, 0.35)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#93c5fd', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                EXECUTIVE BENCHMARKS
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.75rem' }}>
                <div>
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff', display: 'block', lineHeight: 1 }}>6–8 Days</span>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', display: 'block', marginTop: '6px', fontWeight: 600 }}>Avg. Rebuild Turnaround</span>
                </div>
                <div>
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff', display: 'block', lineHeight: 1 }}>30–40%</span>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', display: 'block', marginTop: '6px', fontWeight: 600 }}>Savings vs OEM New</span>
                </div>
                <div>
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff', display: 'block', lineHeight: 1 }}>1-Year</span>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', display: 'block', marginTop: '6px', fontWeight: 600 }}>Comprehensive Warranty</span>
                </div>
                <div>
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff', display: 'block', lineHeight: 1 }}>20+</span>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', display: 'block', marginTop: '6px', fontWeight: 600 }}>OEM Brands Supported</span>
                </div>
              </div>
              <button
                onClick={() => onNavigate('contact')}
                style={{
                  width: '100%',
                  marginTop: '2rem',
                  background: '#ffffff',
                  color: '#1d4ed8',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '0.85rem 1.5rem',
                  fontWeight: 900,
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.15)'
                }}
              >
                <span>REQUEST FAST-TRACK EVALUATION</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 100VW FULL-WIDTH WORKSHOP VIDEO SHOWCASE ══════════ */}
      <section ref={videoSectionRef} style={{ padding: '4rem 0 3rem 0', background: '#f8fafc' }}>
        <div className="container">
          <div className="machin-2col-header" style={{ marginBottom: '4rem' }}>
            <SlideInLeft>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1d4ed8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                WORKSHOP IN ACTION
              </span>
            </SlideInLeft>
            <SlideInRight>
              <h2 style={{ fontSize: '2.35rem', fontWeight: 700, color: '#0f172a', lineHeight: '1.25', margin: 0, letterSpacing: '-0.02em', borderBottom: 'none', paddingBottom: 0 }}>
                Take an exclusive look inside our state-of-the-art facility where precision spindle rebuilding happens{' '}
                <span style={{ color: '#1d4ed8', fontWeight: 700 }}>under strict ISO Class 7 cleanroom standards.</span>
              </h2>
            </SlideInRight>
          </div>
        </div>

        {/* Full Width 100vw Video Container */}
        <ScaleUp delay={0.1}>
          <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', overflow: 'hidden', background: '#0f172a', position: 'relative' }}>
            <div style={{ width: '100%', height: 'auto', aspectRatio: '16 / 9', position: 'relative' }}>
              <video
                ref={videoRef}
                src="/videos/workshop_rebuild.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 60%, rgba(15,23,42,0.85) 100%)', pointerEvents: 'none' }} />

              {/* Controls (Mute & Fullscreen) */}
              <div style={{ position: 'absolute', top: '1.5rem', right: '2.5rem', display: 'flex', gap: '0.5rem', zIndex: 10 }}>
                <button onClick={handleToggleSound} aria-label={isPlaying ? 'Mute' : 'Unmute'} style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff', padding: '0.65rem', borderRadius: '50%', cursor: 'pointer', display: 'flex' }}>
                  {isPlaying ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" />
                    </svg>
                  )}
                </button>
                <button onClick={handleFullscreen} aria-label="Fullscreen" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff', padding: '0.65rem', borderRadius: '50%', cursor: 'pointer', display: 'flex' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </ScaleUp>
      </section>

      {/* ══ 6-STEP PROCESS SEQUENCE ═══════════════════════════ */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="machin-2col-header" style={{ marginBottom: '4rem' }}>
            <SlideInLeft>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1d4ed8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                PROCESS SEQUENCE
              </span>
            </SlideInLeft>
            <SlideInRight>
              <h2 style={{ fontSize: '2.35rem', fontWeight: 700, color: '#0f172a', lineHeight: '1.25', margin: 0, letterSpacing: '-0.02em', borderBottom: 'none', paddingBottom: 0 }}>
                Six documented stages — from intake inspection to certified delivery. Every spindle follows the exact same{' '}
                <span style={{ color: '#1d4ed8', fontWeight: 700 }}>Standard Operating Rebuild Protocol</span> with zero shortcuts.
              </h2>
            </SlideInRight>
          </div>

          {/* 6-Step Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.75rem' }}>
            {steps.map((step, idx) => (
              <ScaleUp key={idx} delay={idx * 0.08}>
                <div
                  onClick={() => setActiveStep(activeStep === idx ? null : idx)}
                  style={{
                    background: activeStep === idx ? '#eff6ff' : '#ffffff',
                    borderRadius: '18px',
                    border: activeStep === idx ? '2px solid #1d4ed8' : '1px solid #cbd5e1',
                    padding: '2rem 1.75rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 16px rgba(15,23,42,0.05)',
                    position: 'relative',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justify: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                      <span style={{ fontSize: '1.75rem', fontWeight: 900, color: '#1d4ed8', lineHeight: 1 }}>{step.num}</span>
                      <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#1d4ed8', background: 'rgba(29, 78, 216, 0.08)', padding: '4px 10px', borderRadius: '6px', textTransform: 'uppercase' }}>
                        {step.tag}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', lineHeight: '1.35', marginBottom: '0.85rem' }}>
                      {step.title}
                    </h3>

                    <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                      {step.desc}
                    </p>
                  </div>

                  <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1rem', display: 'flex', alignItems: 'center', gap: '8px', color: '#1d4ed8', fontSize: '0.8rem', fontWeight: 800 }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1d4ed8' }} />
                    <span>{step.metric}</span>
                  </div>
                </div>
              </ScaleUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OEM COMPARISON MATRIX ═════════════════════════════ */}
      <section style={{ padding: '5rem 0', background: '#ffffff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="machin-2col-header">
            <SlideInLeft>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1d4ed8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                B2B DECISION MATRIX
              </span>
            </SlideInLeft>
            <SlideInRight>
              <h2 style={{ fontSize: '2.35rem', fontWeight: 700, color: '#0f172a', lineHeight: '1.25', margin: 0, letterSpacing: '-0.02em', borderBottom: 'none', paddingBottom: 0 }}>
                OEM Replacement <span style={{ color: '#1d4ed8' }}>vs. GPS Rebuild</span>
              </h2>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: '1.6', marginTop: '0.75rem' }}>
                Side-by-side engineering and financial comparison to support your procurement decision.
              </p>
            </SlideInRight>
          </div>

          {/* Comparison Table */}
          <div style={{ borderRadius: '20px', border: '1px solid #cbd5e1', overflow: 'hidden', boxShadow: '0 12px 30px rgba(15,23,42,0.06)' }}>
            {/* Header Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', background: '#1d4ed8', color: '#ffffff', padding: '1.25rem 2rem', fontWeight: 800, fontSize: '0.9rem' }}>
              <div>EVALUATION PARAMETER</div>
              <div>OEM NEW UNIT</div>
              <div style={{ color: '#93c5fd' }}>GPS CERTIFIED REBUILD</div>
            </div>

            {/* Data Rows */}
            {compareRows.map((row, idx) => (
              <div
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1fr 1fr',
                  padding: '1.25rem 2rem',
                  background: idx % 2 === 0 ? '#ffffff' : '#f8fafc',
                  borderTop: '1px solid #e2e8f0',
                  alignItems: 'center',
                  fontSize: '0.92rem'
                }}
              >
                <div style={{ fontWeight: 800, color: '#0f172a' }}>{row.feature}</div>
                <div style={{ color: '#64748b' }}>{row.oem}</div>
                <div style={{ color: '#1d4ed8', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#16a34a', fontWeight: 900 }}>✓</span>
                  <span>{row.gps}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GLOBAL BRAND COVERAGE GRID ════════════════════════ */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="machin-2col-header">
            <SlideInLeft>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1d4ed8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                GLOBAL BRAND COVERAGE
              </span>
            </SlideInLeft>
            <SlideInRight>
              <h2 style={{ fontSize: '2.35rem', fontWeight: 700, color: '#0f172a', lineHeight: '1.25', margin: 0, letterSpacing: '-0.02em', borderBottom: 'none', paddingBottom: 0 }}>
                Manufacturer-Independent <span style={{ color: '#1d4ed8' }}>Repair Support</span>
              </h2>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: '1.6', marginTop: '0.75rem' }}>
                We repair motorized and mechanical spindles from all major global machine tool builders — no single-brand restriction.
              </p>
            </SlideInRight>
          </div>

          {/* Logo Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.25rem' }}>
            {Object.keys(brandLogos).map((key, i) => {
              const logo = brandLogos[key];
              return (
                <div
                  key={i}
                  style={{
                    background: '#ffffff',
                    borderRadius: '14px',
                    border: '1px solid #cbd5e1',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    boxShadow: '0 2px 8px rgba(15,23,42,0.04)',
                    transition: 'all 0.25s ease',
                    height: '85px'
                  }}
                >
                  <div style={{ width: '100%', maxHeight: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {React.cloneElement(logo.svg, { style: { width: '100%', height: 'auto', maxHeight: '38px', display: 'block' } })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ TECHNICAL UPGRADES & RETROFIT ═════════════════════ */}
      <section style={{ padding: '5rem 0', background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="machin-2col-header" style={{ marginBottom: '4rem' }}>
            <SlideInLeft>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1d4ed8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                PERFORMANCE UPGRADES
              </span>
            </SlideInLeft>
            <SlideInRight>
              <h2 style={{ fontSize: '2.35rem', fontWeight: 700, color: '#0f172a', lineHeight: '1.25', margin: 0, letterSpacing: '-0.02em', borderBottom: 'none', paddingBottom: 0 }}>
                High-efficiency motorized spindle re-engineering, ceramic bearing retrofits, and precision in-house{' '}
                <span style={{ color: '#1d4ed8', fontWeight: 700 }}>stator rewinding.</span>
              </h2>
            </SlideInRight>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {upgrades.map((u, idx) => (
              <ScaleUp key={idx} delay={idx * 0.15}>
                <div style={{ background: '#ffffff', borderRadius: '20px', border: '1px solid #cbd5e1', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1.1fr 1fr', height: '100%', boxShadow: '0 8px 24px rgba(15,23,42,0.06)' }}>
                  <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#1d4ed8', background: 'rgba(29, 78, 216, 0.08)', padding: '4px 10px', borderRadius: '6px', display: 'inline-block', marginBottom: '1rem' }}>
                        {u.stat}
                      </span>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', lineHeight: '1.3', marginBottom: '0.85rem' }}>
                        {u.title}
                      </h3>
                      <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: '1.6' }}>
                        {u.body}
                      </p>
                    </div>
                    <button
                      onClick={() => onNavigate(u.navTarget)}
                      style={{
                        marginTop: '1.5rem',
                        background: 'transparent',
                        color: '#1d4ed8',
                        border: 'none',
                        fontWeight: 800,
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: 0
                      }}
                    >
                      <span>{u.navLabel}</span>
                      <span>&rarr;</span>
                    </button>
                  </div>
                  <div style={{ background: '#f8fafc', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.25rem' }}>
                    <img
                      src={u.image}
                      alt={u.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        maxHeight: idx === 0 ? '400px' : '340px',
                        transform: idx === 0 ? 'scale(1.25)' : 'scale(1.05)',
                        objectFit: 'contain',
                        display: 'block',
                        filter: 'drop-shadow(0 12px 28px rgba(15,23,42,0.14))'
                      }}
                    />
                  </div>
                </div>
              </ScaleUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HIGH-IMPACT PROCESS PROMO BANNER ══════════════════ */}
      <PromoBannerCard onNavigate={onNavigate} />

    </div>
  );
}
