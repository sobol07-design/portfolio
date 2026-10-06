import { ArrowDown, ArrowUpRight } from "lucide-react";
import portrait from "../assets/serhii-portrait.png";
export function Hero({ onContactClick }: { onContactClick: () => void }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-role">UX/UI дизайнер і веброзробник</p>
        <h1 id="hero-title">
          Створюю сайти для <span>розвитку</span> бізнесу.
        </h1>
        <p className="hero-description">
          Я Сергій Соболєв. Проєктую та розробляю адаптивні вебсайти й цифрові
          продукти — з продуманою структурою, виразним дизайном і зрозумілим
          шляхом до звернення.
        </p>
        <div className="hero-actions">
          <button className="primary-action" onClick={onContactClick}>
            Обговорити проєкт <ArrowUpRight size={20} />
          </button>
          <a className="text-action" href="#portfolio">
            Переглянути роботи <ArrowDown size={18} />
          </a>
        </div>
      </div>
      <figure className="hero-portrait">
        <div className="portrait-frame">
          <img
            src={portrait}
            alt="Сергій Соболєв, UX/UI дизайнер та веброзробник"
            fetchPriority="high"
          />
        </div>
        <figcaption>
          <div>
            <strong>Сергій Соболєв</strong>
            <span>UX/UI та веброзробка</span>
          </div>
          <p className="availability">
            <i />
            Відкритий до проєктів
          </p>
        </figcaption>
      </figure>
    </section>
  );
}
