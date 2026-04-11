/* ============================================================
   VYBREX STUDIOS About Section — Dark Forge Futurism
   Split layout: text left, visual right
   ============================================================ */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Target, Cpu, Music } from "lucide-react";

const PILLARS = [
  {
    icon: Cpu,
    title: "AI-First Thinking",
    desc: "We harness cutting-edge AI tools to amplify human creativity — not replace it.",
    color: "oklch(0.55 0.28 295)",
  },
  {
    icon: Target,
    title: "Strategy-Driven",
    desc: "Every creative decision is backed by data, market insight, and brand strategy.",
    color: "oklch(0.78 0.18 200)",
  },
  {
    icon: Music,
    title: "Personalized Sound",
    desc: "Custom music crafted for your brand's exact emotion, audience, and message.",
    color: "oklch(0.68 0.22 35)",
  },
  {
    icon: Zap,
    title: "Full-Spectrum Creative",
    desc: "From logo to commercial to podcast — one agency handles your entire creative universe.",
    color: "oklch(0.82 0.18 85)",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "oklch(0.09 0.018 285)" }}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at top right, oklch(0.55 0.28 295 / 0.4), transparent 60%)",
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10" style={{ background: "oklch(0.55 0.28 295)" }} />
                <span
                  className="text-xs font-semibold tracking-[0.25em] uppercase"
                  style={{ color: "oklch(0.55 0.28 295)", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Who We Are
                </span>
              </div>

              <h2
                className="text-4xl md:text-5xl font-bold leading-tight mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "white" }}
              >
                We Don't Just Keep Up
                <br />
                <span className="text-gradient-violet-cyan">With the Future.</span>
                <br />
                We Build It.
              </h2>

              <p
                className="text-base md:text-lg leading-relaxed mb-6"
                style={{ color: "oklch(0.68 0.02 285)", fontFamily: "'Inter', sans-serif" }}
              >
                VYBREX STUDIOS is where creativity meets cutting-edge artificial intelligence.
                Founded by <strong style={{ color: "oklch(0.78 0.18 200)" }}>The Original T.I.</strong>,
                we help entrepreneurs, small businesses, large corporations, and artists build
                iconic brands — from custom logos and cinematic commercials to
                personalized music and data-driven marketing strategies.
              </p>

              <p
                className="text-base leading-relaxed mb-10"
                style={{ color: "oklch(0.58 0.02 285)", fontFamily: "'Inter', sans-serif" }}
              >
                We believe every brand has a unique frequency — a sound, a visual identity,
                a story that resonates. Our mission is to find that frequency and amplify it
                across every channel, platform, and medium.
              </p>

              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="nex-btn-primary px-7 py-3 rounded text-sm"
              >
                Work With Us
              </button>
            </motion.div>
          </div>

          {/* Right: Visual + Pillars */}
          <div className="space-y-6">
            {/* About image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative rounded-lg overflow-hidden"
              style={{ border: "1px solid oklch(0.22 0.04 285)" }}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030179726/DJHVYpqtvzVwWopENeLFJP/about_visual_cc08980d.jpg"
                alt="VYBREX STUDIOS Creative AI"
                className="w-full h-64 object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, oklch(0.09 0.018 285 / 0.7), transparent)",
                }}
              />
              <div className="absolute bottom-4 left-4">
                <span
                  className="text-xs tracking-widest font-semibold"
                  style={{ color: "oklch(0.78 0.18 200)", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  AI × CREATIVITY × STRATEGY
                </span>
              </div>
            </motion.div>

            {/* Pillars grid */}
            <div className="grid grid-cols-2 gap-4">
              {PILLARS.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="nex-card p-4 rounded-lg"
                  >
                    <Icon
                      size={20}
                      className="mb-2"
                      style={{ color: pillar.color }}
                    />
                    <h4
                      className="text-sm font-semibold mb-1 text-white"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {pillar.title}
                    </h4>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "oklch(0.58 0.02 285)", fontFamily: "'Inter', sans-serif" }}
                    >
                      {pillar.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
