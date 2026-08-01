import React, { useState, useEffect } from 'react';

export default function Header({ currentPage, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (page) => {
    setIsMenuOpen(false);
    onNavigate(page);
  };

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
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
              alt="General Precision Spindles Logo" 
              className="logo-badge-img"
            />
          </div>

          <div className="logo-brand-lockup">
            <div className="logo-brand-title">
              <span className="brand-word-general">GENERAL </span>
              <span className="brand-word-precision">PRECISION</span>
            </div>
            <span className="logo-brand-tagline">
              SPINDLE REPAIR &amp; ENGINEERING
            </span>
          </div>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <span
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </span>
          <span
            className={`nav-link ${currentPage === 'capabilities' ? 'active' : ''}`}
            onClick={() => handleLinkClick('capabilities')}
          >
            Capabilities
          </span>
          <span
            className={`nav-link ${currentPage === 'products' ? 'active' : ''}`}
            onClick={() => handleLinkClick('products')}
          >
            Products
          </span>
          <span
            className={`nav-link ${currentPage === 'services' ? 'active' : ''}`}
            onClick={() => handleLinkClick('services')}
          >
            Rebuild Process
          </span>
          <button
            className="btn-quote-cta"
            onClick={() => handleLinkClick('contact')}
          >
            Request Quote &nbsp; &rarr;
          </button>
        </nav>

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
  );
}
