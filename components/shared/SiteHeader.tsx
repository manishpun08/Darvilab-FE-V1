"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useHeaderVisibility } from "../../hooks/useHeaderVisibility";
import { shell } from "../../lib/classes";
import { BrandMark } from "./BrandMark";
import { Icon } from "./Icons";
import { ServicesOverlay } from "./ServicesOverlay";

const routes = {
	home: "/",
	contact: "/contact",
};

const navRoutes = [
	{ href: routes.home, key: "home", label: "Home" },
	{ href: "/services", key: "services", label: "Services" },
	{ href: "/portfolio", key: "portfolio", label: "Portfolio" },
	{ href: "/about", key: "about", label: "About Us" },
	{ href: "/process", key: "process", label: "Our Process" },
];

type SiteHeaderProps = {
	currentRoute?: string | null;
	defaultServicesOpen?: boolean;
	showContactCta?: boolean;
};

export function SiteHeader({
	currentRoute,
	defaultServicesOpen = false,
	showContactCta = true,
}: SiteHeaderProps) {
	const [open, setOpen] = useState(false);
	const [servicesOpen, setServicesOpen] = useState(defaultServicesOpen);
	const toggleRef = useRef<HTMLButtonElement | null>(null);
	const mobileNavRef = useRef<HTMLElement | null>(null);
	const servicesTriggerRef = useRef<HTMLElement | null>(null);
	const { isVisible, hasScrolled } = useHeaderVisibility({
		locked: open || servicesOpen,
	});
	const pathname = usePathname();
	const activeNavKey = navRoutes.find((r) => isActive(r.href))?.key ?? "home";

	useEffect(() => {
		document.body.classList.toggle("overflow-hidden", open || servicesOpen);
		return () => document.body.classList.remove("overflow-hidden");
	}, [open, servicesOpen]);

	useEffect(() => {
		if (!open) {
			return undefined;
		}

		function onKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				setOpen(false);
			}
		}

		window.addEventListener("keydown", onKeyDown);
		mobileNavRef.current?.querySelector<HTMLElement>("a, button")?.focus();

		return () => {
			window.removeEventListener("keydown", onKeyDown);
			toggleRef.current?.focus();
		};
	}, [open]);

	useEffect(() => {
		function onOpenServices() {
			setServicesOpen(true);
		}
		window.addEventListener("open-services-overlay", onOpenServices);
		return () =>
			window.removeEventListener("open-services-overlay", onOpenServices);
	}, []);

	useEffect(() => {
		if (servicesOpen) {
			servicesTriggerRef.current = document.activeElement as HTMLElement | null;
		}
	}, [servicesOpen]);

	const surfaceBase = "border-[rgba(255,255,255,0.12)] bg-[rgba(5,11,31,0.55)]";
	const surfaceGlass = hasScrolled
		? "bg-white/28 supports-[backdrop-filter]:bg-white/22 border border-white/30 shadow-[0_10px_28px_rgba(15,23,42,0.08)] before:absolute before:inset-0 before:rounded-inherit before:bg-[linear-gradient(180deg,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0.16)_38%,rgba(255,255,255,0.04)_100%)] before:pointer-events-none after:absolute after:inset-x-[10%] after:top-0 after:h-px after:bg-white/45 after:blur-[0.5px] after:pointer-events-none"
		: "";
	const contentTone = hasScrolled ? "text-ink" : "text-white";

	function isActive(itemHref: string) {
		if (itemHref === routes.home) {
			return pathname === routes.home;
		}
		return pathname.startsWith(itemHref);
	}

	function handleLinkClick(e: React.MouseEvent<HTMLAnchorElement>, href: string, closeMobileNav = false) {
		if (closeMobileNav) {
			setOpen(false);
		}
		
		if (pathname === href) {
			e.preventDefault();
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}

	return (
		<>
			<a className="skip-link" href="#main-content">
				Skip to content
			</a>
			<header
				className={`fixed inset-x-0 top-0 z-50 h-[72px] transition-transform duration-[400ms] will-change-transform ${isVisible ? "translate-y-0 ease-[cubic-bezier(0,0,0.2,1)]" : "-translate-y-full ease-[cubic-bezier(0.4,0,1,1)]"}`}
			>
				<div
					aria-hidden="true"
					className={`pointer-events-none absolute inset-0 z-0 transition-[background-color,border-color,box-shadow] duration-[400ms] ${hasScrolled ? "backdrop-blur-sm supports-[backdrop-filter]:backdrop-saturate-150" : ""} ${servicesOpen ? "border-b-transparent" : "border-b"} ${surfaceBase} ${surfaceGlass}`}
				/>
				<div
					className={`${shell} relative z-10 grid h-full grid-cols-[1fr_auto_1fr] items-center max-md:grid-cols-[1fr_auto] ${contentTone}`}
				>
					<Link
						className="inline-flex w-fit items-center gap-2 text-[16px] font-semibold tracking-[-0.03em]"
						href={routes.home}
						onClick={(e) => handleLinkClick(e, routes.home)}
					>
						<BrandMark />
						<span>Darvi Lab<span style={{color:'#2600FF'}}>.</span></span>
					</Link>
					<nav
						className="flex items-center gap-8 max-md:hidden"
						aria-label="Primary navigation"
					>
						{navRoutes.map((item) =>
							item.key === "services" ? (
								<button
									className={`relative grid min-h-11 place-items-center text-[12px] font-semibold after:absolute after:bottom-[7px] after:left-0 after:right-0 after:h-px after:origin-center after:bg-current after:transition ${
										item.key === activeNavKey
											? `${hasScrolled ? "text-dl-blue " : ""}after:scale-x-100 after:opacity-100`
											: "after:scale-x-[0.3] after:opacity-0 hover:after:scale-x-100 hover:after:opacity-100"
									}`}
									key={item.key}
									onClick={() => setServicesOpen(true)}
									type="button"
								>
									{item.label}
								</button>
							) : (
								<Link
									className={`relative grid min-h-11 place-items-center text-[12px] font-semibold after:absolute after:bottom-[7px] after:left-0 after:right-0 after:h-px after:origin-center after:bg-current after:transition ${
										isActive(item.href)
											? `${hasScrolled ? "text-dl-blue " : ""}after:scale-x-100 after:opacity-100`
											: "after:scale-x-[0.3] after:opacity-0 hover:after:scale-x-100 hover:after:opacity-100"
									}`}
									key={item.key}
									href={item.href}
									onClick={(e) => handleLinkClick(e, item.href)}
								>
									{item.label}
								</Link>
							),
						)}
					</nav>
					{showContactCta ? (
						<Link
							className="justify-self-end rounded-full bg-dl-blue px-5 py-3 text-[11px] font-bold leading-none tracking-[0.03em] text-white transition hover:-translate-y-0.5 hover:bg-[#1800b8] max-md:hidden"
							href={routes.contact}
							onClick={(e) => handleLinkClick(e, routes.contact)}
						>
							Contact Us
						</Link>
					) : (
						<div className="justify-self-end max-md:hidden" />
					)}
					<button
						aria-controls="mobile-nav"
						aria-expanded={open}
						aria-label="Toggle navigation"
						className="hidden h-11 w-11 place-items-center justify-self-end border-0 bg-transparent max-md:grid"
						onClick={() => setOpen((value) => !value)}
						ref={toggleRef}
						type="button"
					>
						{open ? <Icon className="h-5 w-5" name="close" /> : <Icon className="h-5 w-5" name="menu" />}
					</button>
				</div>
			</header>

			<nav
				className={`fixed left-4 right-4 top-[72px] z-40 grid overflow-hidden border border-line bg-white/95 shadow-[0_20px_40px_rgba(10,10,20,0.08)] backdrop-blur-xl transition md:hidden ${
					open
						? "translate-y-0 opacity-100"
						: "pointer-events-none -translate-y-2 opacity-0"
				}`}
				id="mobile-nav"
				ref={mobileNavRef}
			>
				{navRoutes.map((item) =>
					item.key === "services" ? (
						<button
							className={`border-b border-line px-5 py-4 text-left text-[13px] font-medium last:border-b-0 ${
								item.key === activeNavKey ? "text-dl-blue" : ""
							}`}
							key={item.key}
							onClick={() => {
								setOpen(false);
								setServicesOpen(true);
							}}
							type="button"
						>
							{item.label}
						</button>
					) : (
						<Link
							className={`border-b border-line px-5 py-4 text-[13px] font-medium last:border-b-0 ${
								isActive(item.href) ? "text-dl-blue" : ""
							}`}
							key={item.key}
							onClick={(e) => handleLinkClick(e, item.href, true)}
							href={item.href}
						>
							{item.label}
						</Link>
					),
				)}
				{showContactCta ? (
					<Link
						className="px-5 py-4 text-[13px] font-medium text-dl-blue"
						onClick={(e) => handleLinkClick(e, routes.contact, true)}
						href={routes.contact}
					>
						Contact Us
					</Link>
				) : null}
			</nav>

			<ServicesOverlay
				focusReturnRef={servicesTriggerRef}
				onClose={() => setServicesOpen(false)}
				open={servicesOpen}
			/>
		</>
	);
}
