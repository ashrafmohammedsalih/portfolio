"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { personal } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(239,68,68,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.3) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Glow — red/purple security accent */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-red-500/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/6 rounded-full blur-[120px]" />

      <div className="relative z-[1] mx-auto max-w-6xl w-full py-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Photo — large, left side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative flex-shrink-0 order-1 md:order-none"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem]">
              {/* Glow ring */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-red-500 via-purple-500 to-cyan-500 opacity-50 blur-md" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-white/15">
                <Image
                  src={personal.photo}
                  alt={personal.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 352px"
                  priority
                />
              </div>
              {/* Available badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#12121a]/90 backdrop-blur-md border border-white/10 shadow-xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                  <span className="text-xs font-medium text-white/70">Available for Work</span>
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content — right side */}
          <div className="flex-1 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm md:text-base text-white/50 mb-3"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              <span className="text-white">{personal.name.split(" ")[0]} </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">{personal.name.split(" ").slice(1).join(" ")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-4 text-lg md:text-xl text-white/60 font-medium"
            >
              Penetration Tester | <span className="text-red-400">OSCP+</span> | <span className="text-orange-400">OSCP</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-base text-white/35 max-w-xl leading-relaxed"
            >
              {personal.profile}
            </motion.p>

            {/* Stats row — card style like reference */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 mt-8"
            >
              {personal.stats.map((stat, i) => (
                <div
                  key={`${stat.num}-${stat.label}`}
                  className="bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-3.5 text-center min-w-[100px] hover:border-white/15 transition-colors"
                >
                  <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                    {stat.num}
                  </div>
                  <div className="text-[10px] text-white/30 font-mono uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4"
            >
              <a
                href="#contact"
                className="px-7 py-3 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-full text-sm font-medium hover:from-red-400 hover:to-purple-500 transition-all shadow-lg shadow-red-500/20 flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" />
                </svg>
                Get In Touch
              </a>
              <a
                href="#about"
                className="px-7 py-3 bg-white/[0.05] border border-white/10 rounded-full text-sm font-medium text-white/60 hover:text-white hover:border-white/25 transition-colors flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
                About Me
              </a>
            </motion.div>

            {/* Social icons row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center justify-center md:justify-start gap-3 mt-8"
            >
              {[
                {
                  href: personal.github,
                  label: "GitHub",
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>,
                },
                {
                  href: personal.linkedin,
                  label: "LinkedIn",
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
                },
                {
                  href: "https://medium.com/@ashrafal3oni",
                  label: "Medium",
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>,
                },
                {
                  href: `mailto:${personal.email}`,
                  label: "Email",
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" /></svg>,
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/35 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>

            {/* Scroll down indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="hidden md:flex flex-col items-start mt-14"
            >
              <a href="#about" className="flex flex-col items-center gap-2 text-white/20 hover:text-white/40 transition-colors">
                <span className="text-xs font-mono tracking-wider">Scroll Down</span>
                <motion.svg
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </motion.svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
