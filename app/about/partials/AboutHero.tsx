"use client";

import type { RefObject } from "react";
import {
  getLockedHeroBackgroundImage,
  LockedHeroBackgroundLayers,
} from "@/components/shared/lockedHeroBackground";
import { getHeroIntroParallaxStyle } from "@/hooks/useHeroIntroParallax";
import { usePortfolioHeroReveal } from "@/hooks/usePortfolioAnimations";
import { label, shell } from "@/lib/classes";

type AboutHeroProps = {
  horizonShift: number;
  parallaxDisabled?: boolean;
  sectionRef?: RefObject<HTMLElement | null> | null;
  stickyLayerEnabled?: boolean;
};

export function AboutHero({
  horizonShift,
  parallaxDisabled = false,
  sectionRef = null,
  stickyLayerEnabled = false,
}: AboutHeroProps) {
  const enableParallax = Boolean(sectionRef) && !parallaxDisabled;
  usePortfolioHeroReveal(sectionRef as React.RefObject<HTMLDivElement | null>);

  return (
    <section
      className={`min-h-screen overflow-hidden overflow-x-clip bg-[#050b1f] text-white ${
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
        <LockedHeroBackgroundLayers maskFade="linear-gradient(to_bottom,#000,transparent_84%)" />
      </div>
      <div
        className={`${shell} relative z-10 grid min-h-screen grid-cols-[68px_minmax(0,1fr)_300px] pt-[72px] max-lg:grid-cols-[56px_1fr] max-md:block`}
      >
        <aside className="flex flex-col items-center border-r border-white/16 py-11 max-md:absolute max-md:bottom-14 max-md:left-0 max-md:top-[134px]">
          <span className={`${label} [writing-mode:vertical-rl] rotate-180`}>
            The operating standard
          </span>
          <i className="my-6 w-px flex-1 bg-[linear-gradient(#4c63ff_0_38%,rgba(255,255,255,0.22)_38%)]" />
          <b className="font-display text-[13px] font-normal">02</b>
        </aside>

        <div className="flex min-w-0 flex-col justify-center px-[clamp(32px,5vw,80px)] pb-10 pt-[clamp(64px,8vh,104px)] max-lg:px-9 max-md:px-10 max-md:pt-40">
          <div className="flex max-w-[820px] items-center justify-between border-b border-white/16 pb-4 max-sm:flex-col max-sm:items-start max-sm:gap-3">
            <span className={label} data-hero-tagline>
              About / company record
            </span>
            <span className={`${label} text-ice`} data-hero-tagline>
              Accountability / active
            </span>
          </div>

          <h1 className="mt-[clamp(72px,11vh,132px)] max-w-[980px] text-[clamp(58px,7.35vw,114px)] font-semibold leading-[0.86] tracking-[-0.066em]">
            <span className="block" data-hero-line>
              Delivery is a milestone.
            </span>
            <span
              className="mt-2 block font-display text-[0.54em] font-normal leading-[1.24] tracking-[-0.04em] text-ice"
              data-hero-line
            >
              Not a finish line.
            </span>
          </h1>

          <div className="mt-auto grid max-w-[820px] grid-cols-[1.25fr_.75fr] gap-10 max-md:grid-cols-1">
            <p
              className="max-w-[500px] text-[16px] leading-[1.58] text-white/76"
              data-hero-paragraph
            >
              DarviLabs works with businesses where software is operational
              infrastructure - not a peripheral experiment. We stay close enough
              to the problem to own the decisions that shape what happens after
              launch.
            </p>
            <dl className="grid gap-4 max-md:max-w-[340px]">
              <div
                className="grid grid-cols-[92px_1fr] border-t border-white/16 pt-3"
                data-hero-stat
              >
                <dt className="font-mono text-[8px] font-semibold uppercase tracking-[0.1em] text-white/48">
                  Model
                </dt>
                <dd className="text-[12px] font-semibold">
                  One accountable team
                </dd>
              </div>
              <div
                className="grid grid-cols-[92px_1fr] border-t border-white/16 pt-3"
                data-hero-stat
              >
                <dt className="font-mono text-[8px] font-semibold uppercase tracking-[0.1em] text-white/48">
                  Standard
                </dt>
                <dd className="text-[12px] font-semibold">
                  Clarity before code
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <aside className="grid grid-rows-[auto_1fr_auto] border-l border-white/16 py-11 pl-7 max-lg:col-start-2 max-lg:mt-10 max-lg:border-l-0 max-lg:border-t max-lg:pl-0 max-lg:pt-8 max-md:mx-10 max-md:mt-12">
          <div className="flex justify-between">
            <span className={label}>Record</span>
            <span className={label}>2026</span>
          </div>
          <h2
            className="self-center font-display text-[clamp(118px,13vw,214px)] leading-[0.8] tracking-[-0.08em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.4)]"
            data-hero-counter
          >
            03
          </h2>
          <ol className="grid gap-0">
            {[
              ["01", "Why We Started", "#why-we-started"],
              ["02", "Clients Return", "#proof"],
              ["03", "Where We Work", "#team"],
            ].map(([no, text, href]) => (
              <li
                className="grid min-h-10 grid-cols-[24px_1fr] items-center gap-3 border-t border-white/16 text-[10px] font-semibold text-white/56"
                key={no}
              >
                <span className="font-mono text-[8px] text-ice" data-hero-scope>
                  {no}
                </span>
                <a href={href} data-hero-scope>
                  {text}
                </a>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}
