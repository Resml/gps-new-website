import React from 'react';
import { ScaleUp, FadeUp } from './MotionWrapper';

export default function PromoBannerCard({ onNavigate }) {
  return (
    <div className="container promo-banner-container" style={{ margin: '4rem auto' }}>
      <ScaleUp>
        <div className="promo-banner-card">
          {/* Left Side: Dark Machining Photography + Brand Overlay */}
          <div className="promo-banner-left">
            <img
              src="/images/maximize_image.png"
              alt="General Precision Spindle Manufacturing"
              className="promo-banner-img"
            />
            <div className="promo-banner-overlay" />
            <div className="promo-banner-brand-tag">
              <span className="promo-brand-dot"></span> GPS SPINDLES
            </div>
          </div>

          {/* Right Side: Clean High-Contrast Typography & Get Free Quote CTA */}
          <div className="promo-banner-right">
            <FadeUp delay={0.2}>
              <h2 className="promo-banner-title" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                Minimize<br />
                Costs,<br />
                Maximize<br />
                Profits
              </h2>
            </FadeUp>

            <FadeUp delay={0.3}>
              <button
                onClick={() => onNavigate && onNavigate('contact')}
                className="promo-banner-btn"
              >
                <span className="promo-btn-text">Get Free Quote</span>
                <span className="promo-btn-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </span>
              </button>
            </FadeUp>
          </div>
        </div>
      </ScaleUp>
    </div>
  );
}
