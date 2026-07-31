import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";
import { HomePageContent } from "./partials/HomePageContent";

export const metadata: Metadata = {
	title: `Home — ${SITE_NAME}`,
	description: SITE_DESCRIPTION,
	openGraph: {
		title: `Home — ${SITE_NAME}`,
		description: SITE_DESCRIPTION,
	},
	twitter: {
		title: `Home — ${SITE_NAME}`,
		description: SITE_DESCRIPTION,
	},
};

export default function Page() {
	return <HomePageContent />;
}
