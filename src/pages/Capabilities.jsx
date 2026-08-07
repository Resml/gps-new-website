import React, { useState, useMemo } from 'react';
import { SlideInLeft, SlideInRight, ScaleUp, FadeUp } from '../components/MotionWrapper';
import PromoBannerCard from '../components/PromoBannerCard';

export default function Capabilities({ onNavigate }) {
  // --- STATE MANAGEMENT ---
  const [activeFacilityTab, setActiveFacilityTab] = useState('grinding');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');

  // --- DATA SOURCES ---
  const facilityZones = {
    grinding: {
      title: 'CNC Cylindrical & Taper Grinding Cell',
      tag: 'Sub-Micron Precision',
      image: '/images/cylindrical_grinding.png',
      description: 'Equipped with Studer CNC multi-wheelhead cylindrical grinders housed inside a climate-controlled inspection bay (68°F ± 0.5°F). We restore spindle tapers, bearing journals, and housing bores to sub-0.0005 mm roundness.',
      specs: [
        { label: 'Max Grinding Diameter', val: 'ø 350 mm (13.7 in)' },
        { label: 'Grinding Length Capacity', val: 'Up to 1,000 mm' },
        { label: 'Roundness Accuracy', val: '< 0.0005 mm (0.5 µm)' },
        { label: 'Surface Finish Rating', val: 'Ra 0.05 µm (Mirror Finish)' }
      ],
      bullets: [
        'Automatic optical laser in-process gauging system',
        'Multi-angle grinding heads for HSK, BT, CAT & ISO tapers',
        'Sub-micron hydrostatic wheel spindle positioning'
      ]
    },
    cleanroom: {
      title: 'ISO Class 7 (Class 10,000) Assembly Cleanroom',
      tag: 'Zero-Contamination Zone',
      image: '/images/clean_room.png',
      description: 'Super-precision ceramic hybrid and steel bearing preloading requires an environment free of airborne particles. Our positive-pressure cleanroom features 99.99% HEPA filtration and climate stabilization.',
      specs: [
        { label: 'Air Cleanliness Class', val: 'ISO Class 7 (Class 10,000)' },
        { label: 'Filtration Efficiency', val: '99.99% @ 0.3 µm HEPA' },
        { label: 'Preload Gauge System', val: 'Digital Load-Cell Preload Bench' },
        { label: 'Assembly Capacity', val: 'Over 1,200 Spindles / Year' }
      ],
      bullets: [
        'Electrostatic discharge (ESD) protected anti-static flooring',
        'Automated precision grease metering (< 0.01g volume control)',
        'Optical bearing contact angle metrology cell'
      ]
    },
    balancing: {
      title: 'High-Speed Schenck Dynamic Balancing Cell',
      tag: 'Ultra-Low Vibration (ISO G0.4)',
      image: '/images/dynamic_balancing_card.png',
      description: 'Operating at rotational speeds up to 100,000 RPM, our Schenck dynamic balancing center corrects residual rotor imbalance down to ISO G0.4 standards, extending bearing life and eliminating thermal resonance.',
      specs: [
        { label: 'Max Rotational Speed', val: '100,000 RPM' },
        { label: 'Balancing Grade Standard', val: 'ISO 1940-1 Grade G0.4' },
        { label: 'Weight Capacity Range', val: '0.1 kg to 250 kg' },
        { label: 'Vibration Resolution', val: '< 0.001 mm/s Peak' }
      ],
      bullets: [
        'Dual-plane dynamic vector balancing software',
        'Real-time FFT vibration spectrum & phase tracking',
        'Non-contact laser encoder pulse synchronization'
      ]
    },
    electrical: {
      title: 'Electrical Rewinding & Encoder Tuning Lab',
      tag: 'VPI Class H Epoxy Rewind',
      image: '/images/vpi_electrical_card.png',
      description: 'In-house motor winding facility capable of rewinding synchronous and asynchronous motorized spindles from 0.5 kW to 120 kW. Includes Vacuum Pressure Impregnation (VPI) and encoder alignment.',
      specs: [
        { label: 'Motor Power Capacity', val: '0.5 kW to 120 kW' },
        { label: 'Insulation Class Rating', val: 'Class H (180°C Thermal)' },
        { label: 'Encoders Synchronized', val: 'Heidenhain, Fanuc, Lenord+Bauer' },
        { label: 'Surge Test Voltage', val: 'Up to 5.0 kV Digital Test' }
      ],
      bullets: [
        'Vacuum-Pressure Impregnation (VPI) epoxy resin curing oven',
        'Oscilloscope phase-matching for tool change orientation',
        'Thermal thermistor (KTY/PTC) sensor calibration'
      ]
    }
  };

  const allSpecs = [
    { id: 'spec-1', category: 'tapers', asset: 'HSK & BT Taper CNC Precision Grinding', rating: '< 0.0005 mm Roundness', equip: 'Studer S31 CNC Cylindrical Grinder', details: 'Dual wheelhead configuration for HSK-A/E/F, BT30/40/50, and CAT tapers with laser sizing.', image: '/images/tool_tapers_card.png' },
    { id: 'spec-2', category: 'balancing', asset: 'Dynamic Vector Balancing Cell', rating: 'Up to 100,000 RPM (ISO G0.4)', equip: 'Schenck CAB 920 High-Speed Balancer', details: 'Micro-gram mass correction via dual-plane laser phase alignment.', image: '/images/dynamic_balancing_card.png' },
    { id: 'spec-3', category: 'cleanroom', asset: 'Cleanroom Assembly Environment', rating: 'Positive Pressure ISO Class 7', equip: 'HEPA 99.99% Positive Air Filtration', details: 'Laminar flow workstations with anti-static ESD flooring and temperature control.', image: '/images/upgrade-bg-adobe-14.png' },
    { id: 'spec-4', category: 'metrology', asset: 'Drawbar Retention Pull-Force Testing', rating: 'Up to 30.0 kN Force Meter', equip: 'Digital Load-Cell Retention Tester', details: 'Automated strain-gauge force transducer verifying gripper collet clamping.', image: '/images/drawbar_retention_card.png' },
    { id: 'spec-5', category: 'electrical', asset: 'VPI Motor Stator Rewinding', rating: '0.5 kW to 120 kW Capacity', equip: 'Vacuum-Pressure Impregnation Line', details: 'Class H thermal insulation winding with high-voltage surge reflection testing.', image: '/images/vpi_electrical_card.png' },
    { id: 'spec-6', category: 'encoders', asset: 'Encoder & Sensor Phase Alignment', rating: '0.01° Phase Resolution', equip: 'Digital Oscilloscope & Phase Bench', details: 'Precise zero-point synchronization for Heidenhain ERM, Fanuc coders, and Lenord+Bauer.', image: '/images/encoder_sensor_card.png' },
    { id: 'spec-7', category: 'metrology', asset: 'FFT Vibration Spectrum Analyzer', rating: '0.001 mm/s Peak Resolution', equip: 'Emerson 4-Channel FFT Analyzer', details: 'High-frequency spectrum tracking up to 50 kHz sampling bandwidth for bearing resonance.', image: '/images/sensor.png' },
    { id: 'spec-8', category: 'tapers', asset: 'Internal Bore Hydrostatic Grinding', rating: 'ø 10 mm to ø 250 mm Bore ID', equip: 'Hydrostatic High-Speed Internal Grinder', details: 'High-speed HF grinding quills reaching 90,000 RPM internal wheel speeds.', image: '/images/taper_shaft.png' },
    { id: 'spec-9', category: 'cleanroom', asset: 'Bearing Preload Pneumatic Calibration', rating: '0.01 kN Preload Resolution', equip: 'Digital Load Cell Preload Bench', details: 'Precision axial load verification ensuring zero bearing skidding and maximum rigidity.', image: '/images/upgrade-bg-adobe-13.png' }
  ];

  const filteredSpecs = useMemo(() => {
    return allSpecs.filter((item) => {
      const matchesCategory = activeCategoryFilter === 'all' || item.category === activeCategoryFilter;
      const q = searchQuery.toLowerCase();
      const matchesSearch = !searchQuery ||
        item.asset.toLowerCase().includes(q) ||
        item.rating.toLowerCase().includes(q) ||
        item.equip.toLowerCase().includes(q) ||
        item.details.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategoryFilter]);

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* ══ 1. CAPABILITIES HERO ════════════════════════════════ */}
      <section style={{ padding: '4rem 0 3.5rem 0', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1d4ed8', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                ISO 9001:2015 CERTIFIED FACILITY
              </div>
              <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', lineHeight: '1.18', margin: '0 0 1.25rem 0', letterSpacing: '-0.02em' }}>
                Technical Capabilities <span style={{ color: '#1d4ed8' }}>&amp; Metrology Assets</span>
              </h1>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.65', margin: '0 0 2rem 0', maxWidth: '600px' }}>
                General Precision Spindles maintains a dedicated Pune facility configured for sub-micron CNC grinding, ISO Class 7 cleanroom assembly, electrical VPI motor rewinding, and 100,000 RPM dynamic balancing.
              </p>

              {/* 3 Metric Badges Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
                <div>
                  <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1d4ed8', display: 'block', lineHeight: 1 }}>&lt; 0.0005mm</span>
                  <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700, display: 'block', marginTop: '4px' }}>Taper Roundness</span>
                </div>
                <div>
                  <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1d4ed8', display: 'block', lineHeight: 1 }}>ISO Class 7</span>
                  <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700, display: 'block', marginTop: '4px' }}>HEPA Cleanroom</span>
                </div>
                <div>
                  <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1d4ed8', display: 'block', lineHeight: 1 }}>100k RPM</span>
                  <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700, display: 'block', marginTop: '4px' }}>Dynamic Balancing</span>
                </div>
              </div>
            </div>

            {/* Right Card Panel — Signature Royal Blue Brand Container */}
            <div style={{ background: '#1d4ed8', borderRadius: '24px', padding: '2.5rem', color: '#ffffff', boxShadow: '0 20px 50px -10px rgba(29, 78, 216, 0.35)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#93c5fd', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                FACILITY METROLOGY SUMMARY
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.75rem' }}>
                <div>
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff', display: 'block', lineHeight: 1 }}>Ra 0.05 µm</span>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', display: 'block', marginTop: '6px', fontWeight: 600 }}>Optical Surface Finish</span>
                </div>
                <div>
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff', display: 'block', lineHeight: 1 }}>30.0 kN</span>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', display: 'block', marginTop: '6px', fontWeight: 600 }}>Drawbar Force Capacity</span>
                </div>
                <div>
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff', display: 'block', lineHeight: 1 }}>ISO G0.4</span>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', display: 'block', marginTop: '6px', fontWeight: 600 }}>Balancing Standard</span>
                </div>
                <div>
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff', display: 'block', lineHeight: 1 }}>100%</span>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', display: 'block', marginTop: '6px', fontWeight: 600 }}>Digital QR Logged</span>
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
                <span>BOOK METROLOGY AUDIT</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 1. INTERACTIVE FACILITY INFRASTRUCTURE SHOWCASE ══ */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="machin-2col-header">
            <SlideInLeft>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1d4ed8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                ENGINEERING FACILITIES
              </span>
            </SlideInLeft>
            <SlideInRight>
              <h2 style={{ fontSize: '2.35rem', fontWeight: 700, color: '#0f172a', lineHeight: '1.25', margin: 0, letterSpacing: '-0.02em', borderBottom: 'none', paddingBottom: 0 }}>
                Explore Our <span style={{ color: '#1d4ed8' }}>Precision Infrastructure</span>
              </h2>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: '1.6', marginTop: '0.75rem' }}>
                Select a specialized engineering cell below to inspect machine specifications, environmental controls, and sub-micron calibration capacities.
              </p>
            </SlideInRight>
          </div>

          {/* Facility Tab Buttons */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            {[
              { id: 'grinding', label: '01. Grinding & Machining' },
              { id: 'cleanroom', label: '02. Class 10,000 Cleanroom' },
              { id: 'balancing', label: '03. Dynamic Balancing' },
              { id: 'electrical', label: '04. Electrical & VPI Rewinding' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFacilityTab(tab.id)}
                style={{
                  padding: '0.75rem 1.4rem',
                  borderRadius: '12px',
                  border: activeFacilityTab === tab.id ? '2px solid #1d4ed8' : '1px solid #cbd5e1',
                  background: activeFacilityTab === tab.id ? '#1d4ed8' : '#ffffff',
                  color: activeFacilityTab === tab.id ? '#ffffff' : '#1e293b',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: activeFacilityTab === tab.id ? '0 4px 14px rgba(29,78,216,0.3)' : '0 2px 6px rgba(15,23,42,0.04)'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Facility Showcase Display Card */}
          {facilityZones[activeFacilityTab] && (
            <ScaleUp key={activeFacilityTab}>
              <div style={{ background: '#ffffff', borderRadius: '24px', border: '1px solid #cbd5e1', overflow: 'hidden', boxShadow: '0 12px 36px rgba(15,23,42,0.08)', display: 'grid', gridTemplateColumns: '1.1fr 1fr' }}>
                {/* Photo Left */}
                <div style={{ position: 'relative', background: '#f8fafc', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', minHeight: '380px' }}>
                  <img
                    src={facilityZones[activeFacilityTab].image}
                    alt={facilityZones[activeFacilityTab].title}
                    style={{ width: '100%', height: '100%', maxHeight: '360px', objectFit: 'cover', borderRadius: '16px', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', top: '24px', left: '24px', background: 'rgba(15,23,42,0.88)', backdropFilter: 'blur(8px)', color: '#ffffff', padding: '6px 14px', borderRadius: '10px', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', border: '1px solid rgba(255,255,255,0.2)' }}>
                    ✓ {facilityZones[activeFacilityTab].tag}
                  </div>
                </div>

                {/* Specs Right */}
                <div style={{ padding: '2.5rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', lineHeight: '1.3', marginBottom: '1rem' }}>
                      {facilityZones[activeFacilityTab].title}
                    </h3>
                    <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.65', marginBottom: '1.75rem' }}>
                      {facilityZones[activeFacilityTab].description}
                    </p>

                    {/* Specs Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
                      {facilityZones[activeFacilityTab].specs.map((sp, i) => (
                        <div key={i}>
                          <span style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 700, display: 'block', textTransform: 'uppercase' }}>{sp.label}</span>
                          <span style={{ fontSize: '0.95rem', color: '#1d4ed8', fontWeight: 800, display: 'block', marginTop: '2px' }}>{sp.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid #e2e8f0', paddingTop: '1.25rem' }}>
                    {facilityZones[activeFacilityTab].bullets.map((b, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#334155', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px' }}>
                        <span style={{ color: '#16a34a', fontWeight: 900 }}>✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScaleUp>
          )}
        </div>
      </section>

      {/* ══ 2. CERTIFIED EQUIPMENT SPECIFICATION MATRIX ═══════ */}
      <section style={{ padding: '5rem 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="machin-2col-header">
            <SlideInLeft>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1d4ed8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                TECHNICAL COMPATIBILITY
              </span>
            </SlideInLeft>
            <SlideInRight>
              <h2 style={{ fontSize: '2.35rem', fontWeight: 700, color: '#0f172a', lineHeight: '1.25', margin: 0, letterSpacing: '-0.02em', borderBottom: 'none', paddingBottom: 0 }}>
                Equipment &amp; Asset <span style={{ color: '#1d4ed8' }}>Specification Matrix</span>
              </h2>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: '1.6', marginTop: '0.75rem' }}>
                Search and filter our verified metrology tools, CNC grinders, cleanroom systems, encoders, and motor rewinding capacities.
              </p>
            </SlideInRight>
          </div>

          {/* Matrix Controls Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            {/* Search Input */}
            <div style={{ position: 'relative', flexGrow: 1, maxWidth: '420px' }}>
              <input
                type="text"
                placeholder="Search tapers, encoders, balancing..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 2.5rem',
                  borderRadius: '12px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  outline: 'none',
                  background: '#ffffff'
                }}
              />
              <svg width="18" height="18" fill="none" stroke="#64748b" viewBox="0 0 24 24" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: `All Assets (${allSpecs.length})` },
                { id: 'tapers', label: 'Tool Tapers' },
                { id: 'balancing', label: 'Balancing' },
                { id: 'cleanroom', label: 'Cleanroom' },
                { id: 'electrical', label: 'Electrical' },
                { id: 'encoders', label: 'Encoders' },
                { id: 'metrology', label: 'Metrology' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryFilter(cat.id)}
                  style={{
                    padding: '0.55rem 1.1rem',
                    borderRadius: '10px',
                    border: activeCategoryFilter === cat.id ? '2px solid #1d4ed8' : '1px solid #cbd5e1',
                    background: activeCategoryFilter === cat.id ? '#1d4ed8' : '#ffffff',
                    color: activeCategoryFilter === cat.id ? '#ffffff' : '#334155',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    cursor: 'pointer'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Asset Grid — 2-Column Split Cards matching Services.jsx Retrofitting Section */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {filteredSpecs.map((item, idx) => (
              <ScaleUp key={item.id} delay={idx * 0.1}>
                <div style={{ background: '#ffffff', borderRadius: '20px', border: '1px solid #cbd5e1', overflow: 'hidden', display: 'grid', gridTemplateColumns: item.image ? '1.1fr 1fr' : '1fr', height: '100%', boxShadow: '0 8px 24px rgba(15,23,42,0.06)' }}>
                  {/* Left Specs Panel */}
                  <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#1d4ed8', background: 'rgba(29, 78, 216, 0.08)', padding: '4px 10px', borderRadius: '6px', display: 'inline-block', marginBottom: '1rem', textTransform: 'uppercase' }}>
                        {item.rating}
                      </span>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', lineHeight: '1.3', marginBottom: '0.85rem' }}>
                        {item.asset}
                      </h3>
                      <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}>
                        {item.details}
                      </p>
                    </div>

                    <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '0.85rem', marginTop: '1.5rem' }}>
                      <span style={{ fontSize: '0.74rem', color: '#1d4ed8', fontWeight: 800, display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>MACHINE / EQUIPMENT:</span>
                      <span style={{ fontSize: '0.88rem', color: '#0f172a', fontWeight: 700, display: 'block', marginTop: '2px' }}>{item.equip}</span>
                    </div>
                  </div>

                  {/* Right 3D Object Image Panel */}
                  {item.image && (
                    <div style={{ background: '#f8fafc', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.75rem', borderLeft: '1px solid #e2e8f0' }}>
                      <img
                        src={item.image}
                        alt={item.asset}
                        style={{
                          width: '100%',
                          height: '100%',
                          maxHeight: '280px',
                          transform: 'scale(1.15)',
                          objectFit: 'contain',
                          display: 'block',
                          filter: 'drop-shadow(0 12px 28px rgba(15,23,42,0.14))'
                        }}
                      />
                    </div>
                  )}
                </div>
              </ScaleUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. QUALITY & METROLOGY STANDARDS GRID ════════════ */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="machin-2col-header">
            <SlideInLeft>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1d4ed8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                QUALITY GUARANTEE
              </span>
            </SlideInLeft>
            <SlideInRight>
              <h2 style={{ fontSize: '2.35rem', fontWeight: 700, color: '#0f172a', lineHeight: '1.25', margin: 0, letterSpacing: '-0.02em', borderBottom: 'none', paddingBottom: 0 }}>
                Certified Metrology &amp; <span style={{ color: '#1d4ed8' }}>Quality Standards</span>
              </h2>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: '1.6', marginTop: '0.75rem' }}>
                Every rebuilt and custom manufactured spindle operates under rigorous ISO quality systems and digital telemetry logging.
              </p>
            </SlideInRight>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            <ScaleUp delay={0.1}>
              <div style={{ background: '#ffffff', borderRadius: '20px', border: '1px solid #cbd5e1', padding: '2rem', boxShadow: '0 8px 24px rgba(15,23,42,0.06)', height: '100%' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(29,78,216,0.1)', color: '#1d4ed8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>ISO 9001:2015 Certification</h4>
                <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}>
                  Our complete manufacturing and rebuild lifecycle operates under certified quality management protocols, ensuring repeatable sub-micron precision.
                </p>
              </div>
            </ScaleUp>

            <ScaleUp delay={0.2}>
              <div style={{ background: '#ffffff', borderRadius: '20px', border: '1px solid #cbd5e1', padding: '2rem', boxShadow: '0 8px 24px rgba(15,23,42,0.06)', height: '100%' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(29,78,216,0.1)', color: '#1d4ed8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>12-Month OEM Warranty</h4>
                <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}>
                  We back every spindle with a full 12-month operational warranty, providing OEM-equivalent protection and dynamic run-in reports.
                </p>
              </div>
            </ScaleUp>

            <ScaleUp delay={0.3}>
              <div style={{ background: '#ffffff', borderRadius: '20px', border: '1px solid #cbd5e1', padding: '2rem', boxShadow: '0 8px 24px rgba(15,23,42,0.06)', height: '100%' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(29,78,216,0.1)', color: '#1d4ed8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>Digital QR Tracking Certificate</h4>
                <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}>
                  Every spindle carries a laser-etched QR code linking directly to bearing preloads, drawbar retention force logs, and balancing datasheets.
                </p>
              </div>
            </ScaleUp>
          </div>
        </div>
      </section>

      {/* ══ HIGH-IMPACT PROMO BANNER ══════════════════════════ */}
      <PromoBannerCard onNavigate={onNavigate} />

    </div>
  );
}
