import type { CaseStudy } from "../interface/caseStudy.interface";
import { SectionFrame } from "./SectionFrame";

interface PerspectiveSectionProps {
	accent: string;
	caseStudy: CaseStudy;
}

export function PerspectiveSection({
	accent,
	caseStudy,
}: PerspectiveSectionProps) {
	return (
		<SectionFrame
			accent={accent}
			id="perspective"
			no="05"
			title="Client Perspective"
		>
			<blockquote className="max-w-[72ch]">
				<p className="text-[clamp(1.65rem,2.7vw,2.45rem)] italic leading-[1.48] tracking-[-0.03em] text-ink">
					{caseStudy.clientPerspective.quote}
				</p>
				<footer className="mt-8 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
					{caseStudy.clientPerspective.attribution}
				</footer>
			</blockquote>
		</SectionFrame>
	);
}
