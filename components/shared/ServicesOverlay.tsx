"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "./Icons";
import { SmartLink } from "./SmartLink";

const routes = {
	home: "/",
	services: "/services",
};

function getServicePath(id: string): string {
	return `/services/${id}`;
}

type ServiceItem = {
	name: string;
	copy: string;
	href: string | null;
	key: string;
};

const services: ServiceItem[] = [
	{
		name: "Web Application Development",
		copy: "Scalable web systems built for real business workflows",
		href: getServicePath("web-application-development"),
		key: "web",
	},
	{
		name: "Mobile App Development",
		copy: "Native and cross-platform apps that users actually return to",
		href: getServicePath("mobile-app-development"),
		key: "mobile",
	},
	{
		name: "Product Design",
		copy: "Interfaces designed around user decisions, not design trends",
		href: getServicePath("product-design"),
		key: "design",
	},
	{
		name: "AI & ML Engineering",
		copy: "Custom models that replace repetitive decisions with reliable automation",
		href: getServicePath("ai-ml-engineering"),
		key: "ai",
	},
	{
		name: "Cloud & DevOps",
		copy: "Infrastructure that scales without requiring your attention",
		href: getServicePath("cloud-devops"),
		key: "cloud",
	},
];

type ServiceCardProps = {
	item: ServiceItem;
	className?: string;
	currentPath: string;
	onClose: () => void;
};

function ServiceCard({
	item,
	className = "",
	currentPath,
	onClose,
}: ServiceCardProps) {
	const isCurrentPage = item.href === currentPath;

	if (isCurrentPage) {
		return (
			<button
				className={`group relative flex min-h-[208px] w-full flex-col px-8 py-9 text-left text-white/84 transition duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-dl-blue hover:text-white motion-reduce:transition-none ${className}`}
				onClick={onClose}
				type="button"
			>
				<span className="absolute left-8 top-0 h-px w-0 bg-[rgba(38,0,255,0.68)] transition-all duration-200 group-hover:w-8" />
				<div className="text-white/88 transition duration-200 group-hover:text-white">
					<Icon name={item.key} />
				</div>
				<h3 className="mt-10 max-w-[16ch] text-[clamp(1.55rem,2vw,2rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-white">
					{item.name}
				</h3>
				<p className="mt-4 max-w-[28ch] text-[14px] leading-[1.72] text-white/66 transition duration-200 group-hover:text-white">
					{item.copy}
				</p>
			</button>
		);
	}

	const Tag = item.href ? SmartLink : "article";

	return (
		<Tag
			className={`group relative flex min-h-[208px] flex-col px-8 py-9 text-white/84 transition duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-dl-blue hover:text-white motion-reduce:transition-none ${
				item.href
					? "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
					: ""
			} ${className}`}
			href={item.href || undefined}
			onClick={onClose}
		>
			<span className="absolute left-8 top-0 h-px w-0 bg-[rgba(38,0,255,0.68)] transition-all duration-200 group-hover:w-8" />
			<div className="text-white/88 transition duration-200 group-hover:text-white">
				<Icon name={item.key} />
			</div>
			<h3 className="mt-10 max-w-[16ch] text-[clamp(1.55rem,2vw,2rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-white">
				{item.name}
			</h3>
			<p className="mt-4 max-w-[28ch] text-[14px] leading-[1.72] text-white/66 transition duration-200 group-hover:text-white">
				{item.copy}
			</p>
		</Tag>
	);
}

type ServicesOverlayProps = {
	open: boolean;
	onClose: () => void;
	topOffset?: number;
};

export function ServicesOverlay({
	open,
	onClose,
	topOffset = 72,
}: ServicesOverlayProps) {
	const pathname = usePathname();

	useEffect(() => {
		if (!open) {
			return undefined;
		}

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose();
			}
		};

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [onClose, open]);

	return (
		<div
			aria-hidden={!open}
			className={`fixed inset-0 z-[45] transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
				open
					? "pointer-events-auto opacity-100"
					: "pointer-events-none opacity-0"
			}`}
			style={{ top: `${topOffset}px` }}
		>
			<button
				aria-label="Close services overlay"
				className="absolute inset-0 bg-[rgba(7,16,43,0.12)] backdrop-blur-[10px]"
				onClick={onClose}
				type="button"
			/>

			<section
				aria-label="DarviLabs services"
				className={`absolute inset-0 overflow-hidden bg-[rgba(255,255,255,0.035)] backdrop-blur-[12px] transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
					open ? "translate-y-0 scale-100" : "translate-y-3 scale-[0.985]"
				}`}
			>
				<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,26,69,0.32),rgba(28,91,255,0.08)_62%,rgba(247,247,249,0.04)_100%)]" />
				<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(183,217,255,0.1),transparent_36%),radial-gradient(circle_at_50%_76%,rgba(255,255,255,0.06),transparent_42%)]" />

				<div className="relative flex h-full flex-col overflow-hidden max-lg:overflow-y-auto">
					<div className="flex items-start justify-end px-5 pt-5 sm:px-8 sm:pt-8">
						<button
							aria-label="Close services overlay"
							className="grid h-12 w-12 place-items-center rounded-full bg-white/[0.08] text-white/90 transition hover:bg-white/[0.14] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
							onClick={onClose}
							type="button"
						>
							<span className="block translate-y-[-1px] text-[30px] leading-[1]">
								×
							</span>
						</button>
					</div>

					<div className="mx-auto flex w-full max-w-[1360px] flex-1 flex-col px-4 pb-6 pt-2 sm:px-8 sm:pb-8 lg:px-10">
						<div className="hidden flex-1 lg:flex lg:flex-col">
							<div className="grid flex-1 grid-cols-6 grid-rows-[1fr_1fr]">
								<ServiceCard
									className="col-span-2 border-b border-r border-white/14"
									currentPath={pathname}
									item={services[0]}
									onClose={onClose}
								/>
								<ServiceCard
									className="col-span-2 border-b border-r border-white/14"
									currentPath={pathname}
									item={services[1]}
									onClose={onClose}
								/>
								<ServiceCard
									className="col-span-2 border-b border-white/14"
									currentPath={pathname}
									item={services[2]}
									onClose={onClose}
								/>
								<ServiceCard
									className="col-span-2 col-start-2 border-r border-white/14"
									currentPath={pathname}
									item={services[3]}
									onClose={onClose}
								/>
								<ServiceCard
									className="col-span-2 col-start-4"
									currentPath={pathname}
									item={services[4]}
									onClose={onClose}
								/>
							</div>
						</div>

						<div className="grid gap-0 lg:hidden">
							{services.map((item, index) => (
								<ServiceCard
									className={`${index > 0 ? "border-t border-white/14" : ""}`}
									currentPath={pathname}
									item={item}
									key={item.name}
									onClose={onClose}
								/>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
