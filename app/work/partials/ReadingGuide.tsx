"use client";

import { useRef } from "react";
import { getHeroIntroParallaxStyle } from "@/hooks/useHeroIntroParallax";
import { useReadingGuideReveal } from "@/hooks/usePortfolioAnimations";
import { label, shell } from "@/lib/classes";
import { readingModel } from "../data/workCases";

type Props = {
	parallaxDisabled?: boolean;
	sectionRef?: React.RefObject<HTMLElement | null> | null;
};

export function ReadingGuide({
	parallaxDisabled = false,
	sectionRef = null,
}: Props) {
	const enableParallax = Boolean(sectionRef) && !parallaxDisabled;
	const animRef = useRef<HTMLDivElement>(null);
	useReadingGuideReveal(animRef);

	return (
		<section
			className={`bg-[#050b1f] py-[120px] text-white max-sm:py-20 ${
				enableParallax ? "relative z-10" : ""
			}`}
			id="process"
			ref={sectionRef}
		>
			<div
				className={shell}
				ref={animRef}
				style={getHeroIntroParallaxStyle(
					enableParallax,
					"--work-intro-layer-y",
				)}
			>
				<div className="border-t border-white/18 pt-4">
					<span className={`${label} text-ice`}>How to read our work</span>
				</div>
				<div className="mt-8 grid grid-cols-[1.18fr_.82fr] gap-14 max-lg:grid-cols-1 max-lg:gap-10">
					<h2 className="max-w-[640px] text-[clamp(4rem,7vw,6.3rem)] font-semibold leading-[0.9] tracking-[-0.075em] text-white">
						<span className="block" data-reveal-line>We do not</span>
						<span className="block" data-reveal-line>present work as</span>
						<span className="block" data-reveal-line>screenshots.</span>
					</h2>
					<div className="self-center lg:pt-20">
						<div className="max-w-[360px] border-t border-white/18 pt-4 max-md:border-t-0 max-md:pt-0">
							<p className="text-[14px] leading-[1.75] text-white/62">
								Every case is documented through four questions: what was
								happening, what was breaking, what decision changed the system,
								and what improved after launch.
							</p>
						</div>
					</div>
				</div>

				<div className="mt-16 border-t border-white/18 max-sm:mt-12">
					<div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1">
						{readingModel.map(([no, title, copy]) => (
							<article
								className="min-h-[194px] border-r border-white/12 px-4 pb-2 pt-5 last:border-r-0 max-md:border-b max-md:border-r-0 max-md:last:border-b-0 max-sm:min-h-0 max-sm:px-4 max-sm:py-6"
								key={no}
							>
								<span className="font-display text-[11px] font-normal tracking-[-0.02em] text-ice/95">
									{no}
								</span>
								<h3 className="mt-20 text-[24px] font-medium tracking-[-0.05em] text-white max-sm:mt-4">
									{title}
								</h3>
								<p className="mt-4 max-w-[220px] pr-6 text-[12px] leading-[1.55] text-white/46 max-sm:pr-0">
									{copy}
								</p>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
