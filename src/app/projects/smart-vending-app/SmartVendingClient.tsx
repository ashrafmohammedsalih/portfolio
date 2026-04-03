"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const accent = "#6AB04C";

function SectionTitle({ num, title, sub }: { num: string; title: string; sub?: string }) {
  return (
    <motion.div
      variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold font-mono bg-[#6AB04C]/20 text-[#6AB04C] border border-[#6AB04C]/30">
          {num}
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-white">{title}</h2>
      </div>
      {sub && <p className="text-white/40 ml-11 text-sm">{sub}</p>}
    </motion.div>
  );
}

function PhoneMockup({ src, label, delay = 0 }: { src: string; label: string; delay?: number }) {
  return (
    <motion.div
      variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-3"
    >
      <div className="relative w-[200px] sm:w-[220px]">
        <div className="rounded-[2.2rem] border-[5px] border-zinc-700 bg-zinc-800 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="relative overflow-hidden rounded-[1.8rem]">
            <Image src={src} alt={label} width={375} height={812} className="w-full h-auto scale-[1.02]" sizes="220px" quality={90} />
          </div>
        </div>
      </div>
      <p className="text-xs text-white/40 text-center font-medium">{label}</p>
    </motion.div>
  );
}

export default function SmartVendingClient() {
  return (
    <>
      {/* ── How It Works ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="01" title="How It Works" sub="4-step flow from phone to product" />

          <div className="ml-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl">
            {[
              { step: "01", title: "Scan QR Code", desc: "Point your phone camera at the QR code on the vending machine to connect.", color: "bg-violet-500/20 text-violet-400 border-violet-500/30" },
              { step: "02", title: "Browse Products", desc: "View the machine's live inventory — filter by category, see prices in SAR.", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
              { step: "03", title: "Pay from Phone", desc: "Add to cart, apply promo code, pay via Credit Card, Apple Pay, or PayPal.", color: "bg-[#6AB04C]/20 text-[#6AB04C] border-[#6AB04C]/30" },
              { step: "04", title: "Collect Product", desc: "Payment confirmed — the machine dispenses your product automatically.", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative"
              >
                <div className={`rounded-xl border p-4 h-full ${item.color}`}>
                  <div className="text-xs font-mono font-bold mb-2 opacity-60">STEP {item.step}</div>
                  <h4 className="text-sm font-semibold mb-2">{item.title}</h4>
                  <p className="text-xs opacity-60 leading-relaxed">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 text-white/20">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Splash & Onboarding ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="02" title="Splash & Onboarding" sub="SaladBar brand identity with bilingual Arabic/English support" />
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/40 text-sm leading-relaxed max-w-2xl ml-11 mb-8"
          >
            The app opens with the SaladBar (سالادبار) bilingual logo on a fresh green gradient. A 2-step onboarding introduces the service: &quot;Welcome to SaladBar — the largest self-service vending chain for fresh salads and snacks&quot; followed by QR code scanning instructions.
          </motion.p>
          <div className="ml-11 flex flex-wrap gap-6">
            <PhoneMockup src="/images/smart-vending-app/screen-01.png" label="Splash Screen" delay={0} />
            <PhoneMockup src="/images/smart-vending-app/screen-02.png" label="Onboarding — Welcome" delay={0.1} />
            <PhoneMockup src="/images/smart-vending-app/screen-03.png" label="Onboarding — QR Scanner" delay={0.2} />
          </div>
        </div>
      </section>

      {/* ── QR Scanning ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="03" title="QR Code Scanning" sub="Camera-based scanning with real-time animation" />
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/40 text-sm leading-relaxed max-w-2xl ml-11 mb-8"
          >
            Users scan the QR code on the vending machine to connect their phone to that specific unit. The scanner features a live camera feed with green corner brackets, a scanning line animation, and a processing spinner. The bottom sheet explains: &quot;Place the QR code inside the frame and avoid shaking for best results.&quot;
          </motion.p>
          <div className="ml-11 flex flex-wrap gap-6">
            <PhoneMockup src="/images/smart-vending-app/screen-04.png" label="QR Scanner — Ready" delay={0} />
            <PhoneMockup src="/images/smart-vending-app/screen-05.png" label="Scanning Line Animation" delay={0.1} />
            <PhoneMockup src="/images/smart-vending-app/screen-06.png" label="Processing QR..." delay={0.2} />
          </div>
        </div>
      </section>

      {/* ── Product Catalog ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="04" title="Product Catalog" sub="Live inventory fetched from the connected vending machine" />
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/40 text-sm leading-relaxed max-w-2xl ml-11 mb-8"
          >
            After scanning, the app fetches the real-time product inventory from that specific machine via API. Products display in a 2-column grid with category filter tabs — All Products (كل المنتجات), Coca-Cola (كوكاكولا), Chipsy (شيبسي), Indomie (اندومي). Each product card shows a photo, Arabic name, category label, and price in SAR. A skeleton loading state appears while products load.
          </motion.p>
          <div className="ml-11 flex flex-wrap gap-6">
            <PhoneMockup src="/images/smart-vending-app/screen-07.png" label="Loading — Spinner" delay={0} />
            <PhoneMockup src="/images/smart-vending-app/screen-08.png" label="Skeleton Loading" delay={0.1} />
            <PhoneMockup src="/images/smart-vending-app/screen-09.png" label="Product Grid — Loaded" delay={0.2} />
          </div>
        </div>
      </section>

      {/* ── Product Detail & Cart ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="05" title="Product Details & Cart" sub="Quantity selection, promo codes, and price breakdown" />
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/40 text-sm leading-relaxed max-w-2xl ml-11 mb-8"
          >
            Tapping a product opens a detail view showing the product photo, Arabic name, description, price in SAR (ريال سعودي), and a +/- quantity selector. A promo code input (رمز ترويجي) allows discount application. The bottom section shows subtotal (المجموع الفرعي), taxes & fees (الضرائب والرسوم), and total (المجموع الاجمالي) with item count. The green &quot;Go to Payment&quot; (الذهاب للدفع) CTA proceeds to checkout.
          </motion.p>
          <div className="ml-11 flex flex-wrap gap-6">
            <PhoneMockup src="/images/smart-vending-app/screen-10.png" label="Product Detail — Pepsi" delay={0} />
          </div>
        </div>
      </section>

      {/* ── Payment Methods ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="06" title="Payment Methods" sub="Credit Card, Apple Pay, and PayPal with saved card management" />
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/40 text-sm leading-relaxed max-w-2xl ml-11 mb-8"
          >
            Three payment options are available: Credit/Debit Card (بطاقة ائتمان), Apple Pay (أبل باي), and PayPal (باي بال). The credit card flow includes a horizontal carousel of saved cards showing card number, holder name, and expiry date with edit/delete actions. New cards are added via a full form with card number, CVV, expiry, and holder name fields.
          </motion.p>
          <div className="ml-11 flex flex-wrap gap-6">
            <PhoneMockup src="/images/smart-vending-app/screen-11.png" label="Payment Methods" delay={0} />
            <PhoneMockup src="/images/smart-vending-app/screen-12.png" label="No Card — Add New" delay={0.1} />
            <PhoneMockup src="/images/smart-vending-app/screen-13.png" label="Saved Card Carousel" delay={0.2} />
          </div>
        </div>
      </section>

      {/* ── Card Management ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="07" title="Card Management" sub="Full card lifecycle — add, view, edit, delete" />
          <div className="ml-11 flex flex-wrap gap-6">
            <PhoneMockup src="/images/smart-vending-app/screen-14.png" label="Add Card Form" delay={0} />
            <PhoneMockup src="/images/smart-vending-app/screen-15.png" label="Card Added — Success" delay={0.1} />
            <PhoneMockup src="/images/smart-vending-app/screen-16.png" label="Card Add — Failed" delay={0.2} />
          </div>
        </div>
      </section>

      {/* ── Payment Confirmation ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="08" title="Payment & Dispensing" sub="Success, failure, and product collection flows" />
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/40 text-sm leading-relaxed max-w-2xl ml-11 mb-8"
          >
            After successful payment, the app shows a celebration with confetti animation (تهانينا تم الدفع بنجاح) and prompts the user to collect their product from the machine. The machine receives the payment confirmation via API and automatically dispenses the product. If payment fails, a clear error screen shows the reason with a retry option.
          </motion.p>
          <div className="ml-11 flex flex-wrap gap-6">
            <PhoneMockup src="/images/smart-vending-app/screen-17.png" label="Success — Confetti" delay={0} />
            <PhoneMockup src="/images/smart-vending-app/screen-18.png" label="Payment Error" delay={0.1} />
            <PhoneMockup src="/images/smart-vending-app/screen-19.png" label="Success — Checkmark" delay={0.2} />
            <PhoneMockup src="/images/smart-vending-app/screen-20.png" label="Collect Product" delay={0.3} />
          </div>
        </div>
      </section>

      {/* ── Error States ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="09" title="Error Handling" sub="Comprehensive edge case coverage" />
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/40 text-sm leading-relaxed max-w-2xl ml-11 mb-8"
          >
            The app handles every edge case with clear, bilingual error screens: general errors with retry, no internet connection (عذرا لا يوجد انترنت) with a reload button, and empty machine inventory (عذرا لا تتوفر منتجات حاليا) directing users to try another machine. Each error state includes an illustrated icon and actionable button.
          </motion.p>
          <div className="ml-11 flex flex-wrap gap-6">
            <PhoneMockup src="/images/smart-vending-app/screen-21.png" label="Error — Something Wrong" delay={0} />
            <PhoneMockup src="/images/smart-vending-app/screen-22.png" label="No Internet" delay={0.1} />
            <PhoneMockup src="/images/smart-vending-app/screen-23.png" label="No Products Available" delay={0.2} />
          </div>
        </div>
      </section>

      {/* ── Technical Architecture ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="10" title="Technical Architecture" sub="How the phone talks to the vending machine" />

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="ml-11 bg-[#12121a] rounded-2xl border border-white/10 p-8 overflow-x-auto max-w-3xl"
          >
            <pre className="text-sm font-mono leading-loose text-white/50 whitespace-pre">
{`┌─────────────────┐      ┌─────────────────────┐      ┌──────────────────┐
│   MOBILE APP    │      │   BACKEND SERVER     │      │  VENDING MACHINE │
│   (Flutter)     │      │   (REST API)         │      │  (Hardware)      │
│                 │      │                      │      │                  │
│  1. Scan QR   ──┼─────>│  Identify Machine    │      │                  │
│                 │      │                      │      │                  │
│  2. Browse    <─┼──────┼─ Return Inventory    │<─────┼── Sync Products  │
│     Products    │      │                      │      │                  │
│                 │      │                      │      │                  │
│  3. Add to     ─┼─────>│  Validate Cart       │      │                  │
│     Cart        │      │  Process Payment     │      │                  │
│                 │      │                      │      │                  │
│  4. Pay        ─┼─────>│  Charge Card/Wallet  │      │                  │
│                 │      │  Confirm Payment    ──┼─────>│  Dispense Slot   │
│                 │      │                      │      │                  │
│  5. Collect   <─┼──────┼─ Dispense Confirmed  │<─────┼── Drop Sensor OK │
│     Product     │      │  Log Transaction     │      │                  │
└─────────────────┘      └──────────────────────┘      └──────────────────┘`}
            </pre>
          </motion.div>

          <div className="ml-11 mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
            {[
              { title: "QR-Based Machine Identification", desc: "Each machine has a unique QR code. Scanning connects the app to that specific unit's inventory via the backend API." },
              { title: "Real-Time Inventory Sync", desc: "Product availability, prices, and categories are fetched live from the machine. If a slot is empty, it's not shown." },
              { title: "Secure Payment Processing", desc: "Payments processed via backend — Credit Card (tokenized), Apple Pay, PayPal. Machine never handles payment data." },
              { title: "Automatic Dispensing", desc: "After payment confirmation, the backend signals the machine to activate the specific slot's spring motor. Drop sensor verifies delivery." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-[#12121a] border border-white/10 rounded-xl p-5 hover:border-[#6AB04C]/30 transition-colors"
              >
                <h4 className="text-sm font-semibold text-white/90 mb-2">{item.title}</h4>
                <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Features Summary ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle num="11" title="Key Features" sub="What makes this vending app stand out" />

          <div className="ml-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
            {[
              { title: "Cashless Payments", desc: "Credit card, Apple Pay, and PayPal integration — no cash needed at the machine." },
              { title: "Live Machine Inventory", desc: "Products fetched in real-time from the specific machine. Always see what's actually available." },
              { title: "Category Filtering", desc: "Browse by product type: food, drinks, snacks. Quickly find what you want." },
              { title: "Promo Code Support", desc: "Apply discount codes at checkout for promotional campaigns and corporate deals." },
              { title: "Saved Card Management", desc: "Store multiple cards securely. Quick checkout with saved payment methods." },
              { title: "Full Arabic RTL", desc: "Complete bilingual support with right-to-left layout for Arabic users." },
              { title: "Skeleton Loading", desc: "Smooth loading experience with skeleton placeholders while products fetch." },
              { title: "Error Recovery", desc: "Every error has a clear message and actionable recovery: retry, reload, or try another machine." },
              { title: "23 Screens", desc: "Complete user journey with 23 polished screens covering every flow and edge case." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-[#12121a] border border-white/10 rounded-xl p-5 hover:border-[#6AB04C]/30 transition-colors"
              >
                <h4 className="text-sm font-semibold text-white/90 mb-2">{item.title}</h4>
                <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { num: "23", label: "App Screens" },
              { num: "3", label: "Payment Methods" },
              { num: "8", label: "Screen Sections" },
              { num: "12", label: "Key Features" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-[#12121a] rounded-xl border border-white/10 p-4 text-center"
              >
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6AB04C] to-[#4a8a34]">{stat.num}</div>
                <div className="text-xs text-white/30 mt-1 font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
