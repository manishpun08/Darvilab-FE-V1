import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { shell } from "@/lib/classes";
import { clientResponsibilities } from "../data/processPageData";
import { SectionIntro } from "./SectionIntro";

const processSectionSpacing =
	"scroll-mt-[152px] pt-[clamp(68px,7vw,104px)] pb-[clamp(68px,7vw,104px)]";

export function ResponsibilitiesSection() {
	return (
		<section
			className={`${processSectionSpacing} bg-paper-blue`}
			data-animate-responsibilities
			id="responsibilities"
		>
			<div className={shell}>
				<SectionEyebrow>Client Responsibilities</SectionEyebrow>
				<div className="mt-8">
					<SectionIntro
						body="Every engagement runs smoother when both sides know what's expected. Here's what we'll ask of you - nothing more."
						title="What we'll need from you"
					/>
				</div>

				<div className="mt-14 grid gap-0 md:grid-cols-2">
					{clientResponsibilities.map((item, index) => (
						<article
							className={`grid gap-3 border-b border-line py-7 md:min-h-[182px] ${
								index % 2 === 1 ? "md:border-l md:pl-8" : "md:pr-8"
							}`}
							data-animate-item
							key={item.label}
						>
							<h3 className="text-[20px] font-semibold tracking-[-0.03em] text-ink">
								{item.label}
							</h3>
							<p className="max-w-[38ch] text-[15px] leading-[1.72] text-muted">
								{item.body}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
