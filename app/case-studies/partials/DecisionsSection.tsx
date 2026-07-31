import type { CaseStudy } from "../interface/caseStudy.interface";
import { SectionFrame } from "./SectionFrame";

interface DecisionsSectionProps {
	accent: string;
	caseStudy: CaseStudy;
}

export function DecisionsSection({ accent, caseStudy }: DecisionsSectionProps) {
	return (
		<SectionFrame accent={accent} id="decision" no="03" title="What We Decided">
			<p className="max-w-[68ch]">
				Each structural choice was made to change the operating model, not just
				the interface. The technical shape had to earn its place by improving
				how the business made decisions under pressure.
			</p>
			<dl className="grid gap-8 border-t border-soft-line pt-6">
				{caseStudy.decisions.map((decision) => (
					<div
						className="grid gap-3 border-b border-soft-line pb-7 last:border-b-0 last:pb-0"
						key={decision.term}
					>
						<dt
							className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em]"
							style={{ color: accent }}
						>
							{decision.term}
						</dt>
						<dd className="m-0 max-w-[68ch] text-[15px] leading-[1.9] text-[#52607b]">
							{decision.detail}
						</dd>
					</div>
				))}
			</dl>
		</SectionFrame>
	);
}
