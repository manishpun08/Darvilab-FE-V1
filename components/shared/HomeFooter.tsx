"use client";

import type { RefObject } from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { useIsLg } from "@/hooks/useIsLg";
import { shell } from "@/lib/classes";
import { SmartLink } from "./SmartLink";

const routes = {
	home: "/",
	about: "/about",
	contact: "/contact",
	services: "/services",
	portfolio: "/portfolio",
};

function getServicePath(id: string): string {
	return `/services/${id}`;
}

const socialLinks = [
	{ label: "Facebook", href: "#", icon: FaFacebook },
	{ label: "Instagram", href: "#", icon: FaInstagram },
	{ label: "LinkedIn", href: "#", icon: FaLinkedinIn },
];

const contactLinks = [
	{
		label: "Dhumbarahi, Kathmandu",
		href: `${routes.contact}#reach-out`,
		icon: FiMapPin,
	},
	{
		label: "info@darvilabs.com",
		href: "mailto:info@darvilabs.com",
		icon: FiMail,
	},
	{ label: "+977-9843263928", href: "tel:+9779843263928", icon: FiPhone },
];

const quickLinks = [
	{ label: "About Us", href: routes.about },
	{ label: "Portfolio", href: routes.portfolio },
	{ label: "Blogs", href: "/blogs" },
	{ label: "Contact Us", href: routes.contact },
];

const serviceColumns = [
	[
		{ label: "Web Development", href: getServicePath("web-application-development") },
		{ label: "AI & ML Solutions", href: getServicePath("ai-ml-engineering") },
		{ label: "System Architecture", href: getServicePath("system-architecture") },
		{ label: "Cloud Infrastructure", href: getServicePath("cloud-devops") },
	],
	[
		{ label: "Mobile App", href: getServicePath("mobile-app-development") },
		{ label: "Product Design", href: getServicePath("product-design") },
		{ label: "API Integrations", href: getServicePath("api-integrations") },
		{ label: "Ongoing Support", href: getServicePath("ongoing-support") },
	],
];

const footerStars = [
	{ left: "5.5%", top: "58%", size: 2, opacity: 0.6 },
	{ left: "7.7%", top: "93%", size: 2.4, opacity: 0.78, glow: 8 },
	{ left: "10.4%", top: "28%", size: 1.7, opacity: 0.45 },
	{ left: "12.7%", top: "78%", size: 2.2, opacity: 0.62 },
	{ left: "16.8%", top: "40%", size: 1.9, opacity: 0.5 },
	{ left: "21.4%", top: "70%", size: 1.8, opacity: 0.48 },
	{ left: "26.9%", top: "18%", size: 2, opacity: 0.56 },
	{ left: "31.8%", top: "60%", size: 2.2, opacity: 0.72, glow: 8 },
	{ left: "36.9%", top: "86%", size: 1.8, opacity: 0.58 },
	{ left: "43.6%", top: "44%", size: 2.4, opacity: 0.75, glow: 9 },
	{ left: "49.4%", top: "92%", size: 2.1, opacity: 0.62 },
	{ left: "54.8%", top: "50%", size: 1.8, opacity: 0.48 },
	{ left: "61.3%", top: "79%", size: 2, opacity: 0.6 },
	{ left: "67.8%", top: "33%", size: 1.9, opacity: 0.46 },
	{ left: "73.4%", top: "94%", size: 2.2, opacity: 0.68 },
	{ left: "79.6%", top: "52%", size: 2.3, opacity: 0.72, glow: 9 },
	{ left: "85.8%", top: "18%", size: 1.9, opacity: 0.54 },
	{ left: "92.2%", top: "73%", size: 2.2, opacity: 0.68, glow: 7 },
	{ left: "97.2%", top: "45%", size: 1.8, opacity: 0.5 },
];

const footerShell = shell;

function FooterTitle({ children }: { children: React.ReactNode }) {
	return (
		<h3 className="text-[20px] font-extrabold leading-7 tracking-[-0.02em] text-white underline decoration-white underline-offset-[2px]">
			{children}
		</h3>
	);
}

function FooterStarField() {
	return (
		<div
			className="pointer-events-none absolute inset-x-[19%] top-[-26px] h-[112px]"
			aria-hidden="true"
		>
			{footerStars.map(({ left, top, size, opacity, glow }, index) => (
				<span
					className="absolute rounded-full bg-[#d7e3ff]"
					key={`${left}-${top}-${index}`}
					style={{
						left,
						top,
						width: `${size}px`,
						height: `${size}px`,
						opacity,
						boxShadow: glow ? `0 0 ${glow}px rgba(184, 209, 255, 0.7)` : "none",
					}}
				/>
			))}
		</div>
	);
}

