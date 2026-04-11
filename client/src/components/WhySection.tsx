/* ============================================================
   VYBREX STUDIOS Why Us + Process Section — Dark Forge Futurism
   ============================================================ */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Lightbulb, Users, Clock, ArrowRight } from "lucide-react";

const WHY_ITEMS = [
  {
    icon: Lightbulb,
    title: "AI-Enhanced, Human-Led",
    desc: "We use the most advanced AI tools available — but every project is guided by human creativity, strategy, and passion.",
    color: "oklch(0.82 0.18 85)",
  },
  {
    icon: Users,
    title: "Built for Every Scale",
    desc: "Whether you're a solo artist, a growing startup, or an established corporation — our services scale to meet your needs.",
    color: "oklch(0.78 0.18 200)",
  },
  {
    icon: Shield,
    title: "One Agency, Zero Gaps",
    desc: "No more juggling five vendors. Branding, music, video, ads, and strategy — all under one roof, perfectly aligned.",
    color: "oklch(0.55 0.28 295)",
  },
  {
    icon: Clock,
    title: "Fast Without Compromise",
    desc: "AI-powered workflows mean faster turnarounds without sacrificing quality. Speed and craft — not a trade-off.",
    color: "oklch(0.68 0.22 35)",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery & Vision",
    desc: "We deep-dive into your brand, goals, audience, and competitive landscape to understand exactly what you need.",
  },
  {
    number: "02",
    title: "Strategy & Blueprint",
    desc: "We craft a tailored creative strategy — from visual identity direction to content roadmap and campaign architecture.",
  },
  {
    number: "03",
    title: "Create & Build",
    desc: "Our team executes with precision — designing, producing, composing, and building every asset to the highest standard.",
  },
  {
    number: "04",
    title: "Launch & Amplify",
    desc: "We deploy your brand across channels, monitor performance, and continuously optimize for maximum impact.",
  },
];

export default function WhySection() {
  const whyRef = useRef(null);
  const processRef = useRef(null);
  const whyInView = useInView(whyRef, { once: true, margin: "-80px" });
  const processInView = useInView(processRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Why VYBREX STUDIOS */}
      <section
        id="why"
        ref={whyRef}
        className="relative py-24 md:py-32"
        style={{ background: "oklch(0.09 0.018 285)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: "radial-gradient(ellipse at bottom left, oklch(0.78 0.18 200 / 0.3), transparent 60%)",
          }}
        />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10" style={{ background: "oklch(0.55 0.28 295)" }} />
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ color: "oklch(0.55 0.28 295)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Why Choose Us
              </span>
              <div className="h-px w-10" style={{ background: "oklch(0.55 0.28 295)" }} />
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              The VYBREX STUDIOS{" "}
              <span className="text-gradient-violet-cyan">Difference</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={whyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="text-center p-6 rounded-xl nex-card"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{
                      background: `${item.color.replace(")", " / 0.12)")}`,
                      border: `1px solid ${item.color.replace(")", " / 0.3)")}`,
                    }}
                  >
                    <Icon size={24} style={{ color: item.color }} />
                  </div>
                  <h3
                    className="text-base font-bold text-white mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.58 0.02 285)", fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        ref={processRef}
        className="relative py-24 md:py-32"
        style={{ background: "oklch(0.07 0.015 285)" }}
      >
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10" style={{ background: "oklch(0.68 0.22 35)" }} />
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ color: "oklch(0.68 0.22 35)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                How We Work
              </span>
              <div className="h-px w-10" style={{ background: "oklch(0.68 0.22 35)" }} />
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              From Idea to{" "}
              <span className="text-gradient-cyan-coral">Impact</span>
            </h2>
            <p
              className="text-base max-w-xl mx-auto"
              style={{ color: "oklch(0.6 0.02 285)", fontFamily: "'Inter', sans-serif" }}
            >
              Our proven 4-step process ensures every project is delivered with
              clarity, creativity, and measurable results.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div
              className="absolute top-8 left-1/4 right-1/4 h-px hidden lg:block"
              style={{ background: "linear-gradient(90deg, oklch(0.55 0.28 295 / 0.3), oklch(0.78 0.18 200 / 0.3), oklch(0.68 0.22 35 / 0.3))" }}
            />

            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
                className="relative"
              >
                <div className="nex-card rounded-xl p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <span
                      className="text-4xl font-bold leading-none"
                      style={{
                        fontFamily: "'Orbitron', sans-serif",
                        background: "linear-gradient(135deg, oklch(0.55 0.28 295), oklch(0.78 0.18 200))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {step.number}
                    </span>
                    {i < PROCESS_STEPS.length - 1 && (
                      <ArrowRight
                        size={16}
                        className="mt-3 hidden lg:block"
                        style={{ color: "oklch(0.35 0.04 285)" }}
                      />
                    )}
                  </div>
                  <h3
                    className="text-base font-bold text-white mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.58 0.02 285)", fontFamily: "'Inter', sans-serif" }}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
