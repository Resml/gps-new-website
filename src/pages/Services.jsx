import React, { useState } from 'react';
import { brandLogos } from '../components/BrandLogos';

/* ── 6-Step process data ─────────────────────────────────── */
const steps = [
  {
    num: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 14l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Dismantling & Root-Cause Diagnosis',
    tag: 'Intake',
    desc: 'Incoming spindle inspection under controlled conditions. We log vibration signals, shaft concentricity, stator resistance, and encoder readouts. All failure vectors are documented before systematic teardown begins.',
    metric: 'Sub-micron measurement',
  },
  {
    num: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 11h20M9 6v5M19 6v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Fixed-Price Damage Report',
    tag: 'Quotation',
    desc: 'A fully itemized quotation detailing mechanical faults, worn parts, bearing preloads, and exact costs. Transparent, zero-obligation diagnosis — clients approve before any work proceeds.',
    metric: '100% cost transparency',
  },
  {
    num: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 4v3M14 21v3M4 14h3M21 14h3M6.9 6.9l2.1 2.1M19 19l2.1 2.1M6.9 21.1l2.1-2.1M19 9l2.1-2.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Taper & TCG Cylindrical Grinding',
    tag: 'Precision Grinding',
    desc: 'High-precision CNC grinding of tapers and housing bores to sub-micron concentricity. Hard-chrome plating restores dimensional accuracy to within 0.0005mm — tighter than most OEM specifications.',
    metric: '±0.0005mm accuracy',
  },
  {
    num: '04',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L4 8v6c0 5.5 4.3 10.7 10 12 5.7-1.3 10-6.5 10-12V8L14 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 14l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'ISO Class 7 Cleanroom Assembly',
    tag: 'Assembly',
    desc: 'All spindle components are matched and mounted in our dust-free positive-pressure cleanroom. Bearings are measured, preloaded, and lubricated to exact OEM tolerances under controlled environment.',
    metric: 'ISO Class 7 environment',
  },
  {
    num: '05',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4a10 10 0 100 20A10 10 0 0014 4z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 9v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Multi-Hour Run-In Test Stand',
    tag: 'Validation',
    desc: 'Spindles undergo dynamic balancing on high-speed test stands. Vibration values, speed ramps, and bearing temperatures are continuously logged through all RPM ranges to confirm stable operational capacity.',
    metric: 'Up to 100,000 RPM tested',
  },
  {
    num: '06',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 8h18l-2 12H7L5 8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 8V6a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Quality Seal & Crated Delivery',
    tag: 'Dispatch',
    desc: 'Each rebuilt spindle ships in a custom timber transport crate engineered to absorb transit shock. Delivered with a full quality-log certificate, digital QA report, and all runout test documentation.',
    metric: 'QR-linked QA certificate',
  },
];

/* ── OEM Comparison data ──────────────────────────────────── */
const compareRows = [
  {
    feature: 'Average Cost',
    oem: '100% OEM List Price',
    gps: '30–40% Savings vs OEM',
    better: true,
  },
  {
    feature: 'Turnaround Time',
    oem: '4–6 Weeks',
    gps: '6–8 Business Days',
    better: true,
  },
  {
    feature: 'Bearing Upgrade',
    oem: 'Standard steel only',
    gps: 'Si₃N₄ Ceramic Hybrid option',
    better: true,
  },
  {
    feature: 'Warranty',
    oem: '12-Month basic',
    gps: '12-Month + Digital QA Cert',
    better: true,
  },
  {
    feature: 'Brand Flexibility',
    oem: 'Single OEM only',
    gps: '20+ OEM brands supported',
    better: true,
  },
];

