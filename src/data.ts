import projectOneImage from "./assets/project-1.jpg";
import projectTwoImage from "./assets/project-2.jpg";
import projectThreeImage from "./assets/project-3-nataliya-bila.webp";

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
    title: "Агентство нерухомості Наталії Білої",
    audience: "Для преміального агентства нерухомості у Вінниці",
    result:
      "Об'єднує імідж експертки, каталог із розширеними фільтрами та заявки на консультацію в єдиному клієнтському шляху.",
    tech: "React • Каталог нерухомості • Розширені фільтри • Lead generation",
    description:
      "Створено преміальний сайт агентства з об'єктами для купівлі й оренди, персональним брендом, послугами, відгуками та формами звернення.",
    link: "https://nataliyabila.com.ua",
    image: projectThreeImage,
    imageClassName: "opacity-90 saturate-110",
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
