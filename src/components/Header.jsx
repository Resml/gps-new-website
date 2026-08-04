import React, { useState, useEffect } from 'react';

const navLinks = [
  { id: 'home',         label: 'Home' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'products',     label: 'Products' },
  { id: 'services',     label: 'Process' },
];

export default function Header({ currentPage, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (page) => {
    setIsMenuOpen(false);
    onNavigate(page);
  };

  return (
    <>


      {/* Main header */}
      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">

          {/* Logo */}
          <div
            className="brand-logo-container"
            onClick={() => handleLinkClick('home')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleLinkClick('home'); }}
            aria-label="General Precision Spindles Home"
          >
            <div className="logo-badge-wrapper">
              <div className="logo-pulse-ring"></div>
              <img
                src="/images/gps_logo_icon.png"
                alt="GPS Logo"
                className="logo-badge-img"
              />
            </div>
            <div className="logo-brand-lockup">
              <div className="logo-brand-title">
                <span className="brand-word-general">GENERAL </span>
                <span className="brand-word-precision">PRECISION</span>
              </div>
              <span className="logo-brand-tagline">SPINDLE REPAIR &amp; ENGINEERING</span>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`} role="navigation">
            <div className="nav-links-group">
              {navLinks.map((link) => (
                <span
                  key={link.id}
                  className={`nav-link ${currentPage === link.id ? 'active' : ''}`}
                  onClick={() => handleLinkClick(link.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleLinkClick(link.id); }}
                >
                  {link.label}
                  {currentPage === link.id && <span className="nav-active-dot"></span>}
                </span>
              ))}
            </div>

            <div className="nav-cta-group">

              <button
                className="btn-quote-cta"
                onClick={() => handleLinkClick('contact')}
              >
                Get Free Quote &nbsp;→
              </button>
            </div>
          </nav>

          {/* Hamburger */}
          <button
            className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="mobile-overlay" onClick={() => setIsMenuOpen(false)} />
      )}
    </>
  );
}
