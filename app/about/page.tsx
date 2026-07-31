import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";
import { AboutPageContent } from "./partials/AboutPageContent";

export const metadata: Metadata = {
	title: "About Us",
	description:
		"DarviLabs - a product design and engineering studio that builds systems meant to hold up after launch.",
	openGraph: {
		title: `About Us — ${SITE_NAME}`,
		description:
			"DarviLabs - a product design and engineering studio that builds systems meant to hold up after launch.",
	},
	twitter: {
		title: `About Us — ${SITE_NAME}`,
		description:
			"DarviLabs - a product design and engineering studio that builds systems meant to hold up after launch.",
	},
};

export default function Page() {
	return <AboutPageContent />;
}
