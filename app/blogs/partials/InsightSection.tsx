"use client";

import type { BlogArticleSection } from "../interface";
import { InsightImage } from "./InsightImage";
import { useBlogSectionReveal } from "@/hooks/usePortfolioAnimations";
import { useRef } from "react";

interface InsightSectionProps {
	no: string;
	section: BlogArticleSection;
}

export function InsightSection({ no, section }: InsightSectionProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	useBlogSectionReveal(containerRef);

	return (
		<section className="border-b border-soft-line pb-[clamp(56px,7vw,88px)] last:border-b-0" ref={containerRef}>
			<div className="flex items-end gap-5">
				<span className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-dl-blue" data-animate-tagline>
					{no}
				</span>
				<i className="h-px w-16 bg-line origin-left" data-animate-tagline />
			</div>
			<h2 className="mt-5 max-w-[760px] text-[clamp(2.35rem,4vw,4rem)] font-semibold leading-[0.92] tracking-[-0.066em] text-ink">
				<span className="block" data-animate-line>{section.heading}</span>
			</h2>
			<div className="mt-8 grid gap-5 text-[15px] leading-[1.82] text-[#52607b]">
				{section.paragraphs.map((paragraph) => (
					<p className="max-w-[68ch]" key={paragraph} data-animate-paragraph>
						{paragraph}
					</p>
				))}
			</div>
			<div data-animate-image>
				<InsightImage image={section.image} />
			</div>
		</section>
	);
}
