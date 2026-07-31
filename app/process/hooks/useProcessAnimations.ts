"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/hooks/useRevealMotion";

gsap.registerPlugin(ScrollTrigger);

export function useProcessPageAnimations({
	closeAccordion,
}: { closeAccordion?: () => void } = {}) {
	const reducedMotion = usePrefersReducedMotion();
	const closeRef = useRef(closeAccordion);
	closeRef.current = closeAccordion;

	useEffect(() => {
		if (reducedMotion) return;

		const ctx = gsap.context(() => {
			openingEntrance();
			observeSection("[data-animate-timeline]", animateTimeline);
			observeSection("[data-animate-breakdown]", animateBreakdown);
			observeSection("[data-animate-responsibilities]", animateResponsibilities);
			observeSection("[data-animate-change]", animateChange);
			observeSection("[data-animate-sync]", animateSync);

			ScrollTrigger.refresh();
		});

		return () => ctx.revert();
	}, [reducedMotion]);
}

function observeSection(
	selector: string,
	animate: (section: HTMLElement) => void,
) {
	const section = document.querySelector<HTMLElement>(selector);
	if (!section) return;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					animate(section);
					observer.disconnect();
				}
			});
		},
		{ threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
	);

	observer.observe(section);
}

/* ───── Opening Entrance ─────────────────────────────────────────── */

function openingEntrance() {
	const hero = document.querySelector<HTMLElement>("[data-animate-hero]");
	if (!hero) return;

	const tagline = hero.querySelector("[data-animate-tagline]");
	const heading = hero.querySelector("h1");
	const desc = hero.querySelector("[data-animate-desc]");
	const cards = hero.querySelectorAll("[data-animate-card]");
	const asideLeft = hero.querySelector("[data-animate-aside-left]");
	const asideRight = hero.querySelector("[data-animate-aside-right]");
	const asideLarge = asideRight?.querySelector("h2");

	const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

	if (tagline) {
		gsap.set(tagline, { opacity: 0, y: -12 });
		tl.to(tagline, { opacity: 1, y: 0, duration: 0.5 });
	}

	if (heading) {
		const lines = heading.querySelectorAll("[data-hero-line]");
		lines.forEach((line) => {
			gsap.set(line, { opacity: 0, y: 80, filter: "blur(15px)" });
		});
		lines.forEach((line) => {
			tl.to(line, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7 }, "-=0.2");
		});
	}

	if (desc) {
		gsap.set(desc, { opacity: 0, y: 30 });
		tl.to(desc, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5");
	}

	if (cards.length) {
		cards.forEach((card) => {
			gsap.set(card, { opacity: 0, y: 20 });
		});
		cards.forEach((card) => {
			tl.to(card, { opacity: 1, y: 0, duration: 0.5 }, "-=0.15");
		});
	}

	if (asideLeft) {
		gsap.set(asideLeft, { opacity: 0, y: 12 });
		tl.to(asideLeft, { opacity: 1, y: 0, duration: 0.45 }, "-=0.2");
	}

	if (asideLarge) {
		gsap.set(asideLarge, { opacity: 0, scale: 0.3, rotate: -12 });
		tl.to(asideLarge, {
			opacity: 1,
			scale: 1,
			rotate: 0,
			duration: 1.4,
			ease: "elastic.out(1, 0.5)",
		}, "-=0.6");
	}

	if (asideRight) {
		gsap.set(asideRight, { opacity: 0, y: 12 });
		tl.to(asideRight, { opacity: 1, y: 0, duration: 0.45 }, "-=0.2");
	}
}

/* ───── Timeline ──────────────────────────────────────────────────── */

