"use client";

import Footer from "@/components/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import ShowcaseNavbar from "@/components/showcase-navbar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import { useState } from "react";
import Image from "next/image";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const CATEGORIES = ["All", "Websites", "Events & Parties"] as const;
type Category = (typeof CATEGORIES)[number];

interface Project {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  tags: string[];
  year: string;
  description: string;
  accent: string;
  image: string;
  gradient: string;
  href?: string;
  meta?: string;
}

const PROJECTS: Project[] = [
  // ── WEBSITES ──────────────────────────────
  {
    id: 1,
    title: "Maruti Nandan Marmo & Grani",
    category: "Websites",
    tags: ["Marble & Granite", "UI/UX", "Next.js"],
    year: "2026",
    description: "Website for a premium marble and granite supplier — clean product showcase, material catalogue, and inquiry flow.",
    accent: "#c9b99a",
    image: "/show/s_1.jpg",
    gradient: "linear-gradient(135deg,#1a1510 0%,#2e2418 50%,#1a1510 100%)",
    href: "https://www.marutinandankelwa.com/",
  },

  // ── EVENTS 2025 ───────────────────────────
  {
    id: 2,
    title: "Open Mic",
    category: "Events & Parties",
    tags: ["Open Mic", "Free Entry", "The Hub Cafe"],
    year: "2025",
    description: "Kaagaz's first open mic night — an open stage for voices, stories, and unfiltered expression.",
    accent: "#a78bfa",
    image: "/show/s_2.jpg",
    gradient: "linear-gradient(135deg,#0d0814 0%,#1a1030 50%,#0d0814 100%)",
    meta: "28 Aug 2025 · 4:00 – 6:00 PM · The Hub Cafe · Free",
  },
  {
    id: 3,
    title: "Tum Or Chai",
    category: "Events & Parties",
    tags: ["Poetry", "Free Entry", "The Hub Cafe"],
    year: "2025",
    description: "A cozy evening of chai and poetry — intimate conversations, spoken word, and warm vibes.",
    accent: "#f59e0b",
    image: "/show/s_3.jpg",
    gradient: "linear-gradient(135deg,#1a1000 0%,#3d2800 50%,#1a1000 100%)",
    meta: "4 Sep 2025 · 4:00 – 6:00 PM · The Hub Cafe · Free",
  },
  {
    id: 4,
    title: "Artist Meetup",
    category: "Events & Parties",
    tags: ["Artist Meetup", "Free Entry", "The Hub Cafe"],
    year: "2025",
    description: "A gathering for local artists to connect, collaborate, and share their work in a relaxed setting.",
    accent: "#34d399",
    image: "/show/s_4.jpg",
    gradient: "linear-gradient(135deg,#001a12 0%,#003d28 50%,#001a12 100%)",
    meta: "11 Sep 2025 · 4:00 – 6:00 PM · The Hub Cafe · Free",
  },
  {
    id: 5,
    title: "Readers Meetup",
    category: "Events & Parties",
    tags: ["Readers Meetup", "Free Entry", "The Hub Cafe"],
    year: "2025",
    description: "Book lovers unite — a laid-back afternoon of reading recommendations and literary conversation.",
    accent: "#60a5fa",
    image: "/show/s_5.jpg",
    gradient: "linear-gradient(135deg,#07091a 0%,#131c3a 50%,#07091a 100%)",
    meta: "18 Sep 2025 · 4:00 – 6:00 PM · The Hub Cafe · Free",
  },
  {
    id: 6,
    title: "Rappers Meetup",
    category: "Events & Parties",
    tags: ["Hip-Hop", "₹99", "The Hub Cafe"],
    year: "2025",
    description: "Local rap talent on one stage — freestyle sessions, collabs, and raw hip-hop energy.",
    accent: "#f97316",
    image: "/show/s_6.jpg",
    gradient: "linear-gradient(135deg,#1a0800 0%,#3d1500 50%,#1a0800 100%)",
    meta: "9 Oct 2025 · 4:00 – 6:00 PM · The Hub Cafe · ₹99",
  },
  {
    id: 7,
    title: "Open Mic — Arth Coffee House",
    category: "Events & Parties",
    tags: ["Open Mic", "₹249", "Arth Coffee House"],
    year: "2025",
    description: "Open mic at Arth Coffee House — poetry, music, and stories in a premium cafe setting.",
    accent: "#c9a96e",
    image: "/show/s_7.jpg",
    gradient: "linear-gradient(135deg,#1a1508 0%,#2e2110 50%,#1a1508 100%)",
    meta: "10 Oct 2025 · 4:00 – 6:00 PM · Arth Coffee House · ₹249",
  },
  {
    id: 8,
    title: "Canvas of Shayari",
    category: "Events & Parties",
    tags: ["Shayari", "₹99", "Kewlkats Cafe"],
    year: "2025",
    description: "An evening of Urdu shayari and poetic expression at Kewlkats Cafe.",
    accent: "#f43f5e",
    image: "/show/s_8.jpg",
    gradient: "linear-gradient(135deg,#1a0508 0%,#3d0f18 50%,#1a0508 100%)",
    meta: "11 Oct 2025 · 4:00 – 6:00 PM · Kewlkats Cafe · ₹99",
  },
  {
    id: 9,
    title: "Bazm-O-Nazm",
    category: "Events & Parties",
    tags: ["Poetry", "₹99", "Foodes Eatery"],
    year: "2025",
    description: "A mehfil of nazms and poetry — words that linger long after the evening ends.",
    accent: "#8b5cf6",
    image: "/show/s_9.jpg",
    gradient: "linear-gradient(135deg,#0d0520 0%,#1a0f3d 50%,#0d0520 100%)",
    meta: "12 Nov 2025 · 4:00 – 6:00 PM · Foodes Eatery · ₹99",
  },
  {
    id: 10,
    title: "NGO Collab — Pratishtha Foundation",
    category: "Events & Parties",
    tags: ["NGO Collab", "Free Entry", "Community"],
    year: "2025",
    description: "A collaborative community event with Pratishtha Foundation — art and expression for a cause.",
    accent: "#10b981",
    image: "/show/s_10.jpg",
    gradient: "linear-gradient(135deg,#001a10 0%,#003820 50%,#001a10 100%)",
    meta: "14 Nov 2025 · 12:00 – 4:00 PM · Free",
  },
  {
    id: 11,
    title: "Kaagaznama — Bonfire Night",
    category: "Events & Parties",
    tags: ["Bonfire Night", "₹99", "Ridhvya Cafe"],
    year: "2025",
    description: "Stories, chai, and a bonfire — Kaagaznama's signature winter evening at Ridhvya Cafe.",
    accent: "#ef4444",
    image: "/show/s_11.jpg",
    gradient: "linear-gradient(135deg,#1a0500 0%,#3d0f00 50%,#1a0500 100%)",
    meta: "22 Nov 2025 · 6:00 – 8:00 PM · Ridhvya Cafe · ₹99",
  },
  {
    id: 12,
    title: "Painting Competition",
    category: "Events & Parties",
    tags: ["Art Competition", "₹999", "Musee Art Cafe"],
    year: "2025",
    description: "A full-day painting competition at Musee Art Cafe — open to all skill levels.",
    accent: "#e879f9",
    image: "/show/s_12.jpg",
    gradient: "linear-gradient(135deg,#1a0020 0%,#3d0050 50%,#1a0020 100%)",
    meta: "20 Dec 2025 · 12:00 – 6:00 PM · Musee Art Cafe · ₹999",
  },
  {
    id: 13,
    title: "Fusion Show",
    category: "Events & Parties",
    tags: ["Fusion Show", "Free Entry", "Musee Art Cafe"],
    year: "2025",
    description: "A free fusion performance night blending genres, art forms, and creative energy.",
    accent: "#fbbf24",
    image: "/show/s_13.jpg",
    gradient: "linear-gradient(135deg,#1a1200 0%,#3d2d00 50%,#1a1200 100%)",
    meta: "20 Dec 2025 · 8:00 – 10:00 PM · Musee Art Cafe · Free",
  },

  // ── EVENTS 2026 ───────────────────────────
  {
    id: 14,
    title: "Live Music — Shivam & Vikas",
    category: "Events & Parties",
    tags: ["Live Music", "Free Entry", "Arth Coffee House"],
    year: "2026",
    description: "A soulful live music evening featuring Shivam and Vikas at Arth Coffee House.",
    accent: "#f5a623",
    image: "/show/s_14.jpg",
    gradient: "linear-gradient(135deg,#1a1000 0%,#3d2800 50%,#1a1000 100%)",
    meta: "5 Feb 2026 · 6:00 – 10:00 PM · Arth Coffee House · Free",
  },
  {
    id: 15,
    title: "Readers Meetup — Gandhi Park",
    category: "Events & Parties",
    tags: ["Readers Meetup", "Free Entry", "Gandhi Park"],
    year: "2026",
    description: "An outdoor readers meetup at Gandhi Park — books, fresh air, and good company.",
    accent: "#6ee7b7",
    image: "/show/s_15.jpg",
    gradient: "linear-gradient(135deg,#001a12 0%,#003d28 50%,#001a12 100%)",
    meta: "8 Feb 2026 · 2:00 – 5:00 PM · Gandhi Park · Free",
  },
  {
    id: 16,
    title: "Live Music — Veer & Aditya",
    category: "Events & Parties",
    tags: ["Live Music", "Free Entry", "Arth Coffee House"],
    year: "2026",
    description: "Veer and Aditya bring their acoustic energy to Arth Coffee House for a free evening.",
    accent: "#fb923c",
    image: "/show/s_16.jpg",
    gradient: "linear-gradient(135deg,#1a0a00 0%,#3d1a00 50%,#1a0a00 100%)",
    meta: "8 Feb 2026 · 6:00 – 10:00 PM · Arth Coffee House · Free",
  },
  {
    id: 17,
    title: "Live Music — Akash & Madhav",
    category: "Events & Parties",
    tags: ["Live Music", "Free Entry", "Arth Coffee House"],
    year: "2026",
    description: "An intimate live music set by Akash and Madhav — melodies for a Valentine's week evening.",
    accent: "#f472b6",
    image: "/show/s_17.jpg",
    gradient: "linear-gradient(135deg,#1a0510 0%,#3d0f28 50%,#1a0510 100%)",
    meta: "13 Feb 2026 · 7:00 – 10:00 PM · Arth Coffee House · Free",
  },
  {
    id: 18,
    title: "Kora Kaagaz Open Mic",
    category: "Events & Parties",
    tags: ["Open Mic", "₹149", "Arth Coffee House"],
    year: "2026",
    description: "Valentine's Day open mic — raw words, unfiltered feelings, and an open stage.",
    accent: "#f43f5e",
    image: "/show/s_18.jpg",
    gradient: "linear-gradient(135deg,#1a0508 0%,#3d0f18 50%,#1a0508 100%)",
    meta: "14 Feb 2026 · 4:00 – 7:00 PM · Arth Coffee House · ₹149",
  },
  {
    id: 19,
    title: "Live Music — Kartik (Valentine's)",
    category: "Events & Parties",
    tags: ["Live Music", "Free Entry", "Arth Coffee House"],
    year: "2026",
    description: "Kartik performs live on Valentine's Day — an evening of music and warmth.",
    accent: "#a78bfa",
    image: "/show/s_19.jpg",
    gradient: "linear-gradient(135deg,#0d0814 0%,#1a1030 50%,#0d0814 100%)",
    meta: "14 Feb 2026 · 7:00 – 10:00 PM · Arth Coffee House · Free",
  },
  {
    id: 20,
    title: "Live Music — Shba & Abhishek",
    category: "Events & Parties",
    tags: ["Live Music", "Free Entry", "Arth Coffee House"],
    year: "2026",
    description: "Shba and Abhishek close out Valentine's weekend with a heartfelt live set.",
    accent: "#f9a8d4",
    image: "/show/s_20.jpg",
    gradient: "linear-gradient(135deg,#1a0510 0%,#3d0f28 50%,#1a0510 100%)",
    meta: "15 Feb 2026 · 6:00 – 10:00 PM · Arth Coffee House · Free",
  },
  {
    id: 21,
    title: "Live Music — Kartik (Feb 27)",
    category: "Events & Parties",
    tags: ["Live Music", "Free Entry", "Arth Coffee House"],
    year: "2026",
    description: "Kartik returns to the Arth Coffee House stage for another live music evening.",
    accent: "#a78bfa",
    image: "/show/s_21.jpg",
    gradient: "linear-gradient(135deg,#0d0814 0%,#1a1030 50%,#0d0814 100%)",
    meta: "27 Feb 2026 · 7:00 – 10:00 PM · Arth Coffee House · Free",
  },
  {
    id: 22,
    title: "Live Music — Krrish (Feb 28)",
    category: "Events & Parties",
    tags: ["Live Music", "Free Entry", "Arth Coffee House"],
    year: "2026",
    description: "Krrish performs live — soulful sets to wrap up February at Arth Coffee House.",
    accent: "#34d399",
    image: "/show/s_22.jpg",
    gradient: "linear-gradient(135deg,#001a12 0%,#003d28 50%,#001a12 100%)",
    meta: "28 Feb 2026 · 7:00 – 10:00 PM · Arth Coffee House · Free",
  },
  {
    id: 23,
    title: "Dehradun Open Mic — Dhungaar",
    category: "Events & Parties",
    tags: ["Open Mic", "₹149", "Dhungaar"],
    year: "2026",
    description: "Kaagaz takes the stage to Dehradun — an open mic night at the popular Dhungaar venue.",
    accent: "#60a5fa",
    image: "/show/s_23.jpg",
    gradient: "linear-gradient(135deg,#07091a 0%,#131c3a 50%,#07091a 100%)",
    meta: "8 Mar 2026 · 4:00 – 6:00 PM · Dhungaar · ₹149",
  },
  {
    id: 24,
    title: "Live Music — Krrish (Mar 14)",
    category: "Events & Parties",
    tags: ["Live Music", "Free Entry", "Arth Coffee House"],
    year: "2026",
    description: "Krrish's mid-March live set at Arth Coffee House — an evening worth staying for.",
    accent: "#34d399",
    image: "/show/s_24.jpg",
    gradient: "linear-gradient(135deg,#001a12 0%,#003d28 50%,#001a12 100%)",
    meta: "14 Mar 2026 · 6:00 – 10:00 PM · Arth Coffee House · Free",
  },
  {
    id: 25,
    title: "Live Music — Jaii (Mar 20)",
    category: "Events & Parties",
    tags: ["Live Music", "Free Entry", "Arth Coffee House"],
    year: "2026",
    description: "Jaii brings a distinctive live set to Arth Coffee House on a March evening.",
    accent: "#fbbf24",
    image: "/show/s_25.jpg",
    gradient: "linear-gradient(135deg,#1a1200 0%,#3d2d00 50%,#1a1200 100%)",
    meta: "20 Mar 2026 · 8:00 – 10:00 PM · Arth Coffee House · Free",
  },
  {
    id: 26,
    title: "Singing Competition",
    category: "Events & Parties",
    tags: ["Singing Comp.", "₹99", "Arth Coffee House"],
    year: "2026",
    description: "Kaagaz hosts a singing competition — a stage for raw talent and powerful voices.",
    accent: "#f97316",
    image: "/show/s_26.jpg",
    gradient: "linear-gradient(135deg,#1a0800 0%,#3d1500 50%,#1a0800 100%)",
    meta: "20 Mar 2026 · 4:00 – 7:00 PM · Arth Coffee House · ₹99",
  },
  {
    id: 27,
    title: "Open Mic — March",
    category: "Events & Parties",
    tags: ["Open Mic", "₹99", "Arth Coffee House"],
    year: "2026",
    description: "March open mic — new voices, returning artists, and the energy of a growing community.",
    accent: "#c084fc",
    image: "/show/s_27.jpg",
    gradient: "linear-gradient(135deg,#0d0520 0%,#1a0f3d 50%,#0d0520 100%)",
    meta: "21 Mar 2026 · 4:00 – 7:00 PM · Arth Coffee House · ₹99",
  },
  {
    id: 28,
    title: "Live Music — Shiba (Mar 21)",
    category: "Events & Parties",
    tags: ["Live Music", "Free Entry", "Arth Coffee House"],
    year: "2026",
    description: "Shiba performs live — effortless melodies and an intimate atmosphere at Arth Coffee House.",
    accent: "#67e8f9",
    image: "/show/s_28.jpg",
    gradient: "linear-gradient(135deg,#001a1a 0%,#003d3d 50%,#001a1a 100%)",
    meta: "21 Mar 2026 · 7:00 – 10:00 PM · Arth Coffee House · Free",
  },
  {
    id: 29,
    title: "Stalls Market",
    category: "Events & Parties",
    tags: ["Stalls", "₹2499", "Arth Coffee House"],
    year: "2026",
    description: "A full-day stalls market at Arth Coffee House — vendors, creators, and community in one space.",
    accent: "#fde68a",
    image: "/show/s_29.jpg",
    gradient: "linear-gradient(135deg,#1a1500 0%,#3d3200 50%,#1a1500 100%)",
    meta: "22 Mar 2026 · 10:00 AM – 8:00 PM · Arth Coffee House · ₹2499",
  },
  {
    id: 30,
    title: "Live Music — Krrish & Jaii",
    category: "Events & Parties",
    tags: ["Live Music", "Free Entry", "Arth Coffee House"],
    year: "2026",
    description: "Krrish and Jaii share the stage for a collaborative live music night at Arth Coffee House.",
    accent: "#86efac",
    image: "/show/s_30.jpg",
    gradient: "linear-gradient(135deg,#001a08 0%,#003d18 50%,#001a08 100%)",
    meta: "22 Mar 2026 · 8:00 – 10:00 PM · Arth Coffee House · Free",
  },
  {
    id: 31,
    title: "Live Music — Shiba (Mar 29)",
    category: "Events & Parties",
    tags: ["Live Music", "Free Entry", "Arth Coffee House"],
    year: "2026",
    description: "Shiba closes out March with another live music evening at Arth Coffee House.",
    accent: "#67e8f9",
    image: "/show/s_31.jpg",
    gradient: "linear-gradient(135deg,#001a1a 0%,#003d3d 50%,#001a1a 100%)",
    meta: "29 Mar 2026 · 7:00 – 10:00 PM · Arth Coffee House · Free",
  },
  {
    id: 32,
    title: "Live Music — Aditya & Sarthak",
    category: "Events & Parties",
    tags: ["Live Music", "Free Entry", "Arth Coffee House"],
    year: "2026",
    description: "An intimate live music evening at Arth Coffee House featuring Aditya & Sarthak.",
    accent: "#f5a623",
    image: "/show/s_32.jpg",
    gradient: "linear-gradient(135deg,#1a1000 0%,#3d2800 50%,#1a1000 100%)",
    meta: "5 Apr 2026 · 7:00 – 10:00 PM · Arth Coffee House · Free",
  },
  {
    id: 33,
    title: "Live Music — Talvinder Special",
    category: "Events & Parties",
    tags: ["Live Music", "Free Entry", "Neelansh Restro"],
    year: "2026",
    description: "A special live music night with Talvinder at Neelansh Restro. Free entry for all.",
    accent: "#7c6fff",
    image: "/show/s_33.jpg",
    gradient: "linear-gradient(135deg,#06051a 0%,#110f30 50%,#06051a 100%)",
    meta: "6 Apr 2026 · 7:00 – 10:00 PM · Neelansh Restro · Free",
  },
];

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

