"use client";

import type { RefObject } from "react";
import { useRef } from "react";

import { getFooterParallaxStyle } from "@/hooks/useFooterRevealMotion";
import { useWhereWeWorkReveal } from "@/hooks/usePortfolioAnimations";
import { shell } from "@/lib/classes";

type WhereWeWorkSectionProps = {
	parallaxDisabled?: boolean;
	sectionRef?: RefObject<HTMLElement | null> | null;
};

export function WhereWeWorkSection({
	parallaxDisabled = false,
	sectionRef = null,
}: WhereWeWorkSectionProps) {
	const containerRef = useRef<HTMLElement>(null);
	useWhereWeWorkReveal(containerRef as unknown as React.RefObject<HTMLDivElement>);

	const enableParallax = Boolean(sectionRef) && !parallaxDisabled;
	const setSectionRef = (node: HTMLElement | null) => {
		if (sectionRef) {
			(sectionRef as React.MutableRefObject<HTMLElement | null>).current = node;
		}
	};

	return (
		<section
			className={`overflow-hidden bg-paper py-[clamp(84px,9vw,132px)] ${
				enableParallax ? "relative z-10" : ""
			}`}
			id="team"
			ref={setSectionRef}
		>
			<div
				className={`${shell} relative`}
				ref={containerRef as unknown as React.RefObject<HTMLDivElement>}
				style={getFooterParallaxStyle(enableParallax)}
			>
				<div className="relative z-20 max-w-[430px] pt-3">
					<h2 className="text-[clamp(44px,5.2vw,78px)] font-semibold leading-[0.92] tracking-[-0.065em] text-ink">
						Where We Work.
					</h2>
					<div className="mt-8 flex flex-col items-start gap-3 text-[15px] leading-[1.5] text-muted">
						<div className="inline-flex items-center gap-3" data-animate-location-item>
							<svg
								aria-hidden="true"
								className="h-[18px] w-[18px] shrink-0 text-muted"
								viewBox="0 0 20 20"
								fill="none"
							>
								<path
									d="M10 18c3.2-4.15 4.8-7.18 4.8-9.1A4.8 4.8 0 105.2 8.9C5.2 10.82 6.8 13.85 10 18z"
									stroke="currentColor"
									strokeWidth="1.4"
									strokeLinejoin="round"
								/>
								<circle
									cx="10"
									cy="8.8"
									r="1.8"
									stroke="currentColor"
									strokeWidth="1.4"
								/>
							</svg>
							<span>Kathmandu, Nepal</span>
						</div>
						<div className="inline-flex items-center gap-3" data-animate-location-item>
							<svg
								aria-hidden="true"
								className="h-[18px] w-[18px] shrink-0 text-muted"
								viewBox="0 0 20 20"
								fill="none"
							>
								<circle
									cx="10"
									cy="10"
									r="6.8"
									stroke="currentColor"
									strokeWidth="1.4"
								/>
								<path
									d="M10 6.3v4.2l2.9 1.8"
									stroke="currentColor"
									strokeLinecap="round"
									strokeWidth="1.4"
								/>
							</svg>
							<span>9:00AM - 6:00 PM, KTM Nepal Time</span>
						</div>
					</div>
				</div>

				<div
					className="relative mt-8 h-[320px] w-full overflow-hidden max-lg:min-h-[300px] lg:pointer-events-none lg:absolute lg:inset-y-0 lg:mt-0 lg:[right:clamp(-360px,-20vw,-200px)] lg:[width:clamp(980px,86vw,1480px)]"
					data-animate-map
				>
						<div
							className="relative h-full w-full overflow-hidden"
							style={{
								maskImage:
									"linear-gradient(to right, transparent 0%, black 35%, black 100%)",
								WebkitMaskImage:
									"linear-gradient(to right, transparent 0%, black 35%, black 100%)",
							}}
						>
						<div
							className="relative h-full w-full overflow-hidden"
							style={{
								maskImage:
									"linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
								WebkitMaskImage:
									"linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
							}}
						>
							<div className="absolute inset-0 flex items-center justify-end">
								<iframe
									title="Darvilab Office Location"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.6968553979814!2d85.33826047546808!3d27.72664457617154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46426a2b9871a727%3A0xacd5005e3a2a198c!2sDarvilab%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1785754475341!5m2!1sen!2snp"
									className="h-full w-full object-cover opacity-[0.94] pointer-events-auto"
									style={{ border: 0, overflow: "hidden" }}
									allowFullScreen
									loading="lazy"
									referrerPolicy="strict-origin-when-cross-origin"
								/>
							</div>
							<div className="pointer-events-none absolute top-0 left-0 z-30 h-[100px] w-[250px] bg-gradient-to-r from-white via-white/95 to-transparent" />
						</div>
						<div className="pointer-events-none absolute inset-x-[-12%] top-[-16%] z-20 h-[34%] bg-gradient-to-b from-white via-white/96 to-transparent blur-[34px]" />
						<div className="pointer-events-none absolute inset-x-[-12%] bottom-[-16%] z-20 h-[34%] bg-gradient-to-t from-white via-white/96 to-transparent blur-[34px]" />
						<div className="pointer-events-none absolute inset-y-[-8%] left-[-2%] z-20 w-[28%] bg-gradient-to-r from-white via-white/92 to-transparent blur-[14px]" />
					</div>
				</div>
			</div>
		</section>
	);
}

