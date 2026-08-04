"use client";

import { useRef } from "react";
import type { CSSProperties, RefObject } from "react";
import { getHeroIntroParallaxStyle } from "@/hooks/useHeroIntroParallax";
import { usePeopleSectionReveal } from "@/hooks/usePortfolioAnimations";
import { label, shell } from "@/lib/classes";
import type { CoreTeamMember, Founder } from "../data/aboutData";
import { coreTeam, founders } from "../data/aboutData";
import Image from "next/image";

type FounderAvatarProps = {
  person: Founder;
  align?: "left" | "right";
};

function FounderAvatar({ person, align = "left" }: FounderAvatarProps) {
  const alignedRight = align === "right";

  return (
    <div
      className={`mt-7 flex items-center gap-5 ${
        alignedRight
          ? "justify-end text-right max-sm:justify-start max-sm:text-left"
          : ""
      }`}
      data-animate-founder-avatar
    >
      <div
        className={`group relative h-[clamp(56px,5.6vw,76px)] w-[clamp(56px,5.6vw,76px)] shrink-0 overflow-hidden rounded-full border border-white/12 bg-paper-blue ${
          alignedRight ? "order-2 max-sm:order-0" : ""
        }`}
      >
        {person.image ? (
          <Image
            src={person.image}
            alt={`${person.name} portrait`}
            width={76}
            height={76}
            className="h-full w-full object-cover object-center transition duration-500 ease-out group-hover:scale-[1.035] group-hover:brightness-[1.05]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-display text-[clamp(20px,2.2vw,30px)] leading-none tracking-[-0.04em] text-ink/28">
              {person.initials}
            </span>
          </div>
        )}
      </div>
      <div className="max-w-105">
        <h3 className="text-[clamp(20px,2vw,28px)] font-semibold leading-none tracking-[-0.04em] text-white max-md:text-[18px]">
          {person.name}
        </h3>
        <p className={`${label} mt-3 text-ice/78`}>{person.role}</p>
      </div>
    </div>
  );
}

type FounderStatementProps = {
  person: Founder;
  index: number;
};

function FounderStatement({ person, index }: FounderStatementProps) {
  const alignedRight = index === 1;

  return (
    <article
      className={`group w-full max-w-none ${alignedRight ? "mt-15 text-right max-sm:text-left" : "text-left"}`}
      data-animate-founder-statement
    >
      <blockquote className="block w-full max-w-none text-[clamp(30px,4vw,54px)] font-semibold leading-[1.05] tracking-[-0.052em] text-white transition duration-500 ease-out group-hover:text-white/92">
        {person.statement}
      </blockquote>
      <FounderAvatar align={alignedRight ? "right" : "left"} person={person} />
    </article>
  );
}

type SpecialistProfileProps = {
  person: CoreTeamMember;
  showDivider?: boolean;
  style?: CSSProperties;
};

function SpecialistProfile({
  person,
  showDivider = false,
  style,
}: SpecialistProfileProps) {
  return (
    <article
      className={`relative flex w-full flex-col items-center text-center ${
        showDivider
          ? "before:absolute before:left-0 before:top-1/2 before:hidden before:h-[clamp(44px,5vw,68px)] before:w-px before:-translate-y-1/2 before:bg-line md:before:block"
          : ""
      }`}
      data-animate-specialist
      style={style}
    >
      <div className="h-[clamp(150px,14vw,184px)] w-[clamp(150px,14vw,184px)] overflow-hidden rounded-full bg-paper-blue max-md:h-[clamp(130px,38vw,150px)] max-md:w-[clamp(130px,38vw,150px)]">
        {person.image ? (
          <Image
            src={person.image}
            alt={`${person.name} portrait`}
            className="h-full w-full object-cover object-center"
            width={184}
            height={184}
          />
        ) : null}
      </div>
      <h3 className="mt-6 text-[clamp(24px,2.2vw,32px)] font-semibold leading-[0.96] tracking-[-0.052em] text-ink max-md:mt-3">
        {person.name}
      </h3>
      <p className={`${label} mt-2 text-muted`}>{person.role}</p>
    </article>
  );
}

