import React, { useState, useMemo } from 'react';

export default function Capabilities({ onNavigate }) {
  // --- STATE MANAGEMENT ---
  // Facility Showcase Active Tab
  const [activeFacilityTab, setActiveFacilityTab] = useState('grinding');

  // Spec Matrix Controls
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'

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
        <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      value: 'Class 10,000',
      label: 'ISO 7 HEPA Cleanroom',
      icon: (
        <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.12a2 2 0 00-1.165.235l-1.39.77a2 2 0 00-.77 2.39l.77 1.39a2 2 0 001.165.856l2.387.477a6 6 0 003.86-.517l.318-.158a6 6 0 013.86-.517l2.387.477a2 2 0 001.165-.235l1.39-.77a2 2 0 00.77-2.39l-.77-1.39z" />
        </svg>
      )
    },
    {
      value: '100,000 RPM',
      label: 'Dynamic Balancing (ISO G0.4)',
      icon: (
        <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      value: '25.0 kN',
      label: 'Drawbar Retention Capacity',
      icon: (
        <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      description: 'Equipped with Studer S31 CNC multi-wheelhead cylindrical grinders housed inside a climate-controlled inspection bay maintaining 68°F ± 0.5°F. We restore spindle tapers, bearing journals, and housing bores to sub-0.0005 mm roundness.',
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
      description: 'Super-precision ceramic hybrid and steel bearing preloading requires an environment free of airborne particles. Our positive-pressure cleanroom features 99.99% HEPA filtration, laminar airflow hoods, and climate stabilization.',
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
      description: 'Operating at rotational speeds up to 100,000 RPM, our Schenck CAB 920 dynamic balancing center corrects residual rotor imbalance down to ISO G0.4 standards, extending bearing life and eliminating thermal vibration resonance.',
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
      description: 'Every repaired or custom-built spindle undergoes an automated 24-hour run-in procedure. Real-time telemetry monitors drawbar force, temperature stabilization, acoustic spectrum, and shaft dynamic displacement.',
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
    { id: 'spec-1', category: 'grinding', asset: 'Taper & Journal CNC Grinding', rating: '< 0.0005 mm Roundness', equip: 'Studer S31 CNC Cylindrical Grinder', details: 'Dual wheelhead configuration with in-process laser sizing control.' },
    { id: 'spec-2', category: 'balancing', asset: 'Dynamic Balancing Range', rating: 'Up to 100,000 RPM (ISO G0.4)', equip: 'Schenck CAB 920 High-Speed Balancer', details: 'Micro-gram mass correction via dual-plane laser phase alignment.' },
    { id: 'spec-3', category: 'cleanroom', asset: 'Cleanroom Assembly Class', rating: 'Positive Pressure Class 10,000 (ISO 7)', equip: 'HEPA Positive Filtration System', details: 'Laminar flow workstations with positive climate pressure control.' },
    { id: 'spec-4', category: 'diagnostic', asset: 'Drawbar Retention Force Range', rating: 'Up to 25.0 kN retention force', equip: 'Digital Pull-Force Calibrator Bench', details: 'Automated strain-gauge force transducer with digital telemetry.' },
    { id: 'spec-5', category: 'diagnostic', asset: 'Motor Rewinding Capacity', rating: '0.5 kW to 75 kW synchronous', equip: 'Vacuum-Pressure Impregnation (VPI) Line', details: 'Class H thermal insulation winding with surge reflection testing.' },
    { id: 'spec-6', category: 'grinding', asset: 'Temperature Regulation', rating: '68°F ± 0.5°F (20°C ± 0.3°C)', equip: 'Climate-Regulated Inspection Cell', details: 'Continuous HVAC thermal monitoring prevents metal expansion variance.' },
    { id: 'spec-7', category: 'diagnostic', asset: 'Vibration Analysis FFT', rating: '0.001 mm/s Peak Resolution', equip: 'Emerson CSI 2140 4-Channel Analyzer', details: 'High-frequency spectrum tracking up to 50 kHz sampling bandwidth.' },
    { id: 'spec-8', category: 'grinding', asset: 'Internal Bore Grinding', rating: 'ø 10 mm to ø 250 mm Bore ID', equip: 'Heald / Vox Hydrostatic Internal Grinder', details: 'High-speed HF grinding quills reaching 90,000 RPM internal wheel speeds.' },
    { id: 'spec-9', category: 'cleanroom', asset: 'Bearing Preload Calibration', rating: '0.01 kN Preload Resolution', equip: 'Digital Pneumatic Load Cell Bench', details: 'Precision axial load verification ensuring zero bearing skidding.' }
  ];

  // Filtered Equipment List
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

  // Capability Estimator Calculation Logic
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

  // Quality Lifecycle Steps
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
      desc: 'Schenck CAB 920 dual-plane vector balancing up to 100k RPM.',
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
      img: '/images/workshop_real.png'
    }
  ];

  return (
    <div className="page-fade-enter-active">
      {/* Sub Hero Section */}
      <section className="sub-hero">
        <div className="container sub-hero-content">
          <div className="breadcrumbs">
            <span>Home</span>
            <span>/</span>
            <span className="current">Capabilities</span>
          </div>
          
          <div className="label-tag-enhanced" style={{ marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            <span className="dot"></span>
            ISO 9001:2015 CERTIFIED PRECISION FACILITY
          </div>

          <h1 style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: '0.75rem' }}>
            Technical Capabilities &amp; Metrology Assets
          </h1>
          <p style={{ maxWidth: '680px', fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
            General Precision Spindles maintains a 45,000 sq ft climate-regulated facility configured for sub-micron machining, ISO Class 7 cleanroom assembly, and 100,000 RPM dynamic balancing.
          </p>
        </div>
      </section>

      {/* Key Metric Highlights Strip */}
      <section className="cap-stats-bar">
        <div className="container">
          <div className="cap-stats-grid">
            {keyStats.map((stat, idx) => (
              <div className="cap-stat-pill" key={idx}>
                <div className="cap-stat-icon-wrapper">{stat.icon}</div>
                <div className="cap-stat-info">
                  <span className="cap-stat-val">{stat.value}</span>
                  <span className="cap-stat-lbl">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: Interactive Facility Infrastructure Showcase */}
      <section className="section container">
        <div className="section-header-enhanced">
          <div className="label-tag-wrapper">
            <span className="label-tag-enhanced">
              <span className="dot"></span>
              Engineering Facilities
            </span>
          </div>
          <h2 className="section-title-enhanced">
            Explore Our <span className="gradient-text">Precision Infrastructure</span>
          </h2>
          <div className="title-divider-enhanced"></div>
          <p className="section-desc-enhanced">
            Select a specialized engineering cell below to inspect machine specifications, environmental controls, and sub-micron calibration capacities.
          </p>
        </div>

        {/* Facility Tab Buttons */}
        <div className="facility-tabs-nav">
          <button
            className={`facility-tab-btn ${activeFacilityTab === 'grinding' ? 'active' : ''}`}
            onClick={() => setActiveFacilityTab('grinding')}
          >
            01. Grinding &amp; Machining
          </button>
          <button
            className={`facility-tab-btn ${activeFacilityTab === 'cleanroom' ? 'active' : ''}`}
            onClick={() => setActiveFacilityTab('cleanroom')}
          >
            02. Class 10,000 Cleanroom
          </button>
          <button
            className={`facility-tab-btn ${activeFacilityTab === 'balancing' ? 'active' : ''}`}
            onClick={() => setActiveFacilityTab('balancing')}
          >
            03. Dynamic Balancing
          </button>
          <button
            className={`facility-tab-btn ${activeFacilityTab === 'diagnostics' ? 'active' : ''}`}
            onClick={() => setActiveFacilityTab('diagnostics')}
          >
            04. Diagnostic Bench
          </button>
        </div>

        {/* Facility Showcase Display Card */}
        {facilityZones[activeFacilityTab] && (
          <div className="facility-showcase-card">
            <div className="facility-showcase-grid">
              <div className="facility-media-wrapper">
                <img
                  src={facilityZones[activeFacilityTab].image}
                  alt={facilityZones[activeFacilityTab].title}
                  className="facility-media-img"
                />
                <div className="facility-badge-overlay">
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {facilityZones[activeFacilityTab].tag}
                </div>
              </div>

              <div className="facility-details-content">
                <div className="facility-details-header">
                  <h3>{facilityZones[activeFacilityTab].title}</h3>
                  <p>{facilityZones[activeFacilityTab].description}</p>
                </div>

                <div className="facility-specs-grid">
                  {facilityZones[activeFacilityTab].specs.map((sp, i) => (
                    <div className="facility-spec-item" key={i}>
                      <span className="facility-spec-label">{sp.label}</span>
                      <span className="facility-spec-val">{sp.val}</span>
                    </div>
                  ))}
                </div>

                <ul className="facility-feature-bullets">
                  {facilityZones[activeFacilityTab].bullets.map((b, i) => (
                    <li key={i}>
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Section 2: Searchable & Filterable Equipment Specification Matrix */}
      <section className="section alt-bg">
        <div className="container">
          <div className="section-header-enhanced">
            <div className="label-tag-wrapper">
              <span className="label-tag-enhanced">
                <span className="dot"></span>
                Certified Equipment Sheets
              </span>
            </div>
            <h2 className="section-title-enhanced">
              Equipment &amp; Asset <span className="gradient-text">Specification Matrix</span>
            </h2>
            <div className="title-divider-enhanced"></div>
            <p className="section-desc-enhanced">
              Search and filter our verified metrology tools, CNC grinders, cleanroom systems, and diagnostic calibrators.
            </p>
          </div>

          {/* Matrix Controls Header */}
          <div className="matrix-controls-bar">
            {/* Live Search Input */}
            <div className="matrix-search-box">
              <svg className="matrix-search-icon" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                className="matrix-search-input"
                placeholder="Search by equipment, capacity, asset name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filter Pills */}
            <div className="matrix-cat-filters">
              <button
                className={`matrix-filter-btn ${activeCategoryFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategoryFilter('all')}
              >
                All Assets ({allSpecs.length})
              </button>
              <button
                className={`matrix-filter-btn ${activeCategoryFilter === 'grinding' ? 'active' : ''}`}
                onClick={() => setActiveCategoryFilter('grinding')}
              >
                Grinding &amp; CNC
              </button>
              <button
                className={`matrix-filter-btn ${activeCategoryFilter === 'balancing' ? 'active' : ''}`}
                onClick={() => setActiveCategoryFilter('balancing')}
              >
                Balancing
              </button>
              <button
                className={`matrix-filter-btn ${activeCategoryFilter === 'cleanroom' ? 'active' : ''}`}
                onClick={() => setActiveCategoryFilter('cleanroom')}
              >
                Cleanroom
              </button>
              <button
                className={`matrix-filter-btn ${activeCategoryFilter === 'diagnostic' ? 'active' : ''}`}
                onClick={() => setActiveCategoryFilter('diagnostic')}
              >
                Diagnostic
              </button>
            </div>

            {/* View Mode Switcher */}
            <div className="matrix-view-toggle">
              <button
                className={`matrix-view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                title="Grid Card View"
                onClick={() => setViewMode('grid')}
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                className={`matrix-view-btn ${viewMode === 'table' ? 'active' : ''}`}
                title="Table View"
                onClick={() => setViewMode('table')}
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Render Matrix in Selected View */}
          {filteredSpecs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem', background: '#ffffff', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
              <p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>No facility assets match your search criteria.</p>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="spec-cards-grid">
              {filteredSpecs.map((item) => (
                <div className="spec-asset-card" key={item.id}>
                  <div className="spec-card-top">
                    <span className="spec-card-cat-tag">{item.category}</span>
                    <h4 className="spec-card-title">{item.asset}</h4>
                    <div className="spec-card-rating-badge">
                      <div className="spec-card-rating-val">{item.rating}</div>
                      <div className="spec-card-rating-lbl">Technical Rating</div>
                    </div>
                  </div>

                  <div className="spec-card-meta">
                    <div className="spec-meta-row">
                      <span className="spec-meta-lbl">Machine System:</span>
                      <span className="spec-meta-val">{item.equip}</span>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: 0, lineHeight: '1.4' }}>
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ overflowX: 'auto', background: '#ffffff', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
              <table className="b2b-table">
                <thead>
                  <tr>
                    <th>Facility Asset</th>
                    <th>Category</th>
                    <th>Technical Rating / Capacity</th>
                    <th>Equipment System</th>
                    <th>Process Details</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSpecs.map((item) => (
                    <tr key={item.id}>
                      <td style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{item.asset}</td>
                      <td>
                        <span className="spec-card-cat-tag" style={{ marginBottom: 0 }}>{item.category}</span>
                      </td>
                      <td style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>{item.rating}</td>
                      <td style={{ color: 'var(--text-secondary)' }}>{item.equip}</td>
                      <td style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* Section 3: Interactive Capability Estimator Calculator Widget */}
      <section className="section container">
        <div className="estimator-wrapper">
          <div className="estimator-grid">
            <div className="estimator-inputs">
              <h3>Spindle Capability Matcher</h3>
              <p>
                Select your operational parameters to identify guaranteed facility tolerances, balancing standards, and diagnostic cleanroom protocols.
              </p>

              {/* Field 1: Application */}
              <div className="estimator-field-group">
                <label className="estimator-label">1. Spindle Application Type</label>
                <select
                  className="estimator-select"
                  value={estimatorApp}
                  onChange={(e) => setEstimatorApp(e.target.value)}
                >
                  <option value="milling">High-Speed CNC Milling &amp; Machining</option>
                  <option value="grinding">Sub-Micron CNC Cylindrical / Internal Grinding</option>
                  <option value="heavy">Heavy-Duty Lathe &amp; Turning Spindle</option>
                  <option value="pcb">PCB &amp; Micro-Drilling High Frequency</option>
                </select>
              </div>

              {/* Field 2: Target RPM Slider */}
              <div className="estimator-field-group">
                <div className="estimator-slider-wrapper">
                  <div className="estimator-slider-header">
                    <label className="estimator-label" style={{ marginBottom: 0 }}>2. Max Operating Speed (RPM)</label>
                    <span className="estimator-slider-val">{estimatorRpm.toLocaleString()} RPM</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="100000"
                    step="5000"
                    className="estimator-range-input"
                    value={estimatorRpm}
                    onChange={(e) => setEstimatorRpm(Number(e.target.value))}
                  />
                </div>
              </div>

              {/* Field 3: Required Runout */}
              <div className="estimator-field-group" style={{ marginBottom: 0 }}>
                <label className="estimator-label">3. Required Dynamic Runout Tolerance</label>
                <select
                  className="estimator-select"
                  value={estimatorRunout}
                  onChange={(e) => setEstimatorRunout(e.target.value)}
                >
                  <option value="submicron">Sub-Micron (&lt; 0.5 µm / 0.0005 mm TIR)</option>
                  <option value="standard">Standard Precision (&lt; 1.5 µm TIR)</option>
                  <option value="heavy">Industrial Heavy Duty (&lt; 3.0 µm TIR)</option>
                </select>
              </div>
            </div>

            {/* Calculated Result Output Card */}
            <div className="estimator-result-card">
              <div className="estimator-result-header">
                <div className="estimator-result-icon">
                  <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="estimator-result-title">Certified Capability Match</div>
              </div>

              <div className="estimator-result-specs">
                <div className="estimator-res-item">
                  <span className="estimator-res-lbl">Designated Facility Cell</span>
                  <span className="estimator-res-val">{estimatorResult.cell}</span>
                </div>
                <div className="estimator-res-item">
                  <span className="estimator-res-lbl">Balancing Grade Standard</span>
                  <span className="estimator-res-val">{estimatorResult.balancing}</span>
                </div>
                <div className="estimator-res-item">
                  <span className="estimator-res-lbl">Assembly Environment</span>
                  <span className="estimator-res-val">{estimatorResult.cleanroom}</span>
                </div>
                <div className="estimator-res-item">
                  <span className="estimator-res-lbl">Guaranteed Dynamic Runout</span>
                  <span className="estimator-res-val">{estimatorResult.runout}</span>
                </div>
              </div>

              <div className="estimator-guarantee-box">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Includes <strong>{estimatorResult.warranty}</strong> Full OEM System Warranty &amp; QR Digital Logbook</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Quality Control & Traceability Workflow Stepper */}
      <section className="section alt-bg">
        <div className="container">
          <div className="section-header-enhanced">
            <div className="label-tag-wrapper">
              <span className="label-tag-enhanced">
                <span className="dot"></span>
                Quality Management Lifecycle
              </span>
            </div>
            <h2 className="section-title-enhanced">
              Sub-Micron <span className="gradient-text">Traceability Workflow</span>
            </h2>
            <div className="title-divider-enhanced"></div>
            <p className="section-desc-enhanced">
              Every spindle rebuild and manufacturing project is governed by strict ISO 9001:2015 process controls across 5 verification stages.
            </p>
          </div>

          {/* Stepper Navigation */}
          <div className="qc-stepper-nav">
            {qcSteps.map((step, idx) => (
              <button
                key={step.num}
                className={`qc-step-btn ${activeQcStep === idx ? 'active' : ''}`}
                onClick={() => setActiveQcStep(idx)}
              >
                <div className="qc-step-num">{step.num}</div>
                <div className="qc-step-name">{step.title}</div>
              </button>
            ))}
          </div>

          {/* Active Step Details Panel */}
          {qcSteps[activeQcStep] && (
            <div className="qc-detail-panel">
              <div className="qc-detail-grid">
                <div className="qc-detail-info">
                  <h4>Stage 0{qcSteps[activeQcStep].num}: {qcSteps[activeQcStep].title}</h4>
                  <p>{qcSteps[activeQcStep].desc}</p>
                  
                  <ul className="qc-checkpoints-list">
                    {qcSteps[activeQcStep].checkpoints.map((cp, i) => (
                      <li key={i}>
                        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {cp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="qc-media-box">
                  <img src={qcSteps[activeQcStep].img} alt={qcSteps[activeQcStep].title} />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Section 5: ISO Quality Cards */}
      <section className="section container">
        <div className="iso-cards-grid">
          <div className="iso-card">
            <div className="iso-card-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4>ISO 9001:2015 Certification</h4>
            <p>Our complete repair lifecycle from intake metrology to final balancing operates under certified quality management protocols.</p>
            <button onClick={() => onNavigate && onNavigate('contact')} className="nav-link-split" style={{ marginTop: 'auto', background: 'none', border: 'none', padding: 0 }}>
              Request ISO Certificate <span className="arrow">&rarr;</span>
            </button>
          </div>

          <div className="iso-card">
            <div className="iso-card-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4>12-Month OEM Warranty</h4>
            <p>We stand behind every rebuilt and manufactured spindle with an industry-leading 12-month comprehensive operational warranty.</p>
            <button onClick={() => onNavigate && onNavigate('contact')} className="nav-link-split" style={{ marginTop: 'auto', background: 'none', border: 'none', padding: 0 }}>
              Warranty Guidelines <span className="arrow">&rarr;</span>
            </button>
          </div>

          <div className="iso-card">
            <div className="iso-card-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h4>Digital Tracking Data Sheets</h4>
            <p>Every spindle carries a unique QR tracking code linking directly to bearing preloads, drawbar logs, and balancing datasheets.</p>
            <button onClick={() => onNavigate && onNavigate('contact')} className="nav-link-split" style={{ marginTop: 'auto', background: 'none', border: 'none', padding: 0 }}>
              Sample Inspection Log <span className="arrow">&rarr;</span>
            </button>
          </div>
        </div>
      </section>

      {/* Section 6: Direct Facility Audit & Consultation Call-to-Action */}
      <section className="section alt-bg" style={{ textAlign: 'center', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="label-tag-enhanced" style={{ marginBottom: '0.85rem' }}>
            <span className="dot"></span>
            Facility Audit &amp; Technical Consultation
          </div>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.85rem' }}>
            Schedule a Sub-Micron Capability Audit
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2rem', lineHeight: '1.65' }}>
            Have a custom spindle requirement, tight runout tolerance specification, or high-speed balancing project? Speak directly with our metrology engineers.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => onNavigate && onNavigate('contact')} 
              className="btn btn-primary"
              style={{ padding: '0.85rem 2.2rem', fontSize: '0.9rem' }}
            >
              Request Technical Consultation &nbsp; &rarr;
            </button>
            <button 
              onClick={() => onNavigate && onNavigate('services')} 
              className="btn btn-secondary"
              style={{ padding: '0.85rem 2.2rem', fontSize: '0.9rem' }}
            >
              Explore Rebuild Process
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
