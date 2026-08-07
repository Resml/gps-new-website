import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Operations Manager',
    company: 'Pune Precision Auto',
    quote: 'GPS Spindles rebuilt our Haas VMC-750 high-speed spindle in just 4 days when OEM quoted 6 weeks. Runout was calibrated under 0.0008mm, and it has been running flawlessly for over 18 months.',
    tag: 'HAAS VMC-750 • < 0.0008mm Runout',
    avatar: '/images/anil.png'
  },
  {
    id: 2,
    name: 'Amit Patil',
    role: 'Chief Engineer',
    company: 'Aerospace Tools Pvt Ltd',
    quote: 'Their dynamic balancing capability to ISO G0.4 standards transformed our surface finish quality. Vibration levels dropped by 65%, dramatically extending our bearing operating lifecycle.',
    tag: 'DMG MORI 24K RPM • ISO G0.4',
    avatar: '/images/sachin.png'
  },
  {
    id: 3,
    name: 'Vikram Deshmukh',
    role: 'Director',
    company: 'Deshmukh CNC Components',
    quote: 'The emergency response team collected our burnt-out grinding spindle on Sunday morning and returned it fully restored by Tuesday afternoon. Incredible service commitment.',
    tag: 'Fischer High-Freq • 1-Year Warranty',
    avatar: '/images/anil.png'
  },
  {
    id: 4,
    name: 'Sunil Jadhav',
    role: 'Maintenance Lead',
    company: 'Kirloskar Tools',
    quote: 'Having an independent spindle specialist in Pune that handles both mechanical grinding and motor rewinding under cleanroom SOP is a massive advantage for our shop.',
    tag: 'Cleanroom SOP Certified',
    avatar: '/images/sachin.png'
  }
];

export default function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 2 >= testimonials.length ? 0 : prev + 2));
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 2 < 0 ? testimonials.length - 2 : prev - 2));
  };

  const visibleTestimonials = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % testimonials.length]
  ];

  return (
    <section className="section" id="testimonials-machin-section" style={{ background: '#ffffff', padding: '6rem 0' }}>
      <div className="container">
        
        {/* Machin Layout Grid: Left Header & Controls | Right Headline & Cards */}
        <div className="machin-2col-header" style={{ marginBottom: 0 }}>
          
          {/* Left Side: Category Tag & Slider Arrows */}
          <div className="testimonials-header-col" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', minHeight: '280px' }}>
            <div>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#1d4ed8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                CLIENT FEEDBACK
              </span>
            </div>

            {/* Slider Navigation Arrows (Machin Square Style) */}
            <div className="testimonials-arrows-wrap" style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
              <motion.button
                whileHover={{ scale: 1.08, background: '#f1f5f9' }}
                whileTap={{ scale: 0.94 }}
                onClick={handlePrev}
                aria-label="Previous Testimonials"
                style={{
                  width: '46px',
                  height: '46px',
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#334155',
                  transition: 'all 0.2s ease'
                }}
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path d="M19 12H5m7 7l-7-7 7-7" />
                </svg>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.08, background: '#1d4ed8', color: '#ffffff', borderColor: '#1d4ed8' }}
                whileTap={{ scale: 0.94 }}
                onClick={handleNext}
                aria-label="Next Testimonials"
                style={{
                  width: '46px',
                  height: '46px',
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#1d4ed8',
                  transition: 'all 0.2s ease'
                }}
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path d="M5 12h14m-7 7l7-7-7-7" />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Right Side: Headline & 2-Card Grid */}
          <div>
            {/* High Impact Headline */}
            <h2 style={{ fontSize: '2.35rem', fontWeight: 800, color: '#0f172a', lineHeight: '1.25', margin: '0 0 3rem 0', maxWidth: '820px', letterSpacing: '-0.02em' }}>
              Industrial companies rely on GPS Spindles for equipment{' '}
              <span style={{ color: '#1d4ed8' }}>that performs reliably</span> under real operational conditions.
            </h2>

            {/* 2-Card Animated Carousel Row */}
            <div style={{ position: 'relative', minHeight: '260px' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={startIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="testimonials-cards-grid"
                  style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}
                >
                  {visibleTestimonials.map((item) => (
                    <motion.div
                      key={item.id}
                      whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(15, 23, 42, 0.08)' }}
                      style={{
                        background: '#f8fafc',
                        border: '1px solid rgba(15, 23, 42, 0.08)',
                        borderRadius: '16px',
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justify: 'space-between',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {/* Author Header Row */}
                      <div style={{ marginBottom: '1.25rem' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                          {item.name}
                        </h3>
                        <p style={{ fontSize: '0.82rem', color: '#64748b', margin: '3px 0 0 0', fontWeight: 600 }}>
                          {item.role}, {item.company}
                        </p>
                      </div>

                      {/* Testimonial Quote */}
                      <p style={{ color: '#334155', fontSize: '0.95rem', lineHeight: '1.65', margin: '0 0 1.5rem 0' }}>
                        "{item.quote}"
                      </p>

                      {/* Metric Tag Badge */}
                      <div style={{ marginTop: 'auto' }}>
                        <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#1d4ed8', background: 'rgba(29, 78, 216, 0.08)', padding: '5px 12px', borderRadius: '8px', display: 'inline-block' }}>
                          ✓ {item.tag}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
