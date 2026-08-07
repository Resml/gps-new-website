import React, { useState, useEffect } from 'react';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'products', label: 'Products' },
  { id: 'services', label: 'Process' },
];

export default function Header({ currentPage, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (page) => {
    setIsMenuOpen(false);
    onNavigate(page);
  };

  return (
    <header className={`main-header-floating ${isScrolled ? 'scrolled' : ''}`}>
      <div className="pill-navbar-container">

        {/* Logo Block */}
        <div
          className="pill-nav-item pill-logo-item"
          onClick={() => handleLinkClick('home')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter') handleLinkClick('home'); }}
        >
          <img src="/images/gps_logo_icon.png" alt="GPS Logo" className="pill-logo-img" />
          <span className="pill-logo-title">GPS SPINDLES</span>
        </div>

        <div className="pill-divider desktop-only" />

        {/* Desktop Nav Items with Dividers */}
        <div className={`pill-nav-links desktop-only ${isMenuOpen ? 'mobile-active' : ''}`}>
          {navLinks.map((link) => (
            <React.Fragment key={link.id}>
              <div
                className={`pill-nav-item ${currentPage === link.id ? 'active' : ''}`}
                onClick={() => handleLinkClick(link.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') handleLinkClick(link.id); }}
              >
                {link.label}
              </div>
              <div className="pill-divider" />
            </React.Fragment>
          ))}

          {/* Secondary Contact Link */}
          <div
            className={`pill-nav-item ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => handleLinkClick('contact')}
            style={{ color: 'var(--accent-primary)', fontWeight: 800 }}
            role="button"
            tabIndex={0}
          >
            Contact Desk
          </div>
        </div>

        {/* Primary CTA Button (Squint Style Pill with Arrow Badge) */}
        <button
          className="pill-cta-btn"
          onClick={() => handleLinkClick('contact')}
          aria-label="Get Free Quote"
        >
          <span>Get Free Quote</span>
          <span className="pill-btn-arrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </button>

        {/* Mobile Hamburger Toggle */}
        <button
          className={`pill-hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="mobile-pill-dropdown">
          {navLinks.map((link) => (
            <div
              key={link.id}
              className={`mobile-dropdown-item ${currentPage === link.id ? 'active' : ''}`}
              onClick={() => handleLinkClick(link.id)}
            >
              {link.label}
            </div>
          ))}
          <div
            className={`mobile-dropdown-item ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => handleLinkClick('contact')}
            style={{ color: 'var(--accent-primary)', fontWeight: 800 }}
          >
            Contact Desk
          </div>
        </div>
      )}
    </header>
  );
}
