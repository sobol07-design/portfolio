import { ExternalLink } from "lucide-react";
import type { projects } from "../data";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-glow">
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-zinc-800 via-zinc-900 to-indigo-950">
        <img
          src={project.image}
          alt={project.title}
          className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${project.imageClassName}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/55 to-transparent" />
      </div>
      <div className="flex min-h-[25rem] flex-col p-5">
        <p className="text-sm font-medium leading-6 text-indigo-300">{project.tech}</p>
        <h3 className="mt-3 text-xl font-semibold leading-7 text-zinc-100">
          {project.title}
        </h3>
        <p className="mt-3 text-sm font-medium text-emerald-300">{project.audience}</p>
        <p className="mt-3 leading-7 text-zinc-400">{project.description}</p>
        <p className="mt-4 flex-1 rounded-xl border border-zinc-800 bg-zinc-950/55 p-4 text-sm leading-6 text-zinc-300">
          <span className="font-semibold text-zinc-100">Користь для бізнесу: </span>
          {project.result}
        </p>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-950/70 px-4 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-indigo-400/60 hover:bg-indigo-500/10"
        >
          Відкрити сайт
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
