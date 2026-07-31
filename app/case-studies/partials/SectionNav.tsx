import { sectionOrder } from "../data/sectionOrder";
import type { CaseStudy } from "../interface/caseStudy.interface";

interface SectionNavProps {
	activeSection: string;
	caseStudy: CaseStudy;
}

export function SectionNav({ activeSection, caseStudy }: SectionNavProps) {
	return (
		<aside className="hidden md:block">
			<div className="sticky top-[72px] px-4 py-2">
				<nav aria-label={`${caseStudy.project} case study sections`}>
					<ul className="grid gap-1">
						{sectionOrder.map((item) => {
							const active = activeSection === item.id;
							return (
								<li key={item.id}>
									<a
										className={`group relative flex min-h-11 items-center gap-3 pl-4 text-[13px] transition ${
											active ? "text-dl-blue" : "text-[#55607a] hover:text-ink"
										}`}
										href={`#${item.id}`}
									>
										<span
											className={`absolute left-0 top-1/2 h-[72%] w-px -translate-y-1/2 origin-center transition ${
												active
													? "scale-y-100 bg-dl-blue"
													: "scale-y-[0.42] bg-line group-hover:scale-y-100 group-hover:bg-dl-blue"
											}`}
										/>
										<span className="font-mono text-[8px] font-semibold uppercase tracking-[0.14em]">
											{item.no}
										</span>
										<span className="tracking-[-0.02em]">{item.label}</span>
									</a>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</aside>
	);
}
