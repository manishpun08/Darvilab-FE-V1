"use client";

import type { RefObject } from "react";
import { useRef } from "react";
import {
  getLockedHeroBackgroundImage,
  LockedHeroBackgroundLayers,
} from "@/components/shared/lockedHeroBackground";
import { getHeroIntroParallaxStyle } from "@/hooks/useHeroIntroParallax";
import { useServiceHeroReveal } from "@/hooks/usePortfolioAnimations";
import { label, shell } from "@/lib/classes";
import type { ServiceDetail } from "../interface/service.interface";
import { RevealSection } from "./RevealSection";
import { SectionLabel } from "./SectionLabel";

function splitServiceName(name: string): [string, string] {
  const lastSpace = name.lastIndexOf(" ");
  if (lastSpace === -1) return [name, ""];
  return [name.slice(0, lastSpace), name.slice(lastSpace + 1)];
}

type Props = {
  horizonShift?: number;
  parallaxDisabled?: boolean;
  sectionRef?: RefObject<HTMLElement | null> | null;
  service: ServiceDetail;
  stickyLayerEnabled?: boolean;
};

export function ServiceHero({
  horizonShift = 0,
  parallaxDisabled = false,
  sectionRef = null,
  service,
  stickyLayerEnabled = false,
}: Props) {
  const enableParallax = Boolean(sectionRef) && !parallaxDisabled;
  const [titlePart1, titlePart2] = splitServiceName(service.name);
  const containerRef = useRef<HTMLDivElement>(null);
  useServiceHeroReveal(containerRef);

  return (
    <RevealSection
      className={`scroll-mt-[104px] h-screen overflow-hidden overflow-x-clip bg-[#050b1f] pt-[72px] text-white ${
        stickyLayerEnabled ? "sticky top-0 z-0" : "relative"
      }`}
      id="top"
      sectionRef={sectionRef}
      threshold={0.05}
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

      <div className={`${shell} relative z-10 h-full`} ref={containerRef}>
        <div className="relative grid h-full grid-rows-[auto_1fr] gap-4">
          <div className="grid gap-3 pt-[clamp(24px,3vw,36px)] lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start">
            <div className="flex items-center gap-3 text-white/46" data-animate-tagline>
              <i className="h-px w-16 bg-[rgba(183,217,255,0.28)]" />
              <span className={`${label} text-white/46`}>
                {service.name} / service detail
              </span>
            </div>
            <div className="justify-self-start text-left lg:justify-self-end lg:text-right" data-animate-tagline>
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-white/42">
                {service.heroTagline}
              </span>
            </div>
          </div>

          <div className="grid items-end gap-7 lg:grid-cols-[minmax(0,0.7fr)_minmax(520px,0.72fr)] lg:gap-7">
            <div className="relative self-end pb-[clamp(48px,6vw,84px)]">
              <div className="mb-[clamp(12px,2vw,20px)] flex items-center gap-3 text-white/38" data-animate-number>
                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em]">
                  01
                </span>
                <i className="h-px w-20 bg-[rgba(183,217,255,0.22)]" />
              </div>
              <h1
                className="max-w-[7.2ch] translate-y-0 text-[clamp(3.3rem,12vw,8rem)] font-case font-semibold leading-[0.84] tracking-[-0.105em] text-white"
                style={{ perspective: "1200px" }}
              >
                <span className="block">{titlePart1}</span>
                {titlePart2 ? (
                  <span className="block">{titlePart2}</span>
                ) : null}
              </h1>
            </div>

            <aside className="self-end pb-[clamp(48px,6vw,84px)] shrink-0 lg:ml-auto">
              <p
                className="max-w-[47ch] text-left text-[clamp(1rem,1.4vw,1.12rem)] leading-[1.58] tracking-[-0.02em] text-white/76"
                data-animate-paragraph
              >
                {service.subline}
              </p>
            </aside>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
