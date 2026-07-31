import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";
import { PortfolioPageContent } from "./PortfolioPageContent";

export const metadata: Metadata = {
	title: "Work",
	description:
		"DarviLabs portfolio - seven client systems documented through the problem, the decision, and the measured outcome.",
	openGraph: {
		title: `Work — ${SITE_NAME}`,
		description:
			"DarviLabs portfolio - seven client systems documented through the problem, the decision, and the measured outcome.",
	},
	twitter: {
		title: `Work — ${SITE_NAME}`,
		description:
			"DarviLabs portfolio - seven client systems documented through the problem, the decision, and the measured outcome.",
	},
};

export default function Page() {
	return <PortfolioPageContent />;
}
