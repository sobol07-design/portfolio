import { Mail, Send } from "lucide-react";
import { Button } from "./ui/button";

export function Header({ onContactClick }: { onContactClick: () => void }) {
  return (
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
          <Button variant="glass" size="sm" onClick={onContactClick}>
            Контакти
          </Button>
        </div>
      </nav>
    </header>
  );
}
