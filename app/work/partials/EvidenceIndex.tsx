"use client";

import { useRef, useState } from "react";
import { SmartLink } from "@/components/shared/SmartLink";
import { getHeroIntroParallaxStyle } from "@/hooks/useHeroIntroParallax";
import {
	useEvidenceExpand,
	useEvidenceRowReveal,
} from "@/hooks/usePortfolioAnimations";
import { label, sectionTitle, shell } from "@/lib/classes";
import { getCaseStudyUrl } from "../../case-studies/data/caseStudyDetails";
import { workCases } from "../data/workCases";

type WorkCaseItem = {
	no: string;
	project: string;
	industry: string;
	problem: string;
	whatChanged: string;
	outcome: string[][];
	situation: string;
	decision: string;
};

type IndexRowProps = {
	expanded: boolean;
	item: WorkCaseItem;
	onToggle: () => void;
};

function IndexRow({ expanded, item, onToggle }: IndexRowProps) {
	const isActive = expanded;

	return (
		<div className={`border-b border-line ${isActive ? "bg-[#f4f8ff]" : ""}`} data-evidence-row>
			<button
				aria-controls={`case-expand-${item.no}`}
				aria-expanded={expanded}
				data-evidence-toggle
				className={`relative grid min-h-24 w-full grid-cols-[62px_minmax(180px,1fr)_minmax(110px,.55fr)_minmax(220px,1.2fr)_minmax(220px,1fr)_minmax(220px,.9fr)] items-center gap-[22px] px-[14px] py-[24px] pr-[52px] text-left transition hover:bg-[#f7faff] focus-visible:bg-[#f7faff] max-[860px]:grid-cols-[46px_minmax(140px,1fr)_minmax(100px,.55fr)_minmax(190px,1fr)_minmax(200px,.9fr)] max-[860px]:gap-4 max-[860px]:[&>.cell-change]:hidden max-sm:grid-cols-[38px_minmax(0,1fr)_auto] max-sm:gap-x-3 max-sm:gap-y-2 max-sm:pr-10 ${
					isActive
						? "shadow-[inset_3px_0_0_0_#2600ff]"
						: "hover:shadow-[inset_3px_0_0_0_#2600ff] focus-visible:shadow-[inset_3px_0_0_0_#2600ff]"
				}`}
				onClick={onToggle}
				type="button"
			>
				<span className="block w-full font-mono text-[11px] tracking-[0.08em] text-[#8b8b95]">
					{item.no}
				</span>
				<strong className="block w-full text-[19px] font-semibold leading-[1.05] tracking-[-0.03em] max-sm:text-[18px]">
					{item.project}
				</strong>
				<span className="block w-full text-left text-[12px] leading-[1.55] text-[#5c657f] max-sm:col-start-2">
					{item.industry}
				</span>
				<span className="block w-full text-left text-[12px] leading-[1.55] text-[#565661] max-sm:hidden">
					{item.problem}
				</span>
				<span className="cell-change block w-full text-left text-[12px] leading-[1.55] text-[#70707b]">
					{item.whatChanged}
				</span>
				<span className="flex w-full flex-wrap gap-x-3 gap-y-2 text-left text-[12px] leading-[1.55] text-[#565661] max-[860px]:col-start-auto max-sm:col-start-2">
					{item.outcome.map(([value, copy]) => (
						<span
							className="inline-flex items-baseline gap-1 whitespace-nowrap"
							key={copy}
						>
							<b className="font-case text-[15px] font-medium text-dl-blue">
								{value}
							</b>
							<small className="font-mono text-[10px] text-[#5f5f69]">
								{copy}
							</small>
						</span>
					))}
				</span>
				<i className="absolute right-[14px] top-1/2 -translate-y-1/2 text-dl-blue not-italic">
					{expanded ? "−" : "→"}
				</i>
			</button>

			<div
				className={`grid transition-[grid-template-rows] duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
					expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
				}`}
				data-expand-panel
				id={`case-expand-${item.no}`}
			>
				<div className="overflow-hidden">
					<div className={`bg-[linear-gradient(180deg,rgba(247,247,249,0.94),rgba(255,255,255,0.98))] transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
						expanded ? "opacity-100" : "opacity-0"
					}`}>
						<div className="grid grid-cols-[1.15fr_1fr_auto] gap-6 px-[76px] pb-[22px] max-[1100px]:grid-cols-1 max-[1100px]:pl-[68px] max-sm:px-[10px] max-sm:pb-[18px]">
							<div className="border-t border-[#e3e3ea] pt-[18px]">
								<span className={`${label} text-dl-blue`}>Situation</span>
								<p className="mt-3 max-w-[430px] text-[12px] leading-[1.65] text-[#565661]">
									{item.situation}
								</p>
							</div>
							<div className="border-t border-[#e3e3ea] pt-[18px]">
								<span className={`${label} text-dl-blue`}>Decision made</span>
								<p className="mt-3 max-w-[430px] text-[12px] leading-[1.65] text-[#565661]">
									{item.decision}
								</p>
							</div>
							<div className="flex items-start justify-end border-t border-[#e3e3ea] pt-[18px] max-[1100px]:justify-start">
								<SmartLink
									className="inline-flex min-h-11 items-center gap-3 border border-ink bg-white px-4 text-[12px] font-semibold transition hover:border-dl-blue hover:text-dl-blue max-sm:w-full max-sm:justify-between"
									href={getCaseStudyUrl(item)}
								>
									<span>Inspect Full Evidence</span>
									<b aria-hidden="true" className="text-[18px] font-normal">
										→
									</b>
								</SmartLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

type EvidenceIndexProps = {
	parallaxDisabled?: boolean;
	sectionRef?: React.RefObject<HTMLElement | null> | null;
	stickyLayerEnabled?: boolean;
};

export function EvidenceIndex({
	parallaxDisabled = false,
	sectionRef = null,
	stickyLayerEnabled = false,
}: EvidenceIndexProps) {
	const [expandedCase, setExpandedCase] = useState<string | null>(
		workCases[0].no,
	);
	const enableParallax = Boolean(sectionRef) && !parallaxDisabled;
	const animRef = useRef<HTMLDivElement>(null);
	useEvidenceRowReveal(animRef);
	useEvidenceExpand(animRef);

	return (
		<section
			className={`bg-paper py-[144px] max-sm:py-24 ${
				stickyLayerEnabled ? "sticky z-0" : ""
			}`}
			id="all-cases"
			ref={sectionRef}
			style={
				stickyLayerEnabled
					? { top: "var(--work-hero-sticky-top, 0px)" }
					: undefined
			}
		>
			<div
				className={shell}
				ref={animRef}
				style={getHeroIntroParallaxStyle(enableParallax, "--work-hero-layer-y")}
			>
				<div className="flex items-center gap-[18px] text-dl-blue">
					<span className={label}>Project index</span>
					<i className="h-px w-[68px] bg-dl-blue" />
				</div>
				<div className="mt-10 grid grid-cols-2 items-end gap-8 pb-[52px] max-md:grid-cols-1">
					<h2 className={sectionTitle}>All projects</h2>
					<p className="ml-auto max-w-[360px] text-[14px] leading-[1.6] text-muted max-md:ml-0">
						The client problem, the decision made, and the measured result for
						every project in the current record.
					</p>
				</div>

				<div className="border-t border-ink">
					<div className="grid min-h-12 grid-cols-[62px_minmax(180px,1fr)_minmax(110px,.55fr)_minmax(220px,1.2fr)_minmax(220px,1fr)_minmax(220px,.9fr)] items-start gap-[22px] px-[14px] py-[10px] font-mono text-[8px] uppercase tracking-[0.08em] text-[#898993] max-sm:hidden">
						<span className="block w-full text-left">No.</span>
						<span className="block w-full text-left">Project</span>
						<span className="block w-full text-left">Industry</span>
						<span className="block w-full text-left">Problem</span>
						<span className="block w-full text-left">What Changed</span>
						<span className="block w-full text-left">Outcomes</span>
					</div>
					{workCases.map((item) => (
						<IndexRow
							expanded={expandedCase === item.no}
							item={item}
							key={item.no}
							onToggle={() =>
								setExpandedCase((current) =>
									current === item.no ? null : item.no,
								)
							}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
