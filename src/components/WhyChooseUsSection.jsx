import React, { useState } from 'react';

const advantages = [
  {
    id: '01',
    image: '/images/why1.png',
    badge: 'DEEP DOMAIN EXPERTISE',
    title: '20+ Years of Engineering Mastery',
    desc: 'As Pune\'s most trusted spindle specialists since 2017, even complex multi-axis motorized spindle overhauls are routine for our team. Our engineers carry OEM-level knowledge across all major brands—VMC, HMC, CNC, and High-Frequency spindles—delivering results that save 20–30% compared to new OEM replacements.',
    metrics: [
      { val: '3,000+', lbl: 'Spindles Rebuilt' },
      { val: '20+', lbl: 'Years in Industry' },
      { val: '30%', lbl: 'Avg. OEM Savings' },
    ],
    tag: 'OEM-GRADE PRECISION',
    accent: '#1e3a8a',
  },
  {
    id: '02',
    image: '/images/why2.png',
    badge: '2X LIFESPAN GUARANTEE',
    title: 'Exceptional Reliability — Built to Last Twice as Long',
    desc: 'Our dynamic-balanced spindles achieve more than twice the standard operating lifecycle. Using ISO G0.4 dual-plane balancing and sub-micron runout measurements, we eliminate vibration-related wear at the source — reducing unplanned machine downtime by up to 50% for manufacturing facilities.',
    metrics: [
      { val: '2×', lbl: 'Lifespan Increase' },
      { val: '50%', lbl: 'Less Downtime' },
      { val: 'G0.4', lbl: 'Balancing Standard' },
    ],
    tag: 'RELIABILITY CERTIFIED',
    accent: '#1e3a8a',
  },
  {
    id: '03',
    image: '/images/why3.png',
    badge: 'RAPID RESPONSE SERVICE',
    title: 'Fast 4–8 Day Rebuild with 48-Hour Emergency Dispatch',
    desc: 'Every hour of production downtime costs money. Our streamlined Pune facility with dedicated clean-room assembly and precision grinding infrastructure enables complete spindle rebuilds in just 4 to 8 working days. For critical breakdowns, we offer emergency 48-hour priority dispatch.',
    metrics: [
      { val: '4–8', lbl: 'Day Standard Build' },
      { val: '48hr', lbl: 'Emergency Priority' },
      { val: '100%', lbl: 'Test Before Dispatch' },
    ],
    tag: 'FASTEST TURNAROUND',
    accent: '#1e3a8a',
  },
  {
    id: '04',
    image: '/images/why4.png',
    badge: 'INDUSTRY-LEADING WARRANTY',
    title: 'Sub-Micron Precision Backed by a Full 1-Year Warranty',
    desc: 'Every GPS Spindles rebuild delivers measurable sub-micron runout accuracy, verified by our precision measurement protocols before shipment. Backed by a full 1-Year comprehensive warranty, our 3,000+ satisfied clients trust us to keep their CNC assets performing at peak efficiency.',
    metrics: [
      { val: '1-Year', lbl: 'Full Warranty' },
      { val: '<1μm', lbl: 'Runout Accuracy' },
      { val: '3,000+', lbl: 'Happy Clients' },
    ],
    tag: 'WARRANTED PRECISION',
    accent: '#1e3a8a',
  },
];

export default function WhyChooseUsSection({ onNavigate }) {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="why-pro-section" id="why-choose-us">
      {/* Header */}
      <div className="container">
        <div className="why-pro-header">
          <div className="why-pro-label-group">
            <span className="why-pro-badge">
              <span className="why-badge-dot"></span>
              PROVEN ENGINEERING VALUE
            </span>
          </div>
          <h2 className="why-pro-title">
            Why <span className="why-navy-span">hundreds of industrial companies</span><br />
            choose GPS Spindles
          </h2>
          <div className="why-pro-divider"></div>
          <p className="why-pro-subtitle">
            Each advantage is backed by real engineering data, verified results, and the trust of 3,000+ manufacturing clients across India.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="why-pro-cards-grid">
        {advantages.map((item, idx) => {
          const isEven = idx % 2 === 1;
          const isHov = hovered === idx;
          return (
            <div
              key={item.id}
              className={`why-pro-card-row ${isEven ? 'reverse' : ''} ${isHov ? 'hovered' : ''}`}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image Panel */}
              <div className="why-pro-img-panel">
                <div className="why-pro-img-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="why-pro-img"
                  />
                  <div className="why-pro-img-overlay"></div>
                  {/* Floating number badge */}
                  <div className="why-pro-img-number">{item.id}</div>
                </div>
              </div>

              {/* Content Panel */}
              <div className="why-pro-content-panel">
                <div className="why-pro-content-inner">
                  <span className="why-card-badge">{item.badge}</span>
                  <h3 className="why-card-title">{item.title}</h3>
                  <div className="why-card-divider"></div>
                  <p className="why-card-desc">{item.desc}</p>

                  {/* Metrics */}
                  <div className="why-card-metrics">
                    {item.metrics.map((m, mi) => (
                      <div key={mi} className="why-metric-item">
                        <span className="why-metric-val">{m.val}</span>
                        <span className="why-metric-lbl">{m.lbl}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className="why-card-cta"
                    onClick={() => onNavigate('contact')}
                  >
                    Get a Free Quote &nbsp;&rarr;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Banner */}
      <div className="container">
        <div className="why-pro-bottom-cta">
          <div className="bottom-cta-left">
            <h3 className="bottom-cta-title">Ready to restore your CNC spindle to peak performance?</h3>
            <p className="bottom-cta-sub">Get a technical consultation and rebuild estimate from our engineers within 2 hours.</p>
          </div>
          <div className="bottom-cta-actions">
            <button onClick={() => onNavigate('contact')} className="btn-navy-primary">
              MAKE AN INQUIRY NOW &nbsp;&rarr;
            </button>
            <button onClick={() => onNavigate('services')} className="btn-navy-secondary">
              VIEW REBUILD PROCESS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
