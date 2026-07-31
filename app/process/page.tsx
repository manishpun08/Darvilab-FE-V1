import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";
import { ProcessPageContent } from "./partials/ProcessPageContent";

export const metadata: Metadata = {
	title: "Our Process",
	description:
		"DarviLabs process - a transparent breakdown of every stage, what we do, what we need from you, and what you receive.",
	openGraph: {
		title: `Our Process — ${SITE_NAME}`,
		description:
			"DarviLabs process - a transparent breakdown of every stage, what we do, what we need from you, and what you receive.",
	},
	twitter: {
		title: `Our Process — ${SITE_NAME}`,
		description:
			"DarviLabs process - a transparent breakdown of every stage, what we do, what we need from you, and what you receive.",
	},
};

export default function Page() {
	return <ProcessPageContent />;
}
