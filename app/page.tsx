import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Problem from '@/components/Problem';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import Transformation from '@/components/Transformation';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import WhyUs from '@/components/WhyUs';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <>
      <Cursor />
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <AboutUs />
        <Services />
        <Transformation />
        <HowItWorks />
        <Pricing />
        <WhyUs />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
