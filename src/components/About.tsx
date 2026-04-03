"use client";

import { motion } from "framer-motion";
import { personal } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-white/5">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold font-mono text-red-400">01.</span>
            <h2 className="text-3xl font-bold tracking-tight text-white">About Me</h2>
            <div className="hidden sm:block flex-1 h-px bg-white/10 ml-4" />
          </div>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/50 text-lg leading-relaxed mb-6 max-w-3xl"
        >
          {personal.aboutDetailed}
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-white/40 text-sm leading-relaxed mb-6 max-w-3xl"
        >
          {personal.securityFocus}
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/30 text-sm leading-relaxed mb-12 max-w-3xl"
        >
          Based in Riyadh, Saudi Arabia. B.Sc. in Software Engineering from Sudan University of Science and Technology (GPA 3.08/4.0). OSCP &amp; OSCP+ certified penetration tester. IEEE SUSTech Vice-Leader. Built and security-tested 10+ production systems serving 50,000+ users — from ride-hailing apps to automated pharmacy kiosks integrated with Saudi Arabia&apos;s national Wasfaty e-Prescribing platform.
        </motion.p>

        {/* What I Do grid */}
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm font-semibold uppercase tracking-widest text-white/30 font-mono mb-6"
        >
          What I Do
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {personal.whatIDo.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="bg-[#12121a] border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold font-mono bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="text-base font-semibold text-white/90">{item.title}</h4>
              </div>
              <p className="text-sm text-white/40 leading-relaxed ml-11">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Personal Info cards */}
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm font-semibold uppercase tracking-widest text-white/30 font-mono mb-6"
        >
          Personal Info
        </motion.h3>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            {
              label: "Email",
              value: personal.email,
              icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" />
                </svg>
              ),
            },
            {
              label: "Phone",
              value: personal.phone,
              icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.11 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              ),
            },
            {
              label: "Location",
              value: personal.location,
              icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
              ),
            },
            {
              label: "Languages",
              value: personal.languages.join(", "),
              icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
              ),
            },
          ].map((item) => (
            <div key={item.label} className="bg-[#12121a] border border-white/10 rounded-xl p-4 hover:border-cyan-500/30 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-cyan-400/60">{item.icon}</span>
                <p className="text-[10px] uppercase tracking-widest text-white/30 font-mono">
                  {item.label}
                </p>
              </div>
              <p className="text-white/70 text-sm font-medium">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
