/* ============================================================
   VYBREX STUDIOS Services Section — Dark Forge Futurism
   7-service staggered grid with icon cards and glow hover
   ============================================================ */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Palette,
  Film,
  BrainCircuit,
  Music2,
  Mic2,
  Megaphone,
  TrendingUp,
} from "lucide-react";

const SERVICES = [
  {
    icon: Palette,
    title: "Branding & Identity",
    description:
      "Logos, brand guidelines, visual identity systems, and brand strategy that make you instantly recognizable and iconic.",
    tags: ["Logo Design", "Brand Guidelines", "Visual Systems"],
    color: "oklch(0.55 0.28 295)",
    glow: "oklch(0.55 0.28 295 / 0.25)",
    featured: true,
  },
  {
    icon: Film,
    title: "Video Production & Commercials",
    description:
      "High-impact video content, TV and digital commercials, brand films, and social media video that stops the scroll.",
    tags: ["Commercials", "Brand Films", "Social Video"],
    color: "oklch(0.78 0.18 200)",
    glow: "oklch(0.78 0.18 200 / 0.2)",
    featured: false,
  },
  {
    icon: BrainCircuit,
    title: "AI Creative Solutions",
    description:
      "AI adoption consulting, AI-generated content pipelines, and creative AI workflows that give your business a competitive edge.",
    tags: ["AI Consulting", "AI Content", "Automation"],
    color: "oklch(0.68 0.22 35)",
    glow: "oklch(0.68 0.22 35 / 0.2)",
    featured: false,
  },
  {
    icon: Music2,
    title: "Personalized Music",
    description:
      "Custom AI-enhanced music composed specifically for your brand — commercials, podcasts, events, social content, and personal projects.",
    tags: ["Brand Music", "Jingles", "Soundscapes"],
    color: "oklch(0.82 0.18 85)",
    glow: "oklch(0.82 0.18 85 / 0.2)",
    featured: true,
  },
  {
    icon: Mic2,
    title: "Podcasts & Interviews",
    description:
      "Full podcast production from concept to distribution — recording, editing, branding, and interview series for your audience.",
    tags: ["Production", "Editing", "Distribution"],
    color: "oklch(0.55 0.28 295)",
    glow: "oklch(0.55 0.28 295 / 0.2)",
    featured: false,
  },
  {
    icon: Megaphone,
    title: "Digital Advertising",
    description:
      "Paid social campaigns, digital ads, platform management, and content strategy that converts attention into revenue.",
    tags: ["Paid Ads", "Social Media", "Content Strategy"],
    color: "oklch(0.78 0.18 200)",
    glow: "oklch(0.78 0.18 200 / 0.2)",
    featured: false,
  },
  {
    icon: TrendingUp,
    title: "Marketing Strategy",
    description:
      "Game-planning, campaign strategy, competitive analysis, and growth roadmaps tailored to your business goals and target market.",
    tags: ["Strategy", "Growth Plans", "Market Analysis"],
    color: "oklch(0.68 0.22 35)",
    glow: "oklch(0.68 0.22 35 / 0.2)",
    featured: false,
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "oklch(0.07 0.015 285)" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663030179726/DJHVYpqtvzVwWopENeLFJP/services_bg_ad354999.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, oklch(0.07 0.015 285 / 0.9), oklch(0.07 0.015 285 / 0.85), oklch(0.07 0.015 285 / 0.95))",
        }}
      />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10" style={{ background: "oklch(0.78 0.18 200)" }} />
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: "oklch(0.78 0.18 200)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              What We Do
            </span>
            <div className="h-px w-10" style={{ background: "oklch(0.78 0.18 200)" }} />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Full-Spectrum{" "}
            <span className="text-gradient-cyan-coral">Creative Services</span>
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "oklch(0.6 0.02 285)", fontFamily: "'Inter', sans-serif" }}
          >
            One agency. Every creative need. From the first brand sketch to the final
            marketing campaign — we handle it all.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className={`nex-card rounded-xl p-6 relative overflow-hidden group ${
                  i === 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${service.glow}, transparent 60%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 relative z-10"
                  style={{
                    background: `${service.color.replace(")", " / 0.15)")}`,
                    border: `1px solid ${service.color.replace(")", " / 0.3)")}`,
                  }}
                >
                  <Icon size={22} style={{ color: service.color }} />
                </div>

                {/* Content */}
                <h3
                  className="text-lg font-bold text-white mb-3 relative z-10"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4 relative z-10"
                  style={{ color: "oklch(0.6 0.02 285)", fontFamily: "'Inter', sans-serif" }}
                >
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded"
                      style={{
                        background: `${service.color.replace(")", " / 0.1)")}`,
                        color: service.color,
                        border: `1px solid ${service.color.replace(")", " / 0.2)")}`,
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-b-xl"
                  style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
