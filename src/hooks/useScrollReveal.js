import { useEffect } from 'react';

export default function useScrollReveal(dependencies = []) {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Optional: keep observing if we want reverse animations, or unobserve for performance
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll(
      '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-reveal-text, .stagger-child'
    );

    elementsToReveal.forEach((el) => observer.observe(el));

    return () => {
      elementsToReveal.forEach((el) => observer.unobserve(el));
    };
  }, dependencies);
}
