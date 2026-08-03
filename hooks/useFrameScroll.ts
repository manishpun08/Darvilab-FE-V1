"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 37;
const FRAME_START = 49;
const FRAME_BASE = "/frames/frames-3/frame_";

function frameSrc(i: number) {
  return `${FRAME_BASE}${String(i + FRAME_START).padStart(3, "0")}.jpg`;
}

function coverFill(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  w: number,
  h: number,
) {
  const iw = img.naturalWidth;
  const ih = img.naturalHeight;
  const ar = iw / ih;
  const car = w / h;
  let sx = 0,
    sy = 0,
    sw = iw,
    sh = ih;

  if (ar > car) {
    sw = ih * car;
    sx = (iw - sw) / 2;
  } else {
    sh = iw / car;
    sy = (ih - sh) / 2;
  }

  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, w, h);
}

export function useFrameScroll(
  sectionRef: React.RefObject<HTMLDivElement | null>,
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
) {
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const readyRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;

    const ctx = canvas.getContext("2d")!;
    ctx.imageSmoothingEnabled = false;
    ctx.imageSmoothingQuality = "high";

    const images: HTMLImageElement[] = [];

    let cw = 0,
      ch = 0,
      cdpr = 1,
      currentIndex = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.onload = () => {
        if (!readyRef.current) {
          readyRef.current = true;
          draw(0);
        }
      };
      img.src = frameSrc(i);
      images.push(img);
    }

    imagesRef.current = images;

    function resizeCanvas() {
      const cvs = canvasRef.current;
      if (!cvs) return;
      const rect = cvs.getBoundingClientRect();
      const w = rect.width || window.innerWidth;
      const h = rect.height || window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      if (cvs.width !== w * dpr || cvs.height !== h * dpr) {
        cvs.width = w * dpr;
        cvs.height = h * dpr;
        ctx.imageSmoothingEnabled = false;
        ctx.imageSmoothingQuality = "high";
      }
      cw = w;
      ch = h;
      cdpr = dpr;
    }

    function draw(index: number) {
      const cvs = canvasRef.current;
      if (!cvs) return;

      resizeCanvas();

      ctx.setTransform(cdpr, 0, 0, cdpr, 0, 0);
      ctx.clearRect(0, 0, cw, ch);

      const img = imagesRef.current[index];
      if (img?.complete) {
        const iw = img.naturalWidth;
        const ih = img.naturalHeight;
        const ar = iw / ih;
        const car = cw / ch;
        const scale = ar > car ? ch / ih : cw / iw;
        ctx.imageSmoothingEnabled = scale > 1.05;
        coverFill(ctx, img, cw, ch);
      }
    }

    let roTimer: ReturnType<typeof setTimeout> | undefined;
    const ro = new ResizeObserver(() => {
      draw(currentIndex);
      clearTimeout(roTimer);
      roTimer = setTimeout(() => ScrollTrigger.refresh(), 200);
    });
    ro.observe(canvas.parentElement ?? section);

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      scrub: 1.5,
      onUpdate(self) {
        currentIndex = Math.floor(self.progress * (TOTAL_FRAMES - 1));
        draw(currentIndex);
      },
    });

    draw(0);

    return () => {
      clearTimeout(roTimer);
      st.kill();
      ro.disconnect();
    };
  }, [sectionRef, canvasRef]);
}

export function useHeadingReveal(
  containerRef: React.RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const label = el.querySelector(":scope > div");
    const heading = el.querySelector("h1, h2, h3");
    const lines = heading
      ? Array.from(heading.querySelectorAll(":scope > span"))
      : [];

    if (!label && !lines.length) return;

    if (label) {
      const line = label.querySelector<HTMLElement>("i");
      gsap.set(label, { opacity: 0, y: 12, filter: "blur(4px)" });
      if (line) gsap.set(line, { opacity: 0, scaleX: 0, transformOrigin: "left center" });
    }
    lines.forEach((line) => {
      gsap.set(line, { opacity: 0, y: 30, filter: "blur(6px)" });
    });

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top bottom-=60",
      onEnter: () => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

        if (label) {
          const line = label.querySelector<HTMLElement>("i");
          if (line) {
            tl.to(line, { opacity: 1, scaleX: 1, duration: 0.6, ease: "power2.out" });
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

        lines.forEach((line, i) => {
          tl.to(
            line,
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0 },
            i === 0 ? "-=0.5" : "-=0.6",
          );
        });
      },
    });

    return () => {
      st.kill();
    };
  }, [containerRef]);
}

