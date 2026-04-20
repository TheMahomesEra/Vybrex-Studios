/* ============================================================
   VYBREX STUDIOS Contact Section + Footer — Dark Forge Futurism
   ============================================================ */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import { toast } from "sonner";

const SERVICES_LIST = [
  "Branding & Identity",
  "Video Production",
  "AI Creative Solutions",
  "Personalized Music",
  "Podcasts & Interviews",
  "Digital Advertising",
  "Marketing Strategy",
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.message) {
    toast.error("Please fill in all required fields.");
    return;
  }

  const formData = new FormData();
  formData.append("form-name", "contact");
  formData.append("name", form.name);
  formData.append("email", form.email);
  formData.append("service", form.service);
  formData.append("message", form.message);

  try {
    setSubmitting(true);

    await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData as any).toString(),
    });

    toast.success("Message sent! We'll be in touch within 24 hours.", {
      description: `Thanks, ${form.name}! The VYBREX STUDIOS team will reach out soon.`,
    });

    setForm({
      name: "",
      email: "",
      service: "",
      message: "",
    });

  } catch (error) {
    toast.error("Something went wrong. Please try again.");
  } finally {
    setSubmitting(false);
  }
};

  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
        ref={ref}
        className="relative py-24 md:py-32"
        style={{ background: "oklch(0.07 0.015 285)" }}
      >
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background: "radial-gradient(ellipse at bottom right, oklch(0.55 0.28 295 / 0.3), transparent 60%)",
          }}
        />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Info */}
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
                  Get In Touch
                </span>
              </div>

              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Ready to Elevate
                <br />
                <span className="text-gradient-violet-cyan">Your Brand?</span>
              </h2>

              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "oklch(0.65 0.02 285)", fontFamily: "'Inter', sans-serif" }}
              >
                Whether you're starting from scratch or ready to level up, we'd love to
                hear about your vision. Fill out the form and we'll get back to you within
                24 hours with a custom proposal.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-10">
                <a
                  href="mailto:hello@vybrexstudios.com"
                  className="flex items-center gap-3 group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: "oklch(0.55 0.28 295 / 0.12)",
                      border: "1px solid oklch(0.55 0.28 295 / 0.3)",
                    }}
                  >
                    <Mail size={16} style={{ color: "oklch(0.55 0.28 295)" }} />
                  </div>
                  <span
                    className="text-sm group-hover:text-white transition-colors"
                    style={{ color: "oklch(0.65 0.02 285)", fontFamily: "'Inter', sans-serif" }}
                  >
                    hello@vybrexstudios.com
                  </span>
                </a>
              </div>

              {/* Social Links */}
              <div>
                <p
                  className="text-xs tracking-widest uppercase mb-4"
                  style={{ color: "oklch(0.45 0.02 285)", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Follow VYBREX STUDIOS
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, label: "Instagram" },
                    { icon: Twitter, label: "Twitter/X" },
                    { icon: Youtube, label: "YouTube" },
                    { icon: Linkedin, label: "LinkedIn" },
                  ].map(({ icon: Icon, label }) => (
                    <button
                      key={label}
                      onClick={() => toast.info(`${label} coming soon!`)}
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                      style={{
                        background: "oklch(0.13 0.025 285)",
                        border: "1px solid oklch(0.22 0.04 285)",
                        color: "oklch(0.6 0.02 285)",
                      }}
                      aria-label={label}
                    >
                      <Icon size={16} />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
       <form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify
  onSubmit={handleSubmit}
  className="nex-card rounded-xl p-8 space-y-5"
>
  <input type="hidden" name="form-name" value="contact" />
              
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs font-semibold mb-2 tracking-wider uppercase"
                      style={{ color: "oklch(0.55 0.02 285)", fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Name *
                    </label>
                    <input
  type="text"
  name="name"
  value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded text-sm outline-none transition-all duration-200"
                      style={{
                        background: "oklch(0.14 0.025 285)",
                        border: "1px solid oklch(0.22 0.04 285)",
                        color: "white",
                        fontFamily: "'Inter', sans-serif",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "oklch(0.55 0.28 295 / 0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "oklch(0.22 0.04 285)")}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold mb-2 tracking-wider uppercase"
                      style={{ color: "oklch(0.55 0.02 285)", fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded text-sm outline-none transition-all duration-200"
                      style={{
                        background: "oklch(0.14 0.025 285)",
                        border: "1px solid oklch(0.22 0.04 285)",
                        color: "white",
                        fontFamily: "'Inter', sans-serif",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "oklch(0.55 0.28 295 / 0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "oklch(0.22 0.04 285)")}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold mb-2 tracking-wider uppercase"
                    style={{ color: "oklch(0.55 0.02 285)", fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Service Needed
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded text-sm outline-none transition-all duration-200"
                    style={{
                      background: "oklch(0.14 0.025 285)",
                      border: "1px solid oklch(0.22 0.04 285)",
                      color: form.service ? "white" : "oklch(0.45 0.02 285)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    <option value="">Select a service...</option>
                    {SERVICES_LIST.map((s) => (
                      <option key={s} value={s} style={{ background: "oklch(0.14 0.025 285)" }}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold mb-2 tracking-wider uppercase"
                    style={{ color: "oklch(0.55 0.02 285)", fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your vision, goals, and timeline..."
                    rows={5}
                    className="w-full px-4 py-3 rounded text-sm outline-none transition-all duration-200 resize-none"
                    style={{
                      background: "oklch(0.14 0.025 285)",
                      border: "1px solid oklch(0.22 0.04 285)",
                      color: "white",
                      fontFamily: "'Inter', sans-serif",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "oklch(0.55 0.28 295 / 0.6)")}
                    onBlur={(e) => (e.target.style.borderColor = "oklch(0.22 0.04 285)")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="nex-btn-primary w-full py-4 rounded text-sm flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 border-t"
        style={{
          background: "oklch(0.06 0.012 285)",
          borderColor: "oklch(0.15 0.025 285)",
        }}
      >
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030179726/DJHVYpqtvzVwWopENeLFJP/logo_mark_1d4bb99b.png"
                alt="VYBREX STUDIOS"
                className="w-8 h-8 object-contain"
              />
              <span
                className="font-display text-lg font-bold tracking-widest text-gradient-violet-cyan"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                VYBREX STUDIOS
              </span>
            </div>

            {/* Tagline */}
            <p
              className="text-sm text-center"
              style={{ color: "oklch(0.4 0.02 285)", fontFamily: "'Inter', sans-serif" }}
            >
              Founded by <span style={{ color: "oklch(0.6 0.02 285)" }}>The Original T.I.</span> &nbsp;·&nbsp; AI-Powered Creative Agency
            </p>

            {/* Copyright */}
            <p
              className="text-xs"
              style={{ color: "oklch(0.35 0.02 285)", fontFamily: "'Inter', sans-serif" }}
            >
              © {new Date().getFullYear()} VYBREX STUDIOS. All rights reserved.
            </p>
          </div>

          {/* Bottom divider */}
          <div className="section-divider mt-8" />

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {["About", "Services", "Process", "Portfolio", "Pricing", "Contact"].map((link) => (
              <button
                key={link}
                onClick={() =>
                  document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-xs transition-colors hover:text-white"
                style={{ color: "oklch(0.4 0.02 285)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
