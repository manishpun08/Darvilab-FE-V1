"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function usePortfolioHeroReveal(
	containerRef: React.RefObject<HTMLDivElement | null>,
) {
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const heading = el.querySelector("h1");
		const tagline = el.querySelector("[data-hero-tagline]");
		const paragraph = el.querySelector("[data-hero-paragraph]");
		const stats = el.querySelectorAll("[data-hero-stat]");
		const scopeItems = el.querySelectorAll("[data-hero-scope]");
		const bigCounter = el.querySelector("[data-hero-counter]");

		const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

		if (tagline) {
			gsap.set(tagline, { opacity: 0, y: -8 });
			tl.to(tagline, { opacity: 1, y: 0, duration: 0.45 });
		}

		if (heading) {
			const lines = heading.querySelectorAll("[data-hero-line]");
			lines.forEach((line) => {
				gsap.set(line, { opacity: 0, y: 50, filter: "blur(8px)" });
			});
			lines.forEach((line) => {
				tl.to(line, {
					opacity: 1,
					y: 0,
					filter: "blur(0px)",
					duration: 0.55,
				}, "-=0.45");
			});
		}

		if (paragraph) {
			gsap.set(paragraph, { opacity: 0, y: 18 });
			tl.to(paragraph, { opacity: 1, y: 0, duration: 0.5 }, "-=0.35");
		}

		if (scopeItems.length) {
			gsap.set(scopeItems, { opacity: 0, x: -14 });
			tl.to(scopeItems, { opacity: 1, x: 0, duration: 0.3, stagger: 0.03 }, "-=0.3");
		}

		if (stats.length) {
			stats.forEach((stat) => gsap.set(stat, { opacity: 0, y: 14 }));
			stats.forEach((stat) => {
				tl.to(stat, { opacity: 1, y: 0, duration: 0.4 }, "-=0.1");
			});
		}

		if (bigCounter) {
			gsap.set(bigCounter, { opacity: 0, scale: 0.5, rotate: -6 });
			tl.to(bigCounter, {
				opacity: 1,
				scale: 1,
				rotate: 0,
				duration: 0.8,
				ease: "elastic.out(1, 0.5)",
			}, "-=0.5");
		}

	}, [containerRef]);
}

function createObserver(
	el: Element,
	callback: () => void,
	threshold = 0.2,
) {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					callback();
					observer.disconnect();
				}
			});
		},
		{ threshold },
	);
	observer.observe(el);
	return observer;
}

export function useIntroReveal(
	containerRef: React.RefObject<HTMLDivElement | null>,
) {
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const h2 = el.querySelector("h2");
		if (!h2) return;

		const lines = h2.querySelectorAll(":scope > span");
		if (!lines.length) return;

		lines.forEach((line) => {
			gsap.set(line, { opacity: 0, y: 40, filter: "blur(6px)" });
		});

		const observer = createObserver(el, () => {
			const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
			lines.forEach((line) => {
				tl.to(line, {
					opacity: 1, y: 0, filter: "blur(0px)", duration: 0.55,
				}, "-=0.15");
			});
		});

		return () => observer.disconnect();
	}, [containerRef]);
}

export function useStatCounter(
	containerRef: React.RefObject<HTMLDivElement | null>,
) {
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const statEls = el.querySelectorAll<HTMLElement>("[data-counter]");

		statEls.forEach((statEl) => {
			const target = parseInt(statEl.dataset.counter || "0", 10);
			const obj = { val: 0 };

			const observer = createObserver(statEl, () => {
				gsap.to(obj, {
					val: target,
					duration: 2,
					ease: "power2.out",
					onUpdate() {
						statEl.textContent = Math.floor(obj.val).toString();
					},
				});
			}, 0.5);

			return () => observer.disconnect();
		});
	}, [containerRef]);
}

export function useEvidenceRowReveal(
	containerRef: React.RefObject<HTMLDivElement | null>,
) {
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const rows = Array.from(el.querySelectorAll("[data-evidence-row]"));
		if (!rows.length) return;

		rows.forEach((row) => {
			gsap.set(row, { opacity: 0, x: -40, filter: "blur(4px)" });
		});

		const observers: IntersectionObserver[] = [];

		rows.forEach((row) => {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							gsap.to(row, {
								opacity: 1,
								x: 0,
								filter: "blur(0px)",
								duration: 1.0,
								ease: "power2.out",
							});
							observer.disconnect();
						}
					});
				},
				{ threshold: 0.3 },
			);
			observer.observe(row);
			observers.push(observer);
		});

		return () => observers.forEach((o) => o.disconnect());
	}, [containerRef]);
}

