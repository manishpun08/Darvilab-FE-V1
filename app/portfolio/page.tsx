import type { Metadata } from "next";
import { PortfolioPageContent } from "../work/PortfolioPageContent";

export const metadata: Metadata = {
	title: "Portfolio",
};

export default function Page() {
	return <PortfolioPageContent />;
}
