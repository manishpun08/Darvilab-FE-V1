import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { shell } from "@/lib/classes";
import { changeBlocks } from "../data/processPageData";
import { SectionIntro } from "./SectionIntro";

const processSectionSpacing =
	"scroll-mt-[152px] pt-[clamp(68px,7vw,104px)] pb-[clamp(68px,7vw,104px)]";

export function ChangeSection() {
	return (
		<section className={`${processSectionSpacing} bg-paper`} data-animate-change id="changes">
			<div className={shell}>
				<SectionEyebrow>Change Handling</SectionEyebrow>
				<div className="mt-8">
					<SectionIntro
						body="Most engagements change somewhere. The point is not to pretend they won't. The point is to make the change process explicit before it becomes a source of anxiety."
						title="When scope or timelines shift"
					/>
				</div>

				<div className="mt-14 grid gap-8 lg:grid-cols-3 lg:gap-10">
					{changeBlocks.map((item) => (
						<article
							className="grid gap-4 border-t border-line pt-6"
							data-animate-item
							key={item.title}
						>
							<h3 className="text-[20px] font-semibold tracking-[-0.03em] text-ink">
								{item.title}
							</h3>
							<p className="max-w-[34ch] text-[15px] leading-[1.76] text-muted">
								{item.body}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
