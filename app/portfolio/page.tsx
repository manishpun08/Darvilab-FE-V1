import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";
import { PortfolioPageContent } from "../work/PortfolioPageContent";

export const metadata: Metadata = {
	title: "Portfolio",
	description:
		"DarviLabs portfolio - seven client systems documented through the problem, the decision, and the measured outcome.",
	openGraph: {
		title: `Portfolio — ${SITE_NAME}`,
		description:
			"DarviLabs portfolio - seven client systems documented through the problem, the decision, and the measured outcome.",
	},
	twitter: {
		title: `Portfolio — ${SITE_NAME}`,
		description:
			"DarviLabs portfolio - seven client systems documented through the problem, the decision, and the measured outcome.",
	},
};

export default function Page() {
	return <PortfolioPageContent />;
}