export function useEvidenceExpand(
	containerRef: React.RefObject<HTMLDivElement | null>,
) {
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const buttons = el.querySelectorAll<HTMLButtonElement>("[data-evidence-toggle]");
		const handlers: (() => void)[] = [];

		buttons.forEach((btn) => {
			const row = btn.closest("[data-evidence-row]");
			if (!row) return;

			const panel = row.querySelector<HTMLElement>("[data-expand-panel]");
			if (!panel) return;

			const onClick = () => {
				const expanded = btn.getAttribute("aria-expanded") === "true";
				if (expanded) {
					gsap.to(panel, {
						height: 0, opacity: 0, duration: 0.35, ease: "power3.inOut",
						onStart() { panel.style.display = "block"; panel.style.overflow = "hidden"; },
						onComplete() { panel.style.display = "none"; panel.style.overflow = ""; panel.style.height = ""; },
					});
				} else {
					panel.style.display = "block";
					panel.style.overflow = "hidden";
					const autoHeight = panel.scrollHeight;
					gsap.fromTo(panel, { height: 0, opacity: 0 }, {
						height: autoHeight, opacity: 1, duration: 0.4, ease: "power3.inOut",
						onComplete() { panel.style.height = ""; panel.style.overflow = ""; },
					});
				}
			};

			btn.addEventListener("click", onClick);
			handlers.push(() => btn.removeEventListener("click", onClick));
		});

		return () => handlers.forEach((fn) => fn());
	}, [containerRef]);
}

export function useReadingGuideReveal(
	containerRef: React.RefObject<HTMLDivElement | null>,
) {
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const revealLines = el.querySelectorAll("[data-reveal-line]");
		if (revealLines.length) {
			revealLines.forEach((line) => {
				gsap.set(line, { opacity: 0, y: 40, filter: "blur(6px)" });
			});

			const observer = createObserver(el, () => {
				const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
				revealLines.forEach((line, i) => {
					tl.to(line, {
						opacity: 1, y: 0, filter: "blur(0px)", duration: 1.1,
					}, i * 0.12);
				});
			}, 0.15);

			return () => observer.disconnect();
		}

		const articles = el.querySelectorAll("article");
		if (articles.length) {
			articles.forEach((article) => {
				gsap.set(article, { opacity: 0, y: 35, filter: "blur(4px)" });
			});

			const observer = createObserver(el, () => {
				const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
				articles.forEach((article, i) => {
					tl.to(article, {
						opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0,
					}, i * 0.1);
				});
			}, 0.15);

			return () => observer.disconnect();
		}
	}, [containerRef]);
}

export function useCtaReveal(
	containerRef: React.RefObject<HTMLDivElement | null>,
) {
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const items = el.querySelectorAll("[data-cta-item]");
		if (!items.length) return;

		items.forEach((item) => gsap.set(item, { opacity: 0, y: 35 }));

		const observer = createObserver(el, () => {
			const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
			items.forEach((item, i) => {
				tl.to(item, { opacity: 1, y: 0, duration: 0.9 }, i * 0.1);
			});
		});

		return () => observer.disconnect();
	}, [containerRef]);
}

export function useMagneticButtons(
	containerRef: React.RefObject<HTMLDivElement | null>,
) {
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const buttons = el.querySelectorAll<HTMLElement>("[data-magnetic]");
		const handlers: { btn: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }[] = [];

		buttons.forEach((btn) => {
			const onMove = (e: MouseEvent) => {
				const rect = btn.getBoundingClientRect();
				const dx = e.clientX - (rect.left + rect.width / 2);
				const dy = e.clientY - (rect.top + rect.height / 2);
				const str = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / 200);
				gsap.to(btn, { x: dx * 0.15 * str, y: dy * 0.15 * str, duration: 0.4, ease: "power2.out", overwrite: "auto" });
			};
			const onLeave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
			btn.addEventListener("mousemove", onMove);
			btn.addEventListener("mouseleave", onLeave);
			handlers.push({ btn, move: onMove, leave: onLeave });
		});

		return () => handlers.forEach(({ btn, move, leave }) => {
			btn.removeEventListener("mousemove", move);
			btn.removeEventListener("mouseleave", leave);
		});
	}, [containerRef]);
}

export function useContactHeroReveal(
	containerRef: React.RefObject<HTMLDivElement | null>,
) {
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const tagline = el.querySelector("[data-animate-tagline]");
		const headingLines = el.querySelectorAll("[data-animate-line]");
		const paragraph = el.querySelector("[data-animate-paragraph]");
		const steps = el.querySelectorAll("[data-animate-step]");
		const stepNumbers = el.querySelectorAll("[data-animate-step-number]");

		const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

		if (tagline) {
			gsap.set(tagline, { opacity: 0, x: -20 });
			tl.to(tagline, { opacity: 1, x: 0, duration: 0.45 });
		}

		if (headingLines.length) {
			headingLines.forEach((line) => {
				gsap.set(line, { opacity: 0, y: 40, filter: "blur(6px)" });
			});
			headingLines.forEach((line) => {
				tl.to(line, {
					opacity: 1,
					y: 0,
					filter: "blur(0px)",
					duration: 0.55,
				}, "-=0.4");
			});
		}

		if (paragraph) {
			gsap.set(paragraph, { opacity: 0, y: 14 });
			tl.to(paragraph, { opacity: 1, y: 0, duration: 0.5 }, "-=0.35");
		}

		if (steps.length) {
			steps.forEach((step) => {
				gsap.set(step, { opacity: 0, y: 28 });
			});
			stepNumbers.forEach((num) => {
				gsap.set(num, { opacity: 0, scale: 0.6, rotate: -8, transformOrigin: "left bottom" });
			});

			steps.forEach((step, i) => {
				tl.to(step, { opacity: 1, y: 0, duration: 0.55 }, "-=0.8");
				if (stepNumbers[i]) {
					tl.to(stepNumbers[i], { opacity: 1, scale: 1, rotate: 0, duration: 0.7, ease: "elastic.out(1, 0.6)" }, "-=0.45");
				}
			});
		}
	}, [containerRef]);
}