export function useArticlesReveal(
  containerRef: React.RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const articles = el.querySelectorAll("article");
    if (!articles.length) return;

    const isNarrow = window.matchMedia("(max-width: 63.99rem)").matches;

    if (isNarrow) {
      articles.forEach((article) => {
        gsap.set(article, { opacity: 0 });
      });

      const st = ScrollTrigger.create({
        trigger: el,
        start: "top bottom-=40",
        once: true,
        onEnter: () =>
          gsap.to(articles, {
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: "power2.out",
          }),
      });

      return () => {
        st.kill();
      };
    }

    articles.forEach((article) => {
      gsap.set(article, { opacity: 0, y: 20, filter: "blur(4px)" });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top bottom-=40",
        end: "top top+=60",
        scrub: 1.5,
      },
    });

    articles.forEach((article) => {
      tl.to(
        article,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          ease: "power2.out",
          duration: 0.8,
        },
        "-=0.3",
      );
    });

    return () => {
      tl.kill();
    };
  }, [containerRef]);
}

export function useHeroReveal(
  sectionRef: React.RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tagline = section.querySelector("[data-hero-tagline]");
    const heading = section.querySelector("h1");
    const paragraph = section.querySelector("[data-hero-paragraph]");
    const stats = section.querySelectorAll("[data-hero-stat]");
    const icons = section.querySelectorAll("[data-hero-icon]");

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    if (tagline) {
      gsap.set(tagline, { opacity: 0, y: -10 });
      tl.to(tagline, { opacity: 1, y: 0, duration: 0.8 });
    }

    if (heading) {
      const lines = heading.querySelectorAll(":scope > span");
      lines.forEach((line) => {
        gsap.set(line, { opacity: 0, y: 24, filter: "blur(6px)" });
      });
      lines.forEach((line) => {
        tl.to(
          line,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.0,
          },
          "-=0.5",
        );
      });
    }

    if (paragraph) {
      gsap.set(paragraph, { opacity: 0, y: 16 });
      tl.to(paragraph, { opacity: 1, y: 0, duration: 0.9 }, "-=0.5");
    }

    if (stats.length) {
      stats.forEach((stat) => {
        gsap.set(stat, { opacity: 0, y: 14 });
      });
      stats.forEach((stat) => {
        tl.to(
          stat,
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            duration: 0.7,
          },
          "-=0.2",
        );
      });
    }

    if (icons.length) {
      icons.forEach((icon) => {
        gsap.to(icon, {
          opacity: 0.7,
          duration: 2.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    }

    return () => {
      tl.kill();
    };
  }, [sectionRef]);
}

export function useClientFitReveal(
  containerRef: React.RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const label = el.querySelector("[data-fit-label]");
    const heading = el.querySelector("[data-fit-heading]");
    const paragraph = el.querySelector("[data-fit-paragraph]");
    const goodFitItems = el.querySelectorAll("[data-fit-good]");
    const notFitItems = el.querySelectorAll("[data-fit-not]");

    const targets: Element[] = [];
    if (label) targets.push(label);
    if (heading) targets.push(heading);
    if (paragraph) targets.push(paragraph);

    if (!targets.length && !goodFitItems.length && !notFitItems.length) return;

    targets.forEach((t) => gsap.set(t, { opacity: 0, y: 20, filter: "blur(3px)" }));
    goodFitItems.forEach((item) => gsap.set(item, { opacity: 0, y: 14 }));
    notFitItems.forEach((item) => gsap.set(item, { opacity: 0, y: 14 }));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

            targets.forEach((t, i) => {
              tl.to(t, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9 }, i * 0.08);
            });

            if (goodFitItems.length) {
              tl.to(goodFitItems, {
                opacity: 1, y: 0, stagger: 0.04, duration: 0.5,
              }, "-=0.4");
            }

            if (notFitItems.length) {
              tl.to(notFitItems, {
                opacity: 1, y: 0, stagger: 0.04, duration: 0.5,
              }, "-=0.4");
            }

            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [containerRef]);
}

export function useProcessHeroReveal(
  containerRef: React.RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const label = el.querySelector("div");
    const heading = el.querySelector("h2");
    const paragraph = el.querySelector("p");

    const targets: Element[] = [];
    if (label) targets.push(label);
    if (heading) targets.push(heading);
    if (paragraph) targets.push(paragraph);

    if (!targets.length) return;

    targets.forEach((t) => gsap.set(t, { opacity: 0, y: 20, filter: "blur(3px)" }));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
            targets.forEach((t, i) => {
              tl.to(t, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9 }, i * 0.08);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [containerRef]);
}

