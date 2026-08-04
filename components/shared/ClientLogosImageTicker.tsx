"use client";

import { useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/useRevealMotion";
import { useClientsReveal } from "@/hooks/useFrameScroll";
import { shell } from "@/lib/classes";

const logoImages: Array<{ name: string; src: string }> = [
  { name: "Bullion", src: "/logos/Bullion Logo.svg" },
  { name: "Himalayan Brief", src: "/logos/Himalayan Brief.svg" },
  { name: "HumanEdge", src: "/logos/HumanEdge Logo.svg" },
  { name: "LiferRishi", src: "/logos/LiferRishi Logo.svg" },
];

function ClientLogoImage({ item }: { item: { name: string; src: string } }) {
  return (
    <div
      aria-label={item.name}
      className="flex h-14 shrink-0 items-center justify-center px-6 transition-transform duration-300 ease-out hover:scale-125 hover:z-10 cursor-default"
      role="img"
      title={item.name}
    >
      {/* biome-ignore lint/performance/noImgElement: static brand SVG assets */}
      <img
        alt={item.name}
        className="h-10 w-auto object-contain brightness-0 invert"
        draggable={false}
        loading="lazy"
        src={item.src}
      />
    </div>
  );
}

function ClientLogoTickerItems({
  items,
  indexOffset = 0,
}: {
  items: Array<{ name: string; src: string }>;
  indexOffset?: number;
}) {
  return items.map((item, i) => (
    <ClientLogoImage
      item={item}
      key={`${item.name}-${indexOffset}-${i}`}
    />
  ));
}

type ClientLogosImageTickerProps = {
  className?: string;
};

export function ClientLogosImageTicker({
  className = "",
}: ClientLogosImageTickerProps) {
  const reducedMotion = usePrefersReducedMotion();
  const revealRef = useRef<HTMLDivElement>(null);
  useClientsReveal(revealRef);

  return (
    <section
      ref={revealRef}
      className={`relative bg-[#050b1f] pb-0 pt-0 ${className}`}
      id="principles"
    >
      <div className="border-y border-white/20 py-6 sm:py-8">
        {reducedMotion ? (
          <div
            className={`${shell} flex flex-wrap items-center justify-center gap-x-12 gap-y-6`}
          >
            <ClientLogoTickerItems items={logoImages} />
          </div>
        ) : (
          <div className="overflow-hidden">
            <div className="about-marquee-track flex min-w-max items-center whitespace-nowrap">
              <div className="about-marquee flex min-w-max items-center">
                <ClientLogoTickerItems
                  items={logoImages}
                  indexOffset={0}
                />
                <ClientLogoTickerItems
                  items={logoImages}
                  indexOffset={1}
                />
                <ClientLogoTickerItems
                  items={logoImages}
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
