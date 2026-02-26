'use client';

import { useScrollReveal } from './useScrollReveal';
import { MessageSquare, Target, Hammer, TrendingUp } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'You Contact Us',
    desc: 'WhatsApp or call us. Tell us what your business needs. Free consultation — no pressure.',
  },
  {
    num: '02',
    icon: Target,
    title: 'We Plan Together',
    desc: 'We understand your business goals and suggest the best service combination for you.',
  },
  {
    num: '03',
    icon: Hammer,
    title: 'We Build & Deliver',
    desc: 'Our team builds everything. Website in 48 hours. WhatsApp setup in 24 hours. Done.',
  },
  {
    num: '04',
    icon: TrendingUp,
    title: 'Your Business Grows',
    desc: 'More customers find you online. More inquiries. More revenue. Monthly reports prove it.',
  },
];

export default function HowItWorks() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'var(--hs-black-2)' }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, var(--hs-black-2) 80%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-6 reveal">
          <span className="section-label">How It Works</span>
        </div>
        <div className="text-center mb-6 reveal" style={{ transitionDelay: '0.1s' }}>
          <h2
            className="font-display font-extrabold"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            Simple.{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, var(--hs-cyan), #7DF9FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Fast.
            </span>{' '}
            Reliable.
          </h2>
        </div>
        <p
          className="text-center reveal"
          style={{ color: 'var(--hs-text)', maxWidth: 480, margin: '0 auto 72px', fontSize: '1.05rem', transitionDelay: '0.15s' }}
        >
          From first contact to live results — we make the process effortless for you.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="relative reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
                {/* Connector line for desktop */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-10 left-full w-full h-px z-0"
                    style={{
                      background: 'linear-gradient(90deg, rgba(0,212,255,0.4), transparent)',
                      transform: 'translateX(-20px)',
                      width: 'calc(100% - 60px)',
                    }}
                  />
                )}

                <div className="hs-card p-7 relative z-10 h-full">
                  {/* Step number */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-xl"
                      style={{
                        background: 'rgba(0,212,255,0.1)',
                        border: '1px solid rgba(0,212,255,0.3)',
                      }}
                    >
                      <Icon size={22} style={{ color: 'var(--hs-cyan)' }} />
                    </div>
                    <span
                      className="font-display font-extrabold"
                      style={{
                        fontSize: '2.5rem',
                        color: 'rgba(0,212,255,0.15)',
                        lineHeight: 1,
                        fontFamily: 'Syne, sans-serif',
                      }}
                    >
                      {step.num}
                    </span>
                  </div>

                  <h3
                    className="font-display font-bold mb-3"
                    style={{ fontSize: '1.1rem', color: 'var(--hs-white)' }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ color: 'var(--hs-text)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
