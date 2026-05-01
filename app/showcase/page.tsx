"use client";

import Footer from "@/components/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import ShowcaseNavbar from "@/components/showcase-navbar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import { useState } from "react";
import Image from "next/image";

/* ─────────────────────────────────────────────
   PROJECTS DATA  (agency work only)
───────────────────────────────────────────── */

interface Project {
  id: number;
  title: string;
  tags: string[];
  year: string;
  description: string;
  accent: string;
  image: string;
  gradient: string;
  href?: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Maruti Nandan Marmo & Grani",
    tags: ["Marble & Granite", "UI/UX"],
    year: "2026",
    description:
      "Website for a premium marble and granite supplier — clean product showcase, material catalogue, and inquiry flow.",
    accent: "#c9b99a",
    image: "/show/s1.jpg",
    gradient: "linear-gradient(135deg,#1a1510 0%,#2e2418 50%,#1a1510 100%)",
    href: "https://www.marutinandankelwa.com/",
  },
  {
  id: 2,
  title: "Kaagaz Infinity",
  tags: ["Agency Website", "UI/UX", "Next.js"],
  year: "2026",
  description:
    "Website for a creative digital agency — modern layout, strong visual storytelling, and a streamlined inquiry experience.",
  accent: "#6366f1",
  image: "/show/s2.png",
  gradient: "linear-gradient(135deg,#1a1510 0%,#2e2418 50%,#1a1510 100%)",
  href: "https://www.kaagazinfinity.com/",
}
  // Add more website/branding projects here as you build them
];

/* ─────────────────────────────────────────────
   EVENTS DATA
───────────────────────────────────────────── */

interface Event {
  id: number;
  title: string;
  venue: string;
  date: string;
  sortDate: string; // YYYY-MM-DD for sorting
  time: string;
  price: string;
  tags: string[];
  year: "2025" | "2026";
}

