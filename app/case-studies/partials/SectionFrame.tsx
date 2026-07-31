"use client";

import { useRef } from "react";
import { useSectionFrameReveal } from "@/hooks/usePortfolioAnimations";

interface SectionFrameProps {
	accent: string;
	children: React.ReactNode;
	id: string;
	no: string;
	title: string;
}

export function SectionFrame({
	accent,
	children,
	id,
	no,
	title,
}: SectionFrameProps) {
	const containerRef = useRef<HTMLElement>(null);
	useSectionFrameReveal(containerRef as unknown as React.RefObject<HTMLDivElement>);

	return (
		<section id={id} ref={containerRef}>
			<div className="flex items-end gap-5" data-animate-label>
				<span
					className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em]"
					style={{ color: accent }}
				>
					{no}
				</span>
				<span className="h-px w-16 bg-line" />
			</div>
			<h2 className="mt-5 text-[clamp(2.8rem,5vw,4.8rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-ink">
				{title}
			</h2>
			<div className="mt-9 grid gap-6 text-[15px] leading-[1.9] text-[#52607b]" data-animate-content>
				{children}
			</div>
		</section>
	);
}
