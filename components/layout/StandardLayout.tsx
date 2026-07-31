"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { SiteHeader } from "../shared/SiteHeader";

const routes = {
	home: "/",
	about: "/about",
	process: "/process",
	services: "/services",
	blogs: "/blogs",
	portfolio: "/portfolio",
	work: "/work",
};

function getRouteKey(pathname: string): string | null {
	if (pathname === routes.home) return "home";
	if (pathname.startsWith(routes.about)) return "about";
	if (pathname.startsWith(routes.process)) return "process";
	if (pathname.startsWith(routes.services)) return "services";
	if (pathname.startsWith(routes.blogs)) return "blogs";
	if (pathname.startsWith(routes.portfolio) || pathname.startsWith(routes.work))
		return "portfolio";
	return null;
}

type StandardLayoutProps = {
	children: ReactNode;
};

export function StandardLayout({ children }: StandardLayoutProps) {
	const pathname = usePathname();
	const routeKey = getRouteKey(pathname);

	return (
		<>
			<SiteHeader
				currentRoute={routeKey}
				defaultServicesOpen={pathname === routes.services}
				key={pathname}
			/>
			{children}
		</>
	);
}
