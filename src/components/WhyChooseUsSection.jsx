import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [selectedFullscreenCard, setSelectedFullscreenCard] = useState(null);

  const scrollToCard = (index) => {
    if (cardRefs.current[index]) {
      cardRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="why-pro-section" id="why-choose-us" style={{ position: 'relative', paddingBottom: '4rem' }}>
      {/* Section Header */}
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="why-pro-header"
        >
          <div className="why-pro-label-group">
            <motion.span
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="why-pro-badge"
            >
              <span className="why-badge-dot"></span>
              PROVEN ENGINEERING VALUE
            </motion.span>
          </div>
          
          <h2 className="why-pro-title">
            Why <span className="why-navy-span">hundreds of industrial companies</span><br />
            choose GPS Spindles
          </h2>
          <div className="why-pro-divider"></div>
          <p className="why-pro-subtitle">
            Each advantage is backed by real engineering data, verified results, and the trust of 3,000+ manufacturing clients across India.
          </p>

          {/* Quick Jump Pill Indicators */}
          <div className="why-switcher-tabs" style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '2rem', flexWrap: 'wrap' }}>
            {advantages.map((adv, index) => (
              <button
                key={adv.id}
                onClick={() => scrollToCard(index)}
                style={{
                  padding: '0.6rem 1.25rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(15, 23, 42, 0.12)',
                  background: '#ffffff',
                  color: '#334155',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.05)',
                  outline: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span style={{ fontSize: '0.75rem', opacity: 0.7, color: '#1d4ed8', fontWeight: 800 }}>{adv.id}.</span>
                <span>{adv.tag}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ══ FULL-SCREEN SCALE-DOWN ON SCROLL CARD CONTAINER ══════════════ */}
      <div className="container" style={{ marginTop: '3rem', position: 'relative' }}>
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
                    <div className="why-pro-img-overlay"></div>

                    {/* Floating animated card index number badge */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ repeat: Infinity, duration: 4 + idx * 0.5, ease: 'easeInOut' }}
                      className="why-pro-img-number"
                      style={{
                        background: 'linear-gradient(135deg, #1d4ed8, #2563eb)',
                        color: '#ffffff',
                        fontWeight: 900,
                        fontSize: '1.4rem',
                        boxShadow: '0 8px 24px rgba(29, 78, 216, 0.4)'
                      }}
                    >
                      {item.id}
                    </motion.div>
                  </div>
                </div>

                {/* Content Panel */}
                <div className="why-pro-content-panel" style={{ padding: '2.5rem' }}>
                  <div className="why-pro-content-inner">
                    <span className="why-card-badge" style={{ background: 'rgba(29, 78, 216, 0.1)', color: '#1d4ed8', fontWeight: 800 }}>
                      {item.badge}
                    </span>
                    
                    <h3 className="why-card-title" style={{ fontSize: '1.65rem', marginTop: '0.75rem', fontWeight: 800, color: '#0f172a' }}>
                      {item.title}
                    </h3>
                    
                    <div className="why-card-divider" style={{ width: '60px', height: '3px', background: '#2563eb', margin: '1rem 0' }}></div>
                    
                    <p className="why-card-desc" style={{ color: '#475569', fontSize: '0.96rem', lineHeight: '1.7' }}>
                      {item.desc}
                    </p>

                    {/* Metrics Grid */}
                    <div className="why-card-metrics" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', margin: '1.75rem 0' }}>
                      {item.metrics.map((m, mi) => (
                        <motion.div
                          key={mi}
                          whileHover={{ y: -3, scale: 1.03 }}
                          className="why-metric-item"
                          style={{
                            background: '#f8fafc',
                            border: '1px solid rgba(15, 23, 42, 0.08)',
                            borderRadius: '12px',
                            padding: '0.85rem 0.5rem',
                            textAlign: 'center'
                          }}
                        >
                          <span className="why-metric-val" style={{ display: 'block', color: '#1d4ed8', fontWeight: 900, fontSize: '1.35rem' }}>
                            {m.val}
                          </span>
                          <span className="why-metric-lbl" style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700 }}>
                            {m.lbl}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="why-card-cta"
                      onClick={() => onNavigate('contact')}
                      style={{
                        background: '#1d4ed8',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '12px',
                        padding: '0.8rem 1.6rem',
                        fontWeight: 800,
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        boxShadow: '0 6px 18px rgba(29, 78, 216, 0.35)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <span>Get a Free Quote</span>
                      <span>&rarr;</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ══ FULLSCREEN MODAL VIEW FOR SELECTED CARD ══════════════════ */}
      <AnimatePresence>
        {selectedFullscreenCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFullscreenCard(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(15, 23, 42, 0.88)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '900px',
                background: '#ffffff',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 30px 70px rgba(0, 0, 0, 0.4)',
                position: 'relative'
              }}
            >
              <button
                onClick={() => setSelectedFullscreenCard(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(15, 23, 42, 0.75)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10
                }}
              >
                ✕
              </button>

              <div style={{ height: '350px', position: 'relative' }}>
                <img
                  src={selectedFullscreenCard.image}
                  alt={selectedFullscreenCard.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '2.5rem' }}>
                <span className="why-card-badge" style={{ background: 'rgba(29, 78, 216, 0.1)', color: '#1d4ed8', fontWeight: 800 }}>
                  {selectedFullscreenCard.badge}
                </span>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: '0.5rem', color: '#0f172a' }}>
                  {selectedFullscreenCard.title}
                </h2>
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.7', marginTop: '1rem' }}>
                  {selectedFullscreenCard.desc}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '2rem' }}>
                  {selectedFullscreenCard.metrics.map((m, mi) => (
                    <div key={mi} style={{ background: '#f8fafc', padding: '1rem', borderRadius: '12px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                      <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1d4ed8', display: 'block' }}>{m.val}</span>
                      <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 700 }}>{m.lbl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom CTA Banner */}
      <div className="container" style={{ marginTop: '4rem' }}>
        <motion.div
          whileHover={{ y: -4, boxShadow: '0 24px 50px -12px rgba(15, 23, 42, 0.18)' }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="why-pro-bottom-cta"
          style={{ borderRadius: '20px' }}
        >
          <div className="bottom-cta-left">
            <h3 className="bottom-cta-title">Ready to restore your CNC spindle to peak performance?</h3>
            <p className="bottom-cta-sub">Get a technical consultation and rebuild estimate from our engineers within 2 hours.</p>
          </div>
          <div className="bottom-cta-actions">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onNavigate('contact')}
              className="btn-navy-primary"
            >
              MAKE AN INQUIRY NOW &nbsp;&rarr;
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onNavigate('services')}
              className="btn-navy-secondary"
            >
              VIEW REBUILD PROCESS
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
