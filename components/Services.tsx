"use client";

import { useScrollReveal } from "./useScrollReveal";
import {
  Globe,
  MessageCircle,
  Star,
  TrendingUp,
  ArrowRight,
  Clock,
  CheckCircle2,
} from "lucide-react";

const WHATSAPP_URL = `https://wa.me/91XXXXXXXXXX?text=Hi%20HustlStack!%20I%27m%20interested%20in%20your%20services.`;

const services = [
  {
    icon: Globe,
    name: "Website / Landing Page",
    price: "₹8,000",
    unit: "One Time",
    tag: null,
    delivery: "48 hours",
    desc: "Professional website that brings customers from Google. Mobile-friendly, fast, and built to convert.",
    features: [
      "Professional design",
      "Mobile friendly",
      "Contact form",
      "SEO optimised",
      "Google ready",
    ],
    featured: false,
  },
  {
    icon: MessageCircle,
    name: "WhatsApp Business Setup",
    price: "₹999",
    unit: "One Time",
    tag: "Most Affordable",
    delivery: "24 hours",
    desc: "Complete professional WhatsApp — catalog, auto replies, QR code, and business profile. Done fast.",
    features: [
      "Full profile setup",
      "Auto replies",
      "Product catalog",
      "QR code + link",
      "Quick replies",
    ],
    featured: false,
  },
  {
    icon: Star,
    name: "Review Management",
    price: "₹1,999",
    unit: "/month",
    tag: "Most Popular",
    delivery: "Reply in 2 hrs",
    desc: "We reply to all your Google and Zomato reviews professionally on your behalf, every single day.",
    features: [
      "Google + Zomato",
      "Replied in 2 hrs",
      "Weekly report",
      "All platforms",
      "Professional tone",
    ],
    featured: true,
  },
  {
    icon: TrendingUp,
    name: "Digital Marketing",
    price: "₹5,000",
    unit: "/month",
    tag: null,
    delivery: "Monthly reports",
    desc: "Social media, SEO and Google Ads that bring real paying customers to your business every month.",
    features: [
      "Social media posts",
      "SEO setup",
      "Monthly analytics",
      "WhatsApp support",
      "Google Ads",
    ],
    featured: false,
  },
];

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      id="services"
      className="relative py-28 px-6"
      style={{ background: "var(--hs-black-2)" }}
    >
      {/* BG glow */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 reveal">
          <span className="section-label">Our Services</span>
        </div>
        <div
          className="text-center mb-6 reveal"
          style={{ transitionDelay: "0.1s" }}
        >
          <h2
            className="font-display font-extrabold"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Everything your business
            <br />
            needs to{" "}
            <span
              style={{
                background: "linear-gradient(90deg, var(--hs-cyan), #7DF9FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              grow online.
            </span>
          </h2>
        </div>
        <p
          className="text-center reveal"
          style={{
            color: "var(--hs-text)",
            fontSize: "1.05rem",
            maxWidth: 520,
            margin: "0 auto 64px",
            transitionDelay: "0.15s",
          }}
        >
          All services come with WhatsApp support. Cancel anytime. No contracts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.name}
                className={`hs-card reveal flex flex-col p-6 ${svc.featured ? "pricing-featured" : ""}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="flex items-center justify-center w-11 h-11 rounded-xl"
                    style={{
                      background: svc.featured
                        ? "rgba(0,212,255,0.15)"
                        : "rgba(0,212,255,0.08)",
                      border: "1px solid rgba(0,212,255,0.2)",
                    }}
                  >
                    <Icon size={20} style={{ color: "var(--hs-cyan)" }} />
                  </div>
                  {svc.tag && <span className="tag-featured">{svc.tag}</span>}
                </div>

                <h3
                  className="font-display font-bold mb-2"
                  style={{
                    fontSize: "1rem",
                    color: "var(--hs-white)",
                    lineHeight: 1.3,
                  }}
                >
                  {svc.name}
                </h3>
                <p
                  style={{
                    color: "var(--hs-text)",
                    fontSize: "0.85rem",
                    lineHeight: 1.6,
                    marginBottom: 20,
                    flexGrow: 1,
                  }}
                >
                  {svc.desc}
                </p>

                {/* Delivery */}
                <div
                  className="flex items-center gap-2 mb-5"
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 10,
                    color: "var(--hs-cyan)",
                    letterSpacing: "0.08em",
                  }}
                >
                  <Clock size={10} />
                  {svc.delivery}
                </div>

                {/* Features */}
                <div className="flex flex-col gap-2 mb-6">
                  {svc.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle2
                        size={13}
                        style={{ color: "var(--hs-cyan)", minWidth: 13 }}
                      />
                      <span
                        style={{ color: "var(--hs-text)", fontSize: "0.8rem" }}
                      >
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div
                  className="hs-divider mb-5"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--hs-border), transparent)",
                  }}
                />
                <div className="flex items-end justify-between">
                  <div className="flex flex-col items-start">
                    <span
                      className="font-display font-extrabold"
                      style={{
                        fontSize: "1.5rem",
                        color: svc.featured
                          ? "var(--hs-cyan)"
                          : "var(--hs-white)",
                        lineHeight: 1,
                      }}
                    >
                      {svc.price}
                    </span>
                    <span
                      style={{
                        color: "var(--hs-text)",
                        fontSize: "0.8rem",
                        marginTop: 2,
                      }}
                    >
                      {svc.unit}
                    </span>
                  </div>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ padding: "8px 14px", fontSize: "0.8rem" }}
                  >
                    Get Started <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
