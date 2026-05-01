import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Sep 2025",
      content: (
        <div>
          <p className="mb-2 text-sm font-semibold text-neutral-900">
            It started with an open mic.
          </p>
          <p className="mb-6 text-sm font-normal text-neutral-600 leading-relaxed">
            No office. No plan. Just a few of us in Dehradun who thought local
            businesses and local talent deserved better than what they were
            getting. So we started doing events — open mics, poetry nights,
            artist meetups at cafes around the city. We handled everything: the
            concept, the promotion, the execution. Rooms filled up. People came
            back. Something was working.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <img
              src="/timeline/1.webp"
              alt=""
              width={500}
              height={500}
              className="h-20 w-full rounded-xl object-cover shadow-md md:h-44 lg:h-52"
            />
            <img
              src="/timeline/2.webp"
              alt=""
              width={500}
              height={500}
              className="h-20 w-full rounded-xl object-cover shadow-md md:h-44 lg:h-52"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Nov 2025",
      content: (
        <div>
          <p className="mb-2 text-sm font-semibold text-neutral-900">
            More people. More work.
          </p>
          <p className="mb-6 text-sm font-normal text-neutral-600 leading-relaxed">
            Word got around. Designers, photographers, writers — people who were
            good at what they did but had nowhere to do it — started joining. We
            took on social media for local businesses. Cafes, restaurants, small
            brands. Most of them had never really invested in their online
            presence. We changed that, and it showed in their footfall.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <img
              src="/timeline/3.webp"
              alt=""
              width={500}
              height={500}
              className="h-20 w-full rounded-xl object-cover shadow-md md:h-44 lg:h-52"
            />
            <img
              src="/timeline/4.webp"
              alt=""
              width={500}
              height={500}
              className="h-20 w-full rounded-xl object-cover shadow-md md:h-44 lg:h-52"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2026",
      content: (
        <div>
          <p className="mb-2 text-sm font-semibold text-neutral-900">
            We built our first website.
          </p>
          <p className="mb-6 text-sm font-normal text-neutral-600 leading-relaxed">
            Clients started asking for more than social media. So we delivered
            more. Our first web project was for Maruti Nandan Marmo & Grani — a
            marble and granite supplier operating from Rajasthan with global
            reach. They had a great business and zero digital presence. We built
            them something they were proud of. So were we.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <img
              src="/timeline/5.webp"
              alt="Maruti Nandan"
              width={500}
              height={500}
              className="h-20 w-full rounded-xl object-cover shadow-md md:h-44 lg:h-52"
            />
            <img
              src="/timeline/6.webp"
              alt=""
              width={500}
              height={500}
              className="h-20 w-full rounded-xl object-cover shadow-md md:h-44 lg:h-52"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Today",
      content: (
        <div>
          <p className="mb-2 text-sm font-semibold text-neutral-900">
            Two teams. Still the same idea.
          </p>
          <p className="mb-6 text-sm font-normal text-neutral-600 leading-relaxed">
            We recently connected with a talented group in Udaipur. Good people,
            good instincts — just needed structure. It was a natural fit. Now
            Kaagaz runs as two teams, Dehradun and Udaipur, doing the same work
            we always have: helping businesses look and feel like the best
            version of themselves. Eight months in. Nowhere near done.
          </p>
          <div className="grid grid-cols-2 gap-3 mb-5">
            <img
              src="/timeline/7.webp"
              alt=""
              width={500}
              height={500}
              className="h-20 w-full rounded-xl object-cover shadow-md md:h-44 lg:h-52"
            />
            <img
              src="/timeline/8.webp"
              alt=""
              width={500}
              height={500}
              className="h-20 w-full rounded-xl object-cover shadow-md md:h-44 lg:h-52"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
