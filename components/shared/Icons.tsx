type IconProps = {
	className?: string;
	name: string;
};

export function Icon({ className = "h-9 w-9", name }: IconProps) {
	const common = {
		fill: "none" as const,
		stroke: "currentColor" as const,
		strokeLinecap: "round" as const,
		strokeLinejoin: "round" as const,
		strokeWidth: "1.8" as const,
	};

	if (name === "mobile") {
		return (
			<svg aria-hidden="true" className={className} viewBox="0 0 32 32">
				<rect height="22" rx="5" width="14" x="9" y="5" {...common} />
				<path d="M14 9h4" {...common} />
				<circle cx="16" cy="23" fill="currentColor" r="1.2" />
			</svg>
		);
	}

	if (name === "design") {
		return (
			<svg aria-hidden="true" className={className} viewBox="0 0 32 32">
				<circle cx="16" cy="16" r="11" {...common} />
				<circle cx="11" cy="11" r="2.2" {...common} />
				<circle cx="20.6" cy="10.6" r="2.2" {...common} />
				<circle cx="22" cy="18" r="2.2" {...common} />
				<path d="M10.8 21.6c2.1 1.4 4.6 2.1 7.2 2.1" {...common} />
			</svg>
		);
	}

	if (name === "ai") {
		return (
			<svg aria-hidden="true" className={className} viewBox="0 0 32 32">
				<circle cx="16" cy="16" r="4.8" {...common} />
				<path
					d="M16 4.8v4.2M16 23v4.2M4.8 16H9M23 16h4.2M8 8l3 3M21 21l3 3M24 8l-3 3M11 21l-3 3"
					{...common}
				/>
			</svg>
		);
	}

	if (name === "cloud") {
		return (
			<svg aria-hidden="true" className={className} viewBox="0 0 32 32">
				<path
					d="M10.4 23.8h12c3 0 5.4-2.2 5.4-5.1 0-2.7-2-4.8-4.7-5-1.1-3.5-4.1-5.5-7.3-5.5-4.2 0-7.6 3.3-7.6 7.5v.6c-2.4.5-4.1 2.4-4.1 4.8 0 2.9 2.6 4.7 6.3 4.7Z"
					{...common}
				/>
			</svg>
		);
	}

	if (name === "systems") {
		return (
			<svg aria-hidden="true" className={className} viewBox="0 0 32 32">
				<path d="M6 10h20M6 16h20M6 22h20" {...common} />
				<rect height="4" rx="1.5" width="8" x="10" y="8" {...common} />
				<rect height="4" rx="1.5" width="12" x="8" y="14" {...common} />
				<rect height="4" rx="1.5" width="10" x="11" y="20" {...common} />
			</svg>
		);
	}

	if (name === "menu") {
		return (
			<svg aria-hidden="true" className={className} viewBox="0 0 32 32">
				<line x1="6" x2="26" y1="9" y2="9" {...common} />
				<line x1="6" x2="26" y1="16" y2="16" {...common} />
				<line x1="6" x2="26" y1="23" y2="23" {...common} />
			</svg>
		);
	}

	if (name === "close") {
		return (
			<svg aria-hidden="true" className={className} viewBox="0 0 32 32">
				<line x1="8" x2="24" y1="8" y2="24" {...common} />
				<line x1="24" x2="8" y1="8" y2="24" {...common} />
			</svg>
		);
	}

	return (
		<svg aria-hidden="true" className={className} viewBox="0 0 32 32">
			<rect height="14" rx="2.5" width="18" x="7" y="9" {...common} />
			<path d="M12 13.5h8M12 18h5.5M7 23h18" {...common} />
		</svg>
	);
}