const EVENTS: Event[] = [
  // 2025
  { id: 1,  title: "Open Mic",                        venue: "The Hub Cafe",     date: "28 Aug 2025", sortDate: "2025-08-28", time: "4–6 PM",    price: "Free",   tags: ["Open Mic"],         year: "2025" },
  { id: 2,  title: "Tum Or Chai",                     venue: "The Hub Cafe",     date: "4 Sep 2025",  sortDate: "2025-09-04", time: "4–6 PM",    price: "Free",   tags: ["Poetry"],           year: "2025" },
  { id: 3,  title: "Artist Meetup",                   venue: "The Hub Cafe",     date: "11 Sep 2025", sortDate: "2025-09-11", time: "4–6 PM",    price: "Free",   tags: ["Meetup"],           year: "2025" },
  { id: 4,  title: "Readers Meetup",                  venue: "The Hub Cafe",     date: "18 Sep 2025", sortDate: "2025-09-18", time: "4–6 PM",    price: "Free",   tags: ["Meetup"],           year: "2025" },
  { id: 5,  title: "Rappers Meetup",                  venue: "The Hub Cafe",     date: "9 Oct 2025",  sortDate: "2025-10-09", time: "4–6 PM",    price: "₹99",    tags: ["Hip-Hop"],          year: "2025" },
  { id: 6,  title: "Open Mic",                        venue: "Arth Coffee House",date: "10 Oct 2025", sortDate: "2025-10-10", time: "4–6 PM",    price: "₹249",   tags: ["Open Mic"],         year: "2025" },
  { id: 7,  title: "Canvas of Shayari",               venue: "Kewlkats Cafe",    date: "11 Oct 2025", sortDate: "2025-10-11", time: "4–6 PM",    price: "₹99",    tags: ["Shayari"],          year: "2025" },
  { id: 8,  title: "Bazm-O-Nazm",                     venue: "Foodes Eatery",    date: "12 Nov 2025", sortDate: "2025-11-12", time: "4–6 PM",    price: "₹99",    tags: ["Poetry"],           year: "2025" },
  { id: 9,  title: "NGO Collab — Pratishtha Found.",  venue: "Community",        date: "14 Nov 2025", sortDate: "2025-11-14", time: "12–4 PM",   price: "Free",   tags: ["NGO Collab"],       year: "2025" },
  { id: 10, title: "Kaagaznama — Bonfire Night",      venue: "Ridhvya Cafe",     date: "22 Nov 2025", sortDate: "2025-11-22", time: "6–8 PM",    price: "₹99",    tags: ["Bonfire"],          year: "2025" },
  { id: 11, title: "Painting Competition",            venue: "Musee Art Cafe",   date: "20 Dec 2025", sortDate: "2025-12-20", time: "12–6 PM",   price: "₹999",   tags: ["Art"],              year: "2025" },
  { id: 12, title: "Fusion Show",                     venue: "Musee Art Cafe",   date: "20 Dec 2025", sortDate: "2025-12-20", time: "8–10 PM",   price: "Free",   tags: ["Fusion"],           year: "2025" },
  // 2026
  { id: 13, title: "Live Music — Shivam & Vikas",     venue: "Arth Coffee House",date: "5 Feb 2026",  sortDate: "2026-02-05", time: "6–10 PM",   price: "Free",   tags: ["Live Music"],       year: "2026" },
  { id: 14, title: "Readers Meetup",                  venue: "Gandhi Park",      date: "8 Feb 2026",  sortDate: "2026-02-08", time: "2–5 PM",    price: "Free",   tags: ["Meetup"],           year: "2026" },
  { id: 15, title: "Live Music — Veer & Aditya",      venue: "Arth Coffee House",date: "8 Feb 2026",  sortDate: "2026-02-08", time: "6–10 PM",   price: "Free",   tags: ["Live Music"],       year: "2026" },
  { id: 16, title: "Live Music — Akash & Madhav",     venue: "Arth Coffee House",date: "13 Feb 2026", sortDate: "2026-02-13", time: "7–10 PM",   price: "Free",   tags: ["Live Music"],       year: "2026" },
  { id: 17, title: "Kora Kaagaz Open Mic",            venue: "Arth Coffee House",date: "14 Feb 2026", sortDate: "2026-02-14", time: "4–7 PM",    price: "₹149",   tags: ["Open Mic"],         year: "2026" },
  { id: 18, title: "Live Music — Kartik",             venue: "Arth Coffee House",date: "14 Feb 2026", sortDate: "2026-02-14", time: "7–10 PM",   price: "Free",   tags: ["Live Music"],       year: "2026" },
  { id: 19, title: "Live Music — Shba & Abhishek",    venue: "Arth Coffee House",date: "15 Feb 2026", sortDate: "2026-02-15", time: "6–10 PM",   price: "Free",   tags: ["Live Music"],       year: "2026" },
  { id: 20, title: "Live Music — Kartik",             venue: "Arth Coffee House",date: "27 Feb 2026", sortDate: "2026-02-27", time: "7–10 PM",   price: "Free",   tags: ["Live Music"],       year: "2026" },
  { id: 21, title: "Live Music — Krrish",             venue: "Arth Coffee House",date: "28 Feb 2026", sortDate: "2026-02-28", time: "7–10 PM",   price: "Free",   tags: ["Live Music"],       year: "2026" },
  { id: 22, title: "Dehradun Open Mic",               venue: "Dhungaar",         date: "8 Mar 2026",  sortDate: "2026-03-08", time: "4–6 PM",    price: "₹149",   tags: ["Open Mic"],         year: "2026" },
  { id: 23, title: "Live Music — Krrish",             venue: "Arth Coffee House",date: "14 Mar 2026", sortDate: "2026-03-14", time: "6–10 PM",   price: "Free",   tags: ["Live Music"],       year: "2026" },
  { id: 24, title: "Live Music — Jaii",               venue: "Arth Coffee House",date: "20 Mar 2026", sortDate: "2026-03-20", time: "8–10 PM",   price: "Free",   tags: ["Live Music"],       year: "2026" },
  { id: 25, title: "Singing Competition",             venue: "Arth Coffee House",date: "20 Mar 2026", sortDate: "2026-03-20", time: "4–7 PM",    price: "₹99",    tags: ["Competition"],      year: "2026" },
  { id: 26, title: "Open Mic",                        venue: "Arth Coffee House",date: "21 Mar 2026", sortDate: "2026-03-21", time: "4–7 PM",    price: "₹99",    tags: ["Open Mic"],         year: "2026" },
  { id: 27, title: "Live Music — Shiba",              venue: "Arth Coffee House",date: "21 Mar 2026", sortDate: "2026-03-21", time: "7–10 PM",   price: "Free",   tags: ["Live Music"],       year: "2026" },
  { id: 28, title: "Stalls Market",                   venue: "Arth Coffee House",date: "22 Mar 2026", sortDate: "2026-03-22", time: "10 AM–8 PM",price: "₹2499",  tags: ["Market"],           year: "2026" },
  { id: 29, title: "Live Music — Krrish & Jaii",      venue: "Arth Coffee House",date: "22 Mar 2026", sortDate: "2026-03-22", time: "8–10 PM",   price: "Free",   tags: ["Live Music"],       year: "2026" },
  { id: 30, title: "Live Music — Shiba",              venue: "Arth Coffee House",date: "29 Mar 2026", sortDate: "2026-03-29", time: "7–10 PM",   price: "Free",   tags: ["Live Music"],       year: "2026" },
  { id: 31, title: "Live Music — Aditya & Sarthak",   venue: "Arth Coffee House",date: "5 Apr 2026",  sortDate: "2026-04-05", time: "7–10 PM",   price: "Free",   tags: ["Live Music"],       year: "2026" },
  { id: 32, title: "Live Music — Talvinder Special",  venue: "Neelansh Restro",  date: "6 Apr 2026",  sortDate: "2026-04-06", time: "7–10 PM",   price: "Free",   tags: ["Live Music"],       year: "2026" },
];