type HomeFooterProps = {
	footerRef?: RefObject<HTMLElement | null> | null;
	revealMotionDisabled?: boolean;
	stickyRevealEnabled?: boolean;
};

export function HomeFooter({
	footerRef = null,
	revealMotionDisabled = false,
	stickyRevealEnabled = false,
}: HomeFooterProps) {
	const enableRevealMotion = Boolean(footerRef) && !revealMotionDisabled;
	const isLg = useIsLg();
	const stickyActive = stickyRevealEnabled && isLg;
	const footerDriftStyle = enableRevealMotion && isLg
		? {
				transform: "translate3d(0, var(--home-footer-content-drift-y, 0px), 0)",
				willChange: "transform",
			}
		: undefined;

	return (
		<footer
			className={`overflow-hidden bg-[#000520] text-white ${
				stickyActive ? "sticky bottom-0 z-0" : "relative z-0"
			}`}
			ref={footerRef}
		>
			<div className="relative min-h-full" style={footerDriftStyle}>
				<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#000520_0%,#000f44_93.69%)]" />
				<div className="pointer-events-none absolute inset-x-0 bottom-0 h-[340px] bg-[radial-gradient(circle_at_50%_102%,rgba(64,106,255,0.14),rgba(5,19,88,0)_60%)]" />
				<div className="pointer-events-none absolute inset-x-0 top-[39%] h-[180px] bg-[radial-gradient(ellipse_at_center,rgba(61,104,255,0.06),transparent_70%)]" />
				<div className="relative z-10">
					<div className={`${footerShell} pt-[62px]`}>
						<div className="grid grid-cols-2 gap-x-[clamp(28px,4vw,40px)] gap-y-14 lg:grid-cols-[minmax(300px,1.35fr)_minmax(128px,.62fr)_minmax(104px,.48fr)_minmax(220px,.9fr)] lg:items-start lg:gap-x-[clamp(36px,4vw,64px)]">
							<div className="grid gap-8 max-lg:gap-5">
								<FooterTitle>Services</FooterTitle>
								<div className="grid gap-x-[30px] gap-y-2 sm:grid-cols-2">
									{serviceColumns.map((column, columnIndex) => (
										<div
											className="grid content-start gap-2"
											key={`services-column-${columnIndex}`}
										>
											{column.map(({ href, label }) => (
												<SmartLink
													className="text-[15px] leading-6 text-white transition hover:text-white/72"
													href={href}
													key={label}
												>
													{label}
												</SmartLink>
											))}
										</div>
									))}
								</div>
							</div>

							<div className="grid content-start gap-8 max-lg:gap-5 lg:pt-[2px]">
								<FooterTitle>Quick Links</FooterTitle>
								<div className="grid gap-2">
									{quickLinks.map(({ href, label }) => (
										<SmartLink
											className="text-[15px] leading-6 text-white transition hover:text-white/72"
											href={href}
											key={label}
										>
											{label}
										</SmartLink>
									))}
								</div>
							</div>

							<div className="grid content-start gap-8 max-lg:gap-5 lg:justify-items-start lg:pt-[2px]">
								<FooterTitle>Follow</FooterTitle>
								<div className="flex items-center gap-[14px]">
									{socialLinks.map(({ href, icon: Icon, label }) => (
										<SmartLink
											aria-label={label}
											className="inline-flex h-6 w-6 items-center justify-center text-[20px] text-white transition hover:text-white/72"
											href={href}
											key={label}
										>
											<Icon />
										</SmartLink>
									))}
								</div>
							</div>

							<div className="grid content-start gap-8 max-lg:gap-5 justify-self-start lg:w-full">
								<FooterTitle>Contact Us</FooterTitle>
								<div className="grid gap-2">
									{contactLinks.map(({ href, icon: Icon, label }) => (
										<SmartLink
											className="inline-flex items-start gap-[10px] text-[15px] leading-6 text-white transition hover:text-white/72"
											href={href}
											key={label}
										>
											<Icon className="mt-[4px] shrink-0 text-[15px]" />
											<span>{label}</span>
										</SmartLink>
									))}
								</div>
							</div>
						</div>


					</div>

					<div className="relative z-10 mt-[32px] border-t border-[rgba(126,135,173,0.32)]">
						<FooterStarField />
						<div
							className="relative overflow-hidden"
							style={{
								backgroundImage: "url('/footer.svg')",
								backgroundRepeat: "no-repeat",
								backgroundSize: "cover",
								backgroundPosition: "center bottom",
							}}
						>
							<div className={`${footerShell} relative z-10 py-[18px]`}>
								<p className="text-center text-[15px] font-medium leading-[1.4] text-[#c3c3c3] max-md:text-[12px]">
									© {new Date().getFullYear()} DarviLabs. All rights reserved.
								</p>
							</div>
							<div className="h-[60px] md:h-[80px]" aria-hidden="true" />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
