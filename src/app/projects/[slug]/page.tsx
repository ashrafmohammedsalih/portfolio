import { notFound } from "next/navigation";
import Link from "next/link";
import Img from "@/components/Img";
import { projects } from "@/data/portfolio";
import ProjectDetailClient from "./ProjectDetailClient";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project
      ? `${project.title} | Ashraf Mohamed`
      : "Project Not Found",
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  const accentColor = project.color || "#06b6d4";

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* ── Hero Banner ── */}
      <div className="relative overflow-hidden">
        {/* Animated grid background */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(${accentColor}40 1px, transparent 1px), linear-gradient(90deg, ${accentColor}40 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ backgroundColor: `${accentColor}15` }}
        />

        {/* Logo watermark */}
        {project.logo && (
          <div className="absolute -right-10 top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none select-none hidden md:block">
            <Img
              src={project.logo}
              alt=""
              width={500}
              height={500}
              className="w-[340px] lg:w-[420px] h-auto brightness-0 invert"
              aria-hidden="true"
            />
          </div>
        )}

        {/* Back button */}
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
          <div className="flex items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono uppercase tracking-widest rounded-full border"
              style={{ backgroundColor: `${accentColor}15`, borderColor: `${accentColor}30`, color: accentColor }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
              {project.category === "app" ? "Mobile App" : "IoT & Hardware"}
            </span>
            <span className="px-3 py-1.5 text-xs font-mono uppercase tracking-widest rounded-full bg-white/5 border border-white/10 text-white/50">
              {project.company}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-white/50 mt-4 max-w-2xl leading-relaxed">
            {project.summary}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mt-10">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-white/60"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Key Highlights ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 border-t border-white/5">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-white/30 font-mono mb-8">
          Key Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.highlights.map((h, i) => (
            <div
              key={i}
              className="flex gap-4 p-4 rounded-xl bg-[#12121a] border border-white/10 hover:border-white/20 transition-colors"
            >
              <span
                className="mt-0.5 shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-mono text-white"
                style={{ backgroundColor: `${accentColor}30`, color: accentColor }}
              >
                {i + 1}
              </span>
              <p className="text-sm text-white/50 leading-relaxed">{h}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Screen Sections ── */}
      {project.sections && project.sections.length > 0 && (
        <ProjectDetailClient sections={project.sections} accentColor={accentColor} mockupType={project.mockupType} />
      )}

      {/* ── Fallback for projects without sections ── */}
      {(!project.sections || project.sections.length === 0) &&
        project.images.length === 0 && (
          <section className="mx-auto max-w-6xl px-6 pb-20">
            <div className="border border-dashed border-white/10 rounded-2xl p-16 text-center">
              <p className="text-white/30 text-sm font-mono">Screenshots coming soon</p>
            </div>
          </section>
        )}

      {/* ── Simple images fallback ── */}
      {(!project.sections || project.sections.length === 0) &&
        project.images.length > 0 && (
          <section className="mx-auto max-w-6xl px-6 pb-20">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-white/30 font-mono mb-8">
              App Screens
            </h2>
            <div className="space-y-6">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-[#12121a]"
                >
                  <Img
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

      {/* ── Footer nav ── */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-12 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All Projects
          </Link>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
          >
            Back to Top
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
