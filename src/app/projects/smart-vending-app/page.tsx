import Link from "next/link";
import Img from "@/components/Img";
import SmartVendingClient from "./SmartVendingClient";

export const metadata = {
  title: "Smart Vending App — Mobile Vending Machine Companion | Ashraf Mohamed",
};

export default function SmartVendingAppPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* ── Hero ── */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(rgba(106,176,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(106,176,76,0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6AB04C]/10 rounded-full blur-[120px]" />

        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="mx-auto max-w-6xl px-6 py-5">
            <Link href="/#projects" className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              Back to Projects
            </Link>
          </div>
        </div>

        <div className="relative z-[1] mx-auto max-w-6xl px-6 pt-28 pb-24">
          <div className="flex flex-col md:flex-row md:items-start gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono uppercase tracking-widest rounded-full bg-[#6AB04C]/15 border border-[#6AB04C]/25 text-[#6AB04C]">
                  <span className="w-2 h-2 rounded-full bg-[#6AB04C] animate-pulse" />
                  Mobile App
                </span>
                <span className="px-3 py-1.5 text-xs font-mono uppercase tracking-widest rounded-full bg-white/5 border border-white/10 text-white/50">
                  MOGI ALTIGAH
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                Smart
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6AB04C] to-[#4a8a34]"> Vending</span>
              </h1>
              <p className="text-base text-[#6AB04C]/60 mt-2 font-light">
                Mobile Companion App for SaladBar Vending Machines
              </p>
              <p className="text-lg md:text-xl text-white/50 mt-4 max-w-2xl leading-relaxed">
                A mobile app that turns any SaladBar vending machine into a smart self-service kiosk. Users scan the machine&apos;s QR code, browse available products, select items, and pay directly from their phone — the machine dispenses automatically after payment.
              </p>

              {/* Terminal preview */}
              <div className="mt-8 max-w-md bg-[#12121a] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs text-white/30 font-mono">vending-flow</span>
                </div>
                <pre className="px-5 py-4 text-sm font-mono leading-relaxed">
                  <code>
                    <span className="text-[#6AB04C]">scan</span><span className="text-white/40">(</span><span className="text-amber-400">machine_qr</span><span className="text-white/40">)</span>{"\n"}
                    <span className="text-white/40">  └─ </span><span className="text-[#6AB04C]">fetch</span><span className="text-white/40">(</span><span className="text-amber-400">products</span><span className="text-white/40">)</span>{"\n"}
                    <span className="text-white/40">     └─ </span><span className="text-[#6AB04C]">select</span><span className="text-white/40"> → </span><span className="text-[#6AB04C]">pay</span><span className="text-white/40"> → </span><span className="text-emerald-400">dispense</span>
                  </code>
                </pre>
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                {["Flutter", "Dart", "BLoC", "QR Scanner", "Vending API", "Apple Pay", "PayPal", "Clean Architecture"].map((t) => (
                  <span key={t} className="px-3 py-1.5 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-white/60">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 hidden md:block">
              <div className="relative w-24 h-24 opacity-60">
                <Img
                  src="/images/saladbar-meals/logo.png"
                  alt="SaladBar"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Client sections ── */}
      <SmartVendingClient />

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
