import type { Metadata } from "next";
import { PortfolioPageContent } from "./PortfolioPageContent";

export const metadata: Metadata = {
	title: "Portfolio — Work",
};

export default function Page() {
	return <PortfolioPageContent />;
}
