import React from 'react';

const brandLogos = [
  { name: 'HAAS', src: '/images/logos/haas.png', height: '28px' },
  { name: 'DMG MORI', src: '/images/logos/dmg_mori.svg', height: '24px' },
  { name: 'MAZAK', src: '/images/logos/mazak.svg', height: '24px' },
  { name: 'FISCHER', src: '/images/logos/fischer.svg', height: '20px' },
  { name: 'OKUMA', src: '/images/logos/okuma.svg', height: '22px' },
  { name: 'KESSLER', src: '/images/logos/kessler.svg', height: '24px' },
  { name: 'GMN', src: '/images/logos/gmn.svg', height: '24px' },
  { name: 'SETCO', src: '/images/logos/setco.svg', height: '24px' }
];

export default function BrandMarquee() {
  return (
    <div className="brand-marquee-container">
      <div className="brand-marquee">
        {/* Double list for seamless marquee looping */}
        {[...brandLogos, ...brandLogos].map((brand, index) => (
          <div key={index} className="brand-logo" title={brand.name}>
            <img 
              src={brand.src} 
              alt={brand.name} 
              style={{ 
                height: brand.height, 
                width: 'auto', 
                display: 'block', 
                objectFit: 'contain' 
              }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
