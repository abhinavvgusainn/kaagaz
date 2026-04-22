"use client";

import Footer from "@/components/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import ShowcaseNavbar from "@/components/showcase-navbar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import { useState, useRef } from "react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const CATEGORIES = ["All", "Websites", "Events & Parties", "Branding"] as const;
type Category = (typeof CATEGORIES)[number];

interface Project {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  tags: string[];
  year: string;
  description: string;
  accent: string; // tailwind bg color
  image: string; // placeholder gradient style
  gradient: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Nuvera Capital",
    category: "Websites",
    tags: ["Finance", "UI/UX", "Next.js"],
    year: "2024",
    description:
      "A sleek wealth-management platform with real-time portfolio dashboards and bespoke investor onboarding flows.",
    accent: "#0a0a0a",
    image: "",
    gradient: "linear-gradient(135deg,#0f1923 0%,#1a2f45 50%,#0f1923 100%)",
  },
  {
    id: 2,
    title: "Solis Festival",
    category: "Events & Parties",
    tags: ["Event Design", "Motion", "Branding"],
    year: "2024",
    description:
      "Full visual identity and microsite for a three-day open-air electronic music festival drawing 12 000+ attendees.",
    accent: "#ff4d00",
    image: "",
    gradient: "linear-gradient(135deg,#1a0a00 0%,#4d1500 50%,#1a0800 100%)",
  },
  {
    id: 3,
    title: "Aromas Co.",
    category: "Websites",
    tags: ["E-commerce", "Shopify", "Visual Design"],
    year: "2024",
    description:
      "Luxury perfume brand's flagship store — product configurator, editorial lookbook, and custom checkout experience.",
    accent: "#c9a96e",
    image: "",
    gradient: "linear-gradient(135deg,#1a1508 0%,#2e2110 50%,#1a1508 100%)",
  },
  {
    id: 4,
    title: "Meridian Gala 2024",
    category: "Events & Parties",
    tags: ["Corporate Event", "Invite Design", "Microsite"],
    year: "2024",
    description:
      "Annual black-tie fundraiser for a real-estate consortium — from e-invites and RSVP portal to post-event recap reel.",
    accent: "#8b9ec7",
    image: "",
    gradient: "linear-gradient(135deg,#07091a 0%,#131c3a 50%,#07091a 100%)",
  },
  {
    id: 5,
    title: "PeakShift SaaS",
    category: "Websites",
    tags: ["SaaS", "Dashboard", "React"],
    year: "2023",
    description:
      "Workforce analytics tool built for mid-market HR teams — complex data tables, onboarding wizards, and role-based access.",
    accent: "#00c48c",
    image: "",
    gradient: "linear-gradient(135deg,#001a12 0%,#003d28 50%,#001a12 100%)",
  },
  {
    id: 6,
    title: "Lumière Brand Identity",
    category: "Branding",
    tags: ["Identity", "Logo", "Guidelines"],
    year: "2023",
    description:
      "Complete visual identity for a premium skincare label — logo system, typography scales, and a 60-page brand book.",
    accent: "#e8d5c0",
    image: "",
    gradient: "linear-gradient(135deg,#1a1612 0%,#2e2520 50%,#1a1612 100%)",
  },
  {
    id: 7,
    title: "Club MNML Launch Night",
    category: "Events & Parties",
    tags: ["Club Night", "Social Assets", "Flyers"],
    year: "2023",
    description:
      "Launch campaign for a minimalist venue concept — animated flyers, Instagram story kits, and a live RSVP landing page.",
    accent: "#f0f0f0",
    image: "",
    gradient: "linear-gradient(135deg,#0d0d0d 0%,#1a1a1a 50%,#0d0d0d 100%)",
  },
  {
    id: 8,
    title: "Verdant Studio",
    category: "Branding",
    tags: ["Branding", "Architecture", "Web"],
    year: "2023",
    description:
      "Architecture and interiors practice — earthy brand palette, project showcase website, and editorial PDF portfolio.",
    accent: "#5c7a4e",
    image: "",
    gradient: "linear-gradient(135deg,#0a1208 0%,#1a2e14 50%,#0a1208 100%)",
  },
  {
    id: 9,
    title: "Stratum Tech",
    category: "Websites",
    tags: ["B2B", "Motion", "WebGL"],
    year: "2023",
    description:
      "Deep-tech infrastructure startup landing page with 3D particle scenes, animated metrics, and investor deck integration.",
    accent: "#6c63ff",
    image: "",
    gradient: "linear-gradient(135deg,#06051a 0%,#110f30 50%,#06051a 100%)",
  },
];

const STATS = [
  { value: "60+", label: "Projects Delivered" },
  { value: "4", label: "Years in Business" },
  { value: "98%", label: "Client Retention" },
  { value: "3", label: "Continents Served" },
];

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

function CategoryPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
        ${
          active
            ? "bg-neutral-900 text-white shadow-lg scale-105"
            : "bg-white text-neutral-500 border border-neutral-200 hover:border-neutral-400 hover:text-neutral-800"
        }
      `}
    >
      {label}
    </button>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        animationDelay: `${index * 80}ms`,
        animation: "fadeSlideUp 0.5s ease both",
      }}
    >
      {/* Image / Gradient panel */}
      <div
        className="relative w-full overflow-hidden"
        style={{ paddingBottom: "66%", background: project.gradient }}
      >
        {/* Decorative accent orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-3xl opacity-30 transition-all duration-700 group-hover:opacity-50 group-hover:scale-125"
          style={{ background: project.accent }}
        />

        {/* Category badge */}
        <span className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/10">
          {project.category}
        </span>

        {/* Year badge */}
        <span className="absolute top-4 right-4 text-white/50 text-xs font-mono">
          {project.year}
        </span>

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="border border-white/60 text-white text-sm px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-200">
            View Project →
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="bg-white border border-neutral-100 rounded-b-2xl p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-neutral-900 text-base leading-snug">
            {project.title}
          </h3>
          <div
            className="w-3 h-3 rounded-full mt-1 shrink-0"
            style={{ background: project.accent }}
          />
        </div>
        <p className="text-neutral-500 text-sm mt-2 leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.map((t) => (
            <span
              key={t}
              className="bg-neutral-50 border border-neutral-100 text-neutral-500 text-xs px-2.5 py-0.5 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-200 rounded-2xl overflow-hidden my-20 shadow-sm">
      {STATS.map((s) => (
        <div
          key={s.label}
          className="bg-white flex flex-col items-center justify-center py-10 px-6 text-center"
        >
          <span className="text-4xl font-bold text-neutral-900 tracking-tight">
            {s.value}
          </span>
          <span className="text-sm text-neutral-500 mt-1">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

const Showcase = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        className="
          overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa]
          bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
          bg-[size:14px_24px]
        "
      >
        <ShowcaseNavbar />

        <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">

          {/* ── Hero ── */}
          <div className="flex flex-col items-center justify-center pt-20 pb-2 text-center">
            <span className="inline-flex items-center gap-2 bg-neutral-900 text-white text-xs font-medium px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for new projects
            </span>

            <WordFadeIn
              className="text-3xl pt-2 lg:text-5xl font-semibold max-w-3xl mx-auto z-20"
              words="We Build Brands, Experiences & Everything Between"
            />

            <p className="text-xl md:text-2xl my-6 md:w-4/5 mx-auto text-gray-500">
              From conversion-focused websites to unforgettable live experiences — here's a selection of our recent work.
            </p>
          </div>

          {/* ── Stats ── */}
          <StatBar />

          {/* ── Section header ── */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">
                Our Work
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
                Selected Projects
              </h2>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <CategoryPill
                  key={c}
                  label={c}
                  active={activeCategory === c}
                  onClick={() => setActiveCategory(c)}
                />
              ))}
            </div>
          </div>

          {/* ── Grid ── */}
          <div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {/* ── Empty state ── */}
          {filtered.length === 0 && (
            <div className="text-center py-24 text-neutral-400">
              No projects in this category yet.
            </div>
          )}

          {/* ── Process strip ── */}
          <div className="mt-24 mb-4 rounded-3xl bg-neutral-900 text-white px-8 md:px-14 py-14 overflow-hidden relative">
            {/* background texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
              style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }}
            />

            <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-3">
              How We Work
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-12 max-w-xl">
              A studio process built for results — not just aesthetics.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { num: "01", title: "Discovery", body: "We deep-dive into your brand, goals, and audience before writing a single line of code." },
                { num: "02", title: "Strategy", body: "Information architecture, conversion mapping, and content planning aligned to your KPIs." },
                { num: "03", title: "Craft", body: "Design and development happen in tight loops with weekly reviews and your team in the loop." },
                { num: "04", title: "Launch & Grow", body: "We don't disappear post-launch. Analytics, iteration, and support are part of the deal." },
              ].map((step) => (
                <div key={step.num} className="flex flex-col gap-3">
                  <span className="text-3xl font-bold text-neutral-700 font-mono">{step.num}</span>
                  <h3 className="text-white font-semibold text-lg">{step.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Testimonials ── */}
          <div className="mt-20 mb-4">
            <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">
              Client Voices
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-10">
              What clients say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  quote: "The team delivered a website that looked like it cost triple what we paid. Conversion rate jumped 40% in the first month.",
                  author: "Priya M.",
                  role: "Founder, Aromas Co.",
                  accent: "#c9a96e",
                },
                {
                  quote: "They handled the entire Solis Festival digital presence — microsite, social kits, the lot. Flawless execution under pressure.",
                  author: "Rahul D.",
                  role: "Creative Director, Solis Festival",
                  accent: "#ff4d00",
                },
                {
                  quote: "Stratum's site completely changed how investors perceive us. We're fielding calls we simply weren't getting before.",
                  author: "Alex T.",
                  role: "CEO, Stratum Tech",
                  accent: "#6c63ff",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-white border border-neutral-100 rounded-2xl p-7 flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <p className="text-neutral-700 text-sm leading-relaxed italic">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                      style={{ background: t.accent }}
                    >
                      {t.author[0]}
                    </div>
                    <div>
                      <p className="text-neutral-900 text-sm font-semibold">{t.author}</p>
                      <p className="text-neutral-400 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
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

export default Showcase;