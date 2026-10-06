import { ArrowUpRight } from "lucide-react";
import type { projects } from "../data";
type Project = (typeof projects)[number];
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <a
        className="project-preview"
        href={project.link}
        target="_blank"
        rel="noreferrer"
        aria-label={`Відкрити: ${project.title}`}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className={project.imageClassName}
        />
        <span className="preview-arrow">
          <ArrowUpRight size={22} />
        </span>
      </a>
      <div className="project-body">
        <p className="project-tech">{project.tech}</p>
        <h3>{project.title}</h3>
        <p className="project-audience">{project.audience}</p>
        <p className="project-description">{project.description}</p>
        <details className="project-result">
          <summary>Що дає бізнесу</summary>
          <p>{project.result}</p>
        </details>
        <a
          className="project-link"
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          Відкрити сайт <ArrowUpRight size={18} />
        </a>
      </div>
    </article>
  );
}
