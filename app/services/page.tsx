import type { Metadata } from "next";
import { HomeFooter } from "@/components/shared/HomeFooter";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
	title: "Services",
	description:
		"DarviLabs services - product design, engineering, and system capabilities.",
	openGraph: {
		title: `Services — ${SITE_NAME}`,
		description:
			"DarviLabs services - product design, engineering, and system capabilities.",
	},
	twitter: {
		title: `Services — ${SITE_NAME}`,
		description:
			"DarviLabs services - product design, engineering, and system capabilities.",
	},
};

export default function Page() {
	return (
		<div className="min-h-screen bg-paper text-ink">
			<div className="min-h-screen pt-[72px]" />
			<HomeFooter />
		</div>
	);
}