type PeopleSectionProps = {
  foundersIntroParallaxDisabled?: boolean;
  foundersIntroParallaxRef?: RefObject<HTMLElement | null> | null;
  foundersOutroParallaxDisabled?: boolean;
  foundersOutroParallaxRef?: RefObject<HTMLElement | null> | null;
  parallaxDisabled?: boolean;
  specialistsIntroParallaxRef?: RefObject<HTMLElement | null> | null;
  stickyLayerEnabled?: boolean;
};

export function PeopleSection({
  foundersIntroParallaxDisabled = false,
  foundersIntroParallaxRef = null,
  foundersOutroParallaxDisabled = false,
  foundersOutroParallaxRef = null,
  parallaxDisabled = false,
  specialistsIntroParallaxRef = null,
  stickyLayerEnabled = false,
}: PeopleSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  usePeopleSectionReveal(
    containerRef as unknown as React.RefObject<HTMLDivElement>,
  );
  const enableFoundersIntroParallax =
    Boolean(foundersIntroParallaxRef) &&
    !foundersIntroParallaxDisabled &&
    !parallaxDisabled;
  const enableFoundersOutroParallax =
    Boolean(foundersOutroParallaxRef) &&
    !foundersOutroParallaxDisabled &&
    !parallaxDisabled;
  const enableSpecialistsIntroParallax =
    Boolean(specialistsIntroParallaxRef) &&
    !foundersOutroParallaxDisabled &&
    !parallaxDisabled;

  const setFoundersRef = (node: HTMLElement | null) => {
    if (foundersIntroParallaxRef) {
      (
        foundersIntroParallaxRef as React.MutableRefObject<HTMLElement | null>
      ).current = node;
    }

    if (foundersOutroParallaxRef) {
      (
        foundersOutroParallaxRef as React.MutableRefObject<HTMLElement | null>
      ).current = node;
    }
  };

  return (
    <section ref={containerRef as unknown as React.RefObject<HTMLElement>}>
      <div
        className={`bg-ink pb-[clamp(76px,9vw,128px)] pt-[clamp(36px,5vw,72px)] text-white ${
          stickyLayerEnabled
            ? "sticky top-0 z-20 overflow-hidden overflow-x-clip"
            : "relative z-20"
        }`}
      >
        <div
          className={shell}
          ref={setFoundersRef}
          style={{
            transform:
              enableFoundersIntroParallax || enableFoundersOutroParallax
                ? "translate3d(0, calc(var(--work-intro-layer-y, 0px) + var(--work-hero-layer-y, 0px)), 0)"
                : undefined,
            willChange:
              enableFoundersIntroParallax || enableFoundersOutroParallax
                ? "transform"
                : undefined,
          }}
        >
          <div>
            <div
              className="flex items-center justify-center gap-3 text-center text-ice"
              data-animate-founders-label
            >
              <i className="h-px w-16 bg-ice/55" />
              <p className={label}>
                The people accountable for what we deliver
              </p>
              <i className="h-px w-16 bg-ice/55" />
            </div>

            <div className="mt-10">
              {founders.map((person, index) => (
                <FounderStatement
                  index={index}
                  key={person.role}
                  person={person}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-30 py-[clamp(72px,8vw,116px)] bg-paper">
        <div
          className={shell}
          ref={specialistsIntroParallaxRef as React.Ref<HTMLDivElement>}
          style={getHeroIntroParallaxStyle(
            enableSpecialistsIntroParallax,
            "--work-intro-layer-y",
          )}
        >
          <div
            className="flex items-center justify-center gap-3 text-center text-muted"
            data-animate-specialists-label
          >
            <i className="h-px w-16 bg-[#9fb0c5]" />
            <p className={label}>The specialists behind the systems</p>
            <i className="h-px w-16 bg-[#9fb0c5]" />
          </div>

          <div className="mt-[clamp(56px,7vw,92px)] grid grid-cols-4 items-start justify-items-center gap-2.5 max-md:grid-cols-1 max-md:gap-12 space-y-10">
            {coreTeam.map((person, index) => (
              <SpecialistProfile
                key={`${person.role}-${index}`}
                person={person}
                showDivider={index > 0 && index % 4 !== 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
