import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://hustlstack.com'),
  title: {
    default: 'HustlStack — Digital Growth Partner | Websites, WhatsApp & Marketing',
    template: '%s | HustlStack',
  },
  description:
    'HustlStack helps local businesses — restaurants, hotels, salons — grow online with professional websites, WhatsApp Business setup, review management, and digital marketing. Fast delivery. Honest pricing. Real results.',
  keywords: [
    'digital marketing agency India',
    'website for restaurant India',
    'WhatsApp Business setup',
    'local business website',
    'review management service',
    'website design India',
    'digital growth partner',
    'business website Rs 8000',
    'Google reviews management',
    'social media marketing India',
  ],
  authors: [{ name: 'HustlStack', url: 'https://hustlstack.com' }],
  creator: 'HustlStack',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://hustlstack.com',
    siteName: 'HustlStack',
    title: 'HustlStack — Grow Your Business Online',
    description:
      'Websites. WhatsApp. Reviews. Marketing. Fast delivery. Honest pricing. Real results.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HustlStack — Digital Growth Partner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HustlStack — Grow Your Business Online',
    description: 'Websites. WhatsApp. Reviews. Marketing. Fast delivery. Honest pricing.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'H3Z2Ff807UU1tIpsNpJcaYJ0CDkFMprnDxsf6SH257w',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://hustlstack.com',
  name: 'HustlStack',
  description:
    'Digital growth agency helping local businesses grow online with websites, WhatsApp setup, review management and digital marketing.',
  url: 'https://hustlstack.com',
  email: 'hustlstack.team@gmail.com',
  sameAs: [
    'https://instagram.com/hustlstack',
    'https://linkedin.com/company/hustlstack',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  priceRange: '₹₹',
  serviceType: [
    'Website Design',
    'WhatsApp Business Setup',
    'Review Management',
    'Digital Marketing',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Website / Landing Page' },
        price: '8000',
        priceCurrency: 'INR',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'WhatsApp Business Setup' },
        price: '999',
        priceCurrency: 'INR',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Review Management' },
        price: '1999',
        priceCurrency: 'INR',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Digital Marketing' },
        price: '5000',
        priceCurrency: 'INR',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
