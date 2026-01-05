import Footer from "./components/organisms/Footer";
import Header from "./components/organisms/Header";
import About from "./views/About";
import Contact from "./views/Contact";
import HeroImage from "./views/HeroImage";
import Portfolio from "./views/Portfolio";
import Skills from "./views/Skills";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroImage />
        <About />
        <Portfolio />
        {/* <Services /> */}
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
