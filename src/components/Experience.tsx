"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold font-mono text-red-400">04.</span>
            <h2 className="text-3xl font-bold tracking-tight text-white">Experience</h2>
            <div className="hidden sm:block flex-1 h-px bg-white/10 ml-4" />
          </div>
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#12121a] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors"
            >
              {/* Header with logo */}
              <div className="flex items-center gap-5 px-6 py-5 border-b border-white/5">
                <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    fill
                    className={`object-contain p-2 ${exp.logoWhite ? "" : "brightness-0 invert"}`}
                    sizes="80px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center flex-wrap gap-x-3 gap-y-1">
                    <h3 className="text-lg font-semibold text-white">{exp.company}</h3>
                    <span className="text-xs text-white/20 font-mono">{exp.companyAr}</span>
                  </div>
                  <p className="text-xs text-white/30 font-mono mt-0.5">{exp.companyDesc}</p>
                </div>
                <div className="text-right flex-shrink-0 hidden sm:block">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    {exp.period.includes("Present") ? "Current" : exp.period.split(" – ")[1]}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="px-6 py-5">
                {/* Role & meta */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <h4 className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                    {exp.role}
                  </h4>
                </div>
                <div className="flex flex-wrap items-center gap-4 mb-5 text-xs text-white/30 font-mono">
                  <span className="flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                    {exp.location}
                  </span>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, j) => (
                    <li key={j} className="text-white/45 text-sm leading-relaxed flex gap-3">
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400/50" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Projects built */}
                <div className="pt-4 border-t border-white/5">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-white/20 mb-3">Projects Delivered</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.projects.map((proj) => (
                      <span
                        key={proj}
                        className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-white/40 hover:border-cyan-500/30 hover:text-cyan-400/70 transition-colors"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