export function useCaseStudyHeroReveal(
	containerRef: React.RefObject<HTMLDivElement | null>,
) {
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const tagline = el.querySelector("[data-animate-tagline]");
		const label = el.querySelector("[data-animate-label]");
		const metric = el.querySelector("[data-animate-metric]");
		const metricLabel = el.querySelector("[data-animate-metric-label]");
		const context = el.querySelector("[data-animate-context]");
		const details = el.querySelectorAll("[data-animate-detail]");

		const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

		if (tagline) {
			gsap.set(tagline, { opacity: 0, x: -20 });
			tl.to(tagline, { opacity: 1, x: 0, duration: 0.7 });
		}

		if (label) {
			gsap.set(label, { opacity: 0, y: 14 });
			tl.to(label, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4");
		}

		if (metric) {
			gsap.set(metric, { opacity: 0, y: 40, filter: "blur(4px)" });
			tl.to(metric, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2 }, "-=0.4");
		}

		if (metricLabel) {
			gsap.set(metricLabel, { opacity: 0, y: 14 });
			tl.to(metricLabel, { opacity: 1, y: 0, duration: 0.8 }, "-=0.7");
		}

		if (context) {
			gsap.set(context, { opacity: 0, y: 14 });
			tl.to(context, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5");
		}

		if (details.length) {
			gsap.set(details, { opacity: 0, x: 20 });
			tl.to(details, { opacity: 1, x: 0, duration: 0.7, stagger: 0.08 }, "-=0.6");
		}
	}, [containerRef]);
}

export function useSectionFrameReveal(
	containerRef: React.RefObject<HTMLDivElement | null>,
) {
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const labelGroup = el.querySelector("[data-animate-label]");
		const heading = el.querySelector("h2");
		const content = el.querySelector("[data-animate-content]");
		const childrenEls = content ? Array.from(content.children) : [];

		const targets = [labelGroup, heading, ...childrenEls].filter(Boolean);
		if (!targets.length) return;

		gsap.set(targets, { opacity: 0, y: 20, filter: "blur(4px)" });

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				start: "top bottom-=80",
				end: "bottom top+=120",
				toggleActions: "play reverse play reverse",
			},
			defaults: { ease: "power2.out" },
		});

		tl.to(targets, {
			opacity: 1,
			y: 0,
			filter: "blur(0px)",
			duration: 0.9,
			stagger: 0.1,
		});

		return () => {
			tl.kill();
		};
	}, [containerRef]);
}

export function useMetricCounter(
	containerRef: React.RefObject<HTMLDivElement | null>,
) {
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const statEls = el.querySelectorAll<HTMLElement>("[data-animate-counter]");
		if (!statEls.length) return;

		const triggers: ScrollTrigger[] = [];

		statEls.forEach((statEl) => {
			const text = statEl.dataset.originalText || statEl.textContent || "";
			if (!statEl.dataset.originalText) {
				statEl.dataset.originalText = text;
			}

			const match = text.match(/^([^\d]*)([\d.,]+)([^\d]*)$/);
			if (!match) return;

			const prefix = match[1] || "";
			const numStr = match[2].replace(/,/g, "");
			const suffix = match[3] || "";
			const isFloat = numStr.includes(".");
			const target = parseFloat(numStr) || 0;

			const obj = { val: 0 };
			let tween: gsap.core.Tween | null = null;

			const countUp = () => {
				if (tween) tween.kill();
				obj.val = 0;
				tween = gsap.to(obj, {
					val: target,
					duration: 2,
					ease: "power3.out",
					onUpdate() {
						const currentNum = isFloat
							? obj.val.toFixed(1)
							: Math.floor(obj.val).toString();
						statEl.textContent = `${prefix}${currentNum}${suffix}`;
					},
				});
			};

			const reset = () => {
				if (tween) tween.kill();
				statEl.textContent = `${prefix}0${isFloat ? ".0" : ""}${suffix}`;
			};

			const st = ScrollTrigger.create({
				trigger: statEl,
				start: "top bottom-=40",
				end: "bottom top+=40",
				onEnter: countUp,
				onEnterBack: countUp,
				onLeave: reset,
				onLeaveBack: reset,
			});
			triggers.push(st);
		});

		return () => triggers.forEach((t) => t.kill());
	}, [containerRef]);
}

