import type { ReactNode } from "react";
import { label } from "@/lib/classes";

type Props = {
	children: ReactNode;
	dark?: boolean;
};

export function SectionLabel({ children, dark = false }: Props) {
	return (
		<div
			className={`flex items-center gap-3 ${dark ? "text-white" : "text-ink"}`}
		>
			<i className={`h-px w-16 ${dark ? "bg-white/20" : "bg-[#9fb0c5]"}`} />
			<span className={`${label} ${dark ? "text-white/70" : ""}`}>
				{children}
			</span>
		</div>
	);
}
