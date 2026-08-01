import React from 'react';
import QuoteForm from '../components/QuoteForm';

export default function Contact({ selectedSpindle, setSelectedSpindle }) {
  return (
    <div className="page-fade-enter-active">
      {/* Sub Hero */}
      <section className="sub-hero">
        <div className="container sub-hero-content">
          <div className="breadcrumbs">
            <span>Home</span>
            <span>/</span>
            <span className="current">Request Quote</span>
          </div>
          <h1 style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: '0.5rem' }}>Submit Rebuild Inquiry</h1>
          <p style={{ maxWidth: '600px', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
            Provide your technical spindle parameters and symptoms below. Our engineering desk will review and respond within 2 hours.
          </p>
        </div>
      </section>

      {/* Info & Form */}
      <section className="section container">
        <div className="grid-2">
          {/* Support Data */}
          <div>
            <div style={{ marginBottom: '0.75rem' }}>
              <span className="label-tag">Corporate Communication</span>
            </div>
            <h2>Spindle Rebuild Support Desk</h2>
            <p>Our engineers provide diagnostics, technical assistance, and logistics coordination. Please locate direct hotline and mailing details below:</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2.5rem' }}>
              <div className="b2b-card">
                <h3 style={{ fontSize: '1rem', marginBottom: '2px', color: 'var(--accent-primary)' }}>Manufacturing Phone</h3>
                <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}><a href="tel:+919764252188" style={{ color: 'inherit', textDecoration: 'none' }}>+91 97642 52188</a></p>
                <p style={{ fontSize: '0.8rem', marginBottom: 0, color: 'var(--text-muted)' }}>For manufacturing, custom spindle orders and new enquiries.</p>
              </div>
              
              <div className="b2b-card">
                <h3 style={{ fontSize: '1rem', marginBottom: '2px', color: 'var(--accent-primary)' }}>Reconditioning Phone</h3>
                <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}><a href="tel:+919764032929" style={{ color: 'inherit', textDecoration: 'none' }}>+91 97640 32929</a></p>
                <p style={{ fontSize: '0.8rem', marginBottom: 0, color: 'var(--text-muted)' }}>For urgent spindle repair &amp; emergency breakdown support. WhatsApp available 24×7.</p>
              </div>

              <div className="b2b-card">
                <h3 style={{ fontSize: '1rem', marginBottom: '2px', color: 'var(--accent-primary)' }}>Email &amp; Tax Info</h3>
                <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}><a href="mailto:anil.vakude@gpsspindles.net" style={{ color: 'inherit', textDecoration: 'none' }}>anil.vakude@gpsspindles.net</a></p>
                <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}><a href="mailto:sachinkuchekar@gpsspindles.com" style={{ color: 'inherit', textDecoration: 'none' }}>sachinkuchekar@gpsspindles.com</a></p>
                <p style={{ fontSize: '0.8rem', marginBottom: 0, color: 'var(--text-muted)', marginTop: '6px' }}><strong>GST No:</strong> 27AATFG1527D1ZF</p>
              </div>

              <div className="b2b-card">
                <h3 style={{ fontSize: '1rem', marginBottom: '2px', color: 'var(--accent-primary)' }}>Workshop Address</h3>
                <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>15/A/2, Shop No.3, GKD Industrial Estate,<br />Near Savli Dhaba, Nanded Phata, Sinhgad Road,<br />Pune – 411041, Maharashtra, India.</p>
                <p style={{ fontSize: '0.8rem', marginBottom: 0, color: 'var(--text-muted)' }}>Free pickup available for Pune area clients. Drop-in welcome.</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <QuoteForm 
              selectedSpindle={selectedSpindle} 
              setSelectedSpindle={setSelectedSpindle} 
            />
          </div>
        </div>
      </section>

      {/* Styled Blueprint Location Map */}
      <section className="section alt-bg">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '0.75rem' }}>
              <span className="label-tag">Facility Location</span>
            </div>
            <h2 style={{ marginBottom: 0 }}>Pune Workshop &amp; Facility</h2>
          </div>
          
          <div style={{ width: '100%', height: '350px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-color)', position: 'relative', background: '#f8fafc', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', fill: 'none', background: 'linear-gradient(rgba(15, 23, 42, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.02) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.15 }} xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="100" x2="1200" y2="100" stroke="#0f172a" strokeWidth="4" />
              <line x1="200" y1="0" x2="200" y2="400" stroke="#0f172a" strokeWidth="4" />
              <line x1="500" y1="0" x2="500" y2="400" stroke="#0f172a" strokeWidth="6" />
              <line x1="0" y1="250" x2="1200" y2="250" stroke="#0f172a" strokeWidth="5" />
              <path d="M 0 350 Q 300 200 600 350 T 1200 350" fill="none" stroke="#475569" strokeWidth="3" strokeDasharray="5 5" />
            </svg>
 
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
              <div style={{ position: 'absolute', width: '32px', height: '32px', borderRadius: '50%', border: '2px solid var(--accent-primary)', animation: 'pulse 2.2s infinite', transform: 'scale(0.5)', opacity: 0.8 }}></div>
              <div style={{ width: '14px', height: '14px', borderRadius: '50% 50% 50% 0', background: 'var(--accent-primary)', transform: 'rotate(-45deg)' }}></div>
              <div className="b2b-card" style={{ marginTop: '12px', padding: '0.4rem 0.8rem', fontSize: '0.75rem', borderRadius: 'var(--radius-md)', textAlign: 'center', whiteSpace: 'nowrap', boxShadow: 'var(--shadow-sm)', backgroundColor: '#ffffff' }}>
                <strong style={{ color: 'var(--text-primary)', display: 'block' }}>General Precision Spindles Workshop</strong>
                <span style={{ color: 'var(--text-secondary)' }}>Pune, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded style keyframe for map pin animation */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(0.5); opacity: 1; }
          100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
