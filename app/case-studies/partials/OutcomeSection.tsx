"use client";

import type { CaseStudy } from "../interface/caseStudy.interface";
import { SectionFrame } from "./SectionFrame";
import { useMetricCounter } from "@/hooks/usePortfolioAnimations";
import { useRef } from "react";

interface OutcomeSectionProps {
	accent: string;
	caseStudy: CaseStudy;
}

export function OutcomeSection({ accent, caseStudy }: OutcomeSectionProps) {
	const containerRef = useRef<HTMLElement>(null);
	useMetricCounter(containerRef as unknown as React.RefObject<HTMLDivElement>);

	return (
		<div ref={containerRef as unknown as React.RefObject<HTMLDivElement>}>
			<SectionFrame accent={accent} id="outcome" no="04" title="The Outcome">
			<div className="mt-4 grid grid-cols-3 gap-6 border-b border-soft-line pb-10 max-md:grid-cols-1">
				{caseStudy.outcomeMetrics.map((metric) => (
					<div className="border-t pt-5" key={metric.label}>
						<div className="overflow-visible pb-2">
							<strong
								className="inline-block pr-[0.08em] font-case text-[clamp(3rem,5.2vw,4.5rem)] font-medium leading-[0.92] tracking-[-0.08em]"
								style={{ color: accent }}
								data-animate-counter
							>
								{metric.value}
							</strong>
						</div>
						<span className="mt-3 block font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
							{metric.label}
						</span>
					</div>
				))}
			</div>

			<div className="mt-2 grid gap-5">
				{caseStudy.outcomeNarrative.map((paragraph) => (
					<p className="max-w-[68ch]" key={paragraph}>
						{paragraph}
					</p>
				))}
			</div>
		</SectionFrame>
		</div>
	);
}

