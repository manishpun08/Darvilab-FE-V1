"use client";

import { useRef, useState } from "react";
import {
  SiKubernetes,
  SiTailwindcss,
  SiPython,
  SiTensorflow,
  SiPostgresql,
  SiNodedotjs,
  SiNestjs,
  SiNextdotjs,
  SiReact,
  SiFlutter,
  SiPytorch,
  SiFastapi,
  SiDocker,
  SiDjango,
  SiExpress,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { clientLogos } from "@/app/about/data/aboutData";
import { usePrefersReducedMotion } from "@/hooks/useRevealMotion";
import { useClientsReveal } from "@/hooks/useFrameScroll";
import { label, shell } from "@/lib/classes";
import type { IconType } from "react-icons";

const brandColors: Record<string, string> = {
  "si-kubernetes": "#326CE5",
  "si-tailwindcss": "#06B6D4",
  "si-python": "#3776AB",
  "si-tensorflow": "#FF6F00",
  "si-postgresql": "#4169E1",
  "si-nodedotjs": "#339933",
  "si-nestjs": "#E0234E",
  "si-nextdotjs": "#ffffff",
  "si-react": "#61DAFB",
  "si-flutter": "#02569B",
  "si-pytorch": "#EE4C2C",
  "si-fastapi": "#009688",
  "si-docker": "#2496ED",
  "si-reactnative": "#61DAFB",
  "si-django": "#092E20",
  "si-express": "#ffffff",
  "si-amazonaws": "#FF9900",
};

const iconMap: Record<string, IconType> = {
  "si-kubernetes": SiKubernetes,
  "si-tailwindcss": SiTailwindcss,
  "si-python": SiPython,
  "si-tensorflow": SiTensorflow,
  "si-postgresql": SiPostgresql,
  "si-nodedotjs": SiNodedotjs,
  "si-nestjs": SiNestjs,
  "si-nextdotjs": SiNextdotjs,
  "si-react": SiReact,
  "si-flutter": SiFlutter,
  "si-pytorch": SiPytorch,
  "si-fastapi": SiFastapi,
  "si-docker": SiDocker,
  "si-reactnative": SiReact,
  "si-django": SiDjango,
  "si-express": SiExpress,
  "si-amazonaws": FaAws,
};

function ClientLogoMark({
  mark,
  baseColor,
}: {
  mark: string;
  baseColor: string;
}) {
  const Icon = iconMap[mark];
  const [color, setColor] = useState(baseColor);
  if (!Icon) return null;
  return (
    <Icon
      aria-hidden="true"
      className="h-10 w-auto"
      style={{ color, transition: "color 300ms ease" }}
      size={40}
      onMouseEnter={() => setColor(brandColors[mark] ?? baseColor)}
      onMouseLeave={() => setColor(baseColor)}
    />
  );
}

function ClientTickerItems({
  items,
  baseColor,
  indexOffset = 0,
}: {
  items: Array<{ name: string; mark: string }>;
  baseColor: string;
  indexOffset?: number;
}) {
  return items.map((item, i) => (
    <div
      aria-label={item.name}
      className="flex h-14 shrink-0 items-center justify-center px-6 transition-transform duration-300 ease-out hover:scale-125 hover:z-10 cursor-default"
      key={`${item.name}-${indexOffset}-${i}`}
      role="img"
      title={item.name}
    >
      <ClientLogoMark mark={item.mark} baseColor={baseColor} />
    </div>
  ));
}

type OurClientsSectionProps = {
  hideLabel?: boolean;
  tightToPrevious?: boolean;
  variant?: "light" | "dark";
};

export function OurClientsSection({
  hideLabel = false,
  tightToPrevious = false,
  variant = "light",
}: OurClientsSectionProps) {
  const reducedMotion = usePrefersReducedMotion();
  const revealRef = useRef<HTMLDivElement>(null);
  useClientsReveal(revealRef);

  const isDark = variant === "dark";
  const baseColor = isDark ? "#ffffff" : "#c8ccd4";

	return (
		<section
			ref={revealRef}
			className={`relative ${isDark ? "bg-[#050b1f]" : "bg-paper"} pb-0 ${tightToPrevious ? "pt-0 pb-[clamp(96px,10vw,136px)]" : "py-[clamp(96px,10vw,136px)] max-md:pt-[clamp(84px,9vw,132px)]"}`}
			id="principles"
		>
			{hideLabel ? null : (
				<div className={shell}>
					<p className={`${label} ${isDark ? "text-white/70" : "text-muted"}`}>
						Organisations we&apos;ve worked with
					</p>
				</div>
			)}

      <div
        className={`${hideLabel ? "mt-0" : "mt-7"} border-y ${isDark ? "border-white/20" : "border-soft-line"} py-6 sm:py-8`}
      >
        {reducedMotion ? (
          <div
            className={`${shell} flex flex-wrap items-center justify-center gap-x-12 gap-y-6`}
          >
            <ClientTickerItems items={clientLogos} baseColor={baseColor} />
          </div>
        ) : (
          <div className="overflow-hidden">
            <div className="about-marquee-track flex min-w-max items-center whitespace-nowrap">
              <div className="about-marquee flex min-w-max items-center">
                <ClientTickerItems
                  items={clientLogos}
                  baseColor={baseColor}
                  indexOffset={0}
                />
                <ClientTickerItems
                  items={clientLogos}
                  baseColor={baseColor}
                  indexOffset={1}
                />
                <ClientTickerItems
                  items={clientLogos}
                  baseColor={baseColor}
                  indexOffset={2}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
