import React from 'react';
import { SlideInLeft, SlideInRight, ScaleUp, FadeUp, TextReveal, StaggerContainer, StaggerItem } from '../components/MotionWrapper';
import FoundersShowcase from '../components/FoundersShowcase';
import BrandMarquee from '../components/BrandMarquee';
import PromoBannerCard from '../components/PromoBannerCard';

export default function About({ onNavigate }) {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* ══ 1. FRAMER INDUSTRIAL HERO SECTION ════════════════════════ */}
      <section style={{ padding: '4rem 0', background: '#ffffff' }}>
        <div className="container">
          
          {/* Top 2-Column Header Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '3.5rem', alignItems: 'flex-start', marginBottom: '3.5rem' }}>
            {/* Left: Eyebrow + Huge Title */}
            <div>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#1d4ed8', letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block', marginBottom: '1.25rem' }}>
                ABOUT GPS SPINDLES
              </span>
              <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: '#0f172a', lineHeight: '1.12', margin: 0, letterSpacing: '-0.03em', borderBottom: 'none', paddingBottom: 0 }}>
                Pioneering sub-micron spindle engineering since 2017.
              </h1>
            </div>

            {/* Right: Subheadline Paragraph + Action Buttons */}
            <div style={{ paddingTop: '2.5rem' }}>
              <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: '1.65', margin: '0 0 1.75rem 0', maxWidth: '460px', fontWeight: 500 }}>
                General Precision Spindles (GPS Spindles) is Pune's premier independent specialist in CNC, VMC, HMC, and High-Frequency spindle manufacturing, repair, and dynamic balancing.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => onNavigate && onNavigate('capabilities')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: '#1d4ed8',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.9rem 2rem',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    letterSpacing: '0.08em',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    boxShadow: '0 10px 25px -5px rgba(29, 78, 216, 0.4)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  EXPLORE CAPABILITIES <span>&rarr;</span>
                </button>
                <button
                  onClick={() => onNavigate && onNavigate('contact')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: '#f8fafc',
                    color: '#0f172a',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    padding: '0.9rem 2rem',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    letterSpacing: '0.08em',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#f1f5f9';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = '#f8fafc';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  CONTACT DESK <span>&rarr;</span>
                </button>
              </div>
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
              <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
                <div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#93c5fd', letterSpacing: '0.12em', textTransform: 'uppercase' }}>PUNE HEADQUARTERS</span>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffffff', margin: '4px 0 0 0' }}>ISO Class 7 Cleanroom &amp; Sub-Micron Grinding Workshop</h3>
                </div>
                <div style={{ display: 'flex', gap: '3rem', textAlign: 'right' }}>
                  <div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#ffffff', lineHeight: 1 }}>3,000+</div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 700, marginTop: '4px' }}>Delivered Units</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#ffffff', lineHeight: 1 }}>1-Year</div>
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
