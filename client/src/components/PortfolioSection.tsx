/* ============================================================
   VYBREX STUDIOS Portfolio Section — Dark Forge Futurism
   Work showcase with category filter tabs
   ============================================================ */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { toast } from "sonner";

const CATEGORIES = ["All", "Branding", "Video", "Music", "Strategy"];

const PORTFOLIO_ITEMS = [
  {
    title: "SoundWave Records",
    category: "Branding",
    desc: "Complete brand identity for an independent music label — logo, color system, and digital presence.",
    tag: "Brand Identity",
    color: "oklch(0.55 0.28 295)",
    bg: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80",
  },
  {
    title: "TechLaunch Commercial",
    category: "Video",
    desc: "60-second product launch commercial for a SaaS startup — scripted, produced, and distributed.",
    tag: "Commercial",
    color: "oklch(0.78 0.18 200)",
    bg: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80",
  },
  {
    title: "Elevate Podcast",
    category: "Music",
    desc: "Custom intro/outro music and full sonic identity for a business growth podcast.",
    tag: "Podcast Music",
    color: "oklch(0.82 0.18 85)",
    bg: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&q=80",
  },
  {
    title: "RetailNova Campaign",
    category: "Strategy",
    desc: "Full digital marketing strategy and campaign execution for a retail brand's Q4 launch.",
    tag: "Marketing Strategy",
    color: "oklch(0.68 0.22 35)",
    bg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    title: "Artisan Collective",
    category: "Branding",
    desc: "Visual identity and brand guidelines for an artist collective — from logo to merch design.",
    tag: "Brand Identity",
    color: "oklch(0.55 0.28 295)",
    bg: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
  },
  {
    title: "NightOwl Sessions",
    category: "Music",
    desc: "Personalized ambient music collection for a luxury lounge brand — 12 original tracks.",
    tag: "Custom Music",
    color: "oklch(0.78 0.18 200)",
    bg: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
  },
];

export default function PortfolioSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative py-24 md:py-32"
      style={{ background: "oklch(0.09 0.018 285)" }}
    >
      <div
        className="absolute top-0 right-0 w-1/3 h-1/2 opacity-10"
        style={{
          background: "radial-gradient(ellipse, oklch(0.78 0.18 200 / 0.3), transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10" style={{ background: "oklch(0.82 0.18 85)" }} />
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: "oklch(0.82 0.18 85)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Our Work
            </span>
            <div className="h-px w-10" style={{ background: "oklch(0.82 0.18 85)" }} />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Brands We've{" "}
            <span className="text-gradient-violet-cyan">Built</span>
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "oklch(0.6 0.02 285)", fontFamily: "'Inter', sans-serif" }}
          >
            A selection of projects across branding, video, music, and strategy.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background:
                  activeCategory === cat
                    ? "linear-gradient(135deg, oklch(0.55 0.28 295), oklch(0.45 0.28 295))"
                    : "oklch(0.13 0.025 285)",
                color: activeCategory === cat ? "white" : "oklch(0.6 0.02 285)",
                border:
                  activeCategory === cat
                    ? "1px solid oklch(0.55 0.28 295 / 0.5)"
                    : "1px solid oklch(0.22 0.04 285)",
                boxShadow: activeCategory === cat ? "0 0 15px oklch(0.55 0.28 295 / 0.3)" : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="nex-card rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => toast.info("Full portfolio coming soon!", { description: item.title })}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.bg}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, oklch(0.09 0.018 285 / 0.9), ${item.color.replace(")", " / 0.2)")})`,
                  }}
                />
                <div className="absolute top-3 right-3">
                  <span
                    className="text-xs px-2 py-1 rounded-full font-medium"
                    style={{
                      background: `${item.color.replace(")", " / 0.2)")}`,
                      color: item.color,
                      border: `1px solid ${item.color.replace(")", " / 0.4)")}`,
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink size={16} style={{ color: item.color }} />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
