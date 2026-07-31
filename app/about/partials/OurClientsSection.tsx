"use client";

import type { ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/useRevealMotion";
import { label, shell } from "@/lib/classes";
import type { ClientLogo } from "../data/aboutData";
import { clientLogos } from "../data/aboutData";

const logoTone = "#c8ccd4";

type ClientLogoMarkProps = {
	mark: string;
};

function ClientLogoMark({ mark }: ClientLogoMarkProps) {
	const commonStroke: Record<string, string> = {
		fill: "none",
		stroke: logoTone,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "2.6",
	};

	switch (mark) {
		case "orbit":
			return (
				<svg aria-hidden="true" className="h-10 w-[68px]" viewBox="0 0 68 40">
					<circle cx="34" cy="20" r="14.5" {...commonStroke} />
					<path d="M14 20c3-8.8 10.8-14.5 20-14.5" {...commonStroke} />
					<circle cx="17.5" cy="10.5" r="2.5" fill={logoTone} />
				</svg>
			);
		case "bolt":
			return (
				<svg aria-hidden="true" className="h-10 w-[68px]" viewBox="0 0 68 40">
					<circle cx="34" cy="20" r="15" {...commonStroke} />
					<path
						d="M37 8L24 22h8l-1 10 13-14h-8l1-10z"
						fill={logoTone}
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
					<circle cx="34" cy="20" r="2.8" fill={logoTone} />
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

type ClientTickerItemsProps = {
	items: ClientLogo[];
};

function ClientTickerItems({ items }: ClientTickerItemsProps): ReactNode {
	return items.map((item) => (
		<div
			aria-label={item.name}
			className="flex h-14 shrink-0 items-center justify-center"
			key={item.name}
			role="img"
			title={item.name}
		>
			<ClientLogoMark mark={item.mark} />
		</div>
	));
}

type OurClientsSectionProps = {
	hideLabel?: boolean;
	tightToPrevious?: boolean;
};

export function OurClientsSection({
	hideLabel = false,
	tightToPrevious = false,
}: OurClientsSectionProps) {
	const reducedMotion = usePrefersReducedMotion();

	return (
		<section
			className={`bg-paper pb-[clamp(66px,calc(10vw-30px),106px)] ${tightToPrevious ? "pt-0" : "pt-[clamp(96px,10vw,136px)]"}`}
			id="principles"
		>
			{hideLabel ? null : (
				<div className={shell}>
					<p className={`${label} text-muted`}>
						Organisations we&apos;ve worked with
					</p>
				</div>
			)}

			<div
				className={`${hideLabel ? "mt-0" : "mt-7"} border-y border-soft-line py-10 sm:py-12`}
			>
				{reducedMotion ? (
					<div
						className={`${shell} flex flex-wrap items-center justify-center gap-x-12 gap-y-6`}
					>
						<ClientTickerItems items={clientLogos} />
					</div>
				) : (
					<div className="overflow-hidden">
						<div className="about-marquee flex min-w-max items-center gap-14 whitespace-nowrap px-10 sm:px-14">
							<ClientTickerItems items={clientLogos} />
							<ClientTickerItems items={clientLogos} />
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
