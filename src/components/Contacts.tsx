import { ArrowUpRight, Mail, MessageCircle, Phone, Send } from "lucide-react";
export function Contacts() {
  const links = [
    { href: "https://t.me/Serhii_Soboliev", label: "Telegram", Icon: Send },
    {
      href: "mailto:sobol07@gmail.com",
      label: "sobol07@gmail.com",
      Icon: Mail,
    },
    {
      href: "viber://chat?number=%2B380674162004",
      label: "Viber",
      Icon: MessageCircle,
    },
    { href: "tel:+380674162004", label: "+380 67 416 20 04", Icon: Phone },
  ];
  return (
    <footer id="contacts" className="contacts-section">
      <div className="contact-intro">
        <h2>
          Є ідея
          <br />
          для <span>сайту?</span>
        </h2>
        <p>
          Розкажіть, що потрібно вашому бізнесу. Обговоримо цілі, бюджет,
          терміни й відповідний формат реалізації.
        </p>
      </div>
      <div className="contact-links">
        {links.map(({ href, label, Icon }) => (
          <a
            key={href}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
          >
            <span>
              <Icon size={19} />
              {label}
            </span>
            <ArrowUpRight size={22} />
          </a>
        ))}
      </div>
      <div className="footer-signature">
        <span>Сергій Соболєв</span>
        <span>UX/UI дизайн · Веброзробка</span>
        <a href="#top">Нагору ↑</a>
      </div>
    </footer>
  );
}
