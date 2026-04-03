import Link from "next/link";
import Img from "@/components/Img";
import MinistryClient from "./MinistryClient";

export const metadata = {
  title: "Ministry of Industry — Employee Purchase System | Ashraf Mohamed",
};

export default function MinistryPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* ── Hero ── */}
      <div className="relative overflow-hidden">
        {/* Animated grid background */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]" />

        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="mx-auto max-w-6xl px-6 py-5">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </Link>
          </div>
        </div>

        <div className="relative z-[1] mx-auto max-w-6xl px-6 pt-28 pb-24">
          {/* Ministry logo */}
          <div className="flex items-center gap-4 mb-8">
            <div className="relative w-48 h-14 opacity-70">
              <Img
                src="/images/ministry-of-industry/ministry-logo.png"
                alt="Ministry of Industry and Mineral Resources"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono uppercase tracking-widest rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              IoT &middot; Hardware
            </span>
            <span className="px-3 py-1.5 text-xs font-mono uppercase tracking-widest rounded-full bg-white/5 border border-white/10 text-white/50">
              MOGI ALTIGAH
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Ministry of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400"> Industry</span>
          </h1>
          <p className="text-lg md:text-xl text-emerald-400/60 font-light mt-2">
            Employee Purchase System via Access Card & Self-Service Vending Machines
          </p>
          <p className="mt-6 text-base md:text-lg text-white/50 leading-relaxed max-w-2xl">
            A complete IoT ecosystem that automates employee meal entitlements at the Saudi Ministry of Industry. Employees use their existing workplace NFC/RFID access cards to purchase juices, meals, and snacks from smart vending machines — no cash, no apps, just tap and go.
          </p>

          <div className="flex flex-wrap gap-2 mt-10">
            {["Windows Server", "IIS", "MSSQL", "Kerberos", "Active Directory", "NFC/RFID", "Backend API", "Admin Dashboard", "REST APIs", "Access Control"].map((t) => (
              <span key={t} className="px-3 py-1.5 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-white/60">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Real Photos Gallery ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 border-t border-white/5">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-white/30 font-mono mb-8">
          Deployed at Ministry of Industry — Riyadh
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1 relative aspect-[3/5] rounded-2xl overflow-hidden border border-white/10">
            <Img
              src="/images/ministry-of-industry/lobby-signage.jpg"
              alt="Digital signage in the Ministry lobby announcing the free meal vending service"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white text-sm font-medium">Ministry Lobby Signage</p>
              <p className="text-white/50 text-xs font-mono">خدمة مكائن الوجبات المجانية</p>
            </div>
          </div>
          <div className="md:col-span-1 relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10">
            <Img
              src="/images/ministry-of-industry/machine-front.jpg"
              alt="Afen vending machine front view with refrigerated shelves, touchscreen, and NFC reader"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white text-sm font-medium">Afen Smart Vending Machine</p>
              <p className="text-white/50 text-xs font-mono">Touchscreen + NFC Card Reader</p>
            </div>
          </div>
          <div className="md:col-span-1 relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10">
            <Img
              src="/images/ministry-of-industry/machine-side.jpg"
              alt="Side view of branded vending machine — المذاق مو طبيعي — صناعة سعودية"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white text-sm font-medium">Branded Machine</p>
              <p className="text-white/50 text-xs font-mono">المذاق مو طبيعي — صناعة سعودية</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Client-side animated sections ── */}
      <MinistryClient />

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
