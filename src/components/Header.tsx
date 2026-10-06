import { ArrowUpRight } from "lucide-react";
export function Header({ onContactClick }: { onContactClick: () => void }) {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Основна навігація">
        <a className="wordmark" href="#top">
          <span className="brand-symbol">S.</span>Сергій Соболєв
        </a>
        <div className="nav-links">
          <a href="#portfolio">Роботи</a>
          <a href="#technologies">Технології</a>
          <button onClick={onContactClick}>
            Контакти <ArrowUpRight size={16} />
          </button>
        </div>
      </nav>
    </header>
  );
}
