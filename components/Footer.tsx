'use client';
import { Mail, Instagram, Linkedin } from 'lucide-react';

const WHATSAPP_URL = `https://wa.me/91XXXXXXXXXX?text=Hi%20HustlStack!`;

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Why Us', href: '#why-us' },
];

const services = [
  'Website Design',
  'WhatsApp Business Setup',
  'Review Management',
  'Digital Marketing',
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--hs-black)',
        borderTop: '1px solid var(--hs-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-display font-extrabold text-2xl tracking-tight mb-4">
              <span className="text-white">Hustl</span>
              <span style={{ color: 'var(--hs-cyan)' }}>Stack</span>
            </div>
            <p style={{ color: 'var(--hs-text)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 340, marginBottom: 20 }}>
              Your digital growth partner. We help local businesses grow online with websites, WhatsApp setup, review management, and digital marketing.
            </p>
            <p
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 11,
                letterSpacing: '0.12em',
                color: 'var(--hs-cyan)',
                textTransform: 'uppercase',
              }}
            >
              Build Fast. Grow Smart. Hustle Hard.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              {[
                { icon: Instagram, href: 'https://instagram.com/hustlstack', label: 'Instagram' },
                { icon: Linkedin, href: 'https://linkedin.com/company/hustlstack', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:hustlstack.team@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg"
                  style={{
                    background: 'var(--hs-card)',
                    border: '1px solid var(--hs-border)',
                    color: 'var(--hs-text)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--hs-cyan)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--hs-cyan)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--hs-border)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--hs-text)';
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 10,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--hs-cyan)',
                marginBottom: 20,
              }}
            >
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{ color: 'var(--hs-text)', fontSize: '0.9rem', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--hs-white)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--hs-text)')}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 10,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--hs-cyan)',
                marginBottom: 20,
              }}
            >
              Services
            </h4>
            <div className="flex flex-col gap-3">
              {services.map((s) => (
                <span key={s} style={{ color: 'var(--hs-text)', fontSize: '0.9rem' }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hs-divider mb-8" />

        {/* Bottom row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p style={{ color: 'rgba(160,160,184,0.5)', fontSize: '0.8rem', fontFamily: 'JetBrains Mono, monospace' }}>
            © {new Date().getFullYear()} HustlStack. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a
                key={item}
                href="#"
                style={{ color: 'rgba(160,160,184,0.5)', fontSize: '0.8rem', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--hs-text)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(160,160,184,0.5)')}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
