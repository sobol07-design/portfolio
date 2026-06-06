import projectOneImage from "./assets/project-1.jpg";
import projectTwoImage from "./assets/project-2.jpg";
import projectThreeImage from "./assets/project-3-vinestate.png";

export const projects = [
  {
    title: "Інтерактивний SPA-додаток «Кав'ярня»",
    audience: "Для кав'ярень, ресторанів і локальних закладів",
    result: "Допомагає швидко показати меню, атмосферу бренду та підвести гостя до замовлення.",
    tech: "React • Vite • Tailwind CSS • Shadcn UI • Framer Motion",
    description:
      "Зроблено адаптивний SPA-інтерфейс, преміальну візуальну подачу, glassmorphism-ефекти та плавні анімації під час скролу.",
    link: "https://ok-sobol07-designs-projects.vercel.app",
    image: projectOneImage,
    imageClassName: "opacity-95 brightness-125 saturate-125 contrast-110",
  },
  {
    title: "Корпоративний медичний портал «RGCC»",
    audience: "Для медичної компанії з багатосторінковою структурою",
    result: "Полегшує навігацію пацієнта, підвищує довіру та швидше веде до потрібної інформації.",
    tech: "HTML5 • CSS3 • JavaScript • SEO",
    description:
      "Зібрано чітку структуру сторінок, мобільну адаптацію, оптимізоване завантаження контенту та зрозумілу подачу послуг.",
    link: "https://rgcc-ukraine-onconomics.vercel.app",
    image: projectTwoImage,
    imageClassName: "opacity-80",
  },
  {
    title: "Каталог нерухомості «Власна Нерухомість»",
    audience: "Для агенції нерухомості у Вінниці",
    result:
      "Допомагає клієнтам швидко відфільтрувати об'єкти за типом угоди, нерухомості, районом і ціною та перейти до консультації.",
    tech: "React • Vite • Tailwind CSS • Адаптивний каталог",
    description:
      "Створено преміальний сайт із каталогом квартир, будинків, земельних ділянок і комерційних об'єктів, фільтрами підбору та прямими CTA для зв'язку з агенцією.",
    link: "https://vinestate-catalog.vercel.app/#catalog",
    image: projectThreeImage,
    imageClassName: "opacity-95",
  },
];

export const techStack = [
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
