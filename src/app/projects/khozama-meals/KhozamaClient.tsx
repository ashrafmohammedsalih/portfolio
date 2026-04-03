"use client";

import Img from "@/components/Img";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const accent = "#1a3a4a";
const accentLight = "#5ba3c9";

function SectionTitle({ num, title, sub }: { num: string; title: string; sub?: string }) {
  return (
    <motion.div
      variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold font-mono bg-[#1a3a4a]/40 text-[#5ba3c9] border border-[#1a3a4a]/50">
          {num}
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-white">{title}</h2>
      </div>
      {sub && <p className="text-white/40 ml-11 text-sm">{sub}</p>}
    </motion.div>
  );
}

export default function KhozamaClient() {
  return (
    <>
      {/* ── The Problem ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="01" title="The Problem" sub="Why traditional vending doesn't work for corporate meals" />

          <div className="ml-11 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-red-500/5 border border-red-500/15 rounded-2xl p-6"
            >
              <h3 className="text-sm font-mono font-bold text-red-400/80 uppercase tracking-wider mb-4">Direct Sales (Old Way)</h3>
              <ul className="space-y-2.5">
                {["Instant purchase — no planning", "No availability guarantee", "Impossible to predict demand", "Higher food waste", "Unstable employee experience"].map((item) => (
                  <li key={item} className="text-sm text-white/40 flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-emerald-500/5 border border-emerald-500/15 rounded-2xl p-6"
            >
              <h3 className="text-sm font-mono font-bold text-emerald-400/80 uppercase tracking-wider mb-4">App Subscriptions (Our Way)</h3>
              <ul className="space-y-2.5">
                {["Pre-reserved meals per subscriber", "Guaranteed experience every day", "Precise production planning", "Minimal food waste & expiry", "Employee loyalty & retention"].map((item) => (
                  <li key={item} className="text-sm text-white/40 flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            className="ml-11 mt-8 p-4 rounded-xl bg-[#1a3a4a]/20 border border-[#1a3a4a]/30 max-w-4xl"
          >
            <p className="text-sm text-[#5ba3c9]/80 font-medium text-center">
              The solution starts from the app... and ends at the daily locker pickup.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── The App ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="02" title="The App — Heart of the System" sub="Not just an interface — it's the subscription management center, ordering engine, and planning tool" />

          <div className="ml-11 mb-10">
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <Img
                src="/images/khozama-meals/slide-app-features.jpg"
                alt="App features: create account, choose subscription, select meals, view nutrition, receive daily notifications, open locker via QR"
                width={2751}
                height={1536}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 1100px"
              />
            </div>
          </div>

          <div className="ml-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
            {[
              { title: "Subscription Center", desc: "Choose package (Breakfast 120 SAR / Breakfast+Snack 180 SAR / Full Day 280 SAR), manage renewals, 3-month discount." },
              { title: "Weekly Meal Planner", desc: "Pick breakfast, snack, and lunch for each day (Sun–Thu). Browse by cuisine: Eastern, English, International." },
              { title: "Nutritional Info", desc: "Every meal shows calories, protein, carbs, and fats. Make informed choices aligned with dietary goals." },
              { title: "Smart Locker Pickup", desc: "Each subscriber gets an assigned box on their floor. Open via QR code from the app — no direct sales, no competition." },
              { title: "Multiple Payments", desc: "Visa, Mastercard, mada, Tamara (BNPL), STC Pay, Apple Pay. Saved cards for quick renewals." },
              { title: "Push Notifications", desc: "Daily meal readiness alerts, subscription reminders, new menu items. Never miss a pickup window." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-[#12121a] border border-white/10 rounded-xl p-5 hover:border-[#5ba3c9]/30 transition-colors"
              >
                <h4 className="text-sm font-semibold text-white/90 mb-2">{item.title}</h4>
                <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── App Screens ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="03" title="App Walkthrough" sub="Key screens from the Khozama Meals mobile app" />

          {[
            {
              title: "Welcome & Authentication",
              desc: "The app opens with the Al Kuzama brand identity. Users sign in with phone number, Google, or Apple ID.",
              screens: [
                { src: "/images/khozama-meals/screen-01.jpg", label: "Welcome Screen" },
                { src: "/images/khozama-meals/screen-03.jpg", label: "Welcome (Variant)" },
                { src: "/images/khozama-meals/screen-04.png", label: "Phone Login" },
              ],
            },
            {
              title: "Subscription Plans & Onboarding",
              desc: "5-step wizard: profile, package selection (Breakfast 120 SAR / Breakfast+Snack 180 SAR / Full Day 280 SAR), pickup location & locker slot, meal planning, and payment.",
              screens: [
                { src: "/images/khozama-meals/screen-13.png", label: "Package Selection" },
                { src: "/images/khozama-meals/screen-26.png", label: "Pickup Location & Locker" },
                { src: "/images/khozama-meals/screen-29.png", label: "Coupon Applied" },
              ],
            },
            {
              title: "Meal Planning & Menu",
              desc: "Weekly planner with per-day breakfast, snack, and lunch. Browse menu by cuisine (Eastern, English, International) with full nutritional breakdown.",
              screens: [
                { src: "/images/khozama-meals/screen-35.png", label: "Weekly Meal Planner" },
                { src: "/images/khozama-meals/screen-17.jpg", label: "Breakfast Menu" },
                { src: "/images/khozama-meals/screen-18.jpg", label: "Meal Detail & Nutrition" },
              ],
            },
            {
              title: "Payment & Homepage",
              desc: "Multiple payment gateways with saved card management. Daily dashboard showing today's meal, delivery window, and assigned locker info.",
              screens: [
                { src: "/images/khozama-meals/screen-20.png", label: "Payment & Checkout" },
                { src: "/images/khozama-meals/screen-30.png", label: "Today's Menu" },
                { src: "/images/khozama-meals/screen-34.png", label: "Edit Meal" },
              ],
            },
          ].map((section, si) => (
            <motion.div
              key={section.title}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              transition={{ duration: 0.5, delay: si * 0.1 }}
              className="ml-11 mb-16 last:mb-0"
            >
              <h3 className="text-lg font-semibold text-white/90 mb-2">{section.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed mb-6 max-w-2xl">{section.desc}</p>
              <div className="flex flex-wrap gap-6">
                {section.screens.map((screen, i) => (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <div className="relative w-[200px] sm:w-[220px]">
                      <div className="rounded-[2.2rem] border-[5px] border-zinc-700 bg-zinc-800 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
                        <div className="relative overflow-hidden rounded-[1.8rem]">
                          <Img src={screen.src} alt={screen.label} width={430} height={932} className="w-full h-auto scale-[1.02]" sizes="220px" quality={90} />
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-white/40 text-center font-medium">{screen.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Smart Locker Role ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="04" title="Smart Locker — The Delivery Point" sub="Not a vending machine — a smart pickup station" />

          <div className="ml-11 mb-10">
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <Img
                src="/images/khozama-meals/slide-smart-locker.jpg"
                alt="Smart Locker role: standalone machine with individual boxes, each assigned to a subscriber, opens only via QR"
                width={2751}
                height={1536}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 1100px"
              />
            </div>
          </div>

          <div className="ml-11 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
            {[
              { title: "Standalone Machine", desc: "Independent smart locker unit placed on each office floor or beside existing vending machines." },
              { title: "Individual Boxes", desc: "Each box is assigned to one subscriber, linked to their app account. No sharing, no competition." },
              { title: "QR-Only Access", desc: "Opens exclusively via QR code scan from the subscriber's app. Secure and personalized." },
              { title: "No Direct Sales", desc: "Unlike vending machines, there's no impulse buying. Every meal is pre-planned and pre-assigned." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-[#12121a] border border-white/10 rounded-xl p-5 hover:border-[#5ba3c9]/30 transition-colors"
              >
                <h4 className="text-sm font-semibold text-white/90 mb-2">{item.title}</h4>
                <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── App ↔ Machine Integration ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="05" title="App ↔ Machine Integration" sub="The app decides who receives what and when — the machine just executes delivery" />

          <div className="ml-11 mb-10">
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <Img
                src="/images/khozama-meals/slide-app-machine.jpg"
                alt="Full integration flow: Subscription → Scheduling → Packing → Pickup via QR"
                width={2751}
                height={1536}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 1100px"
              />
            </div>
          </div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="ml-11 bg-[#12121a] rounded-2xl border border-white/10 p-8 overflow-x-auto max-w-3xl"
          >
            <pre className="text-sm font-mono leading-loose text-white/50 whitespace-pre">
{`┌─────────────────┐      ┌─────────────────────┐      ┌──────────────────┐
│   MOBILE APP    │      │   BACKEND SERVER     │      │  SMART LOCKER    │
│                 │      │                      │      │                  │
│  Subscribe      │ API  │  Validate & Store    │ MQTT │  Receive Command │
│  Choose Meals ──┼─────>│  Schedule Packing  ──┼─────>│  Assign Box      │
│  Scan QR Code   │      │  Match Subscriber    │      │  Unlock Door     │
│                 │<─────┼──  Send Notification  │<─────┼──  Confirm Pickup│
│  Collect Meal   │      │  Log Transaction     │      │  Report Status   │
└─────────────────┘      └──────────────────────┘      └──────────────────┘`}
            </pre>
          </motion.div>
        </div>
      </section>

      {/* ── Operations Dashboard ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="06" title="Operations Dashboard" sub="Full control panel for managing the meal subscription ecosystem" />

          <div className="ml-11 mb-10">
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <Img
                src="/images/khozama-meals/slide-dashboard.jpg"
                alt="Operations dashboard with subscription management, box management, packing schedules, pickup monitoring, and analytics"
                width={2751}
                height={1536}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 1100px"
              />
            </div>
          </div>

          <div className="ml-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
            {[
              { title: "Subscription Management", desc: "View, edit, and manage all active subscriptions. Track renewals and cancellations." },
              { title: "Box Management", desc: "Assign and reassign locker boxes to subscribers. Monitor box availability per floor." },
              { title: "Packing Schedule", desc: "Daily packing lists generated from active subscriptions. Know exactly what to prepare." },
              { title: "Pickup Monitoring", desc: "Real-time tracking of who picked up and who didn't. Follow up on uncollected meals." },
              { title: "Waste Reports", desc: "Track food waste by comparing prepared vs. collected meals. Optimize production." },
              { title: "Per-Floor Analytics", desc: "Usage reports broken down by building floor. Identify high-demand and low-demand zones." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-[#12121a] border border-white/10 rounded-xl p-5 hover:border-[#5ba3c9]/30 transition-colors"
              >
                <h4 className="text-sm font-semibold text-white/90 mb-2">{item.title}</h4>
                <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why the App is the Power Source ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="07" title="Why the App is the Power Source" sub="The app decides... the machine executes" />

          <div className="ml-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
            {[
              { title: "Pre-Ordered Demand", desc: "Orders are placed in advance via subscriptions — production is based on real data, not guesswork." },
              { title: "Subscription-Driven Production", desc: "Every meal is produced for a confirmed subscriber. No overproduction, no waste." },
              { title: "Zero Randomness", desc: "The system eliminates impulse buying. Every interaction is planned and predictable." },
              { title: "Zero Waste", desc: "Precise demand forecasting means minimal food expiry and disposal." },
              { title: "Consistent UX", desc: "Employees get the same reliable experience every day — subscribe, plan, collect." },
              { title: "Data-Driven Decisions", desc: "Rich analytics on consumption patterns, preferences, and trends to optimize operations." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-[#12121a] border border-white/10 rounded-xl p-5 hover:border-[#5ba3c9]/30 transition-colors"
              >
                <h4 className="text-sm font-semibold text-white/90 mb-2">{item.title}</h4>
                <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI-Ready Platform ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="08" title="AI-Ready Platform" sub="Built-in intelligence for continuous optimization" />

          <div className="ml-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
            {[
              { title: "Daily Demand Prediction", desc: "Forecast how many meals are needed per day based on subscription patterns and historical data." },
              { title: "Smart Meal Suggestions", desc: "Recommend meals based on subscriber preferences, past choices, and nutritional goals." },
              { title: "Subscriber Behavior Analysis", desc: "Understand pickup patterns, preferred time windows, and meal category preferences." },
              { title: "Waste Reduction", desc: "Predict and prevent waste before it happens by adjusting production to actual demand." },
              { title: "Box Distribution Optimization", desc: "Intelligently assign boxes across floors based on subscriber density and usage patterns." },
              { title: "Continuous UX Improvement", desc: "Use behavioral data to improve the app experience, menu offerings, and subscription plans." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-[#12121a] border border-white/10 rounded-xl p-5 hover:border-[#5ba3c9]/30 transition-colors"
              >
                <h4 className="text-sm font-semibold text-white/90 mb-2">{item.title}</h4>
                <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rollout Phases ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="09" title="Rollout Roadmap" sub="Phased deployment from pilot to full-scale" />

          <div className="ml-11 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-[#12121a] border border-[#5ba3c9]/20 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 text-[10px] font-mono font-bold rounded-md bg-[#5ba3c9]/15 border border-[#5ba3c9]/25 text-[#5ba3c9]">PHASE 2A</span>
                <span className="text-sm font-semibold text-white/80">Pilot</span>
              </div>
              <ul className="space-y-2">
                {["Launch the app on iOS & Android", "Install limited Smart Locker machines", "Activate QR-based pickup system", "Measure performance & KPIs"].map((item) => (
                  <li key={item} className="text-sm text-white/40 flex gap-2">
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#5ba3c9]/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-[#1a3a4a]/30 border border-[#5ba3c9]/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 text-[10px] font-mono font-bold rounded-md bg-[#5ba3c9]/15 border border-[#5ba3c9]/25 text-[#5ba3c9]">PHASE 2B</span>
                <span className="text-sm font-semibold text-white/80">Scale</span>
              </div>
              <ul className="space-y-2">
                {["Expand to all building floors", "Increase subscriber capacity", "Activate advanced analytics", "Transform into a full internal food platform"].map((item) => (
                  <li key={item} className="text-sm text-white/40 flex gap-2">
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#5ba3c9]/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── KPIs ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="10" title="Success KPIs" sub="Key performance indicators for measuring platform success" />

          <div className="ml-11 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl">
            {[
              { label: "Subscription Growth", icon: "📈" },
              { label: "Daily Pickup Rate", icon: "📋" },
              { label: "Waste Reduction", icon: "♻️" },
              { label: "Employee Satisfaction", icon: "😊" },
              { label: "Operations Stability", icon: "⚙️" },
              { label: "Demand Accuracy", icon: "🎯" },
            ].map((kpi, i) => (
              <motion.div
                key={kpi.label}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="bg-[#12121a] border border-white/10 rounded-xl p-4 text-center hover:border-[#5ba3c9]/30 transition-colors"
              >
                <div className="text-2xl mb-2">{kpi.icon}</div>
                <p className="text-[11px] text-white/40 font-mono leading-tight">{kpi.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
