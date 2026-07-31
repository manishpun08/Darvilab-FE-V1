"use client";

import { SmartLink } from "@/components/shared/SmartLink";
import { getRevealStyle, useReveal } from "@/hooks/useRevealMotion";

export function InlineCta() {
	const reveal = useReveal();

	return (
		<section
			className="border-y border-ink py-10"
			id="conversation"
			ref={reveal.ref}
			style={getRevealStyle(reveal)}
		>
			<span className="font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-muted">
				Next step
			</span>
			<h2 className="mt-4 text-[clamp(2.8rem,5vw,4.8rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-ink">
				Working on something like this?
			</h2>
			<p className="mt-5 max-w-[54ch] text-[15px] leading-[1.9] text-[#52607b]">
				If the system is growing faster than the decisions inside it, we can
				help identify what should change and what needs to hold.
			</p>
			<SmartLink
				className="mt-7 inline-flex min-h-11 items-center gap-3 text-[14px] font-semibold text-dl-blue transition hover:gap-4"
				href="/contact#reach-out"
			>
				<span>Start a conversation</span>
				<span aria-hidden="true">→</span>
			</SmartLink>
		</section>
	);
}
