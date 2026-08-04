"use client";

import { type ReactNode } from "react";

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
	return (
		<div
			aria-hidden={!isOpen}
			className="grid overflow-hidden motion-reduce:transition-none"
			data-phase-panel
			style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
		>
			<div className="overflow-hidden" data-phase-panel-content>
				{children}
			</div>
		</div>
	);
}
