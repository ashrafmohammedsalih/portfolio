import Link from "next/link";
import Image from "next/image";
import KhozamaClient from "./KhozamaClient";

export const metadata = {
  title: "Khozama Meals — Smart Meal Subscription Platform | Ashraf Mohamed",
};

export default function KhozamaMealsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* ── Hero ── */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(rgba(26,58,74,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(26,58,74,0.4) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1a3a4a]/20 rounded-full blur-[120px]" />

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
          <div className="flex flex-col md:flex-row md:items-start gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono uppercase tracking-widest rounded-full bg-[#1a3a4a]/30 border border-[#1a3a4a]/40 text-[#5ba3c9]">
                  <span className="w-2 h-2 rounded-full bg-[#5ba3c9] animate-pulse" />
                  Mobile App &middot; IoT
                </span>
                <span className="px-3 py-1.5 text-xs font-mono uppercase tracking-widest rounded-full bg-white/5 border border-white/10 text-white/50">
                  AL KUZAMA TRADING CO
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                Khozama
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ba3c9] to-[#2d7a9c]"> Meals</span>
              </h1>
              <p className="text-base text-[#5ba3c9]/60 mt-2 font-light">
                منصة اشتراكات غذائية ذكية + Smart Lockers
              </p>
              <p className="text-lg md:text-xl text-white/50 mt-4 max-w-2xl leading-relaxed">
                A smart meal subscription platform for corporate workplaces. Employees subscribe via the app, choose daily meals, and collect them from Smart Locker machines at their office floor — the app decides, the machine delivers.
              </p>

              <div className="flex flex-wrap gap-2 mt-8">
                {["Flutter", "Dart", "BLoC", "Clean Architecture", "MQTT", "Smart Locker Hardware", "RESTful APIs", "Apple Pay", "mada", "Tamara"].map((t) => (
                  <span key={t} className="px-3 py-1.5 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-white/60">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Khozama logo */}
            <div className="flex-shrink-0 hidden md:block">
              <div className="relative w-48 h-20 opacity-70">
                <Image
                  src="/images/khozama-meals/kuzama-logo.png"
                  alt="Al Kuzama Trading Co"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Cover slide image ── */}
      <section className="mx-auto max-w-6xl px-6 py-12 border-t border-white/5">
        <div className="relative rounded-2xl overflow-hidden border border-white/10">
          <Image
            src="/images/khozama-meals/slide-cover.jpg"
            alt="Alkuzama Meal Subscriptions — Smart Lockers platform with locker machine displaying AlKuzama branded meal boxes"
            width={2751}
            height={1536}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      </section>

      {/* ── Client animated sections ── */}
      <KhozamaClient />

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
