import { useRef } from "react";
import { shell } from "@/lib/classes";
import { useCaseStudyHeroReveal } from "@/hooks/usePortfolioAnimations";

type CaseStudyHeroProps = {
	caseStudy: {
		accent: string;
		accentGlow: string;
		accentHaze: string;
		heroContext: string;
		heroMetric: string;
		heroMetricLabel: string;
		horizonBand: string;
		horizonMist: string;
		industry: string;
		no: string;
		project: string;
		timeline: string;
	};
	entered: boolean;
	horizonShift: number;
	reducedMotion: boolean;
};

export function CaseStudyHero({
	caseStudy,
	entered,
	horizonShift,
	reducedMotion,
}: CaseStudyHeroProps) {
	const {
		accent,
		accentGlow,
		accentHaze,
		heroContext,
		heroMetric,
		heroMetricLabel,
		horizonBand,
		horizonMist,
		industry,
		no,
		project,
		timeline,
	} = caseStudy;

	const containerRef = useRef<HTMLElement>(null);
	// We're letting GSAP handle the animations now, so we bypass metricStyle completely
	useCaseStudyHeroReveal(
		reducedMotion ? { current: null } : (containerRef as unknown as React.RefObject<HTMLDivElement>)
	);

	return (
		<section
			ref={containerRef as unknown as React.RefObject<HTMLElement>}
			className="relative min-h-screen overflow-hidden bg-[#050b1f] pt-[72px] text-white"
			id="top"
			style={{
				backgroundImage: `linear-gradient(180deg, rgba(5,11,31,0) 0 54%, ${horizonBand} 76%, ${horizonMist} 100%), radial-gradient(ellipse 70% 38% at 56% calc(100% + ${horizonShift}px), ${accentGlow}, ${accentHaze} 46%, transparent 74%), linear-gradient(180deg, #050b1f 0%, #050b1f 100%)`,
			}}
		>
			<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,#000,transparent_80%)]" />
			<div className="pointer-events-none absolute inset-x-[-18%] bottom-[-14%] h-[28%] rounded-full bg-[rgba(217,235,255,0.84)] blur-[42px]" />
			<div className="pointer-events-none absolute bottom-0 right-[4%] font-display text-[clamp(8rem,19vw,19rem)] leading-[0.78] tracking-[-0.08em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.16)]">
				{no}
			</div>

			<div
				className={`${shell} relative z-10 flex min-h-[calc(100vh-72px)] flex-col pt-[clamp(48px,8vh,96px)]`}
			>
				<div className="grid min-h-[calc(100vh-280px)] grid-cols-[minmax(0,1fr)_minmax(240px,340px)] items-center gap-x-[clamp(48px,7vw,112px)] gap-y-14 max-lg:grid-cols-1 max-lg:items-start max-lg:gap-y-12">
					<div className="max-w-[920px]">
						<p
							className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em]"
							style={{ color: accent }}
							data-animate-tagline
						>
							Project {no} / {project}
						</p>
						<div className="mt-10 max-w-[920px]">
							<span 
								className="inline-block font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white/54"
								data-animate-label
							>
								Dominant outcome
							</span>
							<div className="mt-5 overflow-visible" style={{ perspective: "1200px" }}>
								<h1
									className="font-case text-[clamp(5rem,15vw,13rem)] font-medium leading-[0.82] tracking-[-0.08em] text-white"
									data-animate-metric
								>
									{heroMetric}
								</h1>
							</div>
							<div className="mt-5 flex flex-wrap items-end gap-x-5 gap-y-3">
								<strong
									className="inline-block font-display text-[clamp(1.35rem,3.6vw,2.75rem)] font-normal leading-[1.02] tracking-[-0.05em]"
									style={{ color: accent }}
									data-animate-metric-label
								>
									{heroMetricLabel}
								</strong>
							</div>
						</div>
						<p 
							className="mt-10 max-w-[620px] text-[clamp(1.06rem,1.45vw,1.18rem)] italic leading-[1.8] text-white/66"
							data-animate-context
						>
							{heroContext}
						</p>
					</div>

					<div className="justify-self-end self-center max-w-[280px] max-lg:justify-self-start max-lg:max-w-[360px]">
						<dl className="grid">
							{[
								["Industry", industry],
								["Timeline", timeline],
								["Outcome", heroMetricLabel],
							].map(([label, value]) => (
								<div
									className="grid gap-2 border-b border-white/10 py-4 last:border-b-0"
									key={label}
									data-animate-detail
								>
									<dt className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-white/46">
										{label}
									</dt>
									<dd className="m-0 text-[16px] font-semibold leading-[1.55] tracking-[-0.015em] text-white/84">
										{value}
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div>
		</section>
	);
}
