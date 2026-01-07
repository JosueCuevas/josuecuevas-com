import { useEffect } from "react";

import { codes } from "src/assets/hispanic.codes.json";

import Footer from "./components/organisms/Footer";
import Header from "./components/organisms/Header";

import { useLanguageStore } from "./hooks/useLanguageStore";

import About from "./views/About";
import Contact from "./views/Contact";
import HeroImage from "./views/HeroImage";
import Portfolio from "./views/Portfolio";
import Skills from "./views/Skills";

function App() {
  const { handleLang } = useLanguageStore();
  useEffect(() => {
    const setLanguageByLocation = async () => {
      try {
        const res = await fetch("https://api.ipify.org/?format=json");
        if (!res.ok) {
          throw new Error(`Response status: ${res.status}`);
        }
        const r: { ip: string } = await res.json();
        const info = await fetch(`https://ip.guide/${r.ip}`);
        if (!info.ok) {
          throw new Error(`Response status: ${res.status}`);
        }
        const i = await info.json();
        const country = i.network.autonomous_system.country;
        if (!codes.includes(country)) handleLang("en");
      } catch (error) {
        console.error(
          error instanceof Error ? error.message : "Algo salió mal"
        );
      }
    };

    setLanguageByLocation();
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroImage />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
