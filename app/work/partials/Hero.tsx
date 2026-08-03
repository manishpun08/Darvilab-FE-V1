"use client";

import {
  getLockedHeroBackgroundImage,
  LockedHeroBackgroundLayers,
} from "@/components/shared/lockedHeroBackground";
import { getHeroIntroParallaxStyle } from "@/hooks/useHeroIntroParallax";
import { usePortfolioHeroReveal } from "@/hooks/usePortfolioAnimations";
import { label, sectionTitle, shell } from "@/lib/classes";

const scope = [
  "Logistics SaaS",
  "Commerce",
  "FinTech",
  "Field Service",
  "GovOps",
  "HealthTech",
];

type Props = {
  horizonShift: number;
  parallaxDisabled?: boolean;
  sectionRef?: React.RefObject<HTMLElement | null> | null;
  stickyLayerEnabled?: boolean;
};

export function Hero({
  horizonShift,
  parallaxDisabled = false,
  sectionRef = null,
  stickyLayerEnabled = false,
}: Props) {
  const enableParallax = Boolean(sectionRef) && !parallaxDisabled;
  usePortfolioHeroReveal(sectionRef as React.RefObject<HTMLDivElement | null>);

  return (
    <section
      className={`min-h-screen overflow-hidden  overflow-x-clip max-md:overflow-y-visible bg-[#050b1f] text-white ${
        stickyLayerEnabled ? "sticky top-0 z-0" : "relative"
      }`}
      id="hero"
      ref={sectionRef}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={getHeroIntroParallaxStyle(enableParallax, "--work-hero-layer-y")}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: getLockedHeroBackgroundImage(horizonShift),
          }}
        />
        <LockedHeroBackgroundLayers />
      </div>
      <div
        className={`${shell} relative z-10 grid min-h-screen grid-cols-[68px_minmax(0,1fr)_280px] pt-18 max-lg:grid-cols-[56px_1fr] max-md:block max-md:pt-4`}
      >
        <aside className="flex flex-col items-center border-r border-white/16 py-11 max-md:absolute max-md:bottom-8 max-md:left-0 max-md:top-33.5">
          <span className={`${label} [writing-mode:vertical-rl] rotate-180`}>
            Case Record
          </span>
          <i className="my-6 w-px flex-1 bg-[linear-gradient(#4c63ff_0_38%,rgba(255,255,255,0.22)_38%)]" />
          <b className="font-display text-[13px] font-normal">01</b>
        </aside>

        <div className="flex min-w-0 flex-col justify-center px-[clamp(32px,5vw,80px)] pb-14 pt-[clamp(64px,8vh,104px)] max-lg:px-9 max-md:px-4 max-md:pt-20 ">
          <div className="flex max-w-[820px] items-center justify-between border-b border-white/16 pb-4 max-sm:flex-col max-sm:items-start max-sm:gap-3">
            <span className={label} data-hero-tagline>
              WORK / CLIENT PROJECTS
            </span>
            <span className={`${label} text-ice`} data-hero-tagline>
              Outcomes on record / 2023-2026
            </span>
          </div>

          <h1
            className={`${sectionTitle} mt-[clamp(72px,11vh,132px)] max-md:mt-6 max-md:text-4xl lg:max-w-245 text-[clamp(58px,7.35vw,114px)] text-white`}
          >
            <span className="block" data-hero-line>
              Real problems solved.
            </span>
            <span
              className="mt-2 block font-display text-[0.54em] font-normal leading-[1.24] tracking-[-0.04em] text-ice"
              data-hero-line
            >
              Every outcome documented.
            </span>
          </h1>

          <div className="mt-auto max-md:mt-0 grid max-w-[820px] grid-cols-[1.25fr_.75fr] gap-10 max-md:grid-cols-1">
            <p
              className="max-w-[500px] text-[16px] leading-[1.58] text-white/76"
              data-hero-paragraph
            >
              Each project covers the problem inherited, the decision that
              changed direction, and what the system delivered, measured rather
              than estimated.
            </p>
            <dl className="grid gap-4 max-md:max-w-[340px]">
              <div
                className="grid grid-cols-[92px_1fr] border-t border-white/16 pt-3"
                data-hero-stat
              >
                <dt className="font-mono text-[8px] font-semibold uppercase tracking-[0.1em] text-white/48">
                  Projects
                </dt>
                <dd className="m-0 text-[12px] font-semibold">
                  SELECTED PROJECTS
                </dd>
              </div>
              <div
                className="grid grid-cols-[92px_1fr] border-t border-white/16 pt-3"
                data-hero-stat
              >
                <dt className="font-mono text-[8px] font-semibold uppercase tracking-widest text-white/48">
                  Reading model
                </dt>
                <dd className="m-0 text-[12px] font-semibold">
                  Problem / Decision / Outcome
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <aside className="grid grid-rows-[auto_1fr_auto] max-md:grid-rows-[auto_auto_auto] border-l border-white/16 py-11 max-md:py-4 pl-7 max-lg:col-start-2 max-lg:mt-10 max-lg:border-l-0 max-lg:border-t max-lg:pl-0 max-lg:pt-8 max-md:mx-10 max-md:mt-4">
          <div className="flex justify-between">
            <span className={label}>Recent work / 2023-2026</span>
          </div>
          <h2
            className="self-center font-display text-[clamp(118px,13vw,214px)] leading-[0.8] max-md:text-[6rem] tracking-[-0.08em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.4)]"
            data-hero-counter
          >
            07
          </h2>
          <div className="grid gap-3">
            <span className={label}>Scope</span>
            <p className="text-[12px] font-semibold leading-[1.55] text-white/76">
              {scope.map((item) => (
                <span key={item} data-hero-scope>
                  {item}{" "}
                </span>
              ))}
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
