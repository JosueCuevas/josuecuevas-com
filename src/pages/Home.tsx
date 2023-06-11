import React, { useContext } from "react";
import Header from "../components/header/Header";
import HeroImage from "../components/hero-image/HeroImage";
import About from "../components/about/About";
import Portfolio from "../components/portfolio/Portfolio";
import Services from "../components/services/Services";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import { LangContext } from "../context/LangContext";

import es from "../assets/locales/es.json";
import en from "../assets/locales/en.json";

const Home: React.FC = () => {
  const { lang } = useContext(LangContext);
  const resources = lang === "es" ? es : en;
  return (
    <>
      <Header header={resources.header} />
      <main>
        <HeroImage heroImage={resources.heroImage} />
        <About about={resources.about} />
        <Portfolio portfolio={resources.portfolio} />
        <Services services={resources.services} />
        <Contact contact={resources.contact} />
      </main>
      <Footer footer={resources.footer} nav={resources.header.nav} />
    </>
  );
};

export default Home;
