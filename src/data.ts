import projectOneImage from "./assets/project-1.jpg";
import projectTwoImage from "./assets/project-2.jpg";
import projectThreeImage from "./assets/project-3-nataliya-bila.webp";
import projectFourImage from "./assets/project-4-herasymyshyna.webp";
import projectFiveImage from "./assets/project-5-vinestate.jpg";
import projectSixImage from "./assets/project-6-oksana.webp";

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
  {
    title: "Сайт адвоката Тетяни Герасимишиної",
    audience: "Для адвокатської практики у Вінниці",
    result:
      "Пояснює юридичні послуги, формує довіру до адвоката й допомагає звернутися по консультацію.",
    tech: "Адаптивний вебдизайн • SEO • Telegram-запис",
    description:
      "Створено сайт із напрямами юридичної допомоги, прозорою вартістю послуг, відповідями на часті запитання та експертними матеріалами.",
    link: "https://www.advokat-herasymyshyna.com.ua",
    image: projectFourImage,
    imageClassName: "object-top opacity-95 saturate-110",
  },
  {
    title: "Каталог нерухомості «Власна Нерухомість»",
    audience: "Для агенції нерухомості у Вінниці",
    result:
      "Збирає об'єкти в зручному каталозі та допомагає покупцям і орендарям швидше знайти потрібне й звернутися до агенції.",
    tech: "Каталог нерухомості • Фільтри • Локальне SEO",
    description:
      "Створено каталог із фільтрами за типом угоди, нерухомості, районом і ціною, картками об'єктів та прямим зв'язком з агенцією.",
    link: "https://vinestate-catalog.vercel.app/",
    image: projectFiveImage,
    imageClassName: "opacity-90 saturate-110",
  },
  {
    title: "Сайт домашньої кондитерської Оксани Малихіної",
    audience: "Для кондитерської з тортами й десертами на замовлення у Вінниці",
    result:
      "Допомагає показати асортимент і відгуки, щоб клієнтам було легко обрати десерт і залишити замовлення.",
    tech: "Weblium • Каталог десертів • Форми замовлення • Local SEO",
    description:
      "Оформлено сторінки тортів, десертів, шоколаду й подарункових наборів, додано відгуки, контакти та форму замовлення.",
    link: "https://vnoksana.com.ua/",
    image: projectSixImage,
    imageClassName: "opacity-95 saturate-110",
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
