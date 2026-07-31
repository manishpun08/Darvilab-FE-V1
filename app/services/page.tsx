import type { Metadata } from "next";
import { HomeFooter } from "@/components/shared/HomeFooter";
import { SEO } from "@/components/shared/SEO";

export const metadata: Metadata = {
	title: "Services - DarviLabs",
};

export default function Page() {
	return (
		<div className="min-h-screen bg-paper text-ink">
			<SEO
				description="DarviLabs services - product design, engineering, and system capabilities."
				title="Services - DarviLabs"
			/>
			<main className="min-h-screen pt-[72px]" id="main-content" />
			<HomeFooter />
		</div>
	);
}
