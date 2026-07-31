"use client";

import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

function isInternalHref(href: string) {
	return (
		typeof href === "string" &&
		(href.startsWith("/") || href.startsWith("#")) &&
		!href.startsWith("//")
	);
}

type SmartLinkProps = {
	children: ReactNode;
	href?: string;
	to?: string;
	className?: string;
	style?: CSSProperties & Record<string, string | number | undefined>;
	"aria-label"?: string;
	onClick?: () => void;
};

export function SmartLink({ children, href, to, ...props }: SmartLinkProps) {
	const target = to || href || "";

	if (isInternalHref(target) && !target.startsWith("#")) {
		return (
			<Link href={target} {...props}>
				{children}
			</Link>
		);
	}

	return (
		<a href={target} {...props}>
			{children}
		</a>
	);
}
