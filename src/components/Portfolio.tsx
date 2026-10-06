import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "../data";
import { ProjectCard } from "./ProjectCard";
export function Portfolio() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({
    index: 0,
    end: false,
    visible: 1,
  });
  useEffect(() => {
    const track = carouselRef.current;
    if (!track) return;
    const update = () => {
      const width = track.firstElementChild?.getBoundingClientRect().width ?? 1;
      setPosition({
        index: Math.round(track.scrollLeft / (width + 24)),
        end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 4,
        visible: Math.max(
          1,
          Math.floor((track.clientWidth + 24) / (width + 24)),
        ),
      });
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(track);
    return () => {
      track.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);
  function scrollProjects(direction: number) {
    const track = carouselRef.current;
    if (!track) return;
    const width = track.firstElementChild?.getBoundingClientRect().width ?? 320;
    track.scrollBy({
      left: direction * (width + 24),
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }
  return (
    <section
      id="portfolio"
      className="work-section"
      aria-labelledby="work-title"
    >
      <div className="section-heading">
        <h2 id="work-title">
          Вебсайти для різних <span>бізнес-задач.</span>
        </h2>
        <p>
          Шість проєктів. Різні сфери.
          <br />
          Продуманий шлях до звернення.
        </p>
      </div>
      <div className="carousel-toolbar">
        <span>
          Портфоліо{" "}
          <span className="project-count">
            / {String(projects.length).padStart(2, "0")}
          </span>
        </span>
        <div className="carousel-controls">
          <button
            disabled={position.index === 0}
            onClick={() => scrollProjects(-1)}
            aria-label="Попередні проєкти"
            aria-controls="portfolio-carousel"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            disabled={position.end}
            onClick={() => scrollProjects(1)}
            aria-label="Наступні проєкти"
            aria-controls="portfolio-carousel"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
      <div
        ref={carouselRef}
        id="portfolio-carousel"
        className="portfolio-carousel"
        role="region"
        aria-label="Проєкти в портфоліо"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            scrollProjects(event.key === "ArrowRight" ? 1 : -1);
          }
        }}
      >
        {projects.map((project) => (
          <div className="project-slide" key={project.title}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <div className="carousel-footer">
        <span>Гортайте, щоб переглянути всі роботи</span>
        <div className="carousel-dots" aria-hidden="true">
          {projects.map((project, i) => (
            <i
              key={project.title}
              className={
                i >= position.index && i < position.index + position.visible
                  ? "active"
                  : ""
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
