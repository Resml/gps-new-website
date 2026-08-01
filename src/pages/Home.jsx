import React from 'react';
import BrandMarquee from '../components/BrandMarquee';
import CadDrawing from '../components/CadDrawing';

export default function Home({ onNavigate }) {
  return (
    <div className="page-fade-enter-active">
      {/* Hero Section Split Layout */}
      <section className="home-hero">
        <div className="hero-blueprint-watermark"></div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="label-tag">Independent Spindle Full-Service</span>
              <h1 style={{ color: 'var(--text-primary)', marginBottom: '1rem', borderBottom: 'none', paddingBottom: 0 }}>
                CNC Spindle Repair, Rebuild &amp; <span className="text-highlight">Optimization</span>
              </h1>
              <p style={{ marginBottom: '1.5rem' }}>
                General Precision Spindles (GPS Spindles) — Pune's most trusted spindle specialists since 2017. Expert repair, reconditioning &amp; manufacturing of VMC, HMC, CNC and High-Frequency spindles. 3000+ clients. 1-Year warranty.
              </p>

              <div className="hero-actions">
                <button onClick={() => onNavigate('contact')} className="btn btn-primary" style={{ display: 'inline-flex', gap: '8px', alignItems: 'center' }}>
                  Request Rebuild Quote &nbsp; &rarr;
                </button>
                <button onClick={() => onNavigate('products')} className="btn btn-secondary" style={{ display: 'inline-flex', gap: '8px', alignItems: 'center' }}>
                  View Spindle Catalog &nbsp; &rarr;
                </button>
              </div>

              {/* Three-column benefit list */}
              <div className="hero-benefits-list">
                <div className="hero-benefit-item">
                  <div className="hero-benefit-icon-box">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <strong>Manufacturer Independent</strong>
                    We service all major spindle brands
                  </div>
                </div>

                <div className="hero-benefit-item">
                  <div className="hero-benefit-icon-box">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <strong>Precision Engineered</strong>
                    Built to exacting tolerances
                  </div>
                </div>

                <div className="hero-benefit-item">
                  <div className="hero-benefit-icon-box">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <strong>Fast Turnaround Time</strong>
                    Standard 3–5 days, 48hr priority available
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive CAD Blueprint Hero Display */}
            <div className="hero-spindle-container">
              {/* Large 3D Spindle Image */}
              <img
                src="/images/hero_spindle_clean.png"
                alt="GPS Spindle"
                className="hero-spindle-image"
              />
              {/* Transparent CAD Overlays on top of the spindle */}
              <CadDrawing />
            </div>
          </div>
        </div>

        {/* Rounded stats bar card overlapping bottom hero */}
        <section className="stats-bar">
          <div className="container">
            <div className="stats-card-wrapper">
              <div className="stats-card-grid">
                <div className="stats-card-col">
                  <div className="stats-card-icon-wrapper">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <span className="stat-number">5,000+</span>
                  <span className="stat-label">Projects Completed</span>
                  <p className="stats-card-desc">Across diverse industries and applications</p>
                </div>

                <div className="stats-card-col">
                  <div className="stats-card-icon-wrapper">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="stat-number">3000+</span>
                  <span className="stat-label">Happy Clients</span>
                  <p className="stats-card-desc">Serving auto, aerospace, pharma, defence &amp; more</p>
                </div>

                <div className="stats-card-col">
                  <div className="stats-card-icon-wrapper">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="stat-number">3–5 Days</span>
                  <span className="stat-label">Standard Turnaround</span>
                  <p className="stats-card-desc">Priority 48hr &amp; same-day emergency available</p>
                </div>

                <div className="stats-card-col">
                  <div className="stats-card-icon-wrapper">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="stat-number">12 Months</span>
                  <span className="stat-label">Full Quality Warranty</span>
                  <p className="stats-card-desc">Industry-leading warranty for peace of mind</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Rebuild Services Grid (No icons, clean indices) */}
      <section className="section container" style={{ paddingTop: 'var(--space-xxl)' }}>
        <div className="section-header-enhanced">
          <div className="label-tag-wrapper">
            <span className="label-tag-enhanced">
              <span className="dot"></span> Engineering Capability
            </span>
          </div>
          <h2 className="section-title-enhanced">
            Technical Solutions &amp; <span className="gradient-text">Restoration</span>
          </h2>
          <div className="title-divider-enhanced"></div>
          <p className="section-desc-enhanced">
            We provide high-precision engineering restorations for grinding, milling, boring, and lathe spindle units, <span className="highlight-text">matching or exceeding original factory parameters</span>.
          </p>
        </div>

        <div className="grid-3">
          {/* Card 1 */}
          <div className="b2b-card feature-card-split">
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
          </div>

          {/* Card 2 */}
          <div className="b2b-card feature-card-split">
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
          </div>

          {/* Card 3 */}
          <div className="b2b-card feature-card-split">
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
          </div>
        </div>
      </section>

      {/* Economic Value Section — Split Screen Kern GmbH Reference Layout */}
      <section className="econ-split-section">
        <div className="econ-split-container">
          {/* Left Dark Timeline Content */}
          <div className="econ-split-left">
            <h2 className="econ-split-title">
              Why <span className="text-highlight-white">hundreds of industrial companies</span> choose GPS Spindles
            </h2>

            <div className="econ-timeline">
              <div className="econ-timeline-line"></div>

              {/* Item 1 */}
              <div className="econ-timeline-item">
                <div className="econ-timeline-icon">
                  <svg width="20" height="20" fill="none" stroke="#1e3a8a" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div className="econ-timeline-content">
                  <h3 className="econ-item-heading">OVER 20+ YEARS OF ENGINEERING EXPERTISE</h3>
                  <p className="econ-item-text">
                    As a trusted pioneer in <span className="text-link-accent">sustainable and long-lasting spindle repairs</span>, even complex multi-axis repairs are routine for us. We ensure spindles are optimized for high availability, saving 20%–30% vs purchasing new OEM units.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="econ-timeline-item">
                <div className="econ-timeline-icon">
                  <svg width="20" height="20" fill="none" stroke="#1e3a8a" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="econ-timeline-content">
                  <h3 className="econ-item-heading">HIGH EFFECTIVENESS &amp; RELIABILITY</h3>
                  <p className="econ-item-text">
                    Our restored &amp; dynamic-balanced spindles achieve more than twice the operating lifecycle. This allows you to sustainably reduce unplanned machine failures by up to 50%.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="econ-timeline-item">
                <div className="econ-timeline-icon">
                  <svg width="20" height="20" fill="none" stroke="#1e3a8a" strokeWidth="2.2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="econ-timeline-content">
                  <h3 className="econ-item-heading">FAST SPINDLE REBUILD &amp; TURNAROUND</h3>
                  <p className="econ-item-text">
                    Production downtime must be minimized. Thanks to our streamlined Pune facility, we fully rebuild and test spindles within 4 to 8 working days (with 48hr priority dispatch available).
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="econ-timeline-item">
                <div className="econ-timeline-icon">
                  <svg width="20" height="20" fill="none" stroke="#1e3a8a" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                  </svg>
                </div>
                <div className="econ-timeline-content">
                  <h3 className="econ-item-heading">TOP PRICE-PERFORMANCE RATIO &amp; WARRANTY</h3>
                  <p className="econ-item-text">
                    According to 3,000+ satisfied clients, our rebuilt spindles deliver sub-micron precision with long service life. Backed by an industry-leading 1-Year warranty.
                  </p>
                </div>
              </div>
            </div>

            <div className="econ-split-actions">
              <button onClick={() => onNavigate('contact')} className="btn-make-inquiry">
                MAKE AN INQUIRY NOW &nbsp;&rarr;
              </button>
            </div>
          </div>

          {/* Right Workshop Image */}
          <div className="econ-split-right">
            <img src="/images/workshop_real.png" alt="GPS Spindles Engineering Workshop" className="econ-workshop-img" />
            <div className="econ-image-overlay"></div>
          </div>
        </div>
      </section>

      {/* Precision Grinding & Cylindrical Reconstruction — ENHANCED */}
      <section className="taper-section">
        {/* Main split content */}
        <div className="container taper-grid">
          {/* LEFT: Text + features */}
          <div className="taper-left">
            <span className="label-tag" style={{ marginBottom: '1rem', display: 'inline-block' }}>Taper Reconstruction</span>
            <h2 className="taper-heading">Taper &amp; Shaft<br />Cylindrical Grinding</h2>
            <div className="taper-divider"></div>
            <p className="taper-desc">
              Spindle components must operate with sub-micron tolerances to prevent part defects and runout errors. We grind shaft tapers (HSK, CAT, BT, ISO) and bearing housings at our Pune facility, using thermal controls to prevent grinding expansion.
            </p>

            {/* Callout highlight box */}
            <div className="taper-callout">
              <div className="taper-callout-icon">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <p>Our cylindrical grinding maintains roundness tolerances below <strong>0.0005mm</strong>, meeting or exceeding default manufacturer standards.</p>
            </div>

            {/* 4 icon features */}
            <div className="taper-features">
              <div className="taper-feat">
                <div className="taper-feat-icon">
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" />
                  </svg>
                </div>
                <span className="taper-feat-label">Sub-Micron<br />Accuracy</span>
                <span className="taper-feat-sub">Roundness below 0.0005mm</span>
              </div>
              <div className="taper-feat">
                <div className="taper-feat-icon">
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z" />
                  </svg>
                </div>
                <span className="taper-feat-label">Thermal<br />Controlled</span>
                <span className="taper-feat-sub">Prevents grinding expansion</span>
              </div>
              <div className="taper-feat">
                <div className="taper-feat-icon">
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span className="taper-feat-label">Multi-Taper<br />Compatibility</span>
                <span className="taper-feat-sub">HSK, CAT, BT, ISO &amp; more</span>
              </div>
              <div className="taper-feat">
                <div className="taper-feat-icon">
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="taper-feat-label">OEM Standard<br />Compliant</span>
                <span className="taper-feat-sub">Meets or exceeds manufacturer specs</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Image with badge */}
          <div className="taper-right">
            <div className="taper-img-wrap">
              <img src="/images/taper_shaft.png" alt="Taper and Shaft Cylindrical Grinding" className="taper-img" />
              <div className="taper-img-badge">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Precision Ground.<br /><strong>Performance Assured.</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="taper-stats-bar">
          <div className="container taper-stats-grid">
            <div className="taper-stat">
              <div className="taper-stat-icon">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <div>
                <div className="taper-stat-num">&lt; 0.0005mm</div>
                <div className="taper-stat-label">Roundness Tolerance</div>
              </div>
            </div>
            <div className="taper-stat">
              <div className="taper-stat-icon">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </div>
              <div>
                <div className="taper-stat-num">10+</div>
                <div className="taper-stat-label">Taper Standards Supported</div>
              </div>
            </div>
            <div className="taper-stat">
              <div className="taper-stat-icon">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                </svg>
              </div>
              <div>
                <div className="taper-stat-num">50+</div>
                <div className="taper-stat-label">Grinding Operations Daily</div>
              </div>
            </div>
            <div className="taper-stat">
              <div className="taper-stat-icon">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <div className="taper-stat-num">100%</div>
                <div className="taper-stat-label">Quality Inspection Before Dispatch</div>
              </div>
            </div>
            <div className="taper-stat">
              <div className="taper-stat-icon">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <div className="taper-stat-num">Pune, India</div>
                <div className="taper-stat-label">Precision Machine Shop</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sensor Diagnostics & Dynamic Calibration — Enhanced Layout */}
      <section className="section alt-bg sensor-section">
        <div className="container">

          <div className="sensor-main-grid">

            {/* Left Column — Image */}
            <div className="sensor-image-col">
              <div className="sensor-img-wrapper">
                <img src="/images/sensor.png" alt="Sensor-Based Dynamic Balancing Stand" className="sensor-main-img" />
              </div>
            </div>

            {/* Right Column — Details & Features */}
            <div className="sensor-content-col">
              <div style={{ marginBottom: '0.85rem' }}>
                <span className="sensor-label-tag">Calibration &amp; Diagnostics</span>
              </div>
              <h2 className="sensor-section-heading">Sensor-Based Dynamic Balancing</h2>
              <div className="sensor-heading-accent"></div>

              <p className="sensor-description">
                Our testing stands utilize diagnostic sensors to record housing vibration signatures, temperature rises, and speed spectrum analysis. Dynamic balancing is performed to ISO 1940-1 G0.4 specifications to limit centrifugal stress.
              </p>
              <p className="sensor-description">
                Every rebuild project receives a printed certificate of accuracy documenting clamp force, bearing thermal logs, and dynamic balance values.
              </p>

              {/* 4 Feature Columns Row */}
              <div className="sensor-features-row">

                <div className="sensor-feature-col">
                  <div className="sensor-feature-icon">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12h2l1-3 2 6 1-3h2" />
                    </svg>
                  </div>
                  <h4 className="sensor-feature-title">Diagnostic Sensors</h4>
                  <p className="sensor-feature-desc">High-precision sensors capture real-time vibration data.</p>
                </div>

                <div className="sensor-vertical-divider"></div>

                <div className="sensor-feature-col">
                  <div className="sensor-feature-icon">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z" />
                    </svg>
                  </div>
                  <h4 className="sensor-feature-title">Thermal Monitoring</h4>
                  <p className="sensor-feature-desc">Temperature rise is monitored to ensure reliable performance.</p>
                </div>

                <div className="sensor-vertical-divider"></div>

                <div className="sensor-feature-col">
                  <div className="sensor-feature-icon">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M3 3v18h18M18 9l-4.5 4.5-3-3L6 15" />
                      <circle cx="18" cy="9" r="1" fill="currentColor" />
                      <circle cx="13.5" cy="13.5" r="1" fill="currentColor" />
                      <circle cx="10.5" cy="10.5" r="1" fill="currentColor" />
                    </svg>
                  </div>
                  <h4 className="sensor-feature-title">Speed Spectrum</h4>
                  <p className="sensor-feature-desc">Advanced spectrum analysis for accurate imbalance detection.</p>
                </div>

                <div className="sensor-vertical-divider"></div>

                <div className="sensor-feature-col">
                  <div className="sensor-feature-icon">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 11l2 2 4-4" />
                    </svg>
                  </div>
                  <h4 className="sensor-feature-title">ISO 1940-1 G0.4</h4>
                  <p className="sensor-feature-desc">Balancing performed to ISO standards for maximum reliability.</p>
                </div>

              </div>

            </div>

          </div>

          {/* Bottom Metrics Bar */}
          <div className="sensor-bottom-stats-bar">

            <div className="sensor-metric-item">
              <div className="sensor-metric-icon">
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2v20M2 12h20" />
                  <circle cx="12" cy="12" r="6" />
                </svg>
              </div>
              <div className="sensor-metric-text-group">
                <span className="sensor-metric-val">ISO 1940-1 G0.4</span>
                <span className="sensor-metric-lbl">Balancing Standard</span>
              </div>
            </div>

            <div className="sensor-bar-divider"></div>

            <div className="sensor-metric-item">
              <div className="sensor-metric-icon">
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 3v17M12 20H8m4 0h4M3 6l9-2 9 2M6 8l-3 6h6L6 8zm12 0l-3 6h6l-3-6z" />
                </svg>
              </div>
              <div className="sensor-metric-text-group">
                <span className="sensor-metric-val">0.4 G</span>
                <span className="sensor-metric-lbl">Maximum Residual Unbalance</span>
              </div>
            </div>

            <div className="sensor-bar-divider"></div>

            <div className="sensor-metric-item">
              <div className="sensor-metric-icon">
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="sensor-metric-text-group">
                <span className="sensor-metric-val">100%</span>
                <span className="sensor-metric-lbl">Dynamic Balance Verified</span>
              </div>
            </div>

            <div className="sensor-bar-divider"></div>

            <div className="sensor-metric-item">
              <div className="sensor-metric-icon">
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
                  <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
                </svg>
              </div>
              <div className="sensor-metric-text-group">
                <span className="sensor-metric-val">CERTIFICATE</span>
                <span className="sensor-metric-lbl">Provided With Every Project</span>
              </div>
            </div>

            <div className="sensor-bar-divider"></div>

            <div className="sensor-metric-item">
              <div className="sensor-metric-icon">
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 11l2 2 4-4" />
                </svg>
              </div>
              <div className="sensor-metric-text-group">
                <span className="sensor-metric-val">RELIABLE</span>
                <span className="sensor-metric-lbl">Reduced Vibration, Longer Bearing Life</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Cleanroom Section */}
      <section className="section">
        <div className="container grid-2">
          <div>
            <div style={{ marginBottom: '0.75rem' }}>
              <span className="label-tag">Assembly Standards</span>
            </div>
            <h2>ISO Class 7 Cleanroom Standards</h2>
            <p>To eliminate particle contamination—the primary cause of premature spindle bearing failure—all assemblies are conducted inside a certified Class 10,000 positive-pressure cleanroom.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
              <div className="value-card">
                <div className="value-title">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                  Ceramic Hybrid Precision Bearings
                </div>
                <p style={{ fontSize: '0.85rem', marginBottom: 0, color: 'var(--text-secondary)' }}>We utilize silicon nitride (Si3N4) balls to lower friction coefficient, decrease operating temperatures, and extend spindle speed capability.</p>
              </div>

              <div className="value-card">
                <div className="value-title">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                  Drawbar Force Measurement
                </div>
                <p style={{ fontSize: '0.85rem', marginBottom: 0, color: 'var(--text-secondary)' }}>Tool retention force is calibrated using electronic gauges to verify collet specifications and prevent tool slippage under mechanical stress.</p>
              </div>

              <div className="value-card">
                <div className="value-title">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                  Climate-Controlled Stabilization
                </div>
                <p style={{ fontSize: '0.85rem', marginBottom: 0, color: 'var(--text-secondary)' }}>Components are thermally normalized at 68°F (20°C) before sub-micron dimensional assembly to eliminate dimensional changes from thermal expansion.</p>
              </div>
            </div>
          </div>

          <div>
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)', backgroundColor: '#ffffff' }}>
              <img src="/images/workshop_real.png" alt="General Precision Spindles Rebuild Workshop" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>


      {/* ── Meet the Founders ─────────────────────────────────── */}
      <section className="section founders-section">
        <div className="container">

          {/* Header */}
          <div className="founders-header">
            <span className="label-tag gold" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>Leadership</span>
            <h2>Founders &amp; Directors</h2>
            <p className="founders-subtitle">
              With nearly four decades of combined experience, our leadership ensures precision calibration, expert troubleshooting, and standard-setting execution.
            </p>
          </div>

          <div className="founders-list">

            {/* Sachin */}
            <div className="founder-row">
              <div className="founder-image-col">
                <div className="founder-outline-box"></div>
                <div className="founder-img-container">
                  <img src="/images/sachin.png" alt="Sachin Kuchekar – Managing Director, GPS Spindles" className="founder-avatar" />
                </div>
              </div>
              <div className="founder-content-col">
                <div className="founder-meta">
                  <span className="founder-role">Managing Director</span>
                  <span className="founder-exp-pill">20+ Years Expertise</span>
                </div>
                <h3 className="founder-fullname">Sachin Kuchekar</h3>
                <p className="founder-description">
                  Overseeing technical execution and engineering standards. Sachin Kuchekar has spent over two decades working directly on high-speed spindles and precision bearings. He guides our Pune-based engineering team to calibrate spindle assemblies to sub-micron runout tolerances and ISO-G0.4 specifications.
                </p>
                <div className="founder-specialties">
                  <span className="founder-specialty">Precision Grinding</span>
                  <span className="founder-specialty">Bearing Dynamics</span>
                  <span className="founder-specialty">Vibration Spectrum Analysis</span>
                </div>
              </div>
            </div>

            {/* Anil */}
            <div className="founder-row reverse">
              <div className="founder-image-col">
                <div className="founder-outline-box"></div>
                <div className="founder-img-container">
                  <img src="/images/anil.png" alt="Anil Vakude – Managing Director, GPS Spindles" className="founder-avatar" />
                </div>
              </div>
              <div className="founder-content-col">
                <div className="founder-meta">
                  <span className="founder-role">Managing Director</span>
                  <span className="founder-exp-pill">18+ Years Operations</span>
                </div>
                <h3 className="founder-fullname">Anil Vakude</h3>
                <p className="founder-description">
                  Directing business operations and client-partner relations. Anil Vakude ensures our facilities maintain peak productivity, maintaining a reliable supply chain for premium hybrid bearings and specialized seals. Under his leadership, GPS has scaled to support 3,000+ manufacturing workshops with fast, transparent turnaround times.
                </p>
                <div className="founder-specialties">
                  <span className="founder-specialty">Operations Management</span>
                  <span className="founder-specialty">Quality Systems</span>
                  <span className="founder-specialty">Industrial Logistics</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* Brand Marquee */}
      <section className="section alt-bg" style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ marginBottom: '0.75rem' }}>
              <span className="label-tag">Compatible Machinery</span>
            </div>
            <h2>OEM Brands Serviced &amp; Restored</h2>
          </div>
          <BrandMarquee />
        </div>
      </section>


      {/* Corporate Inquire Section */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px' }}>
          <div style={{ marginBottom: '0.75rem' }}>
            <span className="label-tag gold">Diagnostic Services</span>
          </div>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem', borderBottom: 'none' }}>Technical Inquiry &amp; Diagnostics</h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Our engineering team evaluates spindle parameters, runout logs, and vibration signals. Submitting an inquiry allows us to provide shipping guidelines and initial restoration estimates.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <button onClick={() => onNavigate('contact')} className="btn btn-primary">Start Technical Inquiry</button>
            <button onClick={() => onNavigate('capabilities')} className="btn btn-secondary">Review Capabilities</button>
          </div>
        </div>
      </section>
    </div>
  );
}