export function useServiceHeroReveal(
	containerRef: React.RefObject<HTMLDivElement | null>,
) {
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const taglines = el.querySelectorAll("[data-animate-tagline]");
		const number = el.querySelector("[data-animate-number]");
		const headingLines = el.querySelectorAll("h1 span");
		const paragraph = el.querySelector("[data-animate-paragraph]");

		const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

		if (taglines.length) {
			gsap.set(taglines, { opacity: 0, y: -12 });
			tl.to(taglines, { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 });
		}

		if (number) {
			gsap.set(number, { opacity: 0, x: -20 });
			tl.to(number, { opacity: 1, x: 0, duration: 0.8 }, "-=0.6");
		}

		if (headingLines.length) {
			gsap.set(headingLines, { opacity: 0, y: 50, filter: "blur(6px)" });
			tl.to(headingLines, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.1, stagger: 0.1 }, "-=0.6");
		}

		if (paragraph) {
			gsap.set(paragraph, { opacity: 0, y: 20, filter: "blur(3px)" });
			tl.to(paragraph, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0 }, "-=0.8");
		}
	}, [containerRef]);
}

export function useOutcomesSectionReveal(
	containerRef: React.RefObject<HTMLDivElement | null>,
) {
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const label = el.querySelector("[data-animate-label]");
		const heading = el.querySelector("h2");
		const intro = el.querySelector("[data-animate-intro]");
		const rows = el.querySelectorAll("[data-animate-row]");

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				start: "top bottom-=100",
				toggleActions: "play none none none",
			},
			defaults: { ease: "power2.out" },
		});

		if (label) {
			gsap.set(label, { opacity: 0, x: -14 });
			tl.to(label, { opacity: 1, x: 0, duration: 0.7 });
		}

		if (heading) {
			gsap.set(heading, { opacity: 0, y: 28, filter: "blur(5px)" });
			tl.to(heading, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0 }, "-=0.4");
		}

		if (intro) {
			gsap.set(intro, { opacity: 0, y: 14 });
			tl.to(intro, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6");
		}

		if (rows.length) {
			rows.forEach((row) => {
				const icon = row.querySelector("[data-animate-icon]");
				const title = row.querySelector("[data-animate-title]");
				const desc = row.querySelector("[data-animate-desc]");

				const rowTl = gsap.timeline({
					scrollTrigger: {
						trigger: row,
						start: "top bottom-=40",
						toggleActions: "play none none none",
					},
					defaults: { ease: "power2.out" },
				});

				if (icon) {
					gsap.set(icon, { opacity: 0, scale: 0.3, rotate: -15, transformOrigin: "center" });
					rowTl.to(icon, { opacity: 1, scale: 1, rotate: 0, duration: 0.7, ease: "back.out(1.4)" });
				}

				if (title) {
					gsap.set(title, { opacity: 0, x: -20 });
					rowTl.to(title, { opacity: 1, x: 0, duration: 0.8 }, "-=0.5");
				}

				if (desc) {
				gsap.set(desc, { opacity: 0, y: 10 });
				rowTl.to(desc, { opacity: 1, y: 0, duration: 0.8 }, "-=0.55");
			}
		});
		}
	}, [containerRef]);
}

export function useSelectedWorkReveal(
	containerRef: React.RefObject<HTMLDivElement | null>,
) {
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const triggers: ScrollTrigger[] = [];
		const timelines: gsap.core.Timeline[] = [];

		// Header reveal
		const header = el.querySelector("[data-animate-header]");
		if (header) {
			gsap.set(header, { opacity: 0, y: 28, filter: "blur(5px)" });
			triggers.push(
				ScrollTrigger.create({
					trigger: header,
					start: "top bottom-=60",
					onEnter: () => gsap.to(header, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.1, ease: "power2.out" }),
				}),
			);
		}

		// Each work item with alternating gentle slide-in directions
		const items = el.querySelectorAll<HTMLElement>("[data-animate-work-item]");
		items.forEach((item) => {
			const isReverse = item.dataset.reverse === "true";
			const visual = item.querySelector("[data-animate-visual]");
			const copy = item.querySelector("[data-animate-copy]");

			if (visual) {
				gsap.set(visual, { opacity: 0, x: isReverse ? -35 : 35, scale: 0.97, filter: "blur(3px)" });
			}
			if (copy) {
				gsap.set(copy, { opacity: 0, x: isReverse ? 30 : -30 });
			}

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: item,
					start: "top bottom-=80",
					toggleActions: "play none none none",
				},
				defaults: { ease: "power2.out", duration: 1.0 },
			});

			if (visual) tl.to(visual, { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" });
			if (copy) tl.to(copy, { opacity: 1, x: 0, duration: 0.95 }, "-=0.7");
			timelines.push(tl);
		});

		// CTA
		const cta = el.querySelector("[data-animate-cta]");
		if (cta) {
			gsap.set(cta, { opacity: 0, y: 14 });
			triggers.push(
				ScrollTrigger.create({
					trigger: cta,
					start: "top bottom-=40",
					onEnter: () => gsap.to(cta, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }),
				}),
			);
		}

		return () => {
			triggers.forEach((st) => st.kill());
			timelines.forEach((tl) => tl.kill());
		};
	}, [containerRef]);
}

