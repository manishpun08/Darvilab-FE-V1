import type { Metadata } from "next";
import {
	Audiowide,
	JetBrains_Mono,
	Space_Grotesk,
	Urbanist,
} from "next/font/google";
import { ClientShell } from "@/components/shared/ClientShell";
import { SITE_DESCRIPTION, SITE_NAME, SITE_OG_IMAGE, SITE_URL } from "@/lib/site";
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

const siteName = SITE_NAME;

export const metadata: Metadata = {
	title: {
		default: `Home — ${siteName}`,
		template: `%s — ${siteName}`,
	},
	description: SITE_DESCRIPTION,
	metadataBase: new URL(SITE_URL),
	openGraph: {
		siteName,
		type: "website",
		url: SITE_URL,
		title: `Home — ${siteName}`,
		description: SITE_DESCRIPTION,
		images: [{ url: SITE_OG_IMAGE }],
	},
	twitter: {
		card: "summary_large_image",
		title: `Home — ${siteName}`,
		description: SITE_DESCRIPTION,
		images: [{ url: SITE_OG_IMAGE }],
	},
	robots: {
		index: true,
		follow: true,
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
