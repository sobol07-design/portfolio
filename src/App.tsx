import { motion } from "framer-motion";
import {
  ExternalLink,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { Button } from "./components/ui/button";
import projectOneImage from "./assets/project-1.jpg";
import projectTwoImage from "./assets/project-2.jpg";
import projectThreeImage from "./assets/project-3.jpg";

const projects = [
  {
    title: "Інтерактивний SPA-додаток «Кав'ярня»",
    tech: "React • Vite • Tailwind CSS • Shadcn UI • Framer Motion",
    description:
      "Сучасне веб-меню з преміальним дизайном, ефектами розмиття (Glassmorphism) та плавними інтерфейсними анімаціями під час скролу.",
    link: "https://ok-sobol07-designs-projects.vercel.app",
    image: projectOneImage,
    imageClassName: "opacity-95 brightness-125 saturate-125 contrast-110",
  },
  {
    title: "Корпоративний медичний портал «RGCC»",
    tech: "HTML5 • CSS3 • JavaScript • SEO-Optimized",
    description:
      "Масштабний багатосторінковий сайт з чіткою структурою, адаптивною версткою під мобільні пристрої та оптимізацією швидкості завантаження контенту.",
    link: "https://rgcc-ukraine-onconomics.vercel.app",
    image: projectTwoImage,
    imageClassName: "opacity-80",
  },
  {
    title: "Онлайн-вітрина «Торти Оксана»",
    tech: "No-Code • Weblium • Local SEO",
    description:
      "Живий комерційний проєкт для локального бізнесу. Фокус на зручність замовлення, адаптивність та базову пошукову оптимізацію для Vinnytsia.",
    link: "https://vnoksana.com.ua",
    image: projectThreeImage,
    imageClassName: "opacity-80",
  },
];

const techStack = [
  "React",
  "Vite",
  "Tailwind CSS",
  "Shadcn UI",
  "Framer Motion",
  "HTML5/CSS3",
  "JavaScript",
  "Weblium",
  "Local SEO",
  "Git",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function scrollToContacts() {
  document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_32rem),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_30rem)]" />

      <header className="sticky top-0 z-50 border-b border-zinc-800/70 bg-zinc-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#top"
            className="rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm font-semibold tracking-wide text-zinc-100 shadow-glow backdrop-blur transition hover:border-zinc-700"
          >
            Сергій Соболєв
          </a>
          <div className="flex items-center gap-2">
            <a
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/60 text-zinc-300 backdrop-blur transition hover:border-indigo-400/60 hover:text-white"
              href="https://t.me/Serhii_Soboliev"
              aria-label="Telegram"
            >
              <Send className="h-4 w-4" />
            </a>
            <a
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/60 text-zinc-300 backdrop-blur transition hover:border-emerald-400/60 hover:text-white"
              href="mailto:sobol07@gmail.com"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <Button variant="glass" size="sm" onClick={scrollToContacts}>
              Контакти
            </Button>
          </div>
        </nav>
      </header>

      <div id="top" className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section className="relative grid min-h-[calc(100vh-73px)] items-center gap-10 overflow-hidden rounded-[2rem] px-5 py-16 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-20">
          <div className="pointer-events-none absolute inset-x-[-12rem] top-[-8rem] h-[42rem] bg-[linear-gradient(115deg,transparent_8%,rgba(16,185,129,0.2)_22%,transparent_38%,rgba(99,102,241,0.26)_56%,transparent_74%,rgba(245,158,11,0.16)_92%)] blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_10%,rgba(255,255,255,0.22),transparent_34%),radial-gradient(ellipse_at_18%_56%,rgba(16,185,129,0.18),transparent_32%),radial-gradient(ellipse_at_78%_42%,rgba(99,102,241,0.2),transparent_34%),linear-gradient(to_bottom,transparent,rgba(9,9,11,0.72)_78%)]" />
          <div className="pointer-events-none absolute bottom-10 left-1/2 h-px w-[76rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-100/25 to-transparent shadow-[0_0_90px_24px_rgba(99,102,241,0.18)]" />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-[-18%] top-[18%] h-44 w-[82rem] -rotate-12 bg-gradient-to-r from-transparent via-emerald-300/16 to-transparent blur-2xl"
            animate={{ x: [0, 120, 0], opacity: [0.55, 0.95, 0.55] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-22%] top-[34%] h-52 w-[76rem] rotate-12 bg-gradient-to-r from-transparent via-indigo-300/18 to-transparent blur-2xl"
            animate={{ x: [0, -110, 0], opacity: [0.45, 0.85, 0.45] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10 max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/10 px-4 py-2 text-sm text-indigo-200 backdrop-blur-xl">
              <Sparkles className="h-4 w-4" />
              Premium web design for business
            </div>
            <h1 className="text-5xl font-bold leading-tight text-transparent sm:text-6xl lg:text-7xl bg-gradient-to-br from-white via-zinc-200 to-indigo-300 bg-clip-text">
              Сергій Соболєв
            </h1>
            <p className="mt-5 text-xl font-medium text-zinc-200 sm:text-2xl">
              UX/UI Designer & Web Developer
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              Створюю сучасні, швидкі вебсайти та SPA-додатки з акцентом на
              чистий дизайн, високу швидкість завантаження та конверсію для
              бізнесу.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                variant="glass"
                onClick={scrollToContacts}
                className="border-fuchsia-300/30 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(124,58,237,0.16),rgba(30,27,75,0.18))] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_0_28px_rgba(139,92,246,0.28),0_18px_45px_rgba(0,0,0,0.24)] backdrop-blur-2xl hover:border-fuchsia-200/55 hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(168,85,247,0.24),rgba(79,70,229,0.2))] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.32),0_0_38px_rgba(168,85,247,0.42),0_0_70px_rgba(79,70,229,0.24)]"
              >
                Зв'язатися
              </Button>
              <a
                href="#portfolio"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-fuchsia-300/30 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(124,58,237,0.16),rgba(30,27,75,0.18))] px-6 py-3 text-base font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_0_28px_rgba(139,92,246,0.28),0_18px_45px_rgba(0,0,0,0.24)] backdrop-blur-2xl transition-all duration-300 hover:border-fuchsia-200/55 hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(168,85,247,0.24),rgba(79,70,229,0.2))] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.32),0_0_38px_rgba(168,85,247,0.42),0_0_70px_rgba(79,70,229,0.24)]"
              >
                Дивитися проєкти
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative z-10 rounded-[2rem] border border-zinc-800 bg-zinc-900/50 p-5 shadow-glow backdrop-blur-2xl"
          >
            <div className="rounded-[1.5rem] border border-zinc-800/80 bg-zinc-950/70 p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-500">Availability</span>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Open to projects
                </span>
              </div>
              <div className="mt-10 space-y-5">
                <p className="text-3xl font-semibold text-zinc-100">
                  Landing pages, SPA, business websites
                </p>
                <p className="leading-7 text-zinc-400">
                  Продумана структура, адаптивна верстка, охайні анімації та
                  дизайн, який працює на перше враження.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <RevealSection>
          <section className="py-12">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-indigo-300">
                  Tech Stack
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

        <RevealSection>
          <section id="portfolio" className="py-14">
            <div className="mb-8">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-300">
                Portfolio
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-zinc-100">
                Вибрані проєкти
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-glow"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-zinc-800 via-zinc-900 to-indigo-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${project.imageClassName}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/55 to-transparent" />
                  </div>
                  <div className="flex min-h-[22rem] flex-col p-5">
                    <p className="text-sm font-medium leading-6 text-indigo-300">
                      {project.tech}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold leading-7 text-zinc-100">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 leading-7 text-zinc-400">
                      {project.description}
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
              ))}
            </div>
          </section>
        </RevealSection>

        <RevealSection>
          <footer
            id="contacts"
            className="mb-8 mt-10 rounded-[2rem] border border-zinc-800 bg-zinc-900/70 p-6 backdrop-blur-2xl sm:p-8"
          >
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-indigo-300">
                  Contact
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-zinc-100">
                  Обговоримо ваш сайт або SPA
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
                  Напишіть у зручний канал, і я відповім з фокусом на задачу,
                  бюджет, терміни та найкращий формат реалізації.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <ContactLink href="https://t.me/Serhii_Soboliev" icon={<Send className="h-4 w-4" />}>
                  Telegram
                </ContactLink>
                <ContactLink href="mailto:sobol07@gmail.com" icon={<Mail className="h-4 w-4" />}>
                  Email
                </ContactLink>
                <ContactLink href="viber://chat?number=%2B380674162004" icon={<MessageCircle className="h-4 w-4" />}>
                  Viber
                </ContactLink>
                <ContactLink href="tel:+380674162004" icon={<Phone className="h-4 w-4" />}>
                  +380674162004
                </ContactLink>
              </div>
            </div>
          </footer>
        </RevealSection>
      </div>
    </main>
  );
}

function RevealSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function ContactLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/70 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:border-emerald-400/60 hover:bg-emerald-400/10"
    >
      {icon}
      {children}
    </a>
  );
}

export default App;
