export default function Marquee() {
  const items = [
    'Website Design',
    'WhatsApp Business',
    'Review Management',
    'Digital Marketing',
    'Google Rankings',
    'Social Media',
    'Brand Identity',
    '48hr Delivery',
    'Honest Pricing',
    'Real Results',
  ];

  const doubled = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden py-5"
      style={{
        background: 'var(--hs-black-2)',
        borderTop: '1px solid var(--hs-border)',
        borderBottom: '1px solid var(--hs-border)',
      }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 mx-6"
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 12,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: i % 2 === 0 ? 'var(--hs-text)' : 'var(--hs-cyan)',
              whiteSpace: 'nowrap',
            }}
          >
            {item}
            <span style={{ color: 'var(--hs-border)', fontSize: 18 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
