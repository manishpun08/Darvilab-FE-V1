"use client";

import type { ReactNode } from "react";
import { getRevealStyle, useReveal } from "@/hooks/useRevealMotion";

type Props = {
	children: ReactNode;
	className?: string;
	id?: string;
	sectionRef?: React.Ref<HTMLElement> | null;
	style?: React.CSSProperties;
	threshold?: number;
};

function assignRef(
	ref: React.Ref<HTMLElement> | null | undefined,
	node: HTMLElement | null,
) {
	if (!ref) {
		return;
	}

	if (typeof ref === "function") {
		ref(node);
		return;
	}

	(ref as React.MutableRefObject<HTMLElement | null>).current = node;
}

export function RevealSection({
	children,
	className = "",
	id,
	sectionRef = null,
	style,
	threshold = 0.12,
}: Props) {
	const reveal = useReveal<HTMLElement>({
		threshold,
		rootMargin: "0px 0px -8% 0px",
	});

	const setSectionRef = (node: HTMLElement | null) => {
		reveal.ref.current = node;
		assignRef(sectionRef, node);
	};

	return (
		<section
			className={className}
			id={id}
			ref={setSectionRef}
			style={{
				...style,
				...getRevealStyle({
					visible: reveal.visible,
					reducedMotion: reveal.reducedMotion,
					y: 18,
				}),
			}}
		>
			{children}
		</section>
	);
}
