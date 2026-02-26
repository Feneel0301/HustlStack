'use client';

import { useEffect, useRef } from 'react';

export function useScrollReveal(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
    );

    // Observe root and all children with reveal classes
    const revealEls = el.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (el.classList.contains('reveal') || el.classList.contains('reveal-left') || el.classList.contains('reveal-right')) {
      observer.observe(el);
    }
    revealEls.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return ref;
}
