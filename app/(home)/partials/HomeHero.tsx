"use client";

import { useRef } from "react";
import {
  getLockedHeroBackgroundImage,
  LockedHeroBackgroundLayers,
} from "@/components/shared/lockedHeroBackground";
import { useHeroReveal } from "@/hooks/useFrameScroll";
import { shell } from "@/lib/classes";
import { homeHeroStats } from "@/app/data/homeData";

type HomeHeroProps = {
  horizonShift: number;
};

const statSvg = [
  <g key="medal">
    <circle cx="12" cy="8" r="5.5" />
    <path d="M9 13l-2 7 5-3 5 3-2-7" />
  </g>,
  <g key="chart">
    <rect x="4.5" y="6" width="4" height="14" rx="1" />
    <rect x="10" y="3" width="4" height="17" rx="1" />
    <rect x="15.5" y="9" width="4" height="11" rx="1" />
  </g>,
  <path
    key="heart"
    d="M20.8 5.6a5.5 5.5 0 00-7.8 0L12 6.7l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 22l7.8-7.8 1-1a5.5 5.5 0 000-7.7z"
  />,
];

export function HomeHero({ horizonShift }: HomeHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useHeroReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-dvh overflow-hidden bg-[#050b1f] text-white"
      id="hero"
      style={{
        backgroundImage: getLockedHeroBackgroundImage(horizonShift),
      }}
    >
      <LockedHeroBackgroundLayers />

      <div
        className={`${shell} relative z-10 flex min-h-dvh items-center justify-center pt-18`}
      >
        <div className="flex w-full max-w-350 flex-col items-center justify-center px-2 pb-[clamp(44px,6vh,72px)] pt-[clamp(64px,9vh,112px)] text-center">
          <span
            data-hero-tagline
            className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white/74"
          >
            Built for the problem after launch
          </span>

          <h1 className="mt-[clamp(28px,4.7vh,43px)] max-md:mt-6 max-w-[17ch] text-[clamp(36px,7vw,108px)] font-semibold leading-[0.88] tracking-[-0.072em] max-md:max-w-none">
            <span className="md:block">We build the systems your </span>
            <span className="md:block">
              business{" "}
              <span className="font-display text-[0.86em] font-normal tracking-tighter text-[#bdd8ff]">
                runs on.
              </span>
            </span>
          </h1>

          <p
            data-hero-paragraph
            className="mt-[clamp(20px,3vh,30px)] max-w-[48ch] text-[clamp(15px,1.5vw,19px)] leading-[1.55] text-white/70"
          >
            For growing companies that can&apos;t afford to rebuild twice. Built
            for where your business is going, not just where it is today.
          </p>

          <div className="mt-[clamp(76px,10.5vh,108px)] max-md:mt-10 flex w-full max-w-245 items-stretch justify-center max-md:flex-col max-md:gap-0">
            {homeHeroStats.map((item, index) => (
              <div
                data-hero-stat
                className={`relative flex flex-1 items-center justify-center gap-5 px-6 max-md:justify-start max-md:px-0 max-md:py-5 ${
                  index > 0 ? "max-md:border-t max-md:border-white/18" : ""
                }`}
                key={item.label}
              >
                {index > 0 ? (
                  <i className="absolute left-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-white/18 md:block" />
                ) : null}
                <svg
                  aria-hidden="true"
                  data-hero-icon
                  className="h-7 w-7 text-white/84"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.7"
                >
                  {statSvg[index]}
                </svg>
                <div className="grid justify-items-start gap-1 text-left">
                  <strong className="whitespace-nowrap text-[clamp(28px,3.5vw,44px)] font-semibold leading-[1.1] tracking-[-0.06em]">
                    {item.value}
                  </strong>
                  <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-white/74">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
