"use client";

import { useScrollReveal } from "./useScrollReveal";
import { CheckCircle2, ArrowRight } from "lucide-react";

const WHATSAPP_URL = `https://wa.me/91XXXXXXXXXX?text=Hi%20HustlStack!%20I%27m%20interested%20in%20your%20pricing.`;

const plans = [
  {
    name: "Website",
    price: "₹8,000",
    period: "+",
    type: "One Time",
    features: [
      "Professional design",
      "Mobile friendly",
      "Contact form",
      "Delivered in 48h",
      "Free revisions",
    ],
    featured: false,
    cta: "Get Website",
  },
  {
    name: "WhatsApp Setup",
    price: "₹1,999",
    period: "",
    type: "One Time",
    features: [
      "Full profile setup",
      "Auto replies",
      "Product catalog",
      "QR code + link",
      "Done in 24h",
    ],
    featured: false,
    cta: "Get Setup",
  },
  {
    name: "Review Management",
    price: "₹1,999",
    period: "/mo",
    type: "Monthly",
    features: [
      "Google + Zomato",
      "Replied within 2hrs",
      "Weekly report",
      "All platforms",
      "Professional tone",
    ],
    featured: true,
    cta: "Start Managing",
  },
  {
    name: "Digital Marketing",
    price: "₹5,000",
    period: "/mo",
    type: "Monthly",
    features: [
      "Social media posts",
      "SEO setup",
      "Monthly analytics",
      "WhatsApp support",
      "Google Ads",
    ],
    featured: false,
    cta: "Start Growing",
  },
];

export default function Pricing() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      id="pricing"
      className="relative py-28 px-6"
      style={{ background: "var(--hs-black)" }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 700,
          height: 400,
          background:
            "radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-6 reveal">
          <span className="section-label">Pricing</span>
        </div>
        <div
          className="text-center mb-4 reveal"
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
            Honest prices.
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, var(--hs-cyan), #7DF9FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              No hidden charges. Ever.
            </span>
          </h2>
        </div>
        <p
          className="text-center reveal"
          style={{
            color: "var(--hs-text)",
            maxWidth: 480,
            margin: "0 auto 64px",
            fontSize: "1.05rem",
            transitionDelay: "0.15s",
          }}
        >
          Cancel anytime. No long-term contracts. WhatsApp support included with
          all plans.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`hs-card reveal flex flex-col p-7 ${plan.featured ? "pricing-featured" : ""}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {plan.featured && (
                <div className="mb-4">
                  <span className="tag-featured">Most Popular</span>
                </div>
              )}

              <div
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--hs-text)",
                  marginBottom: 8,
                }}
              >
                {plan.type}
              </div>

              <h3
                className="font-display font-bold mb-4"
                style={{ fontSize: "1.15rem", color: "var(--hs-white)" }}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div className="flex flex-col items-start mb-6">
                <span
                  className="font-display font-extrabold"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 2.4rem)",
                    color: plan.featured ? "var(--hs-cyan)" : "var(--hs-white)",
                    lineHeight: 1,
                  }}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span
                    style={{
                      color: "var(--hs-text)",
                      fontSize: "0.9rem",
                      marginTop: 2,
                    }}
                  >
                    {plan.period}
                  </span>
                )}
              </div>

              {/* Divider */}
              <div className="hs-divider mb-6" />

              {/* Features */}
              <div className="flex flex-col gap-3 flex-grow mb-8">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle2
                      size={14}
                      style={{ color: "var(--hs-cyan)", minWidth: 14 }}
                    />
                    <span
                      style={{ color: "var(--hs-text)", fontSize: "0.85rem" }}
                    >
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  plan.featured
                    ? "btn-primary justify-center"
                    : "btn-outline justify-center"
                }
                style={{ fontSize: "0.9rem", width: "100%" }}
              >
                {plan.cta} <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Pay after you're happy note */}
        <div
          className="reveal mt-12 text-center"
          style={{
            background: "rgba(0,212,255,0.05)",
            border: "1px solid rgba(0,212,255,0.15)",
            borderRadius: 12,
            padding: "20px 32px",
            maxWidth: 600,
            margin: "48px auto 0",
            transitionDelay: "0.4s",
          }}
        >
          <p
            style={{
              color: "var(--hs-white)",
              fontSize: "0.95rem",
              lineHeight: 1.6,
            }}
          >
            🔒 <strong>Pay After You're Happy</strong> — We don't take full
            payment upfront. You see the work first. Pay only when satisfied.
          </p>
        </div>
      </div>
    </section>
  );
}