/* ── Brand coverage data — use logo keys ──────────────────── */
const brandGroups = [
  {
    region: 'Germany',
    flag: '🇩🇪',
    brands: ['DMG MORI', 'HERMLE', 'KESSLER', 'GMN', 'CHIRON', 'WEISS', 'BLOHM'],
  },
  {
    region: 'Switzerland',
    flag: '🇨🇭',
    brands: ['FISCHER', 'STEP-TEC', 'SMS', 'IBAG'],
  },
  {
    region: 'Japan',
    flag: '🇯🇵',
    brands: ['MAZAK', 'MAKINO', 'MATSUURA', 'FANUC', 'OKUMA', 'TOYODA'],
  },
  {
    region: 'Italy & Others',
    flag: '🇮🇹',
    brands: ['HSD', 'OMLAT', 'COLOMBO'],
  },
];

/* ── Upgrade cards ───────────────────────────────────────── */
const upgrades = [
  {
    icon: '⚙️',
    title: 'Si₃N₄ Ceramic Hybrid Bearing Retrofit',
    body: 'We retrofit mechanical and motorized spindles with silicon-nitride hybrid bearings. Ceramic balls are 60% lighter than steel, reducing centrifugal friction, enabling higher RPM limits, and lowering operating temperatures.',
    stat: '60% lighter ball elements',
  },
  {
    icon: '⚡',
    title: 'Stator Winding & Encoder Synchronization',
    body: 'Integrated motor spindles often suffer stator short-circuits from coolant ingress. We rewind coils in-house, apply vacuum-pressure impregnation (VPI) epoxy, and calibrate Heidenhain / Fanuc / Kessler encoders to ensure accurate tool change orientation.',
    stat: 'In-house VPI epoxy process',
  },
];

/* ─────────────────────────────────────────────────────────── */

