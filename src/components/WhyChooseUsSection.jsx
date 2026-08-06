import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const advantages = [
  {
    id: '01',
    image: '/images/why1.png',
    badge: 'DEEP DOMAIN EXPERTISE',
    title: '20+ Years of Engineering Mastery',
    desc: 'As Pune\'s most trusted spindle specialists since 2017, even complex multi-axis motorized spindle overhauls are routine for our team. Our engineers carry OEM-level knowledge across all major brands—VMC, HMC, CNC, and High-Frequency spindles—delivering results that save 20–30% compared to new OEM replacements.',
    metrics: [
      { val: '3,000+', lbl: 'Spindles Rebuilt' },
      { val: '20+', lbl: 'Years in Industry' },
      { val: '30%', lbl: 'Avg. OEM Savings' },
    ],
    tag: 'OEM-GRADE PRECISION',
    accent: '#1d4ed8',
  },
  {
    id: '02',
    image: '/images/why2.png',
    badge: '2X LIFESPAN GUARANTEE',
    title: 'Exceptional Reliability — Built to Last Twice as Long',
    desc: 'Our dynamic-balanced spindles achieve more than twice the standard operating lifecycle. Using ISO G0.4 dual-plane balancing and sub-micron runout measurements, we eliminate vibration-related wear at the source — reducing unplanned machine downtime by up to 50% for manufacturing facilities.',
    metrics: [
      { val: '2×', lbl: 'Lifespan Increase' },
      { val: '50%', lbl: 'Less Downtime' },
      { val: 'G0.4', lbl: 'Balancing Standard' },
    ],
    tag: 'RELIABILITY CERTIFIED',
    accent: '#2563eb',
  },
  {
    id: '03',
    image: '/images/why3.png',
    badge: 'RAPID RESPONSE SERVICE',
    title: 'Fast 4–8 Day Rebuild with 48-Hour Emergency Dispatch',
    desc: 'Every hour of production downtime costs money. Our streamlined Pune facility with dedicated clean-room assembly and precision grinding infrastructure enables complete spindle rebuilds in just 4 to 8 working days. For critical breakdowns, we offer emergency 48-hour priority dispatch.',
    metrics: [
      { val: '4–8', lbl: 'Day Standard Build' },
      { val: '48hr', lbl: 'Emergency Priority' },
      { val: '100%', lbl: 'Test Before Dispatch' },
    ],
    tag: 'FASTEST TURNAROUND',
    accent: '#0284c7',
  },
  {
    id: '04',
    image: '/images/why4.png',
    badge: 'INDUSTRY-LEADING WARRANTY',
    title: 'Sub-Micron Precision Backed by a Full 1-Year Warranty',
    desc: 'Every GPS Spindles rebuild delivers measurable sub-micron runout accuracy, verified by our precision measurement protocols before shipment. Backed by a full 1-Year comprehensive warranty, our 3,000+ satisfied clients trust us to keep their CNC assets performing at peak efficiency.',
    metrics: [
      { val: '1-Year', lbl: 'Full Warranty' },
      { val: '<1μm', lbl: 'Runout Accuracy' },
      { val: '3,000+', lbl: 'Happy Clients' },
    ],
    tag: 'WARRANTED PRECISION',
    accent: '#1e40af',
  },
];

