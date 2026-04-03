import Link from "next/link";
import SmartLockersClient from "./SmartLockersClient";

export const metadata = {
  title: "Smart Lockers — IoT Locker Control System | Ashraf Mohamed",
};

export default function SmartLockersPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* ── Hero — Dark hardware theme ── */}
      <div className="relative overflow-hidden">
        {/* Animated grid background */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,200,180,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,180,0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />

        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="mx-auto max-w-6xl px-6 py-5">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              Back to Projects
            </Link>
          </div>
        </div>

        <div className="relative z-[1] mx-auto max-w-6xl px-6 pt-28 pb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono uppercase tracking-widest rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              IoT &middot; Hardware
            </span>
            <span className="px-3 py-1.5 text-xs font-mono uppercase tracking-widest rounded-full bg-white/5 border border-white/10 text-white/50">
              MOGI ALTIGAH
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Smart
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400"> Lockers</span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 mt-4 max-w-2xl leading-relaxed">
            A Python-based IoT agent running on Raspberry Pi that controls Kerong electromagnetic locker locks via RS485 serial communication. Connected to the cloud via MQTT for remote lock/unlock commands.
          </p>

          {/* Terminal-style code preview */}
          <div className="mt-10 max-w-xl bg-[#12121a] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-white/30 font-mono">raspberry-pi ~ agent.py</span>
            </div>
            <pre className="px-5 py-4 text-sm font-mono leading-relaxed overflow-x-auto">
              <code>
                <span className="text-cyan-400">mqtt</span><span className="text-white/40">.on_message(</span><span className="text-emerald-400">&quot;locker/unlock&quot;</span><span className="text-white/40">)</span>{"\n"}
                <span className="text-white/40">  └─ </span><span className="text-cyan-400">rs485</span><span className="text-white/40">.send(</span><span className="text-amber-400">board_addr</span><span className="text-white/40">, </span><span className="text-amber-400">lock_id</span><span className="text-white/40">, </span><span className="text-emerald-400">UNLOCK</span><span className="text-white/40">)</span>{"\n"}
                <span className="text-white/40">       └─ KR-CU24 → </span><span className="text-cyan-400">Lock</span><span className="text-white/40"> ⚡ </span><span className="text-emerald-400">OPEN</span>{"\n"}
                <span className="text-white/40">       └─ feedback → </span><span className="text-emerald-400">status: unlocked</span>
              </code>
            </pre>
          </div>

          <div className="flex flex-wrap gap-2 mt-10">
            {["Python", "Raspberry Pi", "RS485", "Kerong KR-CU24", "MQTT", "Serial Communication", "IoT", "REST APIs"].map((t) => (
              <span key={t} className="px-3 py-1.5 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-white/60">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Client-side animated sections ── */}
      <SmartLockersClient />

      {/* ── Footer nav ── */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-12 flex items-center justify-between">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            All Projects
          </Link>
          <a href="#" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors">
            Back to Top
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
          </a>
        </div>
      </section>
    </main>
  );
}
