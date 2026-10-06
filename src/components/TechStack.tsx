import { techStack } from "../data";
export function TechStack() {
  return (
    <section id="technologies" className="tech-section">
      <h2>Дизайн і технології для вебу</h2>
      <div className="tech-list">
        {techStack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </section>
  );
}
