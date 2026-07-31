import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { getHeroIntroParallaxStyle } from "@/hooks/useHeroIntroParallax";
import { shell } from "@/lib/classes";
import { processPhases } from "../data/processPageData";
import { SectionIntro } from "./SectionIntro";

const processSectionSpacing =
	"scroll-mt-[152px] pt-[clamp(68px,7vw,104px)] pb-[clamp(68px,7vw,104px)]";

interface TimelineSectionProps {
	parallaxDisabled?: boolean;
	sectionRef?: React.RefObject<HTMLElement | null> | null;
}

export function TimelineSection({
	parallaxDisabled = false,
	sectionRef = null,
}: TimelineSectionProps) {
	const enableParallax = Boolean(sectionRef) && !parallaxDisabled;

	return (
		<section
			className={`${processSectionSpacing} bg-paper ${
				enableParallax ? "relative z-10" : ""
			}`}
			data-animate-timeline
			id="overview"
			ref={sectionRef}
		>
			<div
				className={shell}
				style={getHeroIntroParallaxStyle(
					enableParallax,
					"--work-intro-layer-y",
				)}
			>
				<SectionEyebrow>Engagement Overview</SectionEyebrow>
				<div className="mt-8">
					<SectionIntro
						body="A typical engagement moves through five explicit stages. Each one answers a different risk: what should be built, how it should be shaped, how it gets delivered, how it gets reviewed, and how ownership becomes transferable."
						title="The stages, in order."
					/>
				</div>

				<div className="mt-16">
					<div className="relative hidden md:block">
						<div className="absolute left-0 right-[10%] top-5 h-px bg-line" data-animate-connector />
						<div className="grid grid-cols-5 gap-8">
							{processPhases.map((phase) => (
								<article className="relative grid gap-4" data-animate-phase key={phase.id}>
									<span className="relative h-10">
										<span className="absolute left-0 top-0 h-[10px] w-[10px] rounded-full border border-dl-blue bg-white" />
									</span>
									<div className="grid gap-3">
										<span className="font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-dl-blue">
											{phase.no}
										</span>
										<h3 className="text-[20px] font-semibold tracking-[-0.03em] text-ink">
											{phase.name}
										</h3>
										<p className="max-w-[22ch] text-[14px] leading-[1.68] text-muted">
											{phase.summary}
										</p>
									</div>
								</article>
							))}
						</div>
					</div>

					<div className="grid gap-0 border-t border-line md:hidden">
						{processPhases.map((phase) => (
							<article
								className="grid gap-4 border-b border-line py-6"
								data-animate-phase-mobile
								key={phase.id}
							>
								<span className="font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-dl-blue">
									{phase.no}
								</span>
								<div>
									<h3 className="text-[20px] font-semibold tracking-[-0.03em] text-ink">
										{phase.name}
									</h3>
									<p className="mt-3 max-w-[34ch] text-[14px] leading-[1.68] text-muted">
										{phase.summary}
									</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
