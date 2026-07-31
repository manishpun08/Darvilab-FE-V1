"use client";

import { InquiryFormCard } from "@/components/shared/InquiryFormCard";
import { getHeroIntroParallaxStyle } from "@/hooks/useHeroIntroParallax";
import { getRevealStyle, useReveal } from "@/hooks/useRevealMotion";
import { shell } from "@/lib/classes";

type ContactFormSectionProps = {
	parallaxDisabled?: boolean;
	sectionRef?: React.RefObject<HTMLElement | null> | null;
};

export function ContactFormSection({
	parallaxDisabled = false,
	sectionRef = null,
}: ContactFormSectionProps) {
	const { ref, visible, reducedMotion } = useReveal({ threshold: 0.15 });
	const enableParallax = Boolean(sectionRef) && !parallaxDisabled;

	return (
		<section
			className={`mb-0 bg-paper pb-0 pt-[clamp(84px,9vw,132px)] ${
				enableParallax ? "relative z-10" : ""
			}`}
			id="reach-out"
			ref={sectionRef}
		>
			<div
				className={`${shell} grid grid-cols-[minmax(280px,0.86fr)_minmax(0,1.14fr)] gap-[clamp(40px,8vw,120px)] max-lg:grid-cols-1`}
				ref={ref}
				style={getHeroIntroParallaxStyle(
					enableParallax,
					"--work-intro-layer-y",
				)}
			>
				<aside
					className="flex flex-col justify-start pt-1"
					style={getRevealStyle({ visible, reducedMotion, delay: 90, y: 18 })}
				>
					<span className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-muted">
						PREFER DIRECT?
					</span>
					<p className="mt-6 max-w-[420px] text-[16px] leading-[1.68] text-ink">
						No form required. Send us a short note - even a rough description
						works.
					</p>

					<a
						className="mt-10 inline-flex w-fit border-b border-ink pb-2 text-[clamp(30px,3.4vw,42px)] font-semibold leading-[1] tracking-[-0.05em] text-ink transition hover:border-dl-blue hover:text-dl-blue"
						href="mailto:hello@darvilabs.com"
					>
						hello@darvilabs.com
					</a>

					<dl className="mt-12 grid gap-0 border-t border-line">
						<div className="grid gap-2 border-b border-line py-5">
							<dt className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-muted">
								Response Time
							</dt>
							<dd className="m-0 max-w-[340px] text-[14px] leading-[1.65] text-ink">
								We usually reply within one business day.
							</dd>
						</div>
						<div className="grid gap-2 border-b border-line py-5">
							<dt className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-muted">
								Location
							</dt>
							<dd className="m-0 text-[14px] leading-[1.65] text-ink">
								Dhumbarahi, Kathmandu
							</dd>
						</div>
						<div className="grid gap-2 py-5">
							<dt className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-muted">
								What To Send
							</dt>
							<dd className="m-0 max-w-[360px] text-[14px] leading-[1.65] text-ink">
								A rough description of the problem, what is at risk, and
								anything that has already been tried.
							</dd>
						</div>
					</dl>
				</aside>

				<div style={getRevealStyle({ visible, reducedMotion, y: 18 })}>
					<InquiryFormCard />
				</div>
			</div>
		</section>
	);
}
