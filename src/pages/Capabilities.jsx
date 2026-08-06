import React, { useState, useMemo } from 'react';
import { SlideInLeft, SlideInRight, ScaleUp, FadeUp } from '../components/MotionWrapper';
import PromoBannerCard from '../components/PromoBannerCard';

export default function Capabilities({ onNavigate }) {
  // --- STATE MANAGEMENT ---
  const [activeFacilityTab, setActiveFacilityTab] = useState('grinding');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  // Capability Estimator Widget State
  const [estimatorApp, setEstimatorApp] = useState('milling');
  const [estimatorRpm, setEstimatorRpm] = useState(45000);
  const [estimatorRunout, setEstimatorRunout] = useState('submicron');

  // QC Stepper Active Step
  const [activeQcStep, setActiveQcStep] = useState(0);

  // --- DATA SOURCES ---
  const keyStats = [
    {
      value: '< 0.0005 mm',
      label: 'Taper Grinding Tolerance',
      icon: (
        <svg width="22" height="22" fill="none" stroke="#1d4ed8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      value: 'ISO Class 7',
      label: 'HEPA Cleanroom Assembly',
      icon: (
        <svg width="22" height="22" fill="none" stroke="#1d4ed8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.12a2 2 0 00-1.165.235l-1.39.77a2 2 0 00-.77 2.39l.77 1.39a2 2 0 001.165.856l2.387.477a6 6 0 003.86-.517l.318-.158a6 6 0 013.86-.517l2.387.477a2 2 0 001.165-.235l1.39-.77a2 2 0 00.77-2.39l-.77-1.39z" />
        </svg>
      )
    },
    {
      value: '100,000 RPM',
      label: 'Dynamic Balancing (ISO G0.4)',
      icon: (
        <svg width="22" height="22" fill="none" stroke="#1d4ed8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      value: '25.0 kN',
      label: 'Drawbar Retention Capacity',
      icon: (
        <svg width="22" height="22" fill="none" stroke="#1d4ed8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  const facilityZones = {
    grinding: {
      title: 'CNC Cylindrical & Taper Grinding Cell',
      tag: 'Sub-Micron Precision',
      image: '/images/cylindrical_grinding.png',
      description: 'Equipped with Studer CNC multi-wheelhead cylindrical grinders housed inside a climate-controlled inspection bay. We restore spindle tapers, bearing journals, and housing bores to sub-0.0005 mm roundness.',
      specs: [
        { label: 'Max Grinding Diameter', val: 'ø 350 mm (13.7 in)' },
        { label: 'Grinding Length Capacity', val: 'Up to 1,000 mm' },
        { label: 'Roundness Accuracy', val: '< 0.0005 mm (0.5 µm)' },
        { label: 'Surface Finish Rating', val: 'Ra 0.05 µm (Mirror Finish)' }
      ],
      bullets: [
        'Automatic optical laser in-process gauging system',
        'Multi-angle grinding heads for complex internal & external tapers',
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
      image: '/images/balancing.png',
      description: 'Operating at rotational speeds up to 100,000 RPM, our Schenck dynamic balancing center corrects residual rotor imbalance down to ISO G0.4 standards, extending bearing life.',
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
    diagnostics: {
      title: 'Sub-Micron Metrology & Run-In Testing Bench',
      tag: 'Certified Digital Quality',
      image: '/images/diagnostic_testing.png',
      description: 'Every repaired or custom-built spindle undergoes an automated 24-hour run-in procedure. Real-time telemetry monitors drawbar force, temperature stabilization, and shaft dynamic displacement.',
      specs: [
        { label: 'Drawbar Force Range', val: 'Up to 25.0 kN Digital' },
        { label: 'Thermal Sensor Tracking', val: '8-Channel Infrared Matrix' },
        { label: 'Dynamic Runout Meter', val: '< 0.0008 mm TIR at Max Speed' },
        { label: 'Run-In Protocol', val: 'Automated 24-Hour Ramp Log' }
      ],
      bullets: [
        'Full digital QR traceability certificate generated per spindle',
        'High-frequency accelerometer spectrum diagnostic report',
        'Automated encoder & feedback signal protocol verification'
      ]
    }
  };

  const allSpecs = [
    { id: 'spec-1', category: 'grinding', asset: 'Taper & Journal CNC Grinding', rating: '< 0.0005 mm Roundness', equip: 'Studer CNC Cylindrical Grinder', details: 'Dual wheelhead configuration with in-process laser sizing control.' },
    { id: 'spec-2', category: 'balancing', asset: 'Dynamic Balancing Range', rating: 'Up to 100,000 RPM (ISO G0.4)', equip: 'Schenck High-Speed Balancer', details: 'Micro-gram mass correction via dual-plane laser phase alignment.' },
    { id: 'spec-3', category: 'cleanroom', asset: 'Cleanroom Assembly Class', rating: 'Positive Pressure Class 10,000 (ISO 7)', equip: 'HEPA Positive Filtration System', details: 'Laminar flow workstations with positive climate pressure control.' },
    { id: 'spec-4', category: 'diagnostic', asset: 'Drawbar Retention Force Range', rating: 'Up to 25.0 kN retention force', equip: 'Digital Pull-Force Calibrator Bench', details: 'Automated strain-gauge force transducer with digital telemetry.' },
    { id: 'spec-5', category: 'diagnostic', asset: 'Motor Rewinding Capacity', rating: '0.5 kW to 75 kW synchronous', equip: 'Vacuum-Pressure Impregnation (VPI) Line', details: 'Class H thermal insulation winding with surge reflection testing.' },
    { id: 'spec-6', category: 'grinding', asset: 'Temperature Regulation', rating: '68°F ± 0.5°F (20°C ± 0.3°C)', equip: 'Climate-Regulated Inspection Cell', details: 'Continuous HVAC thermal monitoring prevents metal expansion variance.' },
    { id: 'spec-7', category: 'diagnostic', asset: 'Vibration Analysis FFT', rating: '0.001 mm/s Peak Resolution', equip: 'Emerson 4-Channel Spectrum Analyzer', details: 'High-frequency spectrum tracking up to 50 kHz sampling bandwidth.' },
    { id: 'spec-8', category: 'grinding', asset: 'Internal Bore Grinding', rating: 'ø 10 mm to ø 250 mm Bore ID', equip: 'Hydrostatic Internal Grinder', details: 'High-speed HF grinding quills reaching 90,000 RPM internal wheel speeds.' },
    { id: 'spec-9', category: 'cleanroom', asset: 'Bearing Preload Calibration', rating: '0.01 kN Preload Resolution', equip: 'Digital Pneumatic Load Cell Bench', details: 'Precision axial load verification ensuring zero bearing skidding.' }
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

  const estimatorResult = useMemo(() => {
    let cell = 'Sub-Micron Grinding & Cleanroom Cell';
    let balancing = 'ISO G0.4 (Ultra-Precision)';
    let cleanroom = 'ISO Class 7 (Class 10,000)';
    let runout = '< 0.0005 mm TIR';
    let warranty = '12 Months OEM-Equivalent';

    if (estimatorRpm > 60000 || estimatorRunout === 'submicron') {
      cell = 'Ultra High-Speed Aerospace Diagnostic Bay';
      balancing = 'ISO G0.4 (Zero-Resonance Laser)';
      runout = '< 0.0003 mm TIR (Sub-Micron)';
    } else if (estimatorApp === 'heavy') {
      cell = 'Heavy Duty Milling & Torque Testing Bench';
      balancing = 'ISO G1.0 Heavy Duty Standard';
      runout = '< 0.0010 mm TIR';
    }

    return { cell, balancing, cleanroom, runout, warranty };
  }, [estimatorApp, estimatorRpm, estimatorRunout]);

  const qcSteps = [
    {
      num: 1,
      title: 'Digital Intake Metrology',
      desc: '3D Laser scan & dynamic runout baseline logging upon arrival.',
      checkpoints: [
        'Complete disassembly geometry recording',
        'Taper runout & housing bore CMM verification',
        'Drawbar pull-force baseline measurement'
      ],
      img: '/images/diagnostic_testing.png'
    },
    {
      num: 2,
      title: 'CNC Sub-Micron Grinding',
      desc: 'Precision taper re-grinding down to sub-0.0005 mm roundness.',
      checkpoints: [
        'Climate-controlled grinding cell (68°F ± 0.5°F)',
        'In-process laser sizing control',
        'Super-finish Ra 0.05 µm optical taper restoration'
      ],
      img: '/images/cylindrical_grinding.png'
    },
    {
      num: 3,
      title: 'ISO 7 Cleanroom Assembly',
      desc: 'Particle-free super-precision ceramic & steel bearing preloading.',
      checkpoints: [
        'HEPA 99.99% positive pressure cleanroom',
        'Automated micro-volume grease metering (<0.01g)',
        'Load-cell axial bearing preload setting'
      ],
      img: '/images/clean_room.png'
    },
    {
      num: 4,
      title: 'High-Speed Dynamic Balancing',
      desc: 'Schenck dual-plane vector balancing up to 100k RPM.',
      checkpoints: [
        'Residual imbalance reduced to ISO G0.4',
        'Laser optical phase & speed tracking',
        'Vibration FFT frequency analysis'
      ],
      img: '/images/balancing.png'
    },
    {
      num: 5,
      title: '24-Hr Digital Certification',
      desc: 'Full speed thermal ramp-up & digital QR telemetry report.',
      checkpoints: [
        '24-Hour continuous automated run-in',
        'Thermal growth & 8-channel temperature tracking',
        '12-Month OEM warranty digital QR badge issuing'
      ],
      img: '/images/upgrade-bg-adobe-13.png'
    }
  ];

  return (
    <div style={{ paddingTop: '100px', background: '#ffffff', minHeight: '100vh' }}>

      {/* ══ HERO SECTION ══════════════════════════════════════ */}
      <section style={{ padding: '0.5rem 0 3.5rem 0', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
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
                General Precision Spindles maintains a dedicated Pune facility configured for sub-micron CNC grinding, ISO Class 7 cleanroom assembly, and 100,000 RPM dynamic balancing.
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
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff', display: 'block', lineHeight: 1 }}>25.0 kN</span>
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
          <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '3rem', alignItems: 'start', marginBottom: '3.5rem' }}>
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
              { id: 'diagnostics', label: '04. Diagnostic Bench' },
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
          <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '3rem', alignItems: 'start', marginBottom: '3.5rem' }}>
            <SlideInLeft>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1d4ed8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                CERTIFIED EQUIPMENT SHEETS
              </span>
            </SlideInLeft>
            <SlideInRight>
              <h2 style={{ fontSize: '2.35rem', fontWeight: 700, color: '#0f172a', lineHeight: '1.25', margin: 0, letterSpacing: '-0.02em', borderBottom: 'none', paddingBottom: 0 }}>
                Equipment &amp; Asset <span style={{ color: '#1d4ed8' }}>Specification Matrix</span>
              </h2>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: '1.6', marginTop: '0.75rem' }}>
                Search and filter our verified metrology tools, CNC grinders, cleanroom systems, and diagnostic calibrators.
              </p>
            </SlideInRight>
          </div>

          {/* Matrix Controls Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            {/* Search Input */}
            <div style={{ position: 'relative', flexGrow: 1, maxWidth: '420px' }}>
              <input
                type="text"
                placeholder="Search equipment, capacity, asset name..."
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
                { id: 'grinding', label: 'Grinding & CNC' },
                { id: 'balancing', label: 'Balancing' },
                { id: 'cleanroom', label: 'Cleanroom' },
                { id: 'diagnostic', label: 'Diagnostic' },
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

          {/* Asset Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {filteredSpecs.map((item) => (
              <ScaleUp key={item.id}>
                <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #cbd5e1', padding: '1.75rem 1.5rem', boxShadow: '0 4px 16px rgba(15,23,42,0.04)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#1d4ed8', background: 'rgba(29, 78, 216, 0.08)', padding: '3px 8px', borderRadius: '6px', textTransform: 'uppercase', marginBottom: '0.85rem', display: 'inline-block' }}>
                      {item.category}
                    </span>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem', lineHeight: '1.3' }}>{item.asset}</h4>
                    <div style={{ fontSize: '0.95rem', fontWeight: 900, color: '#1d4ed8', marginBottom: '0.85rem' }}>{item.rating}</div>
                  </div>

                  <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '0.85rem' }}>
                    <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700, display: 'block' }}>{item.equip}</span>
                    <p style={{ fontSize: '0.82rem', color: '#475569', marginTop: '4px', margin: 0, lineHeight: '1.5' }}>{item.details}</p>
                  </div>
                </div>
              </ScaleUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. SPINDLE CAPABILITY MATCHER CALCULATOR WIDGET ══ */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '3rem', alignItems: 'start', marginBottom: '3.5rem' }}>
            <SlideInLeft>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1d4ed8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                SPINDLE CAPABILITY MATCHER
              </span>
            </SlideInLeft>
            <SlideInRight>
              <h2 style={{ fontSize: '2.35rem', fontWeight: 700, color: '#0f172a', lineHeight: '1.25', margin: 0, letterSpacing: '-0.02em', borderBottom: 'none', paddingBottom: 0 }}>
                Dynamic Process <span style={{ color: '#1d4ed8' }}>Tolerance Calculator</span>
              </h2>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: '1.6', marginTop: '0.75rem' }}>
                Select your operational parameters below to calculate guaranteed facility tolerances and diagnostic protocols.
              </p>
            </SlideInRight>
          </div>

          <div style={{ background: '#ffffff', borderRadius: '24px', border: '1px solid #cbd5e1', padding: '3rem', boxShadow: '0 12px 36px rgba(15,23,42,0.06)', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', alignItems: 'center' }}>
            {/* Left Inputs */}
            <div>
              <div style={{ marginBottom: '1.75rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a', display: 'block', marginBottom: '0.5rem' }}>1. Spindle Application Type</label>
                <select
                  value={estimatorApp}
                  onChange={(e) => setEstimatorApp(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.9rem', fontWeight: 700, color: '#1e293b' }}
                >
                  <option value="milling">High-Speed CNC Milling &amp; Machining</option>
                  <option value="grinding">Sub-Micron CNC Cylindrical / Internal Grinding</option>
                  <option value="heavy">Heavy-Duty Lathe &amp; Turning Spindle</option>
                  <option value="pcb">PCB &amp; Micro-Drilling High Frequency</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a' }}>2. Max Operating Speed (RPM)</label>
                  <span style={{ fontSize: '0.9rem', fontWeight: 900, color: '#1d4ed8' }}>{estimatorRpm.toLocaleString()} RPM</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="5000"
                  value={estimatorRpm}
                  onChange={(e) => setEstimatorRpm(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#1d4ed8' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a', display: 'block', marginBottom: '0.5rem' }}>3. Required Dynamic Runout Tolerance</label>
                <select
                  value={estimatorRunout}
                  onChange={(e) => setEstimatorRunout(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.9rem', fontWeight: 700, color: '#1e293b' }}
                >
                  <option value="submicron">Sub-Micron (&lt; 0.5 µm / 0.0005 mm TIR)</option>
                  <option value="standard">Standard Precision (&lt; 1.5 µm TIR)</option>
                  <option value="heavy">Industrial Heavy Duty (&lt; 3.0 µm TIR)</option>
                </select>
              </div>
            </div>

            {/* Right Output Result Box — Royal Blue */}
            <div style={{ background: '#1d4ed8', borderRadius: '20px', padding: '2.5rem', color: '#ffffff', boxShadow: '0 16px 40px rgba(29, 78, 216, 0.3)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#93c5fd', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                CERTIFIED CAPABILITY MATCH
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <span style={{ fontSize: '0.74rem', color: '#93c5fd', fontWeight: 700, display: 'block' }}>Designated Facility Cell</span>
                  <span style={{ fontSize: '1.15rem', fontWeight: 900, color: '#ffffff', display: 'block', marginTop: '2px' }}>{estimatorResult.cell}</span>
                </div>
                <div>
                  <span style={{ fontSize: '0.74rem', color: '#93c5fd', fontWeight: 700, display: 'block' }}>Balancing Grade Standard</span>
                  <span style={{ fontSize: '1.15rem', fontWeight: 900, color: '#ffffff', display: 'block', marginTop: '2px' }}>{estimatorResult.balancing}</span>
                </div>
                <div>
                  <span style={{ fontSize: '0.74rem', color: '#93c5fd', fontWeight: 700, display: 'block' }}>Guaranteed Dynamic Runout</span>
                  <span style={{ fontSize: '1.15rem', fontWeight: 900, color: '#ffffff', display: 'block', marginTop: '2px' }}>{estimatorResult.runout}</span>
                </div>
              </div>

              <div style={{ marginTop: '1.75rem', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '1.25rem', fontSize: '0.85rem', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#16a34a', fontWeight: 900 }}>✓</span>
                <span>Includes {estimatorResult.warranty} &amp; QR Digital Logbook</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 4. TRACEABILITY WORKFLOW STEPPER ══════════════════ */}
      <section style={{ padding: '5rem 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '3rem', alignItems: 'start', marginBottom: '3.5rem' }}>
            <SlideInLeft>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1d4ed8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                TRACEABILITY WORKFLOW
              </span>
            </SlideInLeft>
            <SlideInRight>
              <h2 style={{ fontSize: '2.35rem', fontWeight: 700, color: '#0f172a', lineHeight: '1.25', margin: 0, letterSpacing: '-0.02em', borderBottom: 'none', paddingBottom: 0 }}>
                Sub-Micron <span style={{ color: '#1d4ed8' }}>Traceability Workflow</span>
              </h2>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: '1.6', marginTop: '0.75rem' }}>
                Every spindle rebuild and manufacturing project is governed by strict ISO 9001:2015 process controls across 5 verification stages.
              </p>
            </SlideInRight>
          </div>

          {/* Stepper Buttons */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            {qcSteps.map((step, idx) => (
              <button
                key={step.num}
                onClick={() => setActiveQcStep(idx)}
                style={{
                  padding: '0.75rem 1.25rem',
                  borderRadius: '12px',
                  border: activeQcStep === idx ? '2px solid #1d4ed8' : '1px solid #cbd5e1',
                  background: activeQcStep === idx ? '#1d4ed8' : '#ffffff',
                  color: activeQcStep === idx ? '#ffffff' : '#1e293b',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                {step.num}. {step.title}
              </button>
            ))}
          </div>

          {/* Stepper Active Card */}
          {qcSteps[activeQcStep] && (
            <ScaleUp key={activeQcStep}>
              <div style={{ background: '#ffffff', borderRadius: '24px', border: '1px solid #cbd5e1', overflow: 'hidden', padding: '2.5rem', boxShadow: '0 12px 36px rgba(15,23,42,0.06)', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#1d4ed8', background: 'rgba(29, 78, 216, 0.08)', padding: '4px 10px', borderRadius: '6px', display: 'inline-block', marginBottom: '1rem' }}>
                    STAGE 0{qcSteps[activeQcStep].num}
                  </span>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem', lineHeight: '1.3' }}>
                    {qcSteps[activeQcStep].title}
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: '1.65', marginBottom: '1.75rem' }}>
                    {qcSteps[activeQcStep].desc}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid #e2e8f0', paddingTop: '1.25rem' }}>
                    {qcSteps[activeQcStep].checkpoints.map((cp, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#334155', fontSize: '0.9rem', fontWeight: 700, marginBottom: '8px' }}>
                        <span style={{ color: '#1d4ed8', fontWeight: 900 }}>✓</span>
                        <span>{cp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ background: '#f8fafc', borderRadius: '16px', overflow: 'hidden', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '320px' }}>
                  <img src={qcSteps[activeQcStep].img} alt={qcSteps[activeQcStep].title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                </div>
              </div>
            </ScaleUp>
          )}
        </div>
      </section>

      {/* ══ HIGH-IMPACT PROMO BANNER ══════════════════════════ */}
      <PromoBannerCard onNavigate={onNavigate} />

    </div>
  );
}
