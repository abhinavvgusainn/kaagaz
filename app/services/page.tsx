"use client";

import Footer from "@/components/footer";
import ShowcaseNavbar from "@/components/showcase-navbar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import WordFadeIn from "@/components/magicui/word-fade-in";
import Image from "next/image";
import { useState } from "react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const SERVICES = [
  {
    id: "01",
    icon: "/images/s_6.png",
    title: "Web Design & Development",
    tagline: "Websites that convert visitors into customers.",
    description:
      "We craft fast, accessible, and beautifully designed web experiences — from marketing sites to complex web apps. Every pixel is intentional, every interaction deliberate.",
    features: ["Custom UI/UX Design", "Next.js / React Development", "CMS Integration", "Performance Optimization", "Mobile-First Responsive"],
    accent: "#0a0a0a",
  },
  {
    id: "02",
    icon: "/images/s_1.png",
    title: "Search Engine Optimization",
    tagline: "Rank higher. Get found. Grow organically.",
    description:
      "We engineer your site's visibility through technical SEO, content strategy, and authoritative link building — so you own the traffic you deserve.",
    features: ["Technical SEO Audit", "Keyword Strategy", "On-Page Optimization", "Link Building", "Monthly Reporting"],
    accent: "#00c48c",
  },
  {
    id: "03",
    icon: "/images/s_5.png",
    title: "Content Creation",
    tagline: "Words and visuals that move people.",
    description:
      "Blogs, video scripts, brand storytelling, photography briefs — we produce content that resonates with your audience and reinforces your authority.",
    features: ["Copywriting & Blogging", "Video Scripts", "Visual Content Briefs", "Brand Voice Guidelines", "Editorial Calendar"],
    accent: "#f5a623",
  },
  {
    id: "04",
    icon: "/images/s_3.png",
    title: "Social Media Marketing",
    tagline: "Build a community, not just a following.",
    description:
      "Strategic content calendars, community management, and growth campaigns across Instagram, LinkedIn, and beyond — tailored to your brand voice.",
    features: ["Platform Strategy", "Content Calendars", "Community Management", "Influencer Outreach", "Analytics & Reporting"],
    accent: "#e84393",
  },
  {
    id: "05",
    icon: "/images/s_4.png",
    title: "Email Marketing",
    tagline: "The highest ROI channel, done right.",
    description:
      "From welcome sequences to re-engagement campaigns, we design and write emails your subscribers actually open — and act on.",
    features: ["Campaign Design", "Automation Flows", "A/B Testing", "List Segmentation", "Deliverability Optimization"],
    accent: "#6c63ff",
  },
  {
    id: "06",
    icon: "/images/s_2.png",
    title: "Pay-Per-Click Advertising",
    tagline: "Ad spend that works as hard as you do.",
    description:
      "Google, Meta, and LinkedIn ads managed with obsessive attention to targeting, creative testing, and return on ad spend.",
    features: ["Campaign Architecture", "Creative Testing", "Bid Management", "Conversion Tracking", "Weekly Optimizations"],
    accent: "#ff4d00",
  },
];

const GUARANTEES = [
  {
    number: "01",
    title: "On-Time Delivery",
    body: "Every project ships on the agreed date. If we miss a milestone without prior notice, you get a week of free support.",
    icon: "⏱",
  },
  {
    number: "02",
    title: "Transparent Pricing",
    body: "No hidden fees, ever. Your quote is your final invoice. Scope changes are discussed openly before any work begins.",
    icon: "📋",
  },
  {
    number: "03",
    title: "Unlimited Revisions",
    body: "Within the agreed revision rounds, we iterate until you love it. We don't release work we're not proud of.",
    icon: "🔄",
  },
  {
    number: "04",
    title: "Direct Communication",
    body: "You speak to the person doing the work — not a project manager chain. Slack, WhatsApp, or email, we're reachable.",
    icon: "💬",
  },
  {
    number: "05",
    title: "Results-Focused",
    body: "We measure success by your KPIs — traffic, leads, conversions — not just how the design looks on a Dribbble shot.",
    icon: "📈",
  },
  {
    number: "06",
    title: "Post-Launch Support",
    body: "Every project includes a 30-day support window after launch. Bugs fixed, tweaks made, no questions asked.",
    icon: "🛡",
  },
];

