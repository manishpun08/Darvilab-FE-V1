"use client";

import { useRef } from "react";
import type { IconType } from "react-icons";
import {
	LuChartColumn,
	LuFileText,
	LuLayoutGrid,
	LuMonitor,
	LuSquareDashedBottomCode,
} from "react-icons/lu";
import { useOutcomesSectionReveal } from "@/hooks/usePortfolioAnimations";
import { shell } from "@/lib/classes";
import type { ServiceDetail } from "../interface/service.interface";
import { RevealSection } from "./RevealSection";
import { SectionLabel } from "./SectionLabel";

const deliverableIcons: Record<string, IconType> = {
	"Product direction document": LuFileText,
	"Product structure model": LuLayoutGrid,
	"Designed and annotated interface": LuMonitor,
	"Product-specific design system": LuSquareDashedBottomCode,
	"Validation report": LuChartColumn,
};

type Props = {
	service: ServiceDetail;
};

export function OutcomesSection({ service }: Props) {
	const containerRef = useRef<HTMLDivElement>(null);
	useOutcomesSectionReveal(containerRef);

	return (
		<RevealSection
			className="scroll-mt-[104px] border-b border-white/10 bg-[#0a0a14] pb-[clamp(84px,9vw,128px)] pt-[clamp(84px,9vw,128px)] text-white"
			id="what-you-get"
		>
			<div className={shell} ref={containerRef}>
				<SectionLabel dark data-animate-label>WHAT YOU GET</SectionLabel>
				<div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)] lg:items-end">
					<h2 className="max-w-[14ch] text-[clamp(3.3rem,6vw,6rem)] font-case font-semibold leading-[0.9] tracking-[-0.08em] text-white">
						Deliverables are only useful if you know what they change.
					</h2>
					<p
						className="max-w-[420px] text-[16px] leading-[1.78] text-white/62"
						data-animate-intro
					>
						Each output needs a commercial consequence. These rows show what the
						work changes, not just what gets handed over.
					</p>
				</div>

				<div className="mt-14 border-t border-white/10">
					{service.deliverables.map((item) => {
						const Icon = deliverableIcons[item.deliverable] || LuFileText;

						return (
							<article
								className="grid gap-5 border-b border-white/10 py-7 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:items-start lg:gap-10"
								key={item.deliverable}
								data-animate-row
							>
								<div className="flex items-start gap-4">
									<div className="mt-1 text-white" data-animate-icon>
										<Icon aria-hidden="true" size={22} strokeWidth={1.5} />
									</div>
									<strong
										className="max-w-[20ch] text-[22px] font-semibold leading-[1.3] tracking-[-0.035em] text-white"
										data-animate-title
									>
										{item.deliverable}
									</strong>
								</div>
								<p
									className="max-w-[64ch] text-[16px] leading-[1.8] text-white/62"
									data-animate-desc
								>
									{item.impact}
								</p>
							</article>
						);
					})}
				</div>
			</div>
		</RevealSection>
	);
}
