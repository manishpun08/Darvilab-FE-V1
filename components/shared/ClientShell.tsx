"use client";

import { usePathname } from "next/navigation";
import { useLenis } from "@/hooks/useFrameScroll";
import { SiteHeader } from "./SiteHeader";
import { WhatsAppChat } from "./WhatsAppChat";

export function ClientShell({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	useLenis();

	return (
		<>
			<SiteHeader key={pathname} />
			<main id="main-content">{children}</main>
			<WhatsAppChat />
		</>
	);
}