const PRICE_COLOR: Record<string, string> = {
  Free:   "bg-emerald-50 text-emerald-600 border-emerald-100",
  "₹99":  "bg-blue-50 text-blue-600 border-blue-100",
  "₹149": "bg-blue-50 text-blue-600 border-blue-100",
  "₹249": "bg-blue-50 text-blue-600 border-blue-100",
  "₹999": "bg-orange-50 text-orange-600 border-orange-100",
  "₹2499":"bg-red-50 text-red-600 border-red-100",
};

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden"
      style={{ animationDelay: `${index * 80}ms`, animation: "fadeSlideUp 0.5s ease both" }}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{ paddingBottom: "62%", background: project.gradient }}
      >
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
        {!project.image && (
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-3xl opacity-30 group-hover:opacity-50 group-hover:scale-125 transition-all duration-700"
            style={{ background: project.accent }}
          />
        )}
        <span className="absolute top-4 right-4 text-white/70 text-xs font-mono z-10">{project.year}</span>

        {/* hover overlay */}
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 z-10 ${hovered ? "opacity-100" : "opacity-0"}`}>
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="border border-white/60 text-white text-sm px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-200"
            >
              Visit Site →
            </a>
          ) : (
            <span className="border border-white/60 text-white text-sm px-5 py-2 rounded-full">
              View Project →
            </span>
          )}
        </div>
      </div>

      <div className="bg-white border border-neutral-100 rounded-b-2xl p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-neutral-900 text-base leading-snug">{project.title}</h3>
          <div className="w-3 h-3 rounded-full mt-1 shrink-0" style={{ background: project.accent }} />
        </div>
        <p className="text-neutral-500 text-sm mt-2 leading-relaxed line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.map((t) => (
            <span key={t} className="bg-neutral-50 border border-neutral-100 text-neutral-500 text-xs px-2.5 py-0.5 rounded-md">{t}</span>
          ))}
        </div>
        {project.href && (
          <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-500 hover:underline mt-4">
            Visit site →
          </a>
        )}
      </div>
    </div>
  );
}

function EventsSection() {
  const [yearFilter, setYearFilter] = useState<"All" | "2025" | "2026">("All");
  const [expanded, setExpanded] = useState(false);

  const filtered = EVENTS
    .filter((e) => yearFilter === "All" || e.year === yearFilter)
    .sort((a, b) => a.sortDate.localeCompare(b.sortDate));

  const PREVIEW_COUNT = 8;
  const visible = expanded ? filtered : filtered.slice(0, PREVIEW_COUNT);

  return (
    <div className="mt-24">
      {/* Section header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">Community</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
            Events & Experiences
            <span className="ml-3 text-base font-normal text-neutral-400">({filtered.length})</span>
          </h2>
          <p className="text-neutral-500 text-sm mt-2 max-w-lg">
            Beyond digital — we conceptualise, promote, and run live events.
          </p>
        </div>
        {/* Year filter */}
        <div className="flex gap-2 shrink-0">
          {(["All", "2025", "2026"] as const).map((y) => (
            <button
              key={y}
              onClick={() => { setYearFilter(y); setExpanded(false); }}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                yearFilter === y
                  ? "bg-neutral-900 text-white"
                  : "bg-white border border-neutral-200 text-neutral-500 hover:border-neutral-400"
              }`}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      {/* Table-style list */}
      <div className="bg-white border border-neutral-100 rounded-2xl overflow-hidden shadow-sm">
        {/* Table header */}
        <div className="hidden md:grid grid-cols-[1fr_auto_auto_auto_auto] gap-4 px-6 py-3 bg-neutral-50 border-b border-neutral-100 text-xs font-semibold text-neutral-400 uppercase tracking-widest">
          <span>Event</span>
          <span className="w-40">Venue</span>
          <span className="w-28 text-center">Date</span>
          <span className="w-20 text-center">Time</span>
          <span className="w-16 text-center">Entry</span>
        </div>

        {/* Rows */}
        {visible.map((event, i) => (
          <div
            key={event.id}
            className={`flex flex-col md:grid md:grid-cols-[1fr_auto_auto_auto_auto] gap-2 md:gap-4 px-6 py-4 items-start md:items-center transition-colors hover:bg-neutral-50 ${
              i !== visible.length - 1 ? "border-b border-neutral-50" : ""
            }`}
            style={{ animationDelay: `${i * 30}ms`, animation: "fadeSlideUp 0.4s ease both" }}
          >
            {/* Title + tags */}
            <div className="flex flex-col gap-1.5">
              <span className="font-medium text-neutral-900 text-sm">{event.title}</span>
              <div className="flex flex-wrap gap-1">
                {event.tags.map((t) => (
                  <span key={t} className="text-xs text-neutral-400 bg-neutral-50 border border-neutral-100 px-2 py-0.5 rounded-md">{t}</span>
                ))}
              </div>
            </div>

            {/* Venue */}
            <span className="text-sm text-neutral-500 w-40 shrink-0 hidden md:block truncate">{event.venue}</span>

            {/* Date */}
            <span className="text-xs font-mono text-neutral-500 w-28 shrink-0 hidden md:block text-center">{event.date}</span>

            {/* Time */}
            <span className="text-xs text-neutral-400 w-20 shrink-0 hidden md:block text-center">{event.time}</span>

            {/* Price */}
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border w-16 text-center shrink-0 hidden md:block ${PRICE_COLOR[event.price] ?? "bg-neutral-50 text-neutral-500 border-neutral-100"}`}>
              {event.price}
            </span>

            {/* Mobile: venue + date + price in one row */}
            <div className="flex items-center gap-3 md:hidden flex-wrap">
              <span className="text-xs text-neutral-400">{event.venue}</span>
              <span className="text-neutral-200">·</span>
              <span className="text-xs font-mono text-neutral-400">{event.date}</span>
              <span className="text-neutral-200">·</span>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${PRICE_COLOR[event.price] ?? "bg-neutral-50 text-neutral-500 border-neutral-100"}`}>
                {event.price}
              </span>
            </div>
          </div>
        ))}

        {/* Show more / less */}
        {filtered.length > PREVIEW_COUNT && (
          <div className="border-t border-neutral-50 px-6 py-4 flex justify-center">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-2"
            >
              {expanded ? (
                <>Show less <span className="text-base">↑</span></>
              ) : (
                <>Show all {filtered.length} events <span className="text-base">↓</span></>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Count strip */}
      <div className="mt-6 flex flex-wrap gap-6">
        {[
          { label: "Total Events", val: EVENTS.length },
          { label: "Venues", val: Array.from(new Set(EVENTS.map((e) => e.venue))).length },
          { label: "Free Events", val: EVENTS.filter((e) => e.price === "Free").length },
          { label: "Cities", val: 2 },
        ].map((s) => (
          <div key={s.label} className="flex items-center gap-2">
            <span className="text-xl font-bold text-neutral-900">{s.val}</span>
            <span className="text-xs text-neutral-400">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

const Showcase = () => {
  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa]
          bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
          bg-[size:14px_24px]">
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
              Websites that convert, events that fill rooms, and campaigns that get people talking — here's what we've been building.
            </p>
          </div>

          {/* ── Projects ── */}
          <div className="mt-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">Agency Work</p>
                <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
                  Selected Projects
                  <span className="ml-3 text-base font-normal text-neutral-400">({PROJECTS.length})</span>
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>

            {/* Growing portfolio nudge */}
            <div className="mt-8 rounded-2xl border border-neutral-100 bg-white px-8 py-7 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1">Growing Portfolio</p>
                <h3 className="text-base font-semibold text-neutral-900">More work on the way.</h3>
                <p className="text-neutral-500 text-sm mt-1">
                  We're a young studio — every project we take on gets added here. Check back soon.
                </p>
              </div>
              <a
                href="/meeting"
                className="shrink-0 px-6 py-3 bg-neutral-900 text-white rounded-xl text-sm font-semibold hover:bg-neutral-700 transition-colors"
              >
                Start a project →
              </a>
            </div>
          </div>

          {/* ── Events (separated) ── */}
          <EventsSection />

          {/* ── Divider ── */}
          <div className="my-20 flex items-center gap-6">
            <div className="flex-1 h-px bg-neutral-100" />
            <span className="text-neutral-300 text-sm shrink-0">★ ★ ★</span>
            <div className="flex-1 h-px bg-neutral-100" />
          </div>

          {/* ── Process strip ── */}
          <div className="mb-4 rounded-3xl bg-neutral-900 text-white px-8 md:px-14 py-14 overflow-hidden relative">
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-12 max-w-xl">A process built for results — not just aesthetics.</h2>
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

          {/* ── Testimonial ── */}
          <div className="mt-20 mb-4">
            <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">Client Voices</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-10">What clients say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-neutral-100 rounded-2xl p-7 flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-700 text-sm leading-relaxed italic">
                  "We've been working with Kaagaz for over 8 months and they've been amazing. They've helped us grow our business and we couldn't be happier with the results."
                </p>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-neutral-50">
                  <div className="w-9 h-9 rounded-full bg-neutral-900 flex items-center justify-center text-white text-sm font-bold shrink-0">D</div>
                  <div>
                    <p className="text-neutral-900 text-sm font-semibold">Dhruv Bansal</p>
                    {/* <p className="text-neutral-400 text-xs">CEO, Arth Coffee House</p> */}
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 border border-dashed border-neutral-200 rounded-2xl p-7 flex flex-col items-center justify-center gap-3 text-center">
                <p className="text-2xl">✦</p>
                <p className="text-neutral-500 text-sm font-medium">More reviews coming soon.</p>
                <p className="text-neutral-400 text-xs max-w-xs">Happy with our work? We'd love to feature your story here.</p>
                <a href="/meeting" className="mt-2 text-xs text-blue-500 hover:underline">Work with us →</a>
              </div>
            </div>
          </div>

          <LetsMakeThingsHappenSection />
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Showcase;