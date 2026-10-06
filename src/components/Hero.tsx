import { ArrowDown, ArrowUpRight } from "lucide-react";
import portrait from "../assets/serhii-portrait.png";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
export function Hero({ onContactClick }: { onContactClick: () => void }) {
  const section = useRef<HTMLElement>(null);
  const [height, setHeight] = useState(800);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!section.current) return;
    const observer = new ResizeObserver(([entry]) =>
      setHeight(entry.contentRect.height),
    );
    observer.observe(section.current);
    return () => observer.disconnect();
  }, []);
  const { scrollY } = useScroll();
  const scrollYProgress = useTransform(scrollY, [0, height], [0, 1]);
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const copyTransform = useTransform(
    progress,
    [0, 1],
    ["translateY(0px) scale(1)", "translateY(-64px) scale(0.96)"],
  );
  const portraitTransform = useTransform(
    progress,
    [0, 1],
    ["translateY(0px) scale(1)", "translateY(48px) scale(0.94)"],
  );
  const opacity = useTransform(progress, [0, 0.8], [1, 0.4]);
  return (
    <section ref={section} className="hero" aria-labelledby="hero-title">
      <motion.div
        className="hero-copy"
        style={reduced ? undefined : { transform: copyTransform, opacity }}
      >
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
      </motion.div>
      <motion.figure
        className="hero-portrait"
        style={reduced ? undefined : { transform: portraitTransform, opacity }}
      >
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
      </motion.figure>
    </section>
  );
}
