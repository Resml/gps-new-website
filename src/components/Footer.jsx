import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer({ onNavigate }) {
  const [toastMessage, setToastMessage] = useState('');

  const handleLinkClick = (page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`${label} copied to clipboard`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <footer className="machin-footer-wrapper" style={{ padding: '1.5rem 1rem 1rem 1rem', background: '#f8fafc' }}>

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            style={{
              position: 'fixed',
              bottom: '90px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#ffffff',
              color: '#1d4ed8',
              padding: '0.65rem 1.6rem',
              borderRadius: '30px',
              fontSize: '0.85rem',
              fontWeight: 800,
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span style={{ color: '#16a34a', fontWeight: 900 }}>✓</span> {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Royal Blue Industrial Container with Thin White Dividers */}
      <div
        className="machin-footer-card"
        style={{
          position: 'relative',
          background: '#1d4ed8',
          borderRadius: '24px',
          color: '#ffffff',
          padding: '3rem 3rem 2rem 3rem',
          maxWidth: '1380px',
          margin: '0 auto',
          overflow: 'hidden',
          boxShadow: '0 24px 60px -10px rgba(29, 78, 216, 0.35)'
        }}
      >
        {/* Top Huge Watermark Typography */}
        <div style={{ overflow: 'hidden', marginBottom: '2.5rem', userSelect: 'none', textAlign: 'center' }}>
          <div
            style={{
              fontSize: 'clamp(5rem, 16vw, 14rem)',
              fontWeight: 900,
              letterSpacing: '-0.05em',
              color: 'rgba(255, 255, 255, 0.95)',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              lineHeight: 0.8,
              textAlign: 'center'
            }}
          >
            GPS
          </div>
        </div>

        {/* Top Divider Line */}
        <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.18)', marginBottom: '3rem' }} />

        {/* 3-Column Grid Layout with Thin Vertical Dividers */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 1.1fr) minmax(320px, 1.4fr) minmax(280px, 1.1fr)', gap: '2.5rem' }}>

          {/* Column 1: Headline & Description */}
          <div style={{ paddingRight: '2rem', borderRight: '1px solid rgba(255, 255, 255, 0.18)' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#ffffff', lineHeight: '1.25', margin: '0 0 1rem 0' }}>
              Discover our range of precision spindle manufacturing &amp; rebuild services.
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.92rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
              Pune's premier CNC, VMC, HMC, and High-Frequency Spindle specialists since 2017. 3,000+ units delivered under cleanroom SOP standards with full 1-Year Warranty.
            </p>

            {/* Outline Badges */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '4px 12px', fontSize: '0.75rem', fontWeight: 800, color: '#ffffff' }}>
                SINCE 2017
              </span>
              <span style={{ border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '4px 12px', fontSize: '0.75rem', fontWeight: 800, color: '#ffffff' }}>
                3000+ CLIENTS
              </span>
              <span style={{ border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '4px 12px', fontSize: '0.75rem', fontWeight: 800, color: '#ffffff' }}>
                1-YEAR WARRANTY
              </span>
            </div>
          </div>

          {/* Column 2: Navigation & Solutions Sub-Grid */}
          <div style={{ paddingRight: '2rem', borderRight: '1px solid rgba(255, 255, 255, 0.18)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>

            {/* Sub-Col 1: Navigation */}
            <div>
              <h4 style={{ fontSize: '0.78rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '1.25rem' }}>
                NAVIGATION
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
                {[
                  { id: 'home', label: 'Home Overview' },
                  { id: 'capabilities', label: 'Technical Capabilities' },
                  { id: 'products', label: 'Spindles Catalog' },
                  { id: 'services', label: 'Rebuild & SOP Services' },
                  { id: 'contact', label: 'Request Consultation' }
                ].map((item) => (
                  <li key={item.id}>
                    <motion.span
                      whileHover={{ x: 4, opacity: 1 }}
                      style={{ cursor: 'pointer', color: '#ffffff', opacity: 0.9, fontWeight: 600, transition: 'all 0.2s ease', display: 'inline-block' }}
                      onClick={() => handleLinkClick(item.id)}
                    >
                      {item.label}
                    </motion.span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sub-Col 2: Solutions */}
            <div>
              <h4 style={{ fontSize: '0.78rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '1.25rem' }}>
                SOLUTIONS
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
                {[
                  'High-Speed Spindle Repair',
                  '100k RPM Dynamic Balancing',
                  'Sub-Micron Taper Grinding',
                  'Ceramic Hybrid Bearings',
                  'Stator Motor Rewinding'
                ].map((sol, sidx) => (
                  <li key={sidx}>
                    <motion.span
                      whileHover={{ x: 4, opacity: 1 }}
                      style={{ cursor: 'pointer', color: '#ffffff', opacity: 0.9, fontWeight: 600, transition: 'all 0.2s ease', display: 'inline-block' }}
                      onClick={() => handleLinkClick('services')}
                    >
                      {sol}
                    </motion.span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Column 3: Address, Contact & Social Links */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ fontSize: '0.78rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '1.25rem' }}>
                PUNE WORKSHOP &amp; CONTACT
              </h4>

              <div style={{ fontSize: '0.88rem', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '1.25rem' }}>
                15/A/2, Shop No.3, GKD Industrial Estate,<br />
                Near Savli Dhaba, Nanded Phata, Sinhgad Road,<br />
                Pune – 411041, Maharashtra, India.
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
                <div onClick={() => copyToClipboard('anilvakude@gpsspindles.com', 'Email')} style={{ cursor: 'pointer', color: '#ffffff', fontWeight: 600 }}>
                  anilvakude@gpsspindles.com
                </div>
                <div onClick={() => copyToClipboard('+919764252188', 'Manufacturing Phone')} style={{ cursor: 'pointer', color: '#ffffff', fontWeight: 800 }}>
                  Anil Vakude: +91 97642 52188
                </div>
                <div onClick={() => copyToClipboard('+919764032929', 'Reconditioning Phone')} style={{ cursor: 'pointer', color: '#ffffff', fontWeight: 800 }}>
                  Sachin Kuchekar: +91 97640 32929
                </div>
              </div>
            </div>

            {/* Square Solid Blue Social Media Buttons */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {[
                { title: 'LinkedIn', url: 'https://www.linkedin.com/in/g-p-s-86286b402/', svg: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                { title: 'Instagram', url: 'https://www.instagram.com/general_precision_spindles', svg: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { title: 'Facebook', url: 'https://www.facebook.com/people/Gps-Works/61574336955619/', svg: 'M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z' },
                { title: 'YouTube', url: 'https://www.youtube.com/@generalprecisionspindles', svg: 'M23.498 6.163c-.272-1.022-1.074-1.826-2.099-2.099-1.854-.5-9.4-.5-9.4-.5s-7.546 0-9.4.5c-1.026.273-1.827 1.077-2.1 2.099-.5 1.854-.5 5.728-.5 5.728s0 3.874.5 5.728c.273 1.022 1.074 1.826 2.099 2.099 1.854.5 9.4.5 9.4.5s7.546 0 9.4-.5c1.026-.273 1.827-1.077 2.1-2.099.5-1.854.5-5.728.5-5.728s0-3.874-.5-5.728zM9.75 15.025V8.975L15 12l-5.25 3.025z' },
                { title: 'X', url: 'https://x.com/gps_spindles', svg: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' }
              ].map((s) => (
                <motion.a
                  key={s.title}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.title}
                  aria-label={s.title}
                  whileHover={{ y: -2, background: '#ffffff', color: '#1d4ed8' }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.15)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.svg} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Horizontal Divider */}
        <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.18)', margin: '2.5rem 0 1.5rem 0' }} />

        {/* Bottom Copyright & GST Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.75)' }}>
          <div>
            &copy; {new Date().getFullYear()} General Precision Spindles (GPS Spindles). All Rights Reserved.
          </div>
          <div>
            GSTIN: <strong>27AATFG1527D1ZF</strong>
          </div>
        </div>

      </div>
    </footer>
  );
}
