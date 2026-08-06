import React from 'react';
import { FadeUp, ScaleUp, TextReveal, StaggerContainer, StaggerItem, SlideInLeft, SlideInRight } from '../components/MotionWrapper';
import BrandMarquee from '../components/BrandMarquee';
import CadDrawing from '../components/CadDrawing';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import VideoShowcase from '../components/VideoShowcase';
import PromoBannerCard from '../components/PromoBannerCard';
import TestimonialsSection from '../components/TestimonialsSection';
import FoundersShowcase from '../components/FoundersShowcase';
import PrecisionCapabilitiesShowcase from '../components/PrecisionCapabilitiesShowcase';

export default function Home({ onNavigate }) {
  return (
    <div className="page-fade-enter-active">

      {/* ══ 1. HERO SECTION ════════════════════════════════════ */}
      <section className="home-hero">
        <div className="hero-blueprint-watermark"></div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <FadeUp delay={0.1}>
                <span className="label-tag">Independent Spindle Full-Service</span>
              </FadeUp>

              <TextReveal delay={0.2}>
                <h1 style={{ color: 'var(--text-primary)', marginBottom: '1rem', borderBottom: 'none', paddingBottom: 0 }}>
                  CNC Spindle Repair, Rebuild &amp; <span className="text-highlight">Optimization</span>
                </h1>
              </TextReveal>

              <FadeUp delay={0.3}>
                <p style={{ marginBottom: '1.5rem' }}>
                  General Precision Spindles (GPS Spindles) — Pune's most trusted spindle specialists since 2017. Expert repair, reconditioning &amp; manufacturing of VMC, HMC, CNC and High-Frequency spindles. 3000+ clients. 1-Year warranty.
                </p>
              </FadeUp>

              <FadeUp delay={0.4}>
                <div className="hero-actions">
                  <button onClick={() => onNavigate('contact')} className="btn btn-primary" style={{ display: 'inline-flex', gap: '8px', alignItems: 'center' }}>
                    Request Rebuild Quote &nbsp; &rarr;
                  </button>
                  <button onClick={() => onNavigate('products')} className="btn btn-secondary" style={{ display: 'inline-flex', gap: '8px', alignItems: 'center' }}>
                    View Spindle Catalog &nbsp; &rarr;
                  </button>
                </div>
              </FadeUp>

              {/* Three-column benefit list with Stagger */}
              <StaggerContainer delayChildren={0.5} staggerChildren={0.15} className="hero-benefits-list">
                <StaggerItem className="hero-benefit-item">
                  <div className="hero-benefit-icon-box">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <strong>Manufacturer Independent</strong>
                    We service all major spindle brands
                  </div>
                </StaggerItem>

                <StaggerItem className="hero-benefit-item">
                  <div className="hero-benefit-icon-box">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <strong>Precision Engineered</strong>
                    Built to exacting tolerances
                  </div>
                </StaggerItem>

                <StaggerItem className="hero-benefit-item">
                  <div className="hero-benefit-icon-box">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <strong>Fast Turnaround Time</strong>
                    Standard 3–5 days, 48hr priority available
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>

            {/* Interactive CAD Blueprint Hero Display with ScaleUp */}
            <ScaleUp delay={0.2} className="hero-spindle-container">
              <img
                src="/images/hero_spindle_clean.png"
                alt="GPS Spindle"
                className="hero-spindle-image"
              />
              <CadDrawing />
            </ScaleUp>
          </div>
        </div>

        {/* ══ 2. STATS BAR RIBBON ═══════════════════════════════ */}
        <section className="stats-bar">
          <div className="container">
            <div className="stats-card-wrapper">
              <StaggerContainer staggerChildren={0.12} className="stats-card-grid">
                <StaggerItem className="stats-card-col">
                  <div className="stats-card-icon-wrapper">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <span className="stat-number">5,000+</span>
                  <span className="stat-label">Projects Completed</span>
                  <p className="stats-card-desc">Across diverse industries and applications</p>
                </StaggerItem>

                <StaggerItem className="stats-card-col">
                  <div className="stats-card-icon-wrapper">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="stat-number">3000+</span>
                  <span className="stat-label">Happy Clients</span>
                  <p className="stats-card-desc">Serving auto, aerospace, pharma, defence &amp; more</p>
                </StaggerItem>

                <StaggerItem className="stats-card-col">
                  <div className="stats-card-icon-wrapper">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="stat-number">3–5 Days</span>
                  <span className="stat-label">Standard Turnaround</span>
                  <p className="stats-card-desc">Priority 48hr &amp; same-day emergency available</p>
                </StaggerItem>

                <StaggerItem className="stats-card-col">
                  <div className="stats-card-icon-wrapper">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="stat-number">12 Months</span>
                  <span className="stat-label">Full Quality Warranty</span>
                  <p className="stats-card-desc">Industry-leading warranty for peace of mind</p>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </section>
      </section>

      {/* ══ 2. SUPPORTED BRAND OEM MARQUEE ═════════════════════ */}
      <BrandMarquee />

      {/* ══ 3. VIDEO SHOWCASE ══════════════════════════════════ */}
      <VideoShowcase />

      {/* ══ 4. REBUILD SERVICES GRID ═══════════════════════════ */}
      <section className="section container" style={{ paddingTop: 'var(--space-xxl)' }}>
        {/* Machin 2-Column Section Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '3rem', alignItems: 'start', marginBottom: '3rem' }}>
          <div>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1d4ed8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              ENGINEERING SERVICES
            </span>
          </div>
          <div>
            <h2 style={{ fontSize: '2.35rem', fontWeight: 700, color: '#0f172a', lineHeight: '1.25', margin: 0, letterSpacing: '-0.02em' }}>
              High-precision engineering restorations matching or exceeding{' '}
              <span style={{ color: '#1d4ed8', fontWeight: 700 }}>original OEM factory parameters</span> for grinding, milling, boring, and lathe spindle units.
            </h2>
          </div>
        </div>

        <StaggerContainer staggerChildren={0.2} className="grid-3">
          {/* Card 1 */}
          <StaggerItem className="b2b-card feature-card-split">
            <div className="feature-card-left">
              <div className="feature-card-header">
                <div className="feature-badge">01.</div>
                <h3 className="feature-title-split">Precision Rebuilding</h3>
              </div>
              <div className="feature-divider"></div>
              <p className="feature-desc-split">
                Full dimensional restoration, bore repair, shaft taper grinding, hybrid ceramic bearing replacement, and calibrated preload configurations.
              </p>
              <span onClick={() => onNavigate('services')} className="nav-link-split">
                REBUILD PROCESS <span className="arrow">&rarr;</span>
              </span>
            </div>
            <div className="feature-card-right">
              <img src="/images/service_rebuilding.png" alt="Precision Rebuilding" className="feature-img-split scale-card-01" />
            </div>
          </StaggerItem>

          {/* Card 2 */}
          <StaggerItem className="b2b-card feature-card-split">
            <div className="feature-card-left">
              <div className="feature-card-header">
                <div className="feature-badge">02.</div>
                <h3 className="feature-title-split">Custom Spindles</h3>
              </div>
              <div className="feature-divider"></div>
              <p className="feature-desc-split">
                Engineering design and manufacturing of specialized machining and lathe spindles optimized for specific speed, torque, and material removal rates.
              </p>
              <span onClick={() => onNavigate('products')} className="nav-link-split">
                PRODUCT CATALOG <span className="arrow">&rarr;</span>
              </span>
            </div>
            <div className="feature-card-right">
              <img src="/images/service_custom.png" alt="Custom Spindles" className="feature-img-split scale-card-02" />
            </div>
          </StaggerItem>

          {/* Card 3 */}
          <StaggerItem className="b2b-card feature-card-split">
            <div className="feature-card-left">
              <div className="feature-card-header">
                <div className="feature-badge">03.</div>
                <h3 className="feature-title-split">Dynamic Balancing</h3>
              </div>
              <div className="feature-divider"></div>
              <p className="feature-desc-split">
                Vibration diagnosis, predictive spectrum analysis, and dynamic dual-plane balancing to G0.4 standards to maximize bearing operating lifecycle.
              </p>
              <span onClick={() => onNavigate('services')} className="nav-link-split">
                BALANCING DETAILS <span className="arrow">&rarr;</span>
              </span>
            </div>
            <div className="feature-card-right">
              <img src="/images/service_balancing.png" alt="Dynamic Balancing" className="feature-img-split scale-card-03" />
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* ══ 5. WHY CHOOSE GPS SPINDLES SECTION ═════════════════ */}
      <WhyChooseUsSection onNavigate={onNavigate} />

      {/* ══ 6. PRECISION CAPABILITIES SHOWCASE (MACHIN STYLE) ═════ */}
      <PrecisionCapabilitiesShowcase onNavigate={onNavigate} />

      {/* ══ 9. MEET THE FOUNDERS (KERN STYLE SHOWCASE) ══════════ */}
      <FoundersShowcase onNavigate={onNavigate} />

      {/* ══ 10. WHAT OUR CUSTOMERS SAY (MACHIN STYLE) ═══════════ */}
      <TestimonialsSection />

      {/* ══ 11. SPEEDIO HIGH-IMPACT PROMO BANNER ═══════════════ */}
      <PromoBannerCard onNavigate={onNavigate} />

    </div>
  );
}
