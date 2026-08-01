import React from 'react';

export default function Timeline() {
  const steps = [
    {
      num: '01',
      title: 'Dismantling & Root-Cause Diagnosis',
      desc: 'Incoming spindle inspection. We document vibration signals, shaft concentricity, electrical stator resistance, and sensor readouts. Failure vectors are logged prior to systematic teardown.'
    },
    {
      num: '02',
      title: 'Fixed-Price Damage Report',
      desc: 'A comprehensive quotation detailing mechanical faults, worn parts, bearing preloads, and exact costs. The diagnosis is transparent, itemized, and carries zero obligation.'
    },
    {
      num: '03',
      title: 'Taper & TCG Cylindrical Grinding',
      desc: 'High-precision grinding of tapers and housing bores to sub-micron concentricity. Custom hard-chrome plating processes restore dimensional accuracy under 0.0005mm.'
    },
    {
      num: '04',
      title: 'ISO Class 7 Assembly',
      desc: 'Spindle components are matched and mounted in our dust-free positive-pressure cleanroom. Bearings are measured, preloaded, and greased to exact manufacturer tolerances.'
    },
    {
      num: '05',
      title: 'Multi-Hour Run-in Test Run',
      desc: 'Spindles undergo dynamic balancing on high-speed test stands. We continuously log vibration values, speed ramps, and bearing temperatures to verify stable operational capacity.'
    },
    {
      num: '06',
      title: 'Quality Seal & Transport Crate Delivery',
      desc: 'Each spindle is shipped in a custom-built timber transport crate to absorb shock. Delivered with a detailed quality log certificate verifying all testing logs and runout specs.'
    }
  ];

  return (
    <div className="timeline-container">
      {steps.map((step, idx) => (
        <div key={idx} className="timeline-step">
          <div className="timeline-content">
            <div className="step-header" style={{ marginBottom: '6px' }}>
              <span className="step-num" style={{ marginRight: '6px' }}>{step.num}.</span>
              <h3 className="step-title" style={{ fontSize: '1.05rem', fontWeight: 700 }}>{step.title}</h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 0, lineHeight: '1.5' }}>{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
