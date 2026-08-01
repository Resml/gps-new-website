import React, { useState } from 'react';

export default function CadDrawing() {
  const [activeDim, setActiveDim] = useState(null);

  // Dimension color helper
  const getDimColor = (dim) => {
    return activeDim === dim ? '#2563eb' : '#3b82f6'; // Bright blue on hover
  };

  const getStrokeWidth = (dim) => {
    return activeDim === dim ? 2.5 : 1.5;
  };

  return (
    <div className="cad-blueprint-wrapper" style={{ userSelect: 'none' }}>
      <div style={{
        position: 'absolute',
        top: '12px',
        left: '16px',
        fontSize: '0.65rem',
        fontFamily: 'monospace',
        color: 'var(--text-muted)',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        pointerEvents: 'none'
      }}>
        SPDL-PRO-24000 // SYSTEM BLUEPRINT & DESIGN SHEET
      </div>

      <svg
        viewBox="0 0 760 520"
        className="cad-svg"
        style={{
          width: '100%',
          display: 'block'
        }}
      >
        <defs>
          {/* Diagonal hatching pattern for metal cut sections */}
          <pattern
            id="cad-hatch"
            width="8"
            height="8"
            patternTransform="rotate(45 0 0)"
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="8"
              stroke="rgba(37, 99, 235, 0.2)"
              strokeWidth="1"
            />
          </pattern>

          {/* Marker definition for dimension line arrowheads */}
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#3b82f6" />
          </marker>

          <marker
            id="arrow-hover"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb" />
          </marker>
        </defs>

        {/* No global horizontal centerline (spindle is angled) */}

        {/* ================================================================= */}
        {/* ==================== DRAWING 1: SPECS TEXT ====================== */}
        {/* ================================================================= */}
        <g transform="translate(10, 40)" style={{ fontFamily: 'monospace', fontSize: '10.5px', fill: 'var(--text-secondary)' }}>
          <text x="0" y="15" fontWeight="700" fill="var(--text-primary)" style={{ fontSize: '11px' }}>MODEL: SPDL-PRO-24000</text>
          <text x="0" y="32">MAX SPEED: 24,000 RPM</text>
          <text x="0" y="49">POWER: 22 kW</text>
          <text x="0" y="66">VOLTAGE: 380V 3PH</text>
          <text x="0" y="83">FREQUENCY: 400 Hz</text>
          <text x="0" y="100">INTERFACE: HSK-A63</text>
          <text x="0" y="117">COOLING: LIQUID COOLED</text>

          {/* Blueprint style hatching box under text */}
          <line x1="0" y1="128" x2="120" y2="128" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" strokeDasharray="3,3" />
        </g>

        {/* ================================================================= */}
        {/* ==================== DRAWING 2: CIRCULAR END VIEW ================ */}
        {/* ================================================================= */}
        <g id="end-view" transform="translate(655, 100)">
          <text x="0" y="-62" fill="var(--text-muted)" fontSize="8.5" fontFamily="monospace" textAnchor="middle">
            REAR CONNECTOR FACE
          </text>
          {/* Axis indicators */}
          <line x1="-55" y1="0" x2="55" y2="0" stroke="rgba(59, 130, 246, 0.25)" strokeWidth="0.75" strokeDasharray="6,4" />
          <line x1="0" y1="-55" x2="0" y2="55" stroke="rgba(59, 130, 246, 0.25)" strokeWidth="0.75" strokeDasharray="6,4" />

          {/* Outer flange ring Ø128 */}
          <circle
            cx="0" cy="0" r="46"
            fill="none" stroke="#475569" strokeWidth="1.25"
            style={{ transition: 'stroke 0.2s' }}
            stroke={activeDim === 'd128' ? '#f59e0b' : '#475569'}
          />

          {/* Bolt circle diameter Ø91 */}
          <circle
            cx="0" cy="0" r="32.5"
            fill="none" stroke="rgba(59, 130, 246, 0.35)" strokeWidth="0.75" strokeDasharray="3,3"
            style={{ transition: 'stroke 0.2s' }}
            stroke={activeDim === 'd91' ? '#f59e0b' : 'rgba(59, 130, 246, 0.35)'}
          />

          {/* 6 bolt holes */}
          <circle cx="32.5" cy="0" r="3" fill="none" stroke="#475569" strokeWidth="0.75" />
          <circle cx="16.25" cy="28.14" r="3" fill="none" stroke="#475569" strokeWidth="0.75" />
          <circle cx="-16.25" cy="28.14" r="3" fill="none" stroke="#475569" strokeWidth="0.75" />
          <circle cx="-32.5" cy="0" r="3" fill="none" stroke="#475569" strokeWidth="0.75" />
          <circle cx="-16.25" cy="-28.14" r="3" fill="none" stroke="#475569" strokeWidth="0.75" />
          <circle cx="16.25" cy="-28.14" r="3" fill="none" stroke="#475569" strokeWidth="0.75" />

          {/* Inner core circle */}
          <circle cx="0" cy="0" r="18" fill="none" stroke="#475569" strokeWidth="1.25" />
          <circle cx="0" cy="0" r="11" fill="none" stroke="#475569" strokeWidth="0.75" />

          {/* Interactive Label overlay for Ø91 */}
          <g
            className="dim-group"
            style={{ cursor: 'pointer', pointerEvents: 'auto' }}
            onMouseEnter={() => setActiveDim('d91')}
            onMouseLeave={() => setActiveDim(null)}
          >
            {/* Dimension line pointing to bolt circle */}
            <line
              x1="0" y1="0" x2="28" y2="-16"
              stroke={getDimColor('d91')} strokeWidth={getStrokeWidth('d91')}
              markerEnd={`url(#${activeDim === 'd91' ? 'arrow-hover' : 'arrow'})`}
            />
            {/* Label text */}
            <rect x="18" y="-40" width="55" height="26" fill="#ffffff" rx="2" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" />
            <text
              x="45" y="-30" fill={getDimColor('d91')}
              fontSize="9" fontWeight={activeDim === 'd91' ? '700' : '500'}
              fontFamily="monospace" textAnchor="middle"
            >
              Ø91 (B.C.D)
            </text>
            <text
              x="45" y="-20" fill={getDimColor('d91')}
              fontSize="8" fontWeight="500"
              fontFamily="monospace" textAnchor="middle"
            >
              6-M8 深16
            </text>
          </g>
        </g>

        {/* ================================================================= */}
        {/* ================= DRAWING 3: CROSS SECTION FLANGE ================ */}
        {/* ================================================================= */}
        <g id="section-detail" transform="translate(590, 390)">
          <text x="50" y="-35" fill="var(--text-muted)" fontSize="8.5" fontFamily="monospace" textAnchor="middle">
            SECTION B-B // DETAILS
          </text>

          {/* Horizontal center */}
          <line x1="-15" y1="15" x2="115" y2="15" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.75" strokeDasharray="4,4" />

          {/* Upper metal body */}
          <path
            d="
              M 15 15 
              L 15 -10 
              L 38 -10 
              L 38 -30 
              L 54 -30 
              L 54 -24 
              L 85 -24 
              L 85 15 
              L 82 15
              L 82 -11
              L 68 -11
              L 68 -15
              L 34 -15
              L 34 15
              Z
            "
            fill="url(#cad-hatch)" stroke="#475569" strokeWidth="1.25"
          />

          {/* Lower metal body */}
          <path
            d="
              M 15 15 
              L 15 40 
              L 38 40 
              L 38 60 
              L 54 60 
              L 54 54 
              L 85 54 
              L 85 15 
              L 82 15
              L 82 41
              L 68 41
              L 68 45
              L 34 45
              L 34 15
              Z
            "
            fill="url(#cad-hatch)" stroke="#475569" strokeWidth="1.25"
          />

          {/* Small detail grooves */}
          <rect x="70" y="-11" width="3" height="52" fill="none" stroke="#475569" strokeWidth="0.75" />

          {/* Dimension: 57 */}
          <g
            className="dim-group"
            style={{ cursor: 'pointer', pointerEvents: 'auto' }}
            onMouseEnter={() => setActiveDim('w57')}
            onMouseLeave={() => setActiveDim(null)}
          >
            <line x1="15" y1="40" x2="15" y2="85" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="0.75" />
            <line x1="85" y1="54" x2="85" y2="85" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="0.75" />
            <line
              x1="20" y1="78" x2="80" y2="78"
              stroke={getDimColor('w57')} strokeWidth={getStrokeWidth('w57')}
              markerStart={`url(#${activeDim === 'w57' ? 'arrow-hover' : 'arrow'})`}
              markerEnd={`url(#${activeDim === 'w57' ? 'arrow-hover' : 'arrow'})`}
            />
            <rect x="44" y="70" width="12" height="15" fill="#ffffff" />
            <text
              x="50" y="80" fill={getDimColor('w57')}
              fontSize="9" fontWeight={activeDim === 'w57' ? '700' : '500'}
              fontFamily="monospace" textAnchor="middle"
            >
              57
            </text>
          </g>

          {/* Dimension: 9.4 */}
          <g
            className="dim-group"
            style={{ cursor: 'pointer', pointerEvents: 'auto' }}
            onMouseEnter={() => setActiveDim('w9_4')}
            onMouseLeave={() => setActiveDim(null)}
          >
            <line x1="38" y1="-30" x2="38" y2="-52" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="0.75" />
            <line x1="54" y1="-30" x2="54" y2="-52" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="0.75" />
            <line
              x1="41" y1="-46" x2="51" y2="-46"
              stroke={getDimColor('w9_4')} strokeWidth={getStrokeWidth('w9_4')}
              markerStart={`url(#${activeDim === 'w9_4' ? 'arrow-hover' : 'arrow'})`}
              markerEnd={`url(#${activeDim === 'w9_4' ? 'arrow-hover' : 'arrow'})`}
            />
            <text
              x="46" y="-53" fill={getDimColor('w9_4')}
              fontSize="8.5" fontWeight={activeDim === 'w9_4' ? '700' : '500'}
              fontFamily="monospace" textAnchor="middle"
            >
              9.4
            </text>
          </g>

          {/* Dimension: Ø88.5 */}
          <g
            className="dim-group"
            style={{ cursor: 'pointer', pointerEvents: 'auto' }}
            onMouseEnter={() => setActiveDim('d88_5')}
            onMouseLeave={() => setActiveDim(null)}
          >
            <line x1="85" y1="-24" x2="115" y2="-24" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="0.75" />
            <line x1="85" y1="54" x2="115" y2="54" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="0.75" />
            <line
              x1="108" y1="-19" x2="108" y2="49"
              stroke={getDimColor('d88_5')} strokeWidth={getStrokeWidth('d88_5')}
              markerStart={`url(#${activeDim === 'd88_5' ? 'arrow-hover' : 'arrow'})`}
              markerEnd={`url(#${activeDim === 'd88_5' ? 'arrow-hover' : 'arrow'})`}
            />
            <rect x="96" y="8" width="24" height="14" fill="#ffffff" />
            <text
              x="108" y="17" fill={getDimColor('d88_5')}
              fontSize="8" fontWeight={activeDim === 'd88_5' ? '700' : '500'}
              fontFamily="monospace" textAnchor="middle"
            >
              88.5
            </text>
          </g>
        </g>

        {/* ================================================================= */}
        {/* ================= DRAWING 4: SIDE VIEW CAD OUTLINE ================ */}
        {/* ================================================================= */}
        <g id="bottom-side-view" transform="translate(300, 450)">
          <text x="145" y="-12" fill="var(--text-muted)" fontSize="8.5" fontFamily="monospace" textAnchor="middle">
            ASSEMBLY OUTLINE
          </text>
          <line x1="20" y1="18" x2="270" y2="18" stroke="rgba(59, 130, 246, 0.25)" strokeWidth="0.75" strokeDasharray="5,3" />

          {/* Stepped spindle shape scaled down */}
          <path
            d="
              M 40 8 
              L 40 28 
              L 55 28 
              L 55 33 
              L 65 33 
              L 65 37 
              L 75 37 
              L 75 -1 
              L 65 -1 
              L 65 3 
              L 55 3 
              L 55 8 
              Z
            "
            fill="none" stroke="#475569" strokeWidth="1"
          />
          <rect x="75" y="-5" width="10" height="46" fill="none" stroke="#475569" strokeWidth="1" />
          <rect x="85" y="-10" width="15" height="56" fill="none" stroke="#475569" strokeWidth="1.25" />
          <rect x="100" y="-7" width="120" height="50" fill="none" stroke="#475569" strokeWidth="1.25" />
          <rect x="220" y="-6" width="20" height="48" fill="none" stroke="#475569" strokeWidth="1" />
          <path d="M 240 -1 L 246 -1 L 246 37 L 240 37 Z" fill="none" stroke="#475569" strokeWidth="1" />

          {/* Back end connector pins */}
          <line x1="246" y1="5" x2="255" y2="5" stroke="#475569" strokeWidth="1" />
          <line x1="246" y1="13" x2="257" y2="13" stroke="#475569" strokeWidth="1" />
          <line x1="246" y1="23" x2="257" y2="23" stroke="#475569" strokeWidth="1" />
          <line x1="246" y1="31" x2="255" y2="31" stroke="#475569" strokeWidth="1" />

          {/* Dimension: 698 */}
          <g
            className="dim-group"
            style={{ cursor: 'pointer', pointerEvents: 'auto' }}
            onMouseEnter={() => setActiveDim('w698')}
            onMouseLeave={() => setActiveDim(null)}
          >
            <line x1="40" y1="28" x2="40" y2="60" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="0.75" />
            <line x1="246" y1="37" x2="246" y2="60" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="0.75" />
            <line
              x1="45" y1="53" x2="241" y2="53"
              stroke={getDimColor('w698')} strokeWidth={getStrokeWidth('w698')}
              markerStart={`url(#${activeDim === 'w698' ? 'arrow-hover' : 'arrow'})`}
              markerEnd={`url(#${activeDim === 'w698' ? 'arrow-hover' : 'arrow'})`}
            />
            <rect x="130" y="45" width="30" height="15" fill="#ffffff" />
            <text
              x="145" y="55" fill={getDimColor('w698')}
              fontSize="9.5" fontWeight={activeDim === 'w698' ? '700' : '500'}
              fontFamily="monospace" textAnchor="middle"
            >
              698
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
