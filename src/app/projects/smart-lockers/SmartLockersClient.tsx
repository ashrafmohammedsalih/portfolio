"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function SectionTitle({ num, title, sub }: { num: string; title: string; sub?: string }) {
  return (
    <motion.div
      variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold font-mono bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
          {num}
        </span>
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      </div>
      {sub && <p className="text-white/40 ml-11 text-sm">{sub}</p>}
    </motion.div>
  );
}

function HardwareCard({ title, specs, desc }: { title: string; specs: string; desc: string }) {
  return (
    <motion.div
      variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.4 }}
      className="bg-[#12121a] rounded-2xl border border-white/10 p-6 hover:border-cyan-500/30 transition-colors"
    >
      <h3 className="text-base font-semibold text-white mb-1">{title}</h3>
      <p className="text-xs font-mono text-cyan-400/70 mb-3">{specs}</p>
      <p className="text-sm text-white/40 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function ProductCard({
  model, title, subtitle, image, comm, accent, description, features, specs, tags, role,
}: {
  model: string; title: string; subtitle: string; image: string; comm: string;
  accent: string; description: string; features: string[]; specs: string[][];
  tags: string[]; role: string;
}) {
  const [showSpecs, setShowSpecs] = useState(false);

  return (
    <motion.div
      variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#12121a] rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-colors"
    >
      {/* Header with model & comm badge */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/5" style={{ backgroundColor: `${accent}08` }}>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl font-mono text-sm font-bold" style={{ backgroundColor: `${accent}20`, color: accent, border: `1px solid ${accent}30` }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <rect x="9" y="9" width="6" height="6" />
              <path d="M15 2v2M15 20v2M2 15h2M20 15h2M9 2v2M9 20v2M2 9h2M20 9h2" />
            </svg>
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-mono font-bold" style={{ color: accent }}>{model}</span>
              <span className="text-white/15">|</span>
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">KERONG</span>
            </div>
            <p className="text-[11px] text-white/30 mt-0.5">{subtitle}</p>
          </div>
        </div>
        <span className="px-3 py-1.5 text-[11px] font-mono font-bold rounded-lg" style={{ backgroundColor: `${accent}15`, border: `1px solid ${accent}25`, color: accent }}>
          {comm}
        </span>
      </div>

      {/* Content: image + details */}
      <div className="md:flex">
        {/* Product image */}
        <div className="relative md:w-72 h-64 md:h-auto flex-shrink-0 bg-gradient-to-br from-white/[0.02] to-transparent border-b md:border-b-0 md:border-r border-white/5">
          <Image src={image} alt={`${model} — ${title}`} fill className="object-contain p-4" />
        </div>

        {/* Details */}
        <div className="flex-1 p-6">
          <h3 className="text-base font-semibold text-white/90 mb-3">{title}</h3>
          <p className="text-sm text-white/40 leading-relaxed mb-5">{description}</p>

          {/* Features list */}
          <div className="mb-5">
            <h4 className="text-xs font-mono font-bold text-white/50 uppercase tracking-wider mb-3">Key Features</h4>
            <ul className="grid grid-cols-1 gap-2">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-white/50">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Role in our system */}
          <div className="mb-5 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider mb-2" style={{ color: `${accent}99` }}>
              Role in Our System
            </h4>
            <p className="text-xs text-white/40 leading-relaxed">{role}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 text-[10px] font-mono bg-white/5 border border-white/10 rounded-full text-white/40">
                {tag}
              </span>
            ))}
          </div>

          {/* Specs toggle */}
          <button
            onClick={() => setShowSpecs(!showSpecs)}
            className="flex items-center gap-2 text-xs font-mono text-white/40 hover:text-white/60 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className={`transition-transform ${showSpecs ? "rotate-90" : ""}`}
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
            {showSpecs ? "Hide" : "View"} Technical Specifications
          </button>

          {showSpecs && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} transition={{ duration: 0.3 }}
              className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-[#0a0a10]"
            >
              <table className="w-full text-sm">
                <tbody>
                  {specs.map(([key, val]) => (
                    <tr key={key} className="border-b border-white/5 last:border-0">
                      <td className="px-4 py-2.5 text-white/30 font-mono text-xs w-[40%]">{key}</td>
                      <td className="px-4 py-2.5 text-white/60 text-xs">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function SmartLockersClient() {
  return (
    <>
      {/* ── System Architecture ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="01" title="System Architecture" sub="End-to-end signal flow from cloud to physical lock" />

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#12121a] rounded-2xl border border-white/10 p-8 overflow-x-auto"
          >
            <pre className="text-sm font-mono leading-loose text-white/60 whitespace-pre">
{`┌─────────────────┐      ┌─────────────────────┐      ┌──────────────────────┐
│   CLOUD/APP     │      │   RASPBERRY PI       │      │   KERONG HARDWARE    │
│                 │      │                      │      │                      │
│  Mobile App     │ MQTT │  ┌────────────────┐  │ USB  │  ┌────────────────┐  │
│  Backend API ───┼──────┼─>│  Python Agent  │  │──────┼─>│  KR-CU24       │  │
│  Dashboard      │      │  │                │  │      │  │  Control Board │  │
│                 │ pub/ │  │  • MQTT Client │  │ RS485│  │                │  │
│  Commands:      │ sub  │  │  • Serial I/O  │  │ bus  │  │  24 Channels   │  │
│  • unlock(id)   │      │  │  • Lock State  │  │      │  │  Addr: 0x01    │  │
│  • status(id)   │<─────┼──│  • Health Mon  │  │<─────┼──│  Feedback      │  │
│  • lock_all()   │      │  └────────────────┘  │      │  └───────┬────────┘  │
│                 │      │                      │      │          │ 12V       │
└─────────────────┘      └──────────────────────┘      │  ┌───────┴────────┐  │
                                                       │  │ Electromagnetic│  │
                                                       │  │ Locks × 24     │  │
                                                       │  │ (per board)    │  │
                                                       │  │                │  │
                                                       │  │ • KR-S80 lock  │  │
                                                       │  │ • Solenoid 12V │  │
                                                       │  │ • IR Sensor    │  │
                                                       │  │ • LED Status   │  │
                                                       │  └────────────────┘  │
                                                       └──────────────────────┘`}
            </pre>
          </motion.div>
        </div>
      </section>

      {/* ── Signal Flow ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="02" title="Signal Flow — From App Tap to Lock Click" sub="What happens in the 200ms between a user tapping &quot;Unlock&quot; and the locker door opening" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 ml-11">
            {[
              { step: "1", label: "App / API", detail: "User taps \"Open Locker\" or backend triggers unlock command", color: "bg-violet-500/20 text-violet-400 border-violet-500/30" },
              { step: "2", label: "MQTT Broker", detail: "Command published to topic locker/{machine_id}/unlock with lock_id payload", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
              { step: "3", label: "Python Agent", detail: "Raspberry Pi subscribes, receives message, translates to RS485 serial frame", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
              { step: "4", label: "KR-CU24", detail: "Board receives RS485 command, validates address, triggers 12V pulse to lock solenoid", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
              { step: "5", label: "Lock Opens", detail: "Electromagnetic latch retracts, IR sensor confirms door opened, LED turns green", color: "bg-green-500/20 text-green-400 border-green-500/30" },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative"
              >
                <div className={`rounded-xl border p-4 h-full ${item.color}`}>
                  <div className="text-xs font-mono font-bold mb-2 opacity-60">STEP {item.step}</div>
                  <h4 className="text-sm font-semibold mb-2">{item.label}</h4>
                  <p className="text-xs opacity-60 leading-relaxed">{item.detail}</p>
                </div>
                {i < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 text-white/20">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hardware Components ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="03" title="Hardware Stack" sub="Every physical component in the locker system" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-11">
            <HardwareCard
              title="Raspberry Pi 4"
              specs="ARM Cortex-A72 &middot; 4GB RAM &middot; Linux"
              desc="The brain of the system. Runs the Python agent service that bridges MQTT cloud commands to RS485 serial hardware. Headless, auto-starts on boot, with watchdog monitoring."
            />
            <HardwareCard
              title="Kerong KR-CU24 Control Board"
              specs="DC 12V~24V &middot; RS485 &middot; 24 channels"
              desc="Centralized lock controller. Receives RS485 commands via USB adapter, controls up to 24 electromagnetic locks per board. FTDI RS485 chip with zero data packet loss. Up to 16 boards can be cascaded for 384 locks."
            />
            <HardwareCard
              title="USB to RS485 Adapter"
              specs="FTDI chip &middot; /dev/ttyUSB0 &middot; 9600 baud"
              desc="Converts USB serial from the Raspberry Pi to RS485 differential signaling. Industrial-grade shielded cable prevents EMI interference in electrically noisy environments."
            />
            <HardwareCard
              title="Electromagnetic Solenoid Locks"
              specs="12V DC &middot; KR-S series &middot; 500K cycles"
              desc="Kerong KR-S80 electromagnetic latches. When energized, the solenoid retracts the latch bolt, releasing the door. Spring-return auto-locks when power is removed. Rated for 500,000 open/close cycles."
            />
            <HardwareCard
              title="IR Occupancy Sensors"
              specs="Per-locker &middot; connected to CU board"
              desc="Infrared sensors mounted inside each locker compartment. Detect whether the locker contains items (occupied) or is empty. Status reported back through the CU board."
            />
            <HardwareCard
              title="LED Status Indicators"
              specs="Bi-color &middot; Green/Red per locker"
              desc="Visual feedback on each locker door. Green = available/empty, Red = occupied/locked. Controlled directly by the CU board based on lock state and IR sensor readings."
            />
          </div>
        </div>
      </section>

      {/* ── RS485 Protocol ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="04" title="RS485 Serial Protocol" sub="How the Python agent talks to the KR-CU24 board" />

          <div className="ml-11 space-y-6 max-w-3xl">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#12121a] rounded-2xl border border-white/10 overflow-hidden"
            >
              <div className="px-5 py-3 border-b border-white/5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-xs font-mono text-cyan-400/70 font-bold tracking-wider">UNLOCK COMMAND FRAME</span>
              </div>
              <div className="p-5 font-mono text-sm">
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    { byte: "0x02", label: "STX", color: "bg-violet-500/20 text-violet-300 border-violet-500/30" },
                    { byte: "0x01", label: "Board Addr", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
                    { byte: "0x4F", label: "CMD: Open", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
                    { byte: "0x05", label: "Lock #5", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
                    { byte: "0xXX", label: "Checksum", color: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
                    { byte: "0x03", label: "ETX", color: "bg-violet-500/20 text-violet-300 border-violet-500/30" },
                  ].map((b) => (
                    <div key={b.label} className={`px-3 py-2 rounded-lg border text-center ${b.color}`}>
                      <div className="text-xs font-bold">{b.byte}</div>
                      <div className="text-[10px] opacity-60 mt-0.5">{b.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-white/30 leading-relaxed">
                  Each command frame is sent via <span className="text-white/50">pyserial</span> at 9600 baud, 8N1. The board responds with a feedback frame confirming lock state change. Board address is set via rotary switch on the CU board (0x01–0x10 for 16 cascaded boards).
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#12121a] rounded-2xl border border-white/10 overflow-hidden"
            >
              <div className="px-5 py-3 border-b border-white/5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono text-emerald-400/70 font-bold tracking-wider">FEEDBACK RESPONSE</span>
              </div>
              <div className="p-5 font-mono text-sm">
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    { byte: "0x02", label: "STX", color: "bg-violet-500/20 text-violet-300 border-violet-500/30" },
                    { byte: "0x01", label: "Board Addr", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
                    { byte: "0x52", label: "Response", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
                    { byte: "0x05", label: "Lock #5", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
                    { byte: "0x01", label: "UNLOCKED", color: "bg-green-500/20 text-green-300 border-green-500/30" },
                    { byte: "0xXX", label: "Checksum", color: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
                    { byte: "0x03", label: "ETX", color: "bg-violet-500/20 text-violet-300 border-violet-500/30" },
                  ].map((b) => (
                    <div key={b.label + b.byte} className={`px-3 py-2 rounded-lg border text-center ${b.color}`}>
                      <div className="text-xs font-bold">{b.byte}</div>
                      <div className="text-[10px] opacity-60 mt-0.5">{b.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-white/30 leading-relaxed">
                  The CU board sends back a status byte: <span className="text-green-400">0x01</span> = unlocked, <span className="text-red-400">0x00</span> = locked. The Python agent publishes this to MQTT topic <span className="text-white/50">locker/status</span> for the backend to consume.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Python Agent ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="05" title="Python Agent — The Brain" sub="Systemd service running 24/7 on Raspberry Pi" />

          <div className="ml-11 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {[
              { title: "MQTT Subscriber", desc: "Connects to the cloud MQTT broker (TLS encrypted). Listens on locker/{machine_id}/# topics. Parses JSON payloads with lock_id and action (unlock, lock, status, lock_all)." },
              { title: "Serial Controller", desc: "Opens /dev/ttyUSB0 via pyserial at 9600 baud. Constructs RS485 command frames. Sends to KR-CU24 board. Reads feedback responses. Handles timeout and retry logic." },
              { title: "State Manager", desc: "Maintains an in-memory state map of all 24 locks (locked/unlocked/error). Publishes state changes back to MQTT. Persists last-known state to local SQLite for crash recovery." },
              { title: "Health Monitor", desc: "Sends heartbeat every 30s to the backend. Reports CPU temp, memory usage, uptime, connectivity status, and lock board health. Auto-restarts via systemd watchdog on failure." },
            ].map((mod, i) => (
              <motion.div
                key={mod.title}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#12121a] rounded-2xl border border-white/10 p-6"
              >
                <h3 className="text-sm font-mono font-bold text-cyan-400 mb-2">{mod.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{mod.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cascading & Scale ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="06" title="Scalable Architecture" sub="From 24 to 384 locks with cascaded RS485 boards" />

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="ml-11 bg-[#12121a] rounded-2xl border border-white/10 p-8 overflow-x-auto max-w-3xl"
          >
            <pre className="text-sm font-mono leading-loose text-white/50 whitespace-pre">
{`Raspberry Pi ──USB──> RS485 Bus
                         │
            ┌─────────────┼─────────────┐
            │             │             │
     ┌──────┴──────┐ ┌───┴──────┐ ┌───┴──────┐
     │  KR-CU24    │ │ KR-CU24  │ │ KR-CU24  │
     │  Addr: 0x01 │ │ Addr:0x02│ │ Addr:0x03│
     │  24 Locks   │ │ 24 Locks │ │ 24 Locks │  ... up to 16
     └─────────────┘ └──────────┘ └──────────┘
       Locks 1-24     Locks 25-48  Locks 49-72`}
            </pre>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="ml-11 mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl"
          >
            {[
              { num: "24", label: "Locks per board" },
              { num: "16", label: "Max cascaded boards" },
              { num: "384", label: "Max locks per Pi" },
              { num: "<200", label: "ms response time" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#12121a] rounded-xl border border-white/10 p-4 text-center">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">{stat.num}</div>
                <div className="text-xs text-white/30 mt-1 font-mono">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="07" title="Deployed Use Cases" sub="Where this system is actively running" />

          <div className="ml-11 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
            {[
              { icon: "🥗", title: "Khozama Meals", desc: "Smart locker boxes at corporate offices. Meals delivered by catering, employees open locker from the Khozama app via MQTT → Python Agent → RS485 → Lock opens." },
              { icon: "📦", title: "Parcel Lockers", desc: "Self-service parcel collection points. Delivery driver locks parcel, recipient gets SMS with code, code triggers unlock via backend → MQTT → Agent." },
              { icon: "🏥", title: "Wasfty Pharmacy", desc: "Medication storage lockers in healthcare facilities. Pharmacist loads prescriptions, patient scans QR, system unlocks the correct compartment." },
            ].map((uc, i) => (
              <motion.div
                key={uc.title}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#12121a] rounded-2xl border border-white/10 p-6 hover:border-cyan-500/30 transition-colors"
              >
                <div className="text-3xl mb-3">{uc.icon}</div>
                <h3 className="text-base font-semibold text-white mb-2">{uc.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{uc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Locker System Solutions ── */}
      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="08" title="Locker System Solutions" sub="KERONG PCB & intelligent control boards powering our locker infrastructure" />

          {/* System overview banner */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="ml-11 mb-12 bg-gradient-to-r from-cyan-500/5 to-emerald-500/5 rounded-2xl border border-cyan-500/10 p-6 flex flex-col md:flex-row items-center gap-6"
          >
            <div className="relative w-full md:w-64 h-48 flex-shrink-0 rounded-xl overflow-hidden bg-white/5">
              <Image src="/images/smart-lockers/locker-system.webp" alt="KERONG Smart Locker System Solution" fill className="object-contain p-2" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Complete Locker Control Ecosystem</h3>
              <p className="text-sm text-white/40 leading-relaxed mb-3">
                Our smart locker infrastructure is built on KERONG&apos;s industrial-grade control boards. The system architecture flows from cloud software through a network bridge (BU/SBU) down to individual lock controllers (CU/SCU/NCU), enabling remote management of hundreds of locks from a single Raspberry Pi gateway.
              </p>
              <div className="flex flex-wrap gap-2">
                {["CE Certified", "FCC Certified", "RoHS", "ISO9001", "500K Cycle Life"].map((cert) => (
                  <span key={cert} className="px-2.5 py-1 text-[10px] font-mono bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400/80">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Product cards */}
          <div className="ml-11 space-y-8">
            <ProductCard
              model="KR-BU"
              title="PCB Control System Electronic Locker Controller"
              subtitle="RS485 Communicator — Network Bridge Unit"
              image="/images/smart-lockers/kr-bu.webp"
              comm="RS485 + TCP/IP"
              accent="#06b6d4"
              description="The KR-BU serves as the network bridge between your PC/server software and the downstream CU lock controllers. It converts TCP/IP commands from your application into RS485 serial frames that the lock control boards understand. This is the central communication hub in our locker architecture — every unlock command from the cloud passes through this board."
              features={[
                "Converts TCP/IP commands to RS485 format for CU boards",
                "Co-works with PC, tablet, Raspberry Pi (iOS, Windows, Linux)",
                "Open development platform — design your own control software",
                "Anti-dust protective ABS enclosure for industrial environments",
                "Optional Bluetooth mobile app unlock support",
                "STM8S103K3T6 microprocessor for reliable operation",
              ]}
              specs={[
                ["Power Supply", "DC 12V ~ 24V"],
                ["Standby Current", "60mA"],
                ["Dynamic Current", "200mA ~ 3000mA"],
                ["Communication", "TCP/IP LANs/WANs + RS485"],
                ["Connector", "RJ45, 8P8C"],
                ["PCB Dimensions", "200mm x 140mm x 15mm"],
                ["Shell Dimensions", "210mm x 150mm x 35mm (ABS)"],
                ["Operating Temp", "-25°C to +65°C"],
                ["Humidity", "5% ~ 95% RH"],
                ["Reaction Time", "< 1 second"],
                ["Card Capacity", "20,000 cards"],
                ["Offline Memory", "100,000 records"],
              ]}
              tags={["RS485 Communicator", "PCB Control Board", "Network Bridge"]}
              role="In our system, the KR-BU sits between the Raspberry Pi and the KR-CU24 boards. The Python agent sends TCP/IP commands via LAN, which the BU translates to RS485 frames sent down the serial bus to each lock controller."
            />

            <ProductCard
              model="KR-SBU"
              title="PCB Control System Parcel Locker Master Controller"
              subtitle="Smart Basic Unit — Master Controller for SCU Networks"
              image="/images/smart-lockers/kr-sbu.webp"
              comm="TCP/IP → RS485"
              accent="#60a5fa"
              description="The KR-SBU is the master controller variant specifically designed for parcel locker deployments using KR-SCU standalone units. While architecturally similar to the KR-BU, it's optimized for managing large networks of individual SCU boards — each controlling a single locker compartment. It can manage up to 100 KR-SCU units in series, making it ideal for large-scale parcel delivery installations."
              features={[
                "Master controller for KR-SCU standalone unit ecosystem",
                "Manages up to 100 KR-SCU units in series via RS485",
                "TCP/IP to RS485 protocol conversion",
                "Multi-platform support (iOS, Windows, Linux)",
                "Designed for high-volume parcel locker deployments",
                "Same robust ABS enclosure as KR-BU platform",
              ]}
              specs={[
                ["Power Supply", "DC 12V ~ 24V"],
                ["Standby Current", "60mA"],
                ["Dynamic Current", "200mA ~ 3000mA"],
                ["Communication", "TCP/IP to RS485 conversion"],
                ["Max SCU Units", "100 boards in series"],
                ["Connector", "RJ45, 8P8C"],
                ["PCB Dimensions", "200mm x 140mm x 15mm"],
                ["Shell Dimensions", "210mm x 150mm x 35mm (ABS)"],
                ["Operating Temp", "-25°C to +65°C"],
                ["Humidity", "5% ~ 95% RH"],
                ["Working Life", "500,000 cycles"],
                ["Certifications", "CE, FCC, RoHS"],
              ]}
              tags={["PCB Control Board", "Master Controller", "Parcel Locker"]}
              role="Used in our parcel locker deployments where each compartment has its own SCU board. The SBU aggregates commands from the Raspberry Pi and distributes them to individual SCU units, allowing independent control of each locker door."
            />

            <ProductCard
              model="KR-NCU16L"
              title="Intelligent Control System Smart Delivery Locker Controller"
              subtitle="Network Control Unit — All-in-One with TCP/IP"
              image="/images/smart-lockers/kr-ncu16l.webp"
              comm="TCP/IP"
              accent="#34d399"
              description="The KR-NCU16L is an all-in-one intelligent controller with built-in TCP/IP networking — no separate BU bridge required. It directly controls 16 locks from a single board and connects straight to your network via Ethernet. This makes it the simplest deployment option: just plug in power and Ethernet, and you have a network-connected 16-lock system. Up to 16 boards can be cascaded for 256 total locks."
              features={[
                "All-in-one: built-in TCP/IP networking — no separate BU needed",
                "Controls 16 locks directly from one board",
                "Up to 16 boards cascaded via RS485 (256 locks total)",
                "Integrated infrared sensor and LED support per lock",
                "IP67 rated for outdoor/harsh environment deployments",
                "Open development platform with multi-OS support",
              ]}
              specs={[
                ["Power Supply", "DC 12V ~ 24V"],
                ["Standby Current", "60mA"],
                ["Dynamic Current", "200mA ~ 3000mA"],
                ["Lock Channels", "16 per board"],
                ["Communication", "TCP/IP LANs/WANs + RS485"],
                ["Max Cascade", "16 boards (256 locks)"],
                ["Connector", "RJ45, 8P8C"],
                ["PCB Dimensions", "200mm x 140mm x 15mm"],
                ["Operating Temp", "-25°C to +65°C"],
                ["Humidity", "5% ~ 85% RH"],
                ["IP Rating", "IP67"],
                ["Card Capacity", "20,000 cards"],
                ["Offline Memory", "100,000 records"],
              ]}
              tags={["Intelligent Control", "TCP/IP", "Smart Delivery", "IP67"]}
              role="Ideal for standalone smart delivery locker kiosks. In our Wasfaty Pharmacy deployment, the NCU16L connects directly to the local network — the Raspberry Pi communicates via TCP/IP without needing a separate BU bridge, simplifying the hardware stack."
            />

            <ProductCard
              model="KR-SCU"
              title="Intelligent Control System Parcel Delivery Locker Controller"
              subtitle="Standalone Control Unit — One Lock, One Board"
              image="/images/smart-lockers/kr-scu.webp"
              comm="RS485"
              accent="#a78bfa"
              description="The KR-SCU is a single-lock standalone controller — one board per locker compartment. This avoids wasting channels on larger 16-way or 24-way boards when you need independent control of individual compartments. Up to 100 SCU units can be daisy-chained via RS485, each with its own infrared sensor and LED indicator. Perfect for mixed-size locker configurations where each door needs independent control logic."
              features={[
                "Single-lock controller — avoids wasting multi-channel boards",
                "Up to 100 units daisy-chained via RS485 bus",
                "Built-in infrared sensor for occupancy detection (empty/occupied)",
                "LED status indicator per locker door",
                "RS485-USB/232 converter for direct PC connection",
                "Ideal for refrigerators, freezers, and specialty compartments",
              ]}
              specs={[
                ["Power Supply", "DC 12V ~ 24V"],
                ["Standby Current", "60mA"],
                ["Dynamic Current", "200mA ~ 3000mA"],
                ["Channels", "1 lock per SCU board"],
                ["Communication", "RS485 (via SBU master)"],
                ["Max Series", "100 SCU boards"],
                ["Connector", "RJ45, 8P8C"],
                ["Dimensions", "218mm x 106mm"],
                ["Weight", "0.4 ~ 0.8 kg"],
                ["Operating Temp", "-25°C to +65°C"],
                ["Humidity", "5% ~ 85% RH"],
                ["Working Life", "500,000 cycles"],
              ]}
              tags={["Intelligent Control", "Parcel Delivery", "Standalone"]}
              role="Used in our Khozama Meals locker deployment for specialty compartments (heated/cooled). Each meal compartment gets its own SCU, allowing independent temperature-zone control while maintaining unified lock management through the SBU master."
            />
          </div>
        </div>
      </section>

      {/* ── KR-CU24 Specs Table ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="09" title="KR-CU24 Specifications" sub="Kerong centralized lock control board — technical datasheet" />

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="ml-11 overflow-hidden rounded-2xl border border-white/10 bg-[#12121a] max-w-2xl"
          >
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Power Supply", "DC 12V ~ 24V (triple-voltage selectable)"],
                  ["Working Current", "0.8A ~ 2A"],
                  ["Lock Channels", "24 per board"],
                  ["Communication", "RS485 (FTDI chip) + TCP/IP"],
                  ["Cascading", "Up to 16 boards in series (rotary switch addressing)"],
                  ["Dimensions", "218mm x 106mm"],
                  ["Operating Temp", "-25°C to +65°C"],
                  ["Humidity", "10% ~ 90% RH"],
                  ["Data Integrity", "Zero packet loss guarantee"],
                  ["Memory", "20,000 cards / 100,000 offline transactions"],
                  ["Certifications", "CE, FCC, RoHS"],
                  ["Lock Compatibility", "KR-S series electromagnetic solenoid locks"],
                ].map(([key, val]) => (
                  <tr key={key} className="border-b border-white/5 last:border-0">
                    <td className="px-5 py-3 text-white/40 font-mono text-xs w-[40%]">{key}</td>
                    <td className="px-5 py-3 text-white/70 text-sm">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
    </>
  );
}
