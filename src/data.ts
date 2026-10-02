import projectOneImage from "./assets/project-1.jpg";
import projectTwoImage from "./assets/project-2.jpg";
import projectThreeImage from "./assets/project-3-nataliya-bila.webp";
import projectFourImage from "./assets/project-4-herasymyshyna.webp";
import projectFiveImage from "./assets/project-5-vinestate.jpg";
import projectSixImage from "./assets/project-6-oksana-cake.webp";

export const projects = [
  {
    title: "Інтерактивний SPA-додаток «Кав'ярня»",
    audience: "Для кав'ярень, ресторанів і локальних закладів",
    result: "Знайомить із меню та атмосферою закладу й веде від перегляду до замовлення.",
    tech: "Вебзастосунок • Інтерактивне меню • Адаптивний дизайн",
    description:
      "Розроблено адаптивну головну сторінку, меню та візуальну систему з плавними анімаціями.",
    link: "https://ok-sobol07-designs-projects.vercel.app",
    image: projectOneImage,
    imageClassName: "opacity-95 brightness-125 saturate-125 contrast-110",
  },
  {
    title: "Корпоративний медичний портал «RGCC»",
    audience: "Для медичної компанії з багатосторінковою структурою",
    result: "Допомагає пацієнтам швидко знайти потрібну інформацію та послуги.",
    tech: "Медичний портал • Багатосторінковий сайт • SEO",
    description:
      "Продумано структуру розділів, мобільну версію та зрозумілу подачу медичних послуг.",
    link: "https://rgcc-ukraine-onconomics.vercel.app",
    image: projectTwoImage,
    imageClassName: "opacity-80",
  },
  {
    title: "Агентство нерухомості Наталії Білої",
    audience: "Для преміального агентства нерухомості у Вінниці",
    result:
      "Поєднує каталог нерухомості, експертний контент і запис на консультацію.",
    tech: "Сайт агентства • Каталог нерухомості • Фільтри",
    description:
      "Каталог продажу й оренди, сторінки послуг, відгуків і форми звернення об'єднано в одному сайті.",
    link: "https://nataliyabila.com.ua",
    image: projectThreeImage,
    imageClassName: "opacity-90 saturate-110",
  },
  {
    title: "Сайт адвоката Тетяни Герасимишиної",
    audience: "Для адвокатської практики у Вінниці",
    result:
      "Пояснює юридичні послуги й спрощує запис на консультацію.",
    tech: "Сайт адвоката • SEO • Онлайн-запис",
    description:
      "Послуги, вартість, відповіді на поширені запитання та експертні матеріали зібрано в одному сайті.",
    link: "https://www.advokat-herasymyshyna.com.ua",
    image: projectFourImage,
    imageClassName: "object-top opacity-95 saturate-110",
  },
  {
    title: "Каталог нерухомості «Власна Нерухомість»",
    audience: "Для агенції нерухомості у Вінниці",
    result:
      "Допомагає підібрати об'єкт за параметрами та зв'язатися з агенцією.",
    tech: "Каталог нерухомості • Пошук і фільтри • Локальне SEO",
    description:
      "Картки об'єктів, фільтри за параметрами та контакти агенції об'єднано в зручному каталозі.",
    link: "https://vinestate-catalog.vercel.app/",
    image: projectFiveImage,
    imageClassName: "opacity-90 saturate-110",
  },
  {
    title: "Сайт домашньої кондитерської Оксани Малихіної",
    audience: "Для кондитерської з тортами й десертами на замовлення у Вінниці",
    result:
      "Знайомить із десертами й допомагає надіслати замовлення онлайн.",
    tech: "Сайт кондитерської • Каталог десертів • Замовлення онлайн",
    description:
      "Каталог тортів, десертів, шоколаду й подарункових наборів доповнено відгуками та формою замовлення.",
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