function animateTimeline(section: HTMLElement) {
	const title = section.querySelector("[data-animate-title]");
	const body = section.querySelector("[data-animate-body]");
	const connector = section.querySelector("[data-animate-connector]");
	const cards = section.querySelectorAll("[data-animate-phase], [data-animate-phase-mobile]");

	const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

	if (title) {
		gsap.set(title, { opacity: 0, y: 20 });
		tl.to(title, { opacity: 1, y: 0, duration: 0.5 });
	}
	if (body) {
		gsap.set(body, { opacity: 0, y: 16 });
		tl.to(body, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");
	}
	if (connector) {
		gsap.set(connector, { scaleX: 0, transformOrigin: "left center" });
		tl.to(connector, { scaleX: 1, duration: 0.5 }, "-=0.2");
	}
	if (cards.length) {
		gsap.set(cards, { opacity: 0, y: 20 });
		tl.to(cards, { opacity: 1, y: 0, stagger: 0.08, duration: 0.45 }, "-=0.15");
	}
}

/* ───── Phase Breakdown ───────────────────────────────────────────── */

function animateBreakdown(section: HTMLElement) {
	const title = section.querySelector("[data-animate-title]");
	const body = section.querySelector("[data-animate-body]");
	const items = section.querySelectorAll("[data-animate-item]");

	const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

	if (title) {
		gsap.set(title, { opacity: 0, y: 20 });
		tl.to(title, { opacity: 1, y: 0, duration: 0.5 });
	}
	if (body) {
		gsap.set(body, { opacity: 0, y: 16 });
		tl.to(body, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");
	}
	if (items.length) {
		gsap.set(items, { opacity: 0, y: 24 });
		tl.to(items, { opacity: 1, y: 0, stagger: 0.06, duration: 0.4 }, "-=0.2");
	}
}

/* ───── Responsibilities ──────────────────────────────────────────── */

function animateResponsibilities(section: HTMLElement) {
	const title = section.querySelector("[data-animate-title]");
	const body = section.querySelector("[data-animate-body]");
	const items = section.querySelectorAll("[data-animate-item]");

	const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

	if (title) {
		gsap.set(title, { opacity: 0, y: 20 });
		tl.to(title, { opacity: 1, y: 0, duration: 0.5 });
	}
	if (body) {
		gsap.set(body, { opacity: 0, y: 16 });
		tl.to(body, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");
	}
	if (items.length) {
		gsap.set(items, { opacity: 0, y: 24 });
		tl.to(items, { opacity: 1, y: 0, stagger: 0.06, duration: 0.4 }, "-=0.2");
	}
}

/* ───── Change ────────────────────────────────────────────────────── */

function animateChange(section: HTMLElement) {
	const title = section.querySelector("[data-animate-title]");
	const body = section.querySelector("[data-animate-body]");
	const items = section.querySelectorAll("[data-animate-item]");

	const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

	if (title) {
		gsap.set(title, { opacity: 0, y: 20 });
		tl.to(title, { opacity: 1, y: 0, duration: 0.5 });
	}
	if (body) {
		gsap.set(body, { opacity: 0, y: 16 });
		tl.to(body, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");
	}
	if (items.length) {
		gsap.set(items, { opacity: 0, y: 24 });
		tl.to(items, { opacity: 1, y: 0, stagger: 0.06, duration: 0.4 }, "-=0.2");
	}
}

/* ───── Sync ──────────────────────────────────────────────────────── */

function animateSync(section: HTMLElement) {
	const title = section.querySelector("[data-animate-title]");
	const body = section.querySelector("[data-animate-body]");
	const items = section.querySelectorAll("[data-animate-item]");

	const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

	if (title) {
		gsap.set(title, { opacity: 0, y: 20 });
		tl.to(title, { opacity: 1, y: 0, duration: 0.5 });
	}
	if (body) {
		gsap.set(body, { opacity: 0, y: 16 });
		tl.to(body, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");
	}
	if (items.length) {
		gsap.set(items, { opacity: 0, y: 20 });
		tl.to(items, { opacity: 1, y: 0, stagger: 0.08, duration: 0.45 }, "-=0.2");
	}
}