export function useHomeServicesSectionReveal(
	containerRef: React.RefObject<HTMLDivElement | null>,
) {
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const triggers: ScrollTrigger[] = [];

		const header = el.querySelector("[data-animate-header]");
		const headerLabel = header?.querySelector("[data-animate-label]");
		const headerH2Lines = header?.querySelectorAll("[data-animate-line]");
		const cards = el.querySelectorAll<HTMLElement>("[data-animate-card]");
		const cta = el.querySelector("[data-animate-cta]");

		// --- Header: label fades in softly, then each h2 line rises from below ---
		if (header) {
			if (headerLabel) {
				const headerLine = headerLabel.querySelector<HTMLElement>("i");
				gsap.set(headerLabel, { opacity: 0, y: 12, filter: "blur(4px)" });
				if (headerLine) gsap.set(headerLine, { opacity: 0, scaleX: 0, transformOrigin: "left center" });
			}
			if (headerH2Lines?.length) {
				gsap.set(headerH2Lines, { opacity: 0, y: 40, filter: "blur(6px)" });
			}

			triggers.push(
				ScrollTrigger.create({
					trigger: header,
					start: "top bottom-=60",
					onEnter: () => {
						const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
						if (headerLabel) {
							const headerLine = headerLabel.querySelector<HTMLElement>("i");
							if (headerLine) {
								tl.to(headerLine, { opacity: 1, scaleX: 1, duration: 0.6, ease: "power2.out" });
							}
							tl.to(
								headerLabel,
								{ opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9 },
								"-=0.4",
							);

							const shimmer = document.createElement("span");
							shimmer.setAttribute("aria-hidden", "true");
							shimmer.style.cssText =
								"position:absolute;inset:0;pointer-events:none;will-change:transform;" +
								"background:linear-gradient(100deg,transparent 20%,rgba(255,255,255,0.35) 50%,transparent 80%);";
							headerLabel.appendChild(shimmer);
							gsap.fromTo(
								shimmer,
								{ xPercent: -120 },
								{ xPercent: 220, duration: 0.9, ease: "none", delay: 0.3, onComplete: () => shimmer.remove() },
							);
						}
						if (headerH2Lines?.length) {
							tl.to(headerH2Lines, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0, stagger: 0.12 }, "-=0.5");
						}
					},
				}),
			);
		}

		// --- Cards: sequential gentle slide-in with soft blur-to-clear + icon pop ---
		if (cards.length) {
			cards.forEach((card, i) => {
				const icon = card.querySelector("[data-animate-icon]");
				const badge = card.querySelector("[data-animate-badge]");
				const title = card.querySelector("h3");
				const body = card.querySelector("p");

				gsap.set(card, { opacity: 0, y: 30, filter: "blur(4px)" });
				if (icon) gsap.set(icon, { opacity: 0, scale: 0.3, rotate: -15 });
				if (badge) gsap.set(badge, { opacity: 0, y: -8 });
				if (title) gsap.set(title, { opacity: 0, y: 12 });
				if (body) gsap.set(body, { opacity: 0, y: 8 });

				triggers.push(
					ScrollTrigger.create({
						trigger: card,
						start: "top bottom-=40",
						onEnter: () => {
							const tl = gsap.timeline({ delay: i * 0.05, defaults: { ease: "power2.out" } });
							tl.to(card, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9 });
							if (icon) tl.to(icon, { opacity: 1, scale: 1, rotate: 0, duration: 0.7, ease: "back.out(1.4)" }, "-=0.6");
							if (badge) tl.to(badge, { opacity: 1, y: 0, duration: 0.5 }, "-=0.5");
							if (title) tl.to(title, { opacity: 1, y: 0, duration: 0.6 }, "-=0.45");
							if (body) tl.to(body, { opacity: 1, y: 0, duration: 0.55 }, "-=0.4");
						},
					}),
				);
			});
		}

		// --- CTA: scale punch in ---
		if (cta) {
			gsap.set(cta, { opacity: 0, scale: 0.88, transformOrigin: "right center" });
			triggers.push(
				ScrollTrigger.create({
					trigger: cta,
					start: "top bottom-=20",
					onEnter: () =>
						gsap.to(cta, { opacity: 1, scale: 1, duration: 0.65, ease: "back.out(1.6)" }),
				}),
			);
		}

		return () => {
			triggers.forEach((st) => st.kill());
		};
	}, [containerRef]);
}

