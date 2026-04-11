/* ============================================================
   VYBREX STUDIOS Hero Section — Dark Forge Futurism
   Full-viewport hero with animated waveform, particle glow,
   bold headline, and dual CTAs
   ============================================================ */

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const WAVEFORM_BARS = 48;

export default function HeroSection() {
  const waveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bars = waveRef.current?.querySelectorAll(".wave-bar");
    if (!bars) return;
    bars.forEach((bar, i) => {
      const el = bar as HTMLElement;
      const delay = (i * 0.07) % 1.2;
      const duration = 0.6 + Math.random() * 0.8;
      el.style.animationDelay = `${delay}s`;
      el.style.animationDuration = `${duration}s`;
    });
  }, []);

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "oklch(0.07 0.015 285)" }}
    >
      {/* Background Hero Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663030179726/DJHVYpqtvzVwWopENeLFJP/hero_banner_0e4daf5f.jpg)`,
          opacity: 0.35,
        }}
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.07 0.015 285 / 0.92) 0%, oklch(0.07 0.015 285 / 0.7) 50%, oklch(0.09 0.03 295 / 0.85) 100%)",
        }}
      />

      {/* Radial glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, oklch(0.55 0.28 295 / 0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, oklch(0.78 0.18 200 / 0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
          animationDelay: "1s",
        }}
      />

      {/* Waveform visualizer */}
      <div
        ref={waveRef}
        className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-[2px] h-24 px-4 opacity-30"
      >
        {Array.from({ length: WAVEFORM_BARS }).map((_, i) => {
          const heightPct = 20 + Math.abs(Math.sin(i * 0.4)) * 80;
          const isViolet = i % 3 === 0;
          const isCoral = i % 7 === 0;
          return (
            <div
              key={i}
              className="wave-bar flex-1 rounded-t-sm"
              style={{
                height: `${heightPct}%`,
                background: isCoral
                  ? "oklch(0.68 0.22 35)"
                  : isViolet
                  ? "oklch(0.65 0.28 295)"
                  : "oklch(0.78 0.18 200)",
                animation: "waveform 0.8s ease-in-out infinite alternate",
                maxWidth: "12px",
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 container py-32 md:py-40">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div
              className="h-px w-12"
              style={{ background: "oklch(0.78 0.18 200)" }}
            />
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase"
              style={{
                color: "oklch(0.78 0.18 200)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              AI-Powered Creative Agency
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="text-white block">Where Your Brand</span>
            <span className="text-gradient-violet-cyan block">Becomes</span>
            <span className="text-white block">Legendary.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
            style={{
              color: "oklch(0.72 0.02 285)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            VYBREX STUDIOS delivers AI-powered branding, custom music, cinematic video &amp; bold marketing strategies for Midwest businesses, entrepreneurs, and creators ready to dominate.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollToSection("#contact")}
              className="nex-btn-primary flex items-center gap-2 px-8 py-4 rounded text-base"
            >
              Start Your Project
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollToSection("#portfolio")}
              className="nex-btn-outline flex items-center gap-2 px-8 py-4 rounded text-base"
            >
              <Play size={16} />
              See Our Work
            </button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-wrap gap-8 mt-16 pt-8"
            style={{ borderTop: "1px solid oklch(0.22 0.04 285)" }}
          >
            {[
              { value: "100+", label: "Projects Delivered" },
              { value: "7", label: "Core Services" },
              { value: "AI", label: "Powered Creativity" },
              { value: "∞", label: "Creative Possibilities" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span
                  className="text-3xl font-bold text-gradient-violet-cyan"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs tracking-wider mt-1"
                  style={{
                    color: "oklch(0.55 0.02 285)",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-28 right-8 md:right-12 flex flex-col items-center gap-2"
      >
        <span
          className="text-xs tracking-[0.2em] rotate-90 origin-center"
          style={{
            color: "oklch(0.45 0.02 285)",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          SCROLL
        </span>
        <div
          className="w-px h-12"
          style={{
            background: "linear-gradient(to bottom, oklch(0.55 0.28 295), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
