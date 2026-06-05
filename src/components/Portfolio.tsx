import { projects } from "../data";
import { ProjectCard } from "./ProjectCard";
import { RevealSection } from "./RevealSection";

export function Portfolio() {
  return (
    <RevealSection>
      <section id="portfolio" className="py-14">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-300">
            Портфоліо
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-zinc-100">
            Вибрані проєкти з фокусом на результат
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </RevealSection>
  );
}
