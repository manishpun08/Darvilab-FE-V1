"use client";

import { useRef } from "react";
import type { RefObject } from "react";
import { SmartLink } from "@/components/shared/SmartLink";
import { getFooterParallaxStyle } from "@/hooks/useFooterRevealMotion";
import {
	useCtaReveal,
	useMagneticButtons,
} from "@/hooks/usePortfolioAnimations";
import {
	label,
	primaryButton,
	secondaryButton,
	sectionTitle,
	shell,
} from "@/lib/classes";

const routes = {
	contact: "/contact",
};

type Props = {
	parallaxDisabled?: boolean;
	sectionRef?: RefObject<HTMLElement | null> | null;
};

export function CtaSection({
	parallaxDisabled = false,
	sectionRef = null,
}: Props) {
	const enableParallax = Boolean(sectionRef) && !parallaxDisabled;
	const animRef = useRef<HTMLDivElement>(null);
	useCtaReveal(animRef);
	useMagneticButtons(animRef);

	return (
		<section
			className={`overflow-hidden bg-paper text-ink ${enableParallax ? "relative z-10" : ""}`}
			ref={sectionRef}
		>
			<div
				className={`${shell} grid grid-cols-[92px_1.3fr_.7fr] gap-[54px] py-[144px] max-lg:grid-cols-[56px_1fr] max-lg:gap-9 max-sm:grid-cols-[36px_1fr] max-sm:gap-6 max-sm:py-24`}
				ref={animRef}
				style={getFooterParallaxStyle(enableParallax)}
			>
				<div className="flex flex-col items-center border-r border-line" data-cta-item>
					<span className="font-mono text-[8px] uppercase tracking-[0.12em]">
						End / 007
					</span>
					<i className="mt-5 h-20 w-px bg-dl-blue" />
				</div>
				<div data-cta-item>
					<span className={`${label} text-dl-blue`}>
						Start with the constraint
					</span>
					<h2 className={`${sectionTitle} mt-6 max-w-[760px]`}>
						Have a system that needs to hold?
					</h2>
				</div>
				<div className="self-end max-lg:col-start-2 max-lg:max-w-[520px]" data-cta-item>
					<p className="mb-[34px] text-[14px] leading-[1.7] text-[#565661]">
						Tell us what is breaking, what is unclear, or what needs to scale.
						We will tell you honestly whether we can help.
					</p>
					<div className="flex flex-col gap-3">
						<SmartLink
							className={primaryButton}
							data-magnetic
							href={`${routes.contact}#reach-out`}
						>
							<span>Start the conversation</span>
							<span aria-hidden="true">↗</span>
						</SmartLink>
						<a className={secondaryButton} data-magnetic href="#process">
							<span>See our process</span>
							<span aria-hidden="true">→</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
