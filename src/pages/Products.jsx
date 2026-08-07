import React, { useState } from 'react';
import { SlideInLeft, SlideInRight, ScaleUp, FadeUp } from '../components/MotionWrapper';
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
    <div style={{ paddingTop: '100px', background: '#ffffff', minHeight: '100vh' }}>

      {/* ══ HERO SECTION ══════════════════════════════════════ */}
      <section style={{ padding: '0.5rem 0 3.5rem 0', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1d4ed8', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                SPINDLE PRODUCT CATALOG
              </div>
              <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', lineHeight: '1.18', margin: '0 0 1.25rem 0', letterSpacing: '-0.02em' }}>
                Precision Engineered <span style={{ color: '#1d4ed8' }}>Spindle Units</span>
              </h1>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.65', margin: '0 0 2rem 0', maxWidth: '600px' }}>
                Explore our line of high-speed motorized integrated, mechanical belt-driven, gear transmission, and high-frequency grinding spindle units — custom manufactured and rebuilt to sub-micron standards.
              </p>

              {/* 3 Metric Badges Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
                <div>
                  <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1d4ed8', display: 'block', lineHeight: 1 }}>60,000 RPM</span>
                  <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700, display: 'block', marginTop: '4px' }}>Max Velocity</span>
                </div>
                <div>
                  <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1d4ed8', display: 'block', lineHeight: 1 }}>&lt; 0.0005mm</span>
                  <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700, display: 'block', marginTop: '4px' }}>Sub-Micron TIR</span>
                </div>
                <div>
                  <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1d4ed8', display: 'block', lineHeight: 1 }}>12 Months</span>
                  <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700, display: 'block', marginTop: '4px' }}>Full Warranty</span>
                </div>
              </div>
            </div>

            {/* Right Card Panel — Signature Royal Blue Brand Container */}
            <div style={{ background: '#1d4ed8', borderRadius: '24px', padding: '2.5rem', color: '#ffffff', boxShadow: '0 20px 50px -10px rgba(29, 78, 216, 0.35)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#93c5fd', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                CUSTOM SPINDLE MANUFACTURING
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.75rem' }}>
                <div>
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff', display: 'block', lineHeight: 1 }}>HSK / BT</span>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', display: 'block', marginTop: '6px', fontWeight: 600 }}>Supported Interfaces</span>
                </div>
                <div>
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff', display: 'block', lineHeight: 1 }}>1,200 Nm</span>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', display: 'block', marginTop: '6px', fontWeight: 600 }}>Max Torque Output</span>
                </div>
                <div>
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff', display: 'block', lineHeight: 1 }}>ISO G0.4</span>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', display: 'block', marginTop: '6px', fontWeight: 600 }}>Dynamic Balancing</span>
                </div>
                <div>
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff', display: 'block', lineHeight: 1 }}>100%</span>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', display: 'block', marginTop: '6px', fontWeight: 600 }}>SOP Cleanroom Tested</span>
                </div>
              </div>
              <button
                onClick={() => onNavigate('contact')}
                style={{
                  width: '100%',
                  marginTop: '2rem',
                  background: '#ffffff',
                  color: '#1d4ed8',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '0.85rem 1.5rem',
                  fontWeight: 900,
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.15)'
                }}
              >
                <span>REQUEST CUSTOM SPINDLE QUOTE</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CATALOG CONTROLS & FILTER ══════════════════════════ */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            {/* Category Filter Pills */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setFilter(cat.key)}
                  style={{
                    padding: '0.65rem 1.3rem',
                    borderRadius: '12px',
                    border: filter === cat.key ? '2px solid #1d4ed8' : '1px solid #cbd5e1',
                    background: filter === cat.key ? '#1d4ed8' : '#ffffff',
                    color: filter === cat.key ? '#ffffff' : '#334155',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: filter === cat.key ? '0 4px 14px rgba(29,78,216,0.3)' : '0 2px 6px rgba(15,23,42,0.04)'
                  }}
                >
                  <span>{cat.label}</span>
                  <span style={{ background: filter === cat.key ? 'rgba(255,255,255,0.25)' : '#f1f5f9', color: filter === cat.key ? '#ffffff' : '#64748b', padding: '2px 7px', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 800 }}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search Input & View Switcher */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative', minWidth: '240px' }}>
                <input
                  type="text"
                  placeholder="Search model (e.g. GPS-M12)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 1rem 0.65rem 2.4rem',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    outline: 'none',
                    background: '#ffffff'
                  }}
                />
                <svg width="16" height="16" fill="none" stroke="#64748b" viewBox="0 0 24 24" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Grid vs Matrix Toggle */}
              <div style={{ display: 'flex', background: '#f1f5f9', padding: '3px', borderRadius: '10px', border: '1px solid #cbd5e1' }}>
                <button
                  onClick={() => setViewMode('grid')}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                    background: viewMode === 'grid' ? '#ffffff' : 'transparent',
                    color: viewMode === 'grid' ? '#1d4ed8' : '#64748b',
                    fontWeight: 800,
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    boxShadow: viewMode === 'grid' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none'
                  }}
                >
                  Grid Cards
                </button>
                <button
                  onClick={() => setViewMode('matrix')}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                    background: viewMode === 'matrix' ? '#ffffff' : 'transparent',
                    color: viewMode === 'matrix' ? '#1d4ed8' : '#64748b',
                    fontWeight: 800,
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    boxShadow: viewMode === 'matrix' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none'
                  }}
                >
                  Spec Matrix
                </button>
              </div>
            </div>
          </div>

          {/* ══ GRID CARDS VIEW ══════════════════════════════════ */}
          {viewMode === 'grid' && (
            filteredProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '4rem 2rem', background: '#ffffff', borderRadius: '16px', border: '1px solid #cbd5e1' }}>
                <h3 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>No Spindle Models Found</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Try selecting another category filter or search keyword.</p>
                <button onClick={() => { setFilter('all'); setSearchQuery(''); }} style={{ marginTop: '1rem', background: '#1d4ed8', color: '#ffffff', border: 'none', padding: '0.6rem 1.4rem', borderRadius: '8px', fontWeight: 800, cursor: 'pointer' }}>
                  Reset Filters
                </button>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                {filteredProducts.map((product, idx) => {
                  const isCompared = compareList.includes(product.id);
                  return (
                    <ScaleUp key={product.id} delay={idx * 0.1}>
                      <div style={{ background: '#ffffff', borderRadius: '20px', border: '1px solid #cbd5e1', overflow: 'hidden', boxShadow: '0 8px 24px rgba(15,23,42,0.06)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                          {/* Image Viewport */}
                          <div style={{ background: '#f8fafc', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', position: 'relative', borderBottom: '1px solid #e2e8f0' }}>
                            <img src={product.img} alt={product.title} style={{ width: '100%', height: '100%', maxHeight: '190px', objectFit: 'contain', filter: 'drop-shadow(0 10px 24px rgba(15,23,42,0.12))' }} />
                            <div style={{ position: 'absolute', top: '16px', left: '16px', background: '#1d4ed8', color: '#ffffff', padding: '4px 10px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase' }}>
                              {product.badge}
                            </div>
                            <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(15,23,42,0.85)', color: '#ffffff', padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 900 }}>
                              {product.id}
                            </div>
                          </div>

                          {/* Info Body */}
                          <div style={{ padding: '1.75rem' }}>
                            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', lineHeight: '1.3', marginBottom: '0.65rem' }}>{product.title}</h3>
                            <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>{product.desc}</p>

                            {/* Specs Grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', borderTop: '1px solid #e2e8f0', paddingTop: '1rem', marginBottom: '1.25rem' }}>
                              {product.specs.map((spec, sIdx) => (
                                <div key={sIdx}>
                                  <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700, display: 'block', textTransform: 'uppercase' }}>{spec.label}</span>
                                  <span style={{ fontSize: '0.88rem', color: '#1d4ed8', fontWeight: 800, display: 'block', marginTop: '2px' }}>{spec.val}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Card Actions Footer */}
                        <div style={{ padding: '0 1.75rem 1.75rem 1.75rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <label style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#334155', cursor: 'pointer', fontWeight: 700 }}>
                              <input
                                type="checkbox"
                                checked={isCompared}
                                onChange={() => toggleCompare(product.id)}
                                style={{ cursor: 'pointer', accentColor: '#1d4ed8' }}
                              />
                              Compare Specs
                            </label>
                            <span style={{ fontSize: '0.72rem', color: '#16a34a', fontWeight: 900 }}>✓ SOP TESTED</span>
                          </div>

                          <div style={{ display: 'flex', gap: '10px' }}>
                            <button
                              onClick={() => onNavigate('contact', product.id)}
                              style={{ flex: 1.2, background: '#1d4ed8', color: '#ffffff', border: 'none', borderRadius: '10px', padding: '0.75rem', fontWeight: 800, fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                            >
                              <span>INQUIRE MODEL</span>
                              <span>&rarr;</span>
                            </button>
                            <button
                              onClick={() => setSelectedProduct(product)}
                              style={{ flex: 0.8, background: '#f1f5f9', color: '#0f172a', border: '1px solid #cbd5e1', borderRadius: '10px', padding: '0.75rem', fontWeight: 800, fontSize: '0.85rem', cursor: 'pointer' }}
                            >
                              FULL SPECS
                            </button>
                          </div>
                        </div>
                      </div>
                    </ScaleUp>
                  );
                })}
              </div>
            )
          )}

          {/* ══ MATRIX TABLE VIEW ════════════════════════════════ */}
          {viewMode === 'matrix' && (
            <div style={{ borderRadius: '20px', border: '1px solid #cbd5e1', overflow: 'hidden', boxShadow: '0 12px 30px rgba(15,23,42,0.06)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '80px 140px 1.5fr 1fr 1fr 1fr 1.2fr', background: '#1d4ed8', color: '#ffffff', padding: '1.25rem 1.5rem', fontWeight: 800, fontSize: '0.85rem' }}>
                <div>COMPARE</div>
                <div>MODEL ID</div>
                <div>SPINDLE ARCHITECTURE</div>
                <div>MAX SPEED</div>
                <div>TOOL INTERFACE</div>
                <div>POWER / TORQUE</div>
                <div>ACTIONS</div>
              </div>

              {filteredProducts.map((product, idx) => {
                const maxSpeed = product.specs.find(s => s.label.includes('Speed'))?.val || '—';
                const toolIf = product.specs.find(s => s.label.includes('Tool'))?.val || '—';
                const powerOrTorque = product.specs.find(s => s.label.includes('Power') || s.label.includes('Torque'))?.val || '—';
                const isCompared = compareList.includes(product.id);

                return (
                  <div
                    key={product.id}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '80px 140px 1.5fr 1fr 1fr 1fr 1.2fr',
                      padding: '1.25rem 1.5rem',
                      alignItems: 'center',
                      background: idx % 2 === 0 ? '#ffffff' : '#f8fafc',
                      borderBottom: idx === filteredProducts.length - 1 ? 'none' : '1px solid #e2e8f0',
                      fontSize: '0.9rem',
                      fontWeight: 600
                    }}
                  >
                    <div>
                      <input
                        type="checkbox"
                        checked={isCompared}
                        onChange={() => toggleCompare(product.id)}
                        style={{ cursor: 'pointer', accentColor: '#1d4ed8' }}
                      />
                    </div>
                    <div style={{ fontWeight: 900, color: '#1d4ed8' }}>{product.id}</div>
                    <div>
                      <div style={{ fontWeight: 800, color: '#0f172a' }}>{product.title}</div>
                      <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700 }}>{product.badge}</span>
                    </div>
                    <div style={{ fontWeight: 800, color: '#0f172a' }}>{maxSpeed}</div>
                    <div style={{ color: '#334155' }}>{toolIf}</div>
                    <div style={{ fontWeight: 800, color: '#1d4ed8' }}>{powerOrTorque}</div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button
                        onClick={() => setSelectedProduct(product)}
                        style={{ background: '#f1f5f9', color: '#0f172a', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '0.45rem 0.75rem', fontSize: '0.78rem', fontWeight: 800, cursor: 'pointer' }}
                      >
                        SPECS
                      </button>
                      <button
                        onClick={() => onNavigate('contact', product.id)}
                        style={{ background: '#1d4ed8', color: '#ffffff', border: 'none', borderRadius: '8px', padding: '0.45rem 0.85rem', fontSize: '0.78rem', fontWeight: 800, cursor: 'pointer' }}
                      >
                        INQUIRE &rarr;
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ══ ENGINEERING SELECTION GUIDE ══════════════════════ */}
      <section style={{ padding: '5rem 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="machin-2col-header">
            <SlideInLeft>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1d4ed8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                SELECTION GUIDE
              </span>
            </SlideInLeft>
            <SlideInRight>
              <h2 style={{ fontSize: '2.35rem', fontWeight: 700, color: '#0f172a', lineHeight: '1.25', margin: 0, letterSpacing: '-0.02em', borderBottom: 'none', paddingBottom: 0 }}>
                Integrated Motorized <span style={{ color: '#1d4ed8' }}>vs. Belt-Driven Architecture</span>
              </h2>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: '1.6', marginTop: '0.75rem' }}>
                Choosing the right spindle architecture is critical for balancing torque, maximum RPM, thermal stability, and maintenance overhead.
              </p>
            </SlideInRight>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {/* Card 1: Motorized */}
            <ScaleUp delay={0.1}>
              <div style={{ background: '#ffffff', borderRadius: '20px', border: '1px solid #cbd5e1', padding: '2.5rem', boxShadow: '0 8px 24px rgba(15,23,42,0.06)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#1d4ed8', background: 'rgba(29, 78, 216, 0.08)', padding: '4px 10px', borderRadius: '6px', textTransform: 'uppercase' }}>
                      HIGH-VELOCITY FINISHING
                    </span>
                    <span style={{ fontSize: '0.82rem', fontWeight: 900, color: '#1d4ed8' }}>UP TO 100,000 RPM</span>
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.85rem' }}>
                    Integrated Motorized Configurations
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                    Integrated motorized configurations seat the rotor directly on the spindle shaft. This layout isolates belt side-load deflection, permits higher angular velocities up to 100,000 RPM, and is ideal for high-speed finishing operations with liquid cooling.
                  </p>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid #e2e8f0', paddingTop: '1.25rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#334155', fontSize: '0.88rem', fontWeight: 600, marginBottom: '8px' }}>
                    <span style={{ color: '#16a34a', fontWeight: 900 }}>✓</span>
                    <span>Zero belt side-load deflection for sub-micron surface finish</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#334155', fontSize: '0.88rem', fontWeight: 600, marginBottom: '8px' }}>
                    <span style={{ color: '#16a34a', fontWeight: 900 }}>✓</span>
                    <span>Closed-loop liquid stator jacket prevents thermal expansion</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#334155', fontSize: '0.88rem', fontWeight: 600 }}>
                    <span style={{ color: '#16a34a', fontWeight: 900 }}>✓</span>
                    <span>High-speed vector encoder for rigid tapping &amp; orientation</span>
                  </li>
                </ul>
              </div>
            </ScaleUp>

            {/* Card 2: Belt-Driven */}
            <ScaleUp delay={0.2}>
              <div style={{ background: '#ffffff', borderRadius: '20px', border: '1px solid #cbd5e1', padding: '2.5rem', boxShadow: '0 8px 24px rgba(15,23,42,0.06)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#1d4ed8', background: 'rgba(29, 78, 216, 0.08)', padding: '4px 10px', borderRadius: '6px', textTransform: 'uppercase' }}>
                      HEAVY TORQUE MILLING
                    </span>
                    <span style={{ fontSize: '0.82rem', fontWeight: 900, color: '#1d4ed8' }}>UP TO 1,200 NM TORQUE</span>
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.85rem' }}>
                    Belt-Driven Mechanical Configurations
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                    Belt-driven designs transfer mechanical power from an external motor via coupled pulleys. This design is highly service-accessible and delivers cost-effective, high-torque output under heavy material removal limits.
                  </p>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid #e2e8f0', paddingTop: '1.25rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#334155', fontSize: '0.88rem', fontWeight: 600, marginBottom: '8px' }}>
                    <span style={{ color: '#16a34a', fontWeight: 900 }}>✓</span>
                    <span>Exceptional low-RPM torque for heavy metal cutting</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#334155', fontSize: '0.88rem', fontWeight: 600, marginBottom: '8px' }}>
                    <span style={{ color: '#16a34a', fontWeight: 900 }}>✓</span>
                    <span>Simple motor replacement without breaking cleanroom seal</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#334155', fontSize: '0.88rem', fontWeight: 600 }}>
                    <span style={{ color: '#16a34a', fontWeight: 900 }}>✓</span>
                    <span>Economical rebuild &amp; maintenance cost structure</span>
                  </li>
                </ul>
              </div>
            </ScaleUp>
          </div>
        </div>
      </section>

      {/* ══ FLOATING COMPARE TRAY ══════════════════════════════ */}
      {compareList.length > 0 && (
        <div style={{ position: 'fixed', bottom: '24px', left: '50%', transform: 'translateX(-50%)', background: '#0f172a', color: '#ffffff', padding: '0.75rem 1.5rem', borderRadius: '99px', boxShadow: '0 16px 40px rgba(15,23,42,0.4)', display: 'flex', alignItems: 'center', gap: '1.5rem', zIndex: 900, border: '1px solid rgba(255,255,255,0.2)' }}>
          <div style={{ fontSize: '0.88rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ background: '#1d4ed8', color: '#ffffff', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.8rem' }}>{compareList.length}</span>
            <span>Models Selected for Side-by-Side Comparison</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <button
              onClick={() => setShowCompareModal(true)}
              style={{ background: '#1d4ed8', color: '#ffffff', border: 'none', borderRadius: '99px', padding: '0.5rem 1.25rem', fontWeight: 800, fontSize: '0.82rem', cursor: 'pointer' }}
            >
              Compare Matrix &rarr;
            </button>
            <button
              onClick={() => setCompareList([])}
              style={{ background: 'none', border: 'none', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', fontSize: '0.8rem' }}
            >
              Clear
            </button>
          </div>
        </div>
      )}

      {/* ══ COMPARE MODAL ═════════════════════════════════════ */}
      {showCompareModal && (
        <div
          style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,0.8)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1.5rem' }}
          onClick={() => setShowCompareModal(false)}
        >
          <div
            style={{ background: '#ffffff', borderRadius: '24px', maxWidth: '900px', width: '100%', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.3)', border: '1px solid #cbd5e1' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ background: '#1d4ed8', padding: '1.25rem 1.75rem', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#93c5fd', textTransform: 'uppercase' }}>SIDE-BY-SIDE MATRIX</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '2px 0 0 0' }}>Technical Model Comparison</h3>
              </div>
              <button onClick={() => setShowCompareModal(false)} style={{ background: 'none', border: 'none', color: '#ffffff', fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>
            </div>

            <div style={{ padding: '1.75rem', maxHeight: '70vh', overflowY: 'auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${comparedProductsData.length}, 1fr)`, gap: '1.5rem' }}>
                {comparedProductsData.map((p) => (
                  <div key={p.id} style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '16px', border: '1px solid #cbd5e1' }}>
                    <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', background: '#ffffff', borderRadius: '12px', padding: '0.5rem' }}>
                      <img src={p.img} alt={p.title} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                    </div>
                    <div style={{ fontWeight: 900, fontSize: '1.1rem', color: '#1d4ed8' }}>{p.id}</div>
                    <div style={{ fontSize: '0.8rem', color: '#0f172a', fontWeight: 700, marginBottom: '1rem' }}>{p.badge}</div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.82rem' }}>
                      {p.specs.map((s, idx) => (
                        <div key={idx} style={{ borderBottom: '1px dashed #cbd5e1', paddingBottom: '0.3rem' }}>
                          <div style={{ color: '#64748b', fontSize: '0.72rem', textTransform: 'uppercase' }}>{s.label}</div>
                          <div style={{ fontWeight: 700, color: '#0f172a' }}>{s.val}</div>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => { setShowCompareModal(false); onNavigate('contact', p.id); }}
                      style={{ width: '100%', marginTop: '1.25rem', background: '#1d4ed8', color: '#ffffff', border: 'none', borderRadius: '8px', padding: '0.6rem', fontWeight: 800, fontSize: '0.82rem', cursor: 'pointer' }}
                    >
                      Inquire {p.id} &rarr;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══ FULL SPECS MODAL ═══════════════════════════════════ */}
      {selectedProduct && (
        <div
          style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,0.8)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1.5rem' }}
          onClick={() => setSelectedProduct(null)}
        >
          <div
            style={{ background: '#ffffff', borderRadius: '24px', maxWidth: '650px', width: '100%', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.3)', border: '1px solid #cbd5e1' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ background: '#1d4ed8', padding: '1.25rem 1.75rem', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#93c5fd', textTransform: 'uppercase' }}>{selectedProduct.badge}</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '2px 0 0 0' }}>{selectedProduct.title} ({selectedProduct.id})</h3>
              </div>
              <button onClick={() => setSelectedProduct(null)} style={{ background: 'none', border: 'none', color: '#ffffff', fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>
            </div>

            <div style={{ padding: '1.75rem', maxHeight: '70vh', overflowY: 'auto' }}>
              <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '180px', height: '160px', background: '#f8fafc', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', border: '1px solid #cbd5e1' }}>
                  <img src={selectedProduct.img} alt={selectedProduct.title} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                </div>
                <div style={{ flex: 1.5, minWidth: '240px' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem' }}>Overview</h4>
                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: '1.6', margin: 0 }}>{selectedProduct.desc}</p>
                </div>
              </div>

              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.6rem' }}>Technical Parameters</h4>
              <div style={{ background: '#f8fafc', borderRadius: '12px', border: '1px solid #cbd5e1', padding: '0.75rem 1rem', marginBottom: '1.5rem' }}>
                {selectedProduct.specs.map((s, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.45rem 0', fontSize: '0.85rem', borderBottom: idx === selectedProduct.specs.length - 1 ? 'none' : '1px dashed #cbd5e1' }}>
                    <span style={{ color: '#64748b', fontWeight: 600 }}>{s.label}</span>
                    <span style={{ fontWeight: 800, color: '#1d4ed8' }}>{s.val}</span>
                  </div>
                ))}
              </div>

              {selectedProduct.fullSpecs && (
                <>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.6rem' }}>Extended Construction Specs</h4>
                  <div style={{ background: '#f8fafc', borderRadius: '12px', border: '1px solid #cbd5e1', padding: '0.75rem 1rem' }}>
                    {Object.entries(selectedProduct.fullSpecs).map(([key, val], idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.45rem 0', fontSize: '0.85rem', borderBottom: '1px dashed #cbd5e1' }}>
                        <span style={{ color: '#64748b', textTransform: 'capitalize', fontWeight: 600 }}>{key}</span>
                        <span style={{ fontWeight: 700, color: '#0f172a' }}>{val}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div style={{ padding: '1rem 1.75rem', background: '#f8fafc', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button onClick={() => setSelectedProduct(null)} style={{ background: '#ffffff', color: '#0f172a', border: '1px solid #cbd5e1', padding: '0.65rem 1.25rem', borderRadius: '10px', fontWeight: 800, fontSize: '0.85rem', cursor: 'pointer' }}>
                Close
              </button>
              <button
                onClick={() => {
                  const pId = selectedProduct.id;
                  setSelectedProduct(null);
                  onNavigate('contact', pId);
                }}
                style={{ background: '#1d4ed8', color: '#ffffff', border: 'none', padding: '0.65rem 1.5rem', borderRadius: '10px', fontWeight: 800, fontSize: '0.85rem', cursor: 'pointer' }}
              >
                Inquire Model ({selectedProduct.id}) &nbsp;&rarr;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══ HIGH-IMPACT PROMO BANNER ══════════════════════════ */}
      <PromoBannerCard onNavigate={onNavigate} />

    </div>
  );
}
