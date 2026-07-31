"use client";

import type { BlogArticleSection } from "../interface";
import { InsightImage } from "./InsightImage";

interface InsightSectionProps {
	no: string;
	section: BlogArticleSection;
}

export function InsightSection({ no, section }: InsightSectionProps) {
	return (
		<section className="border-b border-soft-line pb-[clamp(56px,7vw,88px)] last:border-b-0">
			<div className="flex items-end gap-5">
				<span className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-dl-blue">
					{no}
				</span>
				<span className="h-px w-16 bg-line" />
			</div>
			<h2 className="mt-5 max-w-[760px] text-[clamp(2.35rem,4vw,4rem)] font-semibold leading-[0.92] tracking-[-0.066em] text-ink">
				{section.heading}
			</h2>
			<div className="mt-8 grid gap-5 text-[15px] leading-[1.82] text-[#52607b]">
				{section.paragraphs.map((paragraph) => (
					<p className="max-w-[68ch]" key={paragraph}>
						{paragraph}
					</p>
				))}
			</div>
			<InsightImage image={section.image} />
		</section>
	);
}
