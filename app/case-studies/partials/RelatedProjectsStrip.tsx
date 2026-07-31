import { SmartLink } from "@/components/shared/SmartLink";
import { getFooterParallaxStyle } from "@/hooks/useFooterRevealMotion";
import { label, shell } from "@/lib/classes";
import { getCaseStudyUrl } from "../data/caseStudyDetails";

type CaseStudyItem = {
	accent: string;
	accentGlow: string;
	accentHaze: string;
	heroMetric: string;
	heroMetricLabel: string;
	horizonBand: string;
	horizonMist: string;
	industry: string;
	no: string;
	outcomeMetrics: Array<{ value: string; label: string }>;
	problem: string;
	project: string;
};

type RelatedCardProps = {
	caseStudy: CaseStudyItem;
};

function RelatedCard({ caseStudy }: RelatedCardProps) {
	return (
		<SmartLink
			className="group relative flex min-h-[340px] overflow-hidden border border-line bg-[#050b1f] p-6 text-white transition hover:-translate-y-1 hover:border-[color:var(--accent)] max-sm:min-h-[300px]"
			href={getCaseStudyUrl(caseStudy)}
			style={{
				"--accent": caseStudy.accent,
				backgroundImage: `linear-gradient(180deg, rgba(5,11,31,0) 0 52%, ${caseStudy.horizonBand} 77%, ${caseStudy.horizonMist} 100%), radial-gradient(ellipse 72% 42% at 58% 108%, ${caseStudy.accentGlow}, ${caseStudy.accentHaze} 46%, transparent 74%), linear-gradient(180deg, #050b1f 0%, #050b1f 100%)`,
			}}
		>
			<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
			<div className="absolute inset-y-6 left-4 w-px origin-top scale-y-40 bg-white/12 transition group-hover:bg-[color:var(--accent)]" />
			<div className="pointer-events-none absolute right-4 top-[40%] -translate-y-1/2 font-display text-[clamp(5rem,9vw,8rem)] leading-[0.8] tracking-[-0.08em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.18)]">
				{caseStudy.no}
			</div>

			<div className="relative z-10 ml-6 flex w-full flex-col">
				<div className="flex items-center gap-4">
					<span className={`${label} text-white/58`}>{caseStudy.industry}</span>
				</div>

				<div className="mt-12 overflow-hidden">
					<div
						className="font-case text-[clamp(3.8rem,7vw,5.5rem)] font-medium leading-[0.84] tracking-[-0.08em] text-white"
						style={{ color: caseStudy.accent }}
					>
						{caseStudy.heroMetric}
					</div>
					<p className="mt-3 font-display text-[1.4rem] font-normal leading-[1.05] tracking-[-0.04em]">
						{caseStudy.heroMetricLabel}
					</p>
				</div>

				<p className="mt-8 max-w-[360px] text-[14px] leading-[1.75] text-white/68">
					{caseStudy.problem}
				</p>

				<div className="mt-auto grid grid-cols-2 gap-4 border-t border-white/12 pt-5">
					<div>
						<span className="font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-white/42">
							Project
						</span>
						<p className="mt-2 text-[15px] font-semibold">
							{caseStudy.project}
						</p>
					</div>
					<div>
						<span className="font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-white/42">
							Outcome
						</span>
						<p className="mt-2 text-[12px] leading-[1.65] text-white/76">
							{caseStudy.outcomeMetrics
								.map((item) => `${item.value} ${item.label}`)
								.join(" · ")}
						</p>
					</div>
				</div>
			</div>
		</SmartLink>
	);
}

type RelatedProjectsStripProps = {
	parallaxDisabled?: boolean;
	relatedProjects: CaseStudyItem[];
	sectionRef?: React.RefObject<HTMLElement | null> | null;
};

export function RelatedProjectsStrip({
	parallaxDisabled = false,
	relatedProjects,
	sectionRef = null,
}: RelatedProjectsStripProps) {
	const enableParallax = Boolean(sectionRef) && !parallaxDisabled;

	return (
		<section
			className={`bg-paper-blue py-[120px] max-sm:py-20 ${enableParallax ? "relative z-10" : ""}`}
			ref={sectionRef}
		>
			<div className={shell} style={getFooterParallaxStyle(enableParallax)}>
				<div className="pt-4">
					<span className={`${label} text-dl-blue`}>More work</span>
				</div>
				<div className="mt-12 grid grid-cols-2 gap-6 max-lg:grid-cols-1">
					{relatedProjects.map((caseStudy) => (
						<RelatedCard caseStudy={caseStudy} key={caseStudy.no} />
					))}
				</div>
				<SmartLink
					className="mt-8 inline-flex min-h-11 items-center gap-3 text-[13px] font-semibold text-dl-blue transition hover:gap-4"
					href={"/portfolio#all-cases"}
				>
					<span>View all case studies</span>
					<span aria-hidden="true">→</span>
				</SmartLink>
			</div>
		</section>
	);
}
