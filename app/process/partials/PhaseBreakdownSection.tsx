"use client";

import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { shell } from "@/lib/classes";
import { processPhases } from "../data/processPageData";
import { AccordionPanel } from "./AccordionPanel";
import { SectionIntro } from "./SectionIntro";

interface PhaseBreakdownSectionProps {
	openIndex: number;
	reducedMotion: boolean;
	setOpenIndex: (index: number) => void;
}

export function PhaseBreakdownSection({
	openIndex,
	reducedMotion,
	setOpenIndex,
}: PhaseBreakdownSectionProps) {
	return (
		<section
			className="scroll-mt-[152px] bg-paper pt-[clamp(40px,4.5vw,64px)] pb-[clamp(68px,7vw,104px)]"
			data-animate-breakdown
			id="breakdown"
		>
			<div className={shell}>
				<SectionEyebrow>Phase-by-Phase Breakdown</SectionEyebrow>
				<div className="mt-8">
					<SectionIntro
						body="Each phase stays simple on purpose: what we are doing, what we need from you, what you get back, and how long that part usually takes."
						title="The detail, without the theatre."
					/>
				</div>

				<div className="mt-14 border-t border-line">
					{processPhases.map((phase, index) => {
						const isOpen = index === openIndex;

						return (
							<article
								className={`group -mx-4 border-b-[0.5px] px-4 transition-colors duration-200 sm:-mx-5 sm:px-5 lg:-mx-8 lg:px-8 ${
									isOpen
										? "border-[#1f00d9] bg-[#1f00d9]/80 text-white"
										: "border-[#dbe3f2] bg-paper text-ink hover:bg-[#f4f8ff]"
								}`}
								data-animate-item
								key={phase.id}
							>
								<button
									aria-controls={`${phase.id}-panel`}
									aria-expanded={isOpen}
									className="grid min-h-[92px] w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-6 py-6 text-left"
									onClick={() => setOpenIndex(isOpen ? -1 : index)}
									type="button"
								>
									<div className="grid items-center gap-4 lg:grid-cols-[88px_minmax(200px,0.32fr)_minmax(0,1fr)] lg:gap-6">
										<span
											className={`font-mono text-[8px] font-semibold uppercase tracking-[0.14em] ${
												isOpen ? "text-white" : "text-dl-blue"
											}`}
										>
											{phase.no}
										</span>
										<h3
											className={`text-[22px] font-semibold tracking-[-0.04em] ${
												isOpen ? "text-white" : "text-ink"
											}`}
										>
											{phase.name}
										</h3>
										<p
											className={`max-w-[60ch] text-[15px] leading-[1.72] ${
												isOpen ? "text-white/80" : "text-muted"
											}`}
										>
											{phase.summary}
										</p>
									</div>

									<span
										aria-hidden="true"
										className={`mt-1 inline-flex h-10 w-10 items-center justify-center text-[18px] ${
											isOpen ? "text-white" : "text-muted"
										}`}
									>
										<span
											style={{
												display: "inline-block",
												transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
												transition: reducedMotion
													? "none"
													: "transform 220ms ease",
											}}
										>
											▾
										</span>
									</span>
								</button>

								<AccordionPanel isOpen={isOpen} reducedMotion={reducedMotion}>
									<div
										className={`grid gap-0 border-t pb-8 pt-6 md:grid-cols-2 xl:grid-cols-3 ${
											isOpen ? "border-white/20" : "border-soft-line"
										}`}
										id={`${phase.id}-panel`}
									>
										<div
											className={`grid gap-4 border-b pl-0 pr-3 pb-6 md:pl-[50px] md:pr-4 xl:border-b-0 xl:border-r xl:pl-[50px] xl:pr-4 xl:pb-0 ${
												isOpen ? "border-white/20" : "border-soft-line"
											}`}
										>
											<span
												className={`font-mono text-[9px] font-semibold uppercase tracking-[0.14em] ${
													isOpen ? "text-white/60" : "text-muted"
												}`}
											>
												What happens
											</span>
											<ul
												className={`grid gap-3 text-[14px] leading-[1.68] ${
													isOpen ? "text-white/80" : "text-muted"
												}`}
											>
												{phase.whatHappens.map((item) => (
													<li className="flex gap-3" key={item}>
														<span
															className={`mt-[9px] h-[4px] w-[4px] shrink-0 rounded-full ${
																isOpen ? "bg-white" : "bg-dl-blue"
															}`}
														/>
														<span>{item}</span>
													</li>
												))}
											</ul>
										</div>

										<div
											className={`grid gap-4 border-b pl-0 pr-3 py-6 md:pl-[50px] md:pr-4 xl:border-b-0 xl:py-0 xl:pl-[50px] xl:pr-4 ${
												isOpen ? "border-white/20" : "border-soft-line"
											}`}
										>
											<span
												className={`font-mono text-[9px] font-semibold uppercase tracking-[0.14em] ${
													isOpen ? "text-white/60" : "text-muted"
												}`}
											>
												What we need from you
											</span>
											<ul
												className={`grid gap-3 text-[14px] leading-[1.68] ${
													isOpen ? "text-white/80" : "text-muted"
												}`}
											>
												{phase.whatWeNeed.map((item) => (
													<li className="flex gap-3" key={item}>
														<span
															className={`mt-[9px] h-[4px] w-[4px] shrink-0 rounded-full ${
																isOpen ? "bg-white" : "bg-dl-blue"
															}`}
														/>
														<span>{item}</span>
													</li>
												))}
											</ul>
										</div>

										<div
											className={`grid gap-4 pl-0 pr-3 py-6 md:pl-[50px] md:pr-4 xl:border-l xl:pl-[50px] xl:pr-4 xl:py-0 ${
												isOpen ? "xl:border-white/20" : "xl:border-soft-line"
											}`}
										>
											<span
												className={`font-mono text-[9px] font-semibold uppercase tracking-[0.14em] ${
													isOpen ? "text-white/60" : "text-muted"
												}`}
											>
												What you receive
											</span>
											<p
												className={`max-w-[34ch] text-[14px] leading-[1.68] ${
													isOpen ? "text-white/80" : "text-muted"
												}`}
											>
												{phase.whatYouReceive}
											</p>
										</div>
									</div>
								</AccordionPanel>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
