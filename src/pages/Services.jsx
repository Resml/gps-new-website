import React from 'react';
import Timeline from '../components/Timeline';

export default function Services({ onNavigate }) {
  const oemCompare = [
    { feature: 'Average Cost', oem: '100% Full OEM List Price', apex: '30% to 40% Cost Savings (60% average cost)' },
    { feature: 'Turnaround Time', oem: '4 to 6 Weeks delivery delay', apex: '6 to 8 Business Days (Expedited)' },
    { feature: 'Operational Optimization', oem: 'Standard factory specs only', apex: 'Bespoke Si3N4 ceramic bearing matching & seal upgrades' },
    { feature: 'Warranty Coverage', oem: '12-Month basic warranty', apex: '12-Month full warranty + QR Digital QA Certificate' },
    { feature: 'Independent Servicing', oem: 'Bound to single brand OEM', apex: 'Manufacturer-independent capability (Global Spindles)' }
  ];

  const brandGrid = [
    { country: 'German Systems', brands: 'DMG Mori, Hermle, Kessler, Weiss, GMN, Chiron, Blohm, Weiss' },
    { country: 'Swiss Systems', brands: 'Fischer, Step-Tec, Renaud, SMS, IBAG' },
    { country: 'Japanese Systems', brands: 'Mazak, Makino, Matsuura, Fanuc, Okuma, Mori Seiki, Toyoda' },
    { country: 'Italian & Rest Systems', brands: 'Omlat, HSD, Giordano, Gamfior, Colombo, Faemat' }
  ];

  return (
    <div className="page-fade-enter-active">
      {/* Sub Hero Header */}
      <section className="sub-hero">
        <div className="container sub-hero-content">
          <div className="breadcrumbs">
            <span>Home</span>
            <span>/</span>
            <span className="current">Rebuild Process</span>
          </div>

          <div className="label-tag-enhanced" style={{ marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            <span className="dot"></span>
            SOP DOCUMENTED REBUILD PROTOCOL
          </div>

          <h1 style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: '0.5rem' }}>
            Certified Rebuilding &amp; Optimization
          </h1>
          <p style={{ maxWidth: '640px', fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
            Every spindle submitted for repair undergoes a document-controlled sequence of sub-micron diagnostic checks, CNC taper grinding, cleanroom assembly, and 100k RPM dynamic balancing.
          </p>
        </div>
      </section>

      {/* 6-Step Rebuild Timeline */}
      <section className="section timeline-section">
        <div className="container">
          <div className="section-header-enhanced">
            <div className="label-tag-wrapper">
              <span className="label-tag-enhanced">
                <span className="dot"></span>
                Process Sequence
              </span>
            </div>
            <h2 className="section-title-enhanced">
              Standard Operating <span className="gradient-text">Rebuild Timeline</span>
            </h2>
            <div className="title-divider-enhanced"></div>
            <p className="section-desc-enhanced">
              Our technicians follow documented standard operating procedures (SOP) to ensure rebuild quality and OEM spec adherence.
            </p>
          </div>
          
          <Timeline />
        </div>
      </section>

      {/* OEM Comparison Table */}
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
              OEM Replacement <span className="gradient-text">vs. GPS Spindle Rebuild</span>
            </h2>
            <div className="title-divider-enhanced"></div>
            <p className="section-desc-enhanced">
              Compare key financial and engineering parameters when deciding between ordering new OEM units vs. precision restoration:
            </p>
          </div>

          <div style={{ overflowX: 'auto', background: '#ffffff', borderRadius: '4px', border: '1px solid var(--border-color)', boxShadow: '0 4px 15px -3px rgba(15, 23, 42, 0.04)' }}>
            <table className="b2b-table">
              <thead>
                <tr>
                  <th>Evaluation Feature</th>
                  <th>OEM New Replacement Order</th>
                  <th>GPS Certified Spindle Rebuild</th>
                </tr>
              </thead>
              <tbody>
                {oemCompare.map((item, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{item.feature}</td>
                    <td style={{ color: 'var(--text-muted)' }}>{item.oem}</td>
                    <td style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>{item.apex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Manufacturer Independent Repair Grid */}
      <section className="section container">
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
            We repair and recondition motorized and mechanical spindles from almost all major global machine tool builders:
          </p>
        </div>

        <div className="grid-2">
          {brandGrid.map((group, idx) => (
            <div key={idx} className="b2b-card" style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '1.75rem', transition: 'all 0.25s ease' }}>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--accent-primary)' }}>{group.country}</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: 0, lineHeight: '1.65' }}>{group.brands}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Retrofitting & Technical Upgrades */}
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
          
          <div className="grid-2">
            <div className="b2b-card" style={{ backgroundColor: '#ffffff', padding: '2rem' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>
                Si3N4 Ceramic Hybrid Bearing Retrofit
              </div>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
                We retrofit mechanical and motorized spindles with silicon-nitride (Si3N4) hybrid bearings. Ceramic ball elements are 60% lighter than steel, significantly reducing centrifugal friction and load strain, which permits higher maximum RPM limits and decreases operating thermal logs.
              </p>
            </div>
            
            <div className="b2b-card" style={{ backgroundColor: '#ffffff', padding: '2rem' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>
                Stator Winding &amp; Encoder Synchronization
              </div>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
                Integrated motor spindles often experience stator short-circuits from coolant ingress. We wind motor coils in-house, apply vacuum-pressure impregnation (VPI) epoxy lines, and calibrate rotational feedback encoders (Heidenhain, Fanuc, Kessler) to ensure accurate tool change orientation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section container" style={{ textAlign: 'center' }}>
        <div style={{ maxWidth: '750px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="label-tag-enhanced" style={{ marginBottom: '0.75rem' }}>
            <span className="dot"></span>
            Technical Evaluation Desk
          </div>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            Inquire About Your Rebuild Project
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', marginBottom: '1.75rem', lineHeight: '1.6' }}>
            Provide your spindle maker, model, and current operational symptoms to receive a detailed technical diagnostic report, cost estimate, and shipping instructions.
          </p>
          <button onClick={() => onNavigate('contact')} className="btn btn-primary" style={{ padding: '0.85rem 2.2rem', fontSize: '0.9rem' }}>
            Submit Technical Inquiry &nbsp; &rarr;
          </button>
        </div>
      </section>
    </div>
  );
}
