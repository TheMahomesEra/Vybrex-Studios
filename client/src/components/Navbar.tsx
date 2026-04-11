/* ============================================================
   VYBREX STUDIOS Navbar — Dark Forge Futurism
   Sticky top nav with logo, links, and CTA
   ============================================================ */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.07_0.015_285/0.95)] backdrop-blur-xl border-b border-[oklch(0.22_0.04_285)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030179726/DJHVYpqtvzVwWopENeLFJP/logo_mark_1d4bb99b.png"
            alt="VYBREX STUDIOS Logo"
            className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <span
            className="font-display text-base font-bold tracking-[0.15em] text-gradient-violet-cyan"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            VYBREX STUDIOS
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-[oklch(0.7_0.02_285)] hover:text-white transition-colors duration-200 tracking-wide font-heading relative group"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[oklch(0.55_0.28_295)] to-[oklch(0.78_0.18_200)] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="nex-btn-primary px-5 py-2 rounded text-sm"
          >
            Start Your Project
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[oklch(0.09_0.018_285/0.98)] backdrop-blur-xl border-b border-[oklch(0.22_0.04_285)] px-4 pb-6 pt-2">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-base font-medium text-[oklch(0.75_0.02_285)] hover:text-white transition-colors py-2 border-b border-[oklch(0.15_0.025_285)]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="nex-btn-primary px-5 py-3 rounded text-sm mt-2"
            >
              Start Your Project
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
