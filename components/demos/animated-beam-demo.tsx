"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import Image from "next/image";
import { PiFigmaLogo } from "react-icons/pi";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        // removed p-3 (padding)
        "z-10 flex size-12 items-center justify-center rounded-full border-2 border-border shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex xl:h-[500px] w-full items-center justify-center overflow-hidden  p-10 ",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full flex-row items-stretch justify-between gap-10 max-w-lg">
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div5Ref}>
            <Image
              src="/logo/kittl.ico"
              width={100}
              height={100}
              className="w-8 h-8 object-contain"
              alt="kittl"
            />
          </Circle>

          <Circle ref={div2Ref}>
            <Image
              src="/logo/react.png"
              width={100}
              height={100}
              className="w-8 h-8 object-contain"
              alt="react"
            />
          </Circle>

          <Circle ref={div3Ref}>
            <Image
              src={"/logo/figma.png"}
              width={100}
              height={100}
              className="w-8 h-8 object-contain"
              alt="figma"
            />
          </Circle>

          <Circle ref={div4Ref}>
            <Image
              src="/logo/claude.png"
              width={100}
              height={100}
              className="w-8 h-8 object-contain"
              alt="claude"
            />
          </Circle>

          <Circle ref={div1Ref}>
            <Image
              src="/logo/next.png"
              width={100}
              height={100}
              className="w-8 h-8 object-contain"
              alt="next"
            />
          </Circle>
        </div>

        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16 bg-white">
            <Image
              src={"/logo/kaagaz.png"}
              height={100}
              width={100}
              className="w-10 h-10 object-contain"
              alt="logo"
            />
          </Circle>
        </div>

        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref} className="bg-white">
            <Icons.user />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
      />
    </div>
  );
}

const Icons = {
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};
