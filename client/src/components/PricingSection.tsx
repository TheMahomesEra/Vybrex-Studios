/* ============================================================
   VYBREX STUDIOS Pricing Section — Dark Forge Futurism
   Three-tier pricing: Starter, Growth, Enterprise
   ============================================================ */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Zap } from "lucide-react";
import { toast } from "sonner";

const PLANS = [
  {
    name: "Starter",
    price: "Custom",
    subtitle: "Perfect for solo creators & small businesses",
    color: "oklch(0.78 0.18 200)",
    featured: false,
    features: [
      "Brand identity (logo + colors)",
      "1 social media commercial",
      "Custom music track (1 track)",
      "Basic digital ad campaign",
      "30-day strategy roadmap",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "Custom",
    subtitle: "For growing businesses ready to scale",
    color: "oklch(0.55 0.28 295)",
    featured: true,
    badge: "Most Popular",
    features: [
      "Full brand identity system",
      "3 video productions / commercials",
      "Custom music package (5 tracks)",
      "Podcast production & branding",
      "Multi-platform ad campaigns",
      "90-day marketing strategy",
      "Priority support",
      "Monthly strategy calls",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    subtitle: "Full-service for corporations & large brands",
    color: "oklch(0.68 0.22 35)",
    featured: false,
    features: [
      "Complete brand overhaul",
      "Unlimited video productions",
      "Full music library (unlimited tracks)",
      "Ongoing podcast management",
      "AI creative workflow integration",
      "Full digital advertising management",
      "Annual marketing strategy",
      "Dedicated account manager",
      "24/7 priority support",
    ],
  },
];

export default function PricingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="pricing"
      ref={ref}
      className="relative py-24 md:py-32"
      style={{ background: "oklch(0.09 0.018 285)" }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: "radial-gradient(ellipse at top center, oklch(0.55 0.28 295 / 0.3), transparent 60%)",
        }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10" style={{ background: "oklch(0.55 0.28 295)" }} />
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: "oklch(0.55 0.28 295)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Packages
            </span>
            <div className="h-px w-10" style={{ background: "oklch(0.55 0.28 295)" }} />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Invest in Your{" "}
            <span className="text-gradient-violet-cyan">Brand's Future</span>
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "oklch(0.6 0.02 285)", fontFamily: "'Inter', sans-serif" }}
          >
            All packages are custom-quoted based on your specific needs. Contact us to
            get a tailored proposal.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              className={`rounded-xl p-7 relative ${
                plan.featured ? "ring-2" : "nex-card"
              }`}
              style={
                plan.featured
                  ? {
                      background: "oklch(0.13 0.03 295)",
                      border: `2px solid ${plan.color.replace(")", " / 0.6)")}`,
                      boxShadow: `0 0 40px ${plan.color.replace(")", " / 0.2)")}, 0 8px 32px oklch(0 0 0 / 0.4)`,
                    }
                  : {}
              }
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className="flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      background: plan.color,
                      color: "oklch(0.07 0.015 285)",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    <Zap size={10} />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3
                className="text-2xl font-bold mb-1"
                style={{ color: plan.color, fontFamily: "'Orbitron', sans-serif" }}
              >
                {plan.name}
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: "oklch(0.55 0.02 285)", fontFamily: "'Inter', sans-serif" }}
              >
                {plan.subtitle}
              </p>

              <div
                className="text-3xl font-bold text-white mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {plan.price}
                <span
                  className="text-sm font-normal ml-2"
                  style={{ color: "oklch(0.5 0.02 285)" }}
                >
                  — get a quote
                </span>
              </div>

              {/* Divider */}
              <div className="section-divider mb-6" />

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <Check
                      size={15}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: plan.color }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: "oklch(0.7 0.02 285)", fontFamily: "'Inter', sans-serif" }}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className={`w-full py-3 rounded text-sm font-semibold transition-all duration-300 ${
                  plan.featured ? "nex-btn-primary" : "nex-btn-outline"
                }`}
                style={
                  !plan.featured
                    ? {
                        borderColor: `${plan.color.replace(")", " / 0.5)")}`,
                        color: plan.color,
                      }
                    : {}
                }
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
