"use client";

import { getHeroIntroParallaxStyle } from "@/hooks/useHeroIntroParallax";
import {
	useIntroReveal,
	useStatCounter,
} from "@/hooks/usePortfolioAnimations";
import { label, sectionTitle, shell } from "@/lib/classes";

type Props = {
	parallaxDisabled?: boolean;
	sectionRef?: React.RefObject<HTMLElement | null> | null;
};

export function IntroSection({
	parallaxDisabled = false,
	sectionRef = null,
}: Props) {
	const enableParallax = Boolean(sectionRef) && !parallaxDisabled;
	useIntroReveal(sectionRef as React.RefObject<HTMLDivElement | null>);
	useStatCounter(sectionRef as React.RefObject<HTMLDivElement | null>);

	return (
		<section
			className={`border-y border-line bg-white pt-[clamp(104px,11vw,176px)] pb-[clamp(72px,7vw,112px)] ${
				enableParallax ? "relative z-10" : ""
			}`}
			id="services"
			ref={sectionRef}
		>
			<div
				className={`${shell} grid grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] gap-[clamp(48px,9vw,144px)] max-lg:grid-cols-1`}
				style={getHeroIntroParallaxStyle(
					enableParallax,
					"--work-intro-layer-y",
				)}
			>
				<div className="self-start">
					<p className={`${label} text-dl-blue`}>7 projects / 2023-2026</p>
					<h2 className={`${sectionTitle} mt-6 max-w-[760px]`}>
						<span className="block">Not a gallery.</span>
						<span className="block max-w-[620px] leading-[0.94]">
							A record of
						</span>
						<span className="block font-display text-[0.56em] font-normal leading-[1.2] tracking-[-0.04em] text-dl-blue">
							decisions.
						</span>
					</h2>
				</div>
				<div className="self-start pt-14 max-lg:pt-0 lg:mt-10">
					<p className="max-w-[420px] text-[14px] leading-[1.68] text-muted">
						Serious software is judged after handoff. These case files show the
						operating problem, the choice that changed the system, and the
						evidence we expect to hold after launch.
					</p>
					<div className="mt-10 grid max-w-[360px] grid-cols-2 gap-4">
						<div className="border-t border-ink pt-3">
							<strong
								className="font-case text-[42px] font-medium leading-none tracking-[-0.06em] text-dl-blue"
								data-counter="7"
							>
								7
							</strong>
							<span className="mt-2 block text-[11px] text-muted">
								systems under review
							</span>
						</div>
						<div className="border-t border-ink pt-3">
							<strong
								className="font-case text-[42px] font-medium leading-none tracking-[-0.06em] text-dl-blue"
								data-counter="3"
							>
								3
							</strong>
							<span className="mt-2 block text-[11px] text-muted">
								proof layers per file
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
