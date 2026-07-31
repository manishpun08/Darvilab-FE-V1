"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

interface AccordionPanelProps {
	isOpen: boolean;
	reducedMotion: boolean;
	children: ReactNode;
}

export function AccordionPanel({
	isOpen,
	reducedMotion,
	children,
}: AccordionPanelProps) {
	const innerRef = useRef<HTMLDivElement | null>(null);
	const [contentHeight, setContentHeight] = useState(0);

	useEffect(() => {
		if (!innerRef.current) {
			return undefined;
		}

		const measure = () => {
			if (!innerRef.current) return;
			setContentHeight(innerRef.current.scrollHeight);
		};
		measure();

		if (typeof ResizeObserver === "undefined") {
			return undefined;
		}

		const observer = new ResizeObserver(measure);
		observer.observe(innerRef.current);

		return () => observer.disconnect();
	}, []);

	return (
		<div
			aria-hidden={!isOpen}
			className="overflow-hidden"
			style={{
				maxHeight: isOpen ? `${contentHeight}px` : "0px",
				transition: reducedMotion
					? "none"
					: "max-height 420ms cubic-bezier(0.22, 1, 0.36, 1)",
			}}
		>
			<div ref={innerRef}>{children}</div>
		</div>
	);
}
