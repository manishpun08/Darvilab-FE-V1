"use client";

import type { RefObject } from "react";
import { SmartLink } from "@/components/shared/SmartLink";
import { getFooterParallaxStyle } from "@/hooks/useFooterRevealMotion";
import { label, primaryButton, secondaryButton, shell } from "@/lib/classes";

const routes = {
	contact: "/contact",
	portfolio: "/portfolio",
};

type AboutCtaSectionProps = {
	parallaxDisabled?: boolean;
	sectionRef?: RefObject<HTMLElement | null> | null;
};

export function AboutCtaSection({
	parallaxDisabled = false,
	sectionRef = null,
}: AboutCtaSectionProps) {
	const enableParallax = Boolean(sectionRef) && !parallaxDisabled;

	return (
		<section
			className={`bg-[#050b1f] text-white ${enableParallax ? "relative z-10" : ""}`}
			ref={sectionRef}
		>
			<div
				className={`${shell} grid grid-cols-[1.2fr_.8fr] items-end gap-[clamp(56px,10vw,160px)] py-[clamp(84px,9vw,132px)] max-lg:grid-cols-1`}
				style={getFooterParallaxStyle(enableParallax)}
			>
				<div>
					<p className={`${label} text-ice`}>Start with the constraint</p>
					<h2 className="mt-7 max-w-[840px] text-[clamp(58px,7.2vw,108px)] font-semibold leading-[0.88] tracking-[-0.066em]">
						Tell us what has to
						<span className="block font-display text-[0.52em] font-normal leading-[1.28] tracking-[-0.035em] text-ice">
							keep working.
						</span>
					</h2>
				</div>
				<div>
					<p className="mb-9 max-w-[430px] text-[15px] leading-[1.65] text-white/64">
						We will ask what you are trying to solve, what has failed before,
						and what is at risk if it fails again. Then we will tell you
						directly whether we are the right team for it - and what a
						responsible first step looks like.
					</p>
					<div className="grid gap-3">
						<SmartLink
							className={`${primaryButton} min-h-14 px-5`}
							href={`${routes.contact}#reach-out`}
						>
							<span>Start the conversation</span>
							<span aria-hidden="true">↗</span>
						</SmartLink>
						<SmartLink
							className={`${secondaryButton} min-h-14 border-white/35 bg-transparent px-5 text-white hover:bg-white hover:text-ink`}
							href={`${routes.portfolio}#all-cases`}
						>
							<span>Inspect our work</span>
							<span aria-hidden="true">→</span>
						</SmartLink>
					</div>
				</div>
			</div>
		</section>
	);
}
