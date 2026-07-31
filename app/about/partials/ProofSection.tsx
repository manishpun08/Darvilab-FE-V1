import { label, shell } from "@/lib/classes";
import { proofMetrics } from "../data/aboutData";

export function ProofSection() {
	return (
		<section
			className="bg-paper pb-[clamp(56px,6vw,88px)] pt-[clamp(56px,6vw,88px)]"
			id="proof"
		>
			<div className={shell}>
				<div className="grid grid-cols-[.95fr_1.05fr] items-end gap-[clamp(56px,9vw,140px)] max-lg:grid-cols-1">
					<div>
						<div className="flex items-center gap-3 text-ink">
							<i className="h-px w-16 bg-[#9fb0c5]" />
							<span className={label}>Relationships</span>
						</div>
						<div className="mt-8">
							<strong className="block text-[clamp(78px,9vw,118px)] font-bold leading-[0.84] tracking-[-0.07em]">
								Clients
							</strong>
							<em className="block text-[clamp(78px,9vw,118px)] font-bold italic leading-[0.84] tracking-[-0.07em] text-dl-blue">
								Return.
							</em>
						</div>
					</div>
					<p className="mb-[14px] max-w-[580px] text-[17px] leading-[1.65] text-ink">
						Because when work is honest, trust compounds. Our longest active
						client relationship is nine years old. These are not vanity metrics
						- they are what happens when you say hard things early and stay
						accountable after the project closes.
					</p>
				</div>

				<div className="mt-20 grid grid-cols-4 border-t border-line max-lg:grid-cols-2 max-md:grid-cols-1">
					{proofMetrics.map((item, index) => (
						<article
							className={`min-h-[210px] pt-11 pr-[38px] max-md:pt-7 ${
								index > 0
									? "border-l border-line pl-[38px] max-lg:border-l-0 max-lg:pl-0"
									: ""
							} ${
								index >= 2
									? "max-lg:border-t max-lg:border-line max-lg:pt-7"
									: ""
							} ${
								index === 1 || index === 3
									? "max-lg:border-l max-lg:border-line max-lg:pl-[38px] max-md:border-l-0 max-md:pl-0"
									: ""
							}`}
							key={item.value}
						>
							<strong className="flex items-end gap-1 font-case text-[clamp(52px,5.6vw,76px)] font-bold leading-[0.92] tracking-[-0.07em] text-ink">
								{item.value}
								<span className="text-[0.52em] tracking-[-0.04em] text-dl-blue">
									{item.suffix}
								</span>
							</strong>
							<p className="mt-[18px] max-w-[250px] text-[14px] leading-[1.6] text-ink">
								{item.body}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
