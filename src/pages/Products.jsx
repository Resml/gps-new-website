import React, { useState } from 'react';
import PromoBannerCard from '../components/PromoBannerCard';

export default function Products({ onNavigate }) {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'matrix'
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [compareList, setCompareList] = useState([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

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
      ],
      fullSpecs: {
        cooling: 'Liquid Closed-Loop Stator Jacket',
        bearing: 'Hybrid Ceramic Angular Contact (Class 7)',
        encoder: 'Heidenhain EnDat 2.2 / Fanuc Optical',
        weight: '42 kg',
        clamping: 'Automatic Hydraulic Tool Release'
      }
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
      ],
      fullSpecs: {
        cooling: 'Convection Air-Cooled',
        bearing: 'Triplex Preloaded Angular Contact',
        encoder: 'External Pulley Encoder Ring',
        weight: '68 kg',
        clamping: 'Retention Knob Manual / Hydraulic Pull-Stud'
      }
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
      ],
      fullSpecs: {
        cooling: 'Chilled Water-Glycol Recirculator',
        bearing: 'Precision Si3N4 Ceramic Ball',
        encoder: 'Integrated High-Frequency Vector Sensor',
        weight: '18 kg',
        clamping: 'High-Precision Direct Collet System'
      }
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
      ],
      fullSpecs: {
        cooling: 'Oil Jet Internal Lubrication',
        bearing: 'Tapered Roller & Quadruplex Angular',
        encoder: 'Spindle Shaft Gear Ratio Sensor',
        weight: '195 kg',
        clamping: 'High-Tension Hydraulic Drawbar'
      }
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
      ],
      fullSpecs: {
        cooling: 'Dual Circuit Stator Cooling',
        bearing: 'Ceramic Hybrid Matched Set',
        encoder: 'Lenze / Kessler Vector Feedback',
        weight: '54 kg',
        clamping: 'Pneumatic Tool Ejection System'
      }
    },
    {
      id: 'GPS-B12',
      category: 'belt',
      badge: 'Belt-Driven Spindle',
      title: 'GPS-B12 Boring Spindle',
      desc: 'Ultra-rigid mechanical boring spindle, built with quadruplex preloaded angular bearings for heavy boring operations.',
      img: '/images/spindles/IMG_1839.png',
      specs: [
        { label: 'Max Operating Speed', val: '6,000 RPM' },
        { label: 'Max Torques (S1)', val: '450 Nm' },
        { label: 'Tool Interface', val: 'CAT40 / BT40' },
        { label: 'Shaft Runout Tolerance', val: '< 0.0015 mm' }
      ],
      fullSpecs: {
        cooling: 'Ambient Passive Heat Sink',
        bearing: 'Quadruplex Angular Contact Pack',
        encoder: 'External Shaft Proximity Sensor',
        weight: '82 kg',
        clamping: 'Power Drawbar Assembly'
      }
    }
  ];

  const categories = [
    { key: 'all', label: 'All Spindles', count: productsList.length },
    { key: 'motorized', label: 'Motorized', count: productsList.filter(p => p.category === 'motorized').length },
    { key: 'belt', label: 'Belt-Driven', count: productsList.filter(p => p.category === 'belt').length },
    { key: 'gear', label: 'Gear-Driven', count: productsList.filter(p => p.category === 'gear').length },
    { key: 'high-freq', label: 'High-Frequency', count: productsList.filter(p => p.category === 'high-freq').length },
  ];

  const filteredProducts = productsList.filter(product => {
    const matchesCategory = filter === 'all' || product.category === filter;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleCompare = (productId) => {
    if (compareList.includes(productId)) {
      setCompareList(compareList.filter(id => id !== productId));
    } else {
      if (compareList.length >= 3) {
        alert('You can compare up to 3 models at a time.');
        return;
      }
      setCompareList([...compareList, productId]);
    }
  };

  const comparedProductsData = productsList.filter(p => compareList.includes(p.id));

  return (
    <div className="page-fade-enter-active">

      {/* ══ HERO HEADER ════════════════════════════════════════ */}
      <section className="sub-hero">
        <div className="hero-blueprint-watermark"></div>
        <div className="container sub-hero-content">
          <div className="breadcrumbs">
            <span>Home</span>
            <span>/</span>
            <span className="current">Spindle Product Catalog</span>
          </div>

          <div className="label-tag-enhanced" style={{ marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            <span className="dot"></span>
            PRO MAX DESIGNED PRODUCT CATALOG
          </div>

          <h1 style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: '0.5rem' }}>
            Precision Engineered <span className="gradient-text">Spindle Units</span>
          </h1>
          <p style={{ maxWidth: '680px', fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
            Explore our line of high-speed motorized integrated, mechanical belt-driven, gear transmission, and high-frequency grinding spindle units — custom manufactured and rebuilt to sub-micron standards.
          </p>

          {/* Quick Metrics Bar */}
          <div className="proc-hero-badges" style={{ marginTop: '1.75rem' }}>
            <div className="proc-badge">
              <span className="proc-badge-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </span>
              <span className="proc-badge-val">Up to 60k RPM</span>
              <span className="proc-badge-sub">High Velocity</span>
            </div>
            <div className="proc-badge">
              <span className="proc-badge-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </span>
              <span className="proc-badge-val">&lt; 0.0005mm</span>
              <span className="proc-badge-sub">Sub-Micron Runout</span>
            </div>
            <div className="proc-badge">
              <span className="proc-badge-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </span>
              <span className="proc-badge-val">12-Month</span>
              <span className="proc-badge-sub">Full Warranty</span>
            </div>
            <div className="proc-badge">
              <span className="proc-badge-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </span>
              <span className="proc-badge-val">100% SOP Tested</span>
              <span className="proc-badge-sub">Cleanroom Logged</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CATALOG CONTROLS & FILTER ══════════════════════════ */}
      <section className="section container">
        <div className="filter-bar-enhanced">
          {/* Category Filter Pills */}
          <div className="filter-pills">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`filter-pill-btn ${filter === cat.key ? 'active' : ''}`}
              >
                {cat.label}
                <span className="filter-count-badge">{cat.count}</span>
              </button>
            ))}
          </div>

          {/* Search Box & View Mode Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            {/* Search Input */}
            <div style={{ position: 'relative', minWidth: '220px' }}>
              <input
                type="text"
                placeholder="Search model (e.g. GPS-M12)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.55rem 1rem 0.55rem 2.2rem',
                  fontSize: '0.85rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  outline: 'none'
                }}
              />
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>

            {/* Layout Switcher Buttons */}
            <div className="pro-view-switcher">
              <button
                onClick={() => setViewMode('grid')}
                className={`pro-view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                title="Grid Cards View"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                Grid
              </button>
              <button
                onClick={() => setViewMode('matrix')}
                className={`pro-view-btn ${viewMode === 'matrix' ? 'active' : ''}`}
                title="Engineering Spec Matrix View"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
                Matrix
              </button>
            </div>
          </div>
        </div>

        {/* ══ VIEW MODE 1: GRID CARDS VIEW ══════════════════════ */}
        {viewMode === 'grid' && (
          filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 2rem', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>No Spindle Models Found</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Try selecting another category filter or search keyword.</p>
              <button onClick={() => { setFilter('all'); setSearchQuery(''); }} className="btn btn-secondary" style={{ marginTop: '1rem' }}>
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="catalog-grid">
              {filteredProducts.map((product) => {
                const isCompared = compareList.includes(product.id);
                return (
                  <div key={product.id} className="product-card-enhanced">
                    {/* Badges */}
                    <div className="product-tag-pill">{product.badge}</div>
                    <div className="product-id-badge">{product.id}</div>

                    {/* Image Viewport with Radial Halo */}
                    <div className="product-img-wrapper-enhanced">
                      <img src={product.img} alt={product.title} />
                    </div>

                    {/* Info Body */}
                    <div className="product-info-wrapper-enhanced">
                      <h3 className="product-title-enhanced">{product.title}</h3>
                      <p className="product-desc-enhanced">{product.desc}</p>

                      {/* Micro Specs Grid */}
                      <div className="product-spec-grid-enhanced">
                        {product.specs.map((spec, sIdx) => (
                          <div key={sIdx} className="product-spec-row">
                            <span className="product-spec-label-enhanced">{spec.label}</span>
                            <span className="product-spec-val-enhanced">{spec.val}</span>
                          </div>
                        ))}
                      </div>

                      {/* Compare Checkbox Row */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem', padding: '0 2px' }}>
                        <label style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--text-secondary)', cursor: 'pointer', fontWeight: 600 }}>
                          <input
                            type="checkbox"
                            checked={isCompared}
                            onChange={() => toggleCompare(product.id)}
                            style={{ cursor: 'pointer', accentColor: 'var(--accent-primary)' }}
                          />
                          Compare Specs
                        </label>
                        <span style={{ fontSize: '0.72rem', color: 'var(--accent-primary)', fontWeight: 700 }}>
                          SOP LOGGED
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="product-card-actions-enhanced">
                        <button
                          onClick={() => onNavigate('contact', product.id)}
                          className="btn btn-primary"
                          style={{ flex: 1.2, padding: '0.65rem 0.75rem', fontSize: '0.82rem' }}
                        >
                          Inquire Model &nbsp;&rarr;
                        </button>
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="btn btn-secondary"
                          style={{ flex: 0.8, padding: '0.65rem 0.5rem', fontSize: '0.82rem' }}
                        >
                          Full Specs
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )
        )}

        {/* ══ VIEW MODE 2: MATRIX TABLE VIEW ════════════════════ */}
        {viewMode === 'matrix' && (
          <div className="pro-matrix-table-wrap">
            <table className="pro-matrix-table">
              <thead>
                <tr>
                  <th>Compare</th>
                  <th>Model ID</th>
                  <th>Spindle Architecture</th>
                  <th>Max Speed</th>
                  <th>Tool Interface</th>
                  <th>Power / Torque</th>
                  <th>Runout Tolerance</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => {
                  const maxSpeed = product.specs.find(s => s.label.includes('Speed'))?.val || '—';
                  const toolIf = product.specs.find(s => s.label.includes('Tool'))?.val || '—';
                  const powerOrTorque = product.specs.find(s => s.label.includes('Power') || s.label.includes('Torque'))?.val || '—';
                  const runout = product.specs.find(s => s.label.includes('Runout') || s.label.includes('Bearing'))?.val || '< 0.001mm';
                  const isCompared = compareList.includes(product.id);

                  return (
                    <tr key={product.id}>
                      <td>
                        <input
                          type="checkbox"
                          checked={isCompared}
                          onChange={() => toggleCompare(product.id)}
                          style={{ cursor: 'pointer', accentColor: 'var(--accent-primary)' }}
                        />
                      </td>
                      <td style={{ fontWeight: 800, color: 'var(--accent-primary)', fontFamily: 'var(--font-header)' }}>
                        {product.id}
                      </td>
                      <td>
                        <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{product.title}</div>
                        <span className="label-tag-enhanced" style={{ fontSize: '0.65rem', padding: '2px 6px' }}>{product.badge}</span>
                      </td>
                      <td style={{ fontWeight: 700 }}>{maxSpeed}</td>
                      <td>{toolIf}</td>
                      <td>{powerOrTorque}</td>
                      <td style={{ color: '#16a34a', fontWeight: 700 }}>{runout}</td>
                      <td>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <button
                            onClick={() => setSelectedProduct(product)}
                            className="btn btn-secondary"
                            style={{ padding: '0.4rem 0.65rem', fontSize: '0.75rem' }}
                          >
                            Specs
                          </button>
                          <button
                            onClick={() => onNavigate('contact', product.id)}
                            className="btn btn-primary"
                            style={{ padding: '0.4rem 0.75rem', fontSize: '0.75rem' }}
                          >
                            Inquire &rarr;
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* ══ FLOATING COMPARE TRAY ══════════════════════════════ */}
      {compareList.length > 0 && (
        <div className="compare-floating-tray">
          <div className="compare-tray-text">
            <span className="compare-badge-pill">{compareList.length}</span>
            Models Selected for Side-by-Side Comparison
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <button
              onClick={() => setShowCompareModal(true)}
              className="btn btn-primary"
              style={{ padding: '0.45rem 1.1rem', fontSize: '0.82rem', borderRadius: '99px' }}
            >
              Compare Matrix Side-by-Side &rarr;
            </button>
            <button
              onClick={() => setCompareList([])}
              style={{ background: 'none', border: 'none', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', fontSize: '0.8rem', padding: '0.4rem' }}
            >
              Clear
            </button>
          </div>
        </div>
      )}

      {/* ══ HIGH-IMPACT PROMO BANNER ═══════════════════════════ */}
      <PromoBannerCard onNavigate={onNavigate} />

      {/* ══ ARCHITECTURE SELECTION GUIDE ══════════════════════ */}
      <section className="section alt-bg">
        <div className="container">
          <div className="section-header-enhanced">
            <div className="label-tag-wrapper">
              <span className="label-tag-enhanced">
                <span className="dot"></span>
                Engineering Selection Guide
              </span>
            </div>
            <h2 className="section-title-enhanced">
              Integrated Motorized <span className="gradient-text">vs. Belt-Driven Interfaces</span>
            </h2>
            <div className="title-divider-enhanced"></div>
            <p className="section-desc-enhanced">
              Choosing the right spindle architecture is critical for balancing torque, maximum RPM, thermal stability, and long-term maintenance overhead.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '2rem' }}>
            {/* Card 1: Integrated */}
            <div className="b2b-card" style={{ backgroundColor: '#ffffff', padding: '2.25rem', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span className="label-tag-enhanced" style={{ fontSize: '0.72rem' }}>High-Velocity Finishing</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent-primary)' }}>UP TO 100,000 RPM</span>
              </div>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem', fontSize: '1.35rem', fontWeight: 800 }}>
                Integrated Motorized Configurations
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.65', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                Integrated motorized configurations seat the rotor directly on the spindle shaft. This layout completely isolates dynamic belt side-load tension forces, permits higher angular velocities (up to 100,000 RPM), and is ideal for high-speed finishing operations. Heat from the motor is regulated using liquid cooling loops.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.84rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Zero belt side-load deflection for sub-micron surface finish
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Closed-loop liquid stator jacket prevents thermal growth
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  High-speed vector encoder for rigid tapping &amp; orientation
                </li>
              </ul>
            </div>

            {/* Card 2: Belt-Driven */}
            <div className="b2b-card" style={{ backgroundColor: '#ffffff', padding: '2.25rem', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span className="label-tag-enhanced" style={{ fontSize: '0.72rem' }}>Heavy Torque Milling</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent-primary)' }}>UP TO 1,200 NM TORQUE</span>
              </div>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem', fontSize: '1.35rem', fontWeight: 800 }}>
                Belt-Driven Mechanical Configurations
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.65', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                Belt-driven designs transfer mechanical power from an external motor via coupled pulleys. This design is highly service-accessible and delivers cost-effective, high-torque output under low and medium velocity limits. Pulley designs isolate thermal displacement, but side-load belt strain limits high-speed precision.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.84rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Exceptional low-RPM torque for heavy material removal
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Simple motor replacement without opening cleanroom seal
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Economical rebuild &amp; maintenance cost structure
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SIDE-BY-SIDE COMPARISON MODAL ══════════════════════ */}
      {showCompareModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(10, 18, 32, 0.8)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1.5rem'
          }}
          onClick={() => setShowCompareModal(false)}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: 'var(--radius-md)',
              maxWidth: '900px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)',
              border: '1px solid var(--border-color)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ background: 'var(--bg-secondary)', padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span className="label-tag-enhanced" style={{ fontSize: '0.7rem' }}>Side-by-Side Matrix</span>
                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', fontWeight: 800, marginTop: '2px' }}>Technical Model Comparison</h3>
              </div>
              <button
                onClick={() => setShowCompareModal(false)}
                style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--text-muted)' }}
              >
                ✕
              </button>
            </div>

            <div style={{ padding: '1.5rem', maxHeight: '75vh', overflowY: 'auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${comparedProductsData.length}, 1fr)`, gap: '1.5rem' }}>
                {comparedProductsData.map((p) => (
                  <div key={p.id} style={{ background: 'var(--bg-secondary)', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', background: '#ffffff', borderRadius: '6px', padding: '0.5rem' }}>
                      <img src={p.img} alt={p.title} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                    </div>
                    <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)' }}>{p.id}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 700, marginBottom: '1rem' }}>{p.badge}</div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem' }}>
                      {p.specs.map((s, idx) => (
                        <div key={idx} style={{ borderBottom: '1px dashed rgba(0,0,0,0.08)', paddingBottom: '0.3rem' }}>
                          <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>{s.label}</div>
                          <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{s.val}</div>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        setShowCompareModal(false);
                        onNavigate('contact', p.id);
                      }}
                      className="btn btn-primary"
                      style={{ width: '100%', marginTop: '1.25rem', padding: '0.55rem', fontSize: '0.8rem' }}
                    >
                      Inquire {p.id} &rarr;
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: '1rem 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={() => setShowCompareModal(false)} className="btn btn-secondary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
                Close Matrix
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══ MODAL SPECIFICATIONS POPUP ═════════════════════════ */}
      {selectedProduct && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(10, 18, 32, 0.75)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1.5rem'
          }}
          onClick={() => setSelectedProduct(null)}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: 'var(--radius-md)',
              maxWidth: '650px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              border: '1px solid var(--border-color)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ background: 'var(--bg-secondary)', padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span className="label-tag-enhanced" style={{ fontSize: '0.7rem' }}>{selectedProduct.badge}</span>
                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', fontWeight: 800, marginTop: '2px' }}>{selectedProduct.title} ({selectedProduct.id})</h3>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--text-muted)' }}
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '1.5rem', maxHeight: '75vh', overflowY: 'auto' }}>
              <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '180px', height: '160px', background: 'radial-gradient(circle, #ffffff, #f1f5f9)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', border: '1px solid var(--border-color)' }}>
                  <img src={selectedProduct.img} alt={selectedProduct.title} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                </div>
                <div style={{ flex: 1.5, minWidth: '240px' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>Overview</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.55', marginBottom: '1rem' }}>{selectedProduct.desc}</p>
                </div>
              </div>

              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>Technical Parameters</h4>
              <div style={{ background: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-color)', padding: '0.75rem 1rem', marginBottom: '1.5rem' }}>
                {selectedProduct.specs.map((s, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', fontSize: '0.82rem', borderBottom: idx === selectedProduct.specs.length - 1 ? 'none' : '1px dashed rgba(0,0,0,0.1)' }}>
                    <span style={{ color: 'var(--text-muted)' }}>{s.label}</span>
                    <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{s.val}</span>
                  </div>
                ))}
              </div>

              {selectedProduct.fullSpecs && (
                <>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>Extended SOP Construction</h4>
                  <div style={{ background: '#f8fafc', borderRadius: '8px', border: '1px solid var(--border-color)', padding: '0.75rem 1rem' }}>
                    {Object.entries(selectedProduct.fullSpecs).map(([key, val], idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', fontSize: '0.82rem', borderBottom: '1px dashed rgba(0,0,0,0.08)' }}>
                        <span style={{ color: 'var(--text-muted)', textTransform: 'capitalize' }}>{key}</span>
                        <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{val}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div style={{ padding: '1rem 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button onClick={() => setSelectedProduct(null)} className="btn btn-secondary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>
                Close
              </button>
              <button
                onClick={() => {
                  const pId = selectedProduct.id;
                  setSelectedProduct(null);
                  onNavigate('contact', pId);
                }}
                className="btn btn-primary"
                style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}
              >
                Inquire Model ({selectedProduct.id}) &nbsp;&rarr;
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
