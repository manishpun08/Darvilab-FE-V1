"use client";

import type { RefObject } from "react";
import { getRevealStyle, useReveal } from "@/hooks/useRevealMotion";
import { label, shell } from "@/lib/classes";
import { foundingParagraphs } from "../data/aboutData";

type WhyExistSectionProps = {
	parallaxDisabled?: boolean;
	sectionRef?: RefObject<HTMLElement | null> | null;
	stickyLayerEnabled?: boolean;
};

export function WhyExistSection({
	parallaxDisabled = false,
	sectionRef = null,
	stickyLayerEnabled = false,
}: WhyExistSectionProps) {
	const { ref, visible, reducedMotion } = useReveal({ threshold: 0.24 });
	const [observedProblem, operationalResponse, closingLogic] =
		foundingParagraphs;
	const enableParallax = Boolean(sectionRef) && !parallaxDisabled;

	return (
		<section
			className={`border-t border-line bg-paper pb-[clamp(56px,6vw,88px)] pt-[clamp(84px,9vw,132px)] ${
				stickyLayerEnabled
					? "sticky top-0 z-10 overflow-hidden overflow-x-clip"
					: enableParallax
						? "relative z-10"
						: ""
			}`}
			id="why-we-started"
			ref={sectionRef}
		>
			<div
				className={`${shell} flex flex-col items-center text-center`}
				ref={ref}
				style={
					enableParallax
						? {
								transform:
									"translate3d(0, calc(var(--work-intro-layer-y, 0px) + var(--work-hero-layer-y, 0px)), 0)",
								willChange: "transform",
							}
						: undefined
				}
			>
				<div style={getRevealStyle({ visible, reducedMotion, y: 26 })}>
					<div className="flex items-center justify-center gap-3 text-muted">
						<i className="h-px w-12 bg-[#c8d2e2]" />
						<p className={`${label}`}>Why we started</p>
						<i className="h-px w-12 bg-[#c8d2e2]" />
					</div>
					<blockquote className="mt-8 max-w-[960px] text-[clamp(42px,5.1vw,76px)] font-semibold leading-[0.92] tracking-[-0.068em] text-ink">
						<span className="block">Most IT vendors are optimised</span>
						<span className="block">for closing the project.</span>
						<span className="mt-3 block font-display text-[0.52em] font-normal leading-[1.16] tracking-[-0.035em] text-dl-blue">
							We were built for what comes after.
						</span>
					</blockquote>
				</div>

				<div
					className="mt-[clamp(32px,4vw,56px)] w-full max-w-[900px] border-y border-line bg-paper-blue/60 px-[clamp(20px,3vw,32px)] py-[clamp(28px,3vw,36px)]"
					style={getRevealStyle({
						visible,
						reducedMotion,
						delay: 100,
						y: 18,
					})}
				>
					<p className="mx-auto max-w-[660px] text-[clamp(18px,1.7vw,22px)] leading-[1.6] tracking-[-0.025em] text-ink">
						{observedProblem}
					</p>

					<div className="mt-8 grid gap-0 border-t border-line pt-0 md:grid-cols-2">
						<p
							className="px-0 pt-5 text-left text-[15px] leading-[1.72] text-muted md:pr-8"
							style={getRevealStyle({
								visible,
								reducedMotion,
								delay: 180,
								y: 18,
							})}
						>
							{operationalResponse}
						</p>
						<p
							className="border-t border-line px-0 pt-5 text-left text-[15px] leading-[1.72] text-muted md:border-l md:border-t-0 md:pl-8"
							style={getRevealStyle({
								visible,
								reducedMotion,
								delay: 260,
								y: 18,
							})}
						>
							{closingLogic}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
