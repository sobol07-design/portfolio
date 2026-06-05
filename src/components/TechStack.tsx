import { techStack } from "../data";
import { RevealSection } from "./RevealSection";

export function TechStack() {
  return (
    <RevealSection>
      <section className="py-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-indigo-300">
              Технології
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-100">
              Інструменти для швидких, охайних інтерфейсів
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-indigo-400/50 hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </RevealSection>
  );
}
