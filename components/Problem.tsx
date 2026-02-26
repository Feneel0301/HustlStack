'use client';

import { useScrollReveal } from './useScrollReveal';
import { Globe, MessageCircle, Star } from 'lucide-react';

const problems = [
  {
    icon: Globe,
    title: 'No Website',
    subtitle: 'Invisible on Google',
    desc: 'Customers search online but cannot find you. They discover your competitor instead and never come back.',
    accent: '#FF4444',
    accentLight: 'rgba(255,68,68,0.08)',
    accentBorder: 'rgba(255,68,68,0.15)',
  },
  {
    icon: MessageCircle,
    title: 'Unprofessional WhatsApp',
    subtitle: 'Looks like a side hustle',
    desc: 'Personal WhatsApp numbers kill trust. Customers hesitate to engage with businesses that look unorganised.',
    accent: '#FF8C00',
    accentLight: 'rgba(255,140,0,0.08)',
    accentBorder: 'rgba(255,140,0,0.15)',
  },
  {
    icon: Star,
    title: 'Bad Reviews Ignored',
    subtitle: 'Silent revenue killer',
    desc: 'Negative reviews with no reply silently drive away hundreds of potential customers every single month.',
    accent: '#FF44AA',
    accentLight: 'rgba(255,68,170,0.08)',
    accentBorder: 'rgba(255,68,170,0.15)',
  },
];

export default function Problem() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      id="problem"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'var(--hs-black-2)' }}
    >
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          width: 600,
          height: 300,
          background: 'radial-gradient(ellipse, rgba(255,50,50,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <div className="text-center mb-6 reveal">
          <span className="section-label">The Problem</span>
        </div>

        {/* Heading */}
        <div className="text-center mb-16 reveal" style={{ transitionDelay: '0.1s' }}>
          <h2
            className="font-display font-extrabold"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            Most local businesses are
            <br />
            <span style={{ color: '#FF6060' }}>invisible online.</span>
          </h2>
          <p style={{ color: 'var(--hs-text)', marginTop: 16, fontSize: '1.05rem', maxWidth: 500, margin: '16px auto 0' }}>
            While you're busy running your business, your competitors are capturing every customer who searches online.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="hs-card reveal p-8"
                style={{
                  transitionDelay: `${i * 0.12}s`,
                  background: p.accentLight,
                  borderColor: p.accentBorder,
                }}
              >
                {/* Icon */}
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-xl mb-6"
                  style={{
                    background: `${p.accentLight}`,
                    border: `1px solid ${p.accentBorder}`,
                  }}
                >
                  <Icon size={24} style={{ color: p.accent }} />
                </div>

                <h3
                  className="font-display font-bold mb-2"
                  style={{ fontSize: '1.3rem', color: 'var(--hs-white)' }}
                >
                  {p.title}
                </h3>
                <p
                  className="font-mono text-xs mb-4"
                  style={{ color: p.accent, letterSpacing: '0.08em', textTransform: 'uppercase' }}
                >
                  {p.subtitle}
                </p>
                <p style={{ color: 'var(--hs-text)', lineHeight: 1.65, fontSize: '0.95rem' }}>
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
