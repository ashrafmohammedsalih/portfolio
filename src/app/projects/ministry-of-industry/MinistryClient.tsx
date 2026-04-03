"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const accent = "#10b981";

function SectionTitle({ num, title, sub }: { num: string; title: string; sub?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
          {num}
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-white">{title}</h2>
      </div>
      {sub && <p className="text-white/40 ml-11 text-sm">{sub}</p>}
    </motion.div>
  );
}

export default function MinistryClient() {
  return (
    <>
      {/* ── How It Works ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="01" title="How It Works — Tap & Go" sub="From card tap to product dispense in under 1 second" />
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/40 leading-relaxed max-w-2xl ml-11 mb-12"
          >
            Employees already carry NFC/RFID access cards to enter the building. We repurposed the same card as a meal entitlement card — no new cards, no cash, no apps. Just walk up to the vending machine and tap.
          </motion.p>

          <div className="ml-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Select Product", desc: "Employee browses the touchscreen and picks a juice, meal, or snack from the vending machine.", color: "bg-violet-500/20 text-violet-400 border-violet-500/30" },
              { step: "02", title: "Tap Access Card", desc: "Employee taps their existing workplace NFC/RFID badge on the reader. The machine sends card ID, slot, machine ID, and price to the backend.", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
              { step: "03", title: "Instant Validation", desc: "Backend verifies identity, checks daily quota by classification, validates product category, and confirms balance — all in under 1 second.", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
              { step: "04", title: "Dispense & Enjoy", desc: "Product is dispensed, points are deducted, and the transaction is logged. If validation fails, the machine shows the rejection reason.", color: "bg-green-500/20 text-green-400 border-green-500/30" },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                className={`rounded-xl border p-4 ${item.color}`}
              >
                <div className="text-xs font-mono font-bold mb-2 opacity-60">STEP {item.step}</div>
                <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
                <p className="text-xs opacity-60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Access Card & Points System ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="02" title="Access Card as a Meal Card" sub="Repurposing existing NFC/RFID badges for the meal system" />
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="ml-11 max-w-3xl"
          >
            <p className="text-white/40 leading-relaxed mb-8">
              The key innovation is that the system uses the employee&apos;s <strong className="text-white/80">existing workplace access card</strong> — the same badge they use to enter the building, open doors, and access restricted areas. No separate meal card, no app download, no cash handling. The NFC/RFID card is linked to the employee profile in the admin panel, and from that moment the card works as a meal entitlement card at every vending machine in the building.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6">
                <h3 className="font-semibold text-white/90 mb-3 flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>
                  Virtual Points — Not Real Money
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  The system operates on a <strong className="text-white/60">virtual daily points balance</strong> — not real currency. Points are allocated automatically each day based on the employee&apos;s classification. Unused points expire at midnight. This prevents hoarding and ensures fair daily distribution.
                </p>
              </div>
              <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6">
                <h3 className="font-semibold text-white/90 mb-3 flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  Dual Period Recharge
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  Optional two-period recharge: <strong className="text-white/60">Breakfast (7:00–10:00 AM)</strong> and <strong className="text-white/60">Lunch (12:00–3:00 PM)</strong>. Balance resets before each period. For example, a regular employee gets 150 pts for breakfast + 150 pts for lunch, preventing someone from spending their entire allowance in the morning.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Classification & Quotas ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="03" title="Classification-Based Quotas" sub="Role-based daily points and product limits" />
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/40 leading-relaxed max-w-2xl ml-11 mb-8"
          >
            Every employee belongs to a classification that determines their daily points and product limits. The rule engine automatically enforces these quotas on every transaction.
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="ml-11 overflow-hidden rounded-2xl border border-white/10 bg-[#12121a] max-w-3xl"
          >
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5">
                  <th className="text-left px-6 py-4 font-semibold text-white/70 font-mono text-xs uppercase tracking-wider">Classification</th>
                  <th className="text-left px-6 py-4 font-semibold text-white/70 font-mono text-xs uppercase tracking-wider">Daily Points</th>
                  <th className="text-left px-6 py-4 font-semibold text-white/70 font-mono text-xs uppercase tracking-wider">Juices</th>
                  <th className="text-left px-6 py-4 font-semibold text-white/70 font-mono text-xs uppercase tracking-wider">Meals</th>
                  <th className="text-left px-6 py-4 font-semibold text-white/70 font-mono text-xs uppercase tracking-wider">Snacks</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Manager", "500 pts", "3", "2", "2"],
                  ["Supervisor", "400 pts", "2", "2", "1"],
                  ["Regular Employee", "300 pts", "1", "1", "1"],
                  ["Technician", "300 pts", "1", "1", "1"],
                ].map(([role, pts, j, m, s]) => (
                  <tr key={role} className="border-b border-white/5 last:border-0">
                    <td className="px-6 py-4 font-medium text-white/80">{role}</td>
                    <td className="px-6 py-4 text-emerald-400 font-bold font-mono">{pts}</td>
                    <td className="px-6 py-4 text-white/40">{j}</td>
                    <td className="px-6 py-4 text-white/40">{m}</td>
                    <td className="px-6 py-4 text-white/40">{s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            className="ml-11 mt-8"
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/30 font-mono mb-4">Slot Category Mapping</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { range: "Slots 1–10", cat: "Juices", color: "bg-blue-500/15 text-blue-400 border-blue-500/25" },
                { range: "Slots 11–30", cat: "Meals", color: "bg-amber-500/15 text-amber-400 border-amber-500/25" },
                { range: "Slots 31–40", cat: "Snacks", color: "bg-violet-500/15 text-violet-400 border-violet-500/25" },
              ].map((s) => (
                <span key={s.range} className={`px-4 py-2 text-sm font-mono rounded-xl border ${s.color}`}>
                  {s.range} &rarr; {s.cat}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Vending Machine Hardware ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="04" title="The Vending Machine" sub="Afen refrigerated smart vending machine specs" />
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="ml-11 max-w-3xl"
          >
            <p className="text-white/40 leading-relaxed mb-8">
              The deployed machine is an <strong className="text-white/80">Afen refrigerated smart vending machine</strong> branded with the Ministry of Industry&apos;s identity and the <em>&quot;صناعة سعودية&quot;</em> (Saudi Industry) logo. It features:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: "Refrigerated Cabinet", desc: "Temperature-controlled storage for fresh meals, dairy, and cold drinks across 5 shelves." },
                { title: "15\" HD Touchscreen", desc: "Interactive display showing product catalog with photos, names, prices in points, and availability." },
                { title: "NFC/RFID Card Reader", desc: "Integrated card reader on the green panel — reads the same badge employees use for building access." },
                { title: "Spring Motor Dispensers", desc: "Per-slot spiral springs push products off the shelf. Infrared drop detection verifies delivery." },
                { title: "4G/LTE + WiFi", desc: "Always-on connectivity for real-time API calls to the backend for validation and transaction logging." },
                { title: "LED Interior Lighting", desc: "Illuminated product display behind glass door for clear visibility of available items." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 p-4 rounded-xl bg-[#12121a] border border-white/10 hover:border-emerald-500/30 transition-colors">
                  <span className="mt-1 shrink-0 w-2 h-2 rounded-full bg-emerald-400" />
                  <div>
                    <h4 className="text-sm font-semibold text-white/80">{item.title}</h4>
                    <p className="text-xs text-white/40 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Admin Panel ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="05" title="Admin Dashboard" sub="Centralized web dashboard with role-based access control" />
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/40 leading-relaxed max-w-2xl ml-11 mb-10"
          >
            HR and IT administrators manage everything from a centralized web dashboard with role-based access control. Six core modules cover the entire lifecycle:
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="ml-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {[
              { icon: "👤", title: "Employee Management", items: ["Add/edit/delete profiles", "Link access card to employee", "View individual purchase history"] },
              { icon: "🏷️", title: "Classification Management", items: ["Define roles (Manager, Employee, Supervisor)", "Set daily points per classification", "Configure product access rules"] },
              { icon: "💰", title: "Balance & Recharge", items: ["Daily or dual-period recharge modes", "Auto-recharge at midnight or per period", "View current balances across employees"] },
              { icon: "🏪", title: "Vending Machine Registry", items: ["Register machines and locations", "Monitor online/offline status", "Remote configuration"] },
              { icon: "📦", title: "Slot Category Mapping", items: ["Map slot numbers to product types", "Juices (1–10), Meals (11–30), Snacks (31–40)", "Bulk slot configuration"] },
              { icon: "📊", title: "Reports & Analytics", items: ["Daily/weekly/monthly transaction reports", "Most consumed products ranking", "Rejection reasons and balance usage stats"] },
            ].map((mod) => (
              <div key={mod.title} className="bg-[#12121a] rounded-2xl p-6 border border-white/10 hover:border-emerald-500/30 transition-colors">
                <div className="text-2xl mb-3">{mod.icon}</div>
                <h3 className="text-base font-semibold text-white/90 mb-3">{mod.title}</h3>
                <ul className="space-y-1.5">
                  {mod.items.map((item, j) => (
                    <li key={j} className="text-xs text-white/40 flex gap-2">
                      <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── System Architecture ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="06" title="System Architecture" sub="End-to-end data flow from card tap to product dispense" />
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="ml-11 bg-[#12121a] rounded-2xl border border-white/10 p-8 text-sm font-mono text-white/50 overflow-x-auto"
          >
            <pre className="whitespace-pre leading-relaxed">{`┌──────────────────┐     ┌───────────────────────┐     ┌──────────────────┐
│   EMPLOYEE       │     │   VENDING MACHINE     │     │   BACKEND API    │
│                  │     │                       │     │                  │
│  ┌────────────┐  │     │  ┌─────────────────┐  │     │  ┌────────────┐ │
│  │ NFC/RFID   │──┼────>│  │ Card Reader     │  │     │  │ Validation │ │
│  │ Access     │  │ tap │  │ (NFC/RFID)      │──┼────>│  │ Engine     │ │
│  │ Card       │  │     │  └─────────────────┘  │ API │  │            │ │
│  └────────────┘  │     │  ┌─────────────────┐  │     │  │ • Identity │ │
│                  │     │  │ Touchscreen     │  │     │  │ • Quota    │ │
│  Same card for:  │     │  │ Product Select  │  │<────┼──│ • Balance  │ │
│  • Building      │     │  └─────────────────┘  │resp │  │ • Category │ │
│  • Doors         │     │  ┌─────────────────┐  │     │  └────────────┘ │
│  • Meals ✓       │     │  │ Spring Motors   │  │     │  ┌────────────┐ │
│                  │     │  │ Drop Sensors    │  │     │  │ Rule       │ │
│                  │     │  │ Dispenser       │  │     │  │ Engine     │ │
└──────────────────┘     │  └─────────────────┘  │     │  │            │ │
                         └───────────────────────┘     │  │ • Points   │ │
                                                       │  │ • Recharge │ │
                         ┌───────────────────────┐     │  │ • Logging  │ │
                         │   ADMIN DASHBOARD     │     │  └────────────┘ │
                         │                       │     │                  │
                         │  Employees  │ Machines │<───>│  REST APIs      │
                         │  Balances   │ Reports  │     │  Database       │
                         │  Rules      │ Slots    │     │  Analytics      │
                         └───────────────────────┘     └──────────────────┘`}</pre>
          </motion.div>
        </div>
      </section>

      {/* ── Windows Server Infrastructure ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="07" title="Windows Server Infrastructure" sub="Dual-server deployment with Kerberos authentication" />

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="ml-11 bg-[#12121a] rounded-2xl border border-white/10 p-8 overflow-x-auto max-w-3xl mb-8"
          >
            <pre className="text-sm font-mono leading-loose text-white/50 whitespace-pre">
{`┌──────────────────────┐      Kerberos       ┌──────────────────────┐
│   WEB SERVER         │     Delegation      │   DATABASE SERVER    │
│                      │  ◄──────────────►   │                      │
│  Windows Server      │   Windows Auth      │  Windows Server      │
│  IIS 10+             │                     │  MSSQL Server        │
│                      │   SPN configured    │                      │
│  ┌────────────────┐  │   for constrained   │  ┌────────────────┐  │
│  │ Custom AppPool │  │   delegation        │  │ Database       │  │
│  │ • Dedicated    │  │                     │  │ • Employee DB  │  │
│  │   service acct │  │                     │  │ • Transaction  │  │
│  │ • Least priv   │  │                     │  │   logs         │  │
│  │ • Isolated     │  │                     │  │ • Stored procs │  │
│  └────────────────┘  │                     │  └────────────────┘  │
│                      │                     │                      │
│  Backend API (.NET)  │                     │  Encrypted conns     │
│  Admin Dashboard     │                     │  Role-based access   │
└──────────────────────┘                     └──────────────────────┘`}
            </pre>
          </motion.div>

          <div className="ml-11 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            {[
              { title: "Custom IIS Application Pool", desc: "Dedicated service account with least-privilege permissions. Isolated process identity prevents cross-application attacks. Follows Microsoft security best practices for web hosting." },
              { title: "Kerberos Delegation", desc: "Windows-integrated authentication between IIS web server and MSSQL database server. Constrained delegation with SPN configuration \u2014 no passwords stored in connection strings." },
              { title: "MSSQL Server Security", desc: "Role-based database access with stored procedures. Encrypted connections (TLS). Transaction logging and audit trails for all employee purchases." },
              { title: "Active Directory Integration", desc: "Both servers joined to Active Directory domain. Group Policy for security hardening. Service accounts managed centrally with password rotation policies." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-[#12121a] border border-white/10 rounded-xl p-5 hover:border-emerald-500/30 transition-colors"
              >
                <h4 className="text-sm font-semibold text-white/80 mb-2">{item.title}</h4>
                <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── API Data Flow ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="08" title="API Transaction Flow" sub="What happens in the 1-second window between card tap and dispense" />
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="ml-11 max-w-2xl"
          >
            <p className="text-white/40 leading-relaxed mb-8">
              Every card tap triggers a single API call from the vending machine to the backend. The entire validation and response cycle completes in under 1 second.
            </p>
            <div className="space-y-4">
              <div className="bg-[#12121a] rounded-xl border border-white/10 overflow-hidden">
                <div className="px-5 py-3 bg-emerald-500/10 border-b border-emerald-500/20">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono text-emerald-400 font-bold tracking-wider">REQUEST → Machine to Backend</span>
                  </span>
                </div>
                <div className="p-5 font-mono text-sm text-white/50 space-y-1">
                  <p><span className="text-white/30">User ID:</span> Employee card identifier</p>
                  <p><span className="text-white/30">Machine ID:</span> Vending machine identifier</p>
                  <p><span className="text-white/30">Slot Number:</span> Selected product slot</p>
                  <p><span className="text-white/30">Product Price:</span> Price in points</p>
                  <p><span className="text-white/30">Timestamp:</span> Time of request</p>
                </div>
              </div>
              <div className="bg-[#12121a] rounded-xl border border-white/10 overflow-hidden">
                <div className="px-5 py-3 bg-white/5 border-b border-white/10">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white/40" />
                    <span className="text-xs font-mono text-white/50 font-bold tracking-wider">RESPONSE → Backend to Machine</span>
                  </span>
                </div>
                <div className="p-5 font-mono text-sm text-white/50 space-y-1">
                  <p><span className="text-emerald-400 font-bold">Success:</span> Dispense product, deduct points</p>
                  <p><span className="text-red-400 font-bold">Failure:</span> Reject + reason (quota exceeded, unauthorized category, insufficient balance, invalid card)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
