import type { Metadata } from "next";
import { AboutPageContent } from "./partials/AboutPageContent";

export const metadata: Metadata = {
	title: "About Us",
};

export default function Page() {
	return <AboutPageContent />;
}
