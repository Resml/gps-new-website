import React from 'react';
import { motion } from 'framer-motion';

// Fade Up Animation Component
export function FadeUp({ children, delay = 0, duration = 0.6, className = '', style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// Scale Up Animation Component (ideal for images, CAD drawings & cards)
export function ScaleUp({ children, delay = 0, duration = 0.7, className = '', style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// Text Blur & Highlight Reveal Component
export function TextReveal({ children, delay = 0, duration = 0.7, className = '', style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(8px)', y: 15 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// Stagger Container Component for Grids
export function StaggerContainer({ children, delayChildren = 0.1, staggerChildren = 0.15, className = '', style = {} }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren,
            staggerChildren
          }
        }
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// Item inside Stagger Container
export function StaggerItem({ children, className = '', style = {} }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25, scale: 0.96 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
        }
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// Horizontal Slide-In Left Component
export function SlideInLeft({ children, delay = 0, duration = 0.6, className = '', style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// Horizontal Slide-In Right Component
export function SlideInRight({ children, delay = 0, duration = 0.6, className = '', style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
