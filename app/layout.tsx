import type { Metadata } from "next";
import {
	Audiowide,
	JetBrains_Mono,
	Space_Grotesk,
	Urbanist,
} from "next/font/google";
import { ClientShell } from "@/components/shared/ClientShell";
import "./globals.css";

const urbanist = Urbanist({
	variable: "--font-urbanist",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

const audiowide = Audiowide({
	variable: "--font-audiowide",
	subsets: ["latin"],
	weight: ["400"],
});

const spaceGrotesk = Space_Grotesk({
	variable: "--font-space-grotesk",
	subsets: ["latin"],
	weight: ["500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

const siteName = "DarviLabs";

export const metadata: Metadata = {
	title: {
		default: `Home — ${siteName}`,
		template: `%s — ${siteName}`,
	},
	description:
		"DarviLabs builds product design, engineering, and systems that hold up after launch.",
	metadataBase: new URL("https://darvilabs.com"),
	openGraph: {
		siteName,
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${urbanist.variable} ${audiowide.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
		>
			<body suppressHydrationWarning>
				<ClientShell>{children}</ClientShell>
			</body>
		</html>
	);
}
