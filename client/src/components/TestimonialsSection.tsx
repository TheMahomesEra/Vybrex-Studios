/* ============================================================
   VYBREX STUDIOS Testimonials Section — Dark Forge Futurism
   ============================================================ */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "VYBREX STUDIOS completely transformed our brand. The logo, the music, the whole visual identity — it all feels cohesive and premium. We've had more inquiries in 3 months than the entire previous year.",
    name: "Marcus T.",
    role: "Founder, SoundWave Records",
    color: "oklch(0.55 0.28 295)",
  },
  {
    quote:
      "The commercial they produced for our product launch exceeded every expectation. Cinematic quality, on-brand messaging, delivered on time. VYBREX STUDIOS is the real deal.",
    name: "Priya S.",
    role: "CMO, TechLaunch Inc.",
    color: "oklch(0.78 0.18 200)",
  },
  {
    quote:
      "I never thought I'd have custom music for my podcast, but VYBREX STUDIOS made it happen. The intro track alone has gotten more compliments than anything else I've done.",
    name: "DeShawn R.",
    role: "Host, Elevate Podcast",
    color: "oklch(0.82 0.18 85)",
  },
  {
    quote:
      "Their marketing strategy was the game-changer we needed. They understood our audience better than we did and built a roadmap that actually worked.",
    name: "Alicia M.",
    role: "CEO, RetailNova",
    color: "oklch(0.68 0.22 35)",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-24 md:py-32"
      style={{ background: "oklch(0.07 0.015 285)" }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: "radial-gradient(ellipse at center, oklch(0.55 0.28 295 / 0.2), transparent 60%)",
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
            <div className="h-px w-10" style={{ background: "oklch(0.68 0.22 35)" }} />
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: "oklch(0.68 0.22 35)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Client Stories
            </span>
            <div className="h-px w-10" style={{ background: "oklch(0.68 0.22 35)" }} />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            What Our Clients{" "}
            <span className="text-gradient-cyan-coral">Are Saying</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="nex-card rounded-xl p-7 relative"
            >
              <Quote
                size={32}
                className="mb-4 opacity-40"
                style={{ color: t.color }}
              />
              <p
                className="text-base leading-relaxed mb-6 italic"
                style={{ color: "oklch(0.75 0.02 285)", fontFamily: "'Inter', sans-serif" }}
              >
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{
                    background: `${t.color.replace(")", " / 0.15)")}`,
                    border: `1px solid ${t.color.replace(")", " / 0.3)")}`,
                    color: t.color,
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div
                    className="text-sm font-semibold text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "oklch(0.5 0.02 285)", fontFamily: "'Inter', sans-serif" }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 h-[2px] w-full rounded-b-xl opacity-40"
                style={{ background: `linear-gradient(90deg, ${t.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
