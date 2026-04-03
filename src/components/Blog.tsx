"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const posts = [
  {
    title: "Magnum Scanner",
    desc: "Baseline once. Watch always. Pivot fast. A recon automation tool for HTB, THM, and OSCP lab environments.",
    date: "Dec 2025",
    url: "https://medium.com/@ashrafal3oni/magnum-scanner-bde5cda2d2d3",
    category: "Security Tool",
    accent: "#ef4444",
  },
  {
    title: "Linux vs. macOS: Architecture and Portability Comparison",
    desc: "Deep dive into how Linux and macOS differ in architecture, kernel design, and cross-platform portability for security tooling.",
    date: "May 2025",
    url: "https://medium.com/@ashrafal3oni/%EF%B8%8F-linux-vs-macos-architecture-and-portability-comparison-952872411e21",
    category: "Systems",
    accent: "#f59e0b",
  },
  {
    title: "When to Use Each Nmap Scan Type",
    desc: "Protocol-level breakdown of Nmap scan options — TCP SYN, UDP, ACK, FIN, and when each scan type is most effective during enumeration.",
    date: "Apr 2025",
    url: "https://medium.com/@ashrafal3oni/when-to-use-each-scan-type-8700c0a3cf01",
    category: "Pentesting",
    accent: "#ef4444",
  },
  {
    title: "systemctl and Systemd Services for Privilege Escalation",
    desc: "How to enumerate and exploit misconfigured systemd services for Linux privilege escalation during penetration tests.",
    date: "Feb 2025",
    url: "https://medium.com/@ashrafal3oni/understanding-systemctl-and-systemd-services-for-privilege-escalation-01201f976f85",
    category: "Priv Esc",
    accent: "#ef4444",
  },
  {
    title: "The Importance of Testing in Software Development",
    desc: "Building robust software requires thorough testing — unit tests, integration tests, and end-to-end testing strategies.",
    date: "Dec 2023",
    url: "https://medium.com/@ashrafal3oni/the-importance-of-testing-in-software-development-8842fac66666",
    category: "Engineering",
    accent: "#06b6d4",
  },
  {
    title: "The Power of Singleton in App Development",
    desc: "Managing instances efficiently with the Singleton pattern — when to use it and how to implement it in Flutter and Dart.",
    date: "Dec 2023",
    url: "https://medium.com/@ashrafal3oni/the-power-of-singleton-in-app-development-f402ad87d6e8",
    category: "Engineering",
    accent: "#06b6d4",
  },
  {
    title: "Version Control in Professional Software Development",
    desc: "Version control is a critical aspect of professional development — Git workflows, branching strategies, and team collaboration.",
    date: "Oct 2023",
    url: "https://medium.com/@ashrafal3oni/version-control-in-professional-software-development-c8c163b61122",
    category: "Engineering",
    accent: "#06b6d4",
  },
  {
    title: "Flutter Clean Architecture",
    desc: "The secret to maintainable apps — structuring Flutter projects with Clean Architecture, BLoC pattern, and separation of concerns.",
    date: "Jul 2023",
    url: "https://medium.com/@ashrafal3oni/flutter-clean-architecture-bf36eea1f838",
    category: "Engineering",
    accent: "#06b6d4",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6 border-t border-white/5">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold font-mono text-red-400">05.</span>
            <h2 className="text-3xl font-bold tracking-tight text-white">Blog & Writeups</h2>
            <div className="hidden sm:block flex-1 h-px bg-white/10 ml-4" />
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex items-center justify-between mb-10"
        >
          <p className="text-white/35 text-sm max-w-lg">
            Security research, pentesting techniques, and software engineering insights published on Medium.
          </p>
          <a
            href="https://medium.com/@ashrafal3oni"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-mono rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/25 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-60">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
            View all on Medium
          </a>
        </motion.div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((post, i) => (
            <motion.a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-[#12121a] border border-white/[0.08] rounded-2xl p-5 hover:border-white/20 transition-all flex flex-col"
            >
              {/* Top row: category + date */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-md"
                  style={{ backgroundColor: `${post.accent}15`, color: post.accent, border: `1px solid ${post.accent}20` }}
                >
                  {post.category}
                </span>
                <span className="text-[11px] font-mono text-white/20">{post.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-[15px] font-semibold text-white/85 mb-2 group-hover:text-white transition-colors leading-snug">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-white/30 leading-relaxed line-clamp-2 flex-1 mb-4">
                {post.desc}
              </p>

              {/* Read more */}
              <div className="flex items-center gap-1.5 text-[11px] text-white/20 group-hover:text-red-400 transition-colors">
                Read on Medium
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Mobile CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="sm:hidden mt-8 text-center"
        >
          <a
            href="https://medium.com/@ashrafal3oni"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/25 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-60">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
            View all on Medium
          </a>
        </motion.div>
      </div>
    </section>
  );
}
