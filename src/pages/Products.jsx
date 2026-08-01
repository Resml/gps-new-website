import React, { useState } from 'react';

export default function Products({ onNavigate }) {
  const [filter, setFilter] = useState('all');

  const productsList = [
    {
      id: 'GPS-M12',
      category: 'motorized',
      badge: 'Motorized Spindle',
      title: 'GPS-M12 Milling Spindle',
      desc: 'High-speed synchronous motorized spindle configured for machining aluminum alloys and thin-walled structural frames.',
      img: '/images/spindles/png 1.png',
      specs: [
        { label: 'Max Operating Speed', val: '30,000 RPM' },
        { label: 'Continuous Power', val: '25 kW' },
        { label: 'Tool Interface', val: 'HSK-A63' },
        { label: 'Lubrication System', val: 'Air-Oil Mist' }
      ]
    },
    {
      id: 'GPS-B08',
      category: 'belt',
      badge: 'Belt-Driven Spindle',
      title: 'GPS-B08 Cartridge Spindle',
      desc: 'Belt-driven cartridge spindle built with triplex angular contact bearings for high-torque lathe turning applications.',
      img: '/images/spindles/IMG_1766.png',
      specs: [
        { label: 'Max Operating Speed', val: '8,000 RPM' },
        { label: 'Bearing Configuration', val: 'Triplex Angular Class 7' },
        { label: 'Tool Interface', val: 'BT40 Taper' },
        { label: 'Lubrication System', val: 'Permanent Grease Pack' }
      ]
    },
    {
      id: 'GPS-H45',
      category: 'high-freq',
      badge: 'High-Frequency',
      title: 'GPS-H45 Grinding Spindle',
      desc: 'High-frequency grinding spindle designed for internal bore lathing, maintaining runout tolerances under 0.0005mm.',
      img: '/images/spindles/IMG_1813.png',
      specs: [
        { label: 'Max Operating Speed', val: '60,000 RPM' },
        { label: 'Shaft Runout Tolerance', val: '< 0.0005 mm' },
        { label: 'Collet Selection', val: 'ER-11 / ER-16' },
        { label: 'Lubrication System', val: 'Air-Oil Precision' }
      ]
    },
    {
      id: 'GPS-G18',
      category: 'gear',
      badge: 'Gear-Driven Spindle',
      title: 'GPS-G18 Heavy Duty Spindle',
      desc: 'Mechanical gear-driven spindle with a 2-speed transmission box, optimized for heavy-torque titanium milling.',
      img: '/images/spindles/1866.png',
      specs: [
        { label: 'Max Operating Speed', val: '4,500 RPM' },
        { label: 'Max Torques (S6)', val: '1,200 Nm' },
        { label: 'Tool Interface', val: 'CAT50 / HSK-A100' },
        { label: 'Transmission System', val: '2-Speed Mechanical Gear' }
      ]
    },
    {
      id: 'GPS-M24',
      category: 'motorized',
      badge: 'Motorized Spindle',
      title: 'GPS-M24 Machining Center Spindle',
      desc: 'Liquid-cooled stator motorized spindle engineered for multi-axis CNC routers and composite machining.',
      img: '/images/spindles/1874.png',
      specs: [
        { label: 'Max Operating Speed', val: '24,000 RPM' },
        { label: 'Continuous Power', val: '32 kW' },
        { label: 'Tool Interface', val: 'HSK-F63' },
        { label: 'Shaft Runout Tolerance', val: '< 0.001 mm' }
      ]
    },
    {
      id: 'GPS-B12',
      category: 'belt',
      badge: 'Belt-Driven Spindle',
      title: 'GPS-B12 Boring Spindle',
      desc: 'Ultra-rigid mechanical boring spindle, built with quadruplex preloaded angular bearings for boring operations.',
      img: '/images/spindles/IMG_1839.png',
      specs: [
        { label: 'Max Operating Speed', val: '6,000 RPM' },
        { label: 'Max Torques (S1)', val: '450 Nm' },
        { label: 'Tool Interface', val: 'CAT40 / BT40' },
        { label: 'Shaft Runout Tolerance', val: '< 0.0015 mm' }
      ]
    }
  ];

  const filteredProducts = filter === 'all' 
    ? productsList 
    : productsList.filter(p => p.category === filter);

  return (
    <div className="page-fade-enter-active">
      {/* Sub Hero */}
      <section className="sub-hero">
        <div className="container sub-hero-content">
          <div className="breadcrumbs">
            <span>Home</span>
            <span>/</span>
            <span className="current">Products</span>
          </div>

          <div className="label-tag-enhanced" style={{ marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            <span className="dot"></span>
            PRECISION SPINDLE CATALOG
          </div>

          <h1 style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: '0.5rem' }}>
            Technical Spindle Product Catalog
          </h1>
          <p style={{ maxWidth: '640px', fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
            Review our lines of high-speed motorized integrated, mechanical belt-driven, and heavy gear transmission spindle models.
          </p>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="section container">
        <div className="filter-tabs" style={{ marginBottom: '2.5rem' }}>
          <button onClick={() => setFilter('all')} className={`filter-btn ${filter === 'all' ? 'active' : ''}`}>All Spindles ({productsList.length})</button>
          <button onClick={() => setFilter('motorized')} className={`filter-btn ${filter === 'motorized' ? 'active' : ''}`}>Motorized</button>
          <button onClick={() => setFilter('belt')} className={`filter-btn ${filter === 'belt' ? 'active' : ''}`}>Belt-Driven</button>
          <button onClick={() => setFilter('gear')} className={`filter-btn ${filter === 'gear' ? 'active' : ''}`}>Gear-Driven</button>
          <button onClick={() => setFilter('high-freq')} className={`filter-btn ${filter === 'high-freq' ? 'active' : ''}`}>High-Frequency</button>
        </div>

        <div className="catalog-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="catalog-item">
              <div className="product-card" style={{ boxShadow: '0 4px 15px -3px rgba(15, 23, 42, 0.04)' }}>
                <div className="product-img-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', background: 'var(--bg-secondary)' }}>
                  <img src={product.img} alt={product.title} className="transparent-spindle-img" style={{ maxHeight: '100%', maxWidth: '100%', filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.08))' }} />
                </div>
                <div className="product-info-wrapper">
                  <div className="label-tag" style={{ alignSelf: 'flex-start', marginBottom: '0.6rem' }}>{product.badge}</div>
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-desc">{product.desc}</p>
                  <div className="product-specs">
                    <ul className="product-specs-list">
                      {product.specs.map((spec, sIdx) => (
                        <li key={sIdx}>
                          <span className="product-specs-label">{spec.label}</span>
                          <span className="product-specs-value">{spec.val}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="product-card-actions" style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                    <button 
                      onClick={() => onNavigate('contact', product.id)} 
                      className="btn btn-primary"
                      style={{ width: '100%' }}
                    >
                      Inquire About Model &nbsp; &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparisons */}
      <section className="section alt-bg">
        <div className="container">
          <div className="section-header-enhanced">
            <div className="label-tag-wrapper">
              <span className="label-tag-enhanced">
                <span className="dot"></span>
                Architecture Comparison
              </span>
            </div>
            <h2 className="section-title-enhanced">
              Integrated Motorized <span className="gradient-text">vs. Belt-Driven Interfaces</span>
            </h2>
            <div className="title-divider-enhanced"></div>
          </div>
          
          <div className="grid-2">
            <div className="b2b-card" style={{ backgroundColor: '#ffffff', padding: '2rem' }}>
              <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem', fontSize: '1.25rem', fontWeight: 800 }}>
                Integrated Motorized Configurations
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
                Integrated motorized configurations seat the rotor directly on the spindle shaft. This layout completely isolates dynamic belt side-load tension forces, permits higher angular velocities (up to 100,000 RPM), and is ideal for high-speed finishing operations. Heat from the motor is regulated using liquid cooling loops.
              </p>
            </div>
            <div className="b2b-card" style={{ backgroundColor: '#ffffff', padding: '2rem' }}>
              <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem', fontSize: '1.25rem', fontWeight: 800 }}>
                Belt-Driven Mechanical Configurations
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
                Belt-driven designs transfer mechanical power from an external motor via coupled pulleys. This design is highly service-accessible and delivers cost-effective, high-torque output under low and medium velocity limits. Pulley designs isolate thermal displacement, but side-load belt strain limits high-speed precision.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
