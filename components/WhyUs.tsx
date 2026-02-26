'use client';

import { useScrollReveal } from './useScrollReveal';
import { Zap, Heart, Users, MessageSquare, BarChart3, Package, ArrowRight } from 'lucide-react';

const WHATSAPP_URL = `https://wa.me/91XXXXXXXXXX?text=Hi%20HustlStack!%20I%27d%20like%20to%20get%20started.`;

const reasons = [
  {
    icon: Zap,
    title: 'Lightning Fast Delivery',
    desc: 'Website in 48 hours. WhatsApp setup in 24 hours. We do not make you wait weeks like other agencies.',
  },
  {
    icon: Heart,
    title: 'Pay After You Are Happy',
    desc: 'We don\'t take full payment upfront. You see the work first. Pay only when you\'re 100% satisfied.',
  },
  {
    icon: Users,
    title: 'We Understand Local Business',
    desc: 'We know how restaurants, salons and hotels work. Our solutions are built for you — not generic templates.',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Support Always',
    desc: 'No email tickets. No waiting in queues. Message us anytime on WhatsApp and we respond fast.',
  },
  {
    icon: BarChart3,
    title: 'Real Results, Not Promises',
    desc: 'We show you monthly reports with real numbers — traffic, reviews replied, leads generated. Transparent always.',
  },
  {
    icon: Package,
    title: 'Everything Under One Roof',
    desc: 'Website, WhatsApp, reviews, marketing — one team handles everything. No running around to multiple vendors.',
  },
];

export default function WhyUs() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      id="why-us"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'var(--hs-black-2)' }}
    >
      {/* BG effects */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 800,
          height: 400,
          background: 'radial-gradient(ellipse, rgba(0,212,255,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-6 reveal">
          <span className="section-label">Why HustlStack</span>
        </div>
        <div className="text-center mb-6 reveal" style={{ transitionDelay: '0.1s' }}>
          <h2
            className="font-display font-extrabold"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            Why businesses choose{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, var(--hs-cyan), #7DF9FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              us
            </span>{' '}
            over others.
          </h2>
        </div>
        <p
          className="text-center reveal"
          style={{ color: 'var(--hs-text)', maxWidth: 480, margin: '0 auto 64px', fontSize: '1.05rem', transitionDelay: '0.15s' }}
        >
          We're not just another agency. We're your growth partner — available, honest, and fast.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="hs-card reveal p-7"
                style={{ transitionDelay: `${i * 0.09}s` }}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl mb-5"
                  style={{
                    background: 'rgba(0,212,255,0.08)',
                    border: '1px solid rgba(0,212,255,0.15)',
                  }}
                >
                  <Icon size={22} style={{ color: 'var(--hs-cyan)' }} />
                </div>
                <h3
                  className="font-display font-bold mb-3"
                  style={{ fontSize: '1.1rem', color: 'var(--hs-white)' }}
                >
                  {r.title}
                </h3>
                <p style={{ color: 'var(--hs-text)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                  {r.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Final CTA banner */}
        <div
          className="reveal rounded-2xl p-10 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(0,212,255,0.02) 100%)',
            border: '1px solid rgba(0,212,255,0.2)',
            transitionDelay: '0.55s',
          }}
        >
          <h3
            className="font-display font-extrabold mb-4"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
          >
            Ready to Grow{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, var(--hs-cyan), #7DF9FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Your Business?
            </span>
          </h3>
          <p style={{ color: 'var(--hs-text)', marginBottom: 32, fontSize: '1.05rem' }}>
            Contact us today — free consultation, no pressure, no commitment.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '1rem', padding: '16px 40px' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us Now
            </a>
            <a
              href="mailto:hustlstack.team@gmail.com"
              className="btn-outline"
              style={{ fontSize: '1rem', padding: '15px 40px' }}
            >
              Send Email <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
