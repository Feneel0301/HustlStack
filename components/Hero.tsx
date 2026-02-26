'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const WHATSAPP_URL = `https://wa.me/91XXXXXXXXXX?text=Hi%20HustlStack!%20I%27d%20like%20a%20free%20consultation.`;

export default function Hero() {
  const orbRef1 = useRef<HTMLDivElement>(null);
  const orbRef2 = useRef<HTMLDivElement>(null);
  const orbRef3 = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (orbRef1.current) orbRef1.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      if (orbRef2.current) orbRef2.current.style.transform = `translateY(${scrollY * 0.18}px)`;
      if (orbRef3.current) orbRef3.current.style.transform = `translateY(${scrollY * 0.22}px)`;
    };

    const handleMouse = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xFrac = (clientX / window.innerWidth - 0.5) * 2;
      const yFrac = (clientY / window.innerHeight - 0.5) * 2;
      if (orbRef1.current) {
        orbRef1.current.style.marginLeft = `${xFrac * 20}px`;
        orbRef1.current.style.marginTop = `${yFrac * 20}px`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
      style={{ background: 'var(--hs-black)' }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial fade on grid */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, var(--hs-black) 80%)',
        }}
      />

      {/* Orb 1 — main cyan */}
      <div
        ref={orbRef1}
        className="hero-orb"
        style={{
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(0,212,255,0.18) 0%, transparent 70%)',
          top: '5%',
          left: '20%',
          transition: 'margin 0.3s ease',
        }}
      />

      {/* Orb 2 — accent purple */}
      <div
        ref={orbRef2}
        className="hero-orb"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(120,0,255,0.12) 0%, transparent 70%)',
          bottom: '10%',
          right: '10%',
        }}
      />

      {/* Orb 3 — small cyan right */}
      <div
        ref={orbRef3}
        className="hero-orb"
        style={{
          width: 250,
          height: 250,
          background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)',
          top: '40%',
          right: '5%',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 mb-8"
          style={{
            background: 'rgba(0,212,255,0.06)',
            border: '1px solid rgba(0,212,255,0.2)',
            borderRadius: 100,
            padding: '6px 16px',
            animation: 'fadeSlideDown 0.8s ease forwards',
          }}
        >
          <Zap size={12} style={{ color: 'var(--hs-cyan)' }} />
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 11,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--hs-cyan)',
            }}
          >
            Digital Growth Partner
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="font-display font-extrabold leading-none mb-6"
          style={{
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            letterSpacing: '-0.03em',
            animation: 'fadeSlideUp 0.9s ease 0.1s both',
          }}
        >
          We Grow Your
          <br />
          <span
            style={{
              background: 'linear-gradient(90deg, var(--hs-cyan) 0%, #7DF9FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: 'none',
              display: 'inline-block',
            }}
          >
            Business Online.
          </span>
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            color: 'var(--hs-text)',
            maxWidth: 600,
            margin: '0 auto 16px',
            lineHeight: 1.6,
            animation: 'fadeSlideUp 0.9s ease 0.2s both',
            fontFamily: 'var(--font-body)',
          }}
        >
          Websites. WhatsApp. Reviews. Marketing.
        </p>
        <p
          style={{
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            color: 'var(--hs-text)',
            maxWidth: 500,
            margin: '0 auto 48px',
            lineHeight: 1.6,
            animation: 'fadeSlideUp 0.9s ease 0.25s both',
            opacity: 0.7,
          }}
        >
          Fast delivery. Honest pricing. Real results.
        </p>

        {/* CTA row */}
        <div
          className="flex flex-wrap items-center justify-center gap-4"
          style={{ animation: 'fadeSlideUp 0.9s ease 0.35s both' }}
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '1rem', padding: '16px 36px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Get Free Consultation
          </a>
          <button
            className="btn-outline"
            style={{ fontSize: '1rem', padding: '15px 36px' }}
            onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Services <ArrowRight size={16} />
          </button>
        </div>

        {/* Stats row */}
        <div
          className="flex flex-wrap items-center justify-center gap-12 mt-20"
          style={{ animation: 'fadeSlideUp 0.9s ease 0.5s both' }}
        >
          {[
            { value: '48h', label: 'Avg. Delivery' },
            { value: '6+', label: 'Countries Served' },
            { value: '100%', label: 'Satisfaction Guarantee' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-display font-extrabold"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  color: 'var(--hs-cyan)',
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--hs-text)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          className="flex flex-col items-center gap-2 mt-16"
          style={{ animation: 'fadeIn 1s ease 1s both' }}
        >
          <div
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 10,
              letterSpacing: '0.15em',
              color: 'rgba(160,160,184,0.5)',
              textTransform: 'uppercase',
            }}
          >
            Scroll to explore
          </div>
          <div
            style={{
              width: 1,
              height: 60,
              background: 'linear-gradient(to bottom, var(--hs-cyan), transparent)',
              animation: 'pulse 2s infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
