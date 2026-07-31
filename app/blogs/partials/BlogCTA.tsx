"use client";

import { SmartLink } from "@/components/shared/SmartLink";
import { shell } from "@/lib/classes";

interface BlogCTAProps {
	sectionRef?: React.RefObject<HTMLElement | null> | null;
}

export function BlogCTA({ sectionRef }: BlogCTAProps) {
	return (
		<section className="bg-[#050b1f] text-white" ref={sectionRef}>
			<div
				className={`${shell} grid grid-cols-[minmax(0,1fr)_auto] items-center gap-8 border-y border-white/12 py-10 max-md:grid-cols-1`}
			>
				<p className="max-w-[720px] text-[clamp(24px,3vw,40px)] font-semibold leading-[1.04] tracking-[-0.05em]">
					A question came up while reading? We are happy to think through it
					with you.
				</p>
				<SmartLink
					className="inline-flex min-h-11 w-fit items-center gap-3 border-b border-white/30 pb-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition hover:border-white"
					href="/contact#reach-out"
				>
					Start a conversation →
				</SmartLink>
			</div>
		</section>
	);
}