function CategoryPill({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        active
          ? "bg-neutral-900 text-white shadow-lg scale-105"
          : "bg-white text-neutral-500 border border-neutral-200 hover:border-neutral-400 hover:text-neutral-800"
      }`}
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
      className="group relative rounded-2xl overflow-hidden"
      style={{ animationDelay: `${index * 60}ms`, animation: "fadeSlideUp 0.5s ease both" }}
    >
      {/* Image / Gradient panel */}
      <div className="relative w-full overflow-hidden" style={{ paddingBottom: "62%", background: project.gradient }}>
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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-3xl opacity-30 transition-all duration-700 group-hover:opacity-50 group-hover:scale-125"
            style={{ background: project.accent }}
          />
        )}

        <span className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/10 z-10">
          {project.category}
        </span>
        <span className="absolute top-4 right-4 text-white/70 text-xs font-mono z-10">{project.year}</span>

        {/* ── FIXED: hover overlay button is now a real <a> tag ── */}
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

      {/* Card body */}
      <div className="bg-white border border-neutral-100 rounded-b-2xl p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-neutral-900 text-base leading-snug">{project.title}</h3>
          <div className="w-3 h-3 rounded-full mt-1 shrink-0" style={{ background: project.accent }} />
        </div>
        <p className="text-neutral-500 text-sm mt-2 leading-relaxed line-clamp-2">{project.description}</p>
        {project.meta && (
          <p className="text-xs text-neutral-400 mt-3 flex items-center gap-1.5">
            <span>📍</span> {project.meta}
          </p>
        )}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.map((t) => (
            <span key={t} className="bg-neutral-50 border border-neutral-100 text-neutral-500 text-xs px-2.5 py-0.5 rounded-md">
              {t}
            </span>
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

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

const Showcase = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = activeCategory === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <ShowcaseNavbar />

        <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">

          {/* Hero */}
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

          {/* Section header + filters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 mt-16">
            <div>
              <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">Our Work</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
                Selected Projects
                <span className="ml-3 text-base font-normal text-neutral-400">({filtered.length})</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <CategoryPill key={c} label={c} active={activeCategory === c} onClick={() => setActiveCategory(c)} />
              ))}
            </div>
          </div>

          {/* Grid */}
          <div key={activeCategory} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-neutral-400">No projects in this category yet.</div>
          )}

          {/* Growing portfolio nudge */}
          <div className="mt-12 mb-4 rounded-2xl border border-neutral-100 bg-white px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1">Growing Portfolio</p>
              <h3 className="text-lg font-semibold text-neutral-900">More work on the way.</h3>
              <p className="text-neutral-500 text-sm mt-1">
                We're a young studio — every project we take on gets added here. Check back soon.
              </p>
            </div>
            <a href="/meeting" className="shrink-0 px-6 py-3 bg-neutral-900 text-white rounded-xl text-sm font-semibold hover:bg-neutral-700 transition-colors">
              Start a project →
            </a>
          </div>

          {/* Process strip */}
          <div className="mt-16 mb-4 rounded-3xl bg-neutral-900 text-white px-8 md:px-14 py-14 overflow-hidden relative">
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-12 max-w-xl">A studio process built for results — not just aesthetics.</h2>
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

          {/* Testimonial */}
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
                  <div className="w-9 h-9 rounded-full bg-neutral-900 flex items-center justify-center text-white text-sm font-bold shrink-0">J</div>
                  <div>
                    <p className="text-neutral-900 text-sm font-semibold">Jordan Brisson</p>
                    <p className="text-neutral-400 text-xs">CEO, Arth Coffee House</p>
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