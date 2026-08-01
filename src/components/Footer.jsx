import React from 'react';

export default function Footer({ onNavigate }) {
  const handleLinkClick = (page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <footer className="main-footer">
      <div className="container footer-grid">
        <div className="footer-col brand-col">
          <div className="logo-container footer-logo" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }} onClick={() => handleLinkClick('home')}>
            <img src="/images/gps_logo_icon.png" alt="General Precision Spindles Logo" style={{ height: '48px', width: 'auto', display: 'block' }} />
            <div className="logo-text">
              <span className="logo-title" style={{ fontSize: '1.35rem', textTransform: 'uppercase', letterSpacing: '-0.01em' }}>GENERAL PRECISION SPINDLES</span>
            </div>
          </div>
          <p className="footer-desc">Pune's most trusted spindle specialists since 2017. Expert repair, reconditioning &amp; manufacturing of CNC, VMC, HMC, and High-Frequency grinding spindles. 3000+ happy clients. 1-year warranty.</p>
          <div className="certification-badge">
            <span className="label-tag gold">Since 2017 · 3000+ Clients · 1-Year Warranty</span>
          </div>
        </div>
        
        <div className="footer-col links-col">
          <h3>Quick Links</h3>
          <ul>
            <li><span style={{ cursor: 'pointer' }} onClick={() => handleLinkClick('home')}>Home</span></li>
            <li><span style={{ cursor: 'pointer' }} onClick={() => handleLinkClick('capabilities')}>Capabilities</span></li>
            <li><span style={{ cursor: 'pointer' }} onClick={() => handleLinkClick('products')}>Spindles Catalog</span></li>
            <li><span style={{ cursor: 'pointer' }} onClick={() => handleLinkClick('services')}>Rebuild Process</span></li>
            <li><span style={{ cursor: 'pointer' }} onClick={() => handleLinkClick('contact')}>Request Quote</span></li>
          </ul>
        </div>
        
        <div className="footer-col services-col">
          <h3>Our Solutions</h3>
          <ul>
            <li><span style={{ cursor: 'pointer' }} onClick={() => handleLinkClick('services')}>High-Speed Repair</span></li>
            <li><span style={{ cursor: 'pointer' }} onClick={() => handleLinkClick('services')}>Dynamic Balancing</span></li>
            <li><span style={{ cursor: 'pointer' }} onClick={() => handleLinkClick('services')}>Precision Grinding</span></li>
            <li><span style={{ cursor: 'pointer' }} onClick={() => handleLinkClick('services')}>Bearing Upgrades</span></li>
            <li><span style={{ cursor: 'pointer' }} onClick={() => handleLinkClick('services')}>Motor Rewinding</span></li>
          </ul>
        </div>
        
        <div className="footer-col contact-col">
          <h3>Contact Us</h3>
          <p className="contact-item"><strong>Manufacturing:</strong> <a href="tel:+919764252188" style={{ color: 'inherit' }}>+91 97642 52188</a></p>
          <p className="contact-item"><strong>Reconditioning:</strong> <a href="tel:+919764032929" style={{ color: 'inherit' }}>+91 97640 32929</a></p>
          <p className="contact-item"><strong>Email:</strong> <a href="mailto:anil.vakude@gpsspindles.net" style={{ color: 'inherit' }}>anil.vakude@gpsspindles.net</a></p>
          <p className="contact-item"><strong>Email:</strong> <a href="mailto:sachinkuchekar@gpsspindles.com" style={{ color: 'inherit' }}>sachinkuchekar@gpsspindles.com</a></p>
          <p className="contact-item"><strong>Address:</strong> 15/A/2, Shop No.3, GKD Industrial Estate, Near Savli Dhaba, Nanded Phata, Sinhgad Road, Pune – 411041, Maharashtra, India.</p>
          <p className="contact-item"><strong>GST No:</strong> 27AATFG1527D1ZF</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-flex">
          <p>&copy; 2026 General Precision Spindles (GPS Spindles). All rights reserved.</p>
          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.163c-.272-1.022-1.074-1.826-2.099-2.099-1.854-.5-9.4-.5-9.4-.5s-7.546 0-9.4.5c-1.026.273-1.827 1.077-2.1 2.099-.5 1.854-.5 5.728-.5 5.728s0 3.874.5 5.728c.273 1.022 1.074 1.826 2.099 2.099 1.854.5 9.4.5 9.4.5s7.546 0 9.4-.5c1.026-.273 1.827-1.077 2.1-2.099.5-1.854.5-5.728.5-5.728s0-3.874-.5-5.728zM9.75 15.025V8.975L15 12l-5.25 3.025z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