const PRICING = [
  {
    name: "Starter",
    price: "₹49,999",
    period: "one-time",
    tagline: "Perfect for new businesses ready to launch.",
    features: [
      "5-page website",
      "Mobile responsive design",
      "Basic SEO setup",
      "Contact form & integrations",
      "1 round of revisions",
      "30-day post-launch support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₹1,19,999",
    period: "one-time",
    tagline: "For businesses serious about digital performance.",
    features: [
      "Everything in Starter",
      "Up to 15 pages",
      "Custom animations & interactions",
      "CMS integration",
      "SEO content strategy (3 months)",
      "Social media kit",
      "3 rounds of revisions",
      "60-day post-launch support",
    ],
    cta: "Most Popular",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    tagline: "Enterprise-grade work for ambitious brands.",
    features: [
      "Everything in Growth",
      "Unlimited pages",
      "Web app development",
      "Full-funnel ad management",
      "Dedicated account manager",
      "Monthly analytics review",
      "Priority support",
    ],
    cta: "Let's Talk",
    highlighted: false,
  },
];

const FAQS = [
  {
    q: "How long does a typical website project take?",
    a: "Most 5–10 page websites are delivered in 3–5 weeks. More complex builds or web applications are scoped individually, but we always provide a clear timeline upfront.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Absolutely. We've delivered work across three continents. All communication is async-friendly and we adapt to your timezone for live calls.",
  },
  {
    q: "Can I upgrade from Starter to Growth later?",
    a: "Yes. If your needs grow, you pay the difference — we don't make you start from scratch. Your existing work is always carried forward.",
  },
  {
    q: "What do you need from me to get started?",
    a: "A kickoff call, your brand assets (logo, colors, fonts if available), and your goals. We handle the rest and guide you through anything missing.",
  },
  {
    q: "Do you offer monthly retainers?",
    a: "Yes. For SEO, social media, email marketing, and PPC we offer monthly retainer packages. Ask us about current availability.",
  },
  {
    q: "What platforms do you build on?",
    a: "We primarily build on Next.js and React, with Webflow for no-code needs. For e-commerce we use Shopify. We choose the best tool for your specific goals.",
  },
];

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group bg-white border border-neutral-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
      style={{ animation: `fadeSlideUp 0.5s ease ${index * 70}ms both` }}
      onClick={() => setOpen((v) => !v)}
    >
      {/* top accent line */}
      <div className="h-0.5 w-full" style={{ background: service.accent }} />

      <div className="p-7">
        {/* header row */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="w-14 h-14 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center shrink-0 overflow-hidden">
            <Image src={service.icon} width={40} height={40} alt={service.title} className="object-contain" />
          </div>
          <span className="text-xs font-mono text-neutral-300 mt-1">{service.id}</span>
        </div>

        <h3 className="text-lg font-semibold text-neutral-900 leading-snug">{service.title}</h3>
        <p className="text-sm font-medium mt-1" style={{ color: service.accent }}>{service.tagline}</p>
        <p className="text-neutral-500 text-sm mt-3 leading-relaxed">{service.description}</p>

        {/* expand toggle */}
        <button
          className="mt-5 text-xs font-medium text-neutral-400 flex items-center gap-1 hover:text-neutral-700 transition-colors"
        >
          {open ? "Hide details ↑" : "See what's included ↓"}
        </button>

        {/* expanded features */}
        <div
          className={`overflow-hidden transition-all duration-300 ${open ? "max-h-64 mt-4" : "max-h-0"}`}
        >
          <ul className="space-y-2">
            {service.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-neutral-600">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: service.accent }} />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function GuaranteeCard({ g, index }: { g: typeof GUARANTEES[0]; index: number }) {
  return (
    <div
      className="relative bg-neutral-900 rounded-2xl p-7 flex flex-col gap-4 overflow-hidden group hover:bg-neutral-800 transition-colors duration-300"
      style={{ animation: `fadeSlideUp 0.5s ease ${index * 70}ms both` }}
    >
      {/* background number watermark */}
      <span className="absolute -bottom-4 -right-2 text-8xl font-bold text-white/5 select-none pointer-events-none">
        {g.number}
      </span>

      <span className="text-3xl">{g.icon}</span>
      <h3 className="text-white font-semibold text-lg">{g.title}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed">{g.body}</p>
    </div>
  );
}

function PricingCard({ plan }: { plan: typeof PRICING[0] }) {
  return (
    <div
      className={`relative rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300 ${
        plan.highlighted
          ? "bg-neutral-900 text-white shadow-2xl scale-[1.03] border-2 border-neutral-700"
          : "bg-white border border-neutral-100 hover:shadow-md"
      }`}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-neutral-900 text-xs font-semibold px-4 py-1 rounded-full">
          Most Popular
        </span>
      )}

      <div>
        <p className={`text-xs font-medium uppercase tracking-widest mb-1 ${plan.highlighted ? "text-neutral-400" : "text-neutral-400"}`}>
          {plan.name}
        </p>
        <div className="flex items-end gap-1">
          <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-neutral-900"}`}>
            {plan.price}
          </span>
          {plan.period && (
            <span className={`text-sm mb-1 ${plan.highlighted ? "text-neutral-400" : "text-neutral-400"}`}>
              /{plan.period}
            </span>
          )}
        </div>
        <p className={`text-sm mt-2 ${plan.highlighted ? "text-neutral-400" : "text-neutral-500"}`}>
          {plan.tagline}
        </p>
      </div>

      <ul className="space-y-3 flex-1">
        {plan.features.map((f) => (
          <li key={f} className={`flex items-center gap-2 text-sm ${plan.highlighted ? "text-neutral-300" : "text-neutral-600"}`}>
            <svg className="w-4 h-4 shrink-0 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`block text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
          plan.highlighted
            ? "bg-white text-neutral-900 hover:bg-neutral-100"
            : "bg-neutral-900 text-white hover:bg-neutral-700"
        }`}
      >
        {plan.cta}
      </a>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-neutral-100 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-neutral-800 font-medium text-sm md:text-base">{q}</span>
        <span className={`text-neutral-400 text-xl shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 pb-5" : "max-h-0"}`}>
        <p className="text-neutral-500 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

const ServicesPage = () => {
  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <ShowcaseNavbar />

        <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">

          {/* ── Hero ── */}
          <div className="flex flex-col items-center justify-center pt-20 pb-2 text-center">
            <span className="inline-flex items-center gap-2 bg-neutral-100 text-neutral-600 text-xs font-medium px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase border border-neutral-200">
              Services & Guarantees
            </span>

            <WordFadeIn
              className="text-3xl pt-2 lg:text-5xl font-semibold max-w-3xl mx-auto z-20"
              words="Everything Your Brand Needs to Win"
            />

            <p className="text-xl md:text-2xl my-6 md:w-4/5 mx-auto text-gray-500">
              A full-service digital studio. Strategy, design, development, and growth — under one roof.
            </p>

            <div className="flex flex-wrap gap-3 justify-center mt-2">
              {["Websites", "SEO", "Content", "Social Media", "Email", "PPC"].map((tag) => (
                <span key={tag} className="bg-white border border-neutral-200 text-neutral-500 text-sm px-4 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ── Services Grid ── */}
          <div className="mt-20 mb-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">What We Do</p>
                <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">Our Services</h2>
              </div>
              <p className="text-neutral-500 text-sm md:text-right md:max-w-sm">
                Click any service card to see exactly what's included.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((s, i) => (
                <ServiceCard key={s.id} service={s} index={i} />
              ))}
            </div>
          </div>

          {/* ── Divider ── */}
          <div className="my-20 flex items-center gap-6">
            <div className="flex-1 h-px bg-neutral-200" />
            <span className="text-neutral-300 text-sm shrink-0">★ ★ ★</span>
            <div className="flex-1 h-px bg-neutral-200" />
          </div>

          {/* ── Guarantees ── */}
          <div className="mb-4">
            <div className="mb-10 text-center">
              <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">No Fine Print</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">Our Guarantees</h2>
              <p className="text-neutral-500 mt-3 md:w-1/2 mx-auto text-sm md:text-base">
                We put these in writing because we actually stand behind them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {GUARANTEES.map((g, i) => (
                <GuaranteeCard key={g.number} g={g} index={i} />
              ))}
            </div>
          </div>

          {/* ── Process ── */}
          <div className="mt-20 rounded-3xl bg-white border border-neutral-100 shadow-sm px-8 md:px-14 py-14 overflow-hidden relative">
            <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">Our Workflow</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-12 max-w-lg">
              From brief to launch — here's exactly how we work.
            </h2>

            <div className="relative">
              {/* connecting line */}
              <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-neutral-100" />

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                {[
                  { step: "01", title: "Discovery Call", body: "We learn your business, goals, timeline, and budget in a 30-min call." },
                  { step: "02", title: "Proposal", body: "You receive a detailed scope, timeline, and fixed-price quote within 48 hrs." },
                  { step: "03", title: "Design Sprint", body: "We present designs in Figma; you review, annotate, and approve." },
                  { step: "04", title: "Build & Review", body: "Development with weekly check-ins and a staging preview before launch." },
                  { step: "05", title: "Launch & Support", body: "Go live with confidence — we monitor and support you for 30 days." },
                ].map((s) => (
                  <div key={s.step} className="flex flex-col gap-3">
                    <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center text-sm font-mono font-bold z-10 shrink-0">
                      {s.step}
                    </div>
                    <h3 className="font-semibold text-neutral-900">{s.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{s.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Why Us strip ── */}
          <div className="mt-20 rounded-3xl bg-neutral-900 text-white px-8 md:px-14 py-14 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-3">Why KAAGAZ</p>
                <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
                  We're not an agency. We're your growth partner.
                </h2>
                <p className="text-neutral-400 mt-5 leading-relaxed text-sm md:text-base">
                  Most agencies bill by the hour and disappear after delivery. We measure our success by your results — and structure every engagement around what moves the needle for your business, not what's easiest for us.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "60+", label: "Projects Delivered" },
                  { val: "98%", label: "Client Retention" },
                  { val: "48hr", label: "Avg. Response Time" },
                  { val: "4yrs", label: "In Business" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 rounded-xl p-5">
                    <p className="text-2xl font-bold text-white">{s.val}</p>
                    <p className="text-neutral-400 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── FAQ ── */}
          <div className="mt-20 mb-4">
            <div className="text-center mb-10">
              <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">FAQ</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">Common Questions</h2>
            </div>

            <div className="max-w-2xl mx-auto bg-white border border-neutral-100 rounded-2xl px-6 md:px-10 shadow-sm">
              {FAQS.map((f) => (
                <FaqItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <LetsMakeThingsHappenSection />
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;