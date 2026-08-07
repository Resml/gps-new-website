import React from 'react';
import { SlideInLeft, SlideInRight, ScaleUp } from './MotionWrapper';

export default function PrecisionCapabilitiesShowcase({ onNavigate }) {
  return (
    <section className="section" id="precision-capabilities" style={{ background: '#ffffff', padding: '5rem 0' }}>
      <div className="container">

        {/* ══ 1. TAPER & SHAFT CYLINDRICAL GRINDING ══════════════ */}
        <div className="precision-grid-row">

          {/* Left Content */}
          <SlideInLeft>
            <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#1d4ed8', letterSpacing: '0.1em', display: 'inline-block', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              TAPER RECONSTRUCTION
            </span>
            <h3 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#0f172a', lineHeight: '1.22', margin: '0 0 1.25rem 0', letterSpacing: '-0.025em' }}>
              Taper &amp; Shaft <span style={{ color: '#1d4ed8' }}>Cylindrical Grinding</span>
            </h3>

            <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: '1.7', margin: '0 0 1.5rem 0' }}>
              Spindle components must operate with sub-micron tolerances to prevent part defects and runout errors. We grind shaft tapers (HSK, CAT, BT, ISO) and bearing housing bore fits at our Pune facility using climate thermal controls to prevent grinding expansion.
            </p>

            {/* Callout Card */}
            <div style={{ background: '#f8fafc', borderLeft: '4px solid #1d4ed8', border: '1px solid #e2e8f0', borderLeftWidth: '4px', padding: '1rem 1.25rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
              <p style={{ color: '#1e293b', fontSize: '0.92rem', fontWeight: 700, margin: 0 }}>
                Our cylindrical grinding maintains roundness tolerances below <span style={{ color: '#1d4ed8' }}>0.0005mm</span>, meeting or exceeding original manufacturer specifications.
              </p>
            </div>

            {/* 4 Feature Badges */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '0.85rem 1rem', borderRadius: '10px' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a' }}>Sub-Micron Accuracy</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>Roundness &lt; 0.0005mm</div>
              </div>
              <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '0.85rem 1rem', borderRadius: '10px' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a' }}>Thermal Stabilized</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>Prevents expansion errors</div>
              </div>
              <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '0.85rem 1rem', borderRadius: '10px' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a' }}>Multi-Taper Fits</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>HSK, CAT, BT, ISO Tapers</div>
              </div>
              <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '0.85rem 1rem', borderRadius: '10px' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a' }}>OEM Standards</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>Sub-micron calibrated</div>
              </div>
            </div>
          </SlideInLeft>

          {/* Right Image */}
          <ScaleUp>
            <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #cbd5e1', boxShadow: '0 20px 48px -10px rgba(15,23,42,0.12)', position: 'relative' }}>
              <img src="/images/taper_shaft.png" alt="Taper & Shaft Cylindrical Grinding" style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(180deg, transparent, rgba(15,23,42,0.92))', padding: '1.25rem', color: '#ffffff' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#93c5fd', textTransform: 'uppercase' }}>STUDER CNC CYLINDRICAL GRINDING</span>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 900, color: '#ffffff', margin: '2px 0 0 0' }}>Taper Reconstruction &amp; Housing Boring</h4>
              </div>
            </div>
          </ScaleUp>

        </div>

        {/* Divider Line Between Section 1 & 2 */}
        <div style={{ width: '100%', height: '1px', background: '#e2e8f0', marginBottom: '5rem' }} />

        {/* ══ 2. SENSOR-BASED DYNAMIC BALANCING ══════════════════ */}
        <div className="precision-grid-row reverse">

          {/* Left Image */}
          <ScaleUp>
            <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #cbd5e1', boxShadow: '0 20px 48px -10px rgba(15,23,42,0.12)', position: 'relative' }}>
              <img src="/images/sensor.png" alt="Sensor-Based Dynamic Balancing" style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(180deg, transparent, rgba(15,23,42,0.92))', padding: '1.25rem', color: '#ffffff' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#93c5fd', textTransform: 'uppercase' }}>ISO 1940-1 G0.4 BALANCING STAND</span>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 900, color: '#ffffff', margin: '2px 0 0 0' }}>Real-Time Dual-Plane Vibration Diagnostics</h4>
              </div>
            </div>
          </ScaleUp>

          {/* Right Content */}
          <SlideInRight>
            <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#1d4ed8', letterSpacing: '0.1em', display: 'inline-block', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              CALIBRATION &amp; DIAGNOSTICS
            </span>
            <h3 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#0f172a', lineHeight: '1.22', margin: '0 0 1.25rem 0', letterSpacing: '-0.025em' }}>
              Sensor-Based <span style={{ color: '#1d4ed8' }}>Dynamic Balancing</span>
            </h3>

            <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: '1.7', margin: '0 0 1.5rem 0' }}>
              Our testing stands utilize diagnostic sensors to record housing vibration signatures, temperature rises, and speed spectrum analysis. Dynamic balancing is performed to ISO 1940-1 G0.4 specifications to limit centrifugal stress.
            </p>

            {/* 4 Badges */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '0.85rem 1rem', borderRadius: '10px' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a' }}>Diagnostic Sensors</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>Captures vibration spectrum</div>
              </div>
              <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '0.85rem 1rem', borderRadius: '10px' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a' }}>Thermal Logs</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>Monitors bearing heat rise</div>
              </div>
              <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '0.85rem 1rem', borderRadius: '10px' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a' }}>Speed Spectrum</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>Up to 100,000 RPM test</div>
              </div>
              <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '0.85rem 1rem', borderRadius: '10px' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a' }}>ISO 1940-1 G0.4</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>Printed calibration report</div>
              </div>
            </div>
          </SlideInRight>

        </div>

        {/* Divider Line Between Section 2 & 3 */}
        <div style={{ width: '100%', height: '1px', background: '#e2e8f0', marginBottom: '5rem' }} />

        {/* ══ 3. ISO CLASS 7 CLEANROOM STANDARDS ═════════════════ */}
        <div className="precision-grid-row">

          {/* Left Content */}
          <SlideInLeft>
            <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#1d4ed8', letterSpacing: '0.1em', display: 'inline-block', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              ASSEMBLY STANDARDS
            </span>
            <h3 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#0f172a', lineHeight: '1.22', margin: '0 0 1.25rem 0', letterSpacing: '-0.025em' }}>
              ISO Class 7 <span style={{ color: '#1d4ed8' }}>Cleanroom Standards</span>
            </h3>

            <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: '1.7', margin: '0 0 1.5rem 0' }}>
              To eliminate particle contamination—the primary cause of premature spindle bearing failure—all precision assemblies are conducted inside a certified Class 10,000 positive-pressure cleanroom using climate stabilization.
            </p>

            {/* 3 Value Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1rem' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#1d4ed8' }}>✓</span> Ceramic Hybrid Precision Bearings
                </div>
                <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0', lineHeight: '1.5' }}>
                  Silicon nitride (Si3N4) ceramic balls lower friction, decrease operating temperatures, and extend spindle speed capability.
                </p>
              </div>

              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1rem' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#1d4ed8' }}>✓</span> Drawbar Force Measurement
                </div>
                <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0', lineHeight: '1.5' }}>
                  Tool retention force is calibrated using digital electronic gauges to verify collet specs and prevent tool slippage under stress.
                </p>
              </div>

              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1rem' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#1d4ed8' }}>✓</span> Climate-Controlled Stabilization
                </div>
                <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0', lineHeight: '1.5' }}>
                  Components are thermally normalized at 68°F (20°C) before sub-micron assembly to eliminate expansion inaccuracies.
                </p>
              </div>
            </div>
          </SlideInLeft>

          {/* Right Image */}
          <ScaleUp>
            <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #cbd5e1', boxShadow: '0 20px 48px -10px rgba(15,23,42,0.12)', position: 'relative' }}>
              <img src="/images/workshop_real.png" alt="Cleanroom Assembly Facility" style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(180deg, transparent, rgba(15,23,42,0.92))', padding: '1.25rem', color: '#ffffff' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#93c5fd', textTransform: 'uppercase' }}>CLASS 10,000 CLEANROOM FACILITY</span>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 900, color: '#ffffff', margin: '2px 0 0 0' }}>Zero-Particle Precision Spindle Assembly</h4>
              </div>
            </div>
          </ScaleUp>

        </div>

      </div>
    </section>
  );
}
