import type { Metadata } from "next";
import { BlogsPageContent } from "./partials/BlogsPageContent";

export const metadata: Metadata = {
	title: "Blogs",
	description:
		"DarviLabs blog - service notes, build decisions, and operating lessons from product design, AI, web development, architecture, cloud, and support work.",
	openGraph: {
		title: "Blogs",
		description:
			"DarviLabs blog - service notes, build decisions, and operating lessons from product design, AI, web development, architecture, cloud, and support work.",
	},
	twitter: {
		title: "Blogs",
		description:
			"DarviLabs blog - service notes, build decisions, and operating lessons from product design, AI, web development, architecture, cloud, and support work.",
	},
};

export default function Page() {
	return <BlogsPageContent />;
}
