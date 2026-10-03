import { useLayoutEffect, useRef } from "react";
import { useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../data";
import { ProjectCard } from "./ProjectCard";
import { RevealSection } from "./RevealSection";

export function Portfolio() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselCenter = useMotionValue(0);
  const reduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const updateCenter = () => {
      const firstCard = carousel.firstElementChild;
      const cardWidth = firstCard?.getBoundingClientRect().width ?? 0;
      const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0;
      if (!cardWidth) return;

      carouselCenter.set(
        (carousel.scrollLeft + carousel.clientWidth / 2 - cardWidth / 2) /
          (cardWidth + gap),
      );
    };

    updateCenter();
    carousel.addEventListener("scroll", updateCenter, { passive: true });
    const resizeObserver = new ResizeObserver(updateCenter);
    resizeObserver.observe(carousel);
    if (carousel.firstElementChild) resizeObserver.observe(carousel.firstElementChild);

    return () => {
      carousel.removeEventListener("scroll", updateCenter);
      resizeObserver.disconnect();
    };
  }, [carouselCenter]);

  function scrollProjects(direction: -1 | 1) {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const firstCard = carousel.firstElementChild;
    const cardWidth = firstCard?.getBoundingClientRect().width ?? 320;
    carousel.scrollBy({
      left: direction * (cardWidth + 20),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  return (
    <RevealSection>
      <section id="portfolio" className="py-14">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-x-5 gap-y-3">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-300">
              Портфоліо
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-zinc-100 sm:text-3xl sm:leading-normal">
              Вебсайти для різних бізнес-задач
            </h2>
          </div>
          <div className="flex w-full items-center justify-between sm:w-auto sm:justify-end sm:gap-4">
            <p className="text-sm text-zinc-500">
              {String(projects.length).padStart(2, "0")} проєктів
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollProjects(-1)}
                aria-label="Попередні проєкти"
                aria-controls="portfolio-carousel"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80 text-zinc-200 transition hover:border-indigo-400/60 hover:bg-indigo-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <ChevronLeft aria-hidden="true" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollProjects(1)}
                aria-label="Наступні проєкти"
                aria-controls="portfolio-carousel"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80 text-zinc-200 transition hover:border-indigo-400/60 hover:bg-indigo-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <ChevronRight aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <div
          ref={carouselRef}
          id="portfolio-carousel"
          aria-label="Проєкти в портфоліо"
          className="portfolio-carousel -mx-1 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-1 pb-5 pt-2 motion-reduce:scroll-auto"
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="w-[88%] shrink-0 snap-start sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
            >
              <StackedProjectCard
                project={project}
                index={index}
                carouselCenter={carouselCenter}
                reduceMotion={reduceMotion}
              />
            </div>
          ))}
        </div>
      </section>
    </RevealSection>
  );
}

function StackedProjectCard({
  project,
  index,
  carouselCenter,
  reduceMotion,
}: {
  project: (typeof projects)[number];
  index: number;
  carouselCenter: ReturnType<typeof useMotionValue<number>>;
  reduceMotion: boolean | null;
}) {
  const previewTransform = useTransform(carouselCenter, (center) => {
    if (reduceMotion) return "none";

    const distance = index - center;
    const distanceFromCenter = Math.min(Math.abs(distance), 1);
    const angle = Math.max(-1, Math.min(1, distance)) * -12;
    const depth = distanceFromCenter * -72;
    const scale = 1 - distanceFromCenter * 0.04;

    return `perspective(800px) rotateY(${angle}deg) translateZ(${depth}px) scale(${scale})`;
  });

  return <ProjectCard project={project} previewTransform={previewTransform} />;
}
