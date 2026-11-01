import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const animationConflictSelector =
  ".rooms-slider-carousel, .rooms-amenities-gallery, .room-details-gallery";
const cardSelector = "article, [class*='-card'], [class*='-item']";

function isInsideCard(element) {
  return Boolean(element.closest(cardSelector));
}

function isInAnimationConflict(element) {
  return Boolean(element.closest(animationConflictSelector));
}

function ScrollAnimations() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const root = document.querySelector(".site-content");
    if (!root) return undefined;

    const sectionAnimations = [];
    const context = gsap.context(() => {
      const sections = gsap.utils.toArray("section", root);

      sections.forEach((section) => {
        const cards = Array.from(section.querySelectorAll(cardSelector)).filter(
          (card) =>
            !isInAnimationConflict(card) &&
            !card.parentElement?.closest(cardSelector),
        );
        const skipNestedContent = (element) =>
          isInsideCard(element) || isInAnimationConflict(element);
        const headings = Array.from(
          section.querySelectorAll("h1, h2, h3"),
        ).filter((element) => !skipNestedContent(element));
        const copy = Array.from(
          section.querySelectorAll("p, a, button"),
        ).filter((element) => !skipNestedContent(element));
        const visuals = Array.from(
          section.querySelectorAll("[class*='-visual']"),
        ).filter((element) => !isInsideCard(element));
        const images = Array.from(section.querySelectorAll("img")).filter(
          (image) =>
            !image.closest("[class*='-visual']") &&
            !isInsideCard(image) &&
            !isInAnimationConflict(image) &&
            image.getAttribute("aria-hidden") !== "true" &&
            !image.classList.contains("home-hero-background"),
        );

        if (
          headings.length === 0 &&
          copy.length === 0 &&
          visuals.length === 0 &&
          images.length === 0 &&
          cards.length === 0
        ) {
          return;
        }

        const isHero = section.matches(
          ".home-hero, .about-hero, .rooms-hero, .contact-hero",
        );
        const imageTargets = [...visuals, ...images];
        let timeline;
        timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: isHero ? "top 100%" : "top 84%",
            end: isHero ? "bottom 18%" : "bottom 16%",
            toggleActions: "play reverse play reverse",
            invalidateOnRefresh: true,
            onEnter: () => timeline.restart(),
            onLeave: () => timeline.reverse(),
            onEnterBack: () => timeline.restart(),
            onLeaveBack: () => timeline.reverse(),
          },
        });
        sectionAnimations.push({
          scrollTrigger: timeline.scrollTrigger,
          timeline,
        });
        if (headings.length > 0) {
          timeline.fromTo(
            headings,
            {
              autoAlpha: 0,
              y: 26,
              rotationX: 8,
              rotationY: 2,
              transformPerspective: 1000,
              transformOrigin: "50% 100%",
            },
            {
              autoAlpha: 1,
              y: 0,
              rotationX: 0,
              rotationY: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
            },
            0,
          );
        }

        if (copy.length > 0) {
          timeline.fromTo(
            copy,
            { autoAlpha: 0, y: 18 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.06,
              ease: "power2.out",
            },
            headings.length > 0 ? "-=0.48" : 0,
          );
        }

        if (imageTargets.length > 0) {
          timeline.fromTo(
            imageTargets,
            {
              autoAlpha: 0,
              y: 28,
              scale: 0.97,
              rotationX: 4,
              rotationY: -3,
              transformPerspective: 1100,
              transformOrigin: "50% 50%",
            },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              rotationX: 0,
              rotationY: 0,
              duration: 0.95,
              stagger: 0.08,
              ease: "power3.out",
            },
            "-=0.42",
          );
        }

        if (cards.length > 0) {
          timeline.fromTo(
            cards,
            {
              autoAlpha: 0,
              y: 24,
              scale: 0.985,
              rotationY: 2,
              transformPerspective: 1100,
              transformOrigin: "50% 50%",
            },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              rotationY: 0,
              duration: 0.75,
              stagger: 0.12,
              ease: "power3.out",
            },
            "-=0.5",
          );
        }

      });
    }, root);

    const refreshTriggers = () => {
      ScrollTrigger.refresh();
      const currentScroll = window.scrollY;
      sectionAnimations.forEach(({ scrollTrigger, timeline }) => {
        if (
          !scrollTrigger.isActive &&
          (currentScroll < scrollTrigger.start || currentScroll > scrollTrigger.end)
        ) {
          timeline.progress(0).pause();
        }
      });
      ScrollTrigger.update();
    };
    root.addEventListener("load", refreshTriggers, true);
    const refreshFrame = window.requestAnimationFrame(refreshTriggers);

    return () => {
      root.removeEventListener("load", refreshTriggers, true);
      window.cancelAnimationFrame(refreshFrame);
      context.revert();
    };
  }, [pathname]);

  return null;
}

export default ScrollAnimations;
