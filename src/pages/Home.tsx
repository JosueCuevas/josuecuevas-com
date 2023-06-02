import React from "react";
import Header from "../components/header/Header";
import HeroImage from "../components/hero-image/HeroImage";
import About from "../components/about/About";
import Portfolio from "../components/portfolio/Portfolio";
import Services from "../components/services/Services";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <HeroImage />
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
