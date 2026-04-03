"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const filterCounts = {
  all: projects.length,
  app: projects.filter((p) => p.category === "app").length,
  iot: projects.filter((p) => p.category === "iot").length,
};

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "app" | "iot">("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="hidden sm:block flex-1 h-px bg-white/10" />
            <span className="text-2xl font-bold font-mono text-red-400">06.</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Featured Projects</h2>
            <div className="hidden sm:block flex-1 h-px bg-white/10" />
          </div>
          <p className="text-white/30 text-sm max-w-lg mx-auto text-center">
            From mobile apps serving 50K+ users to IoT systems controlling smart lockers — real projects shipped to production.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-2 mb-12"
        >
          {(["all", "app", "iot"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm rounded-full border transition-all ${
                filter === f
                  ? "bg-white text-[#0a0a0f] border-white font-medium shadow-lg shadow-white/10"
                  : "border-white/10 text-white/35 hover:text-white/60 hover:border-white/25"
              }`}
            >
              {f === "all" ? "All Projects" : f === "app" ? "Mobile Apps" : "IoT & Hardware"}
              <span className={`text-xs font-mono px-1.5 py-0.5 rounded-md ${
                filter === f ? "bg-[#0a0a0f]/10 text-[#0a0a0f]/60" : "bg-white/5 text-white/20"
              }`}>
                {filterCounts[f]}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => {
              const accent = project.color || "#06b6d4";
              const screenCount = project.sections
                ? project.sections.reduce((a, s) => a + s.screens.length, 0)
                : 0;

              return (
                <motion.div
                  key={project.slug}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block bg-[#12121a] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-white/20 hover:shadow-lg hover:shadow-black/30 transition-all group h-full"
                  >
                    {/* Preview area */}
                    <div
                      className="relative h-44 overflow-hidden"
                      style={{ background: `linear-gradient(145deg, ${accent}18 0%, ${accent}06 60%, #12121a 100%)` }}
                    >
                      {/* Subtle grid */}
                      <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                          backgroundImage: `linear-gradient(${accent}80 1px, transparent 1px), linear-gradient(90deg, ${accent}80 1px, transparent 1px)`,
                          backgroundSize: "28px 28px",
                        }}
                      />

                      {/* Phone preview */}
                      {project.preview && project.previewType === "phone" && (
                        <div className="absolute right-4 -bottom-6 group-hover:-bottom-3 transition-all duration-500 ease-out">
                          <div className="w-[100px] rounded-[1rem] border-[3px] border-zinc-700 bg-zinc-800 shadow-2xl overflow-hidden">
                            <div className="rounded-[0.8rem] overflow-hidden">
                              <Image
                                src={project.preview}
                                alt=""
                                width={215}
                                height={466}
                                className="w-full h-auto"
                                sizes="100px"
                                aria-hidden="true"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Wide preview (IoT) */}
                      {project.preview && project.previewType === "wide" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-full h-full opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                            <Image
                              src={project.preview}
                              alt=""
                              fill
                              className="object-cover"
                              sizes="400px"
                              aria-hidden="true"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-transparent to-transparent" />
                          </div>
                        </div>
                      )}

                      {/* No preview — show logo */}
                      {!project.preview && project.logo && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-16 h-16 opacity-30 group-hover:opacity-50 transition-opacity">
                            <Image src={project.logo} alt="" fill className="object-contain brightness-0 invert" sizes="64px" aria-hidden="true" />
                          </div>
                        </div>
                      )}

                      {/* No preview, no logo — fallback icon */}
                      {!project.preview && !project.logo && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-2xl flex items-center justify-center opacity-25" style={{ backgroundColor: `${accent}25`, border: `1px solid ${accent}30` }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
                              <path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2" />
                            </svg>
                          </div>
                        </div>
                      )}

                      {/* Logo watermark (top-left for projects with phone preview) */}
                      {project.logo && project.preview && (
                        <div className="absolute top-3.5 left-3.5">
                          <div className="relative w-8 h-8 opacity-40">
                            <Image src={project.logo} alt="" fill className="object-contain brightness-0 invert" sizes="32px" aria-hidden="true" />
                          </div>
                        </div>
                      )}

                      {/* Category badge */}
                      <div className="absolute top-3 right-3 z-[2]">
                        <span
                          className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider rounded-md backdrop-blur-sm"
                          style={{ backgroundColor: `${accent}30`, color: accent, border: `1px solid ${accent}30` }}
                        >
                          {project.category === "app" ? "APP" : "IoT"}
                        </span>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-5">
                      <p className="text-[10px] uppercase tracking-widest text-white/20 font-mono mb-2">
                        {project.company}
                      </p>

                      <h3 className="text-[15px] font-semibold text-white/90 mb-2 group-hover:text-white transition-colors leading-snug">
                        {project.title}
                      </h3>

                      <p className="text-[13px] text-white/30 leading-relaxed line-clamp-2 mb-4">
                        {project.summary}
                      </p>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 text-[10px] font-mono bg-white/[0.03] border border-white/[0.07] rounded-md text-white/25"
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-0.5 text-[10px] font-mono text-white/15">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-white/5">
                        <div className="flex items-center gap-3">
                          {screenCount > 0 && (
                            <span className="flex items-center gap-1 text-[10px] font-mono text-white/20">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg>
                              {screenCount}
                            </span>
                          )}
                          <span className="flex items-center gap-1 text-[10px] font-mono text-white/20">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
                            {project.highlights.length} highlights
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-[11px] text-white/20 group-hover:text-cyan-400 transition-colors font-medium">
                          View
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
