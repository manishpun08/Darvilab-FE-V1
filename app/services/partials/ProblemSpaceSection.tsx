"use client";

import { type RefObject, useRef } from "react";
import { getHeroIntroParallaxStyle } from "@/hooks/useHeroIntroParallax";
import { useProblemSpaceReveal } from "@/hooks/useFrameScroll";
import { shell } from "@/lib/classes";
import type { ServiceDetail } from "../interface/service.interface";
import { RevealSection } from "./RevealSection";
import { SectionLabel } from "./SectionLabel";

type Props = {
  parallaxDisabled?: boolean;
  sectionRef?: RefObject<HTMLElement | null> | null;
  service: ServiceDetail;
};

export function ProblemSpaceSection({
  parallaxDisabled = false,
  sectionRef = null,
  service,
}: Props) {
  const enableParallax = Boolean(sectionRef) && !parallaxDisabled;
  const gridRef = useRef<HTMLDivElement>(null);
  useProblemSpaceReveal(gridRef);
  const widths = [
    "lg:w-[48%] lg:mr-auto",
    "lg:w-[48%] lg:ml-auto lg:translate-y-12",
    "lg:w-[52%] lg:mr-auto",
    "lg:w-[44%] lg:ml-auto",
  ];

  return (
    <RevealSection
      className={`scroll-mt-[104px] bg-paper pb-[clamp(84px,9vw,128px)] pt-[clamp(84px,9vw,128px)] ${
        enableParallax ? "relative z-10" : ""
      }`}
      id="problem-space"
      sectionRef={sectionRef}
    >
      <div
        className={shell}
        style={getHeroIntroParallaxStyle(
          enableParallax,
          "--work-intro-layer-y",
        )}
      >
        <SectionLabel>SITUATIONS WE KNOW WELL</SectionLabel>

        <div ref={gridRef} className="mt-12 grid gap-8">
          {service.situations.map((copy, index) => (
            <article
              className={`relative overflow-visible bg-white px-7 pb-8 pt-12 sm:px-9 ${widths[index]}`}
              key={copy}
            >
              <span className="absolute left-6 top-[-18px] font-case text-[80px] leading-none tracking-[-0.08em] text-dl-blue">
                &quot;
              </span>
              <p className="max-w-[26ch] text-[clamp(1.5rem,2.3vw,2.2rem)] leading-[1.44] tracking-[-0.05em] text-ink">
                {copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
