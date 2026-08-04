"use client";

import { useEffect, useRef, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion(): boolean {
	if (typeof window === "undefined") return false;
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

interface UseFaqAnimationsOptions {
	containerRef: RefObject<HTMLDivElement | null>;
	openIndex: number;
}

export function useFaqAnimations({
	containerRef,
	openIndex,
}: UseFaqAnimationsOptions) {
	const prevOpenIndex = useRef(openIndex);
	const hasRevealed = useRef(false);

	useEffect(() => {
		if (prefersReducedMotion()) {
			hasRevealed.current = true;
			return undefined;
		}

		const container = containerRef.current;
		if (!container) return undefined;

		const items = container.querySelectorAll("[data-faq-item]");
		if (!items.length) return undefined;

		gsap.set(items, { opacity: 0, y: 16, filter: "blur(4px)" });

		const revealTl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				start: "top 85%",
				once: true,
			},
		});

		revealTl.to(items, {
			opacity: 1,
			y: 0,
			filter: "blur(0px)",
			duration: 0.6,
			stagger: 0.06,
			ease: "power2.out",
			onComplete: () => {
				hasRevealed.current = true;
			},
		});

		return () => {
			revealTl.scrollTrigger?.kill();
			revealTl.kill();
		};
	}, [containerRef]);

	useEffect(() => {
		if (!hasRevealed.current || prefersReducedMotion()) {
			prevOpenIndex.current = openIndex;
			return undefined;
		}

		const container = containerRef.current;
		if (!container) return undefined;

		const allItems = container.querySelectorAll("[data-faq-item]");
		const anims: (gsap.core.Tween | gsap.core.Timeline)[] = [];

		allItems.forEach((item, index) => {
			const answerWrapper = item.querySelector("[data-faq-answer-wrapper]");
			const answerContent = item.querySelector("[data-faq-answer-content]");
			const icon = item.querySelector("[data-faq-icon]");
			const number = item.querySelector("[data-faq-number]");
			const isOpen = index === openIndex;
			const wasOpen = index === prevOpenIndex.current;

			if (isOpen === wasOpen) return;

			if (isOpen) {
				gsap.set(answerWrapper, { display: "grid", gridTemplateRows: "0fr" });

				const expandTl = gsap.timeline();

				expandTl.to(answerWrapper, {
					gridTemplateRows: "1fr",
					duration: 0.4,
					ease: "power3.out",
				});

				expandTl.fromTo(
					answerContent,
					{ opacity: 0, y: -8 },
					{ opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
					"-=0.2",
				);

				if (icon) {
					anims.push(
						gsap.to(icon, {
							rotation: 45,
							duration: 0.5,
							ease: "elastic.out(1, 0.5)",
						}),
					);
				}

				if (number) {
					anims.push(
						gsap.to(number, {
							scale: 1.2,
							duration: 0.2,
							ease: "back.out(1.7)",
							yoyo: true,
							repeat: 1,
						}),
					);
				}

				anims.push(expandTl);
			} else if (wasOpen) {
				const collapseTl = gsap.timeline();

				collapseTl.to(answerWrapper, {
					gridTemplateRows: "0fr",
					duration: 0.3,
					ease: "power2.inOut",
				});

				if (icon) {
					anims.push(
						gsap.to(icon, {
							rotation: 0,
							duration: 0.3,
							ease: "power2.out",
						}),
					);
				}

				anims.push(collapseTl);
			}
		});

		prevOpenIndex.current = openIndex;

		return () => {
			anims.forEach((a) => a.kill());
		};
	}, [openIndex, containerRef]);
}