export function useApproachStack(
	containerRef: React.RefObject<HTMLDivElement | null>,
) {
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const articles = Array.from(el.querySelectorAll("article"));
		const count = articles.length;
		if (!count) return;

		const step = 1 / Math.max(count - 1, 1);

		articles.forEach((article, i) => {
			if (i === 0) {
				gsap.set(article, {
					opacity: 1,
					y: 0,
					scale: 1,
					rotate: 0,
					filter: "blur(0px)",
				});
				return;
			}

			gsap.set(article, {
				opacity: 0,
				y: 80,
				scale: 0.96,
				rotate: -0.8,
				filter: "blur(4px)",
			});
		});

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				start: "top top",
				end: "bottom bottom",
				scrub: 1.2,
				invalidateOnRefresh: true,
			},
		});

		articles.forEach((article, i) => {
			if (i === 0) return;

			tl.fromTo(
				article,
				{ opacity: 0, y: 80, scale: 0.96, rotate: -0.8, filter: "blur(4px)" },
				{
					opacity: 1,
					y: 0,
					scale: 1,
					rotate: 0,
					filter: "blur(0px)",
					ease: "power2.out",
					duration: step,
				},
				(i - 1) * step,
			);
		});

		const refresh = () => ScrollTrigger.refresh();

		if (document.readyState === "complete") {
			refresh();
		} else {
			window.addEventListener("load", refresh);
		}
		document.fonts?.ready?.then(refresh);

		const raf1 = requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				refresh();
			});
		});

		let roTimer: ReturnType<typeof setTimeout> | undefined;
		const ro = new ResizeObserver(() => {
			clearTimeout(roTimer);
			roTimer = setTimeout(refresh, 150);
		});
		ro.observe(el);

		return () => {
			window.removeEventListener("load", refresh);
			cancelAnimationFrame(raf1);
			clearTimeout(roTimer);
			ro.disconnect();
			tl.scrollTrigger?.kill();
			tl.kill();
		};
	}, [containerRef]);
}

