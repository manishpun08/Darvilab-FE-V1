"use client";

import { useRef } from "react";
import { clientLogos } from "@/app/about/data/aboutData";
import { usePrefersReducedMotion } from "@/hooks/useRevealMotion";
import { useClientsReveal } from "@/hooks/useFrameScroll";
import { label, shell } from "@/lib/classes";

const logoToneLight = "#c8ccd4";
const logoToneDark = "#ffffff";

function ClientLogoMark({ mark, tone }: { mark: string; tone: string }) {
	const commonStroke = {
		fill: "none" as const,
		stroke: tone,
		strokeLinecap: "round" as const,
		strokeLinejoin: "round" as const,
		strokeWidth: 2.6,
	};

	switch (mark) {
		case "orbit":
			return (
				<svg aria-hidden="true" className="h-10 w-[68px]" viewBox="0 0 68 40">
					<circle cx="34" cy="20" r="14.5" {...commonStroke} />
					<path d="M14 20c3-8.8 10.8-14.5 20-14.5" {...commonStroke} />
					<circle cx="17.5" cy="10.5" r="2.5" fill={tone} />
				</svg>
			);
		case "bolt":
			return (
				<svg aria-hidden="true" className="h-10 w-[68px]" viewBox="0 0 68 40">
					<circle cx="34" cy="20" r="15" {...commonStroke} />
					<path
						d="M37 8L24 22h8l-1 10 13-14h-8l1-10z"
						fill={tone}
						stroke="none"
					/>
				</svg>
			);
		case "atom":
			return (
				<svg aria-hidden="true" className="h-10 w-[68px]" viewBox="0 0 68 40">
					<ellipse cx="34" cy="20" rx="15" ry="6.8" {...commonStroke} />
					<ellipse
						cx="34"
						cy="20"
						rx="15"
						ry="6.8"
						transform="rotate(60 34 20)"
						{...commonStroke}
					/>
					<ellipse
						cx="34"
						cy="20"
						rx="15"
						ry="6.8"
						transform="rotate(-60 34 20)"
						{...commonStroke}
					/>
					<circle cx="34" cy="20" r="2.8" fill={tone} />
				</svg>
			);
		case "stack":
			return (
				<svg aria-hidden="true" className="h-10 w-[68px]" viewBox="0 0 68 40">
					<rect x="21" y="10" width="26" height="18" rx="4" {...commonStroke} />
					<path d="M27 10v-4h14v4M27 28v4h14v-4" {...commonStroke} />
				</svg>
			);
		case "north":
			return (
				<svg aria-hidden="true" className="h-10 w-[68px]" viewBox="0 0 68 40">
					<circle cx="34" cy="20" r="15" {...commonStroke} />
					<path d="M28 28V12l12 16V12" {...commonStroke} />
				</svg>
			);
		case "grid":
			return (
				<svg aria-hidden="true" className="h-10 w-[68px]" viewBox="0 0 68 40">
					<path d="M34 6l13 7.5v13L34 34l-13-7.5v-13L34 6z" {...commonStroke} />
					<path d="M34 6v28M21 13.5h26M21 26.5h26" {...commonStroke} />
				</svg>
			);
		case "ribbon":
			return (
				<svg aria-hidden="true" className="h-10 w-[68px]" viewBox="0 0 68 40">
					<path d="M17 26c5.5-10 11.5-10 17 0s11.5 10 17 0" {...commonStroke} />
					<path d="M17 14c5.5 10 11.5 10 17 0s11.5-10 17 0" {...commonStroke} />
				</svg>
			);
		case "drop":
			return (
				<svg aria-hidden="true" className="h-10 w-[68px]" viewBox="0 0 68 40">
					<path
						d="M34 7c-7 7.6-12 13.3-12 18a12 12 0 1024 0c0-4.7-5-10.4-12-18z"
						{...commonStroke}
					/>
					<path d="M34 12c-4.4 4.7-7.4 8.8-7.4 12.2" {...commonStroke} />
				</svg>
			);
		default:
			return null;
	}
}

function ClientTickerItems({
	items,
	tone,
	indexOffset = 0,
}: {
	items: Array<{ name: string; mark: string }>;
	tone: string;
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
			<ClientLogoMark mark={item.mark} tone={tone} />
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
	const tone = isDark ? logoToneDark : logoToneLight;

	return (
		<section
			ref={revealRef}
			className={`relative ${isDark ? "bg-[#050b1f]" : "bg-paper"} pb-0 ${tightToPrevious ? "pt-0" : "pt-[clamp(96px,10vw,136px)]"}`}
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
						<ClientTickerItems items={clientLogos} tone={tone} />
					</div>
				) : (
					<div className="overflow-hidden">
						<div className="about-marquee-track flex min-w-max items-center whitespace-nowrap">
							<div className="about-marquee flex min-w-max items-center">
								<ClientTickerItems items={clientLogos} tone={tone} indexOffset={0} />
								<ClientTickerItems items={clientLogos} tone={tone} indexOffset={1} />
								<ClientTickerItems items={clientLogos} tone={tone} indexOffset={2} />
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
