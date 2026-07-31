"use client";

import { SmartLink } from "@/components/shared/SmartLink";
import { label, shell } from "@/lib/classes";

export function NextStepSection() {
	return (
		<section className="bg-[#050b1f] py-[clamp(72px,8vw,112px)] text-white">
			<div className={shell}>
				<div className="grid items-end gap-[clamp(40px,8vw,120px)] border-y border-white/12 py-[clamp(44px,6vw,72px)] lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.65fr)]">
					<div>
						<div className="flex items-center gap-3 text-ice">
							<span className={label}>Next step</span>
							<i className="h-px w-16 bg-white/24" />
						</div>
						<h2 className="mt-8 max-w-[760px] text-[clamp(3rem,5.6vw,5.8rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
							Thinking through a similar decision?
						</h2>
					</div>
					<div className="grid gap-7 lg:justify-self-end">
						<p className="max-w-[520px] text-[16px] leading-[1.72] text-white/72">
							Send us the constraint, the workflow, or the decision that keeps
							resurfacing. We can help clarify what should change first.
						</p>
						<SmartLink
							className="inline-flex min-h-11 w-fit items-center gap-3 border-b border-white/30 pb-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition hover:border-white"
							href="/contact#reach-out"
						>
							Start a conversation →
						</SmartLink>
					</div>
				</div>
			</div>
		</section>
	);
}
