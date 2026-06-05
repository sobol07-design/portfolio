import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import { RevealSection } from "./RevealSection";

export function Contacts() {
  return (
    <RevealSection>
      <footer
        id="contacts"
        className="mb-8 mt-10 rounded-[2rem] border border-zinc-800 bg-zinc-900/70 p-6 backdrop-blur-2xl sm:p-8"
      >
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-indigo-300">
              Контакти
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-100">
              Обговоримо ваш сайт або SPA
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
              Напишіть у зручний канал, і я відповім з фокусом на задачу, бюджет,
              терміни та найкращий формат реалізації.
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
