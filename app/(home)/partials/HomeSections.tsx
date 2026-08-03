"use client";

import { useEffect, useRef } from "react";
import type { ReactNode, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@/components/shared/Icons";
import { SmartLink } from "@/components/shared/SmartLink";
import { getHeroIntroParallaxStyle } from "@/hooks/useHeroIntroParallax";

gsap.registerPlugin(ScrollTrigger);
import {
  getRevealStyle,
  usePrefersReducedMotion,
  useReveal,
} from "@/hooks/useRevealMotion";
import {
  useHomeServicesSectionReveal,
  useSelectedWorkReveal,
  useTestimonialsReveal,
} from "@/hooks/usePortfolioAnimations";
import { label, shell } from "@/lib/classes";
import {
  fitColumns,
  homeServices,
  problemRecognitionItems,
  processSteps,
  selectedWork,
  testimonials,
} from "@/app/data/homeData";

interface Testimonial {
  no: string;
  project: string;
  quote: string;
  attribution: string;
  href: string;
}

const ROUTES = {
  portfolio: "/portfolio",
  process: "/process",
  services: "/services",
} as const;

function SectionRuleLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden flex items-center gap-3 ${className}`}>
      <i className="h-px w-16 bg-[#9fb0c5]" />
      <span className={label}>{children}</span>
    </div>
  );
}

function ProjectAccentMark() {
  return (
    <div
      className="inline-flex items-end gap-[3px] text-[#ff8a00]"
      aria-hidden="true"
    >
      <span className="h-5 w-[6px] skew-x-[-14deg] bg-current" />
      <span className="h-4 w-[6px] skew-x-[-14deg] bg-current" />
      <span className="h-3 w-[6px] skew-x-[-14deg] bg-current" />
      <span className="h-2 w-[6px] skew-x-[-14deg] bg-current" />
    </div>
  );
}

export function SectionDivider() {
  const dividerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = dividerRef.current;
    if (!el || prefersReducedMotion) return;

    gsap.set(el, { scaleX: 0, opacity: 0, transformOrigin: "center" });
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top bottom-=20",
      onEnter: () =>
        gsap.to(el, { scaleX: 1, opacity: 1, duration: 1.3, ease: "power2.inOut" }),
    });

    return () => {
      st.kill();
    };
  }, [prefersReducedMotion]);

  return (
    <div className={`${shell} relative isolate`}>
      <div
        ref={dividerRef}
        aria-hidden="true"
        className="h-px w-full bg-line"
      />
    </div>
  );
}

function assignRef(
  ref:
    | RefObject<HTMLElement | null>
    | ((node: HTMLElement | null) => void)
    | null,
  node: HTMLElement | null,
) {
  if (!ref) return;
  if (typeof ref === "function") {
    ref(node);
    return;
  }
  ref.current = node;
}

function getCombinedParallaxStyle({
  footerEnabled = false,
  introEnabled = false,
  introVariableName = "--work-intro-layer-y",
}: {
  footerEnabled?: boolean;
  introEnabled?: boolean;
  introVariableName?: string;
}) {
  if (!footerEnabled && !introEnabled) return undefined;

  const yParts: string[] = [];
  if (footerEnabled) yParts.push("var(--home-footer-parallax-y, 0px)");
  if (introEnabled) yParts.push(`var(${introVariableName}, 0px)`);

  return {
    transform: `translate3d(0, calc(${yParts.join(" + ")}), 0)`,
    willChange: "transform",
  };
}

function ProjectVisual({ index }: { index: number }) {
  const variants = [
    {
      back: "from-[#29334f] via-[#4f6ba8] to-[#c9d8ff]",
      front: "from-[#04060b] via-[#111827] to-[#0b1021]",
      backPosition: "right-[20%] top-0 h-[70%] w-[48%]",
      frontPosition: "right-0 top-[22%] h-[66%] w-[54%]",
    },
    {
      back: "from-[#29334f] via-[#4f6ba8] to-[#c9d8ff]",
      front: "from-[#04060b] via-[#111827] to-[#0b1021]",
      backPosition: "left-[20%] top-0 h-[70%] w-[48%]",
      frontPosition: "left-0 top-[22%] h-[66%] w-[54%]",
    },
    {
      back: "from-[#0f274f] via-[#6f8cff] to-[#89d8ff]",
      front: "from-[#05070f] via-[#1c1230] to-[#0b0f1b]",
      backPosition: "right-[6%] top-0 h-[70%] w-[44%]",
      frontPosition: "left-[4%] top-[20%] h-[66%] w-[54%]",
    },
  ][index % 3];

  return (
    <div className="relative h-[430px] w-full max-w-[470px] max-md:h-[340px] max-md:max-w-[340px]">
      <div
        className={`absolute ${variants.backPosition} overflow-hidden rounded-[2px] bg-gradient-to-br ${variants.back} shadow-[0_22px_54px_rgba(7,16,43,0.16)]`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:22px_22px] opacity-35" />
      </div>
      <div
        className={`absolute ${variants.frontPosition} overflow-hidden rounded-[2px] bg-gradient-to-br ${variants.front} shadow-[0_28px_64px_rgba(7,16,43,0.24)]`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,123,94,0.92),transparent_22%),radial-gradient(circle_at_72%_28%,rgba(75,115,255,0.66),transparent_28%),radial-gradient(circle_at_44%_80%,rgba(255,255,255,0.18),transparent_24%)]" />
      </div>
    </div>
  );
}

function getTestimonialAvatar(_item: Testimonial) {
  const avatarSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
      <defs>
        <clipPath id="crop">
          <circle cx="32" cy="32" r="32"/>
        </clipPath>
        <linearGradient id="bg" x1="10" y1="8" x2="54" y2="56" gradientUnits="userSpaceOnUse">
          <stop stop-color="#F5F7FA"/>
          <stop offset="1" stop-color="#DEE4EC"/>
        </linearGradient>
      </defs>
      <g clip-path="url(#crop)">
        <rect width="64" height="64" fill="url(#bg)"/>
        <ellipse cx="19" cy="16" rx="14" ry="10" fill="#EDF1F6"/>
        <ellipse cx="46" cy="18" rx="12" ry="9" fill="#E3E8F0"/>
        <ellipse cx="32" cy="50" rx="24" ry="17" fill="#F5F7FA"/>
        <ellipse cx="32" cy="29" rx="12.5" ry="14.5" fill="#E5D1C3"/>
        <path d="M19 25c2.4-7.2 8.3-12 14.2-12 6 0 11.4 4.5 13.8 11.2-3.1-.7-5.9-2.8-8.2-5.8-4.2 4.2-10.5 6.8-19.8 6.6Z" fill="#6F5B53"/>
        <path d="M16 61c3.2-8.4 9.2-13.8 16-13.8 6.8 0 12.8 5.4 16 13.8H16Z" fill="#F7F9FC"/>
      </g>
    </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(avatarSvg)}`;
}

