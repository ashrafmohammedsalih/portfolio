"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const icons: Record<string, React.ReactNode> = {
  code: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  phone: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><path d="M12 18h.01" />
    </svg>
  ),
  cpu: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
      <path d="M15 2v2M15 20v2M2 15h2M20 15h2M9 2v2M9 20v2M2 9h2M20 9h2" />
    </svg>
  ),
  server: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  wallet: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12V7H5a2 2 0 010-4h14v4" /><path d="M3 5v14a2 2 0 002 2h16v-5" /><path d="M18 12a2 2 0 100 4h4v-4h-4z" />
    </svg>
  ),
  database: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  tools: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  shield: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  network: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="6" rx="1" /><rect x="16" y="16" width="6" height="6" rx="1" /><rect x="2" y="16" width="6" height="6" rx="1" />
      <path d="M5 16v-4h14v4M12 12V8" />
    </svg>
  ),
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-white/5">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold font-mono text-red-400">03.</span>
            <h2 className="text-3xl font-bold tracking-tight text-white">Skills & Technologies</h2>
            <div className="hidden sm:block flex-1 h-px bg-white/10 ml-4" />
          </div>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-white/35 text-sm mb-12 max-w-2xl"
        >
          Security tools, IoT hacking techniques, and software engineering skills — built from years of hands-on system development and offensive security research.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-[#12121a] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors"
            >
              {/* Card header */}
              <div
                className="flex items-center gap-3 px-5 py-4 border-b border-white/5"
                style={{ backgroundColor: `${group.accent}08` }}
              >
                <span
                  className="inline-flex items-center justify-center w-9 h-9 rounded-xl"
                  style={{ backgroundColor: `${group.accent}15`, color: group.accent, border: `1px solid ${group.accent}25` }}
                >
                  {icons[group.icon]}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white/90">{group.category}</h3>
                  <p className="text-[10px] font-mono text-white/25 uppercase tracking-wider">{group.items.length} technologies</p>
                </div>
              </div>

              {/* Skills list */}
              <div className="px-5 py-4">
                <div className="space-y-2">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between gap-3 py-1.5 group"
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: group.accent }}
                        />
                        <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-white/20 group-hover:text-white/35 transition-colors text-right flex-shrink-0">
                        {skill.context}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary stats bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 bg-[#12121a] border border-white/10 rounded-2xl p-6"
        >
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {[
              { num: "OSCP", label: "Certified", accent: "#ef4444" },
              { num: "8", label: "Offensive Tools", accent: "#ef4444" },
              { num: "8", label: "IoT/Hardware Security", accent: "#10b981" },
              { num: "7", label: "Network & Web Sec", accent: "#f59e0b" },
              { num: "8", label: "Security Tools", accent: "#8b5cf6" },
              { num: "45+", label: "Total Skills", accent: "#06b6d4" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl font-bold font-mono" style={{ color: stat.accent }}>
                  {stat.num}
                </div>
                <div className="text-[10px] text-white/25 font-mono uppercase tracking-wider mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
