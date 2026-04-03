"use client";

import Img from "@/components/Img";
import { motion } from "framer-motion";
import type { ScreenSection } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

function PhoneMockup({
  src,
  label,
  delay = 0,
}: {
  src: string;
  label: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-3"
    >
      {/* Phone frame */}
      <div className="relative w-[200px] sm:w-[220px]">
        <div className="rounded-[2.2rem] border-[5px] border-zinc-700 bg-zinc-800 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="relative overflow-hidden rounded-[1.8rem]">
            <Img
              src={src}
              alt={label}
              width={430}
              height={932}
              className="w-full h-auto scale-[1.02]"
              sizes="220px"
              quality={90}
            />
          </div>
        </div>
      </div>

      {/* Label */}
      <p className="text-xs text-white/40 text-center font-medium">{label}</p>
    </motion.div>
  );
}

function KioskMockup({
  src,
  label,
  delay = 0,
}: {
  src: string;
  label: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-3"
    >
      <div className="relative w-[280px] sm:w-[340px]">
        <div className="bg-zinc-800 rounded-2xl p-1.5 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.6)]">
          {/* Top bar — status LEDs */}
          <div className="flex items-center justify-between px-3 py-1.5 mb-1">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.6)]" />
              <div className="w-2 h-2 rounded-full bg-zinc-600" />
            </div>
            <div className="text-[8px] text-zinc-500 font-mono tracking-wider">PHARMACY KIOSK</div>
            <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_6px_rgba(96,165,250,0.6)]" />
          </div>

          {/* Screen */}
          <div className="relative overflow-hidden rounded-lg bg-white">
            <Img
              src={src}
              alt={label}
              width={648}
              height={1152}
              className="w-full h-auto"
              sizes="340px"
              quality={90}
            />
          </div>

          {/* Bottom */}
          <div className="flex items-center justify-between px-3 py-2 mt-1">
            <div className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="1.5">
                <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="4" height="4" />
              </svg>
              <span className="text-[7px] text-zinc-500 font-mono">QR SCANNER</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[7px] text-zinc-500 font-mono">COLLECT</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="1.5">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Stand / Base */}
        <div className="mx-auto w-[60%] h-2 bg-zinc-700 rounded-b-lg shadow-lg" />
        <div className="mx-auto w-[40%] h-1.5 bg-zinc-600 rounded-b-md" />
      </div>

      <p className="text-xs text-white/40 text-center font-medium max-w-[300px]">{label}</p>
    </motion.div>
  );
}

function ScreenTable({ screens }: { screens: { image: string; label: string }[] }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-8 border border-white/10 rounded-xl overflow-hidden bg-[#12121a]"
    >
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left px-5 py-3 text-xs uppercase tracking-widest text-white/30 font-mono font-semibold">
              #
            </th>
            <th className="text-left px-5 py-3 text-xs uppercase tracking-widest text-white/30 font-mono font-semibold">
              Screen
            </th>
          </tr>
        </thead>
        <tbody>
          {screens.map((s, i) => (
            <tr key={i} className="border-b border-white/5 last:border-0">
              <td className="px-5 py-3 text-white/30 tabular-nums font-mono">{i + 1}</td>
              <td className="px-5 py-3 text-white/60">{s.label}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

function SectionBlock({
  section,
  index,
  accentColor,
  mockupType = "phone",
}: {
  section: ScreenSection;
  index: number;
  accentColor: string;
  mockupType?: "phone" | "kiosk";
}) {
  return (
    <section className="py-20 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <span
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold font-mono shrink-0"
              style={{ backgroundColor: `${accentColor}30`, color: accentColor }}
            >
              {index + 1}
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {section.title}
            </h3>
          </div>
          <p className="text-white/40 leading-relaxed max-w-2xl ml-11">
            {section.description}
          </p>
        </motion.div>

        {/* Mockups */}
        <div className={`flex flex-wrap justify-center ${mockupType === "kiosk" ? "gap-8 sm:gap-10 lg:gap-12" : "gap-6 sm:gap-8 lg:gap-10"}`}>
          {section.screens.map((screen, i) =>
            mockupType === "kiosk" ? (
              <KioskMockup
                key={i}
                src={screen.image}
                label={screen.label}
                delay={i * 0.1}
              />
            ) : (
              <PhoneMockup
                key={i}
                src={screen.image}
                label={screen.label}
                delay={i * 0.1}
              />
            )
          )}
        </div>

        {/* Screen table */}
        <ScreenTable screens={section.screens} />
      </div>
    </section>
  );
}

export default function ProjectDetailClient({
  sections,
  accentColor,
  mockupType = "phone",
}: {
  sections: ScreenSection[];
  accentColor: string;
  mockupType?: "phone" | "kiosk";
}) {
  const walkthroughLabel = mockupType === "kiosk" ? "Kiosk Walkthrough" : "App Walkthrough";
  return (
    <div>
      {/* Walkthrough navigation */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold uppercase tracking-widest text-white/30 font-mono mb-6"
        >
          {walkthroughLabel} &mdash; {sections.reduce((acc, s) => acc + s.screens.length, 0)} Screens
        </motion.h2>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2"
        >
          {sections.map((s, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full border border-white/10 bg-[#12121a] text-white/60 hover:border-white/20 transition-colors"
            >
              <span
                className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold font-mono"
                style={{ backgroundColor: `${accentColor}30`, color: accentColor }}
              >
                {i + 1}
              </span>
              {s.title}
              <span className="text-white/30 text-xs">({s.screens.length})</span>
            </span>
          ))}
        </motion.div>
      </section>

      {/* Screen sections */}
      {sections.map((section, i) => (
        <SectionBlock
          key={i}
          section={section}
          index={i}
          accentColor={accentColor}
          mockupType={mockupType}
        />
      ))}
    </div>
  );
}