function getTestimonialRole(attribution: string) {
  return attribution.split(",")[0]?.trim() || attribution;
}

function TestimonialMarqueeItems({ items }: { items: Testimonial[] }) {
  return items.map((item, index) => (
    <article
      className="grid min-h-[276px] w-[min(76vw,348px)] shrink-0 whitespace-normal grid-rows-[auto_1fr_auto] gap-6 border-r border-line px-8 py-9 sm:w-[344px] sm:px-9"
      key={`${item.no}-${item.project}-${index}`}
    >
      <span
        className="font-case text-[68px] leading-none tracking-[-0.08em] text-[#d8dde8]"
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <blockquote className="max-w-[30ch] text-[15px] italic leading-[1.7] text-ink">
        {item.quote}
      </blockquote>
      <div className="flex items-center gap-3.5">
        {/* biome-ignore lint/performance/noImgElement: data URI avatar, Image component doesn't support inline data URIs */}
        <img
          alt=""
          aria-hidden="true"
          className="h-12 w-12 shrink-0 rounded-full object-cover"
          src={getTestimonialAvatar(item)}
        />
        <div className="min-w-0">
          <div className="text-[18px] font-semibold leading-none tracking-[-0.035em] text-ink">
            {item.project}
          </div>
          <p className="mt-1.5 max-w-[22ch] text-[13px] leading-[1.5] text-muted">
            {getTestimonialRole(item.attribution)}
          </p>
        </div>
      </div>
    </article>
  ));
}

