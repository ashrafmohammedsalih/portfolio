"use client";

import Img from "@/components/Img";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const certs = [
  {
    title: "OffSec Certified Professional+ (OSCP+)",
    issuer: "Offensive Security (OffSec)",
    date: "March 2026",
    verifyUrl: "https://credentials.offsec.com/4d4f5c24-d3d8-4c21-9def-ac878b7ffab9#acc.qbPsNaDQ",
    desc: "The OSCP+ certification validates advanced practical skills in identifying and exploiting vulnerabilities, privilege escalation techniques, scripting for automation, and comprehensive web application attack methodologies. Demonstrates real-world penetration testing capabilities through rigorous hands-on assessments.",
    tags: ["Privilege Escalation", "Exploitation", "Web App Security", "Scripting", "Post-Exploitation"],
    accent: "#ef4444",
    badge: "OSCP+",
    image: "/images/oscp-plus.png",
  },
  {
    title: "OffSec Certified Professional (OSCP)",
    issuer: "Offensive Security (OffSec)",
    date: "March 2026",
    verifyUrl: "https://credentials.offsec.com/2a28da2b-9361-4754-8497-7a2b3eb938b4",
    desc: "The industry-standard OSCP certification demonstrates proficiency in ethical hacking and penetration testing. Validates practical skills through a challenging 24-hour hands-on exam, requiring successful compromise of multiple systems in a realistic network environment.",
    tags: ["Network Pentesting", "Linux Security", "Windows Security", "Enumeration", "Active Directory"],
    accent: "#f97316",
    badge: "OSCP",
    image: "/images/oscp.png",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 border-t border-white/5">
      <div className="mx-auto max-w-5xl">
        {/* Section header with number */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold font-mono text-red-400">02.</span>
            <h2 className="text-3xl font-bold tracking-tight text-white">Professional Certifications</h2>
            <div className="hidden sm:block flex-1 h-px bg-white/10 ml-4" />
          </div>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/35 text-sm mb-12 max-w-2xl"
        >
          Certified in advanced offensive security techniques with hands-on expertise in penetration testing and web application security.
        </motion.p>

        {/* Cert cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.badge}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#12121a] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-white/15 transition-colors flex flex-col"
            >
              {/* Badge header with real image */}
              <div
                className="relative h-52 flex items-center justify-center overflow-hidden"
                style={{ background: `linear-gradient(145deg, ${cert.accent}12 0%, ${cert.accent}04 60%, #12121a 100%)` }}
              >
                {/* Subtle grid */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `linear-gradient(${cert.accent}60 1px, transparent 1px), linear-gradient(90deg, ${cert.accent}60 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                  }}
                />
                {/* Glow behind badge */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-[60px]"
                  style={{ backgroundColor: `${cert.accent}20` }}
                />
                {/* Real OffSec badge image */}
                <div className="relative w-36 h-36 md:w-40 md:h-40 z-[1]">
                  <Img
                    src={cert.image}
                    alt={cert.badge}
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="160px"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-base font-semibold text-white/90 mb-2">{cert.title}</h3>

                <div className="flex items-center gap-2 mb-4">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/25">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span className="text-xs text-white/30 font-mono">Issued: {cert.date}</span>
                </div>

                <p className="text-sm text-white/35 leading-relaxed mb-5 flex-1">{cert.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] font-mono rounded-md bg-white/[0.04] border border-white/[0.08] text-white/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Verify button */}
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-medium text-white transition-all"
                  style={{
                    background: `linear-gradient(135deg, ${cert.accent}, #8b5cf6)`,
                    boxShadow: `0 4px 20px ${cert.accent}30`,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Verify Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
