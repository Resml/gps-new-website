import React from 'react';
import { motion } from 'framer-motion';
import { SlideInLeft, SlideInRight, ScaleUp } from './MotionWrapper';

export default function FoundersShowcase({ onNavigate }) {
  return (
    <section className="section" id="founders-showcase" style={{ padding: '4rem 0', background: '#f8fafc' }}>
      <div className="container">
        
        {/* Main Royal Blue Kern-Style Banner Container */}
        <ScaleUp>
          <div className="founders-banner-card">
            {/* Workshop Overlay Graphic */}
            <div className="founders-banner-overlay" />

            {/* Left Side: 2x2 Metric Grid & Value Proposition */}
            <SlideInLeft style={{ position: 'relative', zIndex: 2 }}>
              
              {/* 2x2 Metric Grid */}
              <div className="founders-banner-metrics">
                
                <div className="founders-metric-item">
                  <div className="founders-metric-number">
                    3,000+
                  </div>
                  <div className="founders-metric-label">
                    SPINDLES REBUILT PER YEAR
                  </div>
                </div>

                <div className="founders-metric-item">
                  <div className="founders-metric-number">
                    3,000+
                  </div>
                  <div className="founders-metric-label">
                    SATISFIED CUSTOMERS
                  </div>
                </div>

                <div className="founders-metric-item">
                  <div className="founders-metric-number">
                    20+
                  </div>
                  <div className="founders-metric-label">
                    YEARS OF EXPERIENCE
                  </div>
                </div>

                <div className="founders-metric-item">
                  <div className="founders-metric-number">
                    2
                  </div>
                  <div className="founders-metric-label">
                    PUNE DEDICATED DESKS
                  </div>
                </div>

              </div>

              {/* Value Proposition Headline */}
              <h2 className="founders-banner-headline">
                We rebuild your CNC spindle precisely and maintain it reliably.
              </h2>

              {/* Request Consultation Button */}
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onNavigate && onNavigate('contact')}
                className="founders-banner-btn"
              >
                <span>REQUEST FREE CONSULTATION</span>
                <span>&rarr;</span>
              </motion.button>

            </SlideInLeft>

            {/* Right Side: Both Founders Side-by-Side Full-Height Edge-to-Edge Portraits */}
            <SlideInRight className="founders-portraits-wrapper">
              
              {/* Founder 1: Sachin Kuchekar */}
              <motion.div
                whileHover={{ y: -4 }}
                className="founder-portrait-card"
              >
                <img
                  src="/images/sachin.png"
                  alt="Sachin Kuchekar – Managing Director, GPS Spindles"
                  className="founder-portrait-img"
                />
                <div className="founder-portrait-gradient" />
                
                <div className="founder-portrait-content">
                  <h3 className="founder-portrait-name">
                    Sachin Kuchekar
                  </h3>
                  <p className="founder-portrait-title">
                    Managing Director • Reconditioning
                  </p>
                  <a
                    href="tel:+919764032929"
                    className="founder-portrait-phone"
                  >
                    +91 97640 32929
                  </a>
                </div>
              </motion.div>

              {/* Founder 2: Anil Vakude */}
              <motion.div
                whileHover={{ y: -4 }}
                className="founder-portrait-card"
              >
                <img
                  src="/images/anil.png"
                  alt="Anil Vakude – Managing Director, GPS Spindles"
                  className="founder-portrait-img"
                />
                <div className="founder-portrait-gradient" />
                
                <div className="founder-portrait-content">
                  <h3 className="founder-portrait-name">
                    Anil Vakude
                  </h3>
                  <p className="founder-portrait-title">
                    Managing Director • Manufacturing
                  </p>
                  <a
                    href="tel:+919764252188"
                    className="founder-portrait-phone"
                  >
                    +91 97642 52188
                  </a>
                </div>
              </motion.div>

            </SlideInRight>

          </div>
        </ScaleUp>

      </div>
    </section>
  );
}