export function useTestimonialsReveal(
	containerRef: React.RefObject<HTMLDivElement | null>,
) {
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			return;
		}

		const label = el.querySelector("[data-animate-t-label]");
		const labelLine = label?.querySelector<HTMLElement>("i");
		const heading = el.querySelector("[data-animate-t-heading]");
		const headingLines = heading
			? Array.from(heading.querySelectorAll(":scope > span"))
			: [];
		const paragraph = el.querySelector("[data-animate-t-paragraph]");
		const marquee = el.querySelector("[data-animate-t-marquee]");

		// Initial hidden states
		if (label) {
			gsap.set(label, { opacity: 0, y: 12, filter: "blur(4px)" });
		}
		if (labelLine) {
			gsap.set(labelLine, { opacity: 0, scaleX: 0, transformOrigin: "left center" });
		}
		headingLines.forEach((line) => {
			gsap.set(line, { opacity: 0, y: 24, filter: "blur(5px)" });
		});
		if (paragraph) {
			gsap.set(paragraph, { opacity: 0, y: 14 });
		}
		if (marquee) {
			gsap.set(marquee, { opacity: 0, y: 20, scale: 0.98, filter: "blur(2px)" });
		}

		const st = ScrollTrigger.create({
			trigger: el,
			start: "top bottom-=60",
			onEnter: () => {
				const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

				if (label) {
					if (labelLine) {
						tl.to(labelLine, { opacity: 1, scaleX: 1, duration: 0.6, ease: "power2.out" });
					}
					tl.to(
						label,
						{ opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9 },
						"-=0.4",
					);

					const shimmer = document.createElement("span");
					shimmer.setAttribute("aria-hidden", "true");
					shimmer.style.cssText =
						"position:absolute;inset:0;pointer-events:none;will-change:transform;" +
						"background:linear-gradient(100deg,transparent 20%,rgba(255,255,255,0.35) 50%,transparent 80%);";
					label.appendChild(shimmer);
					gsap.fromTo(
						shimmer,
						{ xPercent: -120 },
						{ xPercent: 220, duration: 0.9, ease: "none", delay: 0.3, onComplete: () => shimmer.remove() },
					);
				}

				headingLines.forEach((line, i) => {
					tl.to(
						line,
						{ opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0 },
						i === 0 ? "-=0.5" : "-=0.6",
					);
				});

				if (paragraph) {
					tl.to(paragraph, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6");
				}

				if (marquee) {
					tl.to(
						marquee,
						{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 1.0 },
						"-=0.7",
					);
				}
			},
		});

		return () => {
			st.kill();
		};
	}, [containerRef]);
}

export function useWhyExistReveal(
	containerRef: React.RefObject<HTMLDivElement | null>,
) {
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const labelRow = el.querySelector("[data-animate-label]");
		const quoteLines = el.querySelectorAll("[data-animate-quote-line]");
		const contentBox = el.querySelector("[data-animate-content-box]");
		const leadParagraph = el.querySelector("[data-animate-lead]");
		const detailParagraphs = el.querySelectorAll("[data-animate-detail]");

		// 1) Label row — lines expand outward, text fades in
		if (labelRow) {
			const lines = labelRow.querySelectorAll("i");
			const text = labelRow.querySelector("p");
			gsap.set(lines, { scaleX: 0, transformOrigin: "center" });
			if (text) gsap.set(text, { opacity: 0, letterSpacing: "0.3em" });

			ScrollTrigger.create({
				trigger: labelRow,
				start: "top bottom-=80",
				onEnter: () => {
					const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
					tl.to(lines, { scaleX: 1, duration: 0.9, stagger: 0.04 });
					if (text) tl.to(text, { opacity: 1, letterSpacing: "0.14em", duration: 0.8 }, "-=0.5");
				},
			});
		}

		// 2) Blockquote lines — staggered gentle flip up from below
		if (quoteLines.length) {
			gsap.set(quoteLines, { opacity: 0, y: 45, filter: "blur(4px)" });

			ScrollTrigger.create({
				trigger: quoteLines[0],
				start: "top bottom-=40",
				onEnter: () => {
					gsap.to(quoteLines, {
						opacity: 1, y: 0, filter: "blur(0px)",
						duration: 1.1, stagger: 0.1,
					});
				},
			});
		}

		// 3) Content box — soft reveal from center outward
		if (contentBox) {
			gsap.set(contentBox, { clipPath: "inset(6% 40%)", opacity: 0 });

			ScrollTrigger.create({
				trigger: contentBox,
				start: "top bottom-=60",
				onEnter: () => {
					gsap.to(contentBox, {
						clipPath: "inset(0% 0%)", opacity: 1,
						duration: 1.1, ease: "power2.inOut",
					});
				},
			});
		}

		// 4) Lead paragraph inside box — fades up
		if (leadParagraph) {
			gsap.set(leadParagraph, { opacity: 0, y: 14 });

			ScrollTrigger.create({
				trigger: leadParagraph,
				start: "top bottom-=30",
				onEnter: () =>
					gsap.to(leadParagraph, { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" }),
			});
		}

		// 5) Detail paragraphs — slide in from opposite sides
		if (detailParagraphs.length) {
			detailParagraphs.forEach((p, i) => {
				gsap.set(p, { opacity: 0, x: i === 0 ? -25 : 25 });

				ScrollTrigger.create({
					trigger: p,
					start: "top bottom-=20",
					onEnter: () =>
						gsap.to(p, { opacity: 1, x: 0, duration: 0.9, ease: "power2.out" }),
				});
			});
		}
	}, [containerRef]);
}

