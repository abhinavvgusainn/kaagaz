"use client";

import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import Footer from "@/components/footer";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import Navbar from "@/components/navbar";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import { IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import { Element, Link as ScrollLink } from "react-scroll";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const CLIENTS = [
  {
    name: "Shamiana",
    href: "https://www.shamianaudaipur.com/",
    category: "Food & Dining",
  },
  {
    name: "Marutinandan Marmo",
    href: "https://www.Marutinandankelwa.com",
    category: "Materials",
  },
  {
    name: "Arth Coffee House",
    href: "https://www.instagram.com/arthcoffeehouse?igsh=ODFzNXRveDAyYnU0",
    category: "Cafe",
  },
  {
    name: "Syah",
    href: "https://www.instagram.com/syahudaipur?igsh=dzRraWUwbTA0NHpl",
    category: "Food & Dining",
  },
  { name: "Niwas", href: "#", category: "Hospitality" },
  { name: "Elara Night", href: "#", category: "Events & Nightlife" },
  { name: "Elara Stay and Resort", href: "#", category: "Hospitality" },
  { name: "Break Lo", href: "#", category: "Food & Dining" },
  { name: "Neelansh Bar & Cafe", href: "#", category: "Food & Dining" },
  { name: "Dhungaar Rest", href: "#", category: "Food & Dining" },
  { name: "Magnivibe", href: "#", category: "Lifestyle" },
  { name: "Emp. Marmo and Grani", href: "#", category: "Materials" },
];

const TESTIMONIALS = [
  {
  quote:
    "Kaagaz helped us build a professional online presence that brought in better quality leads and international inquiries for our marble and glass supply business.",
  name: "Nitilaksh Pareek",
  // role: "Founder, Elara Night",
  rating: 5,
  },
  {
    quote:
      "The team delivered a website that completely transformed how our guests experience our brand online. Bookings jumped 35% within six weeks of launch.",
    name: "Priya Mehta",
    // role: "Director, Elara Stay and Resort",
    rating: 5,
  },
  {
    quote:
      "We've been working with Kaagaz for over 8 months and they've been amazing. They've helped us grow our business and we couldn't be happier with the results.",
    name: "Dhruv Bansal",
    // role: "CEO, Arth Coffee House",
    rating: 5,
  },
];

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

export default function Home() {
  return (
    <div
      className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa]
        bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
        bg-[size:14px_24px]"
    >
      {/* ── Navbar ── */}
      <Navbar/>

      {/* ── Hero ── */}
      <main className="md:pb-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          {/* <AnimatedShinyTextDemo /> */}

          <h1>
            <CoverDemo />
          </h1>

          <p className="md:text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500">
            Schedule a call with us to discuss your project and get a quote in
            minutes
          </p>

          <div className="flex md:justify-center items-center gap-x-4">
            <Link
              href="/meeting"
              className="py-3 px-10 md:px-16 md:text-xl hover:bg-[#abcbff] rounded-[6px] border-2 border-black bg-[#121212] text-white transition duration-200
                hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]"
            >
              Book a Call
            </Link>
            <Link
              href={"/showcase"}
              className="bg-white py-3 px-10 md:px-16 md:text-xl border-4 border-black rounded-[6px]
                hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]"
            >
              Showcase
            </Link>
          </div>

          {/* ✅ Mobile-only buttons added */}
          <div className="flex gap-x-4 mt-4 md:hidden">
            <Link
              href={"/services"}
              className="flex-1 text-center py-3 px-10 border-4 border-black rounded-[6px] bg-white
               hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]"
            >
              Services
            </Link>

            <Link
              href={"/story"}
              className="flex-1 text-center py-3 px-10 border-4 border-black rounded-[6px] bg-white
               hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]"
            >
              Story
            </Link>
          </div>

          {/* Capability pills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
            {["Design", "Development", "Marketing", "Strategy"].map((cap) => (
              <BoxReveal key={cap} boxColor={"#3b82f6"} duration={0.5}>
                <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                  <PiCheckBold className="text-xl text-blue-500" />
                  {cap}
                </p>
              </BoxReveal>
            ))}
          </div>

          {/* Trust bar */}
          <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
            <div className="md:w-2/5">
              <h1 className="text-2xl font-medium text-gray-600 w-4/5">
                Trusted by fast moving brands worldwide
              </h1>
              <div className="flex my-6 gap-x-5 w-full">
                <div>
                  <h1 className="text-blue-500 text-3xl md:text-5xl">
                    <NumberTicker value={10} />+
                    <p className="text-gray-500 text-sm md:text-md">
                      Happy Clients
                    </p>
                  </h1>
                </div>
                <div className="w-px bg-gray-300 self-stretch" />
                <div className="flex-1 min-w-0">
                  <h1 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                    <NumberTicker value={60} />+
                    <p className="text-gray-500 text-sm md:text-md">
                      Projects Completed
                    </p>
                  </h1>
                </div>
              </div>
            </div>

            <section className="overflow-hidden mt-10 md:w-4/5">
              <InfiniteMovingLogos
                speed="normal"
                direction="left"
                items={[
                  { logo: "/clients/neelansh.png", name: "Logo" },
                  { logo: "/clients/maruti.jpg", name: "Logo" },
                  { logo: "/clients/shamiana.jpg", name: "Logo" },
                  { logo: "/clients/syah.jpg", name: "Logo" },
                ]}
              />
            </section>
          </div>
        </div>
      </main>

      {/* ── Scroll velocity banner ── */}
      <section className="py-20">
        <ScrollBasedVelocityDemo />
      </section>

      {/* ── Our Clients ── */}
      <section className="py-16 md:py-24 xl:w-4/5 2xl:w-[68%] md:mx-auto px-6 md:px-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">
              Who We've Worked With
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900">
              Our Clients
            </h2>
          </div>
          <p className="text-neutral-500 text-sm md:max-w-xs md:text-right">
            From local cafes to resort brands — we help businesses of every size
            grow their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {CLIENTS.map((client, i) => (
            <Link
              key={client.name}
              href={client.href}
              className="group flex items-center justify-between bg-white border border-neutral-100 rounded-xl px-6 py-5
                hover:border-neutral-300 hover:shadow-md transition-all duration-200"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div>
                <p className="font-semibold text-neutral-900 group-hover:text-blue-500 transition-colors">
                  {client.name}
                </p>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {client.category}
                </p>
              </div>
              <svg
                className="w-4 h-4 text-neutral-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all duration-200 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          ))}
        </div>

        {/* subtle bottom note */}
        <p className="text-center text-neutral-400 text-xs mt-8">
          + many more.{" "}
          <Link href="/showcase" className="text-blue-500 hover:underline">
            See our full showcase →
          </Link>
        </p>
      </section>

      {/* ── Process ── */}
      <Element name="process">
        <main className="md:px-0 mx-6 md:mx-auto xl:w-4/5 2xl:w-[68%] py-10">
          <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
            Our{" "}
            <span className="text-blue-500 flex gap-x-1 items-center">
              <Image
                src={"/icons/squiggle.svg"}
                width={10000}
                height={10000}
                className="w-6"
                alt=""
              />
              Creative
              <Image
                src={"/icons/star.svg"}
                width={10000}
                height={10000}
                className="w-6 mb-8"
                alt=""
              />
            </span>{" "}
            Process
          </h1>
          <p className="text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
            All of our services are designed to help your business to get
            noticed.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <AnimatedBeamMultipleOutputDemo />
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <BoxRevealDemo />
            </div>
          </div>
        </main>
      </Element>

      {/* ── Testimonials ── */}
      <section className="py-16 md:py-24 xl:w-4/5 2xl:w-[68%] md:mx-auto px-6 md:px-0">
        <div className="text-center mb-12">
          <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">
            Social Proof
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900">
            What our clients say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-neutral-100 rounded-2xl p-7 flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-x-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <IconStarFilled key={j} className="text-yellow-400 w-4 h-4" />
                ))}
              </div>

              <p className="text-neutral-700 text-sm leading-relaxed flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-neutral-50">
                <div className="w-9 h-9 rounded-full bg-neutral-900 flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-neutral-900 text-sm font-semibold">
                    {t.name}
                  </p>
                  {/* <p className="text-neutral-400 text-xs">{t.role}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why us / mini pitch ── */}
      <section className="py-12 xl:w-4/5 2xl:w-[68%] md:mx-auto px-6 md:px-0">
        <div className="rounded-3xl bg-neutral-900 text-white px-8 md:px-14 py-14 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-3">
                Why Kaagaz
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
                We treat your brand like it's our own.
              </h2>
              <p className="text-neutral-400 mt-5 leading-relaxed text-sm md:text-base">
                No outsourcing, no middlemen. Every project is handled by our
                in-house team who are invested in your results — not just your
                invoice.
              </p>
              <Link
                href="/services"
                className="inline-block mt-8 px-6 py-3 bg-white text-neutral-900 rounded-xl text-sm font-semibold hover:bg-neutral-100 transition-colors"
              >
                Explore our services →
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "60+", label: "Projects Delivered" },
                { val: "15+", label: "Team Members" },
                { val: "48hr", label: "Avg. Response Time" },
                { val: "8 months", label: "In Business" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 rounded-xl p-5">
                  <p className="text-2xl font-bold text-white">{s.val}</p>
                  <p className="text-neutral-400 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <LetsMakeThingsHappenSection />
      </section>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
