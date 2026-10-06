import { Contacts } from "./components/Contacts";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { TechStack } from "./components/TechStack";
function scrollToContacts() {
  document
    .getElementById("contacts")
    ?.scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
}
function App() {
  return (
    <>
      <a className="skip-link" href="#portfolio">
        Перейти до робіт
      </a>
      <Header onContactClick={scrollToContacts} />
      <main id="top" className="site-content">
        <Hero onContactClick={scrollToContacts} />
        <Portfolio />
        <TechStack />
        <Contacts />
      </main>
    </>
  );
}
export default App;
