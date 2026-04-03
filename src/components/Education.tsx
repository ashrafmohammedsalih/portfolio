"use client";

import { motion } from "framer-motion";
import { education } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
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
            <span className="text-2xl font-bold font-mono text-red-400">07.</span>
            <h2 className="text-3xl font-bold tracking-tight text-white">Education</h2>
            <div className="hidden sm:block flex-1 h-px bg-white/10 ml-4" />
          </div>
        </motion.h2>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#12121a] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors"
        >
          <p className="text-xs uppercase tracking-widest text-cyan-400/60 font-mono mb-1">
            {education.period}
          </p>
          <h3 className="text-xl font-semibold text-white">
            {education.degree}
          </h3>
          <p className="text-white/40 mt-1">
            {education.university} &middot; {education.location}
          </p>
          <p className="text-sm text-white/40 mt-2">
            GPA: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 font-bold">{education.gpa}</span>
          </p>
          {education.organizations.map((org) => (
            <div key={org.name} className="mt-6 pt-6 border-t border-white/10">
              <h4 className="text-sm font-semibold text-white/80 mb-2">
                {org.name}
              </h4>
              <ul className="space-y-1">
                {org.roles.map((role, i) => (
                  <li key={i} className="text-sm text-white/40 flex gap-2">
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400/40" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
