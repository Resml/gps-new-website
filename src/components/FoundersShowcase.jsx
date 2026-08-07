import React from 'react';
import { motion } from 'framer-motion';
import { SlideInLeft, SlideInRight, ScaleUp } from './MotionWrapper';

export default function FoundersShowcase({ onNavigate }) {
  return (
    <section className="section" id="founders-showcase" style={{ padding: '4rem 0', background: '#f8fafc' }}>
      <div className="container">
        
        {/* Main Royal Blue Kern-Style Banner Container */}
        <ScaleUp>
          <div
            className="founders-banner-card"
            style={{
              position: 'relative',
              background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 60%, #172554 100%)',
              borderRadius: '28px',
              color: '#ffffff',
              overflow: 'hidden',
              boxShadow: '0 24px 60px -10px rgba(29, 78, 216, 0.35)'
            }}
          >
            {/* Workshop Overlay Graphic */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url(/images/factory.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.08,
                mixBlendMode: 'overlay',
                pointerEvents: 'none'
              }}
            />

            {/* Left Side: 2x2 Metric Grid & Value Proposition */}
            <SlideInLeft style={{ position: 'relative', zIndex: 2 }}>
              
              {/* 2x2 Metric Grid */}
              <div className="founders-banner-metrics" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2.5rem' }}>
                
                <div style={{ borderRight: '1px solid rgba(255, 255, 255, 0.2)', paddingRight: '1.5rem' }}>
                  <div style={{ fontSize: '3.2rem', fontWeight: 900, lineHeight: '1', color: '#ffffff', letterSpacing: '-0.03em' }}>
                    3,000+
                  </div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#93c5fd', marginTop: '6px' }}>
                    SPINDLES REBUILT PER YEAR
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '3.2rem', fontWeight: 900, lineHeight: '1', color: '#ffffff', letterSpacing: '-0.03em' }}>
                    3,000+
                  </div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#93c5fd', marginTop: '6px' }}>
                    SATISFIED CUSTOMERS
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', borderRight: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '1.5rem', paddingRight: '1.5rem' }}>
                  <div style={{ fontSize: '3.2rem', fontWeight: 900, lineHeight: '1', color: '#ffffff', letterSpacing: '-0.03em' }}>
                    20+
                  </div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#93c5fd', marginTop: '6px' }}>
                    YEARS OF EXPERIENCE
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '1.5rem' }}>
                  <div style={{ fontSize: '3.2rem', fontWeight: 900, lineHeight: '1', color: '#ffffff', letterSpacing: '-0.03em' }}>
                    2
                  </div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#93c5fd', marginTop: '6px' }}>
                    PUNE DEDICATED DESKS
                  </div>
                </div>

              </div>

              {/* Value Proposition Headline */}
              <h2 style={{ fontSize: '2.1rem', fontWeight: 900, color: '#ffffff', lineHeight: '1.25', margin: '0 0 1.75rem 0', letterSpacing: '-0.02em', borderBottom: 'none', paddingBottom: 0 }}>
                We rebuild your CNC spindle precisely and maintain it reliably.
              </h2>

              {/* Request Consultation Button */}
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onNavigate && onNavigate('contact')}
                style={{
                  background: '#ffffff',
                  color: '#1d4ed8',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '0.9rem 1.8rem',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span>REQUEST FREE CONSULTATION</span>
                <span>&rarr;</span>
              </motion.button>

            </SlideInLeft>

            {/* Right Side: Both Founders Side-by-Side Full-Height Edge-to-Edge Portraits */}
            <SlideInRight
              className="founders-portraits-wrapper"
              style={{
                gap: '1.25rem',
                position: 'relative',
                zIndex: 2,
                alignSelf: 'stretch'
              }}
            >
              {/* Founder 1: Sachin Kuchekar */}
              <motion.div
                whileHover={{ y: -4 }}
                style={{
                  position: 'relative',
                  height: '100%',
                  minHeight: '460px',
                  borderRadius: '0',
                  overflow: 'hidden'
                }}
              >
                <img
                  src="/images/sachin.png"
                  alt="Sachin Kuchekar – Managing Director, GPS Spindles"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(15,23,42,0.95) 100%)' }} />
                
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem 1.1rem', color: '#ffffff', zIndex: 3 }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 900, margin: 0, color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                    Sachin Kuchekar
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: '#93c5fd', margin: '3px 0 8px 0', fontWeight: 700 }}>
                    Managing Director • Reconditioning
                  </p>
                  <span style={{ fontSize: '0.78rem', color: '#ffffff', fontWeight: 800, background: '#1d4ed8', padding: '5px 12px', borderRadius: '8px', display: 'inline-block', boxShadow: '0 4px 12px rgba(29, 78, 216, 0.4)' }}>
                    +91 97640 32929
                  </span>
                </div>
              </motion.div>

              {/* Founder 2: Anil Vakude */}
              <motion.div
                whileHover={{ y: -4 }}
                style={{
                  position: 'relative',
                  height: '100%',
                  minHeight: '460px',
                  borderRadius: '0 28px 28px 0',
                  overflow: 'hidden'
                }}
              >
                <img
                  src="/images/anil.png"
                  alt="Anil Vakude – Managing Director, GPS Spindles"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(15,23,42,0.95) 100%)' }} />
                
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem 1.1rem', color: '#ffffff', zIndex: 3 }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 900, margin: 0, color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                    Anil Vakude
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: '#93c5fd', margin: '3px 0 8px 0', fontWeight: 700 }}>
                    Managing Director • Manufacturing
                  </p>
                  <span style={{ fontSize: '0.78rem', color: '#ffffff', fontWeight: 800, background: '#1d4ed8', padding: '5px 12px', borderRadius: '8px', display: 'inline-block', boxShadow: '0 4px 12px rgba(29, 78, 216, 0.4)' }}>
                    +91 97642 52188
                  </span>
                </div>
              </motion.div>

            </SlideInRight>

          </div>
        </ScaleUp>

      </div>
    </section>
  );
}
