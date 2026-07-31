import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";
import { ContactPageContent } from "./partials/ContactPageContent";

export const metadata: Metadata = {
	title: "Contact Us",
	description:
		"Start a conversation with DarviLabs about product design, engineering, or systems that hold up after launch.",
	openGraph: {
		title: `Contact Us — ${SITE_NAME}`,
		description:
			"Start a conversation with DarviLabs about product design, engineering, or systems that hold up after launch.",
	},
	twitter: {
		title: `Contact Us — ${SITE_NAME}`,
		description:
			"Start a conversation with DarviLabs about product design, engineering, or systems that hold up after launch.",
	},
};

export default function Page() {
	return <ContactPageContent />;
}
