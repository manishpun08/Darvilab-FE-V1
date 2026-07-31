import type { ReactNode } from "react";

type SectionTitleProps = {
	accent?: string;
	children: ReactNode;
	className?: string;
};

export function SectionTitle({
	accent,
	children,
	className = "",
}: SectionTitleProps) {
	return (
		<h2
			className={`text-[clamp(42px,5.1vw,76px)] font-semibold leading-[0.92] tracking-[-0.066em] ${className}`}
		>
			{children}
			{accent ? (
				<span className="mt-2 block font-display text-[0.48em] font-normal leading-[1.28] tracking-[-0.035em] text-dl-blue">
					{accent}
				</span>
			) : null}
		</h2>
	);
}