export default function WhyChooseUsSection({ onNavigate }) {
  const cardRefs = useRef([]);

  const scrollToCard = (index) => {
    if (cardRefs.current[index]) {
      cardRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="why-pro-section" id="why-choose-us" style={{ position: 'relative', paddingBottom: '4rem' }}>
      {/* Section Header */}
      <div className="container">
        {/* Exact Machin 2-Column Section Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '3rem', alignItems: 'start', marginBottom: '3.5rem' }}>
          <div>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1d4ed8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              PROVEN ENGINEERING VALUE
            </span>
          </div>
          <div>
            <h2 style={{ fontSize: '2.35rem', fontWeight: 700, color: '#0f172a', lineHeight: '1.25', margin: '0 0 1rem 0', letterSpacing: '-0.02em', borderBottom: 'none', paddingBottom: 0 }}>
              Why <span style={{ color: '#1d4ed8', fontWeight: 700 }}>hundreds of industrial companies</span> choose GPS Spindles
            </h2>
            <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: '1.6', margin: '0 0 1.5rem 0' }}>
              Each advantage is backed by real engineering data, verified results, and the trust of 3,000+ manufacturing clients across India.
            </p>

            {/* Quick Jump Pill Indicators */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {advantages.map((adv, index) => (
                <button
                  key={adv.id}
                  onClick={() => scrollToCard(index)}
                  style={{
                    padding: '0.55rem 1.1rem',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    background: '#ffffff',
                    color: '#1e293b',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 2px 6px rgba(15,23,42,0.04)'
                  }}
                >
                  <span style={{ color: '#1d4ed8' }}>{adv.id}.</span> {adv.tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══ FULL-SCREEN SCALE-DOWN ON SCROLL CARD CONTAINER ══════════════ */}
      <div className="container" style={{ marginTop: '1rem', position: 'relative' }}>
        <div className="why-sticky-stack-list" style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {advantages.map((item, idx) => {
            const isEven = idx % 2 === 1;
            const stickyTopOffset = 110 + idx * 24;

            return (
              <motion.div
                key={item.id}
                ref={(el) => (cardRefs.current[idx] = el)}
                initial={{ opacity: 0, scale: 1.08, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className={`why-pro-card-row hovered ${isEven ? 'reverse' : ''}`}
                style={{
                  position: 'sticky',
                  top: `${stickyTopOffset}px`,
                  zIndex: idx + 10,
                  background: '#ffffff',
                  borderRadius: '24px',
                  border: '1px solid rgba(15, 23, 42, 0.12)',
                  boxShadow: `0 ${20 + idx * 8}px ${45 + idx * 10}px -10px rgba(15, 23, 42, 0.14)`,
                  overflow: 'hidden',
                  margin: '0 auto',
                  maxWidth: '100%'
                }}
              >
                {/* Image Panel */}
                <div className="why-pro-img-panel" style={{ position: 'relative', overflow: 'hidden' }}>
                  <div
                    className="why-pro-img-wrap"
                    style={{ height: '100%', minHeight: '380px' }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="why-pro-img"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(15,23,42,0.8) 100%)' }} />
                  </div>

                  {/* Top-Left Advantage Badge */}
                  <div className="why-pro-badge-floating">
                    <span className="why-pro-num">{item.id}</span>
                    <span className="why-pro-badge-txt">{item.badge}</span>
                  </div>
                </div>

                {/* Content Panel */}
                <div className="why-pro-content-panel" style={{ padding: '2.5rem 2.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(29, 78, 216, 0.08)', color: '#1d4ed8', fontSize: '0.75rem', fontWeight: 800, padding: '4px 10px', borderRadius: '6px', marginBottom: '0.85rem' }}>
                      ✓ {item.tag}
                    </div>

                    <h3 className="why-pro-card-title" style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0f172a', lineHeight: '1.3', margin: '0 0 1rem 0' }}>
                      {item.title}
                    </h3>

                    <p className="why-pro-card-desc" style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.7', margin: '0 0 1.75rem 0' }}>
                      {item.desc}
                    </p>
                  </div>

                  <div>
                    {/* Metrics Row */}
                    <div className="why-pro-metrics-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
                      {item.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="why-pro-metric-col">
                          <span className="why-pro-metric-val" style={{ fontSize: '1.4rem', fontWeight: 900, color: '#1d4ed8', display: 'block', lineHeight: 1 }}>
                            {m.val}
                          </span>
                          <span className="why-pro-metric-lbl" style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700, display: 'block', marginTop: '4px' }}>
                            {m.lbl}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom CTA Action Link */}
                    <button
                      onClick={() => onNavigate && onNavigate('contact')}
                      style={{
                        background: '#1d4ed8',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '10px',
                        padding: '0.75rem 1.4rem',
                        fontWeight: 800,
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 4px 14px rgba(29, 78, 216, 0.3)'
                      }}
                    >
                      <span>TALK TO SPINDLE ENGINEER</span>
                      <span>&rarr;</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