import {
  useFrameScroll,
  useArticlesReveal,
  useProcessFrames,
  useProcessCardsReveal,
  useProcessHeroReveal,
  useClientFitReveal,
} from "@/hooks/useFrameScroll";

export function ProblemRecognitionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const articlesRef = useRef<HTMLDivElement>(null);

  useFrameScroll(sectionRef, canvasRef);
  useArticlesReveal(articlesRef);

  return (
    <section ref={sectionRef} className="relative" id="problem-space">
      <div className="sticky top-0 z-0 h-dvh w-full overflow-hidden bg-[#0a0a1a]">
        <canvas ref={canvasRef} className="block h-full w-full" />
        <div className="pointer-events-none absolute inset-0 bg-[#050b1f]/50 " />
      </div>

      <div className="relative z-10 -mt-[30vh]">
        <div className="pb-[clamp(40px,5vw,64px)] pt-0">
          <div
            className={`${shell} grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-x-[clamp(44px,8vw,120px)] gap-y-[clamp(36px,6vw,72px)] max-lg:grid-cols-1`}
          >
            <div
              ref={headingRef}
              className="max-w-[36rem] [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]"
            >
              <SectionRuleLabel className="text-white">
                The real system starts after launch
              </SectionRuleLabel>
              <h2 className="mt-6 max-w-[12.6ch] text-[clamp(44px,5.6vw,82px)] font-semibold leading-[0.9] tracking-[-0.07em] text-white max-lg:text-[clamp(36px,9vw,48px)]">
                <span className="block max-md:whitespace-normal md:whitespace-nowrap">
                  The build gets done.
                </span>
                <span className="mt-2 block font-display text-[0.48em] font-normal leading-[1.24] tracking-[-0.04em] text-white">
                  The real system starts after.
                </span>
              </h2>
            </div>

            <div
              ref={articlesRef}
              className="col-span-2 grid grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] gap-x-[clamp(44px,8vw,120px)] gap-y-[clamp(36px,6vw,72px)] max-lg:col-span-1 max-lg:grid-cols-1"
            >
              <div className="max-lg:hidden" />

              <article className="lg:-mt-[29px] max-w-[42rem] border-t border-white/20 pt-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
                <span className="font-case text-[clamp(44px,4.8vw,62px)] font-semibold leading-[0.9] tracking-[-0.06em] text-white/60 max-lg:text-[clamp(28px,9vw,36px)]">
                  01
                </span>
                <blockquote className="mt-4 max-w-[24ch] text-[clamp(24px,2.9vw,34px)] font-semibold leading-[1.08] tracking-[-0.05em] text-white max-lg:max-w-none max-lg:text-[clamp(18px,5vw,22px)] max-lg:leading-[1.18]">
                  &ldquo;{problemRecognitionItems[0].quote}&rdquo;
                </blockquote>
                <p className="mt-4 max-w-[40ch] font-body text-[15px] italic leading-[1.45] text-white/80">
                  {problemRecognitionItems[0].response}
                </p>
              </article>

              <article className="lg:-mt-[15px] max-w-[46rem] border-t border-white/20 pt-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
                <span className="font-case text-[clamp(44px,4.8vw,62px)] font-semibold leading-[0.9] tracking-[-0.06em] text-white/60 max-lg:text-[clamp(28px,9vw,36px)]">
                  02
                </span>
                <blockquote className="mt-4 max-w-[24ch] text-[clamp(24px,2.9vw,34px)] font-semibold leading-[1.08] tracking-[-0.05em] text-white max-lg:max-w-none max-lg:text-[clamp(18px,5vw,22px)] max-lg:leading-[1.18]">
                  &ldquo;{problemRecognitionItems[1].quote}&rdquo;
                </blockquote>
                <p className="mt-4 max-w-[42ch] font-body text-[15px] italic leading-[1.45] text-white/80">
                  {problemRecognitionItems[1].response}
                </p>
              </article>

              <div className="max-lg:hidden" />
              <article className="lg:-mt-[15px] lg:col-start-2 max-w-[42rem] border-t border-white/20 pt-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
                <span className="font-case text-[clamp(44px,4.8vw,62px)] font-semibold leading-[0.9] tracking-[-0.06em] text-white/60 max-lg:text-[clamp(28px,9vw,36px)]">
                  03
                </span>
                <blockquote className="mt-4 max-w-[22ch] text-[clamp(24px,2.9vw,34px)] font-semibold leading-[1.06] tracking-[-0.05em] text-white max-lg:max-w-none max-lg:text-[clamp(18px,5vw,22px)] max-lg:leading-[1.15]">
                  We&apos;ve already paid for one rebuild. We&apos;re not making
                  another.
                </blockquote>
                <p className="mt-4 max-w-[42ch] font-body text-[15px] italic leading-[1.45] text-white/80">
                  {problemRecognitionItems[2].response}
                </p>
              </article>

              <div className="col-span-2 mt-16 max-w-[48rem] max-md:mt-10 max-lg:col-span-1">
                <p className="text-[clamp(20px,2.5vw,28px)] font-semibold leading-[1.2] tracking-[-0.03em] text-white">
                  If that sounds familiar, the fix usually isn&apos;t more
                  engineers. It&apos;s a different starting point.
                </p>
                <SmartLink
                  className="mt-8 inline-flex min-h-12 items-center justify-between gap-6 bg-dl-blue px-4 text-[12px] font-semibold tracking-[0.04em] text-white transition hover:bg-[#1800b8]"
                  href={ROUTES.process}
                >
                  <span>See How We Work</span>
                  <span aria-hidden="true">↗</span>
                </SmartLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SelectedWorkSection({
  parallaxDisabled = false,
  sectionRef = null,
  stickyLayerEnabled = false,
}: {
  parallaxDisabled?: boolean;
  sectionRef?: RefObject<HTMLElement | null> | null;
  stickyLayerEnabled?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  useSelectedWorkReveal(containerRef);
  const enableParallax = Boolean(sectionRef) && !parallaxDisabled;

  return (
    <section
      className={`bg-paper-blue pb-[clamp(72px,8vw,112px)] pt-[clamp(32px,5vw,64px)] ${stickyLayerEnabled ? "sticky z-10" : ""}`}
      id="selected-work"
      ref={sectionRef}
      style={
        stickyLayerEnabled
          ? { top: "var(--work-hero-sticky-top, 0px)" }
          : undefined
      }
    >
      <div
        className={shell}
        ref={containerRef}
        style={getHeroIntroParallaxStyle(enableParallax, "--work-hero-layer-y")}
      >
        <div
          className="mx-auto grid w-full max-w-[1320px] justify-items-center text-center"
          data-animate-header
        >
          <div className="grid justify-items-center">
            <SectionRuleLabel>Selected Work</SectionRuleLabel>
            <h2 className="mt-8 max-w-[18ch] text-[clamp(42px,5vw,76px)] font-semibold leading-[0.92] tracking-[-0.066em] text-ink">
              We measure success by what happens after launch.
            </h2>
          </div>
        </div>

        <div className="mt-[clamp(56px,7vw,88px)]">
          <div className="grid gap-[clamp(84px,9vw,132px)]">
            {selectedWork.map((item, index) => {
              const reverse = index % 2 === 1;
              const isClearLedger = item.no === "03";

              return (
                <article
                  className={`grid items-center ${isClearLedger ? "gap-[clamp(10px,1.4vw,20px)] lg:grid-cols-[minmax(0,0.64fr)_minmax(0,1.36fr)]" : "gap-[clamp(16px,2vw,30px)] lg:grid-cols-[minmax(0,1.18fr)_minmax(0,0.82fr)]"}`}
                  key={item.project}
                  data-animate-work-item
                  data-reverse={reverse ? "true" : "false"}
                >
                  <div
                    className={`${reverse ? "lg:order-1" : "lg:order-2"} flex w-full ${reverse ? "justify-start" : "justify-end"}`}
                    data-animate-visual
                  >
                    <ProjectVisual index={index} />
                  </div>

                  <div
                    className={`${reverse ? "lg:order-2" : "lg:order-1"} grid ${isClearLedger ? "w-[calc(100%-74px)] justify-self-end max-w-[calc(100%-74px)] max-lg:w-full max-lg:max-w-full max-lg:justify-self-start" : "w-full max-w-[calc(44rem+30px)]"} gap-5`}
                    data-animate-copy
                  >
                    <ProjectAccentMark />
                    <div className="grid gap-3">
                      <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-dl-blue">
                        {item.industry}
                      </span>
                      <h3
                        className={`text-[clamp(34px,4.4vw,60px)] font-semibold leading-[1.02] tracking-[-0.06em] text-ink ${isClearLedger ? "max-w-none" : "max-w-[17ch]"}`}
                      >
                        {item.project}
                      </h3>
                    </div>
                    <p
                      className={`text-[15px] leading-[1.72] text-muted ${isClearLedger ? "max-w-none" : "max-w-[54ch]"}`}
                    >
                      {item.problem}
                    </p>
                    <p
                      className={`text-[15px] leading-[1.72] text-muted ${isClearLedger ? "max-w-none" : "max-w-[54ch]"}`}
                    >
                      {item.outcome}
                    </p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                      {item.metrics.map(([value, text]) => (
                        <span
                          className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-dl-blue"
                          key={`${item.project}-${value}-${text}`}
                        >
                          {value} <span className="text-ink/66">{text}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div
          className="mt-10 flex justify-center"
          data-animate-cta
        >
          <SmartLink
            className="inline-flex min-h-11 items-center gap-3 border-b border-ink pb-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-ink transition hover:border-dl-blue hover:text-dl-blue"
            href={`${ROUTES.portfolio}#all-cases`}
          >
            View all Projects &rarr;
          </SmartLink>
        </div>
      </div>
    </section>
  );
}


export function HomeProcessSection() {
  const secRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const headingAreaRef = useRef<HTMLDivElement>(null);

  useProcessFrames(secRef, canvasRef);
  useProcessCardsReveal(cardsRef);
  useProcessHeroReveal(headingAreaRef);

  return (
    <section ref={secRef} className="relative" id="how-we-work">
      <div className="sticky top-0 z-0 h-screen w-full overflow-hidden bg-[#050b1f]">
        <canvas ref={canvasRef} className="block h-full w-full" />
        <div className="pointer-events-none absolute inset-0 bg-black/65" />
      </div>

      <div className="relative z-10">
        <div className="pb-[clamp(64px,8vw,104px)] pt-[clamp(20px,2vw,32px)] -mt-[30vh]">
          <div className={`${shell}`}>
            <div
              ref={headingAreaRef}
              className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-end gap-[clamp(44px,8vw,116px)] max-lg:grid-cols-1"
            >
              <div>
                <SectionRuleLabel className="text-white">
                  Our Process
                </SectionRuleLabel>
                <h2 className="mt-8 max-w-[10ch] text-[clamp(42px,5vw,76px)] font-semibold leading-[0.92] tracking-[-0.066em] text-white">
                  What working with us actually looks like.
                </h2>
              </div>
              <p className="mb-[10px] max-w-[560px] text-[16px] leading-[1.72] text-white/72">
                Every engagement follows four phases. No surprises. No
                ambiguity. You know what happens before it does.
              </p>
            </div>

            <div
              ref={cardsRef}
              className="mt-16 grid gap-0 border-t border-white/12 lg:grid-cols-4"
            >
              {processSteps.map((item, index) => (
                <article
                  className={`grid gap-5 px-0 py-8 lg:px-6 ${index > 0 ? "lg:border-l lg:border-white/12" : ""} ${index > 0 ? "border-t border-white/12 lg:border-t-0" : ""}`}
                  key={item.no}
                >
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-ice">
                    Step {item.no}
                  </span>
                  <h3 className="max-w-[14ch] text-[28px] font-semibold leading-[1] tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>
                  <p className="max-w-[34ch] text-[14px] leading-[1.74] text-white/68">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 flex justify-end">
              <SmartLink
                className="inline-flex min-h-11 items-center gap-3 border-b border-white/30 pb-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition hover:border-white"
                href={ROUTES.process}
              >
                See the full engagement model &rarr;
              </SmartLink>
            </div>
          </div>
        </div>

        <div className="h-[90vh]" />
      </div>
    </section>
  );
}

export function HomeServicesSection({
  parallaxDisabled = false,
  sectionRef = null,
  variableName = "--work-intro-layer-y",
}: {
  parallaxDisabled?: boolean;
  sectionRef?: RefObject<HTMLElement | null> | null;
  variableName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  useHomeServicesSectionReveal(containerRef);
  const enableParallax = Boolean(sectionRef) && !parallaxDisabled;
  const setSectionRef = (node: HTMLElement | null) => {
    assignRef(sectionRef, node);
  };

  return (
    <section
      className={`bg-paper pb-[clamp(41px,calc(10vw-55px),81px)] pt-[clamp(56px,7vw,96px)] ${enableParallax ? "relative z-30" : ""}`}
      id="services"
      ref={setSectionRef}
    >
      <div
        className={shell}
        ref={containerRef}
        style={getHeroIntroParallaxStyle(enableParallax, variableName)}
      >
        <div
          className="grid grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] items-center gap-[clamp(40px,8vw,120px)] max-lg:grid-cols-1"
        >
          <div className="lg:-translate-y-16" data-animate-header>
            <SectionRuleLabel data-animate-label>What We Build</SectionRuleLabel>
            <h2 className="mt-8 max-w-[12ch] text-[clamp(42px,5.1vw,76px)] font-semibold leading-[0.92] tracking-[-0.066em] text-ink" style={{ perspective: "800px" }}>
              <span className="block" data-animate-line>Four capabilities.</span>
              <span className="mt-2 block font-display text-[0.48em] font-normal leading-[1.28] tracking-[-0.035em] text-dl-blue" data-animate-line>
                One standard: systems that hold up after launch.
              </span>
            </h2>
          </div>

          <div className="grid gap-6 border-t border-line pt-6">
            <div className="grid gap-5 md:grid-cols-2" data-animate-grid>
              {homeServices.map((item, index) => {
                const Tag = item.href ? SmartLink : "article";
                return (
                  <Tag
                    className={`group grid gap-5 border-b border-line pb-8 ${index >= 2 ? "md:pt-6" : ""}`}
                    href={item.href}
                    key={item.title}
                    data-animate-card
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-dl-blue" data-animate-icon>
                        <Icon name={item.key} />
                      </div>
                      <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-muted" data-animate-badge>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="max-w-[14ch] text-[30px] font-semibold leading-[1] tracking-[-0.05em] text-ink transition group-hover:text-dl-blue">
                      {item.title}
                    </h3>
                    <p className="max-w-[34ch] text-[15px] leading-[1.72] text-muted">
                      {item.body}
                    </p>
                  </Tag>
                );
              })}
            </div>

            <div className="flex justify-end pt-2" data-animate-cta>
              <button
                className="inline-flex min-h-11 cursor-pointer items-center gap-3 border-b border-ink pb-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-ink transition hover:border-dl-blue hover:text-dl-blue"
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("open-services-overlay"))
                }
                type="button"
              >
                View all Services &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ClientFitSection({
  parallaxDisabled = false,
  sectionRef = null,
  stickyLayerEnabled = false,
  stickyTopVariableName = "--work-hero-sticky-top",
  variableName = "--work-hero-layer-y",
}: {
  parallaxDisabled?: boolean;
  sectionRef?: RefObject<HTMLElement | null> | null;
  stickyLayerEnabled?: boolean;
  stickyTopVariableName?: string;
  variableName?: string;
}) {
  const { ref, visible, reducedMotion } = useReveal({ threshold: 0.12 });
  const enableParallax = Boolean(sectionRef) && !parallaxDisabled;
  const containerRef = useRef<HTMLDivElement>(null);
  useClientFitReveal(containerRef);

  return (
    <section
      className={`bg-paper pb-[clamp(56px,7vw,96px)] pt-[clamp(33px,calc(10vw-55px),81px)] ${stickyLayerEnabled ? "sticky z-10" : ""}`}
      id="client-fit"
      ref={sectionRef}
      style={
        stickyLayerEnabled
          ? { top: `var(${stickyTopVariableName}, 0px)` }
          : undefined
      }
    >
      <div
        className={shell}
        ref={ref}
        style={getHeroIntroParallaxStyle(enableParallax, variableName)}
      >
        <div
          ref={containerRef}
          className="grid justify-items-center gap-[clamp(44px,7vw,72px)]"
          style={getRevealStyle({ visible, reducedMotion, y: 18 })}
        >
          <div className="mx-auto grid w-full max-w-[48rem] justify-items-center text-center">
            <div data-fit-label>
              <SectionRuleLabel>Client Fit</SectionRuleLabel>
            </div>
            <h2
              className="mt-[44px] max-w-[18ch] text-[clamp(38px,4.25vw,72px)] font-semibold leading-[0.92] tracking-[-0.066em] text-ink"
              data-fit-heading
            >
              <span className="block max-md:whitespace-normal md:whitespace-nowrap">
                DarviLabs isn&apos;t for everyone.
              </span>
              <span className="mt-2 block max-md:whitespace-normal md:whitespace-nowrap font-display text-[0.48em] font-normal leading-[1.28] tracking-[-0.035em] text-dl-blue">
                That&apos;s intentional.
              </span>
            </h2>
            <p
              className="relative mx-auto mt-5 max-w-[52ch] text-center text-[16px] leading-[1.72] text-ink md:right-[47px]"
              data-fit-paragraph
            >
              We&apos;ve found that the best projects start with honest clarity
              about fit - for both sides.
            </p>
          </div>

          <div
            className="grid w-full max-w-[72rem] grid-cols-1 gap-x-[clamp(28px,4vw,48px)] gap-y-12 md:grid-cols-2"
            style={getRevealStyle({ visible, reducedMotion, delay: 80, y: 18 })}
          >
            <div className="mx-auto w-full max-w-[33rem]">
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-dl-blue">
                We&apos;re a good fit
              </span>
              <div className="mt-6 grid gap-0 border-t border-line">
                {fitColumns.goodFit.map((item) => (
                  <div
                    className="grid grid-cols-[auto_1fr] items-start gap-4 border-b border-line py-5"
                    key={item}
                    data-fit-good
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.2rem] inline-flex h-6 w-6 items-center justify-center text-[18px] leading-none text-dl-blue"
                    >
                      {String.fromCharCode(10003)}
                    </span>
                    <p className="text-[15px] leading-[1.72] text-ink">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto w-full max-w-[33rem]">
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-muted">
                Probably not a fit
              </span>
              <div className="mt-6 grid gap-0 border-t border-line">
                {fitColumns.notFit.map((item) => (
                  <div
                    className="grid grid-cols-[auto_1fr] items-center gap-4 border-b border-line py-5"
                    key={item}
                    data-fit-not
                  >
                    <span
                      aria-hidden="true"
                      className="inline-flex h-6 w-6 items-center justify-center text-[18px] leading-none text-[#d92d20]"
                    >
                      {String.fromCharCode(10005)}
                    </span>
                    <p className="text-[15px] leading-[1.72] text-ink">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection({
  introParallaxDisabled = false,
  introParallaxRef = null,
  introVariableName = "--work-intro-layer-y",
  parallaxDisabled = false,
  sectionRef = null,
}: {
  introParallaxDisabled?: boolean;
  introParallaxRef?: RefObject<HTMLElement | null> | null;
  introVariableName?: string;
  parallaxDisabled?: boolean;
  sectionRef?: RefObject<HTMLElement | null> | null;
}) {
  const { ref } = useReveal({ threshold: 0.12 });
  const prefersReducedMotion = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  useTestimonialsReveal(containerRef);
  const testimonialLoop = [...testimonials, ...testimonials, ...testimonials];
  const enableFooterParallax = Boolean(sectionRef) && !parallaxDisabled;
  const enableIntroParallax =
    Boolean(introParallaxRef) && !introParallaxDisabled;
  const setSectionRef = (node: HTMLElement | null) => {
    (ref as RefObject<HTMLElement | null>).current = node;
    assignRef(introParallaxRef, node);
    assignRef(sectionRef, node);
  };

  return (
    <section
      className={`bg-paper-blue pb-[clamp(96px,10vw,136px)] pt-[clamp(48px,6vw,88px)] text-ink ${enableFooterParallax || enableIntroParallax ? "relative z-10" : ""}`}
      id="testimonials"
      ref={setSectionRef}
    >
      <div
        style={getCombinedParallaxStyle({
          footerEnabled: enableFooterParallax,
          introEnabled: enableIntroParallax,
          introVariableName,
        })}
      >
        <div className={shell} ref={containerRef}>
          <div className="grid grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] items-end gap-[clamp(28px,6vw,96px)] max-lg:grid-cols-1">
            <div className="max-w-[52.8rem]">
              <SectionRuleLabel data-animate-t-label>Testimonials</SectionRuleLabel>
              <h2
                className="mt-7 max-w-none text-[clamp(34px,4vw,54px)] font-semibold leading-[0.96] tracking-[-0.055em] text-ink"
                data-animate-t-heading
              >
                <span className="block">What holds up</span>
                <span className="block">after launch gets remembered.</span>
              </h2>
            </div>
            <p
              className="max-w-[28rem] justify-self-end text-[14px] leading-[1.72] text-muted max-lg:justify-self-start"
              data-animate-t-paragraph
            >
              A lighter, continuous read rather than a heavy card stack. Each
              note stays compact, with the motion carrying the rhythm.
            </p>
          </div>
        </div>

        <div
          className="mt-14 overflow-hidden border-y border-line"
          data-animate-t-marquee
        >
          {prefersReducedMotion ? (
            <div className="grid gap-0 md:grid-cols-2 xl:grid-cols-3">
              <TestimonialMarqueeItems items={testimonials} />
            </div>
          ) : (
            <div className="testimonial-marquee flex min-w-max whitespace-nowrap">
              <TestimonialMarqueeItems items={testimonialLoop} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