export default function Services({ onNavigate }) {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <div className="page-fade-enter-active">

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="proc-hero">
        <div className="proc-hero-inner">
          {/* Left column */}
          <div className="proc-hero-text">
            <div className="breadcrumbs" style={{ marginBottom: '1.25rem' }}>
              <span>Home</span>
              <span>/</span>
              <span className="current">Rebuild Process</span>
            </div>

            <span className="label-tag-enhanced" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
              <span className="dot"></span>
              SOP Documented Rebuild Protocol
            </span>

            <h1 className="proc-hero-h1">
              Certified Rebuilding<br />
              <span className="gradient-text">&amp; Optimization</span>
            </h1>

            <p className="proc-hero-desc">
              Every spindle submitted for repair undergoes a document-controlled sequence of sub-micron diagnostic checks, CNC taper grinding, cleanroom assembly, and 100k RPM dynamic balancing.
            </p>

            <div className="proc-hero-badges">
              <div className="proc-badge">
                <span className="proc-badge-num">6</span>
                <span className="proc-badge-label">Step SOP</span>
              </div>
              <div className="proc-badge-sep" />
              <div className="proc-badge">
                <span className="proc-badge-num">±0.0005mm</span>
                <span className="proc-badge-label">Concentricity</span>
              </div>
              <div className="proc-badge-sep" />
              <div className="proc-badge">
                <span className="proc-badge-num">100k RPM</span>
                <span className="proc-badge-label">Test Stand</span>
              </div>
            </div>
          </div>

          {/* Right column — stat panel */}
          <div className="proc-hero-panel">
            <div className="proc-panel-item">
              <div className="proc-panel-num">6–8</div>
              <div className="proc-panel-sub">Business Days Avg. Turnaround</div>
            </div>
            <div className="proc-panel-div" />
            <div className="proc-panel-item">
              <div className="proc-panel-num">30–40%</div>
              <div className="proc-panel-sub">Cost Savings vs New OEM Unit</div>
            </div>
            <div className="proc-panel-div" />
            <div className="proc-panel-item">
              <div className="proc-panel-num">12M</div>
              <div className="proc-panel-sub">Full Rebuild Warranty</div>
            </div>
            <div className="proc-panel-div" />
            <div className="proc-panel-item">
              <div className="proc-panel-num">20+</div>
              <div className="proc-panel-sub">OEM Brands Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 6-STEP PROCESS ════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="section-header-enhanced">
            <div className="label-tag-wrapper">
              <span className="label-tag-enhanced">
                <span className="dot"></span>
                Process Sequence
              </span>
            </div>
            <h2 className="section-title-enhanced">
              Standard Operating <span className="gradient-text">Rebuild Protocol</span>
            </h2>
            <div className="title-divider-enhanced"></div>
            <p className="section-desc-enhanced">
              Six documented stages — from intake inspection to certified delivery. Every spindle follows the same SOP with zero shortcuts.
            </p>
          </div>

          {/* ── Workshop Video Showcase ── */}
          <div className="proc-video-wrap">
            <div className="proc-video-container">
              <video
                className="proc-video"
                src="/videos/workshop_rebuild.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              {/* Gradient overlay for readability */}
              <div className="proc-video-overlay" />

              {/* Bottom-right: 3 floating stat chips */}
              <div className="proc-video-stats">
                <div className="proc-video-stat-chip">
                  <span className="proc-vstat-num">ISO 7</span>
                  <span className="proc-vstat-label">Cleanroom</span>
                </div>
                <div className="proc-video-stat-chip">
                  <span className="proc-vstat-num">100k RPM</span>
                  <span className="proc-vstat-label">Test Stand</span>
                </div>
                <div className="proc-video-stat-chip">
                  <span className="proc-vstat-num">±0.0005mm</span>
                  <span className="proc-vstat-label">Precision</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── 6-Step Cards ── */}
          <div className="proc-steps-grid">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`proc-step-card${activeStep === idx ? ' proc-step-card--active' : ''}`}
                onClick={() => setActiveStep(activeStep === idx ? null : idx)}
              >
                {/* Top row */}
                <div className="proc-step-top">
                  <div className="proc-step-num">{step.num}</div>
                  <span className="proc-step-tag">{step.tag}</span>
                </div>

                {/* Icon */}
                <div className="proc-step-icon">{step.icon}</div>

                {/* Title */}
                <h3 className="proc-step-title">{step.title}</h3>

                {/* Description */}
                <p className="proc-step-desc">{step.desc}</p>

                {/* Bottom metric */}
                <div className="proc-step-metric">
                  <span className="proc-metric-dot" />
                  {step.metric}
                </div>

                {/* Active shimmer bar */}
                <div className="proc-step-bar" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OEM COMPARISON ════════════════════════════════════ */}
      <section className="section alt-bg">
        <div className="container">
          <div className="section-header-enhanced">
            <div className="label-tag-wrapper">
              <span className="label-tag-enhanced">
                <span className="dot"></span>
                B2B Decision Matrix
              </span>
            </div>
            <h2 className="section-title-enhanced">
              OEM Replacement <span className="gradient-text">vs. GPS Rebuild</span>
            </h2>
            <div className="title-divider-enhanced"></div>
            <p className="section-desc-enhanced">
              Side-by-side engineering and financial comparison to support your procurement decision.
            </p>
          </div>

          <div className="proc-compare-wrap">
            {/* Header row */}
            <div className="proc-compare-header">
              <div className="proc-compare-col proc-compare-feature">Evaluation Parameter</div>
              <div className="proc-compare-col proc-compare-oem">
                <span className="proc-col-badge proc-col-badge--oem">OEM New Unit</span>
              </div>
              <div className="proc-compare-col proc-compare-gps">
                <span className="proc-col-badge proc-col-badge--gps">GPS Certified Rebuild</span>
              </div>
            </div>

            {/* Data rows */}
            {compareRows.map((row, idx) => (
              <div key={idx} className={`proc-compare-row${idx % 2 === 0 ? '' : ' proc-compare-row--alt'}`}>
                <div className="proc-compare-col proc-compare-feature">
                  <span className="proc-feature-label">{row.feature}</span>
                </div>
                <div className="proc-compare-col proc-compare-oem">
                  <span className="proc-oem-val">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginRight: 6, flexShrink: 0 }}>
                      <circle cx="7" cy="7" r="6" stroke="#94a3b8" strokeWidth="1.2"/>
                      <path d="M4.5 7h5" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    {row.oem}
                  </span>
                </div>
                <div className="proc-compare-col proc-compare-gps">
                  <span className="proc-gps-val">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginRight: 6, flexShrink: 0 }}>
                      <circle cx="7" cy="7" r="6" fill="#1e3a8a" stroke="#1e3a8a" strokeWidth="1.2"/>
                      <path d="M4 7l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {row.gps}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BRAND COVERAGE GRID ═══════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="section-header-enhanced">
            <div className="label-tag-wrapper">
              <span className="label-tag-enhanced">
                <span className="dot"></span>
                Global Brand Coverage
              </span>
            </div>
            <h2 className="section-title-enhanced">
              Manufacturer-Independent <span className="gradient-text">Repair Support</span>
            </h2>
            <div className="title-divider-enhanced"></div>
            <p className="section-desc-enhanced">
              We repair motorized and mechanical spindles from all major global machine tool builders — no single-brand restriction.
            </p>
          </div>

          {/* Region tabs + logo grid */}
          {brandGroups.map((group, gIdx) => (
            <div key={gIdx} className="proc-brand-region-block">
              {/* Region header */}
              <div className="proc-brand-region-header">
                <span className="proc-brand-flag">{group.flag}</span>
                <span className="proc-brand-region">{group.region}</span>
                <div className="proc-brand-region-line" />
              </div>
              {/* Logo cards */}
              <div className="proc-logo-grid">
                {group.brands.map((key, i) => {
                  const logo = brandLogos[key];
                  if (!logo) return null;
                  return (
                    <div key={i} className="proc-logo-card" title={key}>
                      <div className="proc-logo-inner">
                        {logo.svg}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ TECHNICAL UPGRADES ════════════════════════════════ */}
      <section className="section alt-bg">
        <div className="container">
          <div className="section-header-enhanced">
            <div className="label-tag-wrapper">
              <span className="label-tag-enhanced">
                <span className="dot"></span>
                Performance Upgrades
              </span>
            </div>
            <h2 className="section-title-enhanced">
              Spindle Retrofitting &amp; <span className="gradient-text">Electrical Rewinding</span>
            </h2>
            <div className="title-divider-enhanced"></div>
          </div>

          <div className="proc-upgrade-grid">
            {upgrades.map((u, idx) => (
              <div key={idx} className="proc-upgrade-card">
                <div className="proc-upgrade-icon-wrap">{u.icon}</div>
                <div className="proc-upgrade-body">
                  <h3 className="proc-upgrade-title">{u.title}</h3>
                  <p className="proc-upgrade-desc">{u.body}</p>
                  <div className="proc-upgrade-stat">
                    <span className="proc-metric-dot" />
                    {u.stat}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="proc-cta-wrap">
            <div className="proc-cta-left">
              <span className="label-tag-enhanced" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
                <span className="dot"></span>
                Technical Evaluation Desk
              </span>
              <h2 className="proc-cta-heading">
                Ready to Start Your<br />Rebuild Project?
              </h2>
              <p className="proc-cta-desc">
                Share your spindle brand, model, and symptoms. Our engineers will respond with a diagnostic assessment, shipping instructions, and cost estimate — typically within 24 hours.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={() => onNavigate('contact')} className="btn btn-primary" style={{ padding: '0.85rem 2.2rem' }}>
                  Submit Technical Inquiry &nbsp;→
                </button>
                <button onClick={() => onNavigate('capabilities')} className="btn btn-secondary" style={{ padding: '0.85rem 2rem' }}>
                  View Capabilities
                </button>
              </div>
            </div>

            <div className="proc-cta-stats">
              {[
                { val: '< 24h', label: 'Response time' },
                { val: '500+', label: 'Spindles rebuilt' },
                { val: '2017', label: 'Est. in Pune' },
                { val: '100%', label: 'Quality logged' },
              ].map((s, i) => (
                <div key={i} className="proc-cta-stat">
                  <div className="proc-cta-stat-val">{s.val}</div>
                  <div className="proc-cta-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