export function useApproachProgress(
	containerRef: React.RefObject<HTMLDivElement | null>,
	counterRef: React.RefObject<HTMLSpanElement | null>,
	barRef: React.RefObject<HTMLDivElement | null>,
	total: number,
) {
	useEffect(() => {
		const el = containerRef.current;
		if (!el || total <= 0) return;

		const update = (progress: number) => {
			const p = Math.max(0, Math.min(1, progress));
			const active = Math.min(total, Math.floor(p * total) + 1);
			if (counterRef.current) {
				counterRef.current.textContent = `Phase ${String(active).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
			}
			if (barRef.current) {
				barRef.current.style.transform = `scaleX(${p})`;
			}
		};

		const st = ScrollTrigger.create({
			trigger: el,
			start: "top top",
			end: "bottom bottom",
			scrub: true,
			onUpdate: (self) => update(self.progress),
		});

		update(0);

		return () => {
			st.kill();
		};
	}, [containerRef, counterRef, barRef, total]);
}

let globalLenis: Lenis | null = null;

export function getLenis(): Lenis | null {
  return globalLenis;
}

export function useLenis() {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2 });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);

    globalLenis = lenis;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    return () => {
      lenis.destroy();
      globalLenis = null;
      gsap.ticker.lagSmoothing(1.33);
    };
  }, []);

  useEffect(() => {
    globalLenis?.scrollTo(0, { immediate: true });
  }, [pathname]);
}

const PROC_TOTAL = 228;
const PROC_BASE = "/frames/frames-2/ezgif-frame-";

function procSrc(i: number) {
  return `${PROC_BASE}${String(i + 13).padStart(3, "0")}.jpg`;
}

export function useProcessFrames(
  sectionRef: React.RefObject<HTMLDivElement | null>,
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
) {
  const readyRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;

    const ctx = canvas.getContext("2d")!;
    ctx.imageSmoothingEnabled = false;
    ctx.imageSmoothingQuality = "high";

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      scrub: 1.5,
      onUpdate(self) {
        draw(Math.floor(self.progress * (PROC_TOTAL - 1)));
      },
    });

    const images: HTMLImageElement[] = [];

    for (let i = 0; i < PROC_TOTAL; i++) {
      const img = new Image();
      img.onload = () => {
        if (!readyRef.current) {
          readyRef.current = true;
          draw(0);
        } else {
          draw(Math.floor(st.progress * (PROC_TOTAL - 1)));
        }
      };
      img.src = procSrc(i);
      images.push(img);
    }

    function draw(index: number) {
      const cvs = canvasRef.current;
      if (!cvs) return;

      const rect = cvs.getBoundingClientRect();
      const w = rect.width || window.innerWidth;
      const h = rect.height || window.innerHeight;
      const dpr = window.devicePixelRatio || 1;

      if (cvs.width !== w * dpr || cvs.height !== h * dpr) {
        cvs.width = w * dpr;
        cvs.height = h * dpr;
        ctx.imageSmoothingEnabled = false;
        ctx.imageSmoothingQuality = "high";
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const img = images[index];
      if (img?.complete) {
        const iw = img.naturalWidth;
        const ih = img.naturalHeight;
        const ar = iw / ih;
        const car = w / h;
        let sx = 0,
          sy = 0,
          sw = iw,
          sh = ih;
        if (ar > car) {
          sw = ih * car;
          sx = (iw - sw) / 2;
        } else {
          sh = iw / car;
          sy = (ih - sh) / 2;
        }
        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, w, h);
      }
    }

    const ro = new ResizeObserver(() => draw(0));
    ro.observe(canvas.parentElement ?? section);

    draw(0);

    return () => {
      st.kill();
      ro.disconnect();
    };
  }, [sectionRef, canvasRef]);
}

export function useProblemSpaceReveal(
  containerRef: React.RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const articles = el.querySelectorAll("article");
    if (!articles.length) return;

    const triggers: ScrollTrigger[] = [];

    articles.forEach((article, i) => {
      gsap.set(article, {
        opacity: 0,
        x: i % 2 === 0 ? -50 : 50,
        filter: "blur(3px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: article,
          start: "top bottom-=60",
          end: "top top-=100",
          scrub: 1.5,
        },
      });

      tl.to(article, {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        ease: "power2.out",
        duration: 0.7,
      });

      triggers.push(tl.scrollTrigger!);
    });

    return () => {
      triggers.forEach((st) => st.kill());
    };
  }, [containerRef]);
}

export function useClientsReveal(
  containerRef: React.RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const label = el.querySelector("p");
    const marqueeEl = el.querySelector("[class*='marquee']");
    const marquee = marqueeEl
      ? marqueeEl.closest("div") || marqueeEl.parentElement
      : null;

    const targets: Element[] = [];
    if (label) targets.push(label);
    if (marquee) targets.push(marquee);

    if (!targets.length) return;

    const labelLine = label?.querySelector<HTMLElement>("i");
    if (label) {
      gsap.set(label, { opacity: 0, y: 10, filter: "blur(3px)" });
    }
    if (labelLine) {
      gsap.set(labelLine, { opacity: 0, scaleX: 0, transformOrigin: "left center" });
    }
    if (marquee) {
      gsap.set(marquee, { opacity: 0, y: 16, scale: 0.98, filter: "blur(2px)" });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top bottom-=60",
        end: "top top+=80",
        scrub: 1.5,
      },
    });

    if (label) {
      if (labelLine) {
        tl.to(labelLine, { opacity: 1, scaleX: 1, duration: 0.4, ease: "power2.out" }, 0);
      }
      tl.to(
        label,
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power2.out" },
        "-=0.2",
      );
    }
    if (marquee) {
      tl.to(
        marquee,
        { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", ease: "power2.out", duration: 0.9 },
        "-=0.4",
      );
    }

    return () => {
      tl.kill();
    };
  }, [containerRef]);
}

export function useProcessCardsReveal(
  containerRef: React.RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const cards = el.querySelectorAll("article");
    if (!cards.length) return;

    cards.forEach((card, i) => {
      gsap.set(card, {
        opacity: 0,
        y: 20,
        filter: "blur(4px)",
      });
      card.setAttribute("data-card-index", String(i));
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top bottom+=100",
        end: "top top+=120",
        scrub: 1.5,
      },
    });

    cards.forEach((card) => {
      tl.to(
        card,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          ease: "power2.out",
          duration: 0.7,
        },
        "-=0.15",
      );
    });

    return () => {
      tl.kill();
    };
  }, [containerRef]);
}
