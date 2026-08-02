"use client";

import { SmartLink } from "@/components/shared/SmartLink";
import { shell } from "@/lib/classes";
import { useBlogSectionReveal } from "@/hooks/usePortfolioAnimations";
import { useRef } from "react";

interface BlogCTAProps {
	sectionRef?: React.RefObject<HTMLElement | null> | null;
}

export function BlogCTA({ sectionRef }: BlogCTAProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	useBlogSectionReveal(containerRef);

	return (
		<section className="bg-[#050b1f] text-white" ref={sectionRef || containerRef}>
			<div
				className={`${shell} grid grid-cols-[minmax(0,1fr)_auto] items-center gap-8 border-y border-white/12 py-10 max-md:grid-cols-1`}
				ref={containerRef}
			>
				<div>
					<h3 className="max-w-[720px] text-[clamp(24px,3vw,40px)] font-semibold leading-[1.04] tracking-[-0.05em]">
						<span className="block" data-animate-line>A question came up while reading? We are happy to</span>
						<span className="block" data-animate-line>think through it with you.</span>
					</h3>
				</div>
				<SmartLink
					className="inline-flex min-h-11 w-fit items-center gap-3 border-b border-white/30 pb-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition hover:border-white"
					href="/contact#reach-out"
					data-animate-cta
				>
					Start a conversation →
				</SmartLink>
			</div>
		</section>
	);
}
