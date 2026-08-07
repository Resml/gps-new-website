import React from 'react';
import { SlideInLeft, SlideInRight, ScaleUp, FadeUp, TextReveal, StaggerContainer, StaggerItem } from '../components/MotionWrapper';
import FoundersShowcase from '../components/FoundersShowcase';
import BrandMarquee from '../components/BrandMarquee';
import PromoBannerCard from '../components/PromoBannerCard';

export default function About({ onNavigate }) {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* ══ 1. FRAMER INDUSTRIAL HERO SECTION ════════════════════════ */}
      <section style={{ padding: '4rem 0', background: '#f8fafc' }}>
        <div className="container">
          
          {/* Top 2-Column Header Row */}
          <div className="about-hero-header" style={{ alignItems: 'center' }}>
            {/* Left: Eyebrow + Huge Title */}
            <div>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1d4ed8', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '1.25rem' }}>
                ABOUT GPS SPINDLES
              </span>
              <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.2rem)', fontWeight: 700, color: '#111827', lineHeight: '1.1', margin: 0, letterSpacing: '-0.02em' }}>
                Pioneering sub-micron spindle engineering since 2017.
              </h1>
            </div>

            {/* Right: Subheadline Paragraph + Action Buttons */}
            <div>
              <p style={{ color: '#374151', fontSize: '1.05rem', lineHeight: '1.6', margin: '0 0 2rem 0', maxWidth: '420px', fontWeight: 500 }}>
                General Precision Spindles (GPS Spindles) is Pune's premier independent specialist in CNC, VMC, HMC, and High-Frequency spindle manufacturing, repair, and dynamic balancing.
              </p>
              <div>
                <button
                  onClick={() => onNavigate && onNavigate('contact')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: '#1d4ed8',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '0',
                    padding: '0.85rem 1.75rem',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    letterSpacing: '0.05em',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    transition: 'background 0.2s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = '#1e40af'}
                  onMouseOut={(e) => e.currentTarget.style.background = '#1d4ed8'}
                >
                  CONTACT DESK
                </button>
              </div>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '3.5rem 0' }} />

          {/* Metrics Row */}
          <div className="hero-metrics-4col">
            <div className="hero-metric-item">
              <div className="metric-val">20+</div>
              <div className="metric-lbl">Years of Experience</div>
            </div>
            <div className="hero-metric-item">
              <div className="metric-val">3,000+</div>
              <div className="metric-lbl">Spindles Rebuilt</div>
            </div>
            <div className="hero-metric-item">
              <div className="metric-val">24/7</div>
              <div className="metric-lbl">Emergency Support</div>
            </div>
            <div className="hero-metric-item">
              <div className="metric-val">1-Year</div>
              <div className="metric-lbl">Full Warranty</div>
            </div>
          </div>

          {/* Full-Width HD Workshop Facility Banner */}
          <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', height: '520px', position: 'relative', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', marginTop: '2rem' }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url(/images/cylindrical_grinding.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
              }}
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(180deg, transparent 0%, rgba(15,23,42,0.92) 100%)', padding: '3rem 0', color: '#ffffff' }}>
              <div className="container parallax-overlay-flex">
                <div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#93c5fd', letterSpacing: '0.12em', textTransform: 'uppercase' }}>PUNE HEADQUARTERS</span>
                  <h3 style={{ fontSize: 'clamp(1.15rem, 4vw, 1.4rem)', fontWeight: 900, color: '#ffffff', margin: '4px 0 0 0' }}>ISO Class 7 Cleanroom &amp; Sub-Micron Grinding Workshop</h3>
                </div>
                <div className="parallax-stats-group">
                  <div>
                    <div style={{ fontSize: 'clamp(1.35rem, 5vw, 1.75rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1 }}>3,000+</div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 700, marginTop: '4px' }}>Delivered Units</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 'clamp(1.35rem, 5vw, 1.75rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1 }}>1-Year</div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 700, marginTop: '4px' }}>Full Warranty</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══ 2. COMPANY STORY & MISSION STATEMENTS ════════════════════ */}
      <section style={{ padding: '5rem 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="machin-2col-header" style={{ marginBottom: '3.5rem' }}>
            <SlideInLeft>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1d4ed8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                OUR MISSION &amp; HERITAGE
              </span>
            </SlideInLeft>
            <SlideInRight>
              <h2 style={{ fontSize: '2.35rem', fontWeight: 700, color: '#0f172a', lineHeight: '1.25', margin: 0, letterSpacing: '-0.02em', borderBottom: 'none', paddingBottom: 0 }}>
                Delivering OEM factory-grade precision at a fraction of OEM replacement costs for{' '}
                <span style={{ color: '#1d4ed8', fontWeight: 700 }}>over 3,000 industrial clients.</span>
              </h2>
            </SlideInRight>
          </div>

          {/* 4 Feature Pillars Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
            
            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 16px rgba(15,23,42,0.04)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#1d4ed8', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>01. SUB-MICRON TOLERANCES</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>Precision CNC Grinding</h3>
              <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: '1.65', margin: 0 }}>
                Studer CNC cylindrical grinding cells maintain roundness and concentricity below 0.0005mm for HSK, BT, CAT, and ISO spindle tapers.
              </p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 16px rgba(15,23,42,0.04)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#1d4ed8', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>02. ZERO CONTAMINATION</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>ISO Class 7 Cleanroom</h3>
              <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: '1.65', margin: 0 }}>
                All super-precision bearing mountings and preloads are executed inside our dust-free positive-pressure cleanroom bay.
              </p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 16px rgba(15,23,42,0.04)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#1d4ed8', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>03. IN-HOUSE ELECTRICAL</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>VPI Motor Rewinding</h3>
              <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: '1.65', margin: 0 }}>
                Full in-house synchronous stator coil rewinding, Class H epoxy VPI insulation, and Fanuc/Heidenhain encoder alignment.
              </p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 16px rgba(15,23,42,0.04)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#1d4ed8', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>04. RAPID TURNAROUND</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>3-5 Days &amp; Emergency 48hr</h3>
              <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: '1.65', margin: 0 }}>
                Fast industrial emergency response with dedicated logistics pickup across Pune, Chakan, Pimpri-Chinchwad, and pan-India manufacturing hubs.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══ 3. FOUNDERS SHOWCASE BANNER ═══════════════════════════════ */}
      <FoundersShowcase onNavigate={onNavigate} />

      {/* ══ 4. GLOBAL OEM BRAND COVERAGE MARQUEE ═════════════════════ */}
      <BrandMarquee />

      {/* ══ 5. PROMO CTA BANNER ══════════════════════════════════════ */}
      <PromoBannerCard onNavigate={onNavigate} />

    </div>
  );
}