export function usePeopleSectionReveal(
	containerRef: React.RefObject<HTMLDivElement | null>,
) {
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		// 1. Founders Header Label
		const foundersLabel = el.querySelector("[data-animate-founders-label]");
		if (foundersLabel) {
			const lines = foundersLabel.querySelectorAll("i");
			const text = foundersLabel.querySelector("p");
			gsap.set(lines, { scaleX: 0, transformOrigin: "center" });
			if (text) gsap.set(text, { opacity: 0, letterSpacing: "0.3em" });

			ScrollTrigger.create({
				trigger: foundersLabel,
				start: "top bottom-=60",
				onEnter: () => {
					const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
					tl.to(lines, { scaleX: 1, duration: 0.8, stagger: 0.05 });
					if (text) tl.to(text, { opacity: 1, letterSpacing: "0.14em", duration: 0.7 }, "-=0.5");
				},
			});
		}

		// 2. Founder Statements
		const founderItems = el.querySelectorAll<HTMLElement>("[data-animate-founder-statement]");
		founderItems.forEach((item, index) => {
			const quote = item.querySelector("blockquote");
			const avatar = item.querySelector("[data-animate-founder-avatar]");
			const alignRight = index === 1;

			if (quote) gsap.set(quote, { opacity: 0, y: 35, filter: "blur(4px)" });
			if (avatar) gsap.set(avatar, { opacity: 0, x: alignRight ? 25 : -25, scale: 0.94 });

			ScrollTrigger.create({
				trigger: item,
				start: "top bottom-=60",
				onEnter: () => {
					const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
					if (quote) tl.to(quote, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0 });
					if (avatar) tl.to(avatar, { opacity: 1, x: 0, scale: 1, duration: 0.9, ease: "back.out(1.2)" }, "-=0.5");
				},
			});
		});

		// 3. Specialists Header Label
		const specialistsLabel = el.querySelector("[data-animate-specialists-label]");
		if (specialistsLabel) {
			const lines = specialistsLabel.querySelectorAll("i");
			const text = specialistsLabel.querySelector("p");
			gsap.set(lines, { scaleX: 0, transformOrigin: "center" });
			if (text) gsap.set(text, { opacity: 0, y: 15 });

			ScrollTrigger.create({
				trigger: specialistsLabel,
				start: "top bottom-=60",
				onEnter: () => {
					const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
					tl.to(lines, { scaleX: 1, duration: 0.8, stagger: 0.05 });
					if (text) tl.to(text, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5");
				},
			});
		}

		// 4. Specialist Profiles Stagger
		const specialists = el.querySelectorAll<HTMLElement>("[data-animate-specialist]");
		if (specialists.length) {
			specialists.forEach((spec, i) => {
				const avatarImg = spec.querySelector("div");
				const title = spec.querySelector("h3");
				const role = spec.querySelector("p");

				gsap.set(spec, { opacity: 0, y: 28, filter: "blur(4px)" });
				if (avatarImg) gsap.set(avatarImg, { scale: 0.8, opacity: 0 });

				ScrollTrigger.create({
					trigger: spec,
					start: "top bottom-=40",
					onEnter: () => {
						const tl = gsap.timeline({ delay: i * 0.08, defaults: { ease: "power2.out" } });
						tl.to(spec, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9 });
						if (avatarImg) tl.to(avatarImg, { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.2)" }, "-=0.6");
					},
				});
			});
		}
	}, [containerRef]);
}

export function useProofSectionReveal(
	containerRef: React.RefObject<HTMLDivElement | null>,
) {
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const tagline = el.querySelector("[data-animate-tagline]");
		const titleSpans = el.querySelectorAll("[data-animate-title]");
		const desc = el.querySelector("[data-animate-desc]");
		const metricCards = el.querySelectorAll<HTMLElement>("[data-animate-metric-card]");

		if (tagline) gsap.set(tagline, { opacity: 0, x: -20 });
		if (titleSpans.length) gsap.set(titleSpans, { opacity: 0, y: 40, filter: "blur(5px)" });
		if (desc) gsap.set(desc, { opacity: 0, y: 14 });

		ScrollTrigger.create({
			trigger: el,
			start: "top bottom-=80",
			onEnter: () => {
				const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
				if (tagline) tl.to(tagline, { opacity: 1, x: 0, duration: 0.7 });
				if (titleSpans.length) tl.to(titleSpans, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0, stagger: 0.08 }, "-=0.4");
				if (desc) tl.to(desc, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6");
			},
		});

		if (metricCards.length) {
			metricCards.forEach((card, i) => {
				const valueEl = card.querySelector<HTMLElement>("[data-animate-counter]");

				gsap.set(card, { opacity: 0, y: 24, filter: "blur(4px)" });

				ScrollTrigger.create({
					trigger: card,
					start: "top bottom-=40",
					onEnter: () => {
						const tl = gsap.timeline({ delay: i * 0.06, defaults: { ease: "power2.out" } });
						tl.to(card, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9 });

						if (valueEl) {
							const text = valueEl.dataset.originalText || valueEl.textContent || "";
							if (!valueEl.dataset.originalText) {
								valueEl.dataset.originalText = text;
							}
							const match = text.match(/^([^\d]*)([\d.,]+)([^\d]*)$/);
							if (match) {
								const prefix = match[1] || "";
								const numStr = match[2].replace(/,/g, "");
								const suffix = match[3] || "";
								const isFloat = numStr.includes(".");
								const target = parseFloat(numStr) || 0;
								const obj = { val: 0 };

								gsap.to(obj, {
									val: target,
									duration: 1.8,
									ease: "power2.out",
									onUpdate() {
										const currentNum = isFloat
											? obj.val.toFixed(1)
											: Math.floor(obj.val).toString();
										valueEl.textContent = `${prefix}${currentNum}${suffix}`;
									},
								});
							}
						}
					},
				});
			});
		}
	}, [containerRef]);
}

