"use client";

import {
	getLockedHeroBackgroundImage,
	LockedHeroBackgroundLayers,
} from "@/components/shared/lockedHeroBackground";
import { getHeroIntroParallaxStyle } from "@/hooks/useHeroIntroParallax";
import { useContactHeroReveal } from "@/hooks/usePortfolioAnimations";
import { label, shell } from "@/lib/classes";

type ContactHeroProps = {
	horizonShift: number;
	parallaxDisabled?: boolean;
	sectionRef?: React.RefObject<HTMLElement | null> | null;
	stickyLayerEnabled?: boolean;
};

export function ContactHero({
	horizonShift,
	parallaxDisabled = false,
	sectionRef = null,
	stickyLayerEnabled = false,
}: ContactHeroProps) {
	const enableParallax = Boolean(sectionRef) && !parallaxDisabled;
	useContactHeroReveal(sectionRef as React.RefObject<HTMLDivElement | null>);

	return (
		<section
			className={`min-h-screen overflow-hidden overflow-x-clip bg-[#050b1f] text-white ${
				stickyLayerEnabled ? "sticky top-0 z-0 max-md:relative" : "relative"
			}`}
			id="hero"
			ref={sectionRef}
		>
			<div
				className="pointer-events-none absolute inset-0"
				style={getHeroIntroParallaxStyle(enableParallax, "--work-hero-layer-y")}
			>
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: getLockedHeroBackgroundImage(horizonShift),
					}}
				/>
				<LockedHeroBackgroundLayers />
			</div>
			<div
				className={`${shell} relative z-10 flex min-h-screen flex-col justify-center pt-[72px]`}
			>
				<div className="grid grid-cols-[.95fr_1.05fr] items-end gap-[clamp(48px,8vw,120px)] pt-[clamp(64px,8vh,104px)] max-lg:grid-cols-1">
					<div style={{ perspective: "1000px" }}>
						<div className="flex items-center gap-3 text-white" data-animate-tagline>
							<i className="h-px w-16 bg-[rgba(183,217,255,0.55)]" />
							<span className={label}>After You Reach Out</span>
						</div>
						<h1 className="mt-8 max-w-[720px] text-[clamp(46px,5.6vw,84px)] font-semibold leading-[0.9] tracking-[-0.066em] text-white">
							<span className="block" data-animate-line>No void after submit.</span>
							<span className="mt-2 block font-display text-[0.48em] font-normal leading-[1.28] tracking-[-0.035em] text-ice" data-animate-line>
								Just a clear sequence.
							</span>
						</h1>
					</div>
					<p className="mb-[14px] max-w-[560px] text-[16px] leading-[1.68] text-white/74" data-animate-paragraph>
						The hesitation is rarely the form itself. It is the uncertainty
						after it. We make the next step legible before you send the first
						note.
					</p>
				</div>

				<div className="mt-16 grid border-t border-white/12 pb-[clamp(44px,6vh,72px)] md:grid-cols-3">
					<article className="grid gap-5 px-0 py-10 md:pr-8" data-animate-step>
						<span className="font-display inline-block text-[clamp(54px,6vw,80px)] leading-[0.82] tracking-[-0.07em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.18)]" data-animate-step-number>
							01
						</span>
						<div>
							<h3 className="text-[20px] font-semibold tracking-[-0.03em] text-white">
								We read your message
							</h3>
							<p className="mt-4 max-w-[320px] text-[15px] leading-[1.68] text-white/68">
								Within one business day. A senior team member reviews what you
								have sent - not a bot, not a VA.
							</p>
						</div>
					</article>

					<article className="grid gap-5 border-t border-white/12 px-0 py-10 md:border-l md:border-t-0 md:border-white/12 md:pl-8 md:pr-8" data-animate-step>
						<span className="font-display inline-block text-[clamp(54px,6vw,80px)] leading-[0.82] tracking-[-0.07em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.18)]" data-animate-step-number>
							02
						</span>
						<div>
							<h3 className="text-[20px] font-semibold tracking-[-0.03em] text-white">
								We respond with direction
							</h3>
							<p className="mt-4 max-w-[320px] text-[15px] leading-[1.68] text-white/68">
								We reply with one of three things: whether we can help, what we
								would need to know, or an honest recommendation, even if it
								points elsewhere.
							</p>
						</div>
					</article>

					<article className="grid gap-5 border-t border-white/12 px-0 py-10 md:border-l md:border-t-0 md:border-white/12 md:pl-8" data-animate-step>
						<span className="font-display inline-block text-[clamp(54px,6vw,80px)] leading-[0.82] tracking-[-0.07em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.18)]" data-animate-step-number>
							03
						</span>
						<div>
							<h3 className="text-[20px] font-semibold tracking-[-0.03em] text-white">
								We talk only if it makes sense
							</h3>
							<p className="mt-4 max-w-[320px] text-[15px] leading-[1.68] text-white/68">
								If there is a clear fit, we will propose a short call. No pitch
								deck. No sales pressure.
							</p>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
}
