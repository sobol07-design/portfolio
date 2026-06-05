import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { fadeInUp } from "../animations";
import { Button } from "./ui/button";

const ctaGlow =
  "border-fuchsia-300/30 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(124,58,237,0.16),rgba(30,27,75,0.18))] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_0_28px_rgba(139,92,246,0.28),0_18px_45px_rgba(0,0,0,0.24)] backdrop-blur-2xl hover:border-fuchsia-200/55 hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(168,85,247,0.24),rgba(79,70,229,0.2))] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.32),0_0_38px_rgba(168,85,247,0.42),0_0_70px_rgba(79,70,229,0.24)]";

export function Hero({ onContactClick }: { onContactClick: () => void }) {
  return (
    <section className="relative grid min-h-[calc(100vh-73px)] items-center gap-10 overflow-hidden rounded-[2rem] px-5 py-16 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-20">
      <div className="pointer-events-none absolute inset-x-[-12rem] top-[-8rem] h-[42rem] bg-[linear-gradient(115deg,transparent_8%,rgba(16,185,129,0.2)_22%,transparent_38%,rgba(99,102,241,0.26)_56%,transparent_74%,rgba(245,158,11,0.16)_92%)] blur-3xl" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]"
        animate={{ backgroundPosition: ["0rem 0rem", "4rem 4rem"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_10%,rgba(255,255,255,0.22),transparent_34%),radial-gradient(ellipse_at_18%_56%,rgba(16,185,129,0.18),transparent_32%),radial-gradient(ellipse_at_78%_42%,rgba(99,102,241,0.2),transparent_34%),linear-gradient(to_bottom,transparent,rgba(9,9,11,0.72)_78%)]"
        animate={{ opacity: [0.72, 0.95, 0.72], scale: [1, 1.025, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
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
        <motion.div
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/10 px-4 py-2 text-sm text-indigo-200 backdrop-blur-xl"
          animate={{ y: [0, -4, 0], opacity: [0.86, 1, 0.86] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.span
            animate={{ rotate: [0, 10, -8, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="h-4 w-4" />
          </motion.span>
          Преміальний вебдизайн для бізнесу
        </motion.div>
        <h1 className="bg-gradient-to-br from-white via-zinc-200 to-indigo-300 bg-clip-text text-5xl font-bold leading-tight text-transparent sm:text-6xl lg:text-7xl">
          Сергій Соболєв
        </h1>
        <p className="mt-5 text-xl font-medium text-zinc-200 sm:text-2xl">
          UX/UI дизайнер та веброзробник
        </p>
        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
          Створюю сучасні, швидкі вебсайти та SPA-додатки з акцентом на чистий дизайн,
          високу швидкість завантаження та конверсію для бізнесу.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            variant="glass"
            onClick={onContactClick}
            className={`motion-safe:animate-[pulse_4s_ease-in-out_infinite] ${ctaGlow}`}
          >
            Обговорити проєкт
          </Button>
          <a
            href="#portfolio"
            className={`inline-flex min-h-12 items-center justify-center rounded-full border px-6 py-3 text-base font-medium transition-all duration-300 motion-safe:animate-[pulse_4s_ease-in-out_infinite] ${ctaGlow}`}
          >
            Дивитися проєкти
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.15, ease: "easeOut" },
          scale: { duration: 0.8, delay: 0.15, ease: "easeOut" },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative z-10 rounded-[2rem] border border-zinc-800 bg-zinc-900/50 p-5 shadow-glow backdrop-blur-2xl"
      >
        <div className="rounded-[1.5rem] border border-zinc-800/80 bg-zinc-950/70 p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-zinc-500">Доступність</span>
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
              Відкритий до проєктів
            </span>
          </div>
          <div className="mt-10 space-y-5">
            <p className="text-3xl font-semibold text-zinc-100">
              Лендинги, SPA та бізнес-сайти
            </p>
            <p className="leading-7 text-zinc-400">
              Продумана структура, адаптивна верстка, охайні анімації та дизайн,
              який працює на перше враження.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