export function useWhereWeWorkReveal(
	containerRef: React.RefObject<HTMLDivElement | null>,
) {
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const heading = el.querySelector("h2");
		const items = el.querySelectorAll("[data-animate-location-item]");
		const mapContainer = el.querySelector("[data-animate-map]");

		if (heading) gsap.set(heading, { opacity: 0, y: 30, filter: "blur(6px)" });
		if (items.length) gsap.set(items, { opacity: 0, x: -20 });
		if (mapContainer) gsap.set(mapContainer, { opacity: 0, scale: 0.96, filter: "blur(6px)" });

		ScrollTrigger.create({
			trigger: el,
			start: "top bottom-=80",
			onEnter: () => {
				const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
				if (heading) tl.to(heading, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0 });
				if (items.length) tl.to(items, { opacity: 1, x: 0, duration: 0.8, stagger: 0.1 }, "-=0.6");
				if (mapContainer) tl.to(mapContainer, { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.3 }, "-=0.8");
			},
		});
	}, [containerRef]);
}




export function useBlogHeroReveal(
	containerRef: React.RefObject<HTMLDivElement | null>,
) {
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const taglines = el.querySelectorAll("[data-animate-tagline]");
		const headingLines = el.querySelectorAll("[data-animate-line]");
		const paragraphs = el.querySelectorAll("[data-animate-paragraph]");
		const ctas = el.querySelectorAll("[data-animate-cta]");
		const images = el.querySelectorAll("[data-animate-image]");

		const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

		if (taglines.length) {
			gsap.set(taglines, { opacity: 0, y: -8 });
			tl.to(taglines, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 });
		}

		if (headingLines.length) {
			headingLines.forEach((line) => gsap.set(line, { opacity: 0, y: 40, filter: "blur(6px)" }));
			headingLines.forEach((line, i) => {
				tl.to(line, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0 }, i === 0 ? "-=0.3" : "-=0.7");
			});
		}

		if (paragraphs.length) {
			gsap.set(paragraphs, { opacity: 0, y: 14 });
			tl.to(paragraphs, { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 }, "-=0.5");
		}

		if (ctas.length) {
			gsap.set(ctas, { opacity: 0, y: 14 });
			tl.to(ctas, { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 }, "-=0.6");
		}

		if (images.length) {
			gsap.set(images, { opacity: 0, scale: 0.97, filter: "blur(3px)" });
			tl.to(images, { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.3, stagger: 0.08 }, "-=0.8");
		}
	}, [containerRef]);
}

export function useBlogSectionReveal(
	containerRef: React.RefObject<HTMLDivElement | null>,
) {
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const taglines = el.querySelectorAll("[data-animate-tagline]");
		const headingLines = el.querySelectorAll("[data-animate-line]");
		const paragraphs = el.querySelectorAll("[data-animate-paragraph]");
		const ctas = el.querySelectorAll("[data-animate-cta]");
		const cards = el.querySelectorAll("[data-animate-card]");
		const images = el.querySelectorAll("[data-animate-image]");

		const observer = createObserver(el, () => {
			const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

			if (taglines.length) {
				gsap.set(taglines, { opacity: 0, y: -8 });
				tl.to(taglines, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 });
			}

			if (headingLines.length) {
				headingLines.forEach((line) => gsap.set(line, { opacity: 0, y: 40, filter: "blur(6px)" }));
				headingLines.forEach((line, i) => {
					tl.to(line, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0 }, i === 0 ? "-=0.3" : "-=0.7");
				});
			}

			if (paragraphs.length) {
				gsap.set(paragraphs, { opacity: 0, y: 14 });
				tl.to(paragraphs, { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 }, "-=0.5");
			}

			if (ctas.length) {
				gsap.set(ctas, { opacity: 0, y: 14 });
				tl.to(ctas, { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 }, "-=0.6");
			}

			if (cards.length) {
				gsap.set(cards, { opacity: 0, y: 28 });
				tl.to(cards, { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 }, "-=0.7");
			}

			if (images.length) {
				gsap.set(images, { opacity: 0, scale: 0.97, filter: "blur(3px)" });
				tl.to(images, { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.3, stagger: 0.08 }, "-=0.8");
			}
		}, 0.15);

		return () => observer.disconnect();
	}, [containerRef]);
}
