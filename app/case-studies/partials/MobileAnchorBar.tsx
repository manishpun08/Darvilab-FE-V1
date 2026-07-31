import { sectionOrder } from "../data/sectionOrder";

interface MobileAnchorBarProps {
	activeSection: string;
}

export function MobileAnchorBar({ activeSection }: MobileAnchorBarProps) {
	return (
		<div className="sticky top-[72px] z-30 border-b border-line bg-paper-blue/95 backdrop-blur md:hidden">
			<nav
				aria-label="Case study section shortcuts"
				className="flex gap-1 overflow-x-auto px-4 py-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
			>
				{sectionOrder.map((item) => {
					const active = activeSection === item.id;
					return (
						<a
							className={`inline-flex min-h-11 shrink-0 items-center gap-3 border px-4 text-[12px] transition ${
								active
									? "border-dl-blue bg-white text-dl-blue"
									: "border-transparent bg-transparent text-[#55607a]"
							}`}
							href={`#${item.id}`}
							key={item.id}
						>
							<span className="font-mono text-[8px] font-semibold uppercase tracking-[0.14em]">
								{item.no}
							</span>
							<span>{item.label}</span>
						</a>
					);
				})}
			</nav>
		</div>
	);
}
