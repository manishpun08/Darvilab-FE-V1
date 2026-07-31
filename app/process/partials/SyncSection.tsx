import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { getFooterParallaxStyle } from "@/hooks/useFooterRevealMotion";
import { shell } from "@/lib/classes";
import { syncBlocks } from "../data/processPageData";
import { SectionIntro } from "./SectionIntro";

interface SyncSectionProps {
	parallaxDisabled?: boolean;
	sectionRef?: React.RefObject<HTMLElement | null> | null;
}

export function SyncSection({
	parallaxDisabled = false,
	sectionRef = null,
}: SyncSectionProps) {
	const enableParallax = Boolean(sectionRef) && !parallaxDisabled;

	return (
		<section
			className={`scroll-mt-[152px] bg-paper pt-[clamp(40px,4.5vw,64px)] pb-[clamp(68px,7vw,104px)] ${
				enableParallax ? "relative z-10" : ""
			}`}
			data-animate-sync
			id="sync"
			ref={sectionRef}
		>
			<div className={shell} style={getFooterParallaxStyle(enableParallax)}>
				<SectionEyebrow>Project Management</SectionEyebrow>
				<div className="mt-8">
					<SectionIntro title="How we stay in sync" />
				</div>

				<div className="mt-14 grid gap-8 lg:grid-cols-3 lg:gap-10">
					{syncBlocks.map((item) => (
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
