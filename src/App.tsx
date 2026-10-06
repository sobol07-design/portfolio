import { Contacts } from "./components/Contacts";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { TechStack } from "./components/TechStack";
import { RevealSection } from "./components/RevealSection";
function scrollToContacts() {
  document.getElementById("contacts")?.scrollIntoView({
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
      <div className="ambient-light" aria-hidden="true">
        <div className="blue-light" />
        <div className="amber-light" />
      </div>
      <Header onContactClick={scrollToContacts} />
      <main id="top" className="site-content">
        <div className="hero-stage">
          <Hero onContactClick={scrollToContacts} />
        </div>
        <div className="content-stage">
          <RevealSection>
            <Portfolio />
          </RevealSection>
          <RevealSection>
            <TechStack />
          </RevealSection>
          <RevealSection>
            <Contacts />
          </RevealSection>
        </div>
      </main>
    </>
  );
}
export default App;
