import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data";

export function ExpandedProjects() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <div className="expanded-projects">
      <div className="expanded-toolbar">
        <span>Портфоліо / {String(projects.length).padStart(2, "0")}</span>
        <span>Наведіть на картку, щоб розглянути проєкт</span>
      </div>
      <div className="expanded-rail" role="group" aria-label="Виберіть проєкт">
        {projects.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className={`expanded-panel ${index === active ? "is-active" : ""}`}
            aria-label={item.title}
            aria-pressed={index === active}
            aria-controls="expanded-project-description"
            onPointerEnter={(event) => {
              if (
                event.pointerType === "mouse" &&
                matchMedia("(hover: hover)").matches
              )
                setActive(index);
            }}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
            onKeyDown={(event) => {
              let next = index;
              if (event.key === "ArrowRight")
                next = (index + 1) % projects.length;
              else if (event.key === "ArrowLeft")
                next = (index + projects.length - 1) % projects.length;
              else if (event.key === "Home") next = 0;
              else if (event.key === "End") next = projects.length - 1;
              else return;
              event.preventDefault();
              event.currentTarget.parentElement
                ?.querySelectorAll<HTMLButtonElement>("button")
                [next]?.focus();
            }}
          >
            <img
              src={item.image}
              alt=""
              className={item.imageClassName}
              loading="lazy"
            />
            <span className="expanded-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="expanded-label" aria-hidden="true">
              {
                [
                  "Кав’ярня",
                  "RGCC",
                  "Наталія Біла",
                  "Адвокат",
                  "Нерухомість",
                  "Кондитерська",
                ][index]
              }
            </span>
          </button>
        ))}
      </div>
      <div id="expanded-project-description" className="expanded-description">
        <div className="expanded-heading">
          <p className="project-tech">{project.tech}</p>
          <h3>{project.title}</h3>
          <p className="project-audience">{project.audience}</p>
          <a
            className="expanded-visit"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            Відкрити сайт <ArrowUpRight size={20} />
          </a>
        </div>
        <div className="expanded-copy">
          <p>{project.description}</p>
          <p>
            <strong>Що дає бізнесу</strong>
            {project.result}
          </p>
        </div>
      </div>
    </div>
  );
}
