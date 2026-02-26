'use client';

import { useScrollReveal } from './useScrollReveal';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

const before = [
  'No website — invisible on Google',
  'Personal WhatsApp looks unprofessional',
  'Negative reviews with no reply',
  'No social media presence',
  'Losing customers to competitors daily',
  'Zero online marketing',
];

const after = [
  'Professional website ranking on Google',
  'WhatsApp Business with catalog & auto replies',
  'Every review replied within 2 hours',
  'Active social media bringing daily customers',
  'Online presence stronger than competitors',
  'Monthly reports showing real growth',
];

const WHATSAPP_URL = `https://wa.me/91XXXXXXXXXX?text=Hi%20HustlStack!%20I%27d%20like%20a%20free%20consultation.`;

export default function Transformation() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      id="transformation"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'var(--hs-black)' }}
    >
      {/* BG orbs */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(255,50,50,0.06) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 reveal">
          <span className="section-label">The Transformation</span>
        </div>
        <div className="text-center mb-16 reveal" style={{ transitionDelay: '0.1s' }}>
          <h2
            className="font-display font-extrabold"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            What changes after working
            <br />
            with{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, var(--hs-cyan), #7DF9FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              HustlStack.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Before */}
          <div
            className="reveal rounded-2xl p-8 transform-col-before"
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,60,60,0.15)', border: '1px solid rgba(255,60,60,0.3)' }}
              >
                <X size={16} color="#FF4444" />
              </div>
              <span
                className="font-display font-bold"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 11,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#FF6060',
                }}
              >
                Before HustlStack
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {before.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                    style={{ background: 'rgba(255,60,60,0.1)', border: '1px solid rgba(255,60,60,0.2)' }}
                  >
                    <X size={10} color="#FF4444" />
                  </div>
                  <span style={{ color: 'var(--hs-text)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div
            className="reveal rounded-2xl p-8 transform-col-after"
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(0,212,255,0.15)', border: '1px solid rgba(0,212,255,0.3)' }}
              >
                <CheckCircle2 size={16} color="var(--hs-cyan)" />
              </div>
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 11,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--hs-cyan)',
                }}
              >
                After HustlStack
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {after.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={20} style={{ color: 'var(--hs-cyan)', minWidth: 20, marginTop: 1 }} />
                  <span style={{ color: 'var(--hs-white)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA below */}
        <div className="text-center mt-12 reveal" style={{ transitionDelay: '0.3s' }}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '1rem', padding: '16px 40px' }}>
            Start My Transformation <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
