"use client";

import { useRef } from "react";
import { shell } from "@/lib/classes";
import { useApproachProgress, useApproachStack } from "@/hooks/useFrameScroll";
import type { ServiceDetail } from "../interface/service.interface";
import { RevealSection } from "./RevealSection";
import { SectionLabel } from "./SectionLabel";

type Props = {
  service: ServiceDetail;
};

export function ApproachSection({ service }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const total = service.phases.length;

  useApproachStack(containerRef);
  useApproachProgress(containerRef, counterRef, barRef, total);

  return (
    <RevealSection
      className="scroll-mt-[104px] bg-paper-blue pb-[clamp(80px,8vw,116px)] pt-[clamp(80px,8vw,116px)]"
      id="how-we-work"
    >
      <div className={shell}>
        <div className="grid gap-7 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-end lg:gap-[clamp(48px,9vw,120px)]">
          <div>
            <SectionLabel>HOW WE WORK</SectionLabel>
            <h2 className="mt-8  text-[clamp(3.3rem,6vw,5rem)] font-case font-semibold leading-[0.9] tracking-[-0.085em] text-ink">
              Four phases. No shortcuts.
            </h2>
          </div>
          <div className="w-full lg:ml-auto lg:max-w-[59ch]">
            <p className="text-[16px] leading-[1.8] text-muted">
              Four phases. No phase is skipped. Each one produces something you
              can use, not just something that enables the next phase.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span
                ref={counterRef}
                className="whitespace-nowrap font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-dl-blue"
              >
                Phase 01 / {String(total).padStart(2, "0")}
              </span>
              <div className="h-px flex-1 overflow-hidden rounded-full bg-[rgba(7,16,43,0.12)]">
                <div
                  ref={barRef}
                  className="h-full w-full origin-left rounded-full bg-dl-blue"
                  style={{ transform: "scaleX(0)" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div ref={containerRef} className="mt-14 flex flex-col gap-4">
          {service.phases.map((phase, index) => {
            return (
              <article
                className="group grid gap-8 rounded-[20px] border border-[rgba(7,16,43,0.06)] bg-white p-8 shadow-[0_2px_20px_rgba(7,16,43,0.06)] transition-[border-color,box-shadow] duration-300 hover:border-dl-blue/40 hover:shadow-[0_28px_70px_rgba(7,16,43,0.14)] lg:grid-cols-[minmax(220px,0.28fr)_minmax(0,0.72fr)] lg:gap-14 lg:p-10"
                key={phase.name}
                style={{
                  position: "sticky",
                  top: `${index * 24}px`,
                  zIndex: index + 1,
                }}
              >
                <div className="grid content-start gap-5 pt-[20px]">
                  <span className="font-case text-[clamp(4.6rem,9vw,8rem)] font-semibold leading-[0.82] tracking-[-0.09em] text-[rgba(7,16,43,0.08)] transition-colors duration-300 group-hover:text-dl-blue/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="grid gap-2">
                    <h3 className="text-[24px] font-semibold tracking-[-0.045em] text-ink">
                      {phase.name}
                    </h3>
                    <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-dl-blue/70">
                      Phase {String(index + 1).padStart(2, "0")} of {String(total).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="grid w-full gap-7 lg:ml-auto lg:max-w-[59ch]">
                  {[
                    ["What happens", phase.whatHappens],
                    ["What you do", phase.whatYouDo],
                    ["What you leave with", phase.whatYouLeaveWith],
                  ].map(([term, copy]) => (
                    <div className="grid gap-3" key={term as string}>
                      <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-dl-blue">
                        {term as string}
                      </span>
                      <p className="w-full text-[15px] leading-[1.8] text-muted">
                        {copy as string}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}
