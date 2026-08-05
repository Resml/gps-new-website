import React from 'react';

/* ─── Accurate brand SVG logos with real colors ─────────── */
const logos = [
  {
    name: 'GMN',
    w: 90,
    svg: (
      <svg viewBox="0 0 90 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="2" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="28" fill="#1a4fa0" letterSpacing="1">GMN</text>
      </svg>
    ),
  },
  {
    name: 'SETCO',
    w: 130,
    svg: (
      <svg viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="2" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="26" fill="#1a1a1a" letterSpacing="1">SETCO</text>
        {/* Spindle bar icon */}
        <rect x="112" y="8" width="4" height="24" fill="#cc0000" rx="1"/>
        <rect x="118" y="14" width="4" height="12" fill="#cc0000" rx="1"/>
      </svg>
    ),
  },
  {
    name: 'HAAS',
    w: 120,
    svg: (
      <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Red background badge */}
        <rect x="0" y="4" width="36" height="32" rx="3" fill="#CC0000"/>
        <text x="4" y="27" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="20" fill="#ffffff">H</text>
        <text x="40" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="26" fill="#1a1a1a" letterSpacing="1">AAS</text>
      </svg>
    ),
  },
  {
    name: 'DMG MORI',
    w: 160,
    svg: (
      <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="2" y="22" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="20" fill="#1a1a1a" letterSpacing="0.5">DMG MORI</text>
        <text x="2" y="34" fontFamily="Arial,sans-serif" fontWeight="400" fontSize="8.5" fill="#666666" letterSpacing="1.2">AKTIENGESELLSCHAFT</text>
      </svg>
    ),
  },
  {
    name: 'Mazak',
    w: 130,
    svg: (
      <svg viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Mazak uses a bold italic style in orange-red */}
        <text x="2" y="32" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="32" fill="#e8470a" fontStyle="italic" letterSpacing="-0.5">Mazak</text>
      </svg>
    ),
  },
  {
    name: 'FISCHER',
    w: 145,
    svg: (
      <svg viewBox="0 0 145 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="2" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="24" fill="#004a9f" letterSpacing="1">FISCHER</text>
        {/* Arrow icon */}
        <polygon points="130,12 145,20 130,28" fill="#004a9f"/>
      </svg>
    ),
  },
  {
    name: 'OKUMA',
    w: 145,
    svg: (
      <svg viewBox="0 0 145 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* L-bracket icon */}
        <rect x="2" y="8" width="5" height="24" fill="#0d2155" rx="1"/>
        <rect x="2" y="27" width="14" height="5" fill="#0d2155" rx="1"/>
        <text x="22" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="24" fill="#0d2155" letterSpacing="1">OKUMA</text>
      </svg>
    ),
  },
  {
    name: 'KESSLER',
    w: 155,
    svg: (
      <svg viewBox="0 0 155 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* K box icon */}
        <rect x="0" y="6" width="28" height="28" rx="2" fill="#1a1a1a"/>
        <text x="5" y="28" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="20" fill="#ffffff">K</text>
        <text x="34" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="22" fill="#1a1a1a" letterSpacing="1">ESSLER</text>
      </svg>
    ),
  },
  {
    name: 'HERMLE',
    w: 140,
    svg: (
      <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="2" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="24" fill="#003087" letterSpacing="1">HERMLE</text>
      </svg>
    ),
  },
  {
    name: 'FANUC',
    w: 120,
    svg: (
      <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="2" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="26" fill="#f7cc00" letterSpacing="1" stroke="#1a1a1a" strokeWidth="0.5">FANUC</text>
      </svg>
    ),
  },
  {
    name: 'MAKINO',
    w: 140,
    svg: (
      <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="2" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="24" fill="#c00" letterSpacing="1">MAKINO</text>
      </svg>
    ),
  },
];

const doubled = [...logos, ...logos];

export default function BrandMarquee() {
  return (
    <div className="bm-strip-card">
      <div className="bm-marquee-wrap">
        <div className="bm-marquee-track">
          {doubled.map((logo, i) => (
            <div key={i} className="bm-logo-slot" aria-label={logo.name} title={logo.name}>
              <div className="bm-logo-svg" style={{ width: logo.w }}>
                {logo.svg}
              </div>
              <div className="bm-sep" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
