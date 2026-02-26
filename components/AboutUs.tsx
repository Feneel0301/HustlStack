'use client';

import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from './useScrollReveal';
import { Rocket, Users, Globe2, Shield } from 'lucide-react';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const pillars = [
  {
    icon: Rocket,
    title: 'Build Fast.',
    desc: 'We don\'t make you wait weeks. Your website ships in 48 hours, WhatsApp setup in 24.',
  },
  {
    icon: Shield,
    title: 'Grow Smart.',
    desc: 'Data-driven strategies tailored specifically to restaurants, hotels, and salons.',
  },
  {
    icon: Users,
    title: 'Stay Honest.',
    desc: 'No upfront full payment. You see the work first. Pay only when you\'re satisfied.',
  },
  {
    icon: Globe2,
    title: 'Hustle Hard.',
    desc: 'WhatsApp support always available. No email queues. No waiting. Real people, real results.',
  },
];

export default function AboutUs() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-28 px-6"
      style={{ background: 'var(--hs-black)' }}
    >
      {/* Cyan glow backdrop */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 800,
          height: 400,
          background: 'radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="reveal mb-6">
              <span className="section-label">Who We Are</span>
            </div>
            <h2
              className="font-display font-extrabold reveal mb-6"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                transitionDelay: '0.1s',
              }}
            >
              Your{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, var(--hs-cyan), #7DF9FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Digital Growth
              </span>
              <br />
              Partner.
            </h2>
            <p
              className="reveal"
              style={{
                color: 'var(--hs-text)',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                marginBottom: 24,
                transitionDelay: '0.2s',
              }}
            >
              We are a GenZ digital agency that helps local businesses — restaurants, hotels, salons — grow their customer base using websites, WhatsApp setup, review management and digital marketing.
            </p>
            <p
              className="reveal"
              style={{
                color: 'var(--hs-text)',
                fontSize: '1rem',
                lineHeight: 1.7,
                transitionDelay: '0.25s',
              }}
            >
              We understand how local businesses operate. Our solutions aren't templates — they're built specifically for your industry, your customers, your city.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 reveal" style={{ transitionDelay: '0.35s' }}>
              {[
                { value: 48, suffix: 'h', label: 'Avg. Delivery' },
                { value: 6, suffix: '+', label: 'Countries' },
                { value: 100, suffix: '%', label: 'Satisfaction' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="font-display font-extrabold"
                    style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--hs-cyan)', lineHeight: 1, marginBottom: 4 }}
                  >
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: 10,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--hs-text)',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="hs-card reveal p-6"
                  style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
                >
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-lg mb-4"
                    style={{
                      background: 'rgba(0,212,255,0.1)',
                      border: '1px solid rgba(0,212,255,0.2)',
                    }}
                  >
                    <Icon size={18} style={{ color: 'var(--hs-cyan)' }} />
                  </div>
                  <h3
                    className="font-display font-bold mb-2"
                    style={{ fontSize: '1.05rem', color: 'var(--hs-white)' }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ color: 'var(--hs-text)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
