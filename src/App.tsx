import { Contacts } from "./components/Contacts";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { TechStack } from "./components/TechStack";

function scrollToContacts() {
  document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_32rem),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_30rem)]" />

      <Header onContactClick={scrollToContacts} />

      <div id="top" className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Hero onContactClick={scrollToContacts} />
        <TechStack />
        <Portfolio />
        <Contacts />
      </div>
    </main>
  );
}

export default App;
